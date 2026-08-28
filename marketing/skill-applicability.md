# Marketing skills → DevAXL applicability audit

All **50 skills** from [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills)
(commit `b1aaa36`, 2026-08-26), scored against what DevAXL actually is: a
**B2B services business** with a high-ticket, sales-led motion, no self-serve
product, no signup, no subscription, and no mobile app.

That shape matters. Roughly a third of this library is written for self-serve
SaaS — paywalls, activation, churn, trial conversion. Those skills are not
"lower priority" for DevAXL; they have no surface to act on at all. Saying so
plainly is more useful than ranking everything 1–50.

**Verdict counts:** 17 apply now · 26 apply next or conditionally · 7 don't apply.

---

## Tier 1 — Apply now (17)

Foundational, or a gap that's costing money today.

| Skill | Why it applies to DevAXL | Status |
|---|---|---|
| `product-marketing` | Every other skill reads it. Nothing else can be done well without it. | ✅ **Done** — [.agents/product-marketing.md](.agents/product-marketing.md) |
| `schema` | The site had **zero** structured data. Agency sites live or die on being legible to search and AI. | ✅ **Done** — Organization, WebSite, FAQPage, Service, BlogPosting, Article, BreadcrumbList |
| `seo-audit` | Found a canonical bug that was pointing the entire site at the homepage. | ✅ **Done** — [marketing/seo-audit.md](marketing/seo-audit.md) |
| `ai-seo` | Founders and CTOs now shortlist agencies through ChatGPT and Perplexity. Devaxl was invisible to them. | ✅ **Partly done** — `llms.txt`, AI-crawler rules, schema. Content structure still to do. |
| `analytics` | The site previously measured nothing — not one CTA click or form submit. | ✅ **Done** — Plausible + six events, [measurement-plan.md](measurement-plan.md). Needs `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` set in Vercel to go live. |
| `attribution` | Agency leads arrive via referral, LinkedIn, and dark social — channels analytics cannot see. | ✅ **Done** — "How did you hear about us?" on the contact form, feeding both the `contact_form_submitted` event and the enquiry email |
| `cro` | The homepage's primary CTA sends people to `/work`, not to a booking. The contact form asks for a phone number it doesn't need. | 🟡 Findings in [marketing/cro-and-copy.md](marketing/cro-and-copy.md) |
| `copywriting` | The hero sells *what Devaxl is*. The reviews say clients buy *communication, ownership, and speed*. That gap is free conversion. | 🟡 Rewrites drafted |
| `copy-editing` | Three blog posts are flagged in the source as `PLACEHOLDER`. They are live and indexed. | 🟡 Highest-priority content fix |
| `offers` | This is the single biggest lever for a services business. The fixed-fee discovery is already a good offer and is buried in an FAQ answer. It should be a named, priced, front-page product. | 🟡 Highest-leverage strategic work |
| `customer-research` | 27 five-star reviews sit in `Testimonials.tsx` as decoration. They are the voice-of-customer corpus every page's copy should be built from. | 🟡 Mine before rewriting copy |
| `competitor-profiling` | The context doc cannot name one competitor. No positioning claim can be defended until it can. | 🔴 Biggest strategic blank |
| `competitors` | "X vs Y" and "alternatives to X" pages are the highest-intent SEO an agency can rank for. Requires profiling first. | 🟡 After profiling |
| `site-architecture` | `/services` is one page covering three distinct offers that different buyers search for differently. It should be three pages. | 🟡 Detailed in the SEO audit |
| `content-strategy` | Three placeholder posts is not a content programme. Needs pillars tied to the three services. | 🟡 |
| `sales-enablement` | High-ticket, sales-led, consultative. Proposals, one-pagers, and objection-handling docs are the actual revenue surface. | 🟡 |
| `marketing-plan` | Ties the above into a sequenced 90-day plan with owners. Run it **last**, once the context doc is verified. | 🟡 |

---

## Tier 2 — Apply next (17)

Real fit, but they depend on Tier 1 landing first — mostly on analytics existing
and the offer being defined.

| Skill | Fit for DevAXL | Depends on |
|---|---|---|
| `prospecting` | Building a target list of funded startups and CTOs. Strong fit — outbound is how most agencies actually grow. | `product-marketing` (ICP) |
| `cold-email` | The natural pair to prospecting. Devaxl's real proof (21+ shipped, named case studies) makes for credible cold email. | `prospecting`, `offers` |
| `programmatic-seo` | Service × industry pages — "fintech SaaS development", "healthcare platform modernization". Six industries × three services is a defensible page set, not thin spam, because there's real case-study substance behind each. | `site-architecture` |
| `lead-magnets` | An "AI feature readiness checklist" or "MVP scoping template" captures the 95% who won't book a call on the first visit. Today they leave with nothing. | `content-strategy` |
| `free-tools` | An MVP scope-and-timeline estimator would both generate leads and demonstrate the product thinking Devaxl sells. High effort, high payoff. | `lead-magnets` |
| `directory-submissions` | Clutch, G2, DesignRush, GoodFirms, TopDevelopers. For agencies these are both backlinks **and** a real buying channel — and they're where the 27 reviews should be replicated. | — |
| `social` | LinkedIn is *the* channel for reaching founders and CTOs. The company page exists and is unused as a marketing surface. | `content-strategy` |
| `public-relations` | Founder-led thought leadership and podcast appearances. Cheap, and the AI-native delivery story is a genuinely fresh angle. | `product-marketing` |
| `emails` | A nurture sequence for form fills that aren't ready to buy. Today a non-converting enquiry is simply lost. | `analytics`, `lead-magnets` |
| `marketing-psychology` | Directly applicable to the proof, guarantee, and risk-reversal framing on a high-consideration purchase. | `copywriting` |
| `image` | Per-page OG images (currently one generic card site-wide), case-study visuals, LinkedIn graphics. | — |
| `video` | Case-study walkthroughs and a founder intro. For a services buyer deciding whether to trust a remote team, seeing the people is disproportionately persuasive. | `customer-research` |
| `referrals` | Past clients are the best lead source an agency has, and Devaxl has 27 delighted ones with no structured ask. | `offers` |
| `revops` | Lead lifecycle and handoff. Devaxl builds a CRM (Nrtur) — dogfooding it here is both operationally right and a marketing story. | `analytics` |
| `pricing` | Not SaaS tiers — service packaging, and the decision on whether to publish a "from $X" anchor. Publishing one filters tyre-kickers hard. | `offers` |
| `marketing-loops` | Turns the above into recurring agent-run workflows (weekly ranking check, content refresh, review mining). | Everything else |
| `marketing-council` | Multi-expert review of the positioning and offer before committing to them. Cheap sanity check. | `product-marketing` |

---

## Tier 3 — Conditional (9)

Applicable only if a specific decision goes a particular way. Don't run these speculatively.

| Skill | Condition |
|---|---|
| `ads` | Only with budget **and** analytics in place. "Software development agency" keywords are among the most expensive in Google Ads, and agency paid search attracts low-quality leads. LinkedIn ABM against a named target list is the better bet — but it needs the target list first. |
| `ad-creative` | Only if `ads` is running. Nothing to create creative for otherwise. |
| `ab-testing` | Needs traffic volume the site almost certainly doesn't have. Running a test on 200 visitors a month produces noise dressed as insight. Revisit once analytics shows the real number. |
| `popups` | Possible for an exit-intent lead-magnet capture, but it fights the brand — "premium, understated, no shouting". Only with a genuinely valuable magnet behind it. |
| `launch` | Applies to launching a *new service line* or a flagship case study, not to a product release. Real but occasional. |
| `events` | Conference speaking and sponsored dinners work well for agencies. Purely a budget-and-time decision. |
| `co-marketing` | Joint content with adjacent, non-competing partners (a design studio, a devtool vendor). Needs a partner before it needs a skill. |
| `influencer-marketing` | Only in the B2B sense — podcast sponsorships and dev-creator partnerships. Consumer influencer mechanics don't transfer. |
| `community-marketing` | Building a community is a multi-year commitment. For a small agency, showing up in existing communities (`prospecting`) beats building one. |

---

## Tier 4 — Does not apply (7)

These have no surface on a services business. Listed so nobody spends time on them.

| Skill | Why not |
|---|---|
| `aso` | No iOS or Android app. Devaxl *builds* mobile apps for clients; it doesn't publish one. |
| `signup` | No account creation anywhere on the site. The conversion is booking a call. |
| `onboarding` | No product to activate users into. Client onboarding is a delivery-ops concern, not this skill. |
| `paywalls` | Nothing is gated. No free tier, no upgrade moment. |
| `churn-prevention` | No subscriptions, no cancel flow, no dunning. Retainer renewal is an account-management conversation, not a save offer. |
| `sms` | Wrong channel for a CTO evaluating a six-figure engagement. Would damage the brand. |
| `marketing-ideas` | Not *inapplicable* so much as redundant — it's a brainstorming starter for people with no direction. The `marketing-plan` and this audit already supply the direction. Skip it. |

---

## The honest summary

Measurement was the first blocker and it's now handled — Plausible is wired up
with six events, pending one env var in Vercel.

That leaves one thing that matters more than the other 49 combined:

**The offer is buried.** The fixed-fee discovery — pay a defined amount, get a
written plan with scope, timeline, and named team, then decide — is a genuinely
strong, risk-reversing offer for a nervous buyer. It is currently the fourth
sentence of an FAQ answer. Naming it, pricing it, and putting it on the homepage
is the highest-leverage change available, and it needs a business decision from
you rather than a code change.

Everything else is amplification of that.
