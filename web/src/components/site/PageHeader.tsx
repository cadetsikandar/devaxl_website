export function PageHeader({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="relative overflow-hidden border-b border-faint pb-16 pt-[88px] max-md:pb-10 max-md:pt-12">
      {/* faint top glow for depth, consistent with the home hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(42% 60% at 78% 0%, rgba(255,182,0,0.08) 0%, transparent 62%)",
        }}
      />
      <div className="wrap relative">
        <span className="eyebrow" data-reveal>
          {eyebrow}
        </span>
        <h1 className="t-display mt-5 max-w-[14ch]" data-reveal>
          {title}
        </h1>
        {intro ? (
          <p
            className="mt-6 max-w-[560px] text-[18px] leading-[1.65] text-secondary max-md:text-[16px]"
            data-reveal
          >
            {intro}
          </p>
        ) : null}
        {children}
      </div>
    </header>
  );
}
