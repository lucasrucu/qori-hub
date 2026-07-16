// Single source of truth for all personal/landing content. Derived from Lucas's
// resume (Lucas_Ruiz_Resume_2026_v2.docx) + memory. Edit copy here — components
// only render it. Keeps the hub and the /card page in sync.

import type { ArtKey } from "@/components/CardArt";

export const PROFILE = {
  name: "Lucas Ruiz",
  firstName: "Lucas",
  lastName: "Ruiz",
  title: "AI & Automation Engineer",
  location: "Salt Lake City, UT",
  languages: "English & Spanish",
  // Hero headline — the niche, stated plainly. What I do before what my title is.
  tagline: "I build AI agents and automations that kill manual work.",
  // Hero subhead — one line, the rare intersection that makes the niche mine.
  intro:
    "I write the software that removes repetitive, high-stakes data work from real industrial projects. Field engineer who builds, builder who has worked the field.",
  // About — who I am. Lead with the bridge: the thing nobody else can say.
  about: [
    "I build AI agents and automations that remove manual work from data-heavy industrial projects. Right now I am the PIMS data specialist on a large mining expansion in Indonesia, managing 10,000+ equipment and instrument records. The job is full of repetitive, high-stakes data work: pulling records, validating them, formatting reports, signing off readiness packages. So I automate it.",
    "What makes the combination uncommon is the bridge. I have spent years on real mining and industrial sites in the U.S., Canada, Indonesia, and Peru, reading P&IDs, QC-ing equipment packages, owning the data nobody else wants to touch. I also build software. Most people in industrial data ops do not build, and most people who build have never seen a field. I do both, which means the automations I write actually fit how the work happens.",
  ],
  // "Currently" chips under the about copy.
  now: [
    "Large mining expansion · Indonesia",
    "10,000+ equipment records",
    "Triathlon Worlds 2026",
  ],
} as const;

// Social / contact links. Used in nav, footer, and the /card page.
export const SOCIALS = {
  linkedin: "https://www.linkedin.com/in/lucasrucu/",
  github: "https://github.com/lucasrucu",
  email: "lucasruiz1336@gmail.com",
  instagram: "https://www.instagram.com/lucasrucu/",
} as const;

export type Experience = {
  company: string;
  role: string;
  dates: string;
  location: string;
  blurb: string;
};

// Top 4 roles only — keeps the timeline uncrowded. Full history lives on the resume.
export const EXPERIENCE: Experience[] = [
  {
    company: "Commissioning contractor",
    role: "CMS / PIMS Data Specialist",
    dates: "Oct 2025 — Present",
    location: "Large mining expansion · Indonesia",
    blurb:
      "Engineering data management on a large-scale mining expansion: validated and uploaded 10,000+ equipment records into PIMS, and built Python & Playwright automations to replace manual data collection.",
  },
  {
    company: "Commissioning contractor",
    role: "Project Engineer — Cloud Application Development",
    dates: "Jan 2024 — Dec 2024",
    location: "Salt Lake City, UT",
    blurb:
      "Led end-to-end development of a cloud-based internal app with Power Apps, Power Automate, and Azure SQL — selected after evaluating low-code platforms, schema designed in Vertabelo.",
  },
  {
    company: "Gold mining project",
    role: "Project Engineer",
    dates: "Jul 2023 — Jul 2024",
    location: "Canada",
    blurb:
      "Produced and QC'd equipment work packages for mining instrumentation, verifying accuracy against P&IDs and scope-of-work documents, and built Excel/Word templates to standardize the workflow.",
  },
  {
    company: "Copper mining project",
    role: "Engineering Intern",
    dates: "Dec 2022 — Dec 2023",
    location: "Utah",
    blurb:
      "Assembled and QC'd checklist packages for mining equipment commissioning, coordinating with the team to meet client delivery deadlines.",
  },
];

export const EDUCATION = {
  degree: "B.S. Software Engineering",
  school: "Universidad Peruana de Ciencias Aplicadas (UPC)",
  location: "Lima, Peru",
  dates: "2021 — 2025",
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
    detail: "Half Ironman and a full marathon — structured preparation and resilience under pressure.",
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
  // True for the four landing-page flagships: chip + border-beam treatment.
  flagship?: boolean;
  // Bespoke coded card artwork (components/CardArt.tsx). One per card, no screenshots.
  art?: ArtKey;
  // Optional per-card accent. "experience" color-codes to the teal Patina
  // accent (commissioning-automation and its sub-cases); "quorum" to the
  // electric agent blue. Default is Sovereign amber.
  accent?: "experience" | "quorum";
};

// The flagship four. The ONLY projects on the landing page, in this order.
// Everything else lives on /projects.
export const FLAGSHIP_PROJECTS: Project[] = [
  {
    name: "Industrial commissioning automation",
    context: "Large industrial project · field case study",
    tagline: "A body of automations that turned the commissioning paperwork into software.",
    description:
      "On a large minerals-processing expansion, my day was repetitive, high-stakes data work across ~1,300+ subsystems and ~14,000 tags. I built a toolkit of 13 automations plus an AI assistant that runs them. The flagship cut energization-document work from up to ~6 hours/day to under an hour. Projected to remove 1,000+ hours over the project (estimate).",
    tech: ["Python", "Playwright", "REST APIs", "Power BI", "AI Agents"],
    page: "/commissioning-automation",
    flagship: true,
    art: "commissioning",
    accent: "experience",
  },
  {
    name: "Quorum",
    context: "Agent company OS",
    tagline: "A company of AI agents, run by one person.",
    description:
      "An always-on OS where AI agents work as employees. An orchestrator dispatches the work, agents build in parallel inside isolated git worktrees, and a live pipeline board shows the one thing that actually needs me. Two-way Telegram control, one shared memory. My own system, and it ships real software.",
    tech: ["TypeScript", "Claude Agent SDK", "Next.js", "Telegram", "Git"],
    page: "/quorum",
    flagship: true,
    art: "quorum",
    accent: "quorum",
  },
  {
    name: "Career Agent",
    context: "career.qori.land",
    tagline: "An AI agent that runs a job search end to end.",
    description:
      "Reads your resume into a structured profile, pulls real job listings through the Adzuna API, scores how well you match each role, and drafts a tailored, ATS-friendly resume from your real experience. Not a script. An agent that does the whole job. Live and yours to test.",
    tech: ["Next.js", "Claude", "Adzuna", "Supabase", "TypeScript"],
    live: "https://career.qori.land",
    repo: "https://github.com/lucasrucu/career-agent",
    flagship: true,
    art: "radar",
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
    flagship: true,
    art: "flow",
  },
];

// The rest of the shelf. Listed on /projects as compact cards.
export const MORE_PROJECTS: Project[] = [
  {
    name: "Otto",
    context: "Personal AI assistant OS",
    tagline: "A voice-first assistant that runs my own work automations.",
    description:
      "A local AI assistant built on the Claude Agent SDK with a voice-driven HUD and multi-agent orchestration. Speak a command, watch an automation run: PIMS pulls, report generation, RFCC sign-offs.",
    tech: ["Python", "Claude Agent SDK", "Multi-agent", "Voice (STT/TTS)", "FastAPI"],
    page: "/otto",
    art: "orb",
  },
  {
    name: "NoE Toolkit",
    context: "Industrial commissioning · sub-case",
    tagline: "The commissioning paperwork, done by three desktop tools.",
    description:
      "A Windows toolkit that generates energization documents, batch-repaints drawings, and finds any subsystem across a huge drawing tree. The single biggest time-saver in the commissioning toolkit.",
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
      "Python, Playwright, and the PIMS API doing the record collection, validation, and readiness-certificate sign-off on a live mining expansion.",
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
    name: "rapid-cut",
    context: "Local desktop tool",
    tagline: "Batch clip cutting with local voice detection.",
    description:
      "Point it at raw footage and it cuts clips around the talking, using on-device voice-activity detection. ffmpeg does the cutting, nothing leaves the machine, no API cost.",
    tech: ["Python", "PySide6", "ffmpeg", "Silero VAD"],
    art: "cut",
  },
  {
    name: "VideoOS",
    context: "Desktop video editor",
    tagline: "A video editor built from scratch on the rapid-cut engine.",
    description:
      "Timeline, clips, trims, and export in a native Qt app. Built far enough to prove the engine, then parked as a portfolio piece.",
    tech: ["Python", "PySide6", "ffmpeg"],
    art: "video",
  },
];

// Otto showcase content. Otto's code is private; this is the public capabilities
// page that presents it as a flagship personal build. Lives at /otto.
export const OTTO = {
  name: "Otto",
  // Hero line for the showcase page.
  tagline: "A voice-first AI assistant that runs my work.",
  intro:
    "Otto is my personal AI operating layer. It is built on the Claude Agent SDK, talks back, and actually executes my automations on command. A flagship personal build, not a public product.",
  // Plain framing of what it is.
  what: [
    "I do a lot of repetitive, high-stakes data work on industrial projects: pulling records, generating reports, signing off readiness packages. Otto is how I stopped driving each of those by hand.",
    "It runs locally on my machine, authenticated once. I speak a command, Otto figures out which automation to run, runs it, and reports back. Same brain across every task: one set of skills, one shared memory, one assistant.",
  ],
  capabilities: [
    {
      icon: "mic",
      title: "Voice-first interface",
      detail:
        "A glowing orb is the centerpiece. Push to talk, Otto listens, thinks, and speaks back a short natural summary. Local speech-to-text and text-to-speech, swappable behind a provider seam.",
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
        "PIMS data pulls, report generation, RFCC sign-offs, Trello triage. Registry-driven cards mean adding a new automation is a config edit, not a UI rebuild.",
    },
    {
      icon: "brain",
      title: "Persistent memory",
      detail:
        "Otto remembers projects, decisions, and preferences across sessions through a version-controlled memory layer, so context carries over instead of starting cold each time.",
    },
  ] as const,
  architecture: [
    "Python backend on the Claude Agent SDK, browser HUD on the front.",
    "Rides a Claude subscription login. No metered API, no per-call cost.",
    "Registry-driven automation cards with live progress, each writing its own status.",
    "Local Whisper for speech-in, local Piper for speech-out, both swappable.",
    "Version-controlled memory shared across machines.",
  ],
  // Demo GIF spots. No assets yet. Placeholders flagged for Lucas to fill.
  demos: [
    "Demo: the orb listening, then speaking back",
    "Demo: a voice command launching an automation",
  ],
} as const;

// PIMS & RFCC case-study content. Real field-engineering automation Lucas runs
// daily on a live mining expansion. The code is private; this is the public
// case-study page that presents it as a flagship build. Lives at /pims-rfcc.
export const PIMS_RFCC = {
  name: "PIMS & RFCC Automation",
  context: "Live mining project · case study",
  // Hero line for the case-study page.
  tagline: "Manual report and readiness-package work, replaced with code.",
  intro:
    "On a live mining expansion in Indonesia, building reports and signing off readiness packages used to be hours of pulling records, formatting, and chasing documents by hand. I rebuilt that work as automation: Python, Playwright, and the PIMS API doing the collection, validation, and sign-off.",
  // Plain framing of what it is and why it exists.
  what: [
    "PIMS is the engineering data platform of record on the project: tens of thousands of equipment and instrument records, checklists, and commissioning data. The day-to-day work is repetitive and high-stakes. Pull the right records, validate them, format a report, assemble a readiness package, sign it off. Get one field wrong and a correction cycle costs days.",
    "I write the software that takes that work off my hands. Two automations carry most of it: a CLI that generates subsystem-readiness reports straight from the PIMS API, and an end-to-end RFCC sign-off flow that imports the 3WLA list, pulls HOP documents from Aconex, uploads the metadata and files back into PIMS, and signs the readiness certificates.",
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
        "One command runs the whole readiness-certificate cycle. It imports the 3WLA CSV, downloads the HOP documents from Aconex with Playwright, uploads the metadata and files into PIMS, and signs the RFCCs. What used to be a manual, multi-system slog is now a single automated pass.",
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
      detail: "Generate the PDF and Excel report; download HOP documents from Aconex.",
    },
    {
      step: "Sign off",
      detail: "Upload metadata and files into PIMS and sign the readiness certificates.",
    },
  ],
  // How it is built, plainly.
  architecture: [
    "Python CLI core: pims_client.py fetches, report_logic.py aggregates, pdf_export.py and excel_export.py render.",
    "Playwright drives Aconex to export the document register and download HOP files.",
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

// NoE Toolkit case-study content. The product is the "NoE Maker Toolkit"
// (v1.0.0), a Windows desktop toolkit built to take the energization-document
// and drawing-markup busywork off commissioning engineers on a live mining
// expansion. The code is private; this is the public case-study page. Lives at
// /noe. Tool screenshots live in public/noe/ (omitted publicly to avoid logo exposure).
export const NOE = {
  // Short label for the homepage card; the page itself shows the product name.
  name: "NoE Toolkit",
  productName: "NoE Maker Toolkit",
  version: "v1.0.0",
  context: "Industrial commissioning · case study",
  tagline: "The commissioning paperwork, done by three desktop tools.",
  intro:
    "On a large mining expansion in Indonesia, commissioning engineers lose hours to energization documents and drawing markup, all by hand. We built a Windows toolkit that does the busywork: it generates the documents, batch-repaints the drawings, and finds any subsystem across a huge drawing tree.",
  // Plain framing of what it is and why it exists.
  what: [
    "Commissioning a plant means proving each subsystem is ready to energize, and that proof is paperwork: a Notice of Energization per subsystem, marked-up drawings showing what is live, and the constant hunt for which drawing a tag even lives on. Done by hand across hundreds of subsystems, it is slow and error-prone, and a wrong drawing or a missed tag costs real time on a live project.",
    "The NoE Maker Toolkit takes that work off the engineer's hands. A single launcher opens three focused tools, each running as its own crash-isolated process so one tool falling over never takes the others down. It is packaged as one NoE.exe with PyInstaller, so an engineer installs nothing and just runs it. The UI is bilingual, so it fits a Spanish-speaking field team as well as an English-speaking one.",
  ],
  // The three tools, each problem -> solution. Mirrors the launcher.
  tools: [
    {
      icon: "fileText",
      title: "NoE Generator",
      shot: "/noe/generator.png",
      detail:
        "Notices of Energization have to exist for every subsystem, and writing them by hand is slow and repetitive. Give the Generator a COMM number, the subsystems, and a signer, and it produces the finished .docx from templates.",
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
  // Honest co-development credit. A colleague built the original; Lucas updated it.
  credit: "Co-developed with a colleague.",
  // The do-if-revived vision (docs/ROADMAP.md).
  roadmap: [
    "One shared window hosting all three tools instead of three separate processes.",
    "Unified history across the tools, so recent COMM numbers and subsystems carry over.",
    "Live cross-tool subsystem sync, so picking a subsystem in one tool sets it in the others.",
  ],
} as const;

// One automation card in the experience toolkit. Plain: what it does, nothing
// more (no tech list, no time figure). `featured` flags the 4 standouts that
// get the spotlight treatment.
type Automation = {
  title: string;
  does: string;
  featured?: boolean;
};

// ---------------------------------------------------------------------------
// Industrial commissioning automation — the PARENT experience case study.
// One coherent story about the body of automations Lucas built on a large
// industrial project. The PIMS/RFCC and NoE pages fold UNDER this as sub-cases.
// Fully anonymized (no client/employer/project/person names). All numbers are
// ESTIMATES, framed honestly. Lives at /experience. Source: the Lucas-approved
// anonymized automation inventory in the assistant's memory.
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
  // Scale anchors — real, non-identifying, safe to cite.
  scale: [
    { value: "~1,300+", label: "subsystems on the project" },
    { value: "~14,000", label: "equipment tags" },
    { value: "~13,000+", label: "checksheets" },
  ],
  // The NoE flagship as a SINGLE stat (no prose deep-dive on the parent page;
  // the full story lives in the /noe sub-case). The biggest single time-saver.
  noe: {
    label: "Energization documents (NoE), the single biggest win",
    before: "~6 hrs/day",
    after: "under 1 hr",
    saved: "~5 hrs/day",
    note: "Estimate from real before/after. The full story is in the NoE sub-case below.",
  },
  // The toolkit as a flat set of cards. Each card is just what it does, plainly.
  // The 4 featured ones get the spotlight; the rest are the supporting cast.
  automations: ([
    {
      title: "Readiness-certificate (RFCC) sign-off bot",
      does: "Logs into the document register, downloads the handover docs, uploads files and metadata to the commissioning database, and signs the readiness certificates unattended.",
      featured: true,
    },
    {
      title: "Commissioning-progress dashboard refresh",
      does: "One command pulls the data, runs the browser exports, syncs the readiness sheet, and refreshes the Power BI model.",
      featured: true,
    },
    {
      title: "Boundary-certificate (BIC) custody highlighter",
      does: "Resolves every tag to its subsystem and shades the boundary document by custody: grey for commissioning, red for construction.",
      featured: true,
    },
    {
      title: "Overnight unattended orchestration",
      does: "Runs the whole morning pipeline headless overnight and leaves the draft outputs ready for review.",
      featured: true,
    },
    {
      title: "Energization (NoE) linker",
      does: "Bulk-links energized subsystems' tags to their commissioning numbers, hundreds of associations per run.",
    },
    {
      title: "Checksheet field sync",
      does: "Diffs an update file and syncs only the changed rows across roughly 13,000 checksheets.",
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
      title: "Subsystem-readiness (RFWCC) reporter",
      does: "Generates PDF and Excel readiness reports straight from the commissioning database API.",
    },
    {
      title: "Daily report generator",
      does: "Turns completed task-board cards into formatted Word reports for any date range.",
    },
    {
      title: "Timesheet auto-fill",
      does: "Reads the daily reports and fills the timesheet web app, hours and descriptions per day.",
    },
    {
      title: "Task-board triage",
      does: "Audits the board for missing labels, wrong lists, and overdue cards, and fixes them on confirmation.",
    },
    {
      title: "Fast desktop PDF editor (rapid-pdf)",
      does: "A fast Windows PDF editor for page management and markup, built for the large energization documents.",
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
  // The two deep-dive sub-cases that fold under this parent.
  subCases: [
    {
      name: "NoE Toolkit",
      blurb: "The energization-document and drawing-markup desktop toolkit, in depth.",
      page: "/noe",
    },
    {
      name: "PIMS & RFCC Automation",
      blurb: "The readiness reporting and certificate sign-off flow, in depth.",
      page: "/pims-rfcc",
    },
  ],
} as const;

// Quorum showcase content. The code is private; this is the public page that
// presents it as a flagship personal build. Lives at /quorum. High-level on
// purpose: the concept and the capabilities, not the internals.
export const QUORUM = {
  name: "Quorum",
  context: "Personal build · agent company OS",
  eyebrow: "Flagship build · agent company",
  tagline: "A company of AI agents, run by one person.",
  intro:
    "Quorum is my local agent-company OS. AI agents work as employees under my direction: an always-on daemon keeps the company running, an orchestrator dispatches the work, and only the few decisions that actually need a human reach me.",
  // The punch line under the hero art.
  pitch: "One builder, a fleet of agents, real software shipped.",
  // Capability chips in the hero.
  chips: ["Always-on daemon", "Two-way Telegram control", "Git-isolated parallel builds"],
  // The feature highlights, each with bespoke coded art (QuorumMotion.tsx).
  features: [
    {
      art: "board",
      title: "A live pipeline board",
      detail:
        "Every piece of work moves across four columns: Intake, Needs you, Working, Closed. One glance says what the company is doing and what is waiting on me. Nothing hides in a chat log.",
    },
    {
      art: "dispatch",
      title: "An orchestrator that filters",
      detail:
        "Ideas and tasks go to the orchestrator, not to me. It dispatches agents, tracks every run, and surfaces only the calls that need a human. I decide; the fleet executes.",
    },
    {
      art: "isolation",
      title: "Parallel builds, isolated",
      detail:
        "Each agent works in its own git worktree, so several features move at once without touching each other's code. Work merges only after it is built and verified.",
    },
    {
      art: "control",
      title: "Run it from anywhere",
      detail:
        "Full two-way control over Telegram. I can hand the company a task, approve a decision, or shut it down from a phone while the daemon keeps everything alive at home.",
    },
  ] as const,
  // The shared-brain band.
  brain: {
    eyebrow: "The shared brain",
    title: "One memory, every agent",
    body: [
      "The agents read and write a single version-controlled memory. Decisions, project state, and lessons persist across sessions and across the team, so nothing starts cold and nothing gets re-learned.",
      "Agents talk to each other too. Inter-agent chat and an idea pipeline with accept and deny mean the company proposes work on its own, and I stay the one who says yes.",
    ],
    points: [
      "Version-controlled memory shared by every agent.",
      "Inter-agent chat for handoffs and reviews.",
      "An idea pipeline: the company proposes, I approve or deny.",
    ],
  },
  // How it is built, plainly. High level only.
  architecture: [
    "TypeScript core on the Claude Agent SDK, with a Next.js dashboard.",
    "An always-on daemon with a heartbeat, so the company survives reboots and reports its own health.",
    "Git worktree isolation per agent, with a review gate before anything merges.",
    "A Telegram bridge for full two-way control away from the desk.",
    "Smoke-tested on every change: over a thousand checks run before work lands.",
  ],
} as const;
