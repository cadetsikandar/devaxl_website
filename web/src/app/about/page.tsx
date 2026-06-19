import type { Metadata } from "next";
import { PageHeader } from "@/components/site/PageHeader";
import { Testimonials } from "@/components/site/Testimonials";
import { FinalCta } from "@/components/site/FinalCta";

export const metadata: Metadata = {
  title: "About",
  description:
    "A premium product engineering studio. Senior engineers who have shipped, building and scaling SaaS products for founders and CTOs.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        eyebrow="About"
        title="Senior engineers who have shipped."
        intro="DevAXL is a small, senior product engineering studio. We sound like the people who build the software — because we are. No layers, no hand-offs."
      />
      <Testimonials />
      <FinalCta />
    </main>
  );
}
