import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { CASES, getCaseBySlug, getNextCase } from "@/lib/work";
import { CaseThumb } from "@/components/work/CaseThumb";
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
              className="group relative aspect-[16/9] overflow-hidden rounded-xl border border-subtle bg-surface-2 shadow-[var(--shadow-lg),var(--inner-top)] max-md:aspect-[16/11]"
            >
              <CaseThumb c={c} priority sizes="(max-width: 1180px) 100vw, 1180px" />
            </div>
          </div>
        </section>

        {/* ---- Overview + detail ---- */}
        <section className="py-20 max-md:py-14">
          <div className="wrap grid grid-cols-[0.7fr_1.3fr] gap-12 max-lg:grid-cols-1 max-lg:gap-8">
            {/* Meta sidebar — only renders the fields a case actually has */}
            <aside className="flex h-fit flex-col gap-7" data-reveal>
              <div>
                <span className="eyebrow">Overview</span>
              </div>
              {c.role && (
                <div>
                  <h2 className="text-[11px] font-semibold uppercase tracking-caps text-tertiary">
                    Our role
                  </h2>
                  <p className="mt-2 text-[15px] leading-snug text-primary">{c.role}</p>
                </div>
              )}
              {c.collaboration && (
                <div>
                  <h2 className="text-[11px] font-semibold uppercase tracking-caps text-tertiary">
                    Collaboration
                  </h2>
                  <p className="mt-2 text-[15px] leading-snug text-secondary">
                    {c.collaboration}
                  </p>
                </div>
              )}
              {c.stack && c.stack.length > 0 && (
                <div>
                  <h2 className="text-[11px] font-semibold uppercase tracking-caps text-tertiary">
                    Stack
                  </h2>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {c.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-pill border border-faint bg-surface-3 px-2.5 py-1 text-[12px] text-secondary"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {c.link && (
                <a
                  href={c.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-1.5 text-[14px] font-semibold text-accent transition-colors hover:text-accent-hover"
                >
                  Visit {c.link.label}
                  <ArrowUpRight className="size-4" strokeWidth={1.75} />
                </a>
              )}
            </aside>

            {/* Body — overview, what we built, outcome */}
            <div className="flex flex-col gap-10" data-reveal>
              <p className="max-w-[64ch] text-[clamp(1.05rem,1rem+0.4vw,1.25rem)] leading-relaxed text-secondary">
                {c.overview}
              </p>

              {c.highlights && c.highlights.length > 0 && (
                <div>
                  <h2 className="text-[11px] font-semibold uppercase tracking-caps text-tertiary">
                    What we built
                  </h2>
                  <ul className="mt-5 flex flex-col gap-3.5">
                    {c.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-3 text-[15px] leading-relaxed text-primary"
                      >
                        <Check
                          className="mt-1 size-[17px] shrink-0 text-accent"
                          strokeWidth={2}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {c.quote && (
                <blockquote className="relative rounded-xl border border-subtle bg-surface-1 p-7 shadow-[var(--shadow-sm),var(--inner-top)] max-md:p-6">
                  <span
                    aria-hidden
                    className="font-mono text-[32px] leading-none text-accent"
                  >
                    &ldquo;
                  </span>
                  <p className="mt-2 max-w-[60ch] text-[clamp(1rem,0.95rem+0.3vw,1.15rem)] leading-relaxed text-primary">
                    {c.quote}
                  </p>
                  <footer className="mt-4 flex items-center gap-2 text-[13px] text-tertiary">
                    <span className="rounded-pill border border-faint bg-surface-3 px-2.5 py-1 font-mono text-[11px] text-accent">
                      {c.rating ?? "5.0"} ★
                    </span>
                    Verified client review · Upwork
                  </footer>
                </blockquote>
              )}

              {c.outcome && (
                <div className="rounded-xl border border-[rgba(255,182,0,0.25)] bg-accent-quiet p-7 shadow-glow max-md:p-6">
                  <h2 className="text-[11px] font-semibold uppercase tracking-caps text-accent">
                    Outcome
                  </h2>
                  <p className="mt-3 max-w-[60ch] text-[clamp(1rem,0.95rem+0.3vw,1.15rem)] leading-relaxed text-primary">
                    {c.outcome}
                  </p>
                </div>
              )}
            </div>
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
                <CaseThumb c={next} sizes="260px" />
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
