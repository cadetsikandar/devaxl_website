Primary CTA + ghost/secondary actions — use the amber `primary` for the single most important action on a view; everything else is `secondary` or `ghost`.

```jsx
<Button variant="primary" size="lg">Start a project</Button>
<Button variant="secondary">View work</Button>
```

Variants: `primary` (solid amber, glows on hover), `secondary` (ghost outline), `ghost` (no border), `danger`. Sizes: `sm` / `md` / `lg`. Props: `iconLeft`, `iconRight`, `full`, `disabled`. Never place two `primary` buttons side by side.
