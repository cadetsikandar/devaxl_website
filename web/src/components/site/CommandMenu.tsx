"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import {
  CalendarClock,
  CornerDownLeft,
  Info,
  Layers,
  Mail,
  Newspaper,
  Search,
  Workflow,
  Briefcase,
  type LucideIcon,
} from "lucide-react";
import { CALENDLY_URL } from "@/lib/site";

type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  keywords: string;
};

const NAV: NavItem[] = [
  { label: "Work", href: "/work", icon: Briefcase, keywords: "projects case studies portfolio" },
  { label: "Services", href: "/services", icon: Layers, keywords: "mvp modernize embed team build" },
  { label: "Process", href: "/process", icon: Workflow, keywords: "how we work discovery design launch scale" },
  { label: "Insights", href: "/insights", icon: Newspaper, keywords: "blog articles notes writing" },
  { label: "About", href: "/about", icon: Info, keywords: "studio team story" },
  { label: "Contact", href: "/contact", icon: Mail, keywords: "email phone get in touch message" },
];

const itemClass =
  "group/cmdk relative flex cursor-pointer select-none items-center gap-3 rounded-lg px-2.5 py-2 text-[14px] text-secondary outline-none " +
  "transition-colors duration-100 data-[selected=true]:bg-accent-quiet data-[selected=true]:text-primary";

// Icon tile inside each item — lights up amber when the row is selected.
const tileClass =
  "flex size-[30px] shrink-0 items-center justify-center rounded-md border border-faint bg-surface-3 text-tertiary transition-colors duration-100 " +
  "[&_svg]:size-[16px] " +
  "group-data-[selected=true]/cmdk:border-[rgba(255,182,0,0.35)] group-data-[selected=true]/cmdk:bg-accent-quiet group-data-[selected=true]/cmdk:text-accent";

const groupClass =
  "overflow-hidden px-2 pb-1 pt-1.5 " +
  "[&_[cmdk-group-heading]]:px-1.5 [&_[cmdk-group-heading]]:pb-2 [&_[cmdk-group-heading]]:pt-1.5 " +
  "[&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:uppercase " +
  "[&_[cmdk-group-heading]]:tracking-caps [&_[cmdk-group-heading]]:text-tertiary";

// Small keyboard key used in the footer hint bar.
function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="inline-flex h-[18px] min-w-[18px] items-center justify-center rounded border border-faint bg-surface-3 px-1 font-mono text-[10px] leading-none text-secondary">
      {children}
    </kbd>
  );
}

export function CommandMenu() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [meta, setMeta] = useState("⌘K");

  useEffect(() => {
    const isMac = /mac/i.test(navigator.platform) || /mac/i.test(navigator.userAgent);
    setMeta(isMac ? "⌘K" : "Ctrl K");
  }, []);

  // Global ⌘K / Ctrl+K toggle.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const run = useCallback((action: () => void) => {
    setOpen(false);
    action();
  }, []);

  return (
    <>
      {/* Subtle nav hint — opens the menu on click */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open command menu"
        className="group hidden h-9 items-center gap-2 rounded-md border border-subtle bg-surface-2/50 pl-2.5 pr-2 text-tertiary transition-[color,border-color,box-shadow] duration-150 hover:border-[rgba(255,182,0,0.3)] hover:text-secondary hover:shadow-[0_0_0_3px_rgba(255,182,0,0.10)] focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_var(--focus-ring)] md:inline-flex"
      >
        <Search
          className="size-[15px] transition-colors duration-150 group-hover:text-accent"
          strokeWidth={2}
        />
        <span className="text-[13px]">Search</span>
        <kbd className="rounded border border-faint bg-surface-3 px-1.5 py-0.5 font-mono text-[10px] leading-none text-secondary">
          {meta}
        </kbd>
      </button>

      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        label="Global command menu"
        overlayClassName="cmdk-overlay-in fixed inset-0 z-[100] bg-black/65 backdrop-blur-[3px]"
        contentClassName="cmdk-pop-in fixed left-1/2 top-[14vh] z-[101] w-[92vw] max-w-[580px] -translate-x-1/2 overflow-hidden rounded-2xl border border-strong bg-surface-2 shadow-[var(--shadow-xl),var(--inner-top)]"
      >
        {/* Amber glow header wash — sits behind the content (first in DOM). */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-28"
          style={{
            background:
              "radial-gradient(80% 100% at 50% 0%, rgba(255,182,0,0.12) 0%, transparent 72%)",
          }}
        />

        <div className="relative flex items-center gap-3 border-b border-faint px-4">
          <span className="flex size-[30px] shrink-0 items-center justify-center rounded-md border border-[rgba(255,182,0,0.25)] bg-accent-quiet text-accent">
            <Search className="size-[16px]" strokeWidth={2} />
          </span>
          <Command.Input
            autoFocus
            placeholder="Search pages, jump to a section…"
            className="h-[52px] flex-1 bg-transparent text-[15px] text-primary outline-none placeholder:text-tertiary"
          />
          <kbd className="hidden rounded border border-faint bg-surface-3 px-1.5 py-1 font-mono text-[10px] leading-none text-tertiary sm:block">
            ESC
          </kbd>
        </div>

        <Command.List className="relative max-h-[368px] overflow-y-auto overflow-x-hidden py-1.5">
          <Command.Empty className="flex flex-col items-center gap-2 py-10 text-center">
            <Search className="size-5 text-tertiary" strokeWidth={1.75} />
            <span className="text-[13px] text-tertiary">No results found.</span>
          </Command.Empty>

          <Command.Group heading="Navigation" className={groupClass}>
            {NAV.map((item) => (
              <Command.Item
                key={item.href}
                value={`${item.label} ${item.keywords}`}
                onSelect={() => run(() => router.push(item.href))}
                className={itemClass}
              >
                <span className={tileClass}>
                  <item.icon strokeWidth={1.75} />
                </span>
                <span className="flex-1">{item.label}</span>
                <CornerDownLeft
                  className="size-[15px] text-accent opacity-0 transition-opacity duration-100 group-data-[selected=true]/cmdk:opacity-100"
                  strokeWidth={1.75}
                />
              </Command.Item>
            ))}
          </Command.Group>

          <Command.Separator className="mx-3 my-1 h-px bg-[var(--line-faint)]" />

          <Command.Group heading="Actions" className={groupClass}>
            <Command.Item
              value="Book a call calendly schedule meeting scoping"
              onSelect={() =>
                run(() => window.open(CALENDLY_URL, "_blank", "noopener,noreferrer"))
              }
              className={itemClass}
            >
              <span className={tileClass}>
                <CalendarClock strokeWidth={1.75} />
              </span>
              <span className="flex-1">Book a call</span>
              <span className="font-mono text-[11px] text-tertiary group-data-[selected=true]/cmdk:text-accent">
                Calendly ↗
              </span>
            </Command.Item>
          </Command.Group>
        </Command.List>

        {/* Keyboard hint footer */}
        <div className="relative flex items-center justify-between gap-3 border-t border-faint bg-surface-1/60 px-4 py-2.5 text-[11px] text-tertiary">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Kbd>↑</Kbd>
              <Kbd>↓</Kbd>
              navigate
            </span>
            <span className="flex items-center gap-1.5">
              <Kbd>↵</Kbd>
              select
            </span>
          </div>
          <span className="flex items-center gap-1.5">
            <Kbd>esc</Kbd>
            close
          </span>
        </div>
      </Command.Dialog>
    </>
  );
}
