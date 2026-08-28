# SEO audit — devaxl.com

Run 2026-08-28 against the source in `web/`, using the `seo-audit`, `schema`,
`ai-seo`, and `site-architecture` skills. Priority order follows the skill:
crawlability → technical → on-page → content → authority.

**Caveat:** this audits the code, not the live site. There is no Search Console
or analytics access, so nothing here reflects actual rankings, impressions, or
crawl behaviour. Findings are about what the site *makes possible*, not what it
currently earns.

---

## Fixed in this pass

### 🔴 P0 — Every page canonicalised to the homepage

`app/layout.tsx` set `alternates: { canonical: "/" }`. In the Next.js App
Router, metadata on a root layout is **inherited by every nested route**, so
`/services`, `/work`, `/about`, every case study, and every article was
emitting `<link rel="canonical" href="https://devaxl.com/">`.

That is an instruction to Google to drop all of them from the index and credit
the homepage instead. It is the single most damaging thing that was in the
codebase, and it silently undoes every other SEO effort.

**Fixed:** the root canonical is removed (with a comment explaining why it must
not come back). Every page now declares its own via a `pageMeta()` helper in
[web/src/lib/seo.ts](web/src/lib/seo.ts).

### 🔴 P0 — No structured data anywhere

Zero `application/ld+json` in the entire codebase. Now added, server-rendered so
crawlers and AI engines see it in the initial HTML:

| Schema | Where | Buys you |
|---|---|---|
| `Organization` + `WebSite` | Every page (root layout) | Knowledge-panel eligibility, entity resolution, `sameAs` social linking |
| `FAQPage` | Homepage | FAQ rich results; a well-formed answer block for AI engines |
| `Service` ×3 | Homepage | Makes the three offers machine-readable as distinct services |
| `BreadcrumbList` | All inner pages | Breadcrumb trails in results instead of raw URLs |
| `BlogPosting` | Each article | Article eligibility, author/publisher attribution, dates |
| `Article` + `about: Service` | Each case study | Case studies parsed as substantive content, not portfolio filler |

Two deliberate omissions:

- **No `aggregateRating` / `Review`.** Devaxl has 27 genuine five-star reviews,
  but they're on Upwork and Fiverr. Google ignores self-serving review markup on
  your own Organization, and marking it up anyway risks a manual action. The
  right move is to get those reviews onto Clutch and G2, where the rating is
  third-party — see `directory-submissions`.
- **`Organization`, not `LocalBusiness`/`ProfessionalService`.** Those require a
  verifiable postal address. Devaxl is remote-first. If a registered business
  address is ever published, upgrading is a two-line change.

### 🟠 P1 — Open Graph inherited site-wide

Same inheritance trap: the root layout's `openGraph` block was the only one, so
every page shared the homepage's OG title and description. A case study shared
on LinkedIn showed the generic homepage card. `pageMeta()` now emits per-page
`openGraph` and `twitter` blocks.

### 🟠 P1 — Not legible to AI answer engines

Founders and CTOs increasingly shortlist agencies by asking ChatGPT or
Perplexity. Added:

- [web/public/llms.txt](web/public/llms.txt) — a plain-text brief covering what
  Devaxl does, the engagement models, and the verifiable facts, in the format
  non-Google AI engines parse.
- Explicit `robots.txt` allow rules for `GPTBot`, `OAI-SearchBot`, `ClaudeBot`,
  `PerplexityBot`, `Google-Extended`, and others. They were already allowed by
  the wildcard; naming them makes the intent unambiguous and survives future
  edits to the wildcard rule.
- `max-image-preview: large` and `max-snippet: -1` for `googleBot`, which is
  what makes rich image previews and long snippets eligible.

---

## Not fixed — needs a decision or real content

### 🟠 P1 — `/services` is one page doing three jobs

Three genuinely different offers, bought by different people searching different
things, all live at `/services`:

| Offer | Buyer | What they search |
|---|---|---|
| MVP Build | Founder | "mvp development agency", "build my saas idea" |
| Modernization | CTO | "legacy system modernization services" |
| Dedicated Team | CTO / VP Eng | "dedicated development team", "staff augmentation" |

One URL cannot rank for three intents. The nav even links to `/services#ai` for
AI product engineering — an anchor, not a page, so it can never rank at all.

**Recommended structure:**

```
/services                              (hub — overview + links)
  /services/mvp-development
  /services/ai-product-engineering      ← replaces the #ai anchor
  /services/platform-modernization
  /services/dedicated-teams
```

Each gets its own `Service` schema, its own case studies, its own FAQ. This is
the highest-value SEO work left, and it needs real copy per page — it is not a
mechanical change.

### 🟠 P1 — The blog is three placeholder articles

`web/src/lib/insights.ts` opens with:

> `// These 3 articles are SEED PLACEHOLDERS — replace the prose, dates, authors…`

They are indexed, in the sitemap, and tagged `[PLACEHOLDER: real article]` in
the UI. Publishing placeholder content under an expertise-led brand is worse
than publishing nothing: it's the first thing a prospect who clicks "Insights"
sees, and E-E-A-T is exactly what an agency is selling.

**Either** replace all three with real field notes (the topics are right — they
map to the three services), **or** `noindex` them and pull `/insights` from the
nav until there's real content. Do one this week.

### 🟡 P2 — Unlabelled client logos

`Proof.tsx` renders `/clients/client1.png` … `client6.png` with
`alt="Devaxl client 1"`. The logo wall is the strongest trust signal on the
page and it currently:

- gives search engines no client names to associate with the brand,
- gives screen-reader users nothing,
- gives a human visitor no reason to believe the logos are real.

Naming them (with permission) fixes all three. This needs client names, which
aren't in the repo.

### 🟡 P2 — Sitemap has no `lastModified` on static routes

Only articles carry `lastModified`. Adding it to the static routes helps crawl
scheduling. Low impact, five-minute fix, worth doing when pages are next edited.

### 🟡 P2 — One OG image for the whole site

`opengraph-image.tsx` is a good branded card, but it's generic. Case studies and
articles shared on LinkedIn — the channel that matters for this audience —
would convert better with per-page cards showing the case-study name. Next.js
supports `opengraph-image.tsx` inside `[slug]` directories. See the `image` skill.

---

## Verification checklist

Before and after deploying, run each URL through:

- [Rich Results Test](https://search.google.com/test/rich-results) — expect FAQ and Breadcrumb eligibility
- [Schema validator](https://validator.schema.org/) — expect zero errors
- `view-source:` and search for `application/ld+json` — must be in the raw HTML, not injected later
- Confirm each page's `<link rel="canonical">` points at **itself**

Then, in Search Console (not yet connected — connect it):

- Submit `https://devaxl.com/sitemap.xml`
- Watch Enhancements → FAQ / Breadcrumbs for eligibility
- Watch Pages → "Duplicate, Google chose different canonical" — the canonical bug
  will have caused this, and recovery takes weeks after the fix ships
