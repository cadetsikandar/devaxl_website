"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

const FIELD =
  "w-full rounded-md border border-subtle bg-surface-1 px-4 py-3 text-[14px] text-primary " +
  "placeholder:text-tertiary shadow-[var(--inner-top)] transition-[border-color,box-shadow] duration-[120ms] " +
  "focus:border-strong focus:outline-none focus:shadow-[0_0_0_3px_var(--focus-ring)]";

const LABEL = "mb-2 block text-[12px] font-medium uppercase tracking-caps text-tertiary";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    setError(null);

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      message: String(fd.get("message") ?? ""),
      website: String(fd.get("website") ?? ""), // honeypot
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (res.ok && data.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setError(data.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setError("Network error. Please check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div
        className="flex flex-col items-start rounded-lg border border-[rgba(255,182,0,0.3)] bg-accent-quiet p-7 shadow-glow"
        role="status"
        aria-live="polite"
      >
        <span className="flex size-11 items-center justify-center rounded-md border border-faint bg-surface-3 text-accent">
          <CheckCircle2 className="size-5" strokeWidth={1.75} />
        </span>
        <h3 className="mt-6 text-[18px] font-semibold tracking-[-0.01em] text-primary">
          Message sent.
        </h3>
        <p className="mt-1.5 max-w-[40ch] text-[14px] text-secondary">
          Thanks for reaching out — we&apos;ll reply within one business day. Prefer
          to talk sooner? Book a call or email{" "}
          <a href={CONTACT.emailHref} className="text-accent hover:underline">
            {CONTACT.email}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 text-[13px] font-medium text-tertiary transition-colors duration-[120ms] hover:text-primary"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-lg border border-subtle bg-surface-1 p-7 shadow-[var(--shadow-sm),var(--inner-top)] max-md:p-6"
    >
      {/* honeypot — visually hidden, off the tab order */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="pointer-events-none absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
        <div>
          <label htmlFor="cf-name" className={LABEL}>
            Name
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            minLength={2}
            autoComplete="name"
            placeholder="Jane Cooper"
            className={FIELD}
          />
        </div>
        <div>
          <label htmlFor="cf-email" className={LABEL}>
            Email
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="jane@company.com"
            className={FIELD}
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="cf-phone" className={LABEL}>
          Phone number <span className="normal-case text-tertiary">(optional)</span>
        </label>
        <input
          id="cf-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          placeholder="+1 555 000 1234"
          className={FIELD}
        />
      </div>

      <div className="mt-4">
        <label htmlFor="cf-message" className={LABEL}>
          What are you building?
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          minLength={10}
          rows={5}
          placeholder="A sentence or two on your product, stage, and where you'd like help."
          className={FIELD + " resize-y"}
        />
      </div>

      {status === "error" && error ? (
        <p className="mt-4 text-[13px] text-[#ff6b6b]" role="alert">
          {error}
        </p>
      ) : null}

      <div className="mt-6 flex items-center gap-4 max-md:flex-col max-md:items-stretch">
        <Button type="submit" size="lg" disabled={status === "submitting"}>
          {status === "submitting" ? (
            <>
              <Loader2 className="animate-spin" strokeWidth={2} />
              Sending…
            </>
          ) : (
            <>
              Send message
              <ArrowRight strokeWidth={2} />
            </>
          )}
        </Button>
        <p className="text-[13px] text-tertiary">
          We reply within one business day. No spam, ever.
        </p>
      </div>
    </form>
  );
}
