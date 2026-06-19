import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Article } from "@/lib/insights";

/**
 * Article card — branded gradient thumbnail, category, title, read time, date.
 * Links to the article. Used on /insights, related rails, and the home teaser.
 */
export function ArticleCard({ a }: { a: Article }) {
  return (
    <Link
      href={`/insights/${a.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-subtle bg-surface-1 shadow-[var(--shadow-sm),var(--inner-top)] transition-[transform,border-color,box-shadow] duration-[180ms] ease-out hover:-translate-y-[3px] hover:border-[var(--line)] hover:shadow-[var(--shadow-lg),var(--inner-top)]"
    >
      {/* Branded gradient thumbnail (intentional fallback — no media yet) */}
      <div className="relative aspect-[16/9] overflow-hidden border-b border-faint bg-gradient-to-br from-surface-2 to-surface-1">
        <div
          aria-hidden
          className="absolute inset-0 transition-transform duration-[400ms] ease-out group-hover:scale-[1.03]"
          style={{
            background:
              "radial-gradient(60% 80% at 75% 10%, rgba(255,182,0,0.12) 0%, transparent 60%), linear-gradient(var(--line-faint) 1px, transparent 1px), linear-gradient(90deg, var(--line-faint) 1px, transparent 1px)",
            backgroundSize: "auto, 28px 28px, 28px 28px",
          }}
        />
        <span
          aria-hidden
          className="absolute bottom-4 left-5 font-mono text-[12px] uppercase tracking-[0.12em] text-tertiary"
        >
          {a.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-accent">
            {a.category}
          </span>
          <span className="text-[12px] text-tertiary">{a.readTime}</span>
        </div>
        <h3 className="mt-4 flex-1 text-[18px] font-semibold leading-snug tracking-[-0.01em] text-primary">
          {a.title}
        </h3>
        <div className="mt-6 flex items-center justify-between border-t border-faint pt-4">
          <time dateTime={a.dateISO} className="text-[13px] text-tertiary">
            {a.date}
          </time>
          <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-secondary transition-colors group-hover:text-accent">
            Read
            <ArrowUpRight
              className="size-[15px] transition-transform duration-[180ms] ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              strokeWidth={1.75}
            />
          </span>
        </div>
      </div>
    </Link>
  );
}
