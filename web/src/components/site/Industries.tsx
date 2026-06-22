import {
  Boxes,
  HeartPulse,
  Landmark,
  Sparkles,
  Store,
  Wrench,
} from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { SectionHead } from "./SectionHead";

const INDUSTRIES = [
  { icon: Landmark, label: "Fintech", desc: "Payments, ledgers, and compliance-grade flows." },
  { icon: Boxes, label: "B2B SaaS", desc: "Multi-tenant apps, billing, and dashboards." },
  { icon: HeartPulse, label: "Health", desc: "Records, scheduling, and HIPAA-aware systems." },
  { icon: Store, label: "Marketplaces", desc: "Matching, payouts, and trust & safety." },
  { icon: Sparkles, label: "AI", desc: "RAG, agents, and model integration." },
  { icon: Wrench, label: "Internal tools", desc: "Admin consoles, ops, and automation." },
];

export function Industries() {
  return (
    <section className="border-b border-faint py-20 max-md:py-14">
      <div className="wrap">
        <SectionHead eyebrow="Domains" title="Industries we ship for." />

        <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {INDUSTRIES.map(({ icon: Icon, label, desc }) => (
            <SpotlightCard
              key={label}
              data-reveal
              className="flex flex-col overflow-hidden rounded-xl border border-subtle bg-surface-1 p-6 shadow-[var(--shadow-sm),var(--inner-top)] transition-[transform,border-color] duration-[180ms] ease-out hover:-translate-y-[3px] hover:border-[var(--line)]"
            >
              {/* grid + amber glow backdrop, intensifies on hover */}
              <div
                aria-hidden
                className="absolute inset-0 opacity-60 transition-opacity duration-[300ms] group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(70% 90% at 85% 0%, rgba(255,182,0,0.07) 0%, transparent 60%), linear-gradient(var(--line-faint) 1px, transparent 1px), linear-gradient(90deg, var(--line-faint) 1px, transparent 1px)",
                  backgroundSize: "auto, 26px 26px, 26px 26px",
                }}
              />
              {/* oversized glyph watermark */}
              <Icon
                aria-hidden
                className="absolute -right-5 -top-4 size-28 text-primary opacity-[0.05] transition-[opacity,transform] duration-[300ms] ease-out group-hover:scale-105 group-hover:opacity-[0.08]"
                strokeWidth={1}
              />

              {/* icon tile */}
              <span className="relative flex size-12 items-center justify-center rounded-lg border border-faint bg-gradient-to-br from-surface-3 to-surface-2 text-secondary shadow-[var(--inner-top)] transition-[color,border-color,transform] duration-[180ms] group-hover:-translate-y-0.5 group-hover:border-[rgba(255,182,0,0.35)] group-hover:text-accent">
                <Icon className="size-[22px]" strokeWidth={1.75} />
              </span>

              <h3 className="relative mt-5 text-[16px] font-semibold tracking-[-0.01em] text-primary">
                {label}
              </h3>
              <p className="relative mt-1.5 text-[13px] leading-normal text-secondary">
                {desc}
              </p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
