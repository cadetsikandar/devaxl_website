import type { Metadata } from "next";
import { PageHeader } from "@/components/site/PageHeader";
import { AboutStory } from "@/components/site/AboutStory";
import { Principles } from "@/components/site/Principles";
import { TechStack } from "@/components/site/TechStack";
import { Industries } from "@/components/site/Industries";
import { Testimonials } from "@/components/site/Testimonials";
import { FinalCta } from "@/components/site/FinalCta";

export const metadata: Metadata = {
  title: "About",
  description:
    "A small, senior product engineering studio. Senior engineers who have shipped, building and scaling SaaS and AI products for founders and CTOs — with a written plan, weekly demos, and code you fully own.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        eyebrow="About"
        title="Senior engineers who have shipped."
        intro="Devaxl is a small, senior product engineering studio. We sound like the people who build the software — because we are. No layers, no hand-offs."
      />
      <AboutStory />
      <Principles />
      <TechStack />
      <Industries />
      <Testimonials />
      <FinalCta />
    </main>
  );
}
