"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { WORK_FILTERS, type CaseStudy } from "@/lib/work";
import { CaseCard } from "./CaseCard";

/**
 * Category filter + case grid. Owns its own motion (rather than the global
 * scroll-reveal) so filtering can't leave cards stuck hidden: cards animate
 * in on mount and cross-fade on filter change. Reduced motion -> static.
 */
export function WorkFilter({ cases }: { cases: CaseStudy[] }) {
  const [active, setActive] = useState<string>("All");
  const reduce = useReducedMotion();

  const filtered = useMemo(
    () =>
      active === "All" ? cases : cases.filter((c) => c.categories.includes(active)),
    [active, cases],
  );

  return (
    <div>
      {/* Filter chips */}
      <div
        role="tablist"
        aria-label="Filter work by category"
        className="flex flex-wrap gap-2.5"
      >
        {WORK_FILTERS.map((f) => {
          const on = active === f;
          return (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={on}
              onClick={() => setActive(f)}
              className={cn(
                "h-9 rounded-pill border px-4 text-[13px] font-medium transition-colors duration-[150ms]",
                on
                  ? "border-[rgba(255,182,0,0.35)] bg-accent-quiet text-accent"
                  : "border-subtle text-secondary hover:border-strong hover:text-primary",
              )}
            >
              {f}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <motion.div layout className="mt-10 grid grid-cols-2 gap-6 max-md:grid-cols-1 max-md:gap-[18px]">
        <AnimatePresence mode="popLayout">
          {filtered.map((c, i) => (
            <motion.div
              key={c.slug}
              layout
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
              transition={{
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
                delay: reduce ? 0 : Math.min(i, 7) * 0.05,
              }}
            >
              <CaseCard c={c} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* count, with an a11y live region */}
      <p className="mt-8 text-[13px] text-tertiary" aria-live="polite">
        Showing {filtered.length} {filtered.length === 1 ? "engagement" : "engagements"}
        {active !== "All" ? ` in ${active}` : ""}.
      </p>
    </div>
  );
}
