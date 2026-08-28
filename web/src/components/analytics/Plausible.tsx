import Script from "next/script";

/**
 * Plausible: cookieless, so no consent banner is required — which is why it
 * suits this site better than GA4.
 *
 * Renders nothing unless NEXT_PUBLIC_PLAUSIBLE_DOMAIN is set, so local dev and
 * preview deploys stay out of the numbers. Plausible also ignores localhost by
 * default; the env gate means the script isn't even fetched.
 */
export function Plausible() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  if (!domain) return null;

  return (
    <>
      <Script
        defer
        data-domain={domain}
        src="https://plausible.io/js/script.outbound-links.js"
        strategy="afterInteractive"
      />
      {/* Queues custom events fired before the script finishes loading. */}
      <Script id="plausible-init" strategy="afterInteractive">
        {`window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }`}
      </Script>
    </>
  );
}
