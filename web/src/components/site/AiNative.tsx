import {
  Bot,
  Code2,
  Cpu,
  Gauge,
  GitPullRequest,
  ScrollText,
  Search,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { SectionHead } from "./SectionHead";

type Item = { icon: LucideIcon; term: string; desc: string };
type Column = {
  badge: LucideIcon;
  title: string;
  blurb: string;
  items: Item[];
};

const COLUMNS: Column[] = [
  {
    badge: Sparkles,
    title: "In the products we ship",
    blurb: "AI features that earn their place — shipped to production, not demos.",
    items: [
      { icon: Search, term: "RAG & semantic search", desc: "Grounded answers over your own data." },
      { icon: Bot, term: "Agents & copilots", desc: "Task automation and in-app assistants." },
      { icon: Workflow, term: "LLM pipelines", desc: "Extraction, classification, and generation." },
      { icon: ShieldCheck, term: "Evals & guardrails", desc: "Quality, safety, and cost kept in check." },
    ],
  },
  {
    badge: Cpu,
    title: "In how we build",
    blurb: "AI woven through delivery, so a senior team ships like a much larger one.",
    items: [
      { icon: ScrollText, term: "AI-assisted scoping", desc: "Specs and plans drafted in hours, not weeks." },
      { icon: Code2, term: "Code & test generation", desc: "More coverage, far less boilerplate." },
      { icon: GitPullRequest, term: "AI-augmented review", desc: "A tireless second set of eyes on every PR." },
      { icon: Gauge, term: "Faster iteration", desc: "Prototypes in days to pressure-test ideas." },
    ],
  },
];

export function AiNative() {
  return (
    <section id="ai" className="border-b border-faint py-24 max-md:py-16">
      <div className="wrap">
        <SectionHead eyebrow="AI-native" title="AI, built into the product — and the process.">
          We build intelligent products for our clients, and use AI intensively
          across our own delivery to ship them faster.
        </SectionHead>

        <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1 max-md:gap-4">
          {COLUMNS.map(({ badge: Badge, title, blurb, items }) => (
            <SpotlightCard
              key={title}
              data-reveal
              className="flex flex-col overflow-hidden rounded-xl border border-subtle bg-surface-1 p-7 shadow-[var(--shadow-sm),var(--inner-top)] max-md:p-6"
            >
              {/* amber glow + grid backdrop */}
              <div
                aria-hidden
                className="absolute inset-0 opacity-60"
                style={{
                  background:
                    "radial-gradient(60% 70% at 90% 0%, rgba(255,182,0,0.06) 0%, transparent 60%), linear-gradient(var(--line-faint) 1px, transparent 1px), linear-gradient(90deg, var(--line-faint) 1px, transparent 1px)",
                  backgroundSize: "auto, 28px 28px, 28px 28px",
                }}
              />
              <div className="relative flex items-center gap-3.5">
                <span className="flex size-11 items-center justify-center rounded-lg border border-[rgba(255,182,0,0.25)] bg-accent-quiet text-accent">
                  <Badge className="size-[21px]" strokeWidth={1.75} />
                </span>
                <h3 className="text-[20px] font-semibold tracking-[-0.01em] text-primary">
                  {title}
                </h3>
              </div>
              <p className="relative mt-3.5 text-[14px] leading-normal text-secondary">
                {blurb}
              </p>

              <ul className="relative mt-6 flex flex-col gap-px overflow-hidden rounded-lg border border-faint bg-[var(--line-faint)]">
                {items.map(({ icon: Icon, term, desc }) => (
                  <li
                    key={term}
                    className="group/item flex items-start gap-3.5 bg-surface-1 px-4 py-3.5 transition-colors duration-[160ms] hover:bg-surface-2"
                  >
                    <span className="mt-px flex size-8 shrink-0 items-center justify-center rounded-md border border-faint bg-surface-3 text-secondary transition-colors duration-[160ms] group-hover/item:border-[rgba(255,182,0,0.3)] group-hover/item:text-accent">
                      <Icon className="size-[16px]" strokeWidth={1.75} />
                    </span>
                    <div className="min-w-0">
                      <span className="block text-[14px] font-semibold text-primary">
                        {term}
                      </span>
                      <span className="mt-0.5 block text-[13px] leading-normal text-tertiary">
                        {desc}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
