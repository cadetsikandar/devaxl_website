"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHead } from "./SectionHead";

const STEPS = [
  { n: "01", title: "Discovery", body: "We pressure-test the problem, scope, and success metrics before a line of code." },
  { n: "02", title: "Design", body: "Flows and interfaces designed against the real product, not throwaway mockups." },
  { n: "03", title: "Build", body: "Senior engineers ship in tight, demoable increments you can use every week." },
  { n: "04", title: "Launch", body: "Production-hardened release — monitoring, CI/CD, and a runbook from day one." },
  { n: "05", title: "Scale", body: "We stay on to optimize, harden, and extend as your user base grows." },
];

export function Process() {
  const railRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    // Desktop: horizontal line draws left -> right.
    mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
      const line = rail.querySelector<HTMLElement>(".rail-line");
      if (!line) return;
      const tween = gsap.fromTo(
        line,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: { trigger: rail, start: "top 78%", end: "bottom 65%", scrub: 0.5 },
        },
      );
      return () => tween.scrollTrigger?.kill();
    });

    // Mobile: vertical line draws top -> bottom.
    mm.add("(max-width: 767px) and (prefers-reduced-motion: no-preference)", () => {
      const line = rail.querySelector<HTMLElement>(".rail-line-v");
      if (!line) return;
      const tween = gsap.fromTo(
        line,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: { trigger: rail, start: "top 75%", end: "bottom 80%", scrub: 0.5 },
        },
      );
      return () => tween.scrollTrigger?.kill();
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="process" className="border-b border-faint py-24 max-md:py-16">
      <div className="wrap">
        <SectionHead eyebrow="How we work" title="A clear path from idea to scale." />

        <div
          ref={railRef}
          className="relative grid grid-cols-5 max-md:flex max-md:flex-col max-md:gap-8"
        >
          {/* Desktop connecting line */}
          <span
            aria-hidden
            className="rail-line absolute left-[6%] right-[6%] top-[13px] h-px max-md:hidden"
            style={{
              background:
                "linear-gradient(90deg, var(--line), var(--amber-400), var(--line))",
            }}
          />
          {/* Mobile connecting line */}
          <span
            aria-hidden
            className="rail-line-v absolute left-[13px] top-[6px] bottom-[6px] hidden w-px max-md:block"
            style={{
              background:
                "linear-gradient(180deg, var(--line), var(--amber-400), var(--line))",
            }}
          />

          {STEPS.map((s) => (
            <div
              key={s.n}
              data-reveal
              className="relative px-4 max-md:grid max-md:grid-cols-[26px_1fr] max-md:gap-x-[18px] max-md:px-0"
            >
              <div className="relative z-[2] flex size-[26px] items-center justify-center rounded-full border border-accent bg-surface-2 font-mono text-[11px] font-semibold text-accent max-md:row-span-2">
                {s.n}
              </div>
              <h3 className="mt-5 text-[20px] font-semibold tracking-[-0.01em] max-md:mt-0">
                {s.title}
              </h3>
              <p className="mt-[9px] text-[14px] leading-normal text-secondary max-md:mt-1.5">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
