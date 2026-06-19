import type { ArticleBlock } from "@/lib/insights";

/**
 * Renders article body blocks as styled prose — Geist, comfortable measure
 * (~68ch), generous rhythm. No per-paragraph scroll animation (long-form text
 * should be readable immediately and is reduced-motion neutral).
 */
export function Prose({ blocks }: { blocks: ArticleBlock[] }) {
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
