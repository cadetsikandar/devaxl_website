// Real DevAXL projects (from devaxl.com). There are NO published outcome
// metrics yet, so this file carries none — do not invent numbers. Each case
// has its real name, category tags, a short honest scope-only one-liner, a
// brief honest overview, and its real screenshot.

export type CaseStudy = {
  slug: string;
  name: string;
  categories: string[]; // real tags — also used as filter keys + chips
  category: string; // display string, e.g. "Branding · Web Development"
  oneLiner: string; // honest scope statement, no invented outcomes
  overview: string; // 1–2 honest sentences describing the engagement scope
  thumbnail?: string; // /projects/*.png — omit to render the branded poster
  // Optional richer case-study detail (rendered on /work/[slug] when present).
  role?: string; // our role on the engagement
  collaboration?: string; // who we built it with
  link?: { label: string; href: string }; // live product / site
  stack?: string[]; // real technologies used
  highlights?: string[]; // what we built — honest, no invented metrics
  outcome?: string; // the real result
  quote?: string; // real client review, verbatim
  rating?: string; // review rating shown with the quote, e.g. "5.0" (default) or "4.9"
};

export const WORK_FILTERS = [
  "All",
  "SaaS",
  "AI",
  "Web Development",
  "Web Design",
  "Branding",
  "Mobile App Development",
] as const;

const cat = (tags: string[]) => tags.join(" · ");

export const CASES: CaseStudy[] = [
  {
    slug: "apolloe",
    name: "Apolloe",
    categories: ["SaaS", "AI", "Web Development", "Web Design"],
    category: cat(["SaaS", "AI", "Web Development"]),
    oneLiner:
      "An AI-native SaaS that lets independent freight dispatchers run every part of their job from a single dashboard.",
    overview:
      "Apolloe (Dispatch One) is a SaaS product for freight dispatchers, built on the MERN stack in close collaboration with Steve Solomon — a former dispatcher turned product manager. It streamlines dispatcher workflows through intuitive design, AI automation, and scalable API integrations, so independent dispatchers can manage their entire operation from one place.",
    thumbnail: "/projects/apolloe.png",
    role: "Lead Developer & Product Architect",
    collaboration:
      "Built with Steve Solomon — a former dispatcher turned product manager.",
    link: { label: "apolloe.com", href: "https://apolloe.com" },
    stack: [
      "React",
      "Node.js",
      "MERN stack",
      "AI agents & chatbot",
      "RAG pipelines",
      "Vector databases",
      "Zapier",
      "Make.com",
      "n8n",
      "GoHighLevel (GHL)",
    ],
    highlights: [
      "Built as a full MERN-stack SaaS (React + Node.js) engineered for scalability and high performance.",
      "Integrated AI automation with workflows powered by Zapier, Make.com, and n8n for seamless task management.",
      "Implemented AI chatbot and AI agent features that assist dispatchers in real time.",
      "Leveraged RAG pipelines and vector databases to handle complex queries and data retrieval.",
      "Designed advanced reporting, automated scheduling, dynamic route optimization, and mobile integration.",
      "Architected for API integration with GoHighLevel (GHL) to extend automation.",
      "Worked directly with the product manager to translate dispatcher workflows into intuitive SaaS features.",
    ],
    outcome:
      "A complete AI SaaS automation platform that transformed dispatcher operations — empowering the founder to launch and scale Dispatch One, a TMS built specifically for independent freight dispatchers.",
  },
  {
    slug: "aninja-crm",
    name: "aNinja AI",
    categories: ["SaaS", "AI", "Web Design", "Web Development"],
    category: cat(["SaaS", "AI", "Web Development"]),
    oneLiner:
      "An all-in-one AI sales CRM for small businesses — lead generation, automation, an embeddable AI chatbot, and an AI lead-management agent in one platform.",
    overview:
      "aNinja is an all-in-one sales-CRM SaaS for small businesses, built with React and Node.js. It combines AI automation, lead generation, and streamlined multi-channel communication, with integrations to GoHighLevel, Zapier, Make.com, and n8n. On top of the core CRM we delivered two AI products — an embeddable AI website chatbot and an AI-powered lead-management agent — both powered by RAG and vector databases for context-aware, personalized engagement.",
    role: "Product Designer & Lead Developer",
    collaboration: "An all-in-one sales CRM for small businesses.",
    link: { label: "aninja.com", href: "https://aninja.com" },
    stack: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "MERN stack",
      "AI chatbot",
      "AI agents",
      "RAG",
      "Vector databases",
      "NLP",
      "Zapier",
      "Make.com",
      "n8n",
      "GoHighLevel (GHL)",
    ],
    highlights: [
      "Core CRM combining lead management, automation, and multi-channel communication in one configurable platform.",
      "Configurable CRM dashboards in React and Node.js, built for scalability and flexibility.",
      "Advanced email & SMS automation via n8n, Make.com, and Zapier workflows to cut manual tasks.",
      "Smart lead categorization with RAG and a vector database for better targeting and conversion tracking.",
      "Embeddable AI website chatbot — a plug-and-play widget with a customizable, RAG-powered knowledge base and NLP for context-aware answers.",
      "AI lead-management agent — a smart auto-responder that follows up over SMS and email using templates and dynamic CRM data.",
      "Deep GoHighLevel (GHL) integration to automate CRM and customer-engagement processes.",
      "Mobile-ready accessibility with real-time push notifications.",
    ],
    outcome:
      "A powerful, user-friendly, scalable SaaS that automates lead nurturing and customer engagement with human-like personalization — saving time for small businesses while reducing support costs through the embedded AI chatbot and agent.",
    quote:
      "Touqeer literally saved our project and put it back on track single-handedly. His ability to work independently is remarkable, and his communication is top-notch. The code delivered is always of the highest quality with very few bugs, and it shipped extremely fast and on time, every time. Highly recommend!",
  },
  {
    slug: "itboost",
    name: "ITBoost",
    categories: ["SaaS", "AI", "Web Development"],
    category: cat(["SaaS", "AI", "Web Development"]),
    oneLiner:
      "Backend lead on an enterprise IT-documentation SaaS — scalable systems, secure auth, and high-load API integrations.",
    overview:
      "As Backend Project Lead for ITBoost — an MSP documentation SaaS by ConnectWise — built scalable systems with Node.js, JWT, Redis, Async, and Passport, integrated with .NET services and third-party APIs under high load. Also contributed across the frontend (React, Redux, Bootstrap, Angular), with SaaS and AI automation and integrations to n8n, Make.com, Zapier, and GoHighLevel.",
    role: "Full-Stack Engineer & Backend Project Lead",
    collaboration: "An MSP documentation SaaS by ConnectWise.",
    link: { label: "itboost.com", href: "https://itboost.com" },
    stack: [
      "Node.js",
      "JWT",
      "Redis",
      "Passport",
      "Async",
      ".NET integrations",
      "React",
      "Redux",
      "Angular",
      "Bootstrap",
      "RAG",
      "Vector databases",
      "n8n",
      "Make.com",
      "Zapier",
      "GoHighLevel (GHL)",
    ],
    highlights: [
      "Designed a robust backend with Node.js, JWT auth, Redis caching, async processing, and Passport authorization.",
      "Integrated .NET services and multiple third-party APIs to extend functionality under high load.",
      "Contributed to the frontend with React, Redux, Bootstrap, and Angular for a seamless, responsive SaaS experience.",
      "Specialized in SaaS and AI automation, RAG, vector databases, and workflow automation (n8n, Make.com, Zapier).",
      "Implemented secure authentication, caching strategies, and asynchronous workflows.",
      "Delivered enterprise-grade performance, reliability, and security at scale.",
    ],
    outcome:
      "A feature-rich, scalable, and secure IT-documentation SaaS used by IT professionals worldwide — improving documentation workflows and positioning ITBoost as a reliable, high-performance product within the ConnectWise ecosystem.",
    quote:
      "He got good skills and is also an intelligent person. Will hire him for my next projects. Job well done!",
    rating: "4.9",
  },
  {
    slug: "brb",
    name: "BeautyRightBack (BRB)",
    categories: ["SaaS", "Web Development"],
    category: cat(["SaaS", "Web Development"]),
    oneLiner:
      "A subscription platform for unlimited beauty services — a Go backend, React frontend, and seamless salon booking.",
    overview:
      "BeautyRightBack (BRB) is a subscription-based platform offering unlimited beauty services, built with Go and React. It connects users to top-rated salons in New York across three flexible tiers — Unlimited, Unlimited Plus, and Unlimited Pro — with an intuitive booking experience and a robust Go backend for efficient scheduling and appointment management.",
    role: "Full-Stack Engineer",
    collaboration: "A subscription platform empowering women through beauty services.",
    link: { label: "beautyrightback.com", href: "https://beautyrightback.com" },
    stack: [
      "Go (Golang)",
      "React",
      "Next.js",
      "REST API",
      "PostgreSQL",
      "Web application",
    ],
    highlights: [
      "Subscription plans across three tiers — Unlimited, Unlimited Plus, and Unlimited Pro — for diverse beauty needs.",
      "Access to top-rated, exclusive salons in New York.",
      "Intuitive, user-friendly interface for easy navigation and booking.",
      "Streamlined appointment management and efficient scheduling via a robust Go backend.",
      "React + Next.js frontend backed by a REST API and a PostgreSQL database.",
    ],
    outcome:
      "A platform that simplifies the beauty-service experience — blending affordability and convenience — and exemplifies modern full-stack web development with Go and React.",
  },
  {
    slug: "authority-alert",
    name: "Authority Alert",
    categories: ["Web Design", "Web Development"],
    category: cat(["Web Design", "Web Development"]),
    oneLiner: "Web design and development for the Authority Alert platform.",
    overview:
      "We designed and built the Authority Alert platform, covering the interface design through to front-to-back development.",
    thumbnail: "/projects/authorityAlert.png",
  },
  {
    slug: "carrier-network",
    name: "Carrier Network",
    categories: ["Web Development", "Web Design"],
    category: cat(["Web Development", "Web Design"]),
    oneLiner: "Web design and development for Carrier Network.",
    overview:
      "We delivered web design and development for Carrier Network — from interface design through to a working build.",
    thumbnail: "/projects/careerNetwork.png",
  },
  {
    slug: "trucking-guru",
    name: "Trucking Guru",
    categories: ["Branding", "Web Development"],
    category: cat(["Branding", "Web Development"]),
    oneLiner: "Brand identity and web development for Trucking Guru.",
    overview:
      "We handled branding and web development for Trucking Guru — establishing the identity and building the site.",
    thumbnail: "/projects/truckingGuru.png",
  },
  {
    slug: "chat-center",
    name: "Chat Center",
    categories: ["Web Development"],
    category: cat(["Web Development"]),
    oneLiner: "Web development for the Chat Center platform.",
    overview:
      "We built the Chat Center platform, focused on the web development and engineering.",
    thumbnail: "/projects/chatCenter.png",
  },
  {
    slug: "driver-app",
    name: "Driver App",
    categories: ["Mobile App Development"],
    category: cat(["Mobile App Development"]),
    oneLiner: "Native mobile app design and development.",
    overview:
      "We designed and developed a native mobile app, taking the product from interface design through to implementation.",
    thumbnail: "/projects/driverapp.png",
  },
  {
    slug: "sound-space",
    name: "Sound Space",
    categories: ["Branding", "Web Development"],
    category: cat(["Branding", "Web Development"]),
    oneLiner: "Brand identity and web development for Sound Space.",
    overview:
      "We delivered branding and web development for Sound Space — identity work paired with a custom build.",
    thumbnail: "/projects/soundAddress.png",
  },
  {
    slug: "propforce",
    name: "Propforce",
    categories: ["Web Development"],
    category: cat(["Web Development"]),
    oneLiner: "Web development for the Propforce platform.",
    overview:
      "We built the Propforce platform, focused on web development and engineering.",
    thumbnail: "/projects/propforce.png",
  },
];

export function getAllCases(): CaseStudy[] {
  return CASES;
}

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return CASES.find((c) => c.slug === slug);
}

/** The next case in the list (wraps around) — for the "next project" CTA. */
export function getNextCase(slug: string): CaseStudy {
  const i = CASES.findIndex((c) => c.slug === slug);
  return CASES[(i + 1) % CASES.length];
}
