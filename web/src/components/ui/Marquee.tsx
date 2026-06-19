"use client";

import { useReducedMotion } from "framer-motion";

/**
 * Infinite marquee. Renders the children twice and translates the track by
 * -50% on a CSS loop (transform only). Reduced motion -> static, wrapped row.
 */
export function Marquee({
  children,
  speed = 38,
}: {
  children: React.ReactNode;
  speed?: number;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className="flex flex-wrap items-center gap-x-10 gap-y-4 opacity-55">
        {children}
      </div>
    );
  }

  return (
    <div
      className="group relative flex overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
      }}
    >
      <div
        className="flex shrink-0 items-center gap-12 pr-12 opacity-55 [animation:marquee_linear_infinite] group-hover:[animation-play-state:paused]"
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
      </div>
      <div
        aria-hidden
        className="flex shrink-0 items-center gap-12 pr-12 opacity-55 [animation:marquee_linear_infinite] group-hover:[animation-play-state:paused]"
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
      </div>
    </div>
  );
}
