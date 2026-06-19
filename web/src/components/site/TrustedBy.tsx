import { ShieldCheck } from "lucide-react";

// Quiet credibility row — [PLACEHOLDER badges: swap for real awards/certs].
const BADGES = [
  "SOC 2 Type II",
  "Clutch Top Developer",
  "AWS Partner",
  "G2 High Performer",
  "ISO 27001",
];

export function TrustedBy() {
  return (
    <section className="border-b border-faint py-12 max-md:py-10">
      <div className="wrap flex flex-col items-center gap-6">
        <span
          data-reveal
          className="font-mono text-[11px] uppercase tracking-caps text-tertiary"
        >
          Trusted &amp; verified
        </span>
        <div
          data-reveal
          className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3"
        >
          {BADGES.map((b) => (
            <span
              key={b}
              className="inline-flex items-center gap-2 rounded-pill border border-faint bg-surface-1 px-4 py-2 text-[12px] font-medium text-secondary opacity-80 transition-opacity duration-[180ms] hover:opacity-100"
            >
              <ShieldCheck className="size-[14px] text-tertiary" strokeWidth={1.75} />
              {b}
            </span>
          ))}
        </div>
        <span data-reveal className="ph">
          [PLACEHOLDER badges]
        </span>
      </div>
    </section>
  );
}
