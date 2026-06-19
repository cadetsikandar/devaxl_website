export function SectionHead({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="mb-[52px] max-w-[680px] max-md:mb-9" data-reveal>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="t-h2 mt-4">{title}</h2>
      {children ? (
        <p className="mt-4 text-[18px] leading-[1.65] text-secondary max-md:text-[16px]">
          {children}
        </p>
      ) : null}
    </div>
  );
}
