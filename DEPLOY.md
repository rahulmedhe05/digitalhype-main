# Digital Hype — Astro JS

## Quick Start

```bash
# Requires Node 22+
export NVM_DIR="$HOME/.nvm" && . "$NVM_DIR/nvm.sh" && nvm use 22

npm install
npm run dev      # localhost:4321
npm run build    # generates /dist (211 pages)
npm run preview  # preview built output
```

## Project Structure

```
src/
├── data/
│   ├── site.ts        ← domain, GTM/GA4/Pixel IDs (CHANGE THESE)
│   ├── industries.ts  ← 14 industry definitions + FAQ content
│   └── emirates.ts    ← 7 emirate definitions with geo data
├── layouts/
│   └── BaseLayout.astro  ← shared head, nav, footer, schema, tracking
├── components/
│   ├── Nav.astro
│   └── Footer.astro
├── pages/
│   ├── index.astro                                          ← Homepage
│   ├── [service].astro                                      ← 14 industry hub pages
│   ├── lead-generation-for-[industry]-in-[emirate].astro   ← 98 EN pSEO pages
│   └── ar/
│       └── lead-generation-for-[industry]-in-[emirate].astro ← 98 AR pSEO pages
└── styles/
    └── global.css   ← Tailwind v4 + custom classes (35KB built vs 3MB CDN)
```

## Before Deploying

1. **Update tracking IDs** in `src/data/site.ts`:
   - `gtmId`: your real Google Tag Manager ID
   - `ga4Id`: your real GA4 measurement ID
   - `pixelId`: your real Meta Pixel ID

2. **Deploy to Vercel**:
   ```bash
   npm install -g vercel
   vercel --prod
   ```
   Vercel auto-detects Astro. Set `Node.js Version = 22.x` in Vercel project settings.

3. **Set up Google Indexing API** (from original project):
   ```bash
   cd ../digitalhype-main
   node google-indexing-api.cjs
   ```

## Page Count (211 total)

| Template | Pages |
|----------|-------|
| Homepage | 1 |
| Service hubs (EN) | 14 |
| pSEO lead-gen (EN) | 98 |
| pSEO lead-gen (AR) | 98 |
| **Total** | **211** |

## CSS Performance

| | Size |
|--|--|
| Old (Tailwind CDN) | ~3,200 KB |
| New (built Tailwind v4) | **35 KB** |
| Reduction | **99% smaller** |

## Adding More Pages

Add static pages to `src/pages/` as `.astro` files.
Add blog posts to `src/pages/blog/` — they auto-get canonical, og:image, and Twitter card via BaseLayout.

## Adding New Industries or Emirates

Edit `src/data/industries.ts` or `src/data/emirates.ts`.
The dynamic routes auto-generate all combinations — no extra files needed.
