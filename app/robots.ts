import type { MetadataRoute } from "next";

const SITE_URL = "https://qori.land";

// Explicit allow rules for the AI answer-engine crawlers, in addition to the
// wildcard, so it is unambiguous that they are welcome (some of these bots
// respect a more restrictive default if a site says nothing about them).
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
