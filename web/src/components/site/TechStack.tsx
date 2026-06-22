import { Boxes, Cloud, Cpu, Layout } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHead } from "./SectionHead";

type Group = { icon: LucideIcon; title: string; items: string[] };

// Real tooling from delivered work — React/Strapi/Node, Angular migrations,
// AWS infrastructure and video hosting, AI features in production.
const GROUPS: Group[] = [
  {
    icon: Layout,
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Angular", "Tailwind CSS"],
  },
  {
    icon: Boxes,
    title: "Backend & data",
    items: ["Node.js", "Strapi", "REST & GraphQL", "PostgreSQL", "Redis"],
  },
  {
    icon: Cloud,
    title: "Cloud & delivery",
    items: ["AWS", "Docker", "CI/CD pipelines", "Observability", "Video & media"],
  },
  {
    icon: Cpu,
    title: "AI & intelligence",
    items: ["LLMs & RAG", "Vector search", "Agents & copilots", "Evals & guardrails"],
  },
];

export function TechStack() {
  return (
    <section className="border-b border-faint py-24 max-md:py-16">
      <div className="wrap">
        <SectionHead eyebrow="Stack" title="The tools we build and ship with.">
          A modern, AI-native stack chosen for what lasts — not what&apos;s
          trending. We pick the right tool for your product, not a house template.
        </SectionHead>

        <div className="grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1 max-md:gap-4">
          {GROUPS.map(({ icon: Icon, title, items }) => (
            <div
              key={title}
              data-reveal
              className="flex flex-col rounded-lg border border-subtle bg-surface-1 p-6 shadow-[var(--shadow-sm),var(--inner-top)]"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-md border border-faint bg-surface-3 text-accent">
                  <Icon className="size-[18px]" strokeWidth={1.75} />
                </span>
                <h3 className="text-[15px] font-semibold tracking-[-0.01em] text-primary">
                  {title}
                </h3>
              </div>
              <ul className="mt-5 flex flex-col gap-2.5">
                {items.map((it) => (
                  <li
                    key={it}
                    className="flex items-center gap-2.5 text-[14px] text-secondary"
                  >
                    <span
                      aria-hidden
                      className="size-1.5 shrink-0 rounded-full bg-accent"
                    />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
