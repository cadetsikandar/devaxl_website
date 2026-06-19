# DevAXL Design System

A dark, high-contrast, confident brand system for **DevAXL** — a premium software
development agency that builds, launches, and scales SaaS products for startup
founders and CTOs. The aesthetic ceiling is top-tier product companies — Stripe,
Vercel, Linear, Ramp — even though DevAXL is a services company. Premium brands
don't shout: generous spacing, sharp typographic rhythm, motion implied through
layout, and exactly **one** accent color.

---

## Sources

This system was created from a written brief plus two brand screenshots
(no codebase or Figma was provided):

- `uploads/Screenshot 2026-06-19 122204.png` — the DevAXL wordmark on near-black.
- `uploads/Screenshot 2026-06-19 122257.png` — browser-tab favicon ("X" mark).

The logo was extracted to a transparent-background PNG at `assets/devaxl-logo.png`.

---

## CONTENT FUNDAMENTALS — how DevAXL writes

- **Voice:** confident, understated, technical-but-human. We sound like senior
  engineers who have shipped, not like a sales team. No hype, no exclamation marks.
- **Person:** "we" for DevAXL, "you" for the client. ("We turn your roadmap into
  shipped product.")
- **Tense & mood:** active, present, outcome-first. Verbs lead: *build, launch,
  scale, ship, deploy.*
- **Casing:** sentence case for headlines and UI. UPPERCASE only for tracked
  eyebrows/overlines (e.g. `PLATFORM ENGINEERING`). Never title-case headlines.
- **Length:** headlines are short and declarative (3–7 words). Body is plain and
  specific — concrete numbers over adjectives ("launched in 11 weeks", "99.98%
  uptime"), never vague claims ("blazing fast", "best-in-class").
- **Numbers:** lead with real metrics. They carry credibility better than copy.
- **Punctuation flourish:** a single amber period or detail can punctuate a
  headline ("world-class SaaS products.") — used once, never repeatedly.
- **Emoji:** never. Not part of the brand.
- **Examples:**
  - Headline: *We build, launch, and scale world-class SaaS products.*
  - Eyebrow: *DESIGN DIRECTION · V1*
  - CTA: *Start a project* / *View our work*
  - Body: *A premium engineering partner for founders and CTOs.*

---

## VISUAL FOUNDATIONS

**Overall vibe:** near-black, premium, engineered. Lots of negative space. The
amber accent appears rarely and deliberately — it should feel like a single lit
element on a dark stage.

- **Color:** canvas `#0A0A0C`; card surfaces lift in small steps
  (`#121216 → #18181E → #202028 → #2A2A33`). Text is a warm off-white
  (`#F4F4F1`) fading through muted greys. **One accent** — a bright golden amber
  `#FFB600` (DevAXL brand). Used sparingly (CTAs, key numbers, eyebrows, icons,
  active states, one hero highlight) and kept under ~10% of any screen. Status colors (green/red/blue) exist but
  are used sparingly. See `tokens/colors.css`.
- **Type:** Geist (modern grotesk) for everything; Geist Mono for code, shell,
  and metadata. Display/headlines are tight (`-0.02` to `-0.03em` tracking),
  weight 600, line-height ~1.05–1.18. Body is 16–18px at 1.5–1.65. See
  `tokens/typography.css`.
- **Spacing:** 4px base grid; generous rhythm. Sections breathe (80–128px
  vertical). See `tokens/spacing.css`.
- **Backgrounds:** flat near-black. The **only** decorative treatment is a
  Stripe-style amber gradient-mesh glow at low opacity (`--hero-mesh`, ≤11%),
  used **behind the hero only**, optionally over a faint masked grid. No photos,
  no textures, no full-bleed imagery by default.
- **Borders:** hairlines are white at low alpha (`.06 → .20`). Default card
  border is `--line-subtle` (.09); hover lifts to `--line` (.13).
- **Corners:** composed, not bubbly. Cards `14px` (`--radius-lg`); inputs/buttons
  `10px`; pills for badges. Nothing fully rounded except status pills.
- **Elevation:** on near-black, elevation = a hairline ring + a soft black shadow,
  plus a 1px top inner-highlight (`--inner-top`) to imply a lit edge. The amber
  **glow** (`--glow-accent`) is reserved for the single most important element on
  a view (one hero card / CTA hover).
- **Transparency & blur:** glass (`--blur-glass`) is available for overlays/sticky
  bars but used rarely; the brand prefers solid surfaces.
- **Motion:** quick and confident, never bouncy. Entrances ease-out
  (`cubic-bezier(0.16,1,0.3,1)`), 120–280ms. Motion is mostly *implied through
  layout* — alignment, rhythm, and a subtle hover lift — rather than animation.
- **Hover states:** primary button brightens (`--accent-hover`) and gains the
  amber glow; ghost button fills to `--surface-2` with a stronger border;
  interactive cards lift `-2px` with a deeper shadow.
- **Press states:** buttons scale to `0.98` (a small, confident press). No color
  inversion.
- **Imagery vibe (when used):** warm, low-key, high-contrast on dark; never bright
  or saturated. Default to no imagery.

---

## ICONOGRAPHY

No icon set was provided in the brief. The system's recommendation:

- **Library:** **Lucide** (https://lucide.dev) — a clean, consistent 1.5–2px
  stroke set that matches the grotesk/engineered tone. Load from CDN
  (`https://unpkg.com/lucide@latest`) or `lucide-react` in product code. *(This is
  a substitution — no brand icon set was supplied. See Caveats.)*
- **Style rules:** stroke icons only (no filled/duotone), `1.75px` stroke,
  rounded line caps, sized 16/20/24. Icons inherit `currentColor` — default
  `--text-secondary`, never amber unless the icon *is* the one highlighted element.
- **Emoji:** never used as icons.
- **Unicode:** the middot `·` is used as a separator in eyebrows/metadata; the em
  dash `—` in headlines. No other glyph-as-icon usage.
- **Logo:** `assets/devaxl-logo.png` (transparent bg). The wordmark carries amber
  accents in the mark itself — when the logo is present, keep surrounding amber to
  a minimum so it stays the hero.

---

## INDEX — what's in this system

**Root**
- `styles.css` — global entry point (imports only). Consumers link this one file.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skills-compatible front door.
- `assets/devaxl-logo.png` — DevAXL wordmark (transparent).

**Tokens** (`tokens/`, all `@import`ed by `styles.css`)
- `fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `elevation.css` · `motion.css`

**Foundation cards** (`guidelines/*.card.html`) — specimen cards shown in the
Design System tab: surfaces, ink ramp, amber accent, borders & status, display /
headings / body / mono type, spacing scale, radii, elevation, logo, hero mesh.

**Components** (`components/core/`) — React primitives
- `Button` (primary amber / secondary ghost / ghost / danger; sm·md·lg)
- `Card` (lifted surface; `interactive`, `highlight`)
- `Badge` (neutral / accent / success / danger; optional dot)
- `Input` (dark field, amber focus ring, label/hint/prefix/invalid)
- Each has `.jsx` + `.d.ts` + `.prompt.md`; `core.card.html` demos them.

**UI kits** (`ui_kits/`)
- `brand/index.html` — the **DevAXL Direction Board**: hero, color system, type
  scale, spacing & radius, and component/sample-card showcase.
- `website/index.html` — the full **DevAXL agency homepage**: nav, hero with a
  floating product showcase, proof strip, capability stack, outcome/work cards,
  process rail, engagement models, testimonials, final CTA, and footer. All
  client-specific content is marked `[PLACEHOLDER]`.

---

## Caveats

- **Accent hex** is the DevAXL brand gold `#FFB600` (a bright golden amber). Text
  on an amber button is near-black `#0A0A0C`; hover/pressed deepen to `#E0A000`.
  Change `--amber-400`/`--accent` in `tokens/colors.css` if it is ever rebranded.
- **Fonts** (Geist / Geist Mono) load from the Google Fonts CDN — no brand font
  files were provided. Supply licensed files to self-host.
- **Icons** default to Lucide as a substitution — confirm or swap for a chosen set.
