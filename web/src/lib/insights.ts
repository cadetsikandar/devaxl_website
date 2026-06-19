// Insights (blog) content. These 3 articles are SEED PLACEHOLDERS — replace
// the prose, dates, authors, and cover/thumbnail media with real content.
// Each is tagged [PLACEHOLDER: real article] in the UI.

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export type Article = {
  slug: string;
  category: string;
  title: string;
  dek: string; // standfirst / excerpt
  readTime: string;
  date: string; // display
  dateISO: string; // for <time datetime>
  author: string;
  body: ArticleBlock[];
};

export const ARTICLES: Article[] = [
  {
    slug: "shipping-a-production-v1-in-nine-weeks",
    category: "Engineering",
    title: "Shipping a production v1 in nine weeks without cutting corners.",
    dek: "How a tight scope, weekly demoable increments, and a few non-negotiable foundations let a small senior team ship a real product — not a prototype — fast.",
    readTime: "6 min read",
    date: "Feb 18, 2026",
    dateISO: "2026-02-18",
    author: "DevAXL Engineering",
    body: [
      { type: "p", text: "Speed and quality are usually framed as a trade-off. In practice, the teams that ship fast and well aren't cutting corners — they're cutting scope. They decide early what a v1 must do to earn revenue, and they refuse to build anything that doesn't serve that." },
      { type: "h2", text: "Scope is the lever, not hours" },
      { type: "p", text: "A nine-week build isn't nine weeks of heroics. It's the result of an honest discovery: what is the smallest product a real customer will pay for, and what can wait. Everything outside that line gets a date in a backlog, not a place in the sprint." },
      { type: "ul", items: [
        "Define the one workflow that creates value, end to end.",
        "Cut every feature that doesn't touch that workflow.",
        "Ship a demoable increment every week the client can actually use.",
      ] },
      { type: "h2", text: "The foundations you don't skip" },
      { type: "p", text: "Speed is not an excuse to skip the parts that make software trustworthy. Authentication, billing, an admin console, error handling, and observability are not v2 features — they're what separate a product from a demo. Built right the first time, they cost days, not weeks." },
      { type: "quote", text: "Cutting scope is how you go fast. Cutting foundations is how you go backwards." },
      { type: "p", text: "The result is a product that looks small but stands up to real use — and a codebase the team keeps building on instead of rewriting." },
    ],
  },
  {
    slug: "modernizing-a-legacy-monolith",
    category: "Architecture",
    title: "Modernizing a legacy monolith while it keeps serving users.",
    dek: "You rarely get to stop the world and rewrite. Here's how to make an aging platform fast and stable without a single maintenance window.",
    readTime: "8 min read",
    date: "Jan 30, 2026",
    dateISO: "2026-01-30",
    author: "DevAXL Engineering",
    body: [
      { type: "p", text: "Most modernization work happens on a platform that can't go offline. Customers are using it right now, revenue depends on it, and a big-bang rewrite is the riskiest thing you could attempt. The goal is to change the engine while the car is moving." },
      { type: "h2", text: "Measure before you touch anything" },
      { type: "p", text: "Instrumentation comes first. You cannot improve what you cannot see, and you cannot prove a change was safe without a baseline. Add tracing, capture the real failure modes, and let the data — not opinion — pick the first targets." },
      { type: "h2", text: "Strangle, don't rewrite" },
      { type: "p", text: "Route a fraction of traffic through the new path behind a flag, compare it against the old one, and expand only when it's proven. Nothing changes for users until it's earned its place. Done well, the old system is gradually starved until it can be removed." },
      { type: "ul", items: [
        "Wrap risky changes in feature flags and staged rollouts.",
        "Build a test net around the money paths before refactoring them.",
        "Keep deploys small so a regression is a five-minute fix, not an incident.",
      ] },
      { type: "quote", text: "Modernization is a sequence of boring, reversible steps — not one brave leap." },
      { type: "p", text: "The payoff is a platform that gets faster and more reliable week over week, with the team's confidence rising alongside it." },
    ],
  },
  {
    slug: "embedded-product-squad-for-a-cto",
    category: "Team",
    title: "What an embedded product squad actually changes for a CTO.",
    dek: "An embedded team is not staff augmentation. The difference is ownership — and it shows up in velocity, quality, and how much you have to manage.",
    readTime: "5 min read",
    date: "Jan 12, 2026",
    dateISO: "2026-01-12",
    author: "DevAXL Engineering",
    body: [
      { type: "p", text: "Hiring contractors gives you hands. An embedded squad gives you a team that owns outcomes. The distinction sounds subtle and turns out to be everything: one waits for tickets, the other moves the roadmap." },
      { type: "h2", text: "Ownership over tasks" },
      { type: "p", text: "An embedded team works against goals, not a queue. They surface risks early, push back on bad scope, and care whether the thing they shipped actually worked — because they'll be there next sprint to live with it." },
      { type: "h2", text: "Less to manage, not more" },
      { type: "p", text: "A good embedded squad reduces a CTO's load. There's a single accountable lead, the people on the kickoff call are the people who ship, and there are no layers of account management to route through. You get progress reports, not status meetings." },
      { type: "ul", items: [
        "One senior squad: design, engineering, and product together.",
        "An accountable lead, not a rotating cast of juniors.",
        "Works inside your tools and rituals, on your roadmap.",
      ] },
      { type: "quote", text: "The right team doesn't add to what you manage — it takes something off your plate." },
      { type: "p", text: "For a CTO, that's the real change: durable velocity you don't have to babysit." },
    ],
  },
];

export function getAllArticles(): Article[] {
  return ARTICLES;
}

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

/** Other articles, for the "related" rail. */
export function getRelatedArticles(slug: string, n = 2): Article[] {
  return ARTICLES.filter((a) => a.slug !== slug).slice(0, n);
}
