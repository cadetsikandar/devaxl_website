import { Counter } from "@/components/ui/Counter";
import { Marquee } from "@/components/ui/Marquee";

const LOGOS = ["Northwind", "Loomly", "Cadence", "Vantage", "Hearth", "Meridian"];

const METRICS = [
  {
    value: 40,
    suffix: "+",
    unit: "products",
    desc: "shipped to production",
  },
  {
    value: 12,
    suffix: "+",
    unit: "years",
    desc: "senior-team experience",
  },
  {
    value: 98,
    suffix: "%",
    unit: "on-time",
    desc: "launch rate across engagements",
  },
];

export function Proof() {
  return (
    <section className="border-b border-faint py-11">
      <div className="wrap">
        {/* Logo wall — [PLACEHOLDER client logos] */}
        <div className="mb-10 flex items-center gap-4" data-reveal>
          <Marquee>
            {LOGOS.map((name) => (
              <span
                key={name}
                className="text-[18px] font-bold tracking-[-0.02em] text-secondary"
              >
                {name}
              </span>
            ))}
          </Marquee>
        </div>
        <div className="mb-8" data-reveal>
          <span className="ph">[PLACEHOLDER client logos]</span>
        </div>

        {/* Metrics — [PLACEHOLDER: confirm real figures] */}
        <div className="grid grid-cols-3 gap-7 max-md:grid-cols-1 max-md:gap-6">
          {METRICS.map((m) => (
            <div
              key={m.unit}
              data-reveal
              className="border-l border-[var(--line)] pl-5"
            >
              <div className="text-[clamp(2rem,1.4rem+1.6vw,2.75rem)] font-semibold tracking-tight">
                <span className="text-accent">
                  <Counter value={m.value} suffix={m.suffix} />
                </span>{" "}
                {m.unit}
              </div>
              <div className="mt-1.5 text-[14px] text-secondary">{m.desc}</div>
              <span className="ph mt-2.5">[PLACEHOLDER: confirm real figures]</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
