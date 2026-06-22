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

export default function Home() {
  return (
    <main>
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
