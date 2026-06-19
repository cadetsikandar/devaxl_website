"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import {
  CalendarClock,
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
  "flex cursor-pointer select-none items-center gap-3 rounded-md px-3 py-2.5 text-[14px] text-secondary outline-none " +
  "[&_svg]:size-[18px] [&_svg]:shrink-0 [&_svg]:text-tertiary " +
  "data-[selected=true]:bg-accent-quiet data-[selected=true]:text-accent data-[selected=true]:[&_svg]:text-accent";

const groupClass =
  "overflow-hidden p-1 " +
  "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:pb-1.5 [&_[cmdk-group-heading]]:pt-2 " +
  "[&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:uppercase " +
  "[&_[cmdk-group-heading]]:tracking-caps [&_[cmdk-group-heading]]:text-tertiary";

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
        className="hidden h-9 items-center gap-2 rounded-md border border-subtle bg-surface-2/50 pl-2.5 pr-2 text-tertiary transition-colors hover:border-strong hover:text-secondary focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_var(--focus-ring)] md:inline-flex"
      >
        <Search className="size-[15px]" strokeWidth={2} />
        <span className="text-[13px]">Search</span>
        <kbd className="rounded border border-faint bg-surface-3 px-1.5 py-0.5 font-mono text-[10px] leading-none text-secondary">
          {meta}
        </kbd>
      </button>

      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        label="Global command menu"
        overlayClassName="fixed inset-0 z-[100] bg-black/60 backdrop-blur-[2px]"
        contentClassName="fixed left-1/2 top-[16vh] z-[101] w-[92vw] max-w-[560px] -translate-x-1/2 overflow-hidden rounded-xl border border-subtle bg-surface-2 shadow-[var(--shadow-xl),var(--inner-top)]"
      >
        <div className="flex items-center gap-2.5 border-b border-faint px-4">
          <Search className="size-[18px] shrink-0 text-tertiary" strokeWidth={1.75} />
          <Command.Input
            autoFocus
            placeholder="Type a command or search…"
            className="h-12 flex-1 bg-transparent text-[15px] text-primary outline-none placeholder:text-tertiary"
          />
          <kbd className="hidden rounded border border-faint bg-surface-3 px-1.5 py-1 font-mono text-[10px] leading-none text-tertiary sm:block">
            ESC
          </kbd>
        </div>

        <Command.List className="max-h-[360px] overflow-y-auto overflow-x-hidden p-2">
          <Command.Empty className="py-8 text-center text-[13px] text-tertiary">
            No results found.
          </Command.Empty>

          <Command.Group heading="Navigation" className={groupClass}>
            {NAV.map((item) => (
              <Command.Item
                key={item.href}
                value={`${item.label} ${item.keywords}`}
                onSelect={() => run(() => router.push(item.href))}
                className={itemClass}
              >
                <item.icon strokeWidth={1.75} />
                <span>{item.label}</span>
              </Command.Item>
            ))}
          </Command.Group>

          <Command.Separator className="my-1.5 h-px bg-[var(--line-faint)]" />

          <Command.Group heading="Actions" className={groupClass}>
            <Command.Item
              value="Book a call calendly schedule meeting scoping"
              onSelect={() =>
                run(() => window.open(CALENDLY_URL, "_blank", "noopener,noreferrer"))
              }
              className={itemClass}
            >
              <CalendarClock strokeWidth={1.75} />
              <span>Book a call</span>
              <span className="ml-auto font-mono text-[11px] text-tertiary">
                Calendly ↗
              </span>
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command.Dialog>
    </>
  );
}
