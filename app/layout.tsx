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

export const metadata: Metadata = {
  metadataBase: new URL("https://qori.land"),
  title: "Qori — I build tools I actually use",
  description:
    "Data & automation engineer. I turn manual, repetitive work into software — on real industrial projects, and for myself.",
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
