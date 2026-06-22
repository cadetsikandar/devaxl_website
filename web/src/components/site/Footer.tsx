import Link from "next/link";
import { CALENDLY_URL, CONTACT, SOCIALS } from "@/lib/site";

const COLS = [
  {
    title: "Company",
    links: [
      { label: "Work", href: "/work" },
      { label: "Services", href: "/services" },
      { label: "Process", href: "/process" },
      { label: "Insights", href: "/insights" },
      { label: "About", href: "/about" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "MVP Build", href: "/services" },
      { label: "Dedicated Team", href: "/services" },
      { label: "Modernization", href: "/services" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-faint pb-12 pt-[72px]">
      <div className="wrap">
        <div className="grid grid-cols-[1.6fr_1fr_1fr_1.1fr] gap-10 border-b border-faint pb-12 max-md:grid-cols-2 max-md:gap-x-5 max-md:gap-y-7">
          <div className="max-md:col-span-2">
            <Link href="/" className="inline-block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/devaxlWhiteLogo.svg" alt="Devaxl" className="mb-3 h-[22px] w-auto" />
            </Link>
            <p className="mb-[18px] font-mono text-[11px] uppercase tracking-caps text-tertiary">
              Development accelerated
            </p>
            <p className="max-w-[280px] text-[14px] leading-[1.65] text-secondary">
              A premium product engineering studio. We design, build, and scale
              SaaS products for founders and CTOs.
            </p>
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <h2 className="mb-4 text-[11px] font-semibold uppercase tracking-caps text-tertiary">
                {col.title}
              </h2>
              {col.links.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="mb-[11px] block text-[14px] text-secondary transition-colors duration-[120ms] hover:text-primary"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          ))}

          <div>
            <h2 className="mb-4 text-[11px] font-semibold uppercase tracking-caps text-tertiary">
              Contact
            </h2>
            <a
              href={CONTACT.emailHref}
              className="mb-[11px] block text-[14px] text-secondary transition-colors duration-[120ms] hover:text-primary"
            >
              {CONTACT.email}
            </a>
            <a
              href={CONTACT.phoneHref}
              className="mb-[11px] block text-[14px] text-secondary transition-colors duration-[120ms] hover:text-primary"
            >
              {CONTACT.phone}
            </a>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-[11px] block text-[14px] text-secondary transition-colors duration-[120ms] hover:text-primary"
            >
              Book a call
            </a>
          </div>
        </div>

        <div className="flex items-center justify-between pt-7 text-[13px] text-tertiary max-md:flex-col max-md:items-start max-md:gap-4">
          <span>© 2026 Devaxl. All rights reserved.</span>
          <div className="flex gap-5">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-[120ms] hover:text-accent"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
