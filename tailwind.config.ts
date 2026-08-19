import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        positive: "hsl(var(--positive))",
        negative: "hsl(var(--negative))",
        experience: {
          DEFAULT: "hsl(var(--experience))",
          foreground: "hsl(var(--experience-foreground))",
          bright: "hsl(var(--experience-bright))",
        },
        quorum: {
          DEFAULT: "hsl(var(--quorum))",
          foreground: "hsl(var(--quorum-foreground))",
          bright: "hsl(var(--quorum-bright))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        // Tailwind v3 stops at 3xl, so the Sovereign card radius has to be
        // declared here or `rounded-4xl` is silently inert.
        "4xl": "2rem",
      },
      // Load-bearing. app/layout.tsx publishes these two variables through
      // next/font/local, and without this mapping `font-sans` falls back to
      // the browser default: Geist downloads on every page load and never
      // draws. See references/design-systems.md, the Sovereign web standard.
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
