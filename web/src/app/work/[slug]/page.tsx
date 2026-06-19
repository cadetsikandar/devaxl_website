import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CASES, getCaseBySlug, getNextCase } from "@/lib/work";
import { FinalCta } from "@/components/site/FinalCta";

export function generateStaticParams() {
  return CASES.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const c = getCaseBySlug(params.slug);
  if (!c) return { title: "Case study" };
  return { title: c.name, description: `${c.name}: ${c.oneLiner}` };
}

export default function CasePage({ params }: { params: { slug: string } }) {
  const c = getCaseBySlug(params.slug);
  if (!c) notFound();

  const next = getNextCase(c.slug);

  return (
    <main>
      <article>
        {/* ---- Hero ---- */}
        <header className="relative overflow-hidden border-b border-faint pb-12 pt-[80px] max-md:pt-12">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(44% 60% at 80% 0%, rgba(255,182,0,0.09) 0%, transparent 60%)",
            }}
          />
          <div className="wrap relative">
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-tertiary transition-colors hover:text-primary"
            >
              <ArrowLeft className="size-4" strokeWidth={1.75} />
              All work
            </Link>

            <div className="mt-8" data-reveal>
              <span className="eyebrow">{c.category}</span>
            </div>
            <h1 className="t-display mt-5 max-w-[16ch]" data-reveal>
              {c.name}
            </h1>
            <p
              className="mt-6 max-w-[560px] text-[18px] leading-[1.65] text-secondary max-md:text-[16px]"
              data-reveal
            >
              {c.oneLiner}
            </p>
            <div className="mt-6 flex flex-wrap gap-2" data-reveal>
              {c.categories.map((t) => (
                <span
                  key={t}
                  className="rounded-pill border border-faint bg-surface-3 px-3 py-1.5 text-[12px] text-secondary"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* ---- Large real screenshot ---- */}
        <section className="border-b border-faint py-12 max-md:py-8">
          <div className="wrap">
            <div
              data-reveal
              className="relative aspect-[16/9] overflow-hidden rounded-xl border border-subtle bg-surface-2 shadow-[var(--shadow-lg),var(--inner-top)] max-md:aspect-[16/11]"
            >
              <Image
                src={c.thumbnail}
                alt={`${c.name} — ${c.category}`}
                fill
                priority
                sizes="(max-width: 1180px) 100vw, 1180px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </section>

        {/* ---- Overview ---- */}
        <section className="py-20 max-md:py-14">
          <div className="wrap grid grid-cols-[0.7fr_1.3fr] gap-12 max-lg:grid-cols-1 max-lg:gap-6">
            <span className="eyebrow h-fit" data-reveal>
              Overview
            </span>
            <p
              className="max-w-[64ch] text-[clamp(1.05rem,1rem+0.4vw,1.25rem)] leading-relaxed text-secondary"
              data-reveal
            >
              {c.overview}
            </p>
          </div>
        </section>

        {/* ---- Next project ---- */}
        <section className="border-t border-faint py-16 max-md:py-12">
          <div className="wrap">
            <Link
              href={`/work/${next.slug}`}
              data-reveal
              className="group flex items-center gap-8 rounded-xl border border-subtle bg-surface-1 p-6 shadow-[var(--shadow-sm),var(--inner-top)] transition-[transform,border-color,box-shadow] duration-[180ms] ease-out hover:-translate-y-[3px] hover:border-[var(--line)] hover:shadow-[var(--shadow-lg),var(--inner-top)] max-md:flex-col max-md:items-stretch max-md:gap-5"
            >
              <div className="relative aspect-[16/10] w-[260px] shrink-0 overflow-hidden rounded-lg border border-faint bg-surface-2 max-md:w-full">
                <Image
                  src={next.thumbnail}
                  alt={next.name}
                  fill
                  sizes="260px"
                  className="object-cover object-top transition-transform duration-[400ms] ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex-1">
                <span className="font-mono text-[11px] uppercase tracking-caps text-tertiary">
                  Next project — {next.category}
                </span>
                <h2 className="mt-3 text-[clamp(1.5rem,1.2rem+1.2vw,2rem)] font-semibold tracking-tight text-primary">
                  {next.name}
                </h2>
                <p className="mt-2 text-[14px] text-secondary">{next.oneLiner}</p>
              </div>
              <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-full border border-subtle text-accent transition-colors group-hover:border-[rgba(255,182,0,0.4)] group-hover:bg-accent-quiet max-md:hidden">
                <ArrowRight className="size-6" strokeWidth={1.75} />
              </span>
            </Link>
          </div>
        </section>
      </article>

      {/* ---- CTA footer ---- */}
      <FinalCta />
    </main>
  );
}
