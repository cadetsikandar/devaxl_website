# Marketing

Marketing strategy and audit work for devaxl.com, produced with the
[marketingskills](https://github.com/coreyhaines31/marketingskills) library
installed at [.claude/skills/](../.claude/skills/) (50 skills, commit `b1aaa36`).

## Documents

| Document | What it is |
|---|---|
| [../.agents/product-marketing.md](../.agents/product-marketing.md) | **Read this first.** Positioning, ICP, personas, objections, voice, proof. Every marketing skill loads it automatically before doing anything else. Contains `[VERIFY]` markers where the repo didn't have the answer. |
| [skill-applicability.md](skill-applicability.md) | All 50 skills scored against DevAXL: 17 apply now, 26 later or conditionally, 7 don't apply at all. |
| [seo-audit.md](seo-audit.md) | Technical and on-page SEO findings. Includes the P0 canonical bug and what was fixed. |
| [cro-and-copy.md](cro-and-copy.md) | Conversion and copy findings, including what the 27 client reviews say that the site doesn't. |
| [measurement-plan.md](measurement-plan.md) | The six Plausible events now live, and the one env var you still need to set. |

## Using the skills

In any Claude Code session in this repo, describe the marketing task and the
matching skill loads itself. Or invoke one by name:

```bash
/seo-audit
```

Useful starting points for DevAXL, in dependency order:

```
/product-marketing      # update the context doc — do this after verifying the [VERIFY] markers
/customer-research      # mine the 27 client reviews into a verbatim bank
/competitor-profiling   # the biggest blank in the context doc
/offers                 # name and price the discovery sprint
/analytics              # once you've picked a tool
```

## What was changed in the site

Code changes from this pass, all in `web/`:

- **`src/lib/seo.ts`** (new) — `pageMeta()` helper: per-page canonical, OpenGraph, Twitter.
- **`src/lib/schema.ts`** (new) — JSON-LD builders for Organization, WebSite, FAQPage, Service, BreadcrumbList, BlogPosting, and case-study Article.
- **`src/lib/faqs.ts`** (new) — FAQ content extracted so the rendered accordion and the FAQPage schema share one source.
- **`src/components/seo/JsonLd.tsx`** (new) — server-rendered JSON-LD.
- **`src/app/layout.tsx`** — removed the root canonical that was pointing every page at the homepage; added site-wide Organization + WebSite schema and `googleBot` snippet directives.
- **All page routes** — self-referencing canonicals, per-page OpenGraph, breadcrumb schema.
- **`src/app/robots.ts`** — explicit allow rules for AI crawlers.
- **`public/llms.txt`** (new) — plain-text brief for AI answer engines.
- **`src/lib/analytics.ts`, `src/components/analytics/*`** (new) — Plausible plus the six tracked events. See the [measurement plan](measurement-plan.md).
- **`src/lib/referralSources.ts`** (new) + `ContactForm.tsx`, `api/contact/route.ts` — the "How did you hear about us?" field, feeding both the submit event and the enquiry email.
- **`src/lib/site.ts`** — Calendly URL updated to `calendly.com/touqeerhassan/30min`.

Verified: `npm run build` passes; every route serves a self-referencing
canonical, a per-page OG title, and valid JSON-LD in the initial HTML; all six
analytics events fire with the right properties.

## The thing that matters most

**The best offer is buried in an FAQ.** The fixed-fee discovery — pay a defined
amount, get a written plan with scope, timeline, and named team, then decide —
is strong risk reversal for a nervous buyer, and it's currently the fourth
sentence of an FAQ answer. Naming it, pricing it, and giving it a homepage
section is the highest-leverage change available. Run `/offers` once you've
decided the shape.
