// Insights (blog) content. These 3 articles are SEED PLACEHOLDERS — replace
// the prose, dates, authors, and cover/thumbnail media with real content.
// Each is tagged [PLACEHOLDER: real article] in the UI.

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string }
  // In-body image. `icon` selects a glyph from FIGURE_ICONS; the figure renders
  // an on-brand generated illustration tinted to the article's category.
  | { type: "figure"; icon: string; caption: string };

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
    readTime: "9 min read",
    date: "Feb 18, 2026",
    dateISO: "2026-02-18",
    author: "Devaxl Engineering",
    body: [
      { type: "p", text: "Speed and quality are usually framed as a trade-off — go fast and you accrue debt, go careful and you miss the window. In practice, the teams that ship fast and well aren't choosing between those two. They're cutting a third thing entirely: scope. They decide early what a v1 must do to earn revenue, and they refuse to build anything that doesn't serve that. Everything else is real, valuable, and deliberately not now." },
      { type: "p", text: "We've run this play enough times to know the failure mode it avoids. Most v1s die not because the team was slow, but because the team was busy — busy building settings screens nobody asked for, busy gold-plating an onboarding flow before a single customer existed, busy turning a two-week feature into a six-week platform. Nine weeks is not a heroic sprint. It's what's left when you stop doing the work that doesn't matter yet." },
      { type: "h2", text: "Scope is the lever, not hours" },
      { type: "p", text: "When a deadline is at risk, the instinct is to add hours — nights, weekends, another contractor. That lever barely moves the date and it quietly lowers quality, because tired people writing code under pressure is how you manufacture the exact debt you were trying to avoid. The lever that actually works is scope. Removing a feature is instant, free, and reversible. It is the only variable on a software project you can change without paying for it later." },
      { type: "p", text: "So the first week isn't coding — it's an honest discovery. What is the smallest product a real customer will pay for, and what can wait? We write that line down explicitly, and everything that falls outside it gets a date in a backlog, not a place in the sprint. The backlog isn't a graveyard; it's a promise that the idea survives. It just doesn't get to slow down the thing that earns the right to build it." },
      { type: "figure", icon: "gauge", caption: "Week-by-week, scope is the burndown that matters — not hours logged. Every cut feature is capacity returned to the one workflow that earns revenue." },
      { type: "h2", text: "Find the one workflow that earns revenue" },
      { type: "p", text: "Every product has a single path that creates value — the thing a customer does that makes them willing to pay. For a billing tool it's \"send an invoice and get paid.\" For a marketplace it's \"list, get matched, transact.\" Find that path and trace it end to end, because that one workflow is your actual product. Everything else — dashboards, settings, reporting, integrations — is supporting cast that can arrive later." },
      { type: "ul", items: [
        "Define the one workflow that creates value, end to end, in a single sentence.",
        "Map every screen and state that workflow touches — and only those.",
        "Cut every feature that doesn't touch it, with a backlog date attached.",
        "Ship a demoable increment every week the client can actually click through.",
      ] },
      { type: "p", text: "That last point is the discipline that keeps the other three honest. If something has to be demoable every Friday, you can't disappear into a three-week refactor or a half-built abstraction. The cadence forces the work to stay close to something a human can use, which is exactly where scope creep gets caught early — when it's a conversation, not a rewrite." },
      { type: "h2", text: "The foundations you don't skip" },
      { type: "p", text: "Cutting scope is not the same as cutting corners, and the difference is entirely about what you cut. Scope is features. Foundations are the properties that make software trustworthy regardless of how many features it has — and those you build right the first time, because retrofitting them is where the real cost lives." },
      { type: "p", text: "Authentication, billing, an admin console, structured error handling, and basic observability are not v2 features. They're the difference between a product and a demo. A demo falls over the first time a real user does something unexpected; a product absorbs it, logs it, and tells you what happened. Built in from day one, these cost days. Bolted on after launch — once there's real data, real customers, and real money flowing through paths that never expected them — they cost weeks and a few incidents." },
      { type: "figure", icon: "shield", caption: "Auth, billing, an admin surface, error handling, and observability aren't features you add later — they're the load-bearing layer everything else sits on." },
      { type: "p", text: "Observability deserves a special mention because it's the one teams skip most and regret fastest. The first production incident is not the time to discover you have no logs, no traces, and no way to see what a user actually did. A few hours wiring up structured logging and a basic error tracker buys you the ability to debug production from your desk instead of from a screen-share with a frustrated customer." },
      { type: "quote", text: "Cutting scope is how you go fast. Cutting foundations is how you go backwards." },
      { type: "h2", text: "What \"demoable\" actually buys you" },
      { type: "p", text: "Weekly demoable increments aren't a project-management ritual — they're a risk instrument. Every Friday the client sees the real thing, in a real browser, doing real work. That does two things at once: it catches a wrong assumption while it's cheap to fix, and it builds the kind of trust that makes the hard scope conversations easy. A client who has watched the product take shape week over week believes you when you say a feature should wait. A client who has seen nothing for two months does not." },
      { type: "p", text: "It also changes the team's relationship with done. When the bar is \"working software a person can use this Friday,\" you stop accumulating half-finished branches and start finishing things. Small, complete, shippable slices compound. Big, impressive, almost-done ones don't ship at all." },
      { type: "h2", text: "How this holds up after launch" },
      { type: "p", text: "The real test of a fast build isn't the launch — it's the month after. A v1 built by cutting corners gets slower every week as the team pays down the shortcuts they took. A v1 built by cutting scope gets faster, because the foundations are solid and the deferred features slot into a codebase that was designed to receive them. The team keeps building on it instead of around it." },
      { type: "p", text: "That's the whole point. Nine weeks isn't about how hard you can push — it's about how clearly you can choose. Pick the one workflow that earns revenue, build the foundations that make it trustworthy, defer everything else with a real date, and show working software every week. The product looks small. It stands up to real use. And the team that built it is faster on week ten than they were on week one — which is the only kind of speed that's worth anything." },
    ],
  },
  {
    slug: "modernizing-a-legacy-monolith",
    category: "Architecture",
    title: "Modernizing a legacy monolith while it keeps serving users.",
    dek: "You rarely get to stop the world and rewrite. Here's how to make an aging platform fast and stable without a single maintenance window.",
    readTime: "11 min read",
    date: "Jan 30, 2026",
    dateISO: "2026-01-30",
    author: "Devaxl Engineering",
    body: [
      { type: "p", text: "Most modernization work happens on a platform that can't go offline. Customers are using it right now, revenue depends on it being up, and the system you've been asked to fix is the same system paying everyone's salary. This is the constraint that makes legacy work hard — not the age of the code, but the fact that you have to change it while it's load-bearing. The metaphor everyone reaches for is changing the engine while the car is moving, and it's exactly right: the car does not stop, and the passengers should never feel a thing." },
      { type: "p", text: "The temptation, always, is the rewrite. Start clean, do it properly this time, switch over when it's ready. It's the most appealing and most dangerous idea in software, because it bets the business on a single switchover that has to be perfect on the first try, after months of building in the dark with no feedback from real traffic. The rewrites that survive are the ones that were never a rewrite at all — they were a long sequence of small, reversible changes that happened to add up to a new system." },
      { type: "h2", text: "Measure before you touch anything" },
      { type: "p", text: "The first move on any legacy platform is not to change code — it's to be able to see. You cannot improve what you cannot measure, and more importantly, you cannot prove a change was safe without a baseline to compare against. Before refactoring a single line, we add tracing across the request path, capture the real latency distributions, and surface the actual failure modes rather than the ones everybody assumes exist." },
      { type: "p", text: "This step routinely overturns the team's intuition. The endpoint everyone complains about is fine; the slow one is a report nobody mentioned because they've stopped expecting it to be fast. The database isn't the bottleneck — a synchronous third-party call buried three layers deep is. Opinion picks the wrong targets with remarkable consistency. Data picks the ones that actually move the numbers, and just as importantly, it gives you the evidence to say no to the optimizations that wouldn't." },
      { type: "figure", icon: "activity", caption: "Instrumentation first: a baseline of real latency and failure modes turns modernization from guesswork into a ranked list of targets with evidence behind each one." },
      { type: "h2", text: "Strangle, don't rewrite" },
      { type: "p", text: "The pattern that makes this safe is the strangler fig — named for the vine that grows around a tree, gradually taking over its structure until the original can be removed without the whole thing falling down. Applied to software: you stand up the new implementation beside the old one, route a fraction of traffic through it behind a flag, and compare the two in production on real requests. The new path doesn't replace the old one. It earns its place, request by request, until there's nothing left for the old one to do." },
      { type: "p", text: "Concretely, that means a routing layer that can send, say, one percent of traffic to the new code path while the other ninety-nine percent stays on the proven one. You watch the new path's error rate and latency against the old path's as a live control group. If it holds, you turn the dial up — five percent, twenty, fifty. If it doesn't, you turn it back to zero and nobody outside the team ever knew. Nothing about this requires a maintenance window, because at no point is the system ever in a state you can't instantly back out of." },
      { type: "figure", icon: "git-branch", caption: "Traffic splits behind a flag: the new path runs beside the old as a live control group. Turn the dial up only when the numbers earn it; turn it to zero the instant they don't." },
      { type: "h2", text: "The discipline that keeps it reversible" },
      { type: "p", text: "Reversibility isn't a property you get for free — it's something you engineer into every change deliberately. Three practices do most of the work, and they're unglamorous on purpose." },
      { type: "ul", items: [
        "Wrap every risky change in a feature flag and a staged rollout, so the blast radius is a dial you control, not a deploy you hope about.",
        "Build a test net around the money paths before you refactor them — characterization tests that pin down current behavior, even the bugs, so you change what you mean to and nothing else.",
        "Keep deploys small and frequent, so a regression is a five-minute revert of one change rather than a forensic hunt through a month of batched work.",
      ] },
      { type: "p", text: "The test net deserves emphasis because it's the one teams are most tempted to skip on legacy code that has no tests to begin with. You don't need full coverage — you need a net under the paths where mistakes cost money. Characterization tests that capture exactly what the system does today, quirks included, are what let you refactor aggressively without holding your breath. They turn \"I think this is equivalent\" into \"the suite says this is equivalent.\"" },
      { type: "quote", text: "Modernization is a sequence of boring, reversible steps — not one brave leap." },
      { type: "h2", text: "Small deploys are a safety feature" },
      { type: "p", text: "There's a counterintuitive truth at the center of all of this: the way to make changes to a fragile system safer is to make them smaller and more frequent, not larger and more careful. A big, carefully reviewed quarterly release concentrates risk — when something breaks, you're bisecting through hundreds of changes under incident pressure. A steady stream of one-change deploys spreads that risk thin. When one breaks, the cause is obvious because it's the only thing that shipped, and the fix is a revert." },
      { type: "p", text: "This inverts how most teams think about caution on legacy systems. Caution feels like slowing down and batching changes so you can review them thoroughly. Real caution is shipping the smallest reversible increment you can, watching it, and shipping the next one — because that's the approach where a mistake is a non-event instead of an outage." },
      { type: "h2", text: "The payoff compounds" },
      { type: "p", text: "Done this way, modernization stops being a terrifying project with a binary outcome and becomes a steady process with a visible trend. The platform gets measurably faster and more reliable week over week. The team's confidence rises alongside it, because every change has been proven in production rather than hoped through a switchover. And the old system doesn't get dramatically retired in a single tense evening — it just quietly runs out of traffic until removing it is a cleanup task, not an event." },
      { type: "p", text: "That's the goal the whole time: a platform that's been modernized so gradually and so safely that the most remarkable thing about it is that nobody outside the team ever noticed it happening." },
    ],
  },
  {
    slug: "embedded-product-squad-for-a-cto",
    category: "Team",
    title: "What an embedded product squad actually changes for a CTO.",
    dek: "An embedded team is not staff augmentation. The difference is ownership — and it shows up in velocity, quality, and how much you have to manage.",
    readTime: "8 min read",
    date: "Jan 12, 2026",
    dateISO: "2026-01-12",
    author: "Devaxl Engineering",
    body: [
      { type: "p", text: "Hiring contractors gives you hands. An embedded squad gives you a team that owns outcomes. The distinction sounds like a marketing nuance and turns out to be the whole thing: one model waits for tickets, the other moves the roadmap. For a CTO deciding how to add capacity, getting this distinction right is the difference between buying yourself time and buying yourself a second job managing the people who were supposed to give you time back." },
      { type: "p", text: "The confusion is understandable, because on paper they look the same — external people, billed by the month, writing code for your product. But the operating model underneath is completely different, and you feel that difference in exactly the places that matter: how much you have to specify, how much you have to check, and how much of the outcome you're actually on the hook for after they've gone." },
      { type: "h2", text: "Ownership over tasks" },
      { type: "p", text: "Staff augmentation runs on a queue. You define the work, break it into tickets, hand them over, and review what comes back. The contractor's job is to clear the queue you maintain — which means the thinking, the prioritization, and the judgment all stay your responsibility. You haven't added a teammate; you've added throughput that requires you to feed it. When the work is well-defined and you have the bandwidth to define it, that's a fine trade. When it isn't, the queue becomes the bottleneck and you are the queue." },
      { type: "p", text: "An embedded squad works against goals, not a queue. You hand them an outcome — \"get self-serve signup live and converting\" — and the breakdown, sequencing, and trade-offs become theirs to own. They surface risks before they become problems, push back on scope that doesn't serve the goal, and care whether the thing they shipped actually moved the metric, because they'll be there next sprint to live with the consequences either way. Ownership changes what people notice. A team that owns the outcome catches the edge case you forgot to specify; a team clearing tickets ships exactly what the ticket said and moves on." },
      { type: "figure", icon: "workflow", caption: "Staff augmentation clears a queue you maintain. An embedded squad owns the outcome — the breakdown, the sequencing, and the trade-offs move off your plate." },
      { type: "h2", text: "Less to manage, not more" },
      { type: "p", text: "The counterintuitive part — the part that makes embedded teams worth more than the day rate suggests — is that a good one reduces a CTO's management load instead of adding to it. That runs against the instinct that more people means more to coordinate. It holds because the squad absorbs the coordination internally instead of pushing it up to you." },
      { type: "p", text: "There's a single accountable lead who owns delivery, so when you need an answer you ask one person, not a project manager who has to go ask the people doing the work. The people on the kickoff call are the people who actually ship — there's no bait-and-switch where senior names win the engagement and juniors execute it. And there are no layers of account management to route through, which means you get progress reports about working software rather than status meetings about the project of building it." },
      { type: "ul", items: [
        "One senior squad — design, engineering, and product working as a unit, not a handoff chain.",
        "A single accountable lead, not a rotating cast of juniors you have to re-onboard.",
        "Works inside your tools, your rituals, and your roadmap — not a parallel process you have to reconcile.",
      ] },
      { type: "figure", icon: "users", caption: "Design, engineering, and product as one accountable unit working inside your roadmap — so coordination is absorbed by the squad, not pushed up to you." },
      { type: "h2", text: "What you're actually buying" },
      { type: "p", text: "It helps to be precise about what changes hands. With staff augmentation, you're buying execution capacity and keeping all of the judgment. With an embedded squad, you're buying judgment and execution together — which is more expensive per head and almost always cheaper per outcome, because the most costly thing on a software project is rarely the coding. It's the wrong call about what to build, the risk nobody flagged, the rework from a misread requirement. A team that owns the outcome is incentivized to get those right; a team clearing a queue is incentivized to clear the queue." },
      { type: "p", text: "This is also why the embedded model works best precisely when the path isn't fully mapped. If you already know exactly what to build and just need more hands, augmentation is the honest answer. If the roadmap has ambiguity in it — and most do — you want a team that treats the ambiguity as theirs to resolve rather than yours to spec out in advance." },
      { type: "quote", text: "The right team doesn't add to what you manage — it takes something off your plate." },
      { type: "h2", text: "The real change for a CTO" },
      { type: "p", text: "Add it up and the shift is not really about staffing — it's about where the ownership of outcomes lives. Staff augmentation leaves it with you and lends you hands. An embedded squad takes a slice of the roadmap and owns it end to end, which is the only arrangement that genuinely gives a CTO time back rather than relocating the work into management overhead." },
      { type: "p", text: "That's the durable version of velocity: a team you don't have to babysit, shipping outcomes you don't have to spec in exhaustive detail, run by a lead who's accountable for the result. You stop being the queue, and you get to go back to being the CTO." },
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
