// schema.org builders (JSON-LD).
//
// Rules we hold to:
// - Only mark up what is actually visible on the page.
// - No `aggregateRating` on the Organization: Google ignores self-serving
//   review markup, and the Upwork/Fiverr reviews aren't first-party content.
// - `Organization`, not `LocalBusiness`/`ProfessionalService` — those need a
//   verifiable postal address and Devaxl is remote-first.

import { ORG_ID, SITE_NAME, SITE_URL, WEBSITE_ID, abs } from "./seo";
import { CONTACT, SOCIALS } from "./site";
import type { Article } from "./insights";
import type { CaseStudy } from "./work";

const graph = (nodes: object[]) => ({ "@context": "https://schema.org", "@graph": nodes });

/** Organization + WebSite — emitted once, site-wide, from the root layout. */
export function organizationSchema() {
  return graph([
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: SITE_NAME,
      legalName: "Devaxl",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: abs("/devaxl-logo.png") },
      image: abs("/devaxl-logo.png"),
      slogan: "Development accelerated",
      description:
        "An AI-native product studio that designs, builds, and scales SaaS and AI products — from RAG, agents, and LLM features to platform modernization — for founders and CTOs.",
      email: CONTACT.email,
      telephone: CONTACT.phone,
      sameAs: SOCIALS.map((s) => s.href),
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          email: CONTACT.email,
          telephone: CONTACT.phone,
          availableLanguage: ["English"],
          areaServed: "Worldwide",
        },
      ],
      knowsAbout: [
        "SaaS product development",
        "AI product engineering",
        "Retrieval-augmented generation",
        "LLM application development",
        "Legacy platform modernization",
        "Dedicated engineering teams",
      ],
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: { "@id": ORG_ID },
      inLanguage: "en",
    },
  ]);
}

/** BreadcrumbList. Pass the trail without the "Home" root — it's prepended. */
export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return graph([
    {
      "@type": "BreadcrumbList",
      itemListElement: [{ name: "Home", path: "/" }, ...trail].map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        item: abs(item.path),
      })),
    },
  ]);
}

/** FAQPage — only valid because these Q&As are rendered on the page itself. */
export function faqSchema(faqs: { q: string; a: string }[]) {
  return graph([
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ]);
}

/** The three engagement models, as an itemised service catalogue. */
export function servicesSchema(
  services: { name: string; description: string }[],
) {
  return graph(
    services.map((s) => ({
      "@type": "Service",
      name: s.name,
      description: s.description,
      serviceType: s.name,
      provider: { "@id": ORG_ID },
      areaServed: "Worldwide",
      url: abs("/services"),
    })),
  );
}

/** BlogPosting for an insights article. */
export function articleSchema(a: Article) {
  const url = abs(`/insights/${a.slug}`);
  return graph([
    {
      "@type": "BlogPosting",
      "@id": `${url}#article`,
      headline: a.title,
      description: a.dek,
      url,
      mainEntityOfPage: url,
      datePublished: a.dateISO,
      dateModified: a.dateISO,
      articleSection: a.category,
      inLanguage: "en",
      image: abs("/opengraph-image"),
      author: { "@type": "Organization", name: a.author, url: SITE_URL },
      publisher: { "@id": ORG_ID },
      isPartOf: { "@id": WEBSITE_ID },
    },
  ]);
}

/**
 * A case study is an Article about work performed — `CreativeWork` with an
 * `about` Service is the honest mapping. We deliberately do not emit `Review`
 * or `Product`: neither is what this page is.
 */
export function caseStudySchema(c: CaseStudy) {
  const url = abs(`/work/${c.slug}`);
  return graph([
    {
      "@type": "Article",
      "@id": `${url}#case-study`,
      headline: `${c.name} — ${c.oneLiner}`,
      description: c.overview,
      url,
      mainEntityOfPage: url,
      inLanguage: "en",
      ...(c.thumbnail ? { image: abs(c.thumbnail) } : {}),
      author: { "@id": ORG_ID },
      publisher: { "@id": ORG_ID },
      about: {
        "@type": "Service",
        name: c.category,
        provider: { "@id": ORG_ID },
      },
      keywords: c.categories.join(", "),
    },
  ]);
}
