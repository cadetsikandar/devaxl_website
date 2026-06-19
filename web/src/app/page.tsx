import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Proof } from "@/components/site/Proof";
import { TrustedBy } from "@/components/site/TrustedBy";
import { Capabilities } from "@/components/site/Capabilities";
import { Industries } from "@/components/site/Industries";
import { SelectedWork } from "@/components/site/SelectedWork";
import { Process } from "@/components/site/Process";
import { Engagement } from "@/components/site/Engagement";
import { Insights } from "@/components/site/Insights";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq } from "@/components/site/Faq";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Proof />
        <TrustedBy />
        <Capabilities />
        <Industries />
        <SelectedWork />
        <Process />
        <Engagement />
        <Insights />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
