import type { Metadata } from "next";
import { ArrowUpRight, CalendarClock, Mail, Phone } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { ContactForm } from "@/components/site/ContactForm";
import { CALENDLY_URL, CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us where your product is today. Send a message, book a scoping call with a senior engineer, or email the team.",
};

const ACTIONS = [
  {
    icon: CalendarClock,
    label: "Book a scoping call",
    value: "30 minutes with a senior engineer",
    href: CALENDLY_URL,
    external: true,
    featured: true,
  },
  {
    icon: Mail,
    label: "Email us",
    value: CONTACT.email,
    href: CONTACT.emailHref,
    external: false,
    featured: false,
  },
  {
    icon: Phone,
    label: "Call us",
    value: CONTACT.phone,
    href: CONTACT.phoneHref,
    external: false,
    featured: false,
  },
];

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Contact"
        title="Tell us where your product is."
        intro="A short message or a scoping call with a senior engineer — not a salesperson. We'll tell you exactly how we'd help, and whether we're the right fit."
      />

      <section className="py-16 max-md:py-12">
        <div className="wrap grid grid-cols-[1.5fr_1fr] gap-8 max-lg:grid-cols-1 max-lg:gap-7">
          {/* Primary: the message form */}
          <div data-reveal>
            <h2 className="mb-5 text-[20px] font-semibold tracking-[-0.01em] text-primary">
              Send us a message
            </h2>
            <ContactForm />
          </div>

          {/* Secondary: quick ways to reach us */}
          <div className="flex flex-col gap-4" data-reveal>
            {ACTIONS.map((a) => (
              <a
                key={a.label}
                href={a.href}
                {...(a.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className={
                  "group flex items-start gap-4 rounded-lg p-5 transition-[transform,border-color,box-shadow] duration-[180ms] ease-out hover:-translate-y-[3px] " +
                  (a.featured
                    ? "border border-[rgba(255,182,0,0.3)] bg-accent-quiet shadow-glow"
                    : "border border-subtle bg-surface-1 shadow-[var(--shadow-sm),var(--inner-top)] hover:border-[var(--line)] hover:shadow-[var(--shadow-lg),var(--inner-top)]")
                }
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-md border border-faint bg-surface-3 text-accent">
                  <a.icon className="size-5" strokeWidth={1.75} />
                </span>
                <span className="flex-1">
                  <span className="flex items-center justify-between">
                    <span className="text-[16px] font-semibold tracking-[-0.01em] text-primary">
                      {a.label}
                    </span>
                    <ArrowUpRight
                      className="size-[18px] text-tertiary transition-[transform,color] duration-[180ms] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                      strokeWidth={1.75}
                    />
                  </span>
                  <span className="mt-1 block text-[14px] text-secondary">{a.value}</span>
                </span>
              </a>
            ))}

            <p className="mt-1 text-[14px] text-tertiary">
              Based remotely. We work with founders and CTOs worldwide — reach out
              any way that suits you.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
