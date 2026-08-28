// Plausible custom events.
//
// The event list is closed on purpose — six events, defined in
// marketing/measurement-plan.md. An event nobody looks at is a liability, so
// adding one should mean updating that document too.

export type AnalyticsEvent =
  /** Primary conversion — any "Book a call" CTA. */
  | "cta_book_call_clicked"
  /** First keystroke in the contact form. The denominator for abandonment. */
  | "contact_form_started"
  /** Contact form accepted by the API. */
  | "contact_form_submitted"
  /** Contact form rejected or errored — a silently broken form is expensive. */
  | "contact_form_failed"
  /** A case study was read. Tells you which proof does the work. */
  | "case_study_viewed"
  /** mailto: or tel: click — a real conversion pageview analytics never counts. */
  | "email_or_phone_clicked";

export type EventProps = Record<string, string | number | boolean>;

declare global {
  interface Window {
    plausible?: {
      (event: string, options?: { props?: EventProps }): void;
      q?: IArguments[];
    };
  }
}

/**
 * Fires a Plausible custom event. Safe to call anywhere: if the script is
 * absent (no domain configured, blocked, or server-side) this is a no-op, so
 * analytics can never break a CTA.
 */
export function track(event: AnalyticsEvent, props?: EventProps) {
  if (typeof window === "undefined") return;
  window.plausible?.(event, props ? { props } : undefined);
}
