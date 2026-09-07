# Deploying qori.land

The hub is a Next.js 14 app at the root of this repository. There is no
`vercel.json`: the Next.js defaults are the whole configuration, and nothing
here needs a rewrite, a header or a cron.

## Live

Deployed to Vercel (team `lucas-devops`, project `qori-hub`, root directory
the repository root, framework preset Next.js, Node 24) and serving at
**https://qori.land**. The Vercel Git integration is connected to
`lucasrucu/qori-hub`: every push to `main` builds and goes live as the
production deployment, and every other branch gets a preview URL of its own,
which is where a copy change is checked before it is merged.

Production alias: `qori-hub-lucas-devops.vercel.app`. The `main` branch
alias: `qori-hub-git-main-lucas-devops.vercel.app`.

## Redeploy

Push to `main`. Nothing else is needed.

To deploy from a checkout without a push, signed in to the `lucas-devops`
scope:

```bash
vercel deploy --prod --yes --scope lucas-devops
```

The first sign-in uses `vercel login` (device-code flow). `.vercel/` is
gitignored, so the link is local to the machine that ran it.

## DNS

`qori.land` is Vercel-managed (nameservers point at Vercel) and the apex is
attached to this project. The subdomains belong to their own projects in the
same team, and each record was provisioned automatically when its domain was
attached to that project:

| Host | Vercel project | Repository |
|---|---|---|
| finance.qori.land | `financial-dashboard` | `lucasrucu/Financial-Dashboard` |
| career.qori.land | `career-agent` | `lucasrucu/career-agent` |
| links.qori.land | `snip` | `lucasrucu/snip` |
| rapidpdf.qori.land | `rapid-pdf` (root directory `landing`) | `lucasrucu/rapid-pdf` |

If the zone were ever NOT on Vercel, the record to add at the DNS host for
the apex would be an `A` record to `76.76.21.21`, and each subdomain a
`CNAME` to `cname.vercel-dns.com`.

## Search Console

`app/layout.tsx` carries an empty `verification` block with a TODO. Google
Search Console verification for qori.land needs Lucas's own token, which only
his Google account can generate. Two ways to close it:

1. Paste the HTML-tag method's `content` value into that block as
   `google: "..."` and push.
2. Skip the code change and verify the domain with a DNS TXT record in the
   Vercel DNS zone for `qori.land`.

Until one of those happens the site is not verified in Search Console, which
costs nothing at runtime and only hides the search-performance report.
