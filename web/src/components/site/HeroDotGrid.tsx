"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

/**
 * Interactive dot-grid layer for the hero background.
 *  - A barely-visible static dot grid (pure CSS gradient — no image, so it
 *    never becomes/affects the LCP element).
 *  - A faint #ffb600 glow that follows the cursor, moved with transform only
 *    and screen-blended so dots brighten to amber under it.
 *
 * Sits BEHIND all hero content (pointer-events: none). The cursor glow and its
 * listeners are skipped entirely under prefers-reduced-motion; the static grid
 * remains (it doesn't move).
 */
const GLOW = 460; // px — keep in sync with the glow div size below

export function HeroDotGrid() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(-GLOW);
  const y = useMotionValue(-GLOW);
  const opacity = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 140, damping: 22, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 140, damping: 22, mass: 0.5 });
  const sOpacity = useSpring(opacity, { stiffness: 120, damping: 26 });

  useEffect(() => {
    if (reduce) return;
    const el = ref.current;
    const host = el?.parentElement; // the hero <header>
    if (!host) return;

    const onMove = (e: PointerEvent) => {
      const r = host.getBoundingClientRect();
      x.set(e.clientX - r.left - GLOW / 2);
      y.set(e.clientY - r.top - GLOW / 2);
      opacity.set(1);
    };
    const onLeave = () => opacity.set(0);

    host.addEventListener("pointermove", onMove, { passive: true });
    host.addEventListener("pointerleave", onLeave);
    return () => {
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
    };
  }, [reduce, x, y, opacity]);

  return (
    <div ref={ref} aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Faint static dot grid, masked to fade toward the edges */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1.5px)",
          backgroundSize: "22px 22px",
          maskImage:
            "radial-gradient(80% 75% at 55% 35%, #000 50%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(80% 75% at 55% 35%, #000 50%, transparent 100%)",
        }}
      />

      {/* Amber cursor glow — transform/opacity only, brightens dots beneath it */}
      {!reduce && (
        <motion.div
          className="absolute left-0 top-0 rounded-full"
          style={{
            x: sx,
            y: sy,
            opacity: sOpacity,
            width: GLOW,
            height: GLOW,
            background:
              "radial-gradient(circle, rgba(255,182,0,0.18) 0%, rgba(255,182,0,0.08) 32%, transparent 70%)",
            mixBlendMode: "screen",
            willChange: "transform, opacity",
          }}
        />
      )}
    </div>
  );
}
