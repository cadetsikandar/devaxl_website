const FACTS = [
  { stat: "8+", label: "products shipped to production" },
  { stat: "10", label: "five-star client reviews" },
  { stat: "Top-rated", label: "on Upwork & Fiverr" },
  { stat: "Remote", label: "working with teams worldwide" },
];

export function AboutStory() {
  return (
    <section className="border-b border-faint py-24 max-md:py-16">
      <div className="wrap grid grid-cols-[1.3fr_1fr] gap-16 max-lg:grid-cols-1 max-lg:gap-10">
        {/* Narrative */}
        <div data-reveal>
          <span className="eyebrow">Who we are</span>
          <h2 className="t-h2 mt-4 max-w-[18ch]">
            A studio built around the people who write the code.
          </h2>
          <div className="mt-7 flex max-w-[58ch] flex-col gap-5 text-[16px] leading-[1.7] text-secondary">
            <p>
              Devaxl is a small, senior product engineering studio. We design,
              build, and scale SaaS and AI products for founders and CTOs — and we
              keep the team deliberately lean so the engineers you meet are the
              engineers who ship.
            </p>
            <p>
              Most agencies grow by adding layers: account managers, project
              coordinators, junior delivery pods. We grew the other way. A tight
              group of senior people, AI woven through everything we do, and a
              direct line between the person describing the problem and the person
              solving it. No translation loss, no hand-offs, no waiting a week for
              an answer.
            </p>
            <p>
              That model shows up in the work. We&apos;ve taken validated ideas to
              revenue-ready v1s, rescued aging platforms that had stopped scaling,
              and embedded with in-house teams as a long-term squad. The thread
              through all of it: clear plans, weekly demoable progress, and code
              you fully own from the first commit.
            </p>
          </div>
        </div>

        {/* Facts rail */}
        <div data-reveal className="flex flex-col gap-4">
          {FACTS.map((f) => (
            <div
              key={f.label}
              className="flex items-baseline gap-4 rounded-lg border border-subtle bg-surface-1 px-6 py-5 shadow-[var(--shadow-sm),var(--inner-top)]"
            >
              <span className="text-[28px] font-semibold tracking-tight text-accent">
                {f.stat}
              </span>
              <span className="text-[14px] leading-snug text-secondary">
                {f.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
