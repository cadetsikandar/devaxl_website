import type { Metadata } from "next";
import { PageHeader } from "@/components/site/PageHeader";
import { ArticleCard } from "@/components/insights/ArticleCard";
import { FinalCta } from "@/components/site/FinalCta";
import { getAllArticles } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Field notes on shipping, scaling, and modernizing real products.",
};

export default function InsightsPage() {
  const articles = getAllArticles();

  return (
    <main>
      <PageHeader
        eyebrow="Insights"
        title="Notes from the build."
        intro="Field notes on shipping, scaling, and modernizing real products — written by the people who do the work."
      />

      <section className="py-16 max-md:py-12">
        <div className="wrap">
          <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-[18px]">
            {articles.map((a) => (
              <div key={a.slug} data-reveal className="h-full">
                <ArticleCard a={a} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </main>
  );
}
