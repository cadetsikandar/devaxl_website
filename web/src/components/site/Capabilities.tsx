import { ArrowRight, Gauge, Rocket, Users } from "lucide-react";
import { SectionHead } from "./SectionHead";

const CARDS = [
  {
    icon: Rocket,
    title: "SaaS MVP → launch",
    out: "Take an idea to a production v1 real users can pay for — scoped tight, shipped in weeks not quarters.",
    outcome: "Outcome: a live, revenue-ready product",
    chips: ["Next.js", "TypeScript", "Postgres", "Stripe"],
  },
  {
    icon: Gauge,
    title: "Scale & modernize",
    out: "Tame a slow, brittle codebase serving thousands of users — performance, reliability, and a roadmap you can build on.",
    outcome: "Outcome: faster, stable, maintainable",
    chips: ["React", "Node", "AWS", "Terraform"],
  },
  {
    icon: Users,
    title: "Embed a product team",
    out: "A dedicated squad — design, engineering, PM — that works as part of your org against your roadmap, sprint after sprint.",
    outcome: "Outcome: durable delivery velocity",
    chips: ["Design", "Frontend", "Backend", "DevOps"],
  },
];

export function Capabilities() {
  return (
    <section id="services" className="border-b border-faint py-24 max-md:py-16">
      <div className="wrap">
        <SectionHead eyebrow="Services" title="One senior team, from first commit to scale.">
          We plug in where you need us — a fast v1, a rescue mission on an aging
          platform, or a long-term embedded squad.
        </SectionHead>

        <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1 max-md:gap-4">
          {CARDS.map(({ icon: Icon, ...c }) => (
            <article
              key={c.title}
              data-reveal
              className="group flex cursor-pointer flex-col rounded-lg border border-subtle bg-surface-1 p-7 shadow-[var(--shadow-sm),var(--inner-top)] transition-[transform,border-color,box-shadow] duration-[180ms] ease-out hover:-translate-y-[3px] hover:border-[var(--line)] hover:shadow-[var(--shadow-lg),var(--inner-top)]"
            >
              <div className="mb-5 flex size-11 items-center justify-center rounded-md border border-[rgba(255,182,0,0.25)] bg-accent-quiet text-accent">
                <Icon className="size-[21px]" strokeWidth={1.75} />
              </div>
              <h3 className="text-[20px] font-semibold tracking-[-0.01em]">
                {c.title}
              </h3>
              <p className="mt-3.5 flex-1 text-[14px] leading-normal text-secondary">
                {c.out}
              </p>
              <span className="mt-[18px] inline-flex items-center gap-[7px] text-[13px] font-semibold text-accent">
                {c.outcome}
                <ArrowRight className="size-[15px] transition-transform duration-[180ms] ease-out group-hover:translate-x-1" strokeWidth={1.75} />
              </span>
              <div className="mt-[22px] flex flex-wrap gap-[7px] border-t border-faint pt-5">
                {c.chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-sm border border-faint bg-surface-3 px-[9px] py-1 font-mono text-[11px] text-secondary"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
