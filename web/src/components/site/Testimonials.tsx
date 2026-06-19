import { SectionHead } from "./SectionHead";

// Real client reviews from Upwork & Fiverr.
const QUOTES = [
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

export function Testimonials() {
  return (
    <section id="about" className="border-b border-faint py-24 max-md:py-16">
      <div className="wrap">
        <SectionHead eyebrow="Clients" title="Trusted by founders and teams.">
          Ten five-star reviews from clients on Upwork and Fiverr.
        </SectionHead>

        {/* Masonry wall — varying heights, balanced across columns */}
        <div className="[column-gap:20px] md:columns-2 lg:columns-3">
          {QUOTES.map((q) => (
            <figure
              key={q.name + q.quote.slice(0, 12)}
              data-reveal
              className="mb-5 break-inside-avoid rounded-lg border border-subtle bg-surface-1 p-6 shadow-[var(--shadow-sm),var(--inner-top)]"
            >
              <span aria-hidden className="font-mono text-[30px] leading-none text-accent">
                &ldquo;
              </span>
              <blockquote className="mt-3 text-[15px] leading-relaxed text-primary">
                {q.quote}
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-faint pt-4">
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
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
