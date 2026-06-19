"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "../../../public/devaxl-logo.png";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-faint bg-[rgba(10,10,12,0.72)] backdrop-blur-[16px] [backdrop-filter:var(--blur-glass)]">
      <div className="wrap flex h-[68px] items-center justify-between max-md:h-[60px]">
        <a href="#top" aria-label="DevAXL home" className="flex items-center">
          <Image
            src={logo}
            alt="DevAXL"
            priority
            className="h-6 w-auto"
            style={{ height: 24, width: "auto" }}
          />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[14px] font-medium text-secondary transition-colors duration-[120ms] hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 md:gap-[18px]">
          <Button size="sm" className="max-md:h-10">
            Book a call
          </Button>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            aria-controls="mobile-menu"
            className="flex size-11 items-center justify-center rounded-md border border-subtle text-primary transition-colors hover:border-strong md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-faint bg-canvas md:hidden"
          >
            <div className="wrap flex flex-col gap-1 py-4">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-3 text-[15px] font-medium text-secondary transition-colors hover:bg-surface-2 hover:text-primary"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
