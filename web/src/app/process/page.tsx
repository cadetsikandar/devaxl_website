import type { Metadata } from "next";
import { PageHeader } from "@/components/site/PageHeader";
import { Process } from "@/components/site/Process";
import { FinalCta } from "@/components/site/FinalCta";

export const metadata: Metadata = {
  title: "Process",
  description:
    "Discovery, Design, Build, Launch, Scale — a clear path from idea to scale, with senior engineers shipping in tight, demoable increments.",
};

export default function ProcessPage() {
  return (
    <main>
      <PageHeader
        eyebrow="How we work"
        title="From first call to lasting scale."
        intro="A senior team, a written plan, and tight demoable increments you can use every week. Here is the path."
      />
      <Process />
      <FinalCta />
    </main>
  );
}
