# Conversion + copy review

From the `cro`, `copywriting`, `customer-research`, `offers`, and
`marketing-psychology` skills. Every rewrite below stays inside the DevAXL voice
rules (sentence case, no hype, no emoji, concrete numbers, one amber accent).

**Note on confidence:** with no analytics, none of this is validated against
behaviour. These are findings from the copy and the funnel structure, ranked by
how confident I am and how cheap they are to act on — not by measured impact.

---

## 1. The reviews say something different from the site

The 27 real Upwork and Fiverr reviews in `Testimonials.tsx` are the best
customer-research asset in the repo, and nobody has mined them. Read end to end,
the themes are strikingly consistent:

| Theme | Frequency | Verbatim |
|---|---|---|
| **Communication** | Dominant | "Top-notch communication, every deadline met" · "exceptional communication and understanding" |
| **Ownership of problems** | Strong | "Our app was full of bugs; they took ownership and resolved everything fast" |
| **Speed** | Strong | "responded in minutes and finished in under a day" |
| **Deadlines actually met** | Strong | "every deadline met" |
| Technology / AI | **Zero mentions** | — |

The site leads with *"We design, build, and scale SaaS & AI products"* — a
category statement. Clients, unprompted, describe *how it felt to work with
Devaxl*. For a buyer whose real fear is "will this agency go dark on me", the
second is far more persuasive than the first.

This isn't an argument for dropping the AI positioning — it's the differentiator
and it should stay. It's an argument that the **supporting** copy, the proof
numbers, and the testimonial section are currently arguing for the wrong thing.

**Action:** run the `customer-research` skill properly over all 27 reviews to
build a verbatim bank, then rewrite the homepage subhead and the proof stats
against it. A proof stat like *"every deadline met, across 21+ shipped
products"* does more work than *"Weeks not months"*.

---

## 2. The homepage's primary CTA doesn't convert

Current hero:

```
[ See what we've shipped ]   ← primary, amber, goes to /work
[ Book a scoping call ]      ← ghost, goes to Calendly
```

The visually dominant button sends people *deeper into the site*, away from the
conversion. The actual conversion action is the de-emphasised one.

There is a defensible argument for this — a cold visitor isn't ready to book,
and case studies build the trust that earns the booking. But two things make it
the wrong call here:

1. The nav already has a persistent "Book a call" button, so the booking path
   exists — but it's a small `sm` button competing with a large amber one.
2. The hero is the only place you get the full attention of a visitor who
   arrived *ready* to buy (a referral, say — which for an agency is the highest-
   volume source of good leads). Those people should not have to hunt.

**Recommended:** swap the emphasis, and make the secondary CTA state its value.

```
[ Book a scoping call ]              ← primary
[ See 21+ products we've shipped ]   ← ghost, /work
```

The number in the secondary label does real work: it converts a vague invitation
into a proof claim, so the button earns attention even when it isn't clicked.

**This one is worth A/B testing rather than assuming** — but only once there's
enough traffic to test on. Until then, ship the version that serves the
ready-to-buy visitor.

---

## 3. The strongest offer is buried in an FAQ

From FAQ answer #1:

> "…then a fixed-fee discovery: we pressure-test the problem, agree on success
> metrics, and return a written plan with scope, timeline, and team. You decide
> to proceed with full information — no open-ended retainers to find out what
> you are buying."

That is a genuinely good offer. It is risk reversal aimed squarely at the
buyer's biggest fear (*"what if I pay and get nothing"*), and it is the kind of
thing that separates a studio from a dev shop. It is currently the fourth
sentence of the fifth-most-read element on the page.

**Recommended:** name it, price it, and give it a section.

- Give it a name — "The Discovery Sprint", or similar.
- State the shape plainly: *one week, fixed fee, you get a written plan with
  scope, timeline, and named team. If you don't proceed, the plan is yours.*
- Publish the price. A number filters tyre-kickers before they reach a call, and
  a published price on a services site signals confidence in a market where
  nobody publishes anything.
- Put it between `Engagement` and `Insights` on the homepage, and make it the
  entry point for all three engagement models.

This is the highest-leverage change on the list. It's also the one that needs a
business decision from you, not a code change from me. Run the `offers` skill
once you've decided the shape.

---

## 4. Contact form friction

The form now asks: **Name · Email · Phone (optional) · What are you building? ·
How did you hear about us? (optional)**

The honeypot, the inline error handling, and the "we reply within one business
day" reassurance are all correct. Three notes:

- ✅ **The failure mode was silent.** If `WEB3FORMS_KEY` is unset the API returns
  a 500 and the user sees "The form isn't configured yet" — and you'd never find
  out. `contact_form_failed` now fires with the reason.
- ✅ **Self-reported attribution added** — see the
  [measurement plan](measurement-plan.md).
- 🟡 **Still recommend dropping the phone field.** It's optional so it blocks
  nobody, but on a short form every field is visual weight, and adding the source
  dropdown means the form grew rather than swapped. A CTO filling this in won't
  type their number and you don't need it — you have their email. Removing it
  would put the form back at four fields with better data than it started with.
- **The success state is good** and should be left alone — it names the reply
  window and offers two faster paths.

---

## 5. Smaller findings

| # | Finding | Fix |
|---|---|---|
| 5.1 | The proof stat "27 five-star reviews" doesn't say where from. Unattributed review counts read as invented. | "27 five-star reviews on Upwork and Fiverr" — and link them. The specificity *is* the credibility. |
| 5.2 | Testimonials show a first name and platform, no company or role. | Add role and company where permission exists. "Mateen" persuades less than "Mateen, CTO, [company]". |
| 5.3 | Client logo wall is six unlabelled images with `alt="Devaxl client 1"`. | Name the clients. An unnamed logo wall invites the suspicion that they're stock. |
| 5.4 | `/insights` links from the main nav to three articles the source marks `PLACEHOLDER`. | Replace or unpublish. See the [SEO audit](seo-audit.md). |
| 5.5 | "Weeks not months" as a proof stat is the only non-numeric one, and it's the vaguest claim on the page. | Replace with something checkable: "8–12 weeks to production v1" — which the FAQ already commits to. |
| 5.6 | Every engagement-tier CTA goes to the same Calendly link with no context. | Pass a UTM or Calendly query param per tier so you learn which offer people book against. |
| 5.7 | No pricing signal anywhere. | Even "engagements start at $X" filters hard and saves calls. Ties to finding #3. |

---

## Sequence

1. **Fix `/insights`** (this week) — placeholder content is actively harmful.
2. **Install analytics** — everything below is unmeasurable without it.
3. **Mine the 27 reviews** — the input to every rewrite.
4. **Decide the discovery offer** — the business decision the rest hangs on.
5. **Rewrite the hero** against the review language, and swap the CTA emphasis.
6. **Then** consider testing, paid, and the service-page split.
