import type { MetadataRoute } from "next";

import { RESEARCH } from "@/lib/profile";

const SITE_URL = "https://qori.land";

// Every real route on the site. Keep in sync with app/ when a page is added
// or removed; nothing here is generated from the filesystem on purpose, so a
// draft/internal route never accidentally ships in the sitemap.
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, priority: 1, changeFrequency: "monthly" },
    { url: `${SITE_URL}/card`, priority: 0.6, changeFrequency: "yearly" },
    { url: `${SITE_URL}/projects`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${SITE_URL}/commissioning-automation`, priority: 0.7, changeFrequency: "yearly" },
    { url: `${SITE_URL}/noe`, priority: 0.6, changeFrequency: "yearly" },
    { url: `${SITE_URL}/pims-rfcc`, priority: 0.6, changeFrequency: "yearly" },
    { url: `${SITE_URL}/otto`, priority: 0.6, changeFrequency: "yearly" },
    { url: `${SITE_URL}/quorum`, priority: 0.6, changeFrequency: "yearly" },
  ];

  const researchRoutes: MetadataRoute.Sitemap = RESEARCH.map((paper) => ({
    url: `${SITE_URL}/research/${paper.slug}`,
    priority: 0.7,
    changeFrequency: "yearly",
  }));

  return [...staticRoutes, ...researchRoutes];
}
