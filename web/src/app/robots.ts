import type { MetadataRoute } from "next";

const BASE = "https://devaxl.com";

export default function robots(): MetadataRoute.Robots {
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
