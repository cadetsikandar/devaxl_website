"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { SectionHead } from "./SectionHead";

const FAQS = [
  {
    q: "How does an engagement start?",
    a: "Every engagement opens with a short scoping call, then a fixed-fee discovery: we pressure-test the problem, agree on success metrics, and return a written plan with scope, timeline, and team. You decide to proceed with full information — no open-ended retainers to find out what you are buying.",
  },
  {
    q: "What do typical timelines look like?",
    a: "A focused MVP reaches a production v1 in roughly 8–12 weeks. Modernization and embedded-team work run continuously in two-week increments you can use and review each sprint. We commit to dates in writing and report against them weekly.",
  },
  {
    q: "Who owns the IP and the code?",
    a: "You do — fully. All code, design, and infrastructure are yours from day one, delivered in your repositories and cloud accounts. We work under standard work-for-hire terms with mutual NDAs, and we never reuse client code across engagements.",
  },
  {
    q: "How is the team structured?",
    a: "You work with a single senior squad — design, engineering, and product — led by an accountable engagement lead. No layers of account managers, no junior hand-offs. The people on your kickoff call are the people who ship.",
  },
  {
    q: "How do you use AI — in the product, or in delivery?",
    a: "Both. We build AI into the products we ship — RAG and semantic search, agents and copilots, LLM pipelines, and the evals and guardrails that keep them accurate, safe, and cost-controlled in production. And we use AI intensively across our own delivery — scoping, code and test generation, and review — so a small senior team ships like a much larger one. AI features go in only where they earn their place, never as a checkbox.",
  },
];

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
