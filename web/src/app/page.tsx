import type { Metadata } from "next";
import { Hero } from "@/components/site/Hero";
import { Proof } from "@/components/site/Proof";
import { Capabilities } from "@/components/site/Capabilities";
import { AiNative } from "@/components/site/AiNative";
import { Industries } from "@/components/site/Industries";
import { SelectedWork } from "@/components/site/SelectedWork";
import { Process } from "@/components/site/Process";
import { Engagement } from "@/components/site/Engagement";
import { Insights } from "@/components/site/Insights";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq } from "@/components/site/Faq";
import { FinalCta } from "@/components/site/FinalCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema, servicesSchema } from "@/lib/schema";
import { FAQS } from "@/lib/faqs";
import { SITE_URL } from "@/lib/seo";

// Title/description/openGraph are inherited from the root layout — they were
// written for the homepage. Only the canonical needs declaring here.
export const metadata: Metadata = {
  alternates: { canonical: SITE_URL },
};

const SERVICES = [
  {
    name: "SaaS & AI MVP to launch",
    description:
      "Take an idea to a production v1 real users can pay for — AI features built in where they matter, scoped tight, shipped in weeks not quarters.",
  },
  {
    name: "Scale & modernize",
    description:
      "Tame a slow, brittle codebase serving thousands of users — performance, reliability, and a roadmap you can build on.",
  },
  {
    name: "Embedded product team",
    description:
      "A dedicated squad — design, engineering, PM — that works as part of your org against your roadmap, sprint after sprint.",
  },
];

export default function Home() {
  return (
    <main>
      <JsonLd data={faqSchema(FAQS)} />
      <JsonLd data={servicesSchema(SERVICES)} />
      <Hero />
      <Proof />
      <Capabilities />
      <AiNative />
      <Industries />
      <SelectedWork />
      <Process />
      <Engagement />
      <Insights />
      <Testimonials />
      <Faq />
      <FinalCta />
    </main>
  );
}
