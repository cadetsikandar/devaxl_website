import type { ArticleBlock } from "@/lib/insights";
import { coverFor, FIGURE_ICONS } from "./coverMeta";

/**
 * Renders article body blocks as styled prose — Geist, comfortable measure
 * (~68ch), generous rhythm. No per-paragraph scroll animation (long-form text
 * should be readable immediately and is reduced-motion neutral).
 *
 * `category` tints in-body figures to match the article's cover identity.
 */
export function Prose({
  blocks,
  category = "Engineering",
}: {
  blocks: ArticleBlock[];
  category?: string;
}) {
  const { tint } = coverFor(category);

  return (
    <div className="mx-auto max-w-[68ch]">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "h2":
            return (
              <h2
                key={i}
                className="mt-12 text-[clamp(1.4rem,1.15rem+1vw,1.7rem)] font-semibold tracking-[-0.01em] text-primary first:mt-0"
              >
                {b.text}
              </h2>
            );
          case "ul":
            return (
              <ul key={i} className="mt-5 flex flex-col gap-3">
                {b.items.map((it, j) => (
                  <li key={j} className="flex gap-3 text-[17px] leading-relaxed text-secondary">
                    <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" />
                    {it}
                  </li>
                ))}
              </ul>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="my-10 border-l-2 border-accent pl-6 text-[clamp(1.25rem,1.05rem+0.8vw,1.5rem)] font-medium leading-snug text-primary"
              >
                {b.text}
              </blockquote>
            );
          case "figure": {
            const Icon = FIGURE_ICONS[b.icon] ?? coverFor(category).icon;
            return (
              <figure key={i} className="my-11 lg:-mx-12">
                <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-subtle bg-gradient-to-br from-surface-2 to-surface-1 shadow-[var(--shadow-md,var(--shadow-lg)),var(--inner-top)]">
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background: `radial-gradient(60% 80% at 78% 6%, rgba(${tint}, 0.22) 0%, transparent 58%), radial-gradient(55% 65% at 18% 100%, rgba(${tint}, 0.08) 0%, transparent 60%), linear-gradient(var(--line-faint) 1px, transparent 1px), linear-gradient(90deg, var(--line-faint) 1px, transparent 1px)`,
                      backgroundSize: "auto, auto, 32px 32px, 32px 32px",
                    }}
                  />
                  {/* concentric ring accent */}
                  <div
                    aria-hidden
                    className="absolute left-1/2 top-1/2 size-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border max-md:size-[180px]"
                    style={{ borderColor: `rgba(${tint}, 0.18)` }}
                  />
                  <div
                    aria-hidden
                    className="absolute left-1/2 top-1/2 size-[160px] -translate-x-1/2 -translate-y-1/2 rounded-full border max-md:size-[120px]"
                    style={{ borderColor: `rgba(${tint}, 0.14)` }}
                  />
                  <Icon
                    aria-hidden
                    className="absolute left-1/2 top-1/2 size-[64px] -translate-x-1/2 -translate-y-1/2 max-md:size-[48px]"
                    style={{ color: `rgb(${tint})`, opacity: 0.9 }}
                    strokeWidth={1.5}
                  />
                </div>
                <figcaption className="mt-3 px-1 text-[13px] leading-relaxed text-tertiary">
                  {b.caption}
                </figcaption>
              </figure>
            );
          }
          default:
            return (
              <p key={i} className="mt-5 text-[17px] leading-relaxed text-secondary first:mt-0">
                {b.text}
              </p>
            );
        }
      })}
    </div>
  );
}
