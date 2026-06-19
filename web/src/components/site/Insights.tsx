import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHead } from "./SectionHead";
import { ArticleCard } from "@/components/insights/ArticleCard";
import { getAllArticles } from "@/lib/insights";

const TEASER = getAllArticles().slice(0, 3);

export function Insights() {
  return (
    <section className="border-b border-faint py-24 max-md:py-16">
      <div className="wrap">
        <SectionHead eyebrow="Insights" title="Notes from the build.">
          Field notes on shipping, scaling, and modernizing real products.
        </SectionHead>

        <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1 max-md:gap-4">
          {TEASER.map((a) => (
            <div key={a.slug} data-reveal className="h-full">
              <ArticleCard a={a} />
            </div>
          ))}
        </div>

        <div className="mt-10" data-reveal>
          <Link
            href="/insights"
            className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-accent transition-opacity hover:opacity-80"
          >
            Read all insights
            <ArrowUpRight className="size-[16px]" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  );
}
