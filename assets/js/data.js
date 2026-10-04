/* ==========================================================================
   SITE DATA — the single place to edit content.
   Plain global (no modules) so the site works from file:// and GitHub Pages
   with no build step.

   Adding a page? Add it to SITE.nav and SITE.footerNav and it appears
   everywhere automatically.
   ========================================================================== */
window.SITE = {

  person: {
    name: "Sachin Kumar Shukla",
    short: "Sachin",
    initials: "SS",
    title: "AI Product Manager",
    altTitle: "Founding Engineer",
    location: "Bangalore, India",
    email: "sachinshuklapm@gmail.com",
    emailAlt: "sachinkshuklaoo7@gmail.com",
    phone: "+91 8072937581",
    roles: ["AI Product Manager", "Founding Engineer", "Open-source builder", "Creator, 144k reach"],
    lede: "I build AI products and then I build the audience that uses them.",
    sub: "Six years shipping full-stack systems, four of them on AI-first products across FinTech, EdTech and e-commerce. I now own the hard part of AI products: how much a model should be trusted, where it must fail gracefully, and what it costs to run at scale."
  },

  nav: [
    { label: "Work",      href: "work.html" },
    { label: "About",     href: "about.html" },
    { label: "Résumé",    href: "resume.html" },
    { label: "Creator",   href: "for-brands.html" },
    { label: "Email me",  mail: true, cta: true }
  ],

  social: [
    { label: "GitHub",    url: "https://github.com/imsks" },
    { label: "LinkedIn",  url: "https://www.linkedin.com/in/imsks" },
    { label: "ProductHunt", url: "https://www.producthunt.com/@imsks" },
    { label: "Instagram", url: "https://instagram.com/theboringfounder" }
  ],

  footerNav: [
    {
      title: "Portfolio",
      links: [
        { label: "Selected work", href: "work.html" },
        { label: "About",         href: "about.html" },
        { label: "Résumé — AI PM", href: "resume.html#ai-pm" },
        { label: "Résumé — Engineering", href: "resume.html#ai-engineer" }
      ]
    },
    {
      title: "Creator",
      links: [
        { label: "For brands",         href: "for-brands.html" },
        { label: "The Boring Founder",  href: "https://instagram.com/theboringfounder" },
        { label: "Live Interviews",     href: "https://instagram.com/liveinterviewswithsachin" },
        { label: "The Boring Planks",   href: "https://instagram.com/theboringplanks" }
      ]
    }
  ],

  // Headline numbers. `value` is animated by the counter when numeric.
  stats: [
    { value: "6",      suffix: " yrs", label: "Shipping products" },
    { value: "7,000",  suffix: "+",    label: "Daily active learners" },
    { value: "100,000", suffix: "+",   label: "Community built" },
    { value: "1,000",  suffix: "+",    label: "Engineers mentored" },
    { value: "144,000", suffix: "",    label: "Content reach" }
  ],

  marquee: [
    "AI Trust & Safety", "RAG + Agentic pipelines", "Market sizing",
    "RICE & Kano", "OKRs", "Latency as a product constraint",
    "Open source", "Next.js · Python · Go", "Built in public"
  ],

  pillars: [
    {
      tag: "01 — Product",
      title: "I decide what the model is allowed to say",
      body: "Confidence scoring, source attribution, hallucination guardrails and fallback paths. In finance and in civic tech, a wrong answer delivered confidently is the product failing — not the model."
    },
    {
      tag: "02 — Engineering",
      title: "I can build the thing I am speccing",
      body: "Six years full-stack. LangGraph multi-agent pipelines, vector search, serverless event systems. Estimates, trade-offs and architecture calls do not need a translator."
    },
    {
      tag: "03 — Distribution",
      title: "I have shipped to an audience I built myself",
      body: "7,000 daily learners and a 100,000-strong community with zero paid acquisition. Discovery is not a research function for me — it is a WhatsApp group I am already in."
    }
  ],

  // ---- Featured case study -------------------------------------------------
  featured: {
    tag: "Primary case study",
    title: "Rajniti — Civic AI for 970M voters",
    body: "An open-source AI research tool for Indian elections, taken from zero to a complete product case study: bottom-up market model, dual-revenue architecture, RICE-prioritised roadmap, Q1 OKRs and a Trust & Safety framework for a context where a wrong fact can influence a vote.",
    stats: [
      { value: "970M",   label: "TAM — eligible voters" },
      { value: "23.6M",  label: "SAM — reachable users" },
      { value: "₹4.85 Cr", label: "Base-case Year-1 ARR" },
      { value: "10",     label: "PM artifacts published" }
    ],
    chapters: [
      {
        kicker: "Chapter 2",
        title: "Market Opportunity",
        desc: "TAM/SAM/SOM, competitive landscape, dual revenue model, pricing and GTM timing against the election cycle.",
        href: "work/rajniti/market-opportunity.html"
      },
      {
        kicker: "Chapter 3",
        title: "Roadmap & Prioritisation",
        desc: "Now/Next/Later tied to key results, the Saransh dependency, and the trade-offs I chose to lose on.",
        href: "work/rajniti/roadmap.html"
      },
      {
        kicker: "Chapter 4",
        title: "Trust & Safety",
        desc: "Eight-risk register, hallucination protocol, bias inventory and the source-attribution contract.",
        href: "work/rajniti/trust-and-safety.html"
      },
      {
        kicker: "Foundation",
        title: "Market Sizing Model",
        desc: "Bottom-up funnel, dual revenue streams, three scenarios and an honest assumption audit.",
        href: "work/rajniti/market-sizing.html"
      }
    ]
  },

  // ---- Supporting PM artifacts --------------------------------------------
  artifacts: [
    {
      tag: "Prioritisation",
      title: "RICE + Kano Scoring",
      desc: "Five features scored with RICE, classified with Kano, and a documented strategic override where the numeric ranking diverged from the product mission.",
      href: "work/rajniti/rice-prioritization.html",
      accent: "var(--navy)"
    },
    {
      tag: "Goal setting",
      title: "Q1 OKRs & Metrics Dashboard",
      desc: "One objective, four key results, each tied to a sprint deliverable. North star defined down to the 60-second research session.",
      href: "work/rajniti/okrs-dashboard.html",
      accent: "var(--green)"
    },
    {
      tag: "Stakeholders",
      title: "Stakeholder Map & RACI",
      desc: "Power/interest mapping, RACI across three high-stakes decisions, and a framework for telling a founder no without burning the relationship.",
      href: "work/rajniti/stakeholder-map.html",
      accent: "var(--plum)"
    },
    {
      tag: "Discovery",
      title: "JTBD Interview Script",
      desc: "A ten-question discovery script in three zones with probing follow-ups. No leading questions, no hypotheticals, no feature evaluation.",
      href: "work/rajniti/interview-script.html",
      accent: "var(--rust)"
    },
    {
      tag: "Experimentation",
      title: "The Blur Test — Experiment Brief",
      desc: "Full A/B design: hypothesis, primary metric, guardrail metric, sample-size calculation and three pre-committed decisions.",
      href: "work/rajniti/experiment-brief.html",
      accent: "var(--ink)"
    },
    {
      tag: "Analytics",
      title: "PM Analytics Dashboard",
      desc: "Five charts, each tied to a key result with investigate/celebrate thresholds — plus the 24-hour diagnosis sequence for a 20% metric drop.",
      href: "work/rajniti/analytics-dashboard.html",
      accent: "var(--signal-deep)"
    }
  ],

  // ---- Products & open source ---------------------------------------------
  projects: [
    {
      title: "The Boring Education",
      role: "Co-founder & Product Lead · 2022–now",
      desc: "Free, open-source, structured tech education for India. Engineered the activation moment and the habit loops that beat the category's drop-off. 7,000+ daily active learners, 1,000+ mentored into first engineering jobs, zero paid acquisition.",
      stack: "Next.js · MongoDB · TypeScript · LangChain · GCP",
      url: "https://www.theboringeducation.com"
    },
    {
      title: "Rajniti",
      role: "PM & builder · open source",
      desc: "AI civic-research tool for Indian voters with source-attributed answers. I authored the market model, roadmap, OKRs and the Trust & Safety framework governing hallucination, attribution and bias.",
      stack: "LangGraph · Next.js · Postgres · GCP",
      url: "https://github.com/imsks"
    },
    {
      title: "Chitthi",
      role: "Creator · open source",
      desc: "Bring-your-own-key email microservice in Go, used by 100+ developers. Owned the developer-experience calls: API simplicity, self-host onboarding, zero-config defaults.",
      stack: "Golang · Redis Queue · Postgres · Docker",
      url: "https://github.com/imsks"
    },
    {
      title: "Onboard Me",
      role: "Creator · open source",
      desc: "A Flutter package that builds onboarding screens from a handful of parameters. Small surface area on purpose.",
      stack: "Flutter · Dart",
      url: "https://github.com/imsks"
    }
  ],

  // ---- Experience ----------------------------------------------------------
  experience: [
    {
      from: "Jan 2023",
      to: "Present",
      role: "Founding Product Manager (AI)",
      company: "FinSoftAI · Remote",
      note: "AI sentiment-research platform for US retail equity traders.",
      points: [
        "Defined and shipped an AI equity-research product serving <b>1,000+ active traders</b>, owning the roadmap from problem definition to launch with a three-engineer platform team.",
        "Set a <b>&lt;1.5s TTFT latency SLA</b> as a hard product constraint — a sentiment signal that arrives after the trade has zero value — and held the roadmap to it.",
        "Shipped a LangChain multi-agent summarisation system that cut research time by <b>92%</b> and drove <b>4,200+ weekly</b> AI-assisted trade executions.",
        "Authored the trust and confidence framework: source attribution, confidence scoring and hallucination guardrails for financial decision-making."
      ]
    },
    {
      from: "Jun 2022",
      to: "Present",
      role: "Co-Founder & Product Lead",
      company: "The Boring Education",
      note: "Open-source tech education for India, positioned against ₹1L+ bootcamps.",
      points: [
        "Scaled to <b>7,000+ daily active learners</b> by engineering the activation moment and building habit loops into structured tracks, streaks and interview-prep tools.",
        "Grew a <b>100,000+ community</b> and used direct contact with <b>1,000+ mentored learners</b> as a continuous-discovery channel feeding roadmap decisions.",
        "Made the open-source GTM bet deliberately — free as the wedge, trust as the moat, organic as the only channel."
      ]
    },
    {
      from: "Jan 2022",
      to: "Dec 2022",
      role: "Founding Product Manager",
      company: "Saara · Remote",
      note: "B2B SaaS attacking the 20–30% of merchant revenue lost to returns.",
      points: [
        "Owned the merchant outcome that defined the product — return-rate reduction — and prioritised interventions by revenue retained.",
        "Diagnosed a monolithic frontend as a delivery bottleneck and drove adoption of a <b>micro-frontend architecture</b> that unblocked two parallel feature teams.",
        "Quantified a <b>40% frontend performance gap</b> via Lighthouse and shipped the fixes tied to merchant churn risk.",
        "Owned the integrations roadmap for third-party logistics and Twilio telephony; shipped the microservice that automated return notifications end to end."
      ]
    },
    {
      from: "Jul 2020",
      to: "Jul 2021",
      role: "Founding Full-Stack Engineer",
      company: "Trilingo · Remote",
      note: "Tribal-language learning platform.",
      points: [
        "Drove <b>60% retention</b> by cutting initial load from 4s to 0.7s through code splitting, image compression and SEO work.",
        "Held <b>&lt;250ms</b> average API response while absorbing a 15% traffic increase."
      ]
    },
    {
      from: "May 2018",
      to: "Aug 2020",
      role: "Co-founder",
      company: "Gangs Of Hackspur",
      note: "First startup — overnight exam prep for university students.",
      points: [
        "Grew to <b>2,000+ paying users</b> across 10+ university courses, self-teaching the full web stack to ship it.",
        "Learned the lesson that shaped everything since: distribution beats product when both are weak."
      ]
    }
  ],

  skillGroups: [
    {
      title: "AI product",
      items: ["AI trust & confidence design", "Hallucination / fallback strategy", "Inference-cost & token economics", "Latency–UX trade-offs (TTFT)", "Responsible AI", "RAG & agentic productisation"]
    },
    {
      title: "Product craft",
      items: ["Market sizing (TAM/SAM/SOM)", "RICE & Kano", "OKRs", "Now/Next/Later roadmaps", "PRDs & acceptance criteria", "A/B testing", "AARRR & cohorts", "GTM", "Unit economics", "Stakeholder management"]
    },
    {
      title: "Technical",
      items: ["LangChain", "LangGraph", "Vector DBs (ChromaDB)", "MCP", "Python", "TypeScript", "Golang", "React / Next.js", "Node / FastAPI", "PostgreSQL", "MongoDB", "Elasticsearch", "Redis", "AWS", "GCP", "Docker", "Kubernetes"]
    },
    {
      title: "Design & data",
      items: ["Figma", "Framer", "SQL", "Funnel & cohort analysis", "Amplitude / Mixpanel", "Grafana", "Looker", "Snowflake"]
    }
  ],

  education: {
    school: "Vellore Institute of Technology, Vellore",
    degree: "B.Tech, Electrical & Electronics Engineering",
    when: "2016 — 2020"
  },

  // ---- Résumés -------------------------------------------------------------
  // Each résumé renders in full on resume.html and is print-ready.
  resumes: [
    {
      id: "ai-pm",
      label: "AI Product Manager",
      headline: "AI Product Manager | Founding Engineer | 6 Years",
      summary: "Founding engineer turned AI Product Manager with 4+ years building AI-first products across FinTech, EdTech and e-commerce. Co-founded an EdTech platform scaled to 7,000+ daily active learners and builds open-source AI apps.",
      file: "assets/resume/Sachin_Shukla_AI_PM_Resume.pdf",
      best: "Product roles where the AI trust layer, market model and roadmap all need one owner.",
      focus: ["Trust & safety frameworks", "Market sizing & pricing", "Roadmap & prioritisation", "Experimentation", "Agentic pipelines"],
      sections: [
        {
          type: "roles",
          title: "Experience",
          items: [
            {
              role: "Founding Product Manager (AI)",
              company: "FinSoftAI",
              meta: "Remote · Jan 2023 – Present",
              blurb: "AI sentiment-research platform for US retail equity traders — turning unstructured social signal into trade-ready intelligence. Owned the signal product and its real-time trust layer.",
              points: [
                "Defined and shipped an AI equity-research product that turns raw social sentiment into actionable market intelligence for <b>1,000+ active traders</b> — owning the roadmap from problem definition through launch with a three-engineer platform team.",
                "Set a <b>&lt;1.5s TTFT latency SLA</b> as a hard product constraint for the agentic pipeline, translated it into testable acceptance criteria, and held the roadmap to it.",
                "Scoped and shipped a LangChain multi-agent summarisation system that cut average research time by <b>92%</b> and drove <b>4,200+ weekly</b> AI-assisted trade executions.",
                "Defined the trust and confidence framework for AI outputs — source attribution requirements, confidence scoring on summaries, and hallucination guardrails relied on for financial decisions."
              ],
              stack: "LLMs · AI agents · LangChain · LangGraph · Multi-agent systems · Amplitude · Linear"
            },
            {
              role: "Founding Product Manager",
              company: "Saara",
              meta: "Remote · Jan 2022 – Dec 2022",
              blurb: "B2B SaaS reducing e-commerce returns — attacking the 20–30% of merchant revenue lost to reverse logistics. Owned the returns-reduction product and the integrations roadmap.",
              points: [
                "Owned the merchant outcome that defined the product: return-rate reduction. Measured return drivers per merchant, prioritised by revenue retained, and shipped the automated return-resolution workflow.",
                "Identified a developer-experience bottleneck in the monolithic frontend and drove adoption of a <b>micro-frontend architecture</b> that unblocked two parallel feature teams.",
                "Quantified a <b>40% frontend performance gap</b> via Lighthouse audits and shipped the optimisations tied to merchant churn risk.",
                "Owned the integrations roadmap for third-party logistics and Twilio telephony, automating the return-notification workflow end to end.",
                "Defined and led execution against a <b>30% sync-time improvement</b> target using async queuing architecture."
              ],
              stack: "Micro-frontend · Integrations · ClickUp · Notion · Miro · Google Analytics · Framer"
            }
          ]
        },
        {
          type: "roles",
          title: "Ventures",
          items: [
            {
              role: "Co-Founder & Product Lead",
              company: "The Boring Education",
              meta: "Jun 2022 – Present",
              blurb: "Open-source tech-education platform for India — free, structured and community-led, positioned against ₹1L+ bootcamps. Owned product, growth and retention.",
              points: [
                "Scaled to <b>7,000+ daily active learners</b> in a category defined by brutal drop-off, by engineering the activation moment and building habit loops. Zero paid acquisition.",
                "Built community as the distribution and retention moat — a <b>100,000+ community</b>, with direct contact across <b>1,000+ mentored learners</b> as a continuous-discovery channel.",
                "Made the open-source GTM bet deliberately: free and open as the wedge against paid bootcamps."
              ],
              stack: "Next.js · MongoDB · Tailwind · TypeScript · LangChain · LangGraph · Google Cloud"
            },
            {
              role: "Co-founder",
              company: "Gangs Of Hackspur",
              meta: "May 2018 – Aug 2020",
              blurb: "First startup — an overnight exam-prep platform for university students. Owned product, growth and curriculum.",
              points: [
                "Grew to <b>2,000+ paying users</b> across 10+ university courses, self-teaching the full web stack to ship it and running paid acquisition.",
                "Learned the founder lesson that shaped every product since: distribution beats product when both are weak."
              ]
            }
          ]
        },
        {
          type: "skills",
          title: "Skills",
          groups: [
            { title: "AI product", items: ["AI trust & confidence design", "Hallucination / fallback strategy", "Inference-cost & token economics", "Latency–UX trade-offs (TTFT)", "Responsible AI / Trust & Safety", "RAG & agentic-pipeline productisation"] },
            { title: "Product craft", items: ["Market sizing (TAM/SAM/SOM)", "RICE & Kano", "OKRs", "Now/Next/Later roadmaps", "PRDs & acceptance criteria", "A/B testing", "AARRR analytics & cohorts", "Competitive teardowns", "GTM", "Unit economics", "Stakeholder management"] },
            { title: "Technical", items: ["LLMs", "LangChain", "LangGraph", "ChromaDB", "MCP", "Python", "TypeScript", "Golang", "React / Next.js", "Node / FastAPI", "PostgreSQL", "MongoDB", "Elasticsearch", "Redis", "AWS", "GCP", "Docker", "Kubernetes"] },
            { title: "Design & data", items: ["Figma", "Framer", "SQL", "Funnel & cohort analysis", "Grafana", "Looker", "Snowflake"] }
          ]
        },
        {
          type: "list",
          title: "Open source & product projects",
          items: [
            { title: "Rajniti", desc: "Open-source AI civic-research tool for Indian voters. PM and builder: bottom-up market model (970M TAM → 23.6M SAM), dual-revenue architecture, RICE-prioritised roadmap, Q1 OKRs, and a Trust & Safety framework governing hallucination, attribution and bias." },
            { title: "Chitthi", desc: "Open-source BYOK email microservice in Golang, used by 100+ developers. Owned the developer-experience calls: API simplicity, self-host onboarding, zero-config defaults." },
            { title: "Trilingo", desc: "Founding engineer on a tribal-language learning platform; drove 60% retention by cutting load time from 4s to 0.7s." }
          ]
        }
      ]
    },
    {
      id: "ai-engineer",
      label: "AI Full-Stack Engineer",
      headline: "Sr. Full-Stack AI Engineer | 6 YOE",
      summary: "Full-stack engineer who ships AI systems end to end — multi-agent pipelines with LangGraph and ChromaDB, serverless event architectures on AWS, and the React/Next.js surfaces on top of them.",
      file: "",
      best: "Founding or senior engineering roles on AI products that need both the pipeline and the interface.",
      focus: ["LangGraph multi-agent pipelines", "Vector search & RAG", "Serverless event systems", "Micro-frontends", "Performance engineering"],
      sections: [
        {
          type: "roles",
          title: "Experience",
          items: [
            {
              role: "Founding Full-Stack Engineer",
              company: "FinSoftAI",
              meta: "Remote · Jan 2023 – Present",
              blurb: "AI-powered equity research and trading platform.",
              points: [
                "Engineered an AI-driven social sentiment insights platform with React, Node and Elasticsearch, serving <b>200+ retail investors</b> with real-time market analysis.",
                "Optimised AWS Lambda and Elasticsearch queries, cutting API response times to <b>0.5–1.5s</b>.",
                "Designed a serverless, event-driven stock alert system on Python, Lambda and Redis handling thousands of signals/day at <b>&lt;1s latency</b>.",
                "Built a multi-agent document summarisation pipeline in LangGraph — retrieval, summarisation and quality-validation agents over a large financial corpus with ChromaDB vector search, recursive chunking and citation-backed output.",
                "Deployed containerised microservices via Docker across EC2 and Lambda; S3 for report storage, Grafana for observability and alerting."
              ],
              stack: "Next.js · React · Node · TypeScript · Python (Flask, FastAPI) · AWS · Elasticsearch · PostgreSQL · Redis · Docker · LangChain · LangGraph · ChromaDB · Grafana"
            },
            {
              role: "Founding Full-Stack Engineer",
              company: "Saara",
              meta: "Remote · Jan 2022 – Dec 2022",
              blurb: "SaaS that manages and reduces e-commerce returns.",
              points: [
                "Architected a scalable frontend with Next.js, TypeScript, Redux and a custom <b>micro-frontend</b> library enabling parallel development and modular deploys.",
                "Improved rendering performance and cut bundle size by <b>40%</b> via dynamic imports, lazy loading and code splitting.",
                "Designed an integrations microservice for third-party logistics, Twilio telephony and notification platforms using Node and Django.",
                "Reduced processing and sync times by <b>30%</b> through async queuing, optimised API consumption and PostgreSQL-level tuning.",
                "Introduced a domain-based folder structure and a Jest + Cypress testing strategy, improving maintainability and onboarding speed."
              ],
              stack: "Next.js · React · Node · TypeScript · Tailwind · Django · PostgreSQL · MongoDB"
            },
            {
              role: "Founding Full-Stack Engineer",
              company: "Trilingo",
              meta: "Remote · Jul 2020 – Jul 2021",
              blurb: "Tribal language-learning platform for tribal communities.",
              points: [
                "Achieved <b>60% user retention</b> by reducing initial load from 4s to 0.7s through code splitting, SEO work and image compression.",
                "Deployed and orchestrated backend services on EC2 with Route53, improving uptime via automated health checks and graceful restarts.",
                "Optimised MongoDB queries and REST endpoints to absorb a 15% traffic increase while holding <b>&lt;250ms</b> average response time.",
                "Implemented lazy loading and CDN asset caching for a <b>+35</b> PageSpeed performance gain."
              ],
              stack: "React · Node · MongoDB · AWS (EC2, Route53)"
            }
          ]
        },
        {
          type: "roles",
          title: "Ventures",
          items: [
            {
              role: "Co-founder",
              company: "The Boring Education",
              meta: "Jun 2022 – Present",
              blurb: "Open-source tech-ed platform for India.",
              points: [
                "Scaled from 0 to <b>7,000+ daily active learners</b> by launching autonomous full-stack dev programs, tech challenges and interview-prep tools.",
                "Mentored <b>1,000+ students</b> across India in full-stack engineering, project-based learning and interview readiness."
              ],
              stack: "Next.js · MongoDB · Tailwind · TypeScript · LangChain · Google Cloud"
            },
            {
              role: "Co-founder",
              company: "Gangs Of Hackspur",
              meta: "May 2018 – Aug 2020",
              blurb: "Overnight exam-prep platform for university students.",
              points: [
                "Built the platform with self-taught web development and co-authored curriculum for 10+ core university courses.",
                "Ran online marketing and analytics — Facebook Ads and Google Analytics — reaching 2,000+ paying users."
              ],
              stack: "PHP · MySQL · HTML · CSS · JavaScript"
            }
          ]
        },
        {
          type: "skills",
          title: "Skills",
          groups: [
            { title: "Languages", items: ["JavaScript", "TypeScript", "Python", "Golang", "Ruby"] },
            { title: "Front-end", items: ["React", "Next.js", "Redux", "Tailwind", "SCSS", "React Native", "Flutter"] },
            { title: "Back-end", items: ["Node", "Express", "FastAPI", "Django", "Flask", "Ruby on Rails"] },
            { title: "Databases", items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch", "ChromaDB", "Firebase"] },
            { title: "Cloud & infra", items: ["AWS (EC2, S3, Lambda, Route53)", "Google Cloud (Cloud Run, CE)", "Docker", "Docker Swarm", "Kubernetes", "Netlify", "DigitalOcean"] },
            { title: "AI", items: ["LangChain", "LangGraph", "Vector DBs", "MCP", "Gen AI", "n8n"] },
            { title: "Observability", items: ["Grafana", "Datadog", "CloudWatch"] },
            { title: "Design", items: ["Figma", "Framer"] }
          ]
        },
        {
          type: "list",
          title: "Open source",
          items: [
            { title: "Onboard Me", desc: "A Flutter package for building onboarding screens from a handful of parameters." },
            { title: "Chitthi", desc: "Email-sending microservice built on BYOK in Golang, used by 100+ developers. Golang, Redis Queue, Next.js, Postgres, Docker, Google Cloud." },
            { title: "Rajniti", desc: "Open-source election APIs and components, building in AI. LangGraph, Next.js, Postgres, Google Cloud." }
          ]
        }
      ]
    }
  ],

  // ---- Creator -------------------------------------------------------------
  creator: {
    tag: "The other half",
    title: "144,000 people watching the process",
    body: "Three Instagram accounts built with zero paid acquisition: tech careers and interview prep, unscripted live interviews, and a daily log of training and building. The same instinct as the product work — show the process, not the highlight reel.",
    stats: [
      { value: "136,000", label: "@theboringfounder" },
      { value: "6,700",   label: "@liveinterviewswithsachin" },
      { value: "1,100",   label: "@theboringplanks" }
    ],
    links: [
      { label: "Rate card for brands", href: "for-brands.html" },
      { label: "Watch on Instagram", href: "https://instagram.com/theboringfounder" }
    ]
  },

  // ---- Full page index -----------------------------------------------------
  // Powers sitemap.html. `unlisted: true` means the page is reachable by direct
  // link only: it is kept out of the nav, the footer and sitemap.xml, and the
  // page itself carries a noindex tag.
  pages: [
    {
      group: "Portfolio",
      items: [
        { href: "index.html",   title: "Home",    desc: "Landing page — positioning, case study, projects, résumés." },
        { href: "work.html",    title: "Work",    desc: "Rajniti case study, ten PM artifacts, shipped products." },
        { href: "about.html",   title: "About",   desc: "The long story, full experience timeline, skills, education." },
        { href: "resume.html",  title: "Résumés", desc: "AI Product Manager and AI Full-Stack Engineer, both print-ready." }
      ]
    },
    {
      group: "Rajniti — case study",
      items: [
        { href: "work/rajniti/market-opportunity.html",  title: "Chapter 2 — Market Opportunity", desc: "TAM/SAM/SOM, competition, dual revenue, pricing, GTM timing." },
        { href: "work/rajniti/roadmap.html",             title: "Chapter 3 — Roadmap",            desc: "Now/Next/Later tied to key results, dependencies and trade-offs." },
        { href: "work/rajniti/trust-and-safety.html",    title: "Chapter 4 — Trust & Safety",     desc: "Risk register, hallucination protocol, bias inventory, attribution." },
        { href: "work/rajniti/market-sizing.html",       title: "Market Sizing Model",            desc: "Bottom-up funnel, dual revenue, three scenarios, assumption audit." },
        { href: "work/rajniti/rice-prioritization.html", title: "RICE + Kano Scoring",            desc: "Five features scored, classified, and one strategic override." },
        { href: "work/rajniti/okrs-dashboard.html",      title: "Q1 OKRs & Metrics",              desc: "One objective, four key results, north-star definition." },
        { href: "work/rajniti/stakeholder-map.html",     title: "Stakeholder Map & RACI",         desc: "Power/interest mapping and three high-stakes decisions." },
        { href: "work/rajniti/interview-script.html",    title: "JTBD Interview Script",          desc: "Ten-question discovery script in three zones." },
        { href: "work/rajniti/experiment-brief.html",    title: "The Blur Test",                  desc: "A/B design with pre-committed decisions." },
        { href: "work/rajniti/analytics-dashboard.html", title: "Analytics Dashboard",            desc: "Five charts tied to key results, plus a drop-diagnosis sequence." }
      ]
    },
    {
      group: "Creator",
      items: [
        { href: "for-brands.html", title: "For brands", desc: "Audience, accounts, rates, add-ons, usage rights and terms." },
        { href: "for-brand-managers.html", title: "For brand managers", desc: "Collab kit for community scouts — payout, rules and lead format.", unlisted: true }
      ]
    },
    {
      group: "Personal archive",
      items: [
        { href: "interview_report.html", title: "Interview record, 2020–2026", desc: "A private log of every interview taken. Direct link only.", unlisted: true }
      ]
    },
    {
      group: "Files",
      items: [
        { href: "assets/resume/Sachin_Shukla_AI_PM_Resume.pdf", title: "AI PM résumé (PDF)", desc: "Downloadable copy of the product résumé." }
      ]
    }
  ],

  footerNote: "Built as a static site. No framework, no build step, no tracking."
};
