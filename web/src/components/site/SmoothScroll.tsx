"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Global motion controller.
 *  - Lenis      -> smooth scroll
 *  - GSAP/ScrollTrigger -> scroll-driven reveals (transform + opacity only)
 *
 * Everything is wrapped in gsap.matchMedia("(prefers-reduced-motion:
 * no-preference)"), so users who ask for reduced motion get native scroll
 * and fully-visible content (the CSS media query also hard-guarantees this).
 * Reveals are lazy by nature: ScrollTrigger only animates each element as it
 * enters the viewport, so below-the-fold work never runs up front.
 */
export default function SmoothScroll() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const root = document.documentElement;
      root.classList.add("reveal-ready");

      // --- Lenis smooth scroll, driven by the GSAP ticker for one rAF loop ---
      const lenis = new Lenis({
        duration: 1.05,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });
      lenis.on("scroll", ScrollTrigger.update);
      const raf = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);

      // In-page anchor navigation routed through Lenis.
      const onAnchorClick = (e: MouseEvent) => {
        const link = (e.target as HTMLElement)?.closest<HTMLAnchorElement>(
          'a[href^="#"]',
        );
        if (!link) return;
        const id = link.getAttribute("href");
        if (!id || id === "#") return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        lenis.scrollTo(target as HTMLElement, { offset: -76 });
      };
      document.addEventListener("click", onAnchorClick);

      // --- Scroll reveals (fade + slight rise, staggered across siblings) ---
      const reveals = gsap.utils.toArray<HTMLElement>("[data-reveal]");
      gsap.set(reveals, { opacity: 0, y: 22 });
      const batch = ScrollTrigger.batch(reveals, {
        start: "top 88%",
        once: true,
        onEnter: (els) =>
          gsap.to(els, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            stagger: 0.08,
            overwrite: true,
          }),
      });

      // Recompute positions once fonts/layout settle.
      const refresh = () => ScrollTrigger.refresh();
      window.addEventListener("load", refresh);
      const refreshTimer = window.setTimeout(refresh, 350);

      return () => {
        document.removeEventListener("click", onAnchorClick);
        window.removeEventListener("load", refresh);
        window.clearTimeout(refreshTimer);
        batch.forEach((st) => st.kill());
        gsap.ticker.remove(raf);
        lenis.destroy();
        root.classList.remove("reveal-ready");
      };
    });

    return () => mm.revert();
  }, []);

  return null;
}
