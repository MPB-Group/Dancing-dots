# CLAUDE.md — Dancing Dots Website Management Brief

This file tells Claude (AI) everything it needs to know to manage and update this website.
Reference this file at the start of any update session.

---

## What This Site Is

**Dancing Dots** (dancingdots.co.uk) is a pre-school dance class syllabus business. It sells
two digital products — Ballerina Bear (ballet) and Hip Hop Hippo (hip hop) — to dance teachers
worldwide. Products are digital downloads with a one-time cost and lifetime licence.

**Stack:** Next.js 14 · Tailwind CSS · Deployed on Vercel · Source on GitHub (MPB-Group/dancing-dots)

---

## Purchase Flow & File Delivery Architecture

The new Next.js site is the **storefront** — it handles all pages, SEO, and product presentation.
WooCommerce on the existing IONOS server is the **engine room** — it handles checkout, payment,
and secure file delivery.

```
Customer journey:
  New Next.js site (Vercel)
    → clicks "Buy Now"
    → redirected to WooCommerce checkout (dancingdots.co.uk/product/[slug])
    → payment processed by WooCommerce / payment gateway
    → WooCommerce emails customer download links
    → files delivered via WooCommerce force-download system
```

**This means:**
- The new site does NOT need its own checkout or payment system
- The new site does NOT need to store or serve product files
- WooCommerce continues running on IONOS even after the domain points to Vercel
- When the domain is cut over, IONOS WordPress/WooCommerce should be accessed via a subdomain
  (e.g. shop.dancingdots.co.uk) or direct IP to keep the backend accessible

### Digital Asset Storage on IONOS Server

Two types of file storage are in use:

| Type | Path | Access |
|------|------|--------|
| Music MP3s | `/wp-content/uploads/2019/08/` | Public (but obscure URLs) |
| PDFs, Videos, Logos | `/wp-content/uploads/woocommerce_uploads/` | Protected — WooCommerce force-download only |

The protected files have randomised suffixes in their filenames (e.g. `-mgqrrb.pdf`) which
provides security through obscurity. Full URLs are documented in the product YAML files.

---

## Project Structure

```
dancing-dots/
├── config/
│   └── site.js              ← Global settings: name, email, social, nav, SEO defaults, footer
│
├── content/
│   ├── pages/
│   │   ├── home.yaml        ← Homepage copy, hero, features, stats, testimonial
│   │   ├── about.yaml       ← About page copy, team, values
│   │   ├── contact.yaml     ← Contact page copy, form fields
│   │   └── refund-returns.yaml ← Privacy policy + refund policy
│   └── products/
│       ├── ballerina-bear.yaml  ← Full product details, pricing, SEO, all 31 download URLs
│       └── hip-hop-hippo.yaml   ← Full product details, pricing, SEO, all 28 download URLs
│
├── src/
│   ├── components/
│   │   └── Layout.js        ← Global Nav + Footer + <Head> SEO tags
│   ├── pages/
│   │   ├── index.js         ← Homepage
│   │   ├── about.js         ← About page
│   │   ├── contact.js       ← Contact page
│   │   ├── refund-returns.js ← Policies page
│   │   ├── 404.js           ← Custom 404
│   │   ├── _app.js          ← Global CSS + scroll animations
│   │   ├── blog/
│   │   │   ├── index.js     ← Blog listing page
│   │   │   └── [slug].js    ← Individual blog posts
│   │   └── shop/
│   │       ├── index.js     ← Shop listing page
│   │       └── [slug].js    ← Individual product pages (Buy Now → WooCommerce)
│   └── styles/
│       └── globals.css      ← Tailwind + font imports + shared CSS utilities
│
├── public/
│   └── images/              ← Static images (ballerina-bear.png, hip-hop-hippo.png, etc.)
│
├── tailwind.config.js       ← Brand colours, fonts, custom animations
├── next.config.js
└── package.json
```

---

## WooCommerce Products Reference

| Product | WC ID | SKU | Price | Files |
|---------|-------|-----|-------|-------|
| Ballerina Bear | 275 | 0001 | £375 | 31 files (11 MP3, 1 PDF syllabus, 2 logos, 6 reward charts, 11 videos) |
| Hip Hop Hippo | 276 | 0002 | £375 | 28 files (10 MP3, 1 PDF syllabus, 1 logo, 6 reward charts, 10 videos) |

Full download URLs with exact WooCommerce filenames (including randomised suffixes) are
documented in `content/products/ballerina-bear.yaml` and `content/products/hip-hop-hippo.yaml`.

---

## How to Make Common Changes

### ✏️ Update homepage copy
Edit `content/pages/home.yaml`

### ✏️ Update a product price or description
Edit `content/products/ballerina-bear.yaml` or `content/products/hip-hop-hippo.yaml`.
Also update the hardcoded price in `src/pages/shop/index.js` and `src/pages/shop/[slug].js`.

### ✏️ Update SEO titles/descriptions
- Per page: edit the `seo:` block at the top of the relevant `.yaml` content file
- Global defaults: edit `config/site.js` under the `seo:` key

### ✏️ Update contact email or social links
Edit `config/site.js`

### ✏️ Add a blog post
1. Add entry to `posts` array in `src/pages/blog/index.js`
2. Add full content to `postContent` object in `src/pages/blog/[slug].js`

### ✏️ Change the "Buy Now" checkout URL
Edit `woocommerce_checkout_url` in the relevant product YAML file.
Also update the href in `src/pages/shop/[slug].js` if hardcoded.

### 🎨 Change brand colours
Edit `tailwind.config.js` → `theme.extend.colors.brand`

---

## Brand

| Element | Value |
|---------|-------|
| Display font | Fredoka One (fun, rounded, friendly) |
| Body font | Nunito (clean, warm, readable) |
| Primary pink | #E8629A (Ballerina Bear) |
| Lavender | #9B8EC4 (Hip Hop Hippo) |
| Peach | #F4A261 |
| Mint | #52B788 |
| Sky | #74C0E8 |
| Cream | #FFF8F0 |
| Dark | #2D1B4E |

---

## Deployment

- **GitHub repo:** github.com/MPB-Group/dancing-dots (branch: main)
- **Deploy:** Push to `main` → Vercel auto-deploys
- **Live URL:** https://dancingdots.co.uk (currently pointing to IONOS — not yet cut over)
- **Staging:** Connect repo to Vercel to get a preview URL before cutting over

### Cutting Over to the New Site (when ready)
1. Connect GitHub repo to Vercel — get a `.vercel.app` preview URL
2. Test everything thoroughly on the preview URL
3. In IONOS DNS: point `dancingdots.co.uk` A record to Vercel's IP
4. Set up a subdomain (e.g. `wp.dancingdots.co.uk`) pointing to IONOS so WooCommerce
   backend remains accessible for checkout and file delivery
5. Update WooCommerce site URL in WordPress Settings if needed

---

## Known Issues / To-Do

- [ ] About page team section needs real photos and bios
- [ ] Contact form needs a real handler (Formspree recommended — free tier sufficient)
- [ ] Add real product images to `/public/images/` (ballerina-bear.png, hip-hop-hippo.png)
- [ ] Add OG share image at `/public/images/og-default.png` (1200×630px)
- [ ] Homepage stat counters show estimates — confirm real numbers with owner
- [ ] Testimonial currently text-only — original site used an image (Andi McCormack)
- [ ] Currency confirmed as GBP (£375) — original WooCommerce prices were £375 not $399
- [ ] Blog posts are placeholder — replace with real content
- [ ] Add Google Analytics or Plausible tracking
- [ ] Set up Vercel staging URL and share with owner for review before cutover
- [ ] After domain cutover: set up wp.dancingdots.co.uk subdomain for WooCommerce backend

---

## Key Contacts

| Role | Contact |
|------|---------|
| Owner | hello@dancingdots.co.uk |
| Facebook | facebook.com/dancingdots1 |
| Instagram | instagram.com/dancing_dots/ |
| WordPress admin | dancingdots.co.uk/wp-admin |
| GitHub | github.com/MPB-Group/dancing-dots |
