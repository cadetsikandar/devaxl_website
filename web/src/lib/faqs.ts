// FAQ content lives here so the rendered accordion and the FAQPage JSON-LD are
// generated from one source — schema that drifts from visible copy is a
// structured-data violation, not just a maintenance annoyance.

export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
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
