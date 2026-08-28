"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { FAQS } from "@/lib/faqs";
import { SectionHead } from "./SectionHead";

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div data-reveal className="border-b border-faint">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="text-[18px] font-medium text-primary max-md:text-[16px]">
          {q}
        </span>
        <Plus
          className={`size-5 shrink-0 text-accent transition-transform duration-[280ms] ease-out ${
            open ? "rotate-45" : ""
          }`}
          strokeWidth={2}
        />
      </button>
      {/* grid-rows 0fr -> 1fr reveal: smooth, no per-frame JS layout work */}
      <div
        className="grid transition-[grid-template-rows] duration-[280ms] ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="max-w-[70ch] pb-6 pr-10 text-[15px] leading-relaxed text-secondary max-md:pr-0">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  return (
    <section className="border-b border-faint py-24 max-md:py-16">
      <div className="wrap grid grid-cols-[0.8fr_1.2fr] gap-16 max-lg:grid-cols-1 max-lg:gap-10">
        <SectionHead eyebrow="FAQ" title="The questions founders ask first." />
        <div className="border-t border-faint">
          {FAQS.map((f) => (
            <FaqItem key={f.q} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}
