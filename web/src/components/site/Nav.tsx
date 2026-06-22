"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getAllCases } from "@/lib/work";
import { CALENDLY_URL } from "@/lib/site";
import { CommandMenu } from "./CommandMenu";

type MegaItem = { label: string; desc: string; href: string };

const SERVICES: MegaItem[] = [
  { label: "SaaS & AI MVP → launch", desc: "Idea to a production v1 in weeks.", href: "/services" },
  { label: "AI product engineering", desc: "RAG, agents & LLM features, in production.", href: "/services#ai" },
  { label: "Scale & modernize", desc: "Make a heavy platform fast and stable.", href: "/services" },
  { label: "Embed a product team", desc: "A senior squad inside your org.", href: "/services" },
];

const FEATURED = getAllCases()
  .slice(0, 3)
  .map((c) => ({ label: c.name, desc: c.oneLiner, href: `/work/${c.slug}` }));

const SIMPLE = [
  { label: "Process", href: "/process" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState<"work" | "services" | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close everything on navigation + on Escape.
  useEffect(() => {
    setOpen(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="sticky top-0 z-50 border-b border-faint bg-[rgba(10,10,12,0.72)] backdrop-blur-[16px] [backdrop-filter:var(--blur-glass)]">
      <div className="wrap flex h-[68px] items-center justify-between max-md:h-[60px]">
        <Link href="/" aria-label="Devaxl home" className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/devaxlWhiteLogo.svg" alt="Devaxl" className="h-[22px] w-auto" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          <MegaTrigger
            label="Work"
            href="/work"
            active={isActive("/work")}
            isOpen={open === "work"}
            onOpen={() => setOpen("work")}
            onClose={() => setOpen(null)}
          >
            <MegaPanel
              blurb="Outcomes, not screenshots — every engagement measured by what changed."
              items={FEATURED}
              footerLabel="View all work"
              footerHref="/work"
            />
          </MegaTrigger>

          <MegaTrigger
            label="Services"
            href="/services"
            active={isActive("/services")}
            isOpen={open === "services"}
            onOpen={() => setOpen("services")}
            onClose={() => setOpen(null)}
          >
            <MegaPanel
              blurb="One senior team, from first commit to scale."
              items={SERVICES}
              footerLabel="All services"
              footerHref="/services"
            />
          </MegaTrigger>

          {SIMPLE.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "rounded-md px-3 py-2 text-[14px] font-medium transition-colors duration-[120ms]",
                isActive(l.href) ? "text-primary" : "text-secondary hover:text-primary",
              )}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          <CommandMenu />
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ size: "sm" }), "max-md:h-10")}
          >
            Book a call
          </a>
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="flex size-11 items-center justify-center rounded-md border border-subtle text-primary transition-colors hover:border-strong md:hidden"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-faint bg-canvas md:hidden"
          >
            <div className="wrap flex max-h-[70vh] flex-col gap-1 overflow-y-auto py-4">
              <MobileGroup title="Work" href="/work" items={FEATURED} />
              <MobileGroup title="Services" href="/services" items={SERVICES} />
              {SIMPLE.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="rounded-md px-2 py-3 text-[15px] font-medium text-secondary transition-colors hover:bg-surface-2 hover:text-primary"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function MegaTrigger({
  label,
  href,
  active,
  isOpen,
  onOpen,
  onClose,
  children,
}: {
  label: string;
  href: string;
  active: boolean;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="relative" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <Link
        href={href}
        aria-haspopup="true"
        aria-expanded={isOpen}
        className={cn(
          "inline-flex items-center gap-1 rounded-md px-3 py-2 text-[14px] font-medium transition-colors duration-[120ms]",
          active || isOpen ? "text-primary" : "text-secondary hover:text-primary",
        )}
      >
        {label}
        <ChevronDown
          className={cn("size-3.5 text-tertiary transition-transform duration-[180ms]", isOpen && "rotate-180")}
          strokeWidth={2}
        />
      </Link>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 top-full pt-2.5"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MegaPanel({
  blurb,
  items,
  footerLabel,
  footerHref,
}: {
  blurb: string;
  items: MegaItem[];
  footerLabel: string;
  footerHref: string;
}) {
  return (
    <div className="w-[420px] overflow-hidden rounded-lg border border-subtle bg-surface-1 p-2.5 shadow-[var(--shadow-lg),var(--inner-top)]">
      <p className="px-3 pb-2.5 pt-2 text-[13px] leading-snug text-tertiary">{blurb}</p>
      <div className="flex flex-col">
        {items.map((it) => (
          <Link
            key={it.href + it.label}
            href={it.href}
            className="group/mi rounded-md px-3 py-2.5 transition-colors duration-[120ms] hover:bg-surface-2"
          >
            <span className="flex items-center justify-between gap-3">
              <span className="text-[14px] font-medium text-primary">{it.label}</span>
              <ArrowRight className="size-4 -translate-x-1 text-tertiary opacity-0 transition-all duration-[150ms] group-hover/mi:translate-x-0 group-hover/mi:text-accent group-hover/mi:opacity-100" strokeWidth={1.75} />
            </span>
            <span className="mt-0.5 block text-[12.5px] leading-snug text-tertiary">{it.desc}</span>
          </Link>
        ))}
      </div>
      <Link
        href={footerHref}
        className="mt-1 flex items-center gap-1.5 border-t border-faint px-3 pb-1 pt-3 text-[13px] font-semibold text-accent"
      >
        {footerLabel}
        <ArrowRight className="size-[15px]" strokeWidth={2} />
      </Link>
    </div>
  );
}

function MobileGroup({
  title,
  href,
  items,
}: {
  title: string;
  href: string;
  items: MegaItem[];
}) {
  return (
    <div className="border-b border-faint py-1.5">
      <Link
        href={href}
        className="block rounded-md px-2 py-2.5 text-[15px] font-semibold text-primary"
      >
        {title}
      </Link>
      <div className="flex flex-col pb-1 pl-2">
        {items.map((it) => (
          <Link
            key={it.href + it.label}
            href={it.href}
            className="rounded-md px-2 py-2 text-[14px] text-secondary transition-colors hover:text-primary"
          >
            {it.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
