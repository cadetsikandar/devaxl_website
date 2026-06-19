import {
  Boxes,
  HeartPulse,
  Landmark,
  Sparkles,
  Store,
  Wrench,
} from "lucide-react";
import { SectionHead } from "./SectionHead";

const INDUSTRIES = [
  { icon: Landmark, label: "Fintech" },
  { icon: Boxes, label: "B2B SaaS" },
  { icon: HeartPulse, label: "Health" },
  { icon: Store, label: "Marketplaces" },
  { icon: Sparkles, label: "AI" },
  { icon: Wrench, label: "Internal tools" },
];

export function Industries() {
  return (
    <section className="border-b border-faint py-20 max-md:py-14">
      <div className="wrap">
        <SectionHead eyebrow="Domains" title="Industries we ship for." />
        <div className="grid grid-cols-6 gap-px overflow-hidden rounded-lg border border-subtle bg-[var(--line-faint)] max-lg:grid-cols-3 max-sm:grid-cols-2">
          {INDUSTRIES.map(({ icon: Icon, label }) => (
            <div
              key={label}
              data-reveal
              className="group flex flex-col items-center gap-3 bg-surface-1 px-4 py-8 text-center transition-colors duration-[180ms] hover:bg-surface-2"
            >
              <span className="flex size-11 items-center justify-center rounded-md border border-faint bg-surface-3 text-secondary transition-colors duration-[180ms] group-hover:border-[rgba(255,182,0,0.3)] group-hover:text-accent">
                <Icon className="size-[20px]" strokeWidth={1.75} />
              </span>
              <span className="text-[14px] font-medium text-primary">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
