import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/lib/work";

/**
 * Case card — leads with the real project screenshot, then name, an honest
 * scope-only one-liner, and the discipline/stack chips. No fabricated metrics.
 */
export function CaseCard({ c }: { c: CaseStudy }) {
  return (
    <Link
      href={`/work/${c.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-subtle bg-surface-1 shadow-[var(--shadow-sm),var(--inner-top)] transition-[transform,border-color,box-shadow] duration-[180ms] ease-out hover:-translate-y-[3px] hover:border-[var(--line)] hover:shadow-[var(--shadow-lg),var(--inner-top)]"
    >
      {/* Real screenshot leads the card */}
      <div className="relative aspect-[16/10] overflow-hidden border-b border-faint bg-surface-2">
        <Image
          src={c.thumbnail}
          alt={`${c.name} — ${c.category}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-top transition-transform duration-[400ms] ease-out group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col p-7 max-md:p-6">
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-[22px] font-semibold leading-snug tracking-[-0.01em] text-primary">
            {c.name}
          </h2>
          <ArrowUpRight
            className="mt-0.5 size-[18px] shrink-0 text-tertiary transition-[transform,color] duration-[180ms] ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
            strokeWidth={1.75}
          />
        </div>
        <p className="mt-2 flex-1 text-[14px] leading-normal text-secondary">
          {c.oneLiner}
        </p>

        {/* Discipline / stack chips */}
        <div className="mt-5 flex flex-wrap gap-2">
          {c.categories.map((t) => (
            <span
              key={t}
              className="rounded-sm border border-faint bg-surface-3 px-2.5 py-1 font-mono text-[11px] text-secondary"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
