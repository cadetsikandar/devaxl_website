"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Global motion controller, shared across all routes via the root layout.
 *  - Lenis      -> smooth scroll (created once, persists across navigation)
 *  - GSAP/ScrollTrigger -> scroll-driven reveals (transform + opacity only)
 *
 * Reveals are rebuilt on every route change: App Router swaps the page
 * children under a persistent layout, so a one-time setup would leave new
 * pages' [data-reveal] elements stuck hidden. The per-route effect re-scans,
 * resets scroll to top, and refreshes ScrollTrigger.
 *
 * Everything sits behind "(prefers-reduced-motion: no-preference)"; reduced
 * motion users get native scroll and fully-visible content (the CSS media
 * query hard-guarantees visibility regardless).
 */
export default function SmoothScroll() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  // Lenis + global wiring — once.
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const root = document.documentElement;
      root.classList.add("reveal-ready");

      const lenis = new Lenis({
        duration: 1.05,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });
      lenisRef.current = lenis;
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

      return () => {
        document.removeEventListener("click", onAnchorClick);
        gsap.ticker.remove(raf);
        lenis.destroy();
        lenisRef.current = null;
        root.classList.remove("reveal-ready");
      };
    });

    return () => mm.revert();
  }, []);

  // Per-route: reset scroll + (re)build reveals for the new page.
  //
  // Reveals are driven by IntersectionObserver, NOT ScrollTrigger.batch: IO
  // reads real layout/scroll position, so it can't "miss" an element on a fast
  // or Lenis-driven scroll (the bug that left sections stuck at opacity:0). GSAP
  // still does the actual fade/rise tween. A timed safety net force-reveals any
  // element that somehow stays hidden, so content is never invisible.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    if (!window.location.hash) {
      lenisRef.current?.scrollTo(0, { immediate: true });
      window.scrollTo(0, 0);
    }

    const reveals = gsap.utils.toArray<HTMLElement>("[data-reveal]");
    gsap.set(reveals, { opacity: 0, y: 22 });

    const show = (el: HTMLElement) =>
      gsap.to(el, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", overwrite: true });

    const io = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            show(entry.target as HTMLElement);
            obs.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.01 },
    );
    reveals.forEach((el) => io.observe(el));

    // Safety net: rescue any element that is already in/above the viewport but
    // somehow still hidden. Below-fold elements stay observed (reveal on scroll).
    const safety = window.setTimeout(() => {
      reveals.forEach((el) => {
        if (
          parseFloat(getComputedStyle(el).opacity) < 0.05 &&
          el.getBoundingClientRect().top < window.innerHeight
        ) {
          io.unobserve(el);
          show(el);
        }
      });
    }, 2000);

    return () => {
      window.clearTimeout(safety);
      io.disconnect();
    };
  }, [pathname]);

  return null;
}
