import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { ARTICLES, getArticleBySlug, getRelatedArticles } from "@/lib/insights";
import { Prose } from "@/components/insights/Prose";
import { ArticleCard } from "@/components/insights/ArticleCard";
import { FinalCta } from "@/components/site/FinalCta";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const a = getArticleBySlug(params.slug);
  if (!a) return { title: "Insights" };
  return { title: a.title, description: a.dek };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const a = getArticleBySlug(params.slug);
  if (!a) notFound();

  const related = getRelatedArticles(a.slug, 2);

  return (
    <main>
      <article>
        {/* ---- Header ---- */}
        <header className="relative overflow-hidden border-b border-faint pb-12 pt-[80px] max-md:pt-12">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(44% 60% at 78% 0%, rgba(255,182,0,0.08) 0%, transparent 60%)",
            }}
          />
          <div className="wrap relative mx-auto max-w-[780px]">
            <Link
              href="/insights"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-tertiary transition-colors hover:text-primary"
            >
              <ArrowLeft className="size-4" strokeWidth={1.75} />
              Insights
            </Link>

            <div className="mt-8" data-reveal>
              <span className="eyebrow">{a.category}</span>
            </div>
            <h1
              className="mt-5 text-[clamp(2rem,1.4rem+2.6vw,3.1rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-primary"
              data-reveal
            >
              {a.title}
            </h1>
            <p
              className="mt-6 max-w-[60ch] text-[18px] leading-[1.6] text-secondary max-md:text-[16px]"
              data-reveal
            >
              {a.dek}
            </p>

            {/* meta: date · read time · author */}
            <div
              className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-tertiary"
              data-reveal
            >
              <time dateTime={a.dateISO} className="text-secondary">
                {a.date}
              </time>
              <span aria-hidden>·</span>
              <span>{a.readTime}</span>
              <span aria-hidden>·</span>
              <span>
                By <span className="text-secondary">{a.author}</span>
              </span>
            </div>
          </div>
        </header>

        {/* ---- Cover — branded gradient (intentional fallback, no media yet) ---- */}
        <section className="border-b border-faint py-12 max-md:py-8">
          <div className="wrap">
            <div
              data-reveal
              className="relative mx-auto flex aspect-[16/8] max-w-[980px] items-end overflow-hidden rounded-xl border border-subtle bg-gradient-to-br from-surface-2 to-surface-1 shadow-[var(--shadow-lg),var(--inner-top)] max-md:aspect-[16/10]"
            >
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(50% 70% at 70% 0%, rgba(255,182,0,0.12) 0%, transparent 60%), linear-gradient(var(--line-faint) 1px, transparent 1px), linear-gradient(90deg, var(--line-faint) 1px, transparent 1px)",
                  backgroundSize: "auto, 34px 34px, 34px 34px",
                }}
              />
              <span
                aria-hidden
                className="relative m-6 font-mono text-[12px] uppercase tracking-[0.12em] text-tertiary"
              >
                {a.category}
              </span>
            </div>
          </div>
        </section>

        {/* ---- Body ---- */}
        <section className="py-16 max-md:py-12">
          <div className="wrap">
            <Prose blocks={a.body} />
          </div>
        </section>

        {/* ---- Related ---- */}
        {related.length > 0 && (
          <section className="border-t border-faint py-16 max-md:py-12">
            <div className="wrap">
              <h2 className="mb-8 text-[clamp(1.4rem,1.1rem+1.2vw,1.9rem)] font-semibold tracking-tight" data-reveal>
                Keep reading
              </h2>
              <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1 max-md:gap-[18px]">
                {related.map((r) => (
                  <div key={r.slug} data-reveal className="h-full">
                    <ArticleCard a={r} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>

      {/* ---- CTA footer ---- */}
      <FinalCta />
    </main>
  );
}
