import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

const BASE = SITE_URL;

export default function robots(): MetadataRoute.Robots {
  // Preview and branch deployments are publicly reachable and were being
  // crawled as a second copy of the site. Only the production deployment
  // should invite crawlers.
  if (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production") {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: [
      { userAgent: "*", allow: "/" },
      // Named explicitly so the intent is unambiguous: Devaxl wants to be read
      // and cited by AI answer engines, not just indexed by search crawlers.
      {
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-User",
          "PerplexityBot",
          "Perplexity-User",
          "Google-Extended",
          "Applebot-Extended",
          "CCBot",
        ],
        allow: "/",
      },
    ],
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
