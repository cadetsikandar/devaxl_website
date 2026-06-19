import type { MetadataRoute } from "next";
import { CASES } from "@/lib/work";
import { ARTICLES } from "@/lib/insights";

const BASE = "https://devaxl.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/work`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/services`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/process`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/insights`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/about`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/contact`, changeFrequency: "yearly", priority: 0.6 },
  ];

  const work: MetadataRoute.Sitemap = CASES.map((c) => ({
    url: `${BASE}/work/${c.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const insights: MetadataRoute.Sitemap = ARTICLES.map((a) => ({
    url: `${BASE}/insights/${a.slug}`,
    lastModified: a.dateISO,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...work, ...insights];
}
