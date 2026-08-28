// Server-rendered JSON-LD. Structured data must be in the initial HTML —
// schema injected client-side is invisible to most crawlers and to the AI
// engines that read the raw document.

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // Data is authored in this repo, not user input. `<` is escaped so a
      // stray sequence can never close the script tag early.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
