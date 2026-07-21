import type { Metadata } from "next";
import localFont from "next/font/local";

import { cn } from "@/lib/utils";

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const TITLE = "Lucas Ruiz — AI & Automation Engineer";
const DESCRIPTION =
  "I build AI agents and automations that kill manual work in data-heavy industrial environments. Field engineer who builds, builder who has worked the field.";

export const metadata: Metadata = {
  metadataBase: new URL("https://qori.land"),
  title: TITLE,
  description: DESCRIPTION,
  authors: [{ name: "Lucas Ruiz", url: "https://qori.land" }],
  alternates: {
    canonical: "https://qori.land",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://qori.land",
    siteName: "Lucas Ruiz",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  verification: {
    // TODO: Lucas pastes his Google Search Console verification token here,
    // e.g. google: "abc123..." (the HTML tag method's content value).
    // Alternative that needs no code change: verify the domain via a DNS TXT
    // record in the qori.land registrar instead of this meta tag.
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("scroll-smooth", geistSans.variable, geistMono.variable)}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background antialiased">{children}</body>
    </html>
  );
}
