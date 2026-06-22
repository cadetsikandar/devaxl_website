import type { Metadata } from "next";
import { PageHeader } from "@/components/site/PageHeader";
import { WorkFilter } from "@/components/work/WorkFilter";
import { Testimonials } from "@/components/site/Testimonials";
import { FinalCta } from "@/components/site/FinalCta";
import { getAllCases } from "@/lib/work";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Branding, design, and engineering work we've delivered for our clients.",
};

export default function WorkPage() {
  const cases = getAllCases();

  return (
    <main>
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
