// Canonical site constants + per-page metadata helpers.
//
// Why this exists: `alternates.canonical` set on the root layout is inherited by
// every nested route, so a single "/" there silently canonicalises the whole
// site to the homepage. Every page must declare its own canonical, and its own
// openGraph/twitter title + description (those are inherited wholesale too).

import type { Metadata } from "next";

// The www host is the one that actually serves 200 — bare devaxl.com issues a
// 308 to it. Canonicals, sitemap URLs, and the robots Host must name the URL
// that resolves, not one that redirects. If you'd rather run on the bare
// domain, flip the redirect in Vercel first, then change this one constant.
export const SITE_URL = "https://www.devaxl.com";
export const SITE_NAME = "Devaxl";
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const abs = (path: string) =>
  path.startsWith("http") ? path : `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

/**
 * Builds the per-page metadata every route needs: a self-referencing canonical
 * plus openGraph/twitter blocks that don't fall back to the homepage's.
 */
export function pageMeta({
  title,
  description,
  path,
  type = "website",
  publishedTime,
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
}): Metadata {
  const url = abs(path);
  // Matches the `%s — Devaxl` template in the root layout.
  const fullTitle = `${title} — ${SITE_NAME}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: { card: "summary_large_image", title: fullTitle, description },
  };
}
