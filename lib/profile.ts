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
  title: "AI & Automation Engineer",
  // The formal base, and the only thing that should ever read as "where he is".
  // The Indonesia site posting is temporary and belongs on the ROLE, not here.
  location: "Salt Lake City, UT",
  languages: "English & Spanish",
  // Hero headline, the niche stated plainly. What I do before what my title is.
  tagline: "I build AI agents and automations that kill manual work.",
  // Hero subhead, one line, the rare intersection that makes the niche mine.
  // Written to be extractable verbatim by search snippets and AI answer engines:
  // states name, role, and the published-paper credential in plain sentences.
  intro:
    "Lucas Ruiz is an AI and automation engineer who builds software that removes manual work from data-heavy industrial projects. He works as a data specialist on large-scale industrial commissioning, and he co-authored a peer-reviewed paper on a YOLO-based PPE monitoring system, published in the Proceedings of the Computer Vision Conference (CVC) 2026. Field engineer who builds, builder who has worked the field.",
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

export type Experience = {
  company: string;
  role: string;
  dates: string;
  location: string;
  blurb: string;
};

// Every role on the resume, newest start first. Several overlap because they
// were concurrent project assignments under one employer, some run remotely,
// which is what EXPERIENCE_NOTE says out loud so the timeline does not read as
// a mistake. Client and project names stay anonymized.
export const EXPERIENCE: Experience[] = [
  {
    company: "Commissioning contractor",
    role: "CMS / PIMS Data Specialist",
    dates: "Oct 2025 - Present",
    // Base first, posting second. Indonesia is a temporary site posting.
    location: "Salt Lake City, UT · temporary site posting in Indonesia",
    blurb: `Engineering data management on a large-scale industrial commissioning project: validated and uploaded ${SCALE.tags} equipment tags into the project data platform, and built Python and Playwright automations to replace manual data collection.`,
  },
  {
    company: "Commissioning contractor",
    role: "Project Engineer, Resource Loading Tool",
    dates: "Feb 2025 - Jun 2025",
    location: "Salt Lake City, UT",
    blurb:
      "Built a two-file Excel system that tracks resource allocation across projects and provisions availability data for each new team with no manual setup. Power Query M keeps the master sheet current, and the dashboards let leads watch capacity across 50+ people.",
  },
  {
    company: "Commissioning contractor",
    role: "Project Engineer, SharePoint Document Management",
    dates: "Dec 2024 - Apr 2025",
    location: "Salt Lake City, UT",
    blurb:
      "Evaluated Egnyte, OneDrive and SharePoint, then implemented SharePoint as the company's document control platform: controlled libraries, metadata schemas, multi-stage approvals, and Power Automate lifecycle flows wired into Teams.",
  },
  {
    company: "Commissioning contractor",
    role: "Project Engineer, Salesforce Configuration",
    dates: "Dec 2024 - Apr 2025",
    location: "Salt Lake City, UT",
    blurb:
      "Configured profiles, views and permissions for the internal project coordination app built on Salesforce PM+, then wrote the onboarding documentation and task-tracking automations that got the team onto it.",
  },
  {
    company: "Commissioning contractor",
    role: "Project Engineer, Cloud Application Development",
    dates: "Jan 2024 - Dec 2024",
    location: "Salt Lake City, UT",
    blurb:
      "Led end-to-end development of a cloud-based internal app with Power Apps, Power Automate, and Azure SQL, selected after evaluating low-code platforms, schema designed in Vertabelo.",
  },
  {
    company: "Gold mining project",
    role: "Project Engineer",
    dates: "Jul 2023 - Jul 2024",
    location: "Canada",
    blurb:
      "Produced and QC'd equipment work packages for mining instrumentation, verifying accuracy against P&IDs and scope-of-work documents, and built Excel/Word templates to standardize the workflow.",
  },
  {
    company: "Copper mining project",
    role: "Engineering Intern",
    dates: "Dec 2022 - Dec 2023",
    location: "Utah",
    blurb:
      "Assembled and QC'd checklist packages for mining equipment commissioning, coordinating with the team to meet client delivery deadlines.",
  },
];

// Shown under the timeline. The overlapping dates are real and this is why.
export const EXPERIENCE_NOTE =
  "Dates overlap because these were concurrent project assignments under one employer, several of them run remotely.";

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
// Otto sits second on purpose: it is live, it is what actually runs the work,
// and it built this site. Quorum used to sit here and has been moved down to
// MORE_PROJECTS, because it is frozen.
export const FEATURED_PROJECTS: Project[] = [
  {
    name: "Industrial commissioning automation",
    context: "Large industrial project · field case study",
    tagline: "A body of automations that turned the commissioning paperwork into software.",
    description: `On a large minerals-processing expansion, my day was repetitive, high-stakes data work across ${SCALE.subsystems} subsystems and ${SCALE.tags} equipment tags. I built a toolkit of automations plus an AI assistant that runs them. The biggest single win cut energization-document work from up to 6 hours a day to under an hour. Projected to remove 1,000+ hours over the project (estimate).`,
    tech: ["Python", "Playwright", "REST APIs", "Power BI", "AI Agents"],
    page: "/commissioning-automation",
    flagship: true,
    art: "commissioning",
    accent: "experience",
  },
  {
    name: "Otto",
    context: "Personal AI assistant OS",
    tagline: "A voice-first assistant that runs my own work automations.",
    description:
      "A local AI assistant built on the Claude Agent SDK with a voice-driven HUD and multi-agent orchestration. Speak a command, watch an automation run: data pulls, report generation, readiness sign-offs. It is also the assistant that built the rest of this site.",
    tech: ["Python", "Claude Agent SDK", "Multi-agent", "Voice (STT/TTS)", "FastAPI"],
    page: "/otto",
    art: "orb",
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
export const MORE_PROJECTS: Project[] = [
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
// page that presents it as the flagship personal build. Lives at /otto.
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
  eyebrow: "Personal build · live daily",
  // Hero line for the showcase page.
  tagline: "A voice-first AI assistant that runs my work.",
  intro:
    "Otto is my personal AI operating layer. It is built on the Claude Agent SDK, talks back, and actually executes my automations on command. A personal build, not a public product.",
  // Honest current state. Otto is the one that is live, which is why it now
  // outranks Quorum on this site.
  status: "Live, used every day, and the assistant that built this site.",
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
        "Notices of Energization have to exist for every subsystem, and writing them by hand is slow and repetitive. Give the Generator a COMM number, the subsystems, and a signer, and it produces the finished .docx from templates. This is the tool behind the headline number on the parent case study, and it is my collaborator's work.",
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
  // THE CREDIT. This is joint work and it carries the biggest number on the
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
      "This one is not mine alone. A colleague built the original NoE Generator, the tool that turns a subsystem list into a finished energization document. I built the toolkit around it: the Drawing Plan Painter, the Drawing Finder, the shared launcher, the packaging, and the bilingual UI. The headline figure on the parent case study, roughly six hours a day down to under one, comes from their generator.",
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
  // Its own number. Always framed as an estimate, never as measured fact.
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
// Fully anonymized (no client/employer/project/person names). All numbers are
// ESTIMATES, framed honestly. Lives at /commissioning-automation. Source: the
// Lucas-approved anonymized automation inventory in the assistant's memory.
// ---------------------------------------------------------------------------
export const EXPERIENCE_STUDY = {
  name: "Industrial commissioning automation",
  context: "Large minerals-processing expansion · commissioning & handover",
  eyebrow: "Field experience · case study",
  // Hero line: the role, plainly.
  tagline:
    "I turned the commissioning paperwork of a large industrial project into software.",
  // Hero subhead: the role + the headline estimate, framed as an estimate.
  intro:
    "As the data specialist on a large minerals-processing expansion in its commissioning and handover phase, my day was repetitive, high-stakes data work: pulling records, validating them, formatting reports, signing off readiness packages. So I built a toolkit of automations to do it. Across the project, that toolkit is projected to remove on the order of 1,000+ hours of manual work. That figure is an estimate, projected to project end.",
  // The headline stat block under the hero. Every number framed as an estimate.
  headline: {
    value: "1,000+",
    unit: "hours",
    label: "of repetitive manual work projected to be removed over the project",
    note: "Estimate, projected to project end. The project is still running.",
  },
  // Scale anchors, from the one shared SCALE constant so no page can drift.
  scale: [
    { value: SCALE.subsystems, label: "subsystems on the project" },
    { value: SCALE.tags, label: "equipment tags" },
    { value: SCALE.checksheets, label: "checksheets" },
  ],
  // The NoE before/after as a SINGLE stat. The biggest single win, and the one
  // number on this page that is not mine alone, which the credit line says.
  noe: {
    label: "Energization documents (NoE), the biggest single win",
    before: "up to 6 hrs/day",
    after: "under 1 hr",
    saved: "~5 hrs/day",
    note: "Estimate from real before/after. The generator behind this number was built by a colleague; I built the toolkit around it. Full story in the NoE Toolkit child case.",
  },
  // The named children. Each carries its own numbers and its own credit.
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
      // TO PUBLISH IN SEPTEMBER: write a real `blurb` and `stat`, then delete
      // the `draft` line. Nothing else changes; the section renders it.
      // ----------------------------------------------------------------
      draft: true,
      name: "Commissioning Suite",
      blurb: "Placeholder. Lucas writes this entry in September.",
    },
    {
      name: "NoE Toolkit",
      blurb:
        "Three desktop tools behind one launcher: generate the energization documents, batch-repaint the drawings in Visio, and find which drawing a subsystem or tag lives on. The biggest single time-saver in the whole toolkit.",
      page: "/noe",
      stat: "Up to 6 hrs/day by hand, under 1 hr with the tool (estimate)",
      credit: "Co-developed with a colleague",
    },
    {
      name: "PIMS & RFCC Automation",
      blurb:
        "Readiness reports generated straight from the data-platform API, and an unattended sign-off flow that imports the readiness list, pulls the handover documents, uploads files and metadata, and signs the certificates.",
      page: "/pims-rfcc",
      stat: "200 to 300 hours removed by project end (estimate)",
    },
    {
      name: "Power BI progress dashboard",
      blurb:
        "One command pulls the data exports, drives the browser export of the document register, syncs the readiness sheet, and refreshes the Power BI model. Daily commissioning progress stopped depending on anyone being at a desk.",
      stat: "30 to 45 min/day down to near one click, 100+ hours over the project (estimate)",
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
      stat: "20 min per document down to seconds, 60 to 100 hours (estimate)",
    },
    {
      name: "Project report generator",
      blurb:
        "Pulls the completed task-board cards for any date range and writes them up as formatted Word reports, so the daily write-up is generated rather than typed.",
      stat: "10 to 15 min/day removed (estimate)",
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
  // Honest framing note about the numbers.
  estimatesNote:
    "Every figure on this page is a conservative estimate from real before/after observation, and several are projected to the end of a project that is still running. They are presented as estimates, not measured fact, on purpose. The point is the shape of the work removed, not a precise hour count.",
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
    "Frozen. It worked, and agents shipped real software under it, but running a company of agents did not give me more than one good assistant does. The work moved to Otto, which is what I use every day now. Quorum is kept intact, not deleted.",
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
