import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-b border-faint py-[120px] text-center max-md:py-[84px]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 120% at 50% 100%, rgba(255,182,0,0.15) 0%, transparent 64%)",
        }}
      />
      {/* Drifting soft glow for depth (CSS-animated; reduced-motion freezes it) */}
      <div
        aria-hidden
        className="glow-drift-slow pointer-events-none absolute bottom-[-220px] left-1/2 h-[520px] w-[760px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,182,0,0.12) 0%, transparent 66%)",
        }}
      />
      <div className="wrap relative" data-reveal>
        <h2 className="t-display mx-auto max-w-[760px]">Ready to ship your product?</h2>
        <p className="mx-auto mt-5 max-w-[520px] text-[18px] text-secondary max-md:text-[16px]">
          Tell us where your product is today. We&rsquo;ll tell you exactly how
          we&rsquo;d help.
        </p>
        <div className="mt-9 flex justify-center gap-3.5 max-md:flex-col max-md:items-stretch">
          <Button size="lg" className="max-md:w-full">
            Book a scoping call
          </Button>
          <Button variant="ghost" size="lg" className="max-md:w-full">
            See our work
          </Button>
        </div>
      </div>
    </section>
  );
}
