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
    "Amman mining expansion · Indonesia",
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
    company: "Reliable Controls Corporation",
    role: "CMS / PIMS Data Specialist",
    dates: "Oct 2025 — Present",
    location: "PT Amman Mining Expansion · Indonesia",
    blurb:
      "Engineering data management on a large-scale mining expansion: validated and uploaded 10,000+ equipment records into PIMS, and built Python & Playwright automations to replace manual data collection.",
  },
  {
    company: "Reliable Controls Corporation",
    role: "Project Engineer — Cloud Application Development",
    dates: "Jan 2024 — Dec 2024",
    location: "Salt Lake City, UT",
    blurb:
      "Led end-to-end development of a cloud-based internal app with Power Apps, Power Automate, and Azure SQL — selected after evaluating low-code platforms, schema designed in Vertabelo.",
  },
  {
    company: "IAMGOLD Mining Project",
    role: "Project Engineer",
    dates: "Jul 2023 — Jul 2024",
    location: "Canada",
    blurb:
      "Produced and QC'd equipment work packages for mining instrumentation, verifying accuracy against P&IDs and scope-of-work documents, and built Excel/Word templates to standardize the workflow.",
  },
  {
    company: "Rio Tinto Mine Project",
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
  // True for the flagship/case-study treatment (no live link, framed as a build).
  flagship?: boolean;
  // Bespoke coded card artwork (components/CardArt.tsx). One per card, no screenshots.
  art?: ArtKey;
};

// Featured projects, ordered strongest-first. Each one proves the niche:
// AI agents and automations that kill manual work in data-heavy environments.
export const PROJECTS: Project[] = [
  {
    name: "Career Agent",
    context: "career.qori.land",
    tagline: "An AI agent that runs a job search end to end.",
    description:
      "Reads your resume into a structured profile, pulls real job listings through the Adzuna API, scores how well you match each role, and drafts a tailored, ATS-friendly resume from your real experience. Not a script. An agent that does the whole job. Live and yours to test.",
    tech: ["Next.js", "Claude", "Adzuna", "Supabase", "TypeScript"],
    live: "https://career.qori.land",
    repo: "https://github.com/lucasrucu/career-agent",
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
    art: "flow",
  },
  {
    name: "Otto",
    context: "Personal AI assistant OS",
    tagline: "A voice-first assistant that runs my own work automations.",
    description:
      "A local AI assistant built on the Claude Agent SDK with a voice-driven HUD and multi-agent orchestration. Speak a command, watch an automation run: PIMS pulls, report generation, RFCC sign-offs. The clearest single example of agents killing manual industrial work.",
    tech: ["Python", "Claude Agent SDK", "Multi-agent", "Voice (STT/TTS)", "FastAPI"],
    page: "/otto",
    flagship: true,
    art: "orb",
  },
  {
    name: "rapid-pdf",
    context: "rapidpdf.qori.land",
    tagline: "A fast Windows desktop app for real PDF work.",
    description:
      "Reorder, delete, and combine pages, then mark them up with text, rectangles, and lines, all in one keyboard-driven canvas. A shipped, installable Windows product, not a demo. Light and dark themes built in.",
    tech: ["Python", "PySide6", "PyMuPDF", "Desktop"],
    live: "https://rapidpdf.qori.land",
    repo: "https://github.com/lucasrucu/rapid-pdf",
    art: "pages",
  },
  {
    name: "PIMS & RFCC Automation",
    context: "Live mining project · case study",
    tagline: "Replaced manual report and readiness-package work with code.",
    description:
      "On a live mining expansion, report and readiness-package creation used to be hours of manual data pulling and formatting. I rebuilt it with Python, Playwright, and the PIMS API: data collection, validation, and sign-off packages, automated. Cleaner data, faster turnaround, fewer correction cycles.",
    tech: ["Python", "Playwright", "PIMS API", "Power Query", "ETL"],
    page: "/pims-rfcc",
    flagship: true,
    art: "pipeline",
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

// Secondary row — good builds, but they don't lead the niche story.
// Kept for compatibility; Snip now lives in the unified PROJECTS grid.
export const OTHER_PROJECTS: Project[] = [];
