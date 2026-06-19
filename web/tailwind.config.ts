import type { Config } from "tailwindcss";

/**
 * DevAXL brand tokens are the source of truth and live as CSS custom
 * properties in globals.css (ported from the DevAXL Design System).
 * Tailwind utilities below resolve to those variables so the whole app
 * stays token-driven — never raw hex in components.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "var(--canvas)",
        base: "var(--black)",
        surface: {
          1: "var(--surface-1)",
          2: "var(--surface-2)",
          3: "var(--surface-3)",
          4: "var(--surface-4)",
        },
        ink: {
          100: "var(--ink-100)",
          200: "var(--ink-200)",
          300: "var(--ink-300)",
          400: "var(--ink-400)",
          500: "var(--ink-500)",
        },
        accent: {
          DEFAULT: "var(--amber-400)",
          hover: "var(--amber-500)",
          quiet: "var(--amber-tint)",
          50: "var(--amber-50)",
          100: "var(--amber-100)",
          200: "var(--amber-200)",
          300: "var(--amber-300)",
          400: "var(--amber-400)",
          500: "var(--amber-500)",
        },
        success: "var(--green-400)",
        danger: "var(--red-400)",
        info: "var(--blue-400)",
        // semantic text aliases
        primary: "var(--ink-100)",
        secondary: "var(--ink-300)",
        tertiary: "var(--ink-400)",
        "on-accent": "var(--text-on-accent)",
      },
      borderColor: {
        faint: "var(--line-faint)",
        subtle: "var(--line-subtle)",
        DEFAULT: "var(--line)",
        strong: "var(--line-strong)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        xs: "var(--radius-xs)",
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
        pill: "var(--radius-pill)",
      },
      boxShadow: {
        xs: "var(--shadow-xs)",
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
        glow: "var(--glow-accent)",
      },
      maxWidth: {
        container: "1180px",
        wide: "1360px",
      },
      letterSpacing: {
        tighter: "-0.03em",
        tight: "-0.02em",
        caps: "0.12em",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.16, 1, 0.3, 1)",
        standard: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
