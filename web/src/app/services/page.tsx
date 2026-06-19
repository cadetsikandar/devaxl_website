import type { Metadata } from "next";
import { PageHeader } from "@/components/site/PageHeader";
import { Capabilities } from "@/components/site/Capabilities";
import { Engagement } from "@/components/site/Engagement";
import { Process } from "@/components/site/Process";
import { FinalCta } from "@/components/site/FinalCta";

export const metadata: Metadata = {
  title: "Services",
  description:
    "How we help you ship: SaaS MVPs, modernization, and embedded product teams. One senior team, from first commit to scale.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Services"
        title="How we help you ship."
        intro="We plug in where you need us — a fast v1, a rescue mission on an aging platform, or a long-term embedded squad. One senior team, end to end."
      />
      <Capabilities />
      <Process />
      <Engagement />
      <FinalCta />
    </main>
  );
}
