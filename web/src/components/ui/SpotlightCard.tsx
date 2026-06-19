"use client";

import { useCallback, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type SpotlightCardProps = React.HTMLAttributes<HTMLElement> & {
  /** radius of the glow in px */
  glow?: number;
  /** peak alpha of the amber glow (0–1) */
  intensity?: number;
};

/**
 * Card wrapper with a cursor-follow spotlight. A low-opacity #ffb600 radial
 * gradient overlay is positioned via CSS custom properties (updated on
 * pointer move, rAF-throttled) and revealed by fading its OPACITY on hover —
 * never an animated box-shadow, so it stays cheap to composite.
 *
 * The overlay sits behind the card content (negative z within an isolated
 * stacking context) and is pointer-transparent. Under prefers-reduced-motion
 * the overlay and listeners are skipped; the card keeps its data-reveal and
 * existing hover behavior untouched.
 */
export function SpotlightCard({
  className,
  children,
  glow = 240,
  intensity = 0.14,
  ...rest
}: SpotlightCardProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const raf = useRef(0);

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el || raf.current) return;
    const { clientX, clientY } = e;
    raf.current = requestAnimationFrame(() => {
      raf.current = 0;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--spot-x", `${clientX - r.left}px`);
      el.style.setProperty("--spot-y", `${clientY - r.top}px`);
    });
  }, []);

  return (
    <article
      ref={ref}
      onPointerMove={reduce ? undefined : onPointerMove}
      className={cn("group relative isolate", className)}
      {...rest}
    >
      {!reduce && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 rounded-[inherit] opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
          style={{
            background: `radial-gradient(${glow}px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(255,182,0,${intensity}), transparent 72%)`,
          }}
        />
      )}
      {children}
    </article>
  );
}
