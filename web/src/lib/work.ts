// Real Devaxl projects. Long-form case studies sourced from the official
// Devaxl case-study set. Metrics quoted here come from those case studies —
// not invented. Structural fields (slug, categories, thumbnail) are curated.

export type CaseStudy = {
  slug: string;
  name: string;
  categories: string[]; // real tags — also used as filter keys + chips
  category: string; // display string, e.g. "Branding · Web Development"
  oneLiner: string;
  overview: string;
  thumbnail?: string; // /projects/*.png — omit to render the branded poster
  role?: string;
  collaboration?: string;
  link?: { label: string; href: string };
  stack?: string[];
  highlights?: string[];
  outcome?: string;
  quote?: string;
  rating?: string;
  metrics?: { value: string; label: string }[];
  challenge?: string;
  approach?: { title: string; body: string }[];
  results?: { title: string; body: string }[];
  verdict?: string;
};

export const WORK_FILTERS = [
  "All",
  "SaaS",
  "AI",
  "Web Development",
  "Web Design",
  "Branding",
  "Security",
  "Mobile App Development",
] as const;

export const CASES: CaseStudy[] = [
  {
    "slug": "apolloe",
    "name": "Apolloe",
    "categories": [
      "SaaS",
      "Web Development"
    ],
    "category": "SaaS · Web Development",
    "oneLiner": "A dispatcher's decades of trucking expertise turned into a production-ready TMS SaaS that earns recurring revenue.",
    "overview": "Devaxl partnered with Apollo-e to turn a founder's hands-on logistics expertise into a market-ready Transportation Management System. We guided him through the full product lifecycle, from concept and architecture to deployment and go-to-market, building a revenue-generating SaaS for the trucking industry.",
    "thumbnail": "/projects/apolloe.png",
    "collaboration": "Apollo-e (TMS SaaS for trucking)",
    "link": {
      "label": "apolloe.com",
      "href": "https://apolloe.com"
    },
    "challenge": "The founder had deep, battle-tested dispatching knowledge and understood trucking's pain points intimately: fragmented systems, manual dispatch, no real-time tracking, and zero data-driven decisions. But knowing the problem isn't the same as building the solution. He lacked the technical infrastructure and product expertise to execute a complex, scalable SaaS, and needed a partner who could translate industry insight into enterprise-grade architecture without diluting his vision.",
    "approach": [
      {
        "title": "Discovery & Product Architecture",
        "body": "We converted the founder's industry knowledge into a technical blueprint, architecting what Apollo-e's actual customers needed rather than assumptions. We mapped dispatcher workflows, real-time tracking and communication requirements, scalability assumptions, and enterprise security standards into a scalable SaaS architecture built for growth from day one."
      },
      {
        "title": "Full-Cycle Product Development",
        "body": "We built Apollo-e from the ground up with modern product standards: intuitive dispatcher interfaces honoring the founder's field UX instincts, real-time tracking, scalable backend infrastructure, and enterprise data security. An API-first architecture enabled future integrations while the founder stayed deeply involved to keep the product true to his vision."
      },
      {
        "title": "Deployment & Go-To-Market Support",
        "body": "Beyond production deployment, we supported launch and marketing strategy. We delivered zero-downtime production deployment, customer onboarding workflows, marketing support to reach trucking dispatchers, and launch coordination to ensure smooth early adoption."
      }
    ],
    "results": [
      {
        "title": "Successful Product Launch",
        "body": "Apollo-e safely deployed to production and immediately began acquiring early adopters, resonating with dispatchers because it was built by someone who knew their workflow intimately."
      },
      {
        "title": "Recurring Revenue & Career Freedom",
        "body": "The TMS generated sustainable recurring revenue within months, letting the founder step away from active dispatching to run a SaaS business full-time."
      },
      {
        "title": "Enterprise-Grade Foundation",
        "body": "Apollo-e was a scalable, production-ready product, not a quick MVP, so the infrastructure was ready as the customer base grew with no technical debt to unwind."
      },
      {
        "title": "Market Validation",
        "body": "Early customers validated the founder's thesis, with word-of-mouth adoption and an expanding user base demonstrating genuine product-market fit."
      }
    ],
    "verdict": "Apollo-e shows what's possible when deep industry expertise meets rigorous technical execution: a thriving business generating real revenue, a founder freed from operational work, and a product built to scale. The founder brought the vision and credibility; Devaxl brought the discipline and modern infrastructure to make it real."
  },
  {
    "slug": "aninja-crm",
    "name": "aNinja AI",
    "categories": [
      "SaaS",
      "Web Development"
    ],
    "category": "SaaS · Web Development",
    "oneLiner": "We rescued aNinja's stalled CRM platform from a broken dev partnership, restoring stability and shipping features that fueled real user growth.",
    "overview": "After aNinja's growth stalled under a failed development partnership, Devaxl stepped in to salvage their CRM platform, stabilizing the codebase and accelerating feature delivery to turn a stalled product into a reliable, high-performing SaaS.",
    "thumbnail": "/projects/aninjaCrm.png",
    "collaboration": "aNinja CRM",
    "link": {
      "label": "app.aninja.com",
      "href": "https://app.aninja.com/"
    },
    "challenge": "aNinja had a strong vision for a specialized CRM for service-oriented businesses, but execution was broken. Their previous development partner left missed deadlines, incomplete features, and code quality issues that were actively hurting the product. Users were frustrated, growth had stalled, and trust in the engineering team had evaporated. The core problem was an engineering capability gap, not the product idea.",
    "approach": [
      {
        "title": "Codebase Audit & Stabilization",
        "body": "We ran a comprehensive audit to surface critical bugs, code quality problems, technical debt, and performance bottlenecks. Then we systematically refactored and addressed these issues, establishing quality standards that would stick. You can't accelerate on a shaky foundation."
      },
      {
        "title": "Process Overhaul & Timeline Discipline",
        "body": "We implemented a strict, milestone-driven development process with realistic sprint planning, deadline accountability, code review gates, and regular stakeholder updates. Agile workflows allowed course corrections without derailing timelines. The goal wasn't moving slower, but moving reliably so commitments were consistently met."
      },
      {
        "title": "Feature Expansion & Industry-Specific Development",
        "body": "With a stable platform and proven delivery process, we accelerated features for high-demand use cases, including social media management integrations and CRM features tailored to service businesses. We also shipped API enhancements and scalability improvements to handle growing user loads. Every release reinforced the platform's reliability."
      }
    ],
    "results": [
      {
        "title": "Significant Revenue Growth",
        "body": "With a stable, improving product and a reliable engineering team, aNinja could confidently acquire and retain customers, translating directly into user growth and recurring revenue expansion."
      },
      {
        "title": "Diverse Industry Adoption",
        "body": "aNinja's CRM is now active across multiple sectors, from service businesses to social media agencies, with a prominent social media management company relying on it for daily operations."
      },
      {
        "title": "Restored Engineering Credibility",
        "body": "By delivering on every commitment, we transformed aNinja's engineering reputation from a liability into an asset, a team that could be counted on."
      },
      {
        "title": "Scalable, Maintainable Codebase",
        "body": "The platform is no longer held back by technical debt, with an engineering foundation that supports continued growth without constant firefighting or rewrites."
      }
    ],
    "verdict": "aNinja's story is one of redemption through engineering discipline. By combining rigorous code quality, predictable processes, and focused feature development, we transformed a stalled SaaS into a thriving one, proving the biggest unlock is often an engineering partner you can trust to deliver."
  },
  {
    "slug": "agencii",
    "name": "Agencii",
    "categories": [
      "AI",
      "SaaS"
    ],
    "category": "AI · SaaS",
    "oneLiner": "Agencii's coordinated AI agent swarm automated a digital agency's entire proposal pipeline, turning week-long deliverables into a single business day.",
    "overview": "A mid-sized digital agency was drowning in manual work for every client pitch, with deliverables that should take a day stretching into a week. By integrating Agencii's AI agent swarm, the team automated its full pipeline from research to presentation to visuals to video, all coordinated automatically.",
    "thumbnail": "/projects/agencii.png",
    "collaboration": "Built on Agencii's AI agent swarm",
    "link": {
      "label": "agencii.ai",
      "href": "https://agencii.ai/"
    },
    "metrics": [
      {
        "value": "10x",
        "label": "Faster proposals / volume"
      },
      {
        "value": "8 hrs",
        "label": "Per full proposal (vs 8 days)"
      },
      {
        "value": "60%",
        "label": "Gross margin on new service"
      }
    ],
    "challenge": "The agency's pitch process was sequential, manual, and disconnected: research lived in one tool, presentation design in another, and video in a third, with no automation tying them together. A single $50k proposal took roughly 8 days to assemble and 10 to revise. Strategists spent 70% of their time on execution and only 30% on actual strategy, and new business slowed because the team couldn't scale proposal volume without hiring more people just to execute.",
    "approach": [
      {
        "title": "Unified Agent Orchestration",
        "body": "An Orchestrator Agent takes the client brief, breaks it into subtasks like research, TAM modeling, deck building, social assets, and explainer video, then manages dependencies and sequencing automatically. It retries on failure so human intervention isn't constant."
      },
      {
        "title": "Specialized Agents Per Deliverable",
        "body": "A Deep Research Agent runs live web research with sourced, auditable TAM/SAM models in hours. The Slides, Image, Video, and Docs Agents then turn those findings into branded decks, social mockups, explainer videos, and executive summaries, each in minutes."
      },
      {
        "title": "Phased Rollout & Refinement",
        "body": "Week 1 integrated Agencii and wired outputs together (research to deck to visuals to video). The first live test coordinated all 6 agents and produced 80% of the deliverable, saving 4 days; weeks 3-4 refined prompts, brand themes, and research queries to move from working to genuinely great."
      }
    ],
    "results": [
      {
        "title": "8 Hours, Not 8 Days",
        "body": "A full proposal package of research, slides, visuals, video, and docs now takes a morning of setup and a few hours of orchestration instead of a full week."
      },
      {
        "title": "10x Proposal Volume",
        "body": "The agency can now pitch 15-20 clients per month versus 2-3 before, handling 10x the volume with no new headcount."
      },
      {
        "title": "Higher Quality & Better Win Rate",
        "body": "Clients receive proposals 3-4 days faster than competitors with deeper research and more consistent design, lifting close rates while strategists focus on positioning and narrative."
      },
      {
        "title": "Revenue Expansion",
        "body": "A new premium \"Done-For-You Proposal\" service runs at 60% gross margin, which would be impossible at human labor costs, and the team has seen zero turnover since implementation."
      }
    ],
    "verdict": "The agency didn't replace its strategists, it multiplied them: one strategist can now direct 8 AI agents to produce what 5 strategists couldn't before, moving the bottleneck from execution to strategy. The lesson is clear: automate the workflow, not individual tasks, and let coordinated agents give humans back their time while output and revenue scale."
  },
  {
    "slug": "nrtur",
    "name": "Nrtur",
    "categories": [
      "SaaS",
      "Web Development"
    ],
    "category": "SaaS · Web Development",
    "oneLiner": "A lightweight CRM that replaced Bloom Creative's bloated HubSpot setup, cutting software costs 74% and putting their team's focus back on closing deals.",
    "overview": "Bloom Creative partnered with Nrtur to swap their overpriced HubSpot setup for a lightweight CRM built for small, fast-moving teams. The result was a 74% cut in software costs, 5-minute onboarding, and a pipeline that matched how the team actually sells.",
    "thumbnail": "/projects/nrtur.png",
    "collaboration": "Bloom Creative, a design and creative services agency",
    "link": {
      "label": "nrtur.io",
      "href": "https://www.nrtur.io/"
    },
    "metrics": [
      {
        "value": "74%",
        "label": "Reduction in CRM costs"
      },
      {
        "value": "$3,180/yr",
        "label": "Saved on software"
      },
      {
        "value": "5 min",
        "label": "Setup time vs. weeks"
      }
    ],
    "challenge": "As a 4-person creative agency, Bloom Creative was paying enterprise prices for enterprise features they'd never use. HubSpot cost $360/month and demanded weeks of onboarding, complex configuration, and constant training, built for Fortune 500s rather than scrappy agencies on 30-90 day sales cycles. They were paying for unused automation, reporting, and integration complexity that slowed them down. The real cost was time: setting up the system, training new members, and fighting the interface instead of doing creative work.",
    "approach": [
      {
        "title": "Pricing Sanity",
        "body": "Nrtur's $29/user/month plan dropped the 4-person team from $360 to $95/month, a 74% reduction. The CRM finally felt like an investment instead of a grudge purchase."
      },
      {
        "title": "Instant Adoption",
        "body": "Setup took 5 minutes, not weeks. CEO Sarah Chen imported HubSpot contacts in under 30 minutes with migration help, and the whole team was logging deals and syncing emails by end of day, with no training sessions."
      },
      {
        "title": "Pipeline & Email That Match Reality",
        "body": "A kanban-style pipeline with drag-and-drop cards, status labels, and deal scoring matched exactly how the team sells. Two-way Gmail and Outlook sync automatically attached every client thread to the right contact and deal."
      },
      {
        "title": "Automations That Stick",
        "body": "A visual workflow builder let Sarah set up follow-up sequences without a consultant: proposal reminders, task assignments on stage changes, and email templates. It freed up mental overhead that had been eating her day."
      }
    ],
    "results": [
      {
        "title": "74% Lower CRM Costs",
        "body": "Monthly spend dropped from $360 to $95, putting $3,180/year back in the bank, real money for a small agency."
      },
      {
        "title": "Faster Deal Movement",
        "body": "A pipeline view that matches how they sell lets the team spot bottlenecks immediately and automate follow-ups, so deals move faster through each stage."
      },
      {
        "title": "Zero Onboarding Friction",
        "body": "New freelancers and contractors log in, see the pipeline, and start moving deals with no training or walkthroughs."
      },
      {
        "title": "Time Back on Client Work",
        "body": "Sarah estimates the team saves 3-4 hours per week previously lost to CRM admin, navigation, and workarounds, time now spent with clients and on revenue-driving work."
      }
    ],
    "verdict": "Bloom Creative's story is about removing friction, not adding features: contact management that works, a pipeline that matches reality, automatic email sync, and time-saving automations at a price that makes sense for a 4-person agency. The 74% cost cut is remarkable, but the real win is getting the team's focus back on closing deals and serving clients instead of managing software."
  },
  {
    "slug": "pma",
    "name": "Product Marketing Alliance",
    "categories": [
      "SaaS",
      "Web Development"
    ],
    "category": "SaaS · Web Development",
    "oneLiner": "The enterprise-grade SaaS backbone that scaled Product Marketing Alliance into the world's largest PMM community of 300,000+ members.",
    "overview": "Product Marketing Alliance partnered with Devaxl to rebuild its community platform into a unified, scalable SaaS system. We architected and built the full stack powering certifications, memberships, events, and 24/7 engagement across 300,000+ members globally.",
    "thumbnail": "/projects/pma.png",
    "collaboration": "Product Marketing Alliance (PMA)",
    "link": {
      "label": "productmarketingalliance.com",
      "href": "https://www.productmarketingalliance.com/"
    },
    "metrics": [
      {
        "value": "300k+",
        "label": "Active members"
      },
      {
        "value": "5,000+",
        "label": "Summit attendees"
      },
      {
        "value": "4.9/5",
        "label": "Google rating"
      }
    ],
    "challenge": "PMA had grown to 300,000+ product marketers, but rapid expansion exposed critical infrastructure gaps. Certifications, membership tiers, events, and engagement were spread across disconnected systems and manual workarounds. The technical foundation simply couldn't scale with demand, and the team was spending more time managing infrastructure than growing the community. They needed a unified platform that could reliably reach 500k+ members without performance degradation.",
    "approach": [
      {
        "title": "Unified Membership Platform",
        "body": "We designed a modular SaaS architecture consolidating PMA's fragmented systems into one platform. It handled tiered membership (Insider, Pro, Pro+, Exec+), payment processing, automated provisioning, a certification engine, and a real-time analytics dashboard. An API-first design and secure single sign-on were built to absorb 10x growth without rewrites."
      },
      {
        "title": "Events & Community Infrastructure",
        "body": "We built the connective tissue for PMA's events, meetups, and mentorship. This included an events platform for the Product Marketing Summit and 100+ annual events, Slack/Discord integration for onboarding and tier verification, mentorship matching, and an LMS powering certification courses with video, quizzes, and progress tracking."
      },
      {
        "title": "Growth & Monetization Systems",
        "body": "With the platform solid, we built systems to unlock revenue. Multi-tier subscriptions with automated billing and renewals, integration with the PMA jobs board, a partner marketplace for sponsored content, attribution tracking, and customer success tools all let PMA confidently expand its business model."
      }
    ],
    "results": [
      {
        "title": "300,000+ Active Members",
        "body": "The platform reliably serves hundreds of thousands of product marketers daily across Asia, Europe, and North America, with zero downtime during growth surges."
      },
      {
        "title": "Sustainable Membership Revenue",
        "body": "The unified billing system handles thousands of monthly subscription transactions across four membership tiers, powering reliable recurring revenue."
      },
      {
        "title": "Global Event Success",
        "body": "The annual Product Marketing Summit scaled seamlessly from 500 to 5,000+ attendees, with frictionless registration, networking, and post-event experiences."
      },
      {
        "title": "Industry Recognition",
        "body": "PMA has won awards from Financial Times, G2, and TrustPilot, earning 4.9/5 on Google and 4.7/5 on G2 — reflecting both product quality and user trust."
      }
    ],
    "verdict": "Product Marketing Alliance shows what happens when community vision meets enterprise-grade technology: PMA had the magic, and we built the foundation sturdy enough to support 300,000+ professionals and flexible enough to evolve with member needs."
  },
  {
    "slug": "securepoint360",
    "name": "SecurePoint 360",
    "categories": [
      "Security",
      "SaaS"
    ],
    "category": "Security · SaaS",
    "oneLiner": "A Series A SaaS hit SOC 2 Type II certification in 6 months, unlocking an $800k+ enterprise deal without hiring a full-time CISO.",
    "overview": "A 40+ employee Series A SaaS company needed SOC 2 Type II certification to close its largest enterprise prospect. With no security team, it partnered with SecurePoint 360 and achieved certification within 6 months, landing the deal and building a lasting security program.",
    "thumbnail": "/projects/securepoint360.png",
    "collaboration": "SecurePoint 360 Virtual CISO partnership with a Series A B2B SaaS company",
    "link": {
      "label": "securepoint360.com",
      "href": "https://www.securepoint360.com/"
    },
    "metrics": [
      {
        "value": "$800k+",
        "label": "Enterprise deal closed"
      },
      {
        "value": "6 months",
        "label": "To SOC 2 Type II certification"
      },
      {
        "value": "$150k+",
        "label": "Annual CISO cost avoided"
      }
    ],
    "challenge": "The company's largest pipeline opportunity, worth $800k+ annually, hinged on a non-negotiable SOC 2 Type II requirement. But it had no security infrastructure, no compliance framework, and no in-house expertise in security operations like audit readiness and evidence collection. The choice was stark: hire a CISO at $150k+ over 6 months, fail the audit and lose the deal, or find an expert partner. They chose the partner.",
    "approach": [
      {
        "title": "Audit Readiness Assessment",
        "body": "SecurePoint 360 assessed the company's posture across technical controls, organizational controls, and evidence/documentation, mapping every gap against SOC 2 requirements. The output was a prioritized remediation roadmap leading with high-impact quick wins before tackling complex technical work."
      },
      {
        "title": "Gap Remediation & Policy Development",
        "body": "Working in parallel with the internal team, they drafted security policies and procedures from SOC 2 templates and implemented technical controls: automated logging and monitoring, access request workflows, vulnerability scanning, and incident response. All employees completed practical security training, and evidence repositories were built so controls could be proven to auditors."
      },
      {
        "title": "Audit Execution & Ongoing Security",
        "body": "SecurePoint 360 coordinated with the external auditor, organized evidence for fast verification, and joined auditor calls to translate technical architecture into audit-friendly language. After rapidly clearing a few minor first-time findings, the company received SOC 2 Type II certification, then transitioned to an ongoing Virtual CISO model with monthly reviews and continuous vulnerability management."
      }
    ],
    "results": [
      {
        "title": "$800k+ Deal Closed",
        "body": "With SOC 2 Type II certification in hand, the prospect's risk committee approved the contract, the company's largest deal to date, opening doors to other enterprise opportunities previously blocked by compliance."
      },
      {
        "title": "Enterprise Sales Acceleration",
        "body": "SOC 2 became a competitive advantage, letting sales confidently tell prospects the company is audit-ready and shifting pipeline momentum."
      },
      {
        "title": "No CISO Hire Needed (Yet)",
        "body": "The Virtual CISO model delivered expert guidance at a fraction of the cost, avoiding a $150k+ full-time hire and its onboarding overhead while matching the company's growth stage."
      },
      {
        "title": "Sustainable Security Maturity",
        "body": "Beyond the certification, the company built lasting security muscle memory: monthly vulnerability scans, documented change procedures, and regular training that now run on autopilot, with confidence carrying forward to future audits like ISO 27001, GDPR, and HIPAA."
      }
    ],
    "verdict": "Enterprise expansion demands security maturity most companies haven't built yet, and the smart move is partnering with experts rather than panicking or over-hiring. SecurePoint 360 prioritized relentlessly and stayed involved through audit execution, closing an $800k deal and leaving behind security practices that compound over time."
  },
  {
    "slug": "itboost",
    "name": "ITBoost",
    "categories": [
      "SaaS",
      "AI",
      "Web Development"
    ],
    "category": "SaaS · AI · Web Development",
    "oneLiner": "Backend lead on an enterprise IT-documentation SaaS — scalable systems, secure auth, and high-load API integrations.",
    "overview": "As Backend Project Lead for ITBoost — an MSP documentation SaaS by ConnectWise — built scalable systems with Node.js, JWT, Redis, Async, and Passport, integrated with .NET services and third-party APIs under high load. Also contributed across the frontend (React, Redux, Bootstrap, Angular), with SaaS and AI automation and integrations to n8n, Make.com, Zapier, and GoHighLevel.",
    "thumbnail": "/projects/itboost.png",
    "role": "Full-Stack Engineer & Backend Project Lead",
    "collaboration": "An MSP documentation SaaS by ConnectWise.",
    "link": {
      "label": "itboost.com",
      "href": "https://www.itboost.com"
    },
    "stack": [
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
      "GoHighLevel (GHL)"
    ],
    "highlights": [
      "Designed a robust backend with Node.js, JWT auth, Redis caching, async processing, and Passport authorization.",
      "Integrated .NET services and multiple third-party APIs to extend functionality under high load.",
      "Contributed to the frontend with React, Redux, Bootstrap, and Angular for a seamless, responsive SaaS experience.",
      "Specialized in SaaS and AI automation, RAG, vector databases, and workflow automation (n8n, Make.com, Zapier).",
      "Implemented secure authentication, caching strategies, and asynchronous workflows.",
      "Delivered enterprise-grade performance, reliability, and security at scale."
    ],
    "outcome": "A feature-rich, scalable, and secure IT-documentation SaaS used by IT professionals worldwide — improving documentation workflows and positioning ITBoost as a reliable, high-performance product within the ConnectWise ecosystem.",
    "quote": "He got good skills and is also an intelligent person. Will hire him for my next projects. Job well done!",
    "rating": "4.9"
  },
  {
    "slug": "brb",
    "name": "BeautyRightBack (BRB)",
    "categories": [
      "AI",
      "SaaS",
      "Web Development"
    ],
    "category": "AI · SaaS · Web Development",
    "oneLiner": "An AI beauty discovery platform that turns a 50,000-product catalog into personalized recommendations customers actually trust.",
    "overview": "BeautyRightBack replaced a one-size-fits-all recommendation engine with an AI-powered discovery platform combining visual analysis, preference learning, and real-time inventory matching. It transformed a transactional beauty retailer into a personalized beauty consultant.",
    "collaboration": "BeautyRightBack (BRB)",
    "metrics": [
      {
        "value": "3x",
        "label": "Revenue growth in 18 months"
      },
      {
        "value": "45%",
        "label": "Improvement in customer retention"
      },
      {
        "value": "70%",
        "label": "Reduction in cart abandonment"
      }
    ],
    "challenge": "BeautyRightBack carried 50,000+ products from hundreds of brands, but customers were overwhelmed and defaulting to \"buy what I always buy.\" 60% couldn't find what they needed without help, cart abandonment hit 70%, and average order value stayed flat. Beauty is the ultimate personalization problem - skin tone, type, undertone, concerns, allergies, and budget make popularity-based recommendations useless. They needed to become a personal beauty consultant, not a product catalog.",
    "approach": [
      {
        "title": "Visual & Preference Learning Foundation",
        "body": "Computer vision analyzes a customer photo for skin tone, undertone, texture, and concerns - no manual forms. A preference graph tracks every view, save, purchase, and return, while recommendations are matched to live inventory and given transparent confidence scores."
      },
      {
        "title": "Personalized Discovery Experience",
        "body": "An AI beauty consultant turns 3-4 quick questions into 15 tailored picks instead of 50,000 options. Virtual try-on, ingredient and allergen matching, brand and price alternatives, and dynamically generated smart collections give customers confidence to buy."
      },
      {
        "title": "Post-Purchase Engagement & Loyalty",
        "body": "Replenishment intelligence reminds customers before products run out, and complementary recommendations pair foundation with matching concealer, primer, and setting spray. Seasonal swaps and personalized loyalty offers turn one-time buyers into repeat customers."
      }
    ],
    "results": [
      {
        "title": "3x Revenue Growth",
        "body": "Revenue tripled within 18 months as customers found products faster and bought with confidence; average order value jumped 2.3x and acquisition costs dropped 40%."
      },
      {
        "title": "45% Higher Retention",
        "body": "One-time buyers became repeat customers, with replenishment reminders driving 35% of repeat purchases in a category known for brand-switching."
      },
      {
        "title": "70% Less Cart Abandonment",
        "body": "Showing a handful of personalized recommendations instead of 50,000 options drove higher conversion and far fewer abandoned carts."
      },
      {
        "title": "World-Class Satisfaction",
        "body": "NPS jumped from a mediocre 32 to a world-class 72 as customers felt genuinely understood by the platform."
      }
    ],
    "verdict": "BeautyRightBack stopped treating customers as browsers and started treating them as people with unique, complex preferences it actually understood - becoming a trusted advisor at scale. The result: 3x revenue, loyal customers, and a position as the industry-leading beauty intelligence platform."
  },
  {
    "slug": "authority-alert",
    "name": "Authority Alert",
    "categories": [
      "SaaS",
      "AI",
      "Web Development"
    ],
    "category": "SaaS · AI · Web Development",
    "oneLiner": "A transparent, ranked marketplace that verifies coaches, aggregates real feedback, and tracks outcomes so clients can hire with confidence.",
    "overview": "Authority Alert built a transparent, ranked marketplace for coaches with verified credentials, real feedback, and outcome tracking. It brought standards to a fragmented industry, connecting millions of clients with vetted coaches across every specialty.",
    "thumbnail": "/projects/authorityAlert.png",
    "collaboration": "Authority Alert coaching marketplace",
    "metrics": [
      {
        "value": "50,000+",
        "label": "Coaches on platform"
      },
      {
        "value": "2.5M+",
        "label": "Clients matched & coached"
      },
      {
        "value": "$120M+",
        "label": "Annual coaching fees"
      }
    ],
    "challenge": "The coaching industry faced a credibility crisis: anyone could call themselves a coach, with no standards, no verification, and no way to know if one was legitimate or effective. Clients had no central registry to check credentials, only cherry-picked testimonials to judge by, and prices ranging from $50 to $5,000/hour with zero transparency. Good coaches stayed hidden while mediocre ones thrived through aggressive marketing, scattered across LinkedIn, Facebook groups, and personal networks.",
    "approach": [
      {
        "title": "Credibility Infrastructure",
        "body": "Built trust from the ground up with third-party verified credentials, a structured feedback system rating coaches on specific dimensions, and outcome tracking against measurable goals set with clients. A transparent ranking algorithm and dispute resolution created real accountability instead of pay-to-play visibility."
      },
      {
        "title": "Discovery & Intelligent Matching",
        "body": "Made finding the right coach instant with advanced filtering by specialty, experience, price, and certifications. Machine-learning match scoring suggests coaches most likely to help each client succeed, backed by transparent pricing, low-friction trials, and dedicated industry-specific marketplaces."
      },
      {
        "title": "Coach Growth & Success Tools",
        "body": "Turned the platform into a business-building engine with marketing visibility, integrated booking and secure payments, and client management for sessions, goals, and feedback. Coaches could document real client wins and collaborate with peers, replacing slow word-of-mouth with consistent client flow."
      },
      {
        "title": "Network Effects & Scale",
        "body": "As more coaches and clients joined, the platform became the default choice through compounding network effects. A specialization flywheel grew niche markets, and anonymized data on what coaching actually works built a defensible competitive moat."
      }
    ],
    "results": [
      {
        "title": "50,000+ Coaches on Platform",
        "body": "From boutique practitioners to established names, Authority Alert became the standard place for coaches seeking credibility, visibility, and scale to list."
      },
      {
        "title": "2.5M+ Clients Matched",
        "body": "Millions of people found coaches through transparent, ranked discovery, getting better at their craft, business, health, or life."
      },
      {
        "title": "$120M+ Annual Coaching Fees",
        "body": "Coaches collectively earn $120M+ annually from engagements arranged through the platform, turning coaching into a thriving, transparent industry."
      },
      {
        "title": "Top Coaches 10x Income",
        "body": "Top-rated coaches no longer hustle for clients; some went from 5 clients/month to 30+, while emerging coaches with strong outcomes outrank famous names with mediocre reviews."
      }
    ],
    "verdict": "Authority Alert proved that transparency and accountability create thriving markets. By removing information asymmetry with verified credentials, real feedback, and actual outcomes, it gave the coaching industry standards, made invisible coaches visible, and helped millions of clients hire with confidence."
  },
  {
    "slug": "carrier-network",
    "name": "Carrier Network",
    "categories": [
      "SaaS",
      "Web Development",
      "AI"
    ],
    "category": "SaaS · Web Development · AI",
    "oneLiner": "A unified carrier intelligence dashboard that turns scattered trucking data into one source of truth—dispatching loads 40% faster and cutting costs 25%.",
    "overview": "Carrier Network consolidated fragmented carrier data—profiles, performance metrics, compliance records, and communication history—into one intelligent dashboard for freight brokers and logistics companies. The result was 40% faster load assignments and 25% lower costs through smarter carrier selection.",
    "thumbnail": "/projects/careerNetwork.png",
    "collaboration": "Carrier Network carrier intelligence platform",
    "metrics": [
      {
        "value": "40%",
        "label": "Faster load assignments"
      },
      {
        "value": "25%",
        "label": "Cost reduction"
      },
      {
        "value": "98%",
        "label": "On-time delivery rate"
      }
    ],
    "challenge": "The trucking industry runs on 1990s infrastructure, with carrier data scattered across spreadsheets, emails, contact apps, and government sites—no single source of truth on reliability, cost, capacity, or compliance. Finding the right carrier for a load took 30-60 minutes of phone calls and manual searching, and decisions were made on gut feel rather than data. Loads went to unreliable carriers, premium rates were paid for mediocre service, and compliance risks went unmanaged. The data existed from every interaction; it was just trapped in disconnected systems.",
    "approach": [
      {
        "title": "Data Consolidation & Unification",
        "body": "Pulled carrier data from every source into one complete profile per carrier—contacts, equipment, capacity, rates, certifications, and insurance. Integrated load history, safety ratings, customer feedback, cost performance, and reliability metrics, plus government DOT compliance data and full communication logs."
      },
      {
        "title": "Intelligent Dashboard & Decision Support",
        "body": "Turned raw data into actionable intelligence with a recommendation engine that surfaces the best carriers per load by service area, equipment, reliability, cost, and compliance. Transparent performance scorecards, capacity planning, and one-click load assignment replaced 30-minute searches with instant recommendations."
      },
      {
        "title": "Network Effects & Insights",
        "body": "As adoption grew, anonymized data powered market intelligence on pricing and capacity trends, benchmarking against industry averages, and predictive insights on no-show risk and capacity limits. The system proactively flagged carriers approaching compliance violations before they happened."
      }
    ],
    "results": [
      {
        "title": "Faster Load Assignments",
        "body": "What used to take 30-60 minutes of phone calls now takes minutes—a 40% faster process that lets dispatchers book more loads and serve customers quicker."
      },
      {
        "title": "Lower Costs",
        "body": "Data on carrier reliability and cost performance ended overpaying for mediocre service, delivering a 25% cost reduction through better carrier selection."
      },
      {
        "title": "Higher On-Time Performance",
        "body": "Booking data-ranked reliable carriers pushed overall on-time delivery to 98%, with that satisfaction carrying downstream to end customers."
      },
      {
        "title": "Compliance & Relationship Visibility",
        "body": "Compliance issues are caught immediately, eliminating accidental bookings of non-compliant carriers, while preferred carriers earn steady, data-backed work instead of relationship luck."
      }
    ],
    "verdict": "Carrier Network shows what's possible when transparency and data replace chaos and tribal knowledge—shifting an entire industry from guesswork to systematic, performance-based carrier management. For logistics companies it meant better selection, faster dispatch, and lower costs; for carriers, transparent opportunities to earn more by performing better."
  },
  {
    "slug": "trucking-guru",
    "name": "Trucking Guru",
    "categories": [
      "Branding",
      "Web Development"
    ],
    "category": "Branding · Web Development",
    "oneLiner": "A personal brand and education platform that teaches trucking dispatchers and truck owners to think like entrepreneurs and build thriving businesses.",
    "overview": "Trucking Guru is a personal brand and education platform teaching trucking professionals the business fundamentals their industry never taught them. Over 10,000+ students have graduated, collectively building hundreds of millions in wealth.",
    "thumbnail": "/projects/truckingGuru.png",
    "collaboration": "Trucking Guru",
    "metrics": [
      {
        "value": "10,000+",
        "label": "Students transformed"
      },
      {
        "value": "$100M+",
        "label": "In collective student wealth"
      },
      {
        "value": "10x",
        "label": "Potential income increase"
      }
    ],
    "challenge": "The trucking industry is full of capable people making poor business decisions. Dispatchers earn $40-$60k/year as employees despite having the skills to run their own dispatch businesses, while truck owners excel at moving freight but lack cost accounting, pricing strategy, and scaling know-how. Business schools train corporate MBAs, but nobody teaches business fundamentals to trucking professionals, so dispatchers stay employees and truck owners stay small.",
    "approach": [
      {
        "title": "Personal Brand & Credibility",
        "body": "Built deep industry credibility on a proven track record, backing taught strategies with real P&L statements. Free, practical content across social media, YouTube, and email grew an audience, while forums and groups replaced isolation with peer support and authentic, transparent storytelling."
      },
      {
        "title": "Structured Education & Programs",
        "body": "Converted the audience into paying students through Dispatcher Bootcamp and Truck Owner Mastery, covering load economics, broker relationships, pricing, financial management, and scaling. Advanced cohorts added group coaching and accountability, with student results meticulously documented as case studies."
      },
      {
        "title": "Community & Network Effects",
        "body": "Built a self-sustaining ecosystem where students partnered, referred, and collaborated across the country. A job board, financing options, and service-provider partnerships formed a resource network, while celebrated alumni success stories drove word-of-mouth enrollment without expensive marketing."
      },
      {
        "title": "Scale & Industry Impact",
        "body": "The brand became the go-to authority in trucking business, reaching hundreds of thousands of professionals via a YouTube channel with millions of views and a 100k+ email list. Backed by an LMS, community platforms, and financing partnerships, it earned media features and conference speaking engagements."
      }
    ],
    "results": [
      {
        "title": "10,000+ Students Transformed",
        "body": "Over 10,000 paying students across the programs changed their financial trajectories, going from completion to genuine transformation as employees turned entrepreneurs."
      },
      {
        "title": "Wealth Created",
        "body": "Documented case studies show dozens of students going from $50-80k/year to $200k-$500k+, with some building multi-million-dollar dispatch or trucking operations."
      },
      {
        "title": "Collective Income Growth",
        "body": "Across 10,000+ students lifting their income from roughly $50k to $100k–$500k a year, the community has collectively built hundreds of millions of dollars in wealth."
      },
      {
        "title": "Economic Mobility & Authority",
        "body": "Working-class professionals discovered they could earn 10x more as independent operators, and Trucking Guru became the definitive voice on how to build a trucking business."
      }
    ],
    "verdict": "Trucking Guru proves that teaching people to make better business decisions can unlock generational wealth. By selling education rather than software or services, she turned thousands of stuck trucking professionals into thriving dispatch and trucking business owners."
  },
  {
    "slug": "chat-center",
    "name": "Chat Center",
    "categories": [
      "SaaS",
      "Mobile App Development",
      "Web Development"
    ],
    "category": "SaaS · Mobile App Development · Web Development",
    "oneLiner": "A trucking-native communication platform that unifies driver-dispatcher coordination into one real-time, fully documented app.",
    "overview": "Chat Center is a unified communication and data platform built specifically for trucking, centralizing all driver-dispatcher interaction in one app. It combines real-time messaging, task tracking, load coordination, and complete data visibility to replace fragmented, unreliable channels.",
    "thumbnail": "/projects/chatCenter.png",
    "collaboration": "Chat Center (trucking communication platform)",
    "metrics": [
      {
        "value": "35%",
        "label": "Reduction in miscommunication delays"
      },
      {
        "value": "50%",
        "label": "Faster load assignment"
      },
      {
        "value": "20%",
        "label": "Improvement in operational efficiency"
      }
    ],
    "challenge": "Driver-dispatcher communication was fragmented across phone calls, texts, WhatsApp, email, and CB radio, with critical updates getting lost and no record of conversations. Dispatchers had no visibility into driver status and burned 30 minutes phone-tagging drivers to fill an urgent load, while drivers missed load changes and drove hundreds of miles the wrong way. The result was constant miscommunication delays, slow assignments, data loss, and frustrated customers. Most trucking companies accepted this chaos as simply how the industry worked.",
    "approach": [
      {
        "title": "Unified Messaging & Real-Time Notifications",
        "body": "Consolidated all communication into a single hub with instant messaging, read receipts, and delivery confirmation, ending the fragmented mix of calls, texts, and WhatsApp. Structured task assignments carry full load details accepted or declined with one tap, while live status indicators and priority messaging keep dispatchers aware and urgent updates seen immediately."
      },
      {
        "title": "Data & Coordination Intelligence",
        "body": "Turned every message, assignment, and update into logged, actionable data with complete communication history attached to each load record. Driver performance tracking and route-and-availability optimization suggest the right driver for the right load, while document, compliance, and safety logs live inside the platform for built-in accountability."
      },
      {
        "title": "Integration & Workflow Automation",
        "body": "Connected Chat Center to TMS, GPS/telematics, customer-facing tracking, and payment systems so load data, location, and ETAs sync automatically with no manual entry. Automated alerts flag issues like approaching service limits, low fuel, delivery delays, or reported damage so dispatchers can intervene early."
      },
      {
        "title": "Scale & Industry Adoption",
        "body": "Based on user feedback, added group messaging, voice/video calls, and push notifications alongside a mobile-first design, offline sync, and multi-language support for a diverse workforce. Better coordination made drivers feel respected and valued, turning the platform into both a retention tool and a new industry standard."
      }
    ],
    "results": [
      {
        "title": "Fewer Miscommunication Delays",
        "body": "Clear, real-time, documented updates drove a 35% reduction in miscommunication-related delays, so drivers stopped missing updates and dispatchers stopped wondering if messages landed."
      },
      {
        "title": "Faster Load Assignment",
        "body": "Sending a load to multiple available drivers at once made assignment 50% faster, replacing 30-minute phone tag with near-instant acceptance."
      },
      {
        "title": "Higher Operational Efficiency",
        "body": "Cutting communication overhead delivered a 20% improvement in overall operational efficiency, letting drivers drive more and dispatchers strategize instead of chase."
      },
      {
        "title": "Scalability & Retention",
        "body": "A dispatcher who once managed 15 drivers could now effectively manage 25, while better, more respectful communication improved driver retention and made recruiting easier."
      }
    ],
    "verdict": "Chat Center proves that communication which is clear, real-time, and documented transforms operational efficiency. By making driver-dispatcher coordination instant, visible, and recorded, it became the backbone of operational success for an industry where coordination is everything."
  },
  {
    "slug": "driver-app",
    "name": "Driver App",
    "categories": [
      "Mobile App Development",
      "AI",
      "SaaS"
    ],
    "category": "Mobile App Development · AI · SaaS",
    "oneLiner": "Real-time location, dashcam footage, and AI safety monitoring that turns trucking fleets from reactive to proactive — cutting accidents and insurance costs.",
    "overview": "Trucking companies operated blind, with no visibility into driver behavior, location, or safety. Driver App built a real-time collaboration platform giving dispatchers live location tracking, continuous dashcam footage, and performance data — shifting fleets from reacting to problems to preventing them.",
    "thumbnail": "/projects/driverapp.png",
    "collaboration": "Driver App",
    "metrics": [
      {
        "value": "40%",
        "label": "reduction in accidents"
      },
      {
        "value": "60%",
        "label": "savings on insurance claims"
      },
      {
        "value": "20-30%",
        "label": "lower insurance premiums"
      }
    ],
    "challenge": "Trucking companies faced a visibility crisis that cost millions. Accidents happened with no footage to explain why, so insurers questioned claims and drivers disputed fault — driving up premiums companies couldn't defend. Dispatchers had no view into driver behavior or real-time location, leaving unsafe driving uncorrected and routes impossible to optimize. The prevailing culture assumed accidents could only be managed after the fact, never prevented.",
    "approach": [
      {
        "title": "Real-Time Location & Tracking",
        "body": "Live GPS put every driver on a map in real time, with accurate ETAs replacing guesswork. Dispatchers optimized routes on the fly, set geofencing alerts, and confirmed deliveries automatically."
      },
      {
        "title": "Dashcam & Safety Footage",
        "body": "Continuous front- and optional rear-facing dashcams streamed to secure cloud storage, with live feed access for dispatchers. AI flagged risky events like hard braking and tailgating in real time, while saved accident footage delivered undeniable evidence for coaching and insurance disputes."
      },
      {
        "title": "Performance Data & Accountability",
        "body": "Driving behavior was scored and surfaced on individual driver and fleet dashboards, turning safety into friendly competition. Aggregate analytics pinpointed risky drivers, lanes, and times of day, while data flagged predictive maintenance needs and automated DOT compliance documentation."
      },
      {
        "title": "Culture & Scale",
        "body": "Transparency reframed monitoring as coaching, not punishment, supported by incentive programs that rewarded the safest drivers. New-driver onboarding set standards upfront, improving recruitment, retention, and customer trust."
      }
    ],
    "results": [
      {
        "title": "40% Fewer Accidents",
        "body": "Real-time behavior monitoring, AI-powered incident detection, and targeted coaching drove a 40% reduction in accidents as drivers drove safer knowing they were observed."
      },
      {
        "title": "60% Lower Insurance Claims",
        "body": "Footage proving driver safety or fault cut insurance claims 60%, resolving liability disputes with video evidence and lowering premiums substantially."
      },
      {
        "title": "Cheaper Premiums",
        "body": "Insurers offered 20-30% lower premiums to companies with proven safety data, saving thousands per truck annually."
      },
      {
        "title": "Data-Driven Operations",
        "body": "Real-time location enabled route optimization and accurate ETAs, while real performance data replaced anecdote — showing which drivers, routes, and times were safest."
      }
    ],
    "verdict": "Driver App proved that making the invisible visible prevents accidents before they happen. By combining GPS, dashcam footage, AI risk detection, and transparent performance data, fleets went fully proactive — fewer accidents, millions saved, and safety made a shared value rather than a compliance checkbox."
  },
  {
    "slug": "sound-space",
    "name": "Sound Space",
    "categories": [
      "SaaS",
      "Web Development",
      "Web Design"
    ],
    "category": "SaaS · Web Development · Web Design",
    "oneLiner": "A free, professionally curated sound effects library that became the default audio resource for over 500,000 creators every month.",
    "overview": "SoundSpace built a professional, organized, free sound effects library with thousands of high-quality audio files properly categorized and searchable. It became the go-to resource for YouTubers, TikTokers, and video creators worldwide.",
    "thumbnail": "/projects/soundAddress.png",
    "collaboration": "SoundSpace sound effects library",
    "metrics": [
      {
        "value": "500k+",
        "label": "Active monthly creators"
      },
      {
        "value": "50M+",
        "label": "Sound effect downloads"
      },
      {
        "value": "$20/mo",
        "label": "Premium rivals undercut by free model"
      }
    ],
    "challenge": "Creators faced an impossible audio choice: pay $15-50 per premium sound effect, settle for generic royalty-free packs everyone else uses, or hunt across the web for hours with uncertain licensing. Every video needs sound design, and professionals burned 20-30% of production time just finding and implementing audio. No single library existed that was free, well-organized, professionally produced, legally clear, and continuously updated.",
    "approach": [
      {
        "title": "Library Building & Curation",
        "body": "Collected thousands of high-quality, professionally produced sound effects organized into logical categories like nature, games, alarms, and transitions. Every sound was tagged by category, type, mood, and use case for instant discovery, with clear licensing on each file. Weekly additions kept the library growing with creator needs."
      },
      {
        "title": "Creator Access & Distribution",
        "body": "Made browsing, previewing, and downloading free on the web with no login or paywall for basic access. Hover-to-preview and one-click downloads removed all friction. A dedicated YouTube channel and video integrations showed sounds in action and drove organic discoverability."
      },
      {
        "title": "Community & Network Effects",
        "body": "Built community through creator testimonials, trending sounds that drove FOMO adoption, and sound requests where creators voted on what to add next. Remix features and revenue sharing with top contributors expanded the library while incentivizing quality."
      },
      {
        "title": "Scale & Dominance",
        "body": "SoundSpace became the standard resource every major creator reached for first. TikTok and influencer integrations spread audio virally, while its free model forced premium services like Epidemic Sound and Artlist to compete on price."
      }
    ],
    "results": [
      {
        "title": "500,000+ Monthly Creators",
        "body": "From podcasters to YouTubers to TikTokers, half a million creators use SoundSpace every month."
      },
      {
        "title": "50M+ Downloads",
        "body": "The library has been downloaded 50 million times, each a moment a creator found the perfect audio for their content."
      },
      {
        "title": "Fastest Growing Audio Resource",
        "body": "Competing against premium services costing $20/month, SoundSpace's free model grew faster than any paid alternative."
      },
      {
        "title": "Creator Efficiency Gain",
        "body": "Creators save 30-60 minutes per video finding audio, freeing millions of hours across the community for actual creativity."
      }
    ],
    "verdict": "SoundSpace proves that solving a creator's friction point brilliantly makes you indispensable. By removing the cost, quality, and licensing barriers around audio at once, it grew from a niche problem into the first place creators look, a resource so essential that competing with it is nearly impossible."
  },
  {
    "slug": "propforce",
    "name": "Propforce",
    "categories": [
      "SaaS",
      "Web Development"
    ],
    "category": "SaaS · Web Development",
    "oneLiner": "A unified property management portal that turns spreadsheets and phone tag into automated workflows, tenant self-service, and financial intelligence.",
    "overview": "PropForce centralizes tenant communication, rent collection, maintenance workflows, lease tracking, and financial reporting in one portal. It shifts property managers from reactive, paper-based admin to proactive, data-driven operations.",
    "thumbnail": "/projects/propforce.png",
    "collaboration": "PropForce property management platform",
    "metrics": [
      {
        "value": "35%",
        "label": "Faster rent collection"
      },
      {
        "value": "45%",
        "label": "Faster maintenance response"
      },
      {
        "value": "60%",
        "label": "Tenant satisfaction gain"
      }
    ],
    "challenge": "Property management ran on spreadsheets, phone calls, and scattered email threads, so maintenance requests got lost, rent collection was manual and unreliable, and true per-property profitability was invisible. Tenants had no way to pay online or track requests, driving churn toward professionally-managed competitors. A manager with 20-30 properties spent 80% of their time on admin instead of strategy, so profitability plateaued as adding properties meant hiring more people.",
    "approach": [
      {
        "title": "Tenant Self-Service & Communication Hub",
        "body": "Every tenant got portal access to lease details, payment history, maintenance status, and documents. Online rent payment, in-portal maintenance requests, and automated reminders freed managers from constant calls while keeping all communication in one place per tenant."
      },
      {
        "title": "Operational Workflow Automation",
        "body": "Maintenance requests auto-route to approved contractors with status tracking, and rent collection runs on automatic reminders, processing, and late-payment escalation. Lease lifecycle, vendor management, and inspection scheduling were systematized, turning managers from administrators into strategists."
      },
      {
        "title": "Financial Insights & Analytics",
        "body": "A real-time dashboard surfaces per-property profitability, rent collected vs. late, and year-to-date P&L by property. Maintenance cost analysis, tenant quality metrics, and forecasting let managers make strategic decisions from data instead of gut feel."
      }
    ],
    "results": [
      {
        "title": "Faster Rent Collection",
        "body": "Automated reminders, online payments, and systematic escalation cut rent collection time 35%, dropping days sales outstanding from 45 days to 29 days."
      },
      {
        "title": "Quicker Maintenance Response",
        "body": "Instant contractor assignment reduced maintenance response time 45%, from an average of 5-7 days down to 2-3 days."
      },
      {
        "title": "Happier, Stickier Tenants",
        "body": "Professional, transparent service improved tenant satisfaction 60% and reduced tenant churn 30%, stabilizing revenue through longer tenures."
      },
      {
        "title": "Lower Costs, Scalable Portfolios",
        "body": "Admin automation cut labor cost per property 40%, letting managers handle 30 properties instead of 10 and scale portfolios without proportional labor increases."
      }
    ],
    "verdict": "PropForce shows what's possible when you digitize an industry still running on paper and phone calls. By automating communication, centralizing operations, and exposing real profitability, it made property managers roughly 3x more productive and shifted the business from reactive chaos to proactive, data-driven management."
  }
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
