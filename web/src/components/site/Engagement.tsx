import { Check } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CALENDLY_URL } from "@/lib/site";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { SectionHead } from "./SectionHead";

const TIERS = [
  {
    name: "MVP Build",
    who: "For founders taking a validated idea to a production v1.",
    points: [
      "Fixed-scope, fixed-timeline delivery",
      "Design, engineering & QA included",
      "Live, revenue-ready product",
    ],
    cta: "Start a build",
    featured: false,
  },
  {
    name: "Dedicated Team",
    who: "For teams that need durable velocity against an evolving roadmap.",
    points: [
      "Embedded senior squad, monthly",
      "Design + frontend + backend + PM",
      "Works inside your tools & rituals",
    ],
    cta: "Build a team",
    featured: true,
  },
  {
    name: "Modernization Retainer",
    who: "For platforms that need to get faster, stabler, and easier to extend.",
    points: [
      "Performance & reliability program",
      "Incremental, zero-downtime rollout",
      "Ongoing architecture guidance",
    ],
    cta: "Scope a retainer",
    featured: false,
  },
];

export function Engagement() {
  return (
    <section className="border-b border-faint py-24 max-md:py-16">
      <div className="wrap">
        <SectionHead eyebrow="Engagement models" title="Work with us the way that fits.">
          Three ways to engage — each scoped to where your product is today.
        </SectionHead>

        <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1 max-md:gap-4">
          {TIERS.map((t) => (
            <SpotlightCard
              key={t.name}
              data-reveal
              intensity={t.featured ? 0.18 : 0.13}
              className={
                "flex flex-col rounded-lg bg-surface-1 p-[30px] " +
                (t.featured
                  ? "border border-[rgba(255,182,0,0.3)] shadow-glow"
                  : "border border-subtle shadow-[var(--shadow-sm),var(--inner-top)]")
              }
            >
              {t.featured && (
                <span className="mb-[18px] inline-flex h-[23px] w-fit items-center rounded-pill border border-[rgba(255,182,0,0.3)] bg-accent-quiet px-2.5 text-[11px] font-semibold tracking-[0.02em] text-accent">
                  Most common
                </span>
              )}
              <h3 className="text-[26px] font-semibold tracking-tight">{t.name}</h3>
              <p className="mb-5 mt-2.5 text-[14px] leading-normal text-secondary">
                {t.who}
              </p>
              <ul className="mb-[26px] flex flex-1 flex-col gap-3">
                {t.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-[14px] leading-normal text-primary">
                    <Check className="mt-0.5 size-4 shrink-0 text-accent" strokeWidth={2} />
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: t.featured ? "primary" : "ghost" }),
                  "w-full",
                )}
              >
                {t.cta}
              </a>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
