# Measurement plan

From the `analytics` and `attribution` skills.

## Status: Plausible is wired up ✅

Previously the site measured nothing — no page views, no CTA clicks, no form
submissions. Plausible is now installed with all six events below implemented
and verified in the browser.

**One step left, and it's yours:** create the `devaxl.com` site in Plausible,
then set `NEXT_PUBLIC_PLAUSIBLE_DOMAIN=devaxl.com` in Vercel → Settings →
Environment Variables, **Production only**. Until that variable is set the
script never loads and no events are sent — which is what keeps local dev and
preview deploys out of your numbers.

Why Plausible over the alternatives, for the record:

| Option | Fit | Cost |
|---|---|---|
| **Plausible** ← chosen | Cookieless, so **no consent banner** — which matters, because a banner costs conversions on a page like this. Tiny script, matches an uncluttered premium site, and enough for a low-volume high-value funnel. | ~$9/mo |
| PostHog | Worth adding later if you want session replay on the contact form. Heavier script. | Generous free tier |
| GA4 + GTM | Only becomes necessary the day you run Google Ads. Needs a consent banner. | Free |

## Tracking plan — all six implemented

Resist adding more; an unused event is a liability.

| Event | Fires when | Properties | Why it matters |
|---|---|---|---|
| `cta_book_call_clicked` | Any booking CTA — 7 on the homepage alone | `location` (`nav`, `hero`, `engagement`, `final_cta`, `footer`, `contact_page`) + `tier` on engagement cards | **The primary conversion.** Tells you which section drives bookings, and which engagement model people self-select into. |
| `contact_form_started` | First keystroke in any field | — | The denominator for form abandonment. Without it you can't tell "nobody visits" from "everybody bails". |
| `contact_form_submitted` | Successful `200` from `/api/contact` | `has_phone` | The secondary conversion. |
| `contact_form_failed` | Non-200 or network error | `reason` (`http_500`, `network`…) | A silently broken form is the most expensive bug this site can have. Verified: with `WEB3FORMS_KEY` unset the API returns 500 and this fires with `reason: http_500`. |
| `case_study_viewed` | Case study page mount | `slug`, `name` | Which proof does the work. Feeds which case studies get promoted. |
| `email_or_phone_clicked` | `mailto:` / `tel:` click | `channel`, `location` | A real conversion for this audience that pageview analytics never counts. |

Outbound link clicks are also tracked automatically — the `script.outbound-links.js`
variant is loaded, so Calendly clicks appear as outbound clicks *as well as*
`cta_book_call_clicked`. The named event is the one to build reports on.

### Where the code lives

- [web/src/lib/analytics.ts](../web/src/lib/analytics.ts) — the closed event union and `track()`. Calling it when the script is absent is a safe no-op, so analytics can never break a CTA.
- [web/src/components/analytics/Plausible.tsx](../web/src/components/analytics/Plausible.tsx) — the script, env-gated.
- [web/src/components/analytics/TrackedLink.tsx](../web/src/components/analytics/TrackedLink.tsx) — an `<a>` that fires an event on click. Doesn't delay navigation: Plausible uses `sendBeacon`, which survives unload.
- [web/src/components/analytics/PageEvent.tsx](../web/src/components/analytics/PageEvent.tsx) — fires once on mount, so a server component can report a view without becoming a client component.

Adding a seventh event means adding it to the union in `analytics.ts` **and** to
the table above. The type won't compile otherwise, which is the point.

## Self-reported attribution ✅

For a business whose leads come from referrals, LinkedIn, and podcasts, no
tracking tool can see the truth — dark social is invisible by construction. One
dropdown out-performs every attribution model available here.

**Built:** an optional "How did you hear about us?" field, last in the contact
form. Options are defined once in
[web/src/lib/referralSources.ts](../web/src/lib/referralSources.ts) and shared
by the form and the API:

> Someone referred you · Google search · An AI assistant (ChatGPT, Claude,
> Perplexity…) · LinkedIn · Clutch, G2, or another directory · A podcast, talk,
> or event · Something else

The answer goes two places:

- **Into the `contact_form_submitted` event** as a `source` prop, so you can
  segment conversions by real source in Plausible. Unanswered submissions send
  `source: not_answered` rather than nothing — so the response rate on the field
  is itself visible.
- **Into the enquiry email** as `heard_about_us`, so whoever picks the lead up
  has the context before the first reply.

The API resolves the submitted value against the allowlist and drops anything
unrecognised, so an unknown or malicious value is never echoed into the email —
and never rejects the lead. Verified: posting a junk `source` is accepted
exactly like a valid one.

**The "An AI assistant" option is the important one.** It is the only way you
will learn whether the `ai-seo` work (llms.txt, schema, AI-crawler rules) is
producing enquiries — no analytics tool can attribute an AI-search referral.

## Also connect

- **Google Search Console** — not connected. It is free, and it is the only
  source of truth for impressions, queries, and the canonical/indexing recovery
  that the P0 fix in the SEO audit will trigger.
- **Bing Webmaster Tools** — free, two minutes, and it feeds Copilot and
  ChatGPT search.
- **Calendly conversion tracking** — Calendly can fire a redirect or postMessage
  event on booking. Without it, the funnel goes dark at the most important step:
  you'll see clicks to Calendly and never learn how many became meetings.

## What to look at, once it exists

Monthly, five numbers:

1. Organic sessions
2. Scoping calls booked
3. Contact form submissions
4. Session → conversion rate (the two above ÷ sessions)
5. Self-reported source mix

Do not build a dashboard for a site with this traffic volume. Five numbers in a
spreadsheet, once a month, is the correct amount of measurement here.
