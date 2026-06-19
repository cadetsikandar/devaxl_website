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
  thumbnail: string; // /projects/*.png
};

export const WORK_FILTERS = [
  "All",
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
    categories: ["Branding", "Web Design", "Web Development"],
    category: cat(["Branding", "Web Design", "Web Development"]),
    oneLiner: "Brand identity, web design, and development — delivered end to end.",
    overview:
      "We partnered with Apolloe across branding, web design, and development — shaping the brand identity and designing and building the website end to end.",
    thumbnail: "/projects/apolloe.png",
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
