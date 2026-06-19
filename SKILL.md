---
name: devaxl-design
description: Use this skill to generate well-branded interfaces and assets for DevAXL, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Quick orientation:
- `styles.css` — link this single file to inherit every token (colors, type, spacing, elevation, motion, fonts).
- `tokens/` — the CSS custom properties. Reference semantic aliases (`--accent`, `--surface-card`, `--text-primary`) in product code.
- `components/core/` — React primitives (Button, Card, Badge, Input).
- `ui_kits/brand/index.html` — the DevAXL Direction Board, a full example layout.
- `assets/devaxl-logo.png` — the wordmark.

Non-negotiables: near-black canvas, off-white/grey text, **one** warm amber accent used sparingly, Geist grotesk, generous spacing, sentence-case copy, no emoji.
