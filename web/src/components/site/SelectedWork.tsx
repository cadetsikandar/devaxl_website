import { ArrowUpRight } from "lucide-react";
import { SectionHead } from "./SectionHead";

type Metric = { value: string; label: string; accent?: boolean };
type Work = {
  tag: string;
  context: string;
  metrics: Metric[]; // exactly 4 — [PLACEHOLDER: confirm real figures]
};

const WORK: Work[] = [
  {
    tag: "Fintech · Modernization",
    context:
      "Re-architected a six-year-old billing platform without a moment of downtime.",
    metrics: [
      { value: "−40%", label: "load time", accent: true },
      { value: "2.4s", label: "first paint" },
      { value: "12k", label: "daily users" },
      { value: "99.9%", label: "uptime" },
    ],
  },
  {
    tag: "B2B SaaS · MVP",
    context:
      "Took a workflow tool from Figma to a paying-customer v1 — auth, billing, admin.",
    metrics: [
      { value: "9 wks", label: "to launch", accent: true },
      { value: "0→1", label: "product" },
      { value: "5", label: "integrations" },
      { value: "100%", label: "test pass" },
    ],
  },
  {
    tag: "Marketplace · Scale",
    context:
      "Moved a monolith to event-driven services to absorb a step-change in volume.",
    metrics: [
      { value: "3×", label: "throughput", accent: true },
      { value: "−35%", label: "infra cost" },
      { value: "8M", label: "events / day" },
      { value: "<100ms", label: "p95 latency" },
    ],
  },
  {
    tag: "Healthtech · Embedded team",
    context:
      "An embedded squad shipped weekly for a year across a HIPAA-compliant stack.",
    metrics: [
      { value: "99.98%", label: "uptime", accent: true },
      { value: "52", label: "weekly ships" },
      { value: "HIPAA", label: "compliant" },
      { value: "18 mo", label: "partnership" },
    ],
  },
];

export function SelectedWork() {
  return (
    <section id="work" className="border-b border-faint py-24 max-md:py-16">
      <div className="wrap">
        <SectionHead eyebrow="Selected work" title="Outcomes, not screenshots.">
          Every engagement is measured by what changed for the business — speed,
          revenue, reliability, reach.
        </SectionHead>

        <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1 max-md:gap-[18px]">
          {WORK.map((w) => (
            <article
              key={w.tag}
              data-reveal
              className="group flex cursor-pointer flex-col rounded-lg border border-subtle bg-surface-1 p-7 shadow-[var(--shadow-sm),var(--inner-top)] transition-[transform,border-color,box-shadow] duration-[180ms] ease-out hover:-translate-y-[3px] hover:border-[var(--line)] hover:shadow-[var(--shadow-lg),var(--inner-top)] max-md:p-6"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-tertiary">
                  {w.tag}
                </span>
                <ArrowUpRight
                  className="size-[18px] text-tertiary transition-[transform,color] duration-[180ms] ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  strokeWidth={1.75}
                />
              </div>

              {/* Proof-dense metric grid — 4 figures with hairline dividers */}
              <div className="mt-5 grid grid-cols-2 overflow-hidden rounded-md border border-faint">
                {w.metrics.map((m, i) => (
                  <div
                    key={m.label}
                    className={
                      "px-4 py-3.5 " +
                      (i % 2 === 0 ? "border-r border-faint " : "") +
                      (i < 2 ? "border-b border-faint" : "")
                    }
                  >
                    <div
                      className={
                        "text-[clamp(1.4rem,1.1rem+0.9vw,1.8rem)] font-semibold leading-none tracking-tight " +
                        (m.accent ? "text-accent" : "text-primary")
                      }
                      style={{ fontVariantNumeric: "tabular-nums" }}
                    >
                      {m.value}
                    </div>
                    <div className="mt-1.5 text-[12px] text-tertiary">{m.label}</div>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-[14px] leading-normal text-secondary">
                {w.context}
              </p>

              {/* Looping product clip on hover — [PLACEHOLDER: real product clip] */}
              <div className="relative mt-5 aspect-[16/7] overflow-hidden rounded-md border border-faint bg-gradient-to-b from-surface-2 to-surface-1">
                <div className="absolute inset-0 flex items-end gap-[5px] p-3 opacity-40 transition-opacity duration-[180ms] group-hover:opacity-60">
                  {[42, 60, 34, 72, 48, 64, 38, 56, 70, 44].map((h, i) => (
                    <span
                      key={i}
                      className="flex-1 rounded-t-[2px]"
                      style={{
                        height: `${h}%`,
                        background:
                          i === 3 ? "var(--amber-400)" : "var(--surface-4)",
                      }}
                    />
                  ))}
                </div>
                <div className="clip-sweep absolute inset-y-0 left-0" />
                <span className="ph absolute left-3 top-3">
                  [PLACEHOLDER: product clip]
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
