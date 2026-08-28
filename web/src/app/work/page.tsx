import type { Metadata } from "next";
import { PageHeader } from "@/components/site/PageHeader";
import { WorkFilter } from "@/components/work/WorkFilter";
import { Testimonials } from "@/components/site/Testimonials";
import { FinalCta } from "@/components/site/FinalCta";
import { getAllCases } from "@/lib/work";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Work",
  description:
    "Case studies from Devaxl: SaaS platforms, AI products, and modernizations we've shipped to production — with the problem, the approach, and what changed.",
  path: "/work",
});

export default function WorkPage() {
  const cases = getAllCases();

  return (
    <main>
      <JsonLd data={breadcrumbSchema([{ name: "Work", path: "/work" }])} />
      <PageHeader
        eyebrow="Selected work"
        title="Real products we've shipped."
        intro="Branding, design, and engineering work delivered for our clients. Filter by discipline."
      />

      <section className="py-16 max-md:py-12">
        <div className="wrap">
          <WorkFilter cases={cases} />
        </div>
      </section>

      <Testimonials />
      <FinalCta />
    </main>
  );
}
