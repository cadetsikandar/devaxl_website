import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import type { Article } from "@/lib/insights";
import { coverFor } from "./coverMeta";

function ArticleCover({ a }: { a: Article }) {
  const { icon: Icon, tint } = coverFor(a.category);

  return (
    <div className="relative aspect-[16/9] overflow-hidden border-b border-faint bg-gradient-to-br from-surface-2 to-surface-1">
      {/* Grid + dual glow wash, gently zooms on hover */}
      <div
        aria-hidden
        className="absolute inset-0 transition-transform duration-[450ms] ease-out group-hover:scale-[1.04]"
        style={{
          background: `radial-gradient(70% 90% at 78% 8%, rgba(${tint}, 0.22) 0%, transparent 58%), radial-gradient(50% 60% at 20% 100%, rgba(${tint}, 0.08) 0%, transparent 60%), linear-gradient(var(--line-faint) 1px, transparent 1px), linear-gradient(90deg, var(--line-faint) 1px, transparent 1px)`,
          backgroundSize: "auto, auto, 28px 28px, 28px 28px",
        }}
      />
      {/* Watermark glyph */}
      <Icon
        aria-hidden
        className="absolute -right-5 -top-4 size-[120px] transition-transform duration-[450ms] ease-out group-hover:scale-105"
        style={{ color: `rgb(${tint})`, opacity: 0.14 }}
        strokeWidth={1.25}
      />
      {/* Category chip */}
      <span
        className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] backdrop-blur-sm"
        style={{
          color: `rgb(${tint})`,
          borderColor: `rgba(${tint}, 0.3)`,
          background: `rgba(${tint}, 0.08)`,
        }}
      >
        <Icon className="size-[12px]" strokeWidth={2} />
        {a.category}
      </span>
      {/* Read-time chip */}
      <span
        className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full border border-faint px-2.5 py-1 text-[11px] text-tertiary backdrop-blur-sm"
        style={{ background: "rgba(10, 10, 12, 0.55)" }}
      >
        <Clock className="size-[12px]" strokeWidth={1.75} />
        {a.readTime.replace(" read", "")}
      </span>
    </div>
  );
}

/**
 * Article card — generated category cover, title, excerpt, and an author /
 * date / Read footer. Used on /insights, related rails, and the home teaser.
 */
export function ArticleCard({ a }: { a: Article }) {
  const initials = a.author
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <Link
      href={`/insights/${a.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-subtle bg-surface-1 shadow-[var(--shadow-sm),var(--inner-top)] transition-[transform,border-color,box-shadow] duration-[180ms] ease-out hover:-translate-y-[3px] hover:border-[var(--line)] hover:shadow-[var(--shadow-lg),var(--inner-top)]"
    >
      <ArticleCover a={a} />

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-[18px] font-semibold leading-snug tracking-[-0.01em] text-primary transition-colors group-hover:text-accent">
          {a.title}
        </h3>
        <p className="mt-2.5 line-clamp-3 flex-1 text-[14px] leading-relaxed text-secondary">
          {a.dek}
        </p>

        <div className="mt-6 flex items-center justify-between border-t border-faint pt-4">
          <div className="flex items-center gap-2.5">
            <span
              aria-hidden
              className="grid size-7 place-items-center rounded-full border border-subtle bg-surface-2 font-mono text-[10px] font-semibold text-secondary"
            >
              {initials}
            </span>
            <div className="flex flex-col leading-tight">
              <span className="text-[12px] font-medium text-secondary">
                {a.author}
              </span>
              <time dateTime={a.dateISO} className="text-[11px] text-tertiary">
                {a.date}
              </time>
            </div>
          </div>
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
