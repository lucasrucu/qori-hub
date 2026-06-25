// Single source of truth for all personal/landing content. Derived from Lucas's
// resume (Lucas_Ruiz_Resume_2026_v2.docx) + memory. Edit copy here — components
// only render it. Keeps the hub and the /card page in sync.

export const PROFILE = {
  name: "Lucas Ruiz",
  firstName: "Lucas",
  lastName: "Ruiz",
  title: "Data & Automation Engineer",
  location: "Salt Lake City, UT",
  languages: "English & Spanish",
  tagline: "I build tools I actually use.",
  // Hero subhead — one line, what I do.
  intro:
    "Data & automation engineer. I turn manual, repetitive work into software — on real industrial projects, and for myself.",
  // About — who I am, two short paragraphs.
  about: [
    "Software engineer by training, industrial data & automation engineer by trade. I build Python pipelines, AI-powered dashboards, and workflow automations deployed on real projects across the U.S., Canada, Indonesia, and Peru.",
    "Right now I'm embedded on a large-scale mining expansion in Indonesia, managing 10,000+ equipment records and building scraping and ETL automations. Off the clock, I ship AI side-projects — and train as an amateur triathlete.",
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
  whatsapp: "https://wa.me/51934109477", // Peru +51 934109477
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
    label: "Data & Platforms",
    items: ["PIMS (omega 365)", "Azure SQL", "MySQL", "PostgreSQL", "Vertabelo"],
  },
  {
    label: "Automation & Scripting",
    items: ["Python", "Playwright", "Power Query M", "Power Automate", "Power Apps", "Power FX"],
  },
  {
    label: "Engineering & PM",
    items: ["P&ID Review", "Document Control", "Process Standardization", "SharePoint", "Salesforce PM+"],
  },
  {
    label: "Also worked with",
    items: ["JavaScript", "Java", "SQL", "Git / GitHub", "Spring Boot", "Flutter"],
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
    detail: "Off-season on the mountain — still chasing the same drive to improve.",
  },
];
