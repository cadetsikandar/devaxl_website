import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHead } from "./SectionHead";
import { CaseCard } from "@/components/work/CaseCard";
import { getCaseBySlug, type CaseStudy } from "@/lib/work";

// Curated homepage selection — real projects, sourced from the case data so
// each card's content and link stay in sync with its /work/[slug] page.
const FEATURED = (
  ["apolloe", "authority-alert", "driver-app", "propforce"] as const
)
  .map(getCaseBySlug)
  .filter(Boolean) as CaseStudy[];

export function SelectedWork() {
  return (
    <section id="work" className="border-b border-faint py-24 max-md:py-16">
      <div className="wrap">
        <SectionHead eyebrow="Selected work" title="Real products we've shipped.">
          Design, branding, and engineering work delivered for our clients.
          Outcome metrics are coming as clients confirm them.
        </SectionHead>

        <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1 max-md:gap-[18px]">
          {FEATURED.map((c) => (
            <div key={c.slug} data-reveal className="h-full">
              <CaseCard c={c} />
            </div>
          ))}
        </div>

        <div className="mt-10" data-reveal>
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-accent transition-opacity hover:opacity-80"
          >
            View all work
            <ArrowUpRight className="size-[16px]" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  );
}
