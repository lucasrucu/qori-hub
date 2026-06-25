<div align="center">

<img src="app/icon.svg" width="72" height="72" alt="Qori" />

# Qori

**I build tools I actually use.**

[![Next.js](https://img.shields.io/badge/Next.js-14-000000?logo=next.js&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind](https://img.shields.io/badge/Tailwind-CSS-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?logo=vercel&logoColor=white)](https://vercel.com)

### [▶ Visit qori.land →](https://qori.land)

</div>

<p align="center">
  <img src="docs/cover.png" alt="Qori — portfolio hub" width="900" />
</p>

---

The umbrella home for **[qori.land](https://qori.land)** — a single-page index of the tools Lucas Ruiz
builds and uses. *Qori* is Quechua for **gold**, which is where the amber accent comes from. The hub
links out to three independently deployed projects, all sharing one design system.

## What it does

A static, single-page portfolio: a hero, three project cards, and a footer. No auth, no database, no
API routes — just a clean, fast front door that points to each project.

| Project | What it is | Live |
|---|---|---|
| **Financial Dashboard** | Multi-bank personal finance with AI insights | [finance.qori.land](https://finance.qori.land) |
| **Career Agent** | AI job-search assistant: parse, match, tailor | [career.qori.land](https://career.qori.land) |
| **Snip** | Personal URL shortener with click tracking | [links.qori.land](https://links.qori.land) |

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) + TypeScript |
| UI | Tailwind CSS (Qori "Sovereign" tokens), Geist via `next/font/local` |
| Hosting | Vercel |

## Run it locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Roadmap

- New project cards as more tools ship
- A lightweight "now / building" note

---

Part of **[Qori](https://qori.land)** · built by **Lucas Ruiz**
