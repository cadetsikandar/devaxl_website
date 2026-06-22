import Image from "next/image";
import type { CaseStudy } from "@/lib/work";

/**
 * Fills its (relative, aspect-ratio'd) parent. Renders the real screenshot when
 * a case has one; otherwise a branded poster so cases without a screenshot yet
 * still look deliberate rather than broken.
 */
export function CaseThumb({
  c,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: {
  c: CaseStudy;
  priority?: boolean;
  sizes?: string;
}) {
  if (c.thumbnail) {
    return (
      <Image
        src={c.thumbnail}
        alt={`${c.name} — ${c.category}`}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover object-top transition-transform duration-[400ms] ease-out group-hover:scale-[1.03]"
      />
    );
  }

  const tags = (c.stack ?? c.categories).slice(0, 3);

  return (
    <div
      role="img"
      aria-label={`${c.name} — ${c.category}`}
      className="absolute inset-0 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-surface-2 to-surface-1 p-6 max-md:p-5"
    >
      {/* amber glow + faint grid backdrop */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(72% 80% at 85% 0%, rgba(255,182,0,0.12) 0%, transparent 60%), linear-gradient(var(--line-faint) 1px, transparent 1px), linear-gradient(90deg, var(--line-faint) 1px, transparent 1px)",
          backgroundSize: "auto, 30px 30px, 30px 30px",
        }}
      />
      <div className="relative flex items-center justify-between">
        <span className="flex size-9 items-center justify-center rounded-md border border-[rgba(255,182,0,0.3)] bg-accent-quiet font-mono text-[13px] font-semibold text-accent">
          {c.name.charAt(0)}
        </span>
        <span className="font-mono text-[11px] uppercase tracking-caps text-tertiary">
          {c.categories[0]}
        </span>
      </div>
      <div className="relative">
        <h3 className="text-[clamp(1.25rem,1rem+1.4vw,1.9rem)] font-semibold leading-tight tracking-tight text-primary">
          {c.name}
        </h3>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-pill border border-faint bg-surface-3/80 px-2 py-0.5 font-mono text-[10px] text-secondary"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
