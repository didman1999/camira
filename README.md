# SecureVision — متجر كاميرات المراقبة

Arabic RTL e-commerce homepage for a security cameras store.
Next.js (App Router) · TypeScript · Tailwind CSS v4 · Lucide icons · Cairo font.

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build + type check
npm run start      # serve the production build
```

## Project structure

```
src/
  app/            layout (RTL, font, SEO), page (homepage), globals.css (design tokens)
  components/
    layout/       Header, TopBar, SearchBar, MobileMenu, CartDrawer, SiteFooter
    home/         Hero, TrustFeatures, CategoriesSection, BestSellers, PromoBanners, Brands
    ui/           Logo, ProductCard, CategoryCard, SectionHeader (reusable)
  context/        StoreContext — cart + favourites (React state, saved in localStorage)
  data/           Mock data: products.ts, catalog.ts (categories, brands, nav)
  services/       catalog.ts — the ONLY place that reads data (swap for a real API later)
  lib/            utils (SAR price formatting)
  types/          Shared TypeScript types
public/images/    Product, category, hero and banner images
```

**Future backend:** change the function bodies in `src/services/catalog.ts` to call
`process.env.NEXT_PUBLIC_API_BASE_URL`. Components stay the same.

## Environment variables

Copy `.env.example` to `.env.local` to work locally. In production, set the values in the hosting dashboard.
`.env*` files are git-ignored. **Never commit secrets.** Only `NEXT_PUBLIC_*` variables reach the browser,
so never put private keys in them.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Public URL (used for SEO metadata) |
| `NEXT_PUBLIC_SITE_NAME` | Store name |
| `NEXT_PUBLIC_API_BASE_URL` | Future backend API (empty for now) |
| `NEXT_OUTPUT` | Set to `export` for a static HTML build |

---

## Stage 1 — Client preview (GitHub + Vercel)

1. Install Git: <https://git-scm.com/download/win>
2. Initialise and commit:
   ```bash
   git init
   git add .
   git commit -m "Initial homepage"
   git branch -M main
   ```
3. Create a **private** repo on GitHub (no README), then:
   ```bash
   git remote add origin https://github.com/<user>/securevision-store.git
   git push -u origin main
   ```
4. On <https://vercel.com> → **Add New → Project** → import the repo.
   Framework: Next.js (auto-detected). Add the environment variables from the table above. Then click **Deploy**.
5. From then on, every push to `main` updates the preview automatically. Other branches get their own preview URLs.

No Vercel-specific packages or services are used, so the project is not tied to Vercel.

## Stage 2 — Production (Hostinger)

First check which Hostinger plan the client has.

### Option A — Plan supports Node.js (VPS or Node.js web app hosting)
```bash
npm ci
npm run build
npm run start        # listens on PORT (default 3000)
```
On a VPS, run it behind Nginx with a process manager (e.g. `pm2 start npm --name securevision -- start`).
Set the environment variables on the server.

### Option B — Shared hosting without Node.js (static files only)
Build a static version locally:
```powershell
$env:NEXT_OUTPUT="export"; npm run build
```
Then upload the contents of the generated `out/` folder to `public_html/` (File Manager or FTP).
Limitations: no server-side features (API routes, on-demand image optimisation). The current homepage works fully as static files.
