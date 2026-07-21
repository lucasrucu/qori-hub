// schema.org JSON-LD builders. Structured data is the entity-SEO mechanism
// that lets search + AI answer engines (Google AI Overviews, ChatGPT,
// Perplexity) disambiguate Lucas from other people with the same name and
// cite him correctly. Kept in one place so the Person node stays consistent
// wherever it is embedded (homepage, /card, /research/*).

import { PROFILE, RESEARCH, SOCIALS, type Publication } from "@/lib/profile";

export const SITE_URL = "https://qori.land";

// Stable identifier for the Person entity. Reused as the @id on every page
// that embeds it, and referenced from the paper's author entry, so engines
// can tie "Lucas Ruiz, PIMS engineer" and "Lucas Ruiz, paper author" to the
// same node instead of treating them as two different people.
export const PERSON_ID = `${SITE_URL}/#person`;

// The single most important signal on the site: who Lucas is, and the real
// external profiles that prove it. Only identifiers Lucas actually owns go
// in sameAs, nothing invented.
export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: PROFILE.name,
    url: SITE_URL,
    jobTitle: PROFILE.title,
    description: PROFILE.intro,
    sameAs: [
      SOCIALS.linkedin,
      SOCIALS.github,
      SOCIALS.instagram,
      SOCIALS.orcid,
      RESEARCH.find((paper) => paper.slug === "ppe-yolo")?.doiUrl,
    ].filter((value): value is string => Boolean(value)),
  };
}

// ScholarlyArticle for a published paper. Lucas's author entry links back to
// the Person node above and carries his ORCID, so his identity is provable.
// Co-authors are named only, deliberately: we do not want to hand them link
// equity or claim identifiers on their behalf that we cannot verify.
export function scholarlyArticleJsonLd(paper: Publication) {
  return {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    "@id": `${SITE_URL}/research/${paper.slug}#article`,
    headline: paper.title,
    name: paper.title,
    description: paper.description,
    url: paper.doiUrl,
    sameAs: paper.doiUrl,
    datePublished: "2026-06-03",
    pagination: paper.pages,
    isPartOf: {
      "@type": "PublicationVolume",
      name: paper.venue,
    },
    author: [
      {
        "@type": "Person",
        "@id": PERSON_ID,
        name: PROFILE.name,
        url: SITE_URL,
        sameAs: [SOCIALS.orcid, SITE_URL],
      },
      { "@type": "Person", name: "Oliver Tuesta" },
      { "@type": "Person", name: "Abel Rosales Caururu" },
    ],
  };
}
