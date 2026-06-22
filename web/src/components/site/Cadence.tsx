import { CalendarCheck, Check, MessagesSquare, MonitorPlay } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHead } from "./SectionHead";

type Beat = { icon: LucideIcon; when: string; title: string; body: string };

const RHYTHM: Beat[] = [
  {
    icon: CalendarCheck,
    when: "Start of week",
    title: "A plan you can see",
    body: "Every week opens with what we're building, why, and what done looks like — written down, not implied.",
  },
  {
    icon: MessagesSquare,
    when: "Throughout",
    title: "Answers in hours",
    body: "We work inside your Slack and your tools. Questions get answered the same day, not parked for a status meeting.",
  },
  {
    icon: MonitorPlay,
    when: "End of week",
    title: "Something to click",
    body: "Each week closes with a demoable increment running in a real environment — progress you can use, not just a report.",
  },
];

const ALWAYS = [
  "Your repositories, your cloud accounts — full access from day one",
  "Production-grade from the first commit: tests, CI/CD, monitoring",
  "One accountable engagement lead, reachable directly",
  "Honest status — including the parts that are behind or unclear",
];

export function Cadence() {
  return (
    <section className="border-b border-faint py-24 max-md:py-16">
      <div className="wrap">
        <SectionHead eyebrow="The rhythm" title="What working with us actually feels like.">
          The phases above describe the arc. Week to week, the experience is the
          same simple loop — plan, build, demo, repeat.
        </SectionHead>

        <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1 max-md:gap-4">
          {RHYTHM.map(({ icon: Icon, when, title, body }) => (
            <div
              key={title}
              data-reveal
              className="flex flex-col rounded-lg border border-subtle bg-surface-1 p-7 shadow-[var(--shadow-sm),var(--inner-top)]"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-md border border-[rgba(255,182,0,0.25)] bg-accent-quiet text-accent">
                  <Icon className="size-[21px]" strokeWidth={1.75} />
                </span>
                <span className="rounded-pill border border-faint px-[10px] py-1 font-mono text-[11px] uppercase tracking-caps text-tertiary">
                  {when}
                </span>
              </div>
              <h3 className="mt-5 text-[18px] font-semibold tracking-[-0.01em] text-primary">
                {title}
              </h3>
              <p className="mt-3 text-[14px] leading-normal text-secondary">
                {body}
              </p>
            </div>
          ))}
        </div>

        {/* What you always get */}
        <div
          data-reveal
          className="mt-5 rounded-lg border border-subtle bg-surface-1 p-7 shadow-[var(--shadow-sm),var(--inner-top)] max-md:mt-4"
        >
          <h3 className="text-[13px] font-semibold uppercase tracking-caps text-tertiary">
            On every engagement
          </h3>
          <ul className="mt-5 grid grid-cols-2 gap-x-8 gap-y-3.5 max-md:grid-cols-1">
            {ALWAYS.map((a) => (
              <li
                key={a}
                className="flex items-start gap-2.5 text-[14px] leading-normal text-primary"
              >
                <Check className="mt-0.5 size-4 shrink-0 text-accent" strokeWidth={2} />
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
