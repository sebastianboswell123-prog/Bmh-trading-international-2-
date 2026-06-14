# BMH Trading International

Marketing + stock website for BMH Trading International. React (Vite) front-end, content managed in Sanity, deployed on Vercel.

## Stack

- **Front-end:** React 19 + Vite, React Router, Tailwind, Framer Motion
- **CMS:** Sanity (hosted Studio) — stock/equipment is editable by the client
- **Hosting:** Vercel (auto-deploys from `main`)

## Local development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
```

## Content management (Sanity)

The client manages all machines/stock here — no code or deploy needed:

- **Dashboard:** https://bmh-trading.sanity.studio/
- **Project ID:** `k5kbfta8`  •  **Dataset:** `production`
- **Manage / members / tokens:** https://www.sanity.io/manage/project/k5kbfta8

Content edits go live on the site within seconds (served via Sanity's CDN).
The website reads stock through `src/sanity/` (`client.js`, `image.js`, `equipment.js`).

Project ID and dataset are public, publishable values. `src/sanity/client.js`
falls back to them, so the app works with or without the `VITE_SANITY_*` env vars.

### One-time data migration

`scripts/migrate-to-sanity.mjs` seeded the initial 13 machines. It is not needed
for normal operation. To re-run:

```bash
SANITY_WRITE_TOKEN=xxx node scripts/migrate-to-sanity.mjs
```

## Deployment (Vercel)

- Framework preset: Vite. Build: `npm run build`, output: `dist/` (see `vercel.json`).
- `vercel.json` adds an SPA rewrite so deep links (e.g. `/plant`) work on refresh.
- Optional env vars (Project Settings → Environment Variables):
  `VITE_SANITY_PROJECT_ID=k5kbfta8`, `VITE_SANITY_DATASET=production`.

## Outstanding production setup (needs account access)

- **Custom domain:** connect `bmhtradinginternational.com` in Vercel + point DNS at
  the registrar. CORS for the domain is already allowed in Sanity.
- **Contact form email:** `src/utils/emailService.js` still has EmailJS placeholders.
  Add the EmailJS Service/Template/Public keys for the contact form to send.
  (The per-machine "Enquire" buttons already work — they open WhatsApp.)
