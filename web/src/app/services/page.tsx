import type { Metadata } from "next";
import { PageHeader } from "@/components/site/PageHeader";
import { Capabilities } from "@/components/site/Capabilities";
import { AiNative } from "@/components/site/AiNative";
import { TechStack } from "@/components/site/TechStack";
import { Engagement } from "@/components/site/Engagement";
import { Process } from "@/components/site/Process";
import { Faq } from "@/components/site/Faq";
import { FinalCta } from "@/components/site/FinalCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Services",
  description:
    "How we help you ship: SaaS and AI products, modernization, and embedded product teams. AI built into the product and the process — one senior team, from first commit to scale.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema([{ name: "Services", path: "/services" }])} />
      <PageHeader
        eyebrow="Services"
        title="How we help you ship."
        intro="We plug in where you need us — a fast v1, an AI feature your product needs, a rescue mission on an aging platform, or a long-term embedded squad. One senior, AI-native team, end to end."
      />
      <Capabilities />
      <AiNative />
      <TechStack />
      <Process />
      <Engagement />
      <Faq />
      <FinalCta />
    </main>
  );
}
