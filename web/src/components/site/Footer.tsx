import Image from "next/image";
import logo from "../../../public/devaxl-logo.png";

const COLS = [
  {
    title: "Company",
    links: [
      { label: "Work", href: "#work" },
      { label: "Services", href: "#services" },
      { label: "Process", href: "#process" },
      { label: "About", href: "#about" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "MVP Build", href: "#services" },
      { label: "Dedicated Team", href: "#services" },
      { label: "Modernization", href: "#services" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "hello@devaxl.com", href: "mailto:hello@devaxl.com" },
      { label: "Book a call", href: "#contact" },
      { label: "Careers", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="pb-12 pt-[72px]">
      <div className="wrap">
        <div className="grid grid-cols-[1.6fr_1fr_1fr_1fr] gap-10 border-b border-faint pb-12 max-md:grid-cols-2 max-md:gap-x-5 max-md:gap-y-7">
          <div className="max-md:col-span-2">
            <Image src={logo} alt="DevAXL" className="mb-[18px] h-6 w-auto" style={{ height: 24, width: "auto" }} />
            <p className="max-w-[280px] text-[14px] leading-[1.65] text-secondary">
              A premium product engineering studio. We design, build, and scale
              SaaS products for founders and CTOs.
            </p>
          </div>
          {COLS.map((col) => (
            <div key={col.title}>
              <h2 className="mb-4 font-semibold uppercase tracking-caps text-tertiary text-[11px]">
                {col.title}
              </h2>
              {col.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="mb-[11px] block text-[14px] text-secondary transition-colors duration-[120ms] hover:text-primary"
                >
                  {l.label}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between pt-7 text-[13px] text-tertiary max-md:flex-col max-md:items-start max-md:gap-4">
          <span>© 2026 DevAXL. All rights reserved.</span>
          <div className="flex gap-5">
            {["X", "LinkedIn", "GitHub", "Dribbble"].map((s) => (
              <a key={s} href="#" className="transition-colors duration-[120ms] hover:text-accent">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
