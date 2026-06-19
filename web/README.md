# DevAXL — Homepage

Production homepage for **DevAXL**, a product-engineering studio. Dark near-black
canvas with a single gold accent (`#FFB600`), tight Geist grotesk headings, and a
restrained, premium feel. Built on the existing **DevAXL Design System** (tokens in
`../tokens`, logo in `../assets`) — those tokens are ported verbatim into
`src/app/globals.css` so this app is the single source of truth at runtime.

## Stack

- **Next.js 14 (App Router) + TypeScript**
- **Tailwind CSS** — utilities resolve to brand tokens (CSS variables) via `tailwind.config.ts`; no raw hex in components
- **shadcn/ui** patterns — `src/components/ui/button.tsx` (cva variants), fully restyled to brand
- **Framer Motion** — UI motion (hero mesh drift, mouse-parallax showcase, mobile menu)
- **GSAP + ScrollTrigger** — scroll-driven reveals, process-rail line draw, number counters
- **Lenis** — smooth scroll, integrated with the GSAP ticker
- **Geist** (`geist` package) via `next/font` — no FOIT
- **lucide-react** — SVG icons (no emoji)

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (type-checked, static)
```

## Structure

```
src/
  app/
    layout.tsx        # fonts + <SmoothScroll/> motion controller
    page.tsx          # section composition
    globals.css       # ported brand tokens + showcase mock styles + reduced-motion
  components/
    site/             # Nav, Hero, ProductShowcase, Proof, Capabilities,
                      # SelectedWork, Process, Engagement, Testimonials,
                      # FinalCta, Footer, SectionHead, SmoothScroll
    ui/               # button (shadcn/cva), Counter, Marquee
  lib/utils.ts        # cn()
```

## Animation rules (enforced)

- Only `transform` and `opacity` are animated — never layout properties (no CLS).
- `prefers-reduced-motion: reduce` disables Lenis, all GSAP reveals, parallax, the
  hero mesh drift, counters, and the marquee. The CSS media query also hard-forces
  every `[data-reveal]` element fully visible, so content is never hidden.
- Reveals are lazy: ScrollTrigger animates each element only as it enters view.

## Placeholders to replace with real assets

Every placeholder is tagged in the UI with a dashed `.ph` chip and a `[PLACEHOLDER]`
label. Search the source for `PLACEHOLDER`:

- **Hero** — floating dashboard + mobile mocks → real client screenshots
- **Proof** — logo wall → real client logos; metrics (40+, 12+, 98%) → confirm real figures
- **Selected Work** — card thumbnails → real project screenshots
- **Testimonials** — quote text → real attributed quotes

## Responsive

One codebase, fluid `clamp()` type, continuous from 360px → 2560px. Centered
`max-w` (~1180px) so ultrawide doesn't stretch. Mobile (`max-md`): hamburger nav,
single-column cards, vertical process rail, hero stacks (copy → mockup),
swipeable testimonial carousel. Verified at 375px (no horizontal overflow) and 1440px.
