import { ArrowUpRight } from "lucide-react";
import { SectionHead } from "./SectionHead";

// 3-card article teaser — [PLACEHOLDER: real articles, links, dates].
const POSTS = [
  {
    category: "Engineering",
    title: "Shipping a production v1 in nine weeks without cutting corners.",
    read: "6 min read",
  },
  {
    category: "Architecture",
    title: "Modernizing a legacy monolith while it keeps serving users.",
    read: "8 min read",
  },
  {
    category: "Team",
    title: "What an embedded product squad actually changes for a CTO.",
    read: "5 min read",
  },
];

export function Insights() {
  return (
    <section className="border-b border-faint py-24 max-md:py-16">
      <div className="wrap">
        <SectionHead eyebrow="Insights" title="Notes from the build.">
          Field notes on shipping, scaling, and modernizing real products.
        </SectionHead>

        <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1 max-md:gap-4">
          {POSTS.map((p) => (
            <a
              key={p.title}
              href="#"
              data-reveal
              className="group flex flex-col rounded-lg border border-subtle bg-surface-1 p-7 shadow-[var(--shadow-sm),var(--inner-top)] transition-[transform,border-color,box-shadow] duration-[180ms] ease-out hover:-translate-y-[3px] hover:border-[var(--line)] hover:shadow-[var(--shadow-lg),var(--inner-top)]"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-accent">
                  {p.category}
                </span>
                <span className="ph">[PLACEHOLDER]</span>
              </div>
              <h3 className="mt-5 flex-1 text-[18px] font-semibold leading-snug tracking-[-0.01em] text-primary">
                {p.title}
              </h3>
              <div className="mt-6 flex items-center justify-between border-t border-faint pt-4">
                <span className="text-[13px] text-tertiary">{p.read}</span>
                <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-secondary transition-colors group-hover:text-accent">
                  Read
                  <ArrowUpRight
                    className="size-[15px] transition-transform duration-[180ms] ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    strokeWidth={1.75}
                  />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
