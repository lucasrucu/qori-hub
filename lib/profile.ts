// Single source of truth for all personal/landing content. Derived from Lucas's
// resume (Lucas_Ruiz_Resume_2026_v2.docx) + memory. Edit copy here, components
// only render it. Keeps the hub and the /card page in sync.

import type { ArtKey } from "@/components/CardArt";

// The project scale anchors, written ONE way and reused everywhere. Real,
// non-identifying, and safe to cite. Do not restate them in a different form
// on any page: the site said "10,000+ equipment records" in three places and
// "tens of thousands" in a fourth for the same platform, which is how a
// portfolio starts contradicting itself.
export const SCALE = {
  subsystems: "1,300+",
  tags: "14,000",
  checksheets: "13,000+",
} as const;

export const PROFILE = {
  name: "Lucas Ruiz",
  firstName: "Lucas",
  lastName: "Ruiz",
  title: "Data & Automation Engineer",
  // Not a city on purpose. He works mining project rotations and is open to
  // roles anywhere; the employer's head office sits on the experience entry.
  // A rotation is not a base, and a city here would read as one.
  location: "Mining project rotations · open to roles anywhere",
  languages: "English & Spanish",
  // Hero headline, the niche stated plainly. What I do before what my title is.
  tagline: "I build AI agents and automations that kill manual work.",
  // Hero subhead, one line, the rare intersection that makes the niche mine.
  // Written to be extractable verbatim by search snippets and AI answer engines:
  // states name, role, and the published-paper credential in plain sentences.
  intro:
    "Lucas Ruiz is a data and automation engineer who builds software that removes manual work from data-heavy industrial projects. He works as a data specialist on large-scale industrial commissioning, and he co-authored a peer-reviewed paper on a YOLO-based PPE monitoring system, published in the Proceedings of the Computer Vision Conference (CVC) 2026. Field engineer who builds, builder who has worked the field.",
  // About, who I am. Lead with the bridge: the thing nobody else can say.
  about: [
    `I build AI agents and automations that remove manual work from data-heavy industrial projects. Right now I work as a data specialist on large-scale industrial commissioning: ${SCALE.subsystems} subsystems, ${SCALE.tags} equipment tags, ${SCALE.checksheets} checksheets. The job is full of repetitive, high-stakes data work: pulling records, validating them, formatting reports, signing off readiness packages. So I automate it.`,
    "What makes the combination uncommon is the bridge. I have spent years on real industrial and commissioning sites across the U.S., Canada, Indonesia, and Peru, reading P&IDs, QC-ing equipment packages, owning the data nobody else wants to touch. I also build software. Most people in industrial data ops do not build, and most people who build have never seen a field. I do both, which means the automations I write actually fit how the work happens.",
  ],
  // "Currently" chips under the about copy.
  now: [
    "Large-scale industrial commissioning",
    `${SCALE.tags} equipment tags`,
    "Triathlon Worlds 2026",
  ],
} as const;

// Social / contact links. Used in nav, footer, and the /card page.
export const SOCIALS = {
  linkedin: "https://www.linkedin.com/in/lucasrucu/",
  github: "https://github.com/lucasrucu",
  email: "lucasruiz1336@gmail.com",
  instagram: "https://www.instagram.com/lucasrucu/",
  orcid: "https://orcid.org/0009-0004-3747-3968",
} as const;

export type ExperienceProject = {
  name: string;
  dates: string;
  blurb: string;
};

export type Experience = {
  company: string;
  role: string;
  dates: string;
  location: string;
  blurb: string;
  // The projects inside the position, newest start first.
  projects: ExperienceProject[];
};

// One continuous position, with the projects inside it. It is one job and not
// seven: the projects ran under one employer, several of them concurrently,
// and the dates on each are real. Client and project names stay anonymized.
export const EXPERIENCE: Experience[] = [
  {
    company: "Commissioning contractor",
    role: "CMS / PIMS Data Specialist (Project Engineer)",
    dates: "Dec 2022 - Present",
    // The employer's head office. Where each project happened is on the project.
    location: "Salt Lake City, UT (HQ)",
    blurb:
      "One continuous position: joined as an Engineering Intern, then Project Engineer across six internal and site projects, and since October 2025 the CMS / PIMS Data Specialist on a large-scale mining expansion in Indonesia.",
    projects: [
      {
        name: "Mining expansion, Indonesia",
        dates: "Oct 2025 - Present",
        blurb:
          "Engineering data management on the client's PIMS platform: validated and uploaded 10,000+ equipment and instrument records, built Python and Playwright automations that replaced manual data collection, and served as the team's primary PIMS point of contact.",
      },
      {
        name: "SharePoint Document Management System (R&D, remote)",
        dates: "Jul 2025 - Sep 2025",
        blurb:
          "Evaluated Egnyte, OneDrive and SharePoint, then implemented SharePoint as the company's document control platform: controlled libraries, metadata schemas, multi-stage approvals, and Power Automate lifecycle flows wired into Teams, plus Word and Excel transmittal templates that pull live document metadata from SharePoint.",
      },
      {
        name: "Resource Loading Tool",
        dates: "Feb 2025 - Jun 2025",
        blurb:
          "A two-file Excel system that tracks resource allocation across projects and provisions availability data for each new team with no manual setup. Power Query M keeps the master sheet current, and dashboards let team leads watch workload and capacity across 50+ personnel.",
      },
      {
        name: "Salesforce Configuration (PM+ App)",
        dates: "Dec 2024 - Apr 2025",
        blurb:
          "Configured profiles, views and permissions for the internal project coordination app built on Salesforce PM+, then wrote the onboarding documentation and task-tracking automations that got the team onto it.",
      },
      {
        name: "Cloud Application Development",
        dates: "Jan 2024 - Dec 2024",
        blurb:
          "Led end-to-end development of a cloud-based internal app with Power Apps, Power Automate and Azure SQL, selected after evaluating low-code platforms, schema designed in Vertabelo.",
      },
      {
        name: "Gold mining project, Canada",
        dates: "Jul 2023 - Jul 2024",
        blurb:
          "Produced and QC'd equipment work packages for mining instrumentation, verifying accuracy against P&IDs and scope-of-work documents, and built Excel and Word templates to standardize the workflow.",
      },
      {
        name: "Copper mining project, Utah",
        dates: "Dec 2022 - Dec 2023",
        blurb:
          "Assembled and QC'd checklist packages for mining equipment commissioning, coordinating with the team to meet client delivery deadlines.",
      },
    ],
  },
];

// Shown under the timeline. The overlapping project dates are real and this
// is why.
export const EXPERIENCE_NOTE =
  "Project dates overlap because several ran concurrently inside the one position.";

export const EDUCATION = {
  degree: "B.S. Software Engineering",
  school: "Universidad Peruana de Ciencias Aplicadas (UPC)",
  location: "Lima, Peru",
  dates: "2021 - 2025",
};

export type SkillGroup = { label: string; items: string[] };

export const SKILLS: SkillGroup[] = [
  {
    label: "AI & Agents",
    items: ["Claude", "Claude Agent SDK", "LLMs", "AI Agents", "Prompt Engineering", "RAG"],
  },
  {
    label: "Automation & Scripting",
    items: ["Python", "Playwright", "Web Scraping", "Power Query M", "Power Automate", "Power Apps", "Power FX"],
  },
  {
    label: "Data & Platforms",
    items: ["PIMS (omega 365)", "Azure SQL", "PostgreSQL", "Supabase", "ETL", "Data Validation"],
  },
  {
    label: "Web & Tooling",
    items: ["Next.js", "TypeScript", "Plaid", "Git / GitHub", "Vercel", "SharePoint"],
  },
];

export type Interest = { icon: "trophy" | "bike" | "mountain" | "activity"; title: string; detail: string };

export const INTERESTS: Interest[] = [
  {
    icon: "trophy",
    title: "Triathlon",
    detail: "Qualified for the Age Group World Triathlon Championship 2026 in Spain. Regional race wins in Peru.",
  },
  {
    icon: "activity",
    title: "Endurance",
    detail: "Half Ironman and a full marathon, structured preparation and resilience under pressure.",
  },
  {
    icon: "bike",
    title: "Enduro MTB",
    detail: "Competitive enduro mountain biking when the terrain allows.",
  },
  {
    icon: "mountain",
    title: "Snowboarding",
    detail: "Off-season on the mountain. Still chasing the same drive to improve.",
  },
];

export type Publication = {
  slug: string;
  title: string;
  type: string;
  venue: string;
  pages: string;
  date: string;
  authors: string[];
  description: string;
  doi: string;
  doiUrl: string;
  // Local path under public/. Only set when a real cover was sourced from the
  // publisher; never a fabricated image.
  coverImage?: string;
};

// Published academic research. One entry so far. Source: the paper's own
// Springer chapter page (title/venue/pages/date/authors/DOI all verified
// against Springer's citation metadata, not guessed).
export const RESEARCH: Publication[] = [
  {
    slug: "ppe-yolo",
    title:
      "Mobile Application Utilizing YOLO for Analysis and Monitoring of PPE Usage in a Manufacturing Plant in Lima",
    type: "Conference paper",
    venue: "Proceedings of the Computer Vision Conference (CVC) 2026, Volume 3",
    pages: "38-53",
    date: "03 June 2026",
    authors: ["Lucas Ruiz", "Oliver Tuesta", "Abel Rosales"],
    description:
      "A mobile application using computer vision (YOLO) to analyze and monitor whether workers on a manufacturing floor are wearing their required personal protective equipment (PPE). The result of roughly a year of R&D and real-plant testing in Lima, Peru.",
    doi: "10.1007/978-3-032-26217-2_4",
    doiUrl: "https://link.springer.com/chapter/10.1007/978-3-032-26217-2_4",
    coverImage: "/research/cvc-2026-vol3-cover.jpg",
  },
];

export type Project = {
  name: string;
  // One-line "what it is" for the card.
  tagline: string;
  // The niche-proof angle: the impressive technical truth, plainly stated.
  description: string;
  tech: string[];
  // Live demo URL (public, clickable). Omit for internal/private work.
  live?: string;
  // Public repo. Omit for private code.
  repo?: string;
  // Internal showcase page on this site (e.g. Otto). Omit if not applicable.
  page?: string;
  // Short subdomain or context label shown under the title.
  context?: string;
  // True for the SINGLE flagship (Industrial commissioning automation only):
  // chip + border-beam treatment. Every other featured card just sits in the
  // featured grid with no badge. One word, one meaning, one card.
  flagship?: boolean;
  // Bespoke coded card artwork (components/CardArt.tsx). One per card, no screenshots.
  art?: ArtKey;
  // Optional per-card accent. "experience" color-codes to the teal Patina
  // accent (commissioning-automation and its children); "quorum" to the
  // electric agent blue. Default is Sovereign amber.
  accent?: "experience" | "quorum";
};

// The featured set, in ranked order, on the landing page AND at the top of
// /projects. Only the first, Industrial commissioning automation, is the
// flagship (badge + beam).
//
// Amaru sits second: v2 of the personal assistant and the one in daily use.
// Otto, v1, moved down to MORE_PROJECTS with its case study, the same way
// Quorum did when Otto replaced it.
export const FEATURED_PROJECTS: Project[] = [
  {
    name: "Industrial commissioning automation",
    context: "Large industrial project · field case study",
    tagline: "A body of automations that turned the commissioning paperwork into software.",
    description: `On a large minerals-processing expansion, my day was repetitive, high-stakes data work across ${SCALE.subsystems} subsystems and ${SCALE.tags} equipment tags. I built a toolkit of automations plus an AI assistant that runs them. The biggest single win took the energization documents from typed by hand to generated from a template.`,
    tech: ["Python", "Playwright", "REST APIs", "Power BI", "AI Agents"],
    page: "/commissioning-automation",
    flagship: true,
    art: "commissioning",
    accent: "experience",
  },
  {
    name: "Amaru",
    context: "Personal AI assistant · v2, in daily use",
    tagline: "A voice-first assistant with specialist agents behind a router.",
    description:
      "A Next.js progressive web app, a Node worker running a queue of specialist agents behind a router, and a Postgres schema underneath, running unattended. Training, money, career and notes each get their own agent, and the arithmetic they need is done in SQL and handed to them, so an agent chooses and never has to remember. Otto was v1. This is what I use now.",
    tech: ["TypeScript", "Next.js", "Node", "PostgreSQL", "Claude API", "Docker", "systemd"],
    page: "/amaru",
    art: "amaru",
  },
  {
    name: "Financial Dashboard",
    context: "finance.qori.land",
    tagline: "A production data pipeline with an AI layer on real money.",
    description:
      "Plaid pulls real transactions from multiple banks, Claude analyzes spending, and Supabase stores everything behind row-level security. A real, secure, multi-user data product with AI on top, not a toy demo.",
    tech: ["Next.js", "Plaid", "Claude", "Supabase", "TypeScript"],
    live: "https://finance.qori.land",
    repo: "https://github.com/lucasrucu/Financial-Dashboard",
    art: "flow",
  },
];

// The rest of the shelf. Listed on /projects under the featured set.
//
// This list is a portfolio, not an inventory. A card that links nowhere costs
// more than it adds, which is why rapid-cut and VideoOS came off it: neither
// had a live link, a repo, or a case study, so there was nothing to click.
//
// One card breaks that rule today, Kallpa: the repository is private and there
// is no case study yet, so nothing on the card is clickable. It stays because
// it is the only build on the shelf that talks to hardware. Amaru used to sit
// here too; a case study at /amaru was the fix, and the same fix is available
// to Kallpa whenever the build is worth a page.
export const MORE_PROJECTS: Project[] = [
  {
    name: "Otto",
    context: "Personal AI assistant · v1",
    tagline: "The v1 assistant: voice-first, and it built this site.",
    description:
      "A local AI assistant built on the Claude Agent SDK with a voice-driven HUD and multi-agent orchestration. Speak a command, watch an automation run: data pulls, report generation, readiness sign-offs. It built the rest of this site, and Amaru, its successor, is what I use now.",
    tech: ["Python", "Claude Agent SDK", "Multi-agent", "Voice (STT/TTS)", "FastAPI"],
    page: "/otto",
    art: "orb",
  },
  {
    name: "Quorum",
    context: "Personal build · frozen",
    tagline: "A company of AI agents, run by one person.",
    description:
      "An OS where AI agents worked as employees. An orchestrator dispatched the work, agents built in parallel inside isolated git worktrees, and a live pipeline board showed the one thing that actually needed me. It shipped real software. Frozen now, because one assistant turned out to beat a company of them.",
    tech: ["TypeScript", "Claude Agent SDK", "Next.js", "Telegram", "Git"],
    page: "/quorum",
    art: "quorum",
    accent: "quorum",
  },
  {
    name: "Career Agent",
    context: "career.qori.land",
    tagline: "An AI agent that runs a job search end to end.",
    description:
      "Reads your resume into a structured profile, pulls real job listings through the Adzuna API, scores how well you match each role, and drafts a tailored, ATS-friendly resume from your real experience. Still a work in progress.",
    tech: ["Next.js", "Claude", "Adzuna", "Supabase", "TypeScript"],
    live: "https://career.qori.land",
    repo: "https://github.com/lucasrucu/career-agent",
    art: "radar",
  },
  {
    name: "NoE Toolkit",
    context: "Industrial commissioning · sub-case",
    tagline: "The commissioning paperwork, done by three desktop tools.",
    description:
      "A Windows toolkit that generates energization documents, batch-repaints drawings, and finds any subsystem across a huge drawing tree. The single biggest time-saver in the commissioning toolkit. Co-developed with a colleague.",
    tech: ["Python", "CustomTkinter", "Visio COM", "PyInstaller"],
    page: "/noe",
    art: "noe",
    accent: "experience",
  },
  {
    name: "PIMS & RFCC Automation",
    context: "Industrial commissioning · sub-case",
    tagline: "Manual report and readiness-package work, replaced with code.",
    description:
      "Python, Playwright, and the project data-platform API doing the record collection, validation, and readiness-certificate sign-off on a large-scale industrial commissioning project.",
    tech: ["Python", "Playwright", "REST APIs"],
    page: "/pims-rfcc",
    art: "pipeline",
    accent: "experience",
  },
  {
    name: "rapid-pdf",
    context: "rapidpdf.qori.land",
    tagline: "A fast Windows desktop app for real PDF work.",
    description:
      "Reorder, delete, and combine pages, then mark them up with text, rectangles, and lines, all in one keyboard-driven canvas. A shipped, installable Windows product, not a demo.",
    tech: ["Python", "PySide6", "PyMuPDF", "Desktop"],
    live: "https://rapidpdf.qori.land",
    repo: "https://github.com/lucasrucu/rapid-pdf",
    art: "pages",
  },
  {
    name: "Snip",
    context: "links.qori.land",
    tagline: "A personal URL shortener with click tracking.",
    description:
      "Paste a long link, get a short one on my own domain, and track how often it is used. A small, complete product end to end.",
    tech: ["Next.js", "Supabase", "TypeScript"],
    live: "https://links.qori.land",
    repo: "https://github.com/lucasrucu/snip",
    art: "link",
  },
  {
    name: "Kallpa",
    context: "Personal build · indoor trainer",
    tagline: "An indoor trainer controller that holds an ERG target over Bluetooth.",
    description:
      "Drives a Wahoo KICKR in ERG mode over Bluetooth Low Energy using the FTMS protocol: set a target and the trainer holds it. The one build on this shelf that talks to hardware.",
    tech: ["Bluetooth Low Energy", "FTMS", "ERG mode"],
    art: "kallpa",
  },
];

export type InBuildItem = {
  name: string;
  // What it is, one line.
  blurb: string;
  // REQUIRED. A real state or a real date, never "coming soon". If you cannot
  // write one truthfully, the item does not go in this list.
  state: string;
};

// Upcoming / in build.
//
// DELIBERATELY EMPTY. The component exists and renders nothing while the list
// is empty, which is the point: a stale "coming soon" shelf reads worse than
// no shelf at all. An entry only earns a place here with a real `state`, for
// example "landing v1 in build, Sept 2026" or "beta with two testers".
// Candidates Lucas should confirm before they go public are listed in the
// handover notes, not here, because an unconfirmed one is aspiration.
export const IN_BUILD: InBuildItem[] = [];

// Otto showcase content. Otto's code is private; this is the public capabilities
// page for v1 of the personal assistant. Lives at /otto.
//
// SECURITY, read before editing: Otto is wired into Lucas's real accounts and
// this page is a live attack surface. Publish CAPABILITY only. Never publish
// how he reaches it, where it runs, its endpoints, transports, ports, tokens,
// hostnames, or any deployment detail. If you are unsure whether a line is a
// connection detail, leave it out.
export const OTTO = {
  name: "Otto",
  // Deliberately parallel with Quorum's "Personal build · frozen", so the
  // ranking between the two reads at a glance. "Flagship" is reserved for the
  // single badge on the commissioning card: one word, one meaning.
  eyebrow: "Personal build · v1",
  // Hero line for the showcase page.
  tagline: "A voice-first AI assistant that runs my work.",
  intro:
    "Otto is the first version of my personal AI operating layer. It is built on the Claude Agent SDK, talks back, and executes my automations on command. A personal build, not a public product, and the v1 that Amaru replaced.",
  // Honest current state. Otto is v1: it built this site, still runs, and has
  // been succeeded by Amaru, which is the assistant in daily use.
  status: "v1. It built this site, and Amaru, its successor, is the assistant I use now.",
  // Plain framing of what it is.
  what: [
    "I do a lot of repetitive, high-stakes data work on industrial projects: pulling records, generating reports, signing off readiness packages. Otto is how I stopped driving each of those by hand.",
    "I speak a command, Otto figures out which automation to run, runs it, and reports back. Same brain across every task: one set of skills, one shared memory, one assistant. It has grown well past the automations it started with, and it now writes and ships software of its own.",
  ],
  capabilities: [
    {
      icon: "mic",
      title: "Voice-first interface",
      detail:
        "A glowing orb is the centerpiece. Push to talk, Otto listens, thinks, and speaks back a short natural summary. Speech-to-text and text-to-speech both run on the machine, swappable behind a provider seam.",
    },
    {
      icon: "workflow",
      title: "Multi-agent orchestration",
      detail:
        "Bigger jobs get fanned out to a lead agent and parallel workers, then merged. Otto picks solo, parallel, or full workflow based on the task instead of doing everything in one thread.",
    },
    {
      icon: "zap",
      title: "Runs real automations",
      detail:
        "Data pulls, report generation, readiness sign-offs, task-board triage. Registry-driven cards mean adding a new automation is a config edit, not a UI rebuild.",
    },
    {
      icon: "code",
      title: "Writes and ships software",
      detail:
        "Otto builds. It branches, writes the code, runs the build, reviews its own diff, and merges when it passes. This site is one of the things it shipped.",
    },
    {
      icon: "schedule",
      title: "Work that runs without me",
      detail:
        "Standing jobs run on their own schedule and report what they did: a morning brief, a weekly plan, a recurring report. Nothing waits for me to remember it.",
    },
    {
      icon: "brain",
      title: "Persistent memory",
      detail:
        "Otto remembers projects, decisions, and preferences across sessions through a version-controlled memory layer, so context carries over instead of starting cold each time.",
    },
  ] as const,
  // Concrete jobs it actually does. Capability, never the plumbing.
  does: [
    "Generate the readiness and progress reports for a live industrial project.",
    "Drive browser automations against systems that never shipped an API.",
    "Audit a task board, fix the drift, and say what changed.",
    "Plan a training week from real training data and explain the reasoning.",
    "Draft, review and merge code across several repositories at once.",
    "Keep a written record of decisions so nothing has to be explained twice.",
  ],
  architecture: [
    "Python on the Claude Agent SDK, with a browser HUD for the voice loop.",
    "Capabilities are skills: a folder of instructions plus its own code, so a new one is a new directory rather than a rebuild.",
    "Sub-agents each get an isolated git worktree, so parallel jobs never collide.",
    "Rides a Claude subscription login. No metered API, no per-call cost.",
    "Registry-driven automation cards with live progress, each writing its own status.",
    "A version-controlled memory vault carries context between sessions and machines.",
    "Nothing merges until the conventions check and the build are both clean.",
  ],
  // Demo GIF spots. No assets yet. Placeholders flagged for Lucas to fill.
  demos: [
    "Demo: the orb listening, then speaking back",
    "Demo: a voice command launching an automation",
  ],
} as const;

// Amaru showcase content. v2 of the personal assistant and the one in daily
// use. Lives at /amaru.
//
// SECURITY, read before editing. Amaru is wired into Lucas's real life and
// this page is a live attack surface. It is also the page most likely to leak
// something personal, because the system's whole value is the record it keeps.
//
// Publish the SHAPE and the JUDGEMENT, never the CONTENTS. Allowed: what kind
// of system it is, the principles that produced it, capabilities in the
// abstract, that it succeeds Otto. Never: anything he said to it, anything
// about his training, money, health or employer, table or column names, row
// counts, schema, hostnames, environment variable names, repository paths,
// endpoints, or running costs. If you are unsure whether a line is personal,
// leave it out.
export const AMARU = {
  name: "Amaru",
  // Deliberately parallel with Otto's "Personal build · v1" so the lineage
  // reads at a glance.
  eyebrow: "Personal build · v2",
  tagline: "A voice-first assistant with specialist agents behind a router.",
  intro:
    "Amaru is the second version of my personal AI operating layer: an installed app I talk to, a queue of work on a small server, and a written record underneath that both of us read and write. Otto was v1 and proved the idea. Amaru is the rebuild that fixed what v1 got wrong.",
  status: "v2. In daily use, running unattended.",
  what: [
    "Otto worked, and I used it every day, which is exactly how I found its limits. It reasoned from a blank page every time. Ask it the same kind of question twice in one week and it could answer both well and still contradict itself, because nothing it produced knew what it had produced before. That is not a prompt you can rewrite your way out of.",
    "So Amaru splits the work in two. Anything that can be counted is counted first, in the database, and handed to the model as a number. Anything that needs a judgement call is left to the model. The agent chooses; it never has to remember, so it cannot forget. Everything else on this page follows from that one split.",
  ],
  capabilities: [
    {
      icon: "mic",
      title: "Voice in, anywhere",
      detail:
        "An installed app, voice first, typing as the fallback. What I say lands exactly as I said it and is never edited or deleted. Everything derived from it is written somewhere else.",
    },
    {
      icon: "workflow",
      title: "A router in front of specialists",
      detail:
        "One way in, several agents behind it. Each specialist knows one domain and carries only the instructions for that domain, and the router decides where a piece of work belongs. No agent carries the whole system in its head.",
    },
    {
      icon: "code",
      title: "It writes and ships its own software",
      detail:
        "It branches, writes the code, runs the checks, and opens the change. Anything that leaves the machine waits behind an approvals gate that I hold, so it can build all night and still not act on my behalf without me.",
    },
    {
      icon: "browser",
      title: "A browser it looks through",
      detail:
        "Plenty of systems never shipped an API. The agent drives a real browser against them, reads the rendered page the way a person would, and checks its own work by looking at what it built.",
    },
    {
      icon: "review",
      title: "The reviewer is not the author",
      detail:
        "A separate profile checks the work of the one that wrote it, and has to reproduce the defect before the fix and after it. A clean typecheck is not evidence that anything works.",
    },
    {
      icon: "deploy",
      title: "It deploys itself, and can undo it",
      detail:
        "A merge triggers its own rebuild and restart. The rollback runs on the host rather than inside the thing it just replaced, which is the difference between a bad deploy that recovers and one that takes the recovery down with it.",
    },
  ] as const,
  // The four principles are the point of the page. Each one is a real defect
  // v1 hit, stated as the rule that came out of it.
  principles: [
    {
      rule: "Deterministic things go in SQL. Judgement goes in the model.",
      detail:
        "Coverage, recency and volume are arithmetic, not opinions. They are computed before anything is asked of a model and handed over as numbers. v1 generated each answer statelessly and the seams showed in the output.",
    },
    {
      rule: "Raw input and derived records are separate.",
      detail:
        "What I said is kept untouched. Everything a parser makes of it lives elsewhere. So improving a parser means the old input can be read again, instead of a bad reading being permanent, which is what happened when v1 stored the conclusion and threw away the input.",
    },
    {
      rule: "Facts and decisions are versioned, never overwritten.",
      detail:
        "Changing my mind writes a new record that supersedes the old one rather than replacing it. Why we changed our mind is usually the part worth keeping, and it is the first thing an overwrite destroys.",
    },
    {
      rule: "Silence is not a decision.",
      detail:
        "An empty day and a day considered and deliberately left empty are different records. If they look identical, nothing downstream can tell a gap from a choice, and it will guess wrong in both directions.",
    },
  ] as const,
  // Concrete jobs, in the abstract. Capability, never contents.
  does: [
    "Take something spoken in passing and file it against the right work without me choosing where.",
    "Compute the numbers a decision depends on before any model is asked to make it.",
    "Open, review and merge changes across several repositories, behind an approval I hold.",
    "Drive a browser against systems that never shipped an API, and read the result.",
    "Run standing jobs overnight and report what changed while I slept.",
    "Deploy itself, and put itself back if the new version does not come up.",
    "Hand the next session the written record, so a settled question is never asked twice.",
  ],
  architecture: [
    "An installed progressive web app is the only surface. Voice first, typing as the fallback, nothing heavy running in the app.",
    "A queue on a small server, and a worker that pulls jobs off it. Work survives a closed tab and a dead connection.",
    "A router in front of specialist agents, one per domain, each carrying only its own instructions.",
    "A Postgres record underneath. Views do the arithmetic and hand agents the numbers, so no agent has to reconstruct history to act.",
    "Raw input in one place, derived rows in another. Neither can overwrite the other.",
    "Every session opens by reading the record and closes by writing to it. Nothing important lives only in a conversation.",
    "A review profile that reproduces a defect before and after the fix, and a self-deploy whose rollback runs on the host.",
  ],
  // Why the page shows the shape and not the contents. Says the quiet part
  // out loud so a reader does not assume there is nothing to show.
  privacy:
    "This one runs my actual life, so the contents stay private and always will. The architecture is what makes it work, and the architecture is the part worth showing.",
} as const;

// PIMS & RFCC case-study content. Real field-engineering automation Lucas runs
// daily on a large-scale industrial commissioning project. The code is private;
// this is the public case-study page. A CHILD of the commissioning-automation
// parent, so its eyebrow says sub-case, not flagship. Lives at /pims-rfcc.
export const PIMS_RFCC = {
  name: "PIMS & RFCC Automation",
  eyebrow: "Commissioning automation · sub-case",
  context: "Large industrial project · case study",
  // Hero line for the case-study page.
  tagline: "Manual report and readiness-package work, replaced with code.",
  intro:
    "On a large-scale industrial commissioning project, building reports and signing off readiness packages used to be hours of pulling records, formatting, and chasing documents by hand. I rebuilt that work as automation: Python, Playwright, and the platform API doing the collection, validation, and sign-off.",
  // Plain framing of what it is and why it exists.
  what: [
    `PIMS is the engineering data platform of record on the project: ${SCALE.subsystems} subsystems, ${SCALE.tags} equipment tags, and ${SCALE.checksheets} checksheets. The day-to-day work is repetitive and high-stakes. Pull the right records, validate them, format a report, assemble a readiness package, sign it off. Get one field wrong and a correction cycle costs days.`,
    "I write the software that takes that work off my hands. Two automations carry most of it: a CLI that generates subsystem-readiness reports straight from the PIMS API, and an end-to-end RFCC sign-off flow that imports the 3WLA list, pulls HOP documents from the document register, uploads the metadata and files back into PIMS, and signs the readiness certificates.",
  ],
  // The two automation pillars, each with concrete detail.
  pillars: [
    {
      icon: "fileChart",
      title: "Subsystem-readiness reports",
      detail:
        "A Python CLI fetches checklist data from the PIMS API, aggregates it by subsystem, and outputs a formatted PDF and Excel in one run. It flags which subsystems are 100% ready and which are almost there, grouping checksheets by work package. Checksheets with no package assignment are excluded by design so completion percentages stay honest.",
    },
    {
      icon: "fileSignature",
      title: "RFCC sign-off flow",
      detail:
        "One command runs the whole readiness-certificate cycle. It imports the 3WLA CSV, downloads the HOP documents from the document register with Playwright, uploads the metadata and files into PIMS, and signs the RFCCs. What used to be a manual, multi-system slog is now a single automated pass.",
    },
  ] as const,
  // The pipeline stages, in order. Mirrors the bespoke pipeline art.
  pipeline: [
    {
      step: "Collect",
      detail: "Pull checklist and equipment records from the PIMS API; import the 3WLA list.",
    },
    {
      step: "Validate",
      detail: "Aggregate by subsystem, filter unpackaged checksheets, check fields against the rules.",
    },
    {
      step: "Assemble",
      detail: "Generate the PDF and Excel report; download HOP documents from the register.",
    },
    {
      step: "Sign off",
      detail: "Upload metadata and files into PIMS and sign the readiness certificates.",
    },
  ],
  // How it is built, plainly.
  architecture: [
    "Python CLI core: one module fetches, one aggregates, two render the PDF and the Excel.",
    "Playwright drives the document register to export the register and download HOP files.",
    "Power Query M shapes the supporting data feeds that the reports lean on.",
    "Config-driven thresholds: the readiness cutoff and grouping rules live in one place, not in the code paths.",
    "Runs daily against live project data, not a sandbox.",
  ],
  // Outcome statements. Concrete, no invented numbers.
  outcomes: [
    "Report creation dropped from hours of manual pulling and formatting to a single command.",
    "Cleaner data and fewer correction cycles, because validation runs the same way every time.",
    "Faster turnaround on readiness packages, so sign-off is not the bottleneck.",
  ],
} as const;

// NoE Toolkit case-study content. A Windows desktop toolkit built to take the
// energization-document and drawing-markup busywork off commissioning engineers
// on a live industrial expansion. The code is private; this is the public
// case-study page. Lives at /noe.
//
// The product name is "NoE Toolkit" everywhere: page H1, homepage card, parent
// case study, /projects. It used to be "NoE Maker Toolkit" on this page alone.
export const NOE = {
  name: "NoE Toolkit",
  version: "v1.0.0",
  eyebrow: "Commissioning automation · sub-case",
  context: "Large industrial project · case study",
  tagline: "The commissioning paperwork, done by three desktop tools.",
  // Note the antecedent. The page speaks as "we" because it IS joint work, so
  // the collaboration is introduced in the first sentence rather than showing
  // up unexplained in the copy and again in six grey words at the bottom.
  intro:
    "On a large-scale industrial commissioning project, engineers lose hours to energization documents and drawing markup, all by hand. A colleague and I built a Windows toolkit that does the busywork: it generates the documents, batch-repaints the drawings, and finds any subsystem across a huge drawing tree.",
  // Plain framing of what it is and why it exists.
  what: [
    "Commissioning a plant means proving each subsystem is ready to energize, and that proof is paperwork: a Notice of Energization per subsystem, marked-up drawings showing what is live, and the constant hunt for which drawing a tag even lives on. Done by hand across hundreds of subsystems, it is slow and error-prone, and a wrong drawing or a missed tag costs real time on a live project.",
    "The NoE Toolkit takes that work off the engineer's hands. A single launcher opens three focused tools, each running as its own crash-isolated process so one tool falling over never takes the others down. It is packaged as one NoE.exe with PyInstaller, so an engineer installs nothing and just runs it. The UI is bilingual, so it fits a Spanish-speaking field team as well as an English-speaking one.",
  ],
  // The three tools, each problem -> solution. Mirrors the launcher.
  tools: [
    {
      icon: "fileText",
      title: "NoE Generator",
      shot: "/noe/generator.png",
      detail:
        "Notices of Energization have to exist for every subsystem, and writing them by hand is slow and repetitive. Give the Generator a COMM number, the subsystems, and a signer, and it produces the finished .docx from templates. This is the toolkit's biggest time-saver, and it is my collaborator's work.",
    },
    {
      icon: "paintbrush",
      title: "Drawing Plan Painter",
      shot: "/noe/painter.png",
      detail:
        "Engineers mark up Visio drawings per subsystem and export PDFs, tediously and one shape at a time. The Painter drives Visio over COM to batch-repaint the subsystem shapes and export per-page PDFs in one pass.",
    },
    {
      icon: "search",
      title: "Drawing Finder",
      shot: "/noe/finder.png",
      detail:
        "Finding which drawing and page a subsystem or tag lives on, across a deep folder tree, is painful. The Finder searches Visio and PDF drawings by subsystem or tag, scanning subfolders automatically, and reveals each match in Explorer.",
    },
  ] as const,
  // How it is built, plainly.
  architecture: [
    "One launcher, three tools, each spawned as its own process so a crash stays isolated.",
    "Python + CustomTkinter UI on a Catppuccin theme, dark and light.",
    "python-docx renders the energization documents from templates.",
    "pywin32 drives Visio over COM to repaint shapes; PyMuPDF and OpenCV handle the PDF and image work.",
    "Packaged as a single NoE.exe with PyInstaller, so there is nothing to install.",
  ],
  // Outcome statements. Concrete, no invented numbers.
  outcomes: [
    "Energization documents that were typed by hand now generate from a template in one step.",
    "Drawing markup that was shape-by-shape in Visio is now a single batch repaint-and-export.",
    "Finding where a subsystem or tag lives went from manual hunting to a searchable lookup.",
  ],
  // Where it stands now. Honest: shipped, used, then parked as a clean skeleton.
  status:
    "Shipped at v1.0.0 and used on the project, then parked as a clean, documented skeleton with a roadmap. It may be revived; the bones are kept ready.",
  // ------------------------------------------------------------------------
  // THE CREDIT. This is joint work and it is the biggest time-saver on the
  // site, so it gets byline weight, not a grey footnote.
  //
  // DO NOT ADD A NAME OR A LINK. There is a standing rule that this colleague
  // is never named publicly and only Lucas can lift it. He is asking and has
  // not confirmed.
  //
  // When he does confirm, this drops in with NO redesign: set `name` (and
  // optionally `url`). Every place the credit renders reads `name` first and
  // falls back to `anon`, and the name becomes a link when `url` is set.
  // ------------------------------------------------------------------------
  credit: {
    // The collaborator's name. null until Lucas lifts the rule.
    name: null as string | null,
    // Their profile or site. null is fine even once `name` is set.
    url: null as string | null,
    // How to refer to them while unnamed.
    anon: "a colleague",
    // The role line, rendered next to the byline.
    role: "Co-developer",
    // The split, stated plainly, in the same place the paper states its authors.
    detail:
      "This one is not mine alone. A colleague built the original NoE Generator, the tool that turns a subsystem list into a finished energization document. I built the toolkit around it: the Drawing Plan Painter, the Drawing Finder, the shared launcher, the packaging, and the bilingual UI. The toolkit's biggest time-saver is their generator.",
  },
  // The do-if-revived vision (docs/ROADMAP.md).
  roadmap: [
    "One shared window hosting all three tools instead of three separate processes.",
    "Unified history across the tools, so recent COMM numbers and subsystems carry over.",
    "Live cross-tool subsystem sync, so picking a subsystem in one tool sets it in the others.",
  ],
} as const;

// One automation card in the supporting toolkit. Plain: what it does, nothing
// more (no tech list, no time figure). The heavy hitters are NOT in here any
// more, they are `children` below, where each carries its own numbers and its
// own credit line.
type Automation = {
  title: string;
  does: string;
};

// A named child project under the commissioning-automation parent. The reason
// these are separate entries and not rows in one flat "I built" list: one of
// them is joint work, and separate entries let each carry its own numbers AND
// its own credit line. That fixes attribution structurally rather than with a
// disclaimer at the bottom of a shared page.
export type ChildCase = {
  name: string;
  blurb: string;
  // Internal case-study page, when one exists.
  page?: string;
  // Its own figure, only when a record states it with its unit and its
  // denominator. Never an estimate: there is none on this site.
  stat?: string;
  // Its own credit line. Absent means solo work, which matches the page voice.
  credit?: string;
  // Not rendered. See the Commissioning Suite entry for the only use of this.
  draft?: boolean;
};

// ---------------------------------------------------------------------------
// Industrial commissioning automation. The PARENT CATEGORY, not a single
// project. One coherent story about the body of automations Lucas built on a
// large industrial project, with named children underneath it.
// Fully anonymized (no client/employer/project/person names). The only numbers
// on it are the project's scale anchors: no time-saved figure, estimated or
// otherwise. Lives at /commissioning-automation.
// ---------------------------------------------------------------------------
export const EXPERIENCE_STUDY = {
  name: "Industrial commissioning automation",
  context: "Large minerals-processing expansion · commissioning & handover",
  eyebrow: "Field experience · case study",
  // Hero line: the role, plainly.
  tagline:
    "I turned the commissioning paperwork of a large industrial project into software.",
  // Hero subhead: the role, plainly.
  intro:
    "As the data specialist on a large minerals-processing expansion in its commissioning and handover phase, my day was repetitive, high-stakes data work: pulling records, validating them, formatting reports, signing off readiness packages. So I built a toolkit of automations to do it.",
  // Scale anchors, from the one shared SCALE constant so no page can drift.
  scale: [
    { value: SCALE.subsystems, label: "subsystems on the project" },
    { value: SCALE.tags, label: "equipment tags" },
    { value: SCALE.checksheets, label: "checksheets" },
  ],
  // The named children. Each carries its own credit.
  children: ([
    {
      // ----------------------------------------------------------------
      // HOLD. Not rendered, on purpose.
      //
      // Lucas wants the commissioning work reframed as "the Commissioning
      // Suite" in his last week or two on the project (target September 2026),
      // not before. The word "suite" appears nowhere on the site today and
      // that stays true while `draft` is set.
      //
      // TO PUBLISH IN SEPTEMBER: Lucas approves the blurb, then the `draft`
      // line is deleted. Nothing else changes; the section renders it.
      // ----------------------------------------------------------------
      draft: true,
      name: "Commissioning Suite",
      blurb:
        "The commissioning toolkit as one suite: Python and Playwright automations that gather data from the web and internal applications, Excel and Power Query (M) tools that clean, restructure and summarize large datasets, and the standardized data-entry and review workflows that keep the project's PIMS records clean and consistent for every stakeholder.",
    },
    {
      name: "NoE Toolkit",
      blurb:
        "Three desktop tools behind one launcher: generate the energization documents, batch-repaint the drawings in Visio, and find which drawing a subsystem or tag lives on. The biggest single time-saver in the whole toolkit.",
      page: "/noe",
      credit: "Co-developed with a colleague",
    },
    {
      name: "PIMS & RFCC Automation",
      blurb:
        "Readiness reports generated straight from the data-platform API, and an unattended sign-off flow that imports the readiness list, pulls the handover documents, uploads files and metadata, and signs the certificates.",
      page: "/pims-rfcc",
    },
    {
      name: "Power BI progress dashboard",
      blurb:
        "One command pulls the data exports, drives the browser export of the document register, syncs the readiness sheet, and refreshes the Power BI model. Daily commissioning progress stopped depending on anyone being at a desk.",
    },
    {
      name: "WP Splitter",
      blurb:
        "Takes a scanned work pack, one PDF of hundreds of pages, OCRs every page, splits it into one PDF per checksheet, and attaches each file to the matching row in the commissioning database. A browser review step lets the engineer drag pages between checksheets and correct a misread code before anything uploads.",
    },
    {
      name: "BIC custody highlighter",
      blurb:
        "Resolves every equipment tag to its subsystem and its readiness state, then shades the boundary document by custody: grey for commissioning, red for construction. Ships as a one-click desktop app as well as a script.",
    },
    {
      name: "Project report generator",
      blurb:
        "Pulls the completed task-board cards for any date range and writes them up as formatted Word reports, so the daily write-up is generated rather than typed.",
    },
  ] as ChildCase[]),
  // The supporting cast. Flat cards, each just what it does. The named children
  // above are deliberately NOT repeated here.
  automations: ([
    {
      title: "Overnight unattended orchestration",
      does: "Runs the whole morning pipeline headless overnight and leaves the draft outputs ready for review.",
    },
    {
      title: "Energization (NoE) linker",
      does: "Bulk-links energized subsystems' tags to their commissioning numbers, hundreds of associations per run.",
    },
    {
      title: "Checksheet field sync",
      does: `Diffs an update file and syncs only the changed rows across ${SCALE.checksheets} checksheets.`,
    },
    {
      title: "Live readiness data pipeline",
      does: "Pulls subsystem readiness from a shared sheet so there is one source of truth for custody.",
    },
    {
      title: "Document-register (HOP) exporter",
      does: "A browser bot filters the construction handover register and exports it to Excel.",
    },
    {
      title: "Timesheet auto-fill",
      does: "Reads the generated reports and fills the timesheet web app, hours and descriptions per day.",
    },
    {
      title: "Task-board triage",
      does: "Audits the board for missing labels, wrong lists, and overdue cards, and fixes them on confirmation.",
    },
  ] as Automation[]),
  // The AI meta-layer that ties the discrete tools into one system.
  meta: {
    eyebrow: "The layer that ties it together",
    title: "An AI assistant that runs the whole toolkit",
    body: [
      "The automations above started as discrete scripts. The layer that turns them into one system is an AI assistant I built on top of them.",
      "It delegates work to background agents, runs the tools on command, and keeps a versioned memory that travels across machines. Instead of remembering which script to run and how, I talk to one assistant and it orchestrates the rest.",
    ],
    points: [
      "Delegates bigger jobs to background agents and merges the results.",
      "Runs the discrete automations as a single, callable toolkit.",
      "Keeps a version-controlled memory shared across machines.",
    ],
  },
} as const;

// Quorum showcase content. The code is private; this is the public page.
// High-level on purpose: the concept and the capabilities, not the internals.
//
// STATUS: FROZEN. It was built, it ran, and it shipped real software, but it
// did not pay off for one person and the work moved to Otto. Everything on
// this page is written in the past tense for that reason. Do not put it back
// into the present tense, and do not describe the daemon as running.
export const QUORUM = {
  name: "Quorum",
  context: "Personal build · frozen",
  eyebrow: "Personal build · frozen",
  tagline: "A company of AI agents, run by one person.",
  intro:
    "Quorum was my local agent-company OS. AI agents worked as employees under my direction: an orchestrator dispatched the work, agents built in parallel, and only the few decisions that actually needed a human reached me. It ran, and it shipped real software.",
  // Where it stands now. Honest, and the reason it is no longer flagship.
  status:
    "Frozen. It worked, and agents shipped real software under it, but running a company of agents did not give me more than one good assistant does. The work moved to Otto, and from there to Amaru, which is what I use every day now. Quorum is kept intact, not deleted.",
  // The punch line under the hero art.
  pitch: "One builder, a fleet of agents, real software shipped.",
  // Capability chips in the hero.
  chips: ["Orchestrator and daemon", "Two-way Telegram control", "Git-isolated parallel builds"],
  // The feature highlights, each with bespoke coded art (QuorumMotion.tsx).
  features: [
    {
      art: "board",
      title: "A live pipeline board",
      detail:
        "Every piece of work moved across four columns: Intake, Needs you, Working, Closed. One glance said what the company was doing and what was waiting on me. Nothing hid in a chat log.",
    },
    {
      art: "dispatch",
      title: "An orchestrator that filtered",
      detail:
        "Ideas and tasks went to the orchestrator, not to me. It dispatched agents, tracked every run, and surfaced only the calls that needed a human. I decided; the fleet executed.",
    },
    {
      art: "isolation",
      title: "Parallel builds, isolated",
      detail:
        "Each agent worked in its own git worktree, so several features moved at once without touching each other's code. Work merged only after it was built and verified.",
    },
    {
      art: "control",
      title: "Run it from anywhere",
      detail:
        "Full two-way control over Telegram. I could hand the company a task, approve a decision, or shut it down from a phone while the daemon kept everything alive at home.",
    },
  ] as const,
  // The shared-brain band.
  brain: {
    eyebrow: "The shared brain",
    title: "One memory, every agent",
    body: [
      "The agents read and wrote a single version-controlled memory. Decisions, project state, and lessons persisted across sessions and across the team, so nothing started cold and nothing got re-learned.",
      "Agents talked to each other too. Inter-agent chat and an idea pipeline with accept and deny meant the company proposed work on its own, and I stayed the one who said yes.",
    ],
    points: [
      "Version-controlled memory shared by every agent.",
      "Inter-agent chat for handoffs and reviews.",
      "An idea pipeline: the company proposed, I approved or denied.",
    ],
  },
  // How it was built, plainly. High level only.
  architecture: [
    "TypeScript core on the Claude Agent SDK, with a Next.js dashboard.",
    "A daemon with a heartbeat, so the company survived reboots and reported its own health.",
    "Git worktree isolation per agent, with a review gate before anything merged.",
    "A Telegram bridge for full two-way control away from the desk.",
    "Smoke-tested on every change: over a thousand checks ran before work landed.",
  ],
} as const;
