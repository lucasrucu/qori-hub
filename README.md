# Qori Hub

The umbrella landing page for [qori.land](https://qori.land) — a single-page index of the tools
Lucas Ruiz builds and uses: the Financial Dashboard, Career Agent, and Snip.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (Qori "Sovereign" brand tokens)
- Geist Sans / Mono via `next/font/local`

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

Static marketing page — no auth, no database, no API routes.
