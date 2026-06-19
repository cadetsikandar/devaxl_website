"use client";

import { useReducedMotion } from "framer-motion";
import { SectionHead } from "./SectionHead";

type Quote = { quote: string; name: string; src: string };

// Real client reviews from Upwork & Fiverr.
const QUOTES: Quote[] = [
  {
    quote:
      "DevAXL combine technical expertise with professionalism, communication, timeliness, and flexibility — for React, Strapi, and Node.js your search ends here.",
    name: "Wecept",
    src: "Upwork",
  },
  {
    quote:
      "One of the most talented teams on Upwork. Top-notch communication, every deadline met, super fast. Highly recommended.",
    name: "Cristiana",
    src: "Upwork",
  },
  {
    quote:
      "Totally recommended. Clear communication and delivery exactly as requested — clean and thorough.",
    name: "Takneo",
    src: "Fiverr",
  },
  {
    quote:
      "An amazing job; everything worked perfectly. Would definitely hire them again.",
    name: "Mark",
    src: "Fiverr",
  },
  {
    quote:
      "Needed html/css converted to Angular 8 — the team responded in minutes and finished in under a day.",
    name: "Laura",
    src: "Upwork",
  },
  {
    quote:
      "Finished exactly as I wanted and were very helpful setting up the demo site. Will keep working with them.",
    name: "Gary",
    src: "Upwork",
  },
  {
    quote:
      "Love the quality of service and attention to detail. Friendly and quick to respond.",
    name: "Tom",
    src: "Upwork",
  },
  {
    quote:
      "More than a five-star team — exceptional communication and understanding. They transformed our application.",
    name: "Mateen",
    src: "Upwork",
  },
  {
    quote:
      "Our app was full of bugs; they took ownership and resolved everything fast, with excellent communication.",
    name: "John",
    src: "Upwork",
  },
  {
    quote:
      "They moved our whole architecture to AWS and set up video hosting — our streaming is better than ever.",
    name: "Anthony",
    src: "Upwork",
  },
];

const ROW_TOP = QUOTES.slice(0, 5);
const ROW_BOTTOM = QUOTES.slice(5);

const EDGE_MASK =
  "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)";

function QuoteCard({ q }: { q: Quote }) {
  return (
    <figure className="group/card relative flex h-[248px] w-full flex-col overflow-hidden rounded-lg border border-subtle bg-surface-1 p-6 shadow-[var(--shadow-sm),var(--inner-top)] transition-transform duration-[200ms] ease-out hover:-translate-y-1">
      {/* amber spotlight glow on hover — gradient overlay opacity, not box-shadow */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 ease-out group-hover/card:opacity-100"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, rgba(255,182,0,0.15) 0%, transparent 70%)",
        }}
      />
      <div className="relative flex h-full flex-col">
        {/* gold quote mark directly above the quote */}
        <span aria-hidden className="font-mono text-[28px] leading-none text-accent">
          &ldquo;
        </span>
        <blockquote className="mt-2 line-clamp-5 text-[14px] leading-relaxed text-primary">
          {q.quote}
        </blockquote>
        <figcaption className="mt-auto flex items-center gap-3 border-t border-faint pt-4">
          <span
            aria-hidden
            className="flex size-9 shrink-0 items-center justify-center rounded-full bg-surface-3 text-[13px] font-semibold text-secondary"
          >
            {q.name.charAt(0)}
          </span>
          <span className="text-[14px] font-semibold text-primary">{q.name}</span>
          <span className="ml-auto rounded-pill border border-faint px-[9px] py-1 font-mono text-[11px] text-tertiary">
            {q.src}
          </span>
        </figcaption>
      </div>
    </figure>
  );
}

function MarqueeRow({
  items,
  reverse,
  duration,
}: {
  items: Quote[];
  reverse: boolean;
  duration: string;
}) {
  return (
    <div
      className="group relative overflow-hidden py-3"
      style={{ maskImage: EDGE_MASK, WebkitMaskImage: EDGE_MASK }}
    >
      <ul
        className="marquee-track flex w-max [will-change:transform] group-hover:[animation-play-state:paused]"
        style={{ animationDuration: duration, animationDirection: reverse ? "reverse" : "normal" }}
      >
        {[...items, ...items].map((q, i) => (
          <li key={i} className="mr-5 w-[360px] shrink-0 max-md:w-[300px]" aria-hidden={i >= items.length}>
            <QuoteCard q={q} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Testimonials() {
  const reduce = useReducedMotion();

  return (
    <section id="about" className="overflow-hidden border-b border-faint py-24 max-md:py-16">
      <div className="wrap">
        <SectionHead eyebrow="Clients" title="Trusted by founders and teams.">
          Ten five-star reviews from clients on Upwork and Fiverr.
        </SectionHead>
      </div>

      {reduce ? (
        // Reduced motion: clean uniform static grid, no scroll.
        <div className="wrap">
          <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
            {QUOTES.map((q) => (
              <QuoteCard key={q.name + q.quote.slice(0, 10)} q={q} />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-5" data-reveal>
          <MarqueeRow items={ROW_TOP} reverse duration="52s" />
          <MarqueeRow items={ROW_BOTTOM} reverse={false} duration="62s" />
        </div>
      )}
    </section>
  );
}
