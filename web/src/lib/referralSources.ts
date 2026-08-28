// Self-reported attribution options.
//
// Devaxl's leads arrive by referral, LinkedIn, and dark social — channels no
// analytics tool can see. One dropdown out-performs every attribution model
// available here, and the "AI assistant" option is the only way to learn
// whether the ai-seo work is paying off.
//
// Shared by the form and the API route so the allowlist has one definition.

export const REFERRAL_SOURCES = [
  { value: "referral", label: "Someone referred you" },
  { value: "google", label: "Google search" },
  { value: "ai_assistant", label: "An AI assistant (ChatGPT, Claude, Perplexity…)" },
  { value: "linkedin", label: "LinkedIn" },
  { value: "directory", label: "Clutch, G2, or another directory" },
  { value: "podcast_event", label: "A podcast, talk, or event" },
  { value: "other", label: "Something else" },
] as const;

export type ReferralSource = (typeof REFERRAL_SOURCES)[number]["value"];

/** Returns the human-readable label, or null if the value isn't one of ours. */
export function referralLabel(value: string | undefined): string | null {
  return REFERRAL_SOURCES.find((s) => s.value === value)?.label ?? null;
}
