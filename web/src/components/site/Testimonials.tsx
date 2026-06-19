import { SectionHead } from "./SectionHead";

const QUOTES = [
  {
    quote:
      "The DevAXL team shipped our v1 faster than our last in-house attempt did a prototype — and it was production-grade.",
    name: "Maya Renner",
    role: "Founder & CEO, Loomly",
    src: "Upwork",
  },
  {
    quote:
      "They walked into a tangled five-year-old codebase and made it fast and predictable. The DevAXL team felt like our own.",
    name: "Daniel Osei",
    role: "CTO, Cadence",
    src: "Fiverr",
  },
  {
    quote:
      "An embedded squad that actually owned outcomes. The DevAXL team raised our delivery bar across the whole org.",
    name: "Priya Shah",
    role: "VP Product, Vantage",
    src: "Upwork",
  },
];

export function Testimonials() {
  return (
    <section id="about" className="border-b border-faint py-24 max-md:py-16">
      <div className="wrap">
        <SectionHead eyebrow="Clients" title="Trusted by founders and CTOs." />

        {/* Desktop: 3-up grid. Mobile: swipeable scroll-snap carousel. */}
        <div className="grid grid-cols-3 gap-5 max-md:-mx-5 max-md:flex max-md:snap-x max-md:snap-mandatory max-md:gap-3.5 max-md:overflow-x-auto max-md:px-5 max-md:pb-2 max-md:[scrollbar-width:none]">
          {QUOTES.map((q) => (
            <figure
              key={q.name}
              data-reveal
              className="flex flex-col rounded-lg border border-subtle bg-surface-1 p-7 shadow-[var(--shadow-sm),var(--inner-top)] max-md:min-w-[84%] max-md:snap-center"
            >
              <span aria-hidden className="font-mono text-[34px] leading-none text-accent">
                &ldquo;
              </span>
              <blockquote className="mt-3.5 flex-1 text-[16px] leading-[1.65] text-primary">
                {q.quote}{" "}
                <span className="ph align-middle">[PLACEHOLDER quote]</span>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-faint pt-5">
                <span aria-hidden className="size-[38px] shrink-0 rounded-full bg-surface-4" />
                <span>
                  <span className="block text-[14px] font-semibold">{q.name}</span>
                  <span className="mt-0.5 block text-[13px] text-tertiary">{q.role}</span>
                </span>
                <span className="ml-auto rounded-pill border border-faint px-[9px] py-1 font-mono text-[11px] text-tertiary">
                  {q.src}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
