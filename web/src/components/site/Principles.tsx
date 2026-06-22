import {
  ClipboardList,
  Eye,
  GitBranch,
  HeartHandshake,
  Sparkles,
  UserCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { SectionHead } from "./SectionHead";

type Principle = { icon: LucideIcon; title: string; body: string };

const PRINCIPLES: Principle[] = [
  {
    icon: UserCheck,
    title: "Senior people only",
    body: "The engineers on your kickoff call are the ones who ship. No junior hand-offs, no layers of account managers between you and the work.",
  },
  {
    icon: ClipboardList,
    title: "A written plan first",
    body: "Every engagement opens with a fixed-fee discovery and a plan — scope, timeline, team, and success metrics, in writing — before a line of code.",
  },
  {
    icon: GitBranch,
    title: "Weekly, demoable progress",
    body: "We ship in tight increments you can click through every week, not a big-bang reveal at the end. You always know exactly where things stand.",
  },
  {
    icon: Eye,
    title: "You own everything",
    body: "All code, design, and infrastructure live in your repositories and cloud from day one. No lock-in, no black boxes, full visibility throughout.",
  },
  {
    icon: Sparkles,
    title: "AI-native, end to end",
    body: "We build AI into the products we ship, and use it intensively across delivery — so a small senior team moves with the velocity of a much larger one.",
  },
  {
    icon: HeartHandshake,
    title: "Honest about fit",
    body: "If we're not the right team for your problem, we'll say so on the first call. A clear no beats a slow, expensive maybe.",
  },
];

export function Principles() {
  return (
    <section className="border-b border-faint py-24 max-md:py-16">
      <div className="wrap">
        <SectionHead eyebrow="How we operate" title="The principles behind the work.">
          A few rules we hold to on every engagement — they&apos;re why clients
          stay, and refer.
        </SectionHead>

        <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1 max-md:gap-4">
          {PRINCIPLES.map(({ icon: Icon, title, body }) => (
            <SpotlightCard
              key={title}
              data-reveal
              className="flex flex-col rounded-lg border border-subtle bg-surface-1 p-7 shadow-[var(--shadow-sm),var(--inner-top)] transition-[transform,border-color] duration-[180ms] ease-out hover:-translate-y-[3px] hover:border-[var(--line)]"
            >
              <span className="mb-5 flex size-11 items-center justify-center rounded-md border border-[rgba(255,182,0,0.25)] bg-accent-quiet text-accent">
                <Icon className="size-[21px]" strokeWidth={1.75} />
              </span>
              <h3 className="text-[18px] font-semibold tracking-[-0.01em] text-primary">
                {title}
              </h3>
              <p className="mt-3 text-[14px] leading-normal text-secondary">
                {body}
              </p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
