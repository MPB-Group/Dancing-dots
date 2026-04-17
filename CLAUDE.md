# CLAUDE.md — Dancing Dots Website Management Brief

This file tells Claude (AI) everything it needs to know to manage and update this website.
Reference this file at the start of any update session.

---

## What This Site Is

**Dancing Dots** (dancingdots.co.uk) is a pre-school dance class syllabus business. It sells
two digital products — Ballerina Bear (ballet) and Hip Hop Hippo (hip hop) — to dance teachers
worldwide. Products are digital downloads with a one-time cost and lifetime licence.

**Stack:** Next.js 14 · Tailwind CSS · Deployed on Vercel · Source on GitHub

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
│       ├── ballerina-bear.yaml  ← Ballerina Bear product details, pricing, SEO
│       └── hip-hop-hippo.yaml   ← Hip Hop Hippo product details, pricing, SEO
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
│   │       └── [slug].js    ← Individual product pages
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

## How to Make Common Changes

### ✏️ Update homepage copy
Edit `content/pages/home.yaml` — change hero heading, body text, features, stats, testimonial, CTAs.

### ✏️ Update a product price or description
Edit `content/products/ballerina-bear.yaml` or `content/products/hip-hop-hippo.yaml`.
Note: product data is **also** hardcoded in `src/pages/shop/index.js` and `src/pages/shop/[slug].js`
— update both if changing prices.

### ✏️ Update SEO titles/descriptions
- Per page: edit the `seo:` block at the top of the relevant `.yaml` content file
- Global defaults: edit `config/site.js` under the `seo:` key

### ✏️ Update contact email or social links
Edit `config/site.js` — change `email`, `social.facebook`, or `social.instagram`.

### ✏️ Update navigation
Edit `config/site.js` — change the `nav` array.

### ✏️ Add a blog post
1. Add a new entry to the `posts` array in `src/pages/blog/index.js`
2. Add the full post content to the `postContent` object in `src/pages/blog/[slug].js`
3. Fields needed: `slug`, `title`, `date`, `excerpt`, `author`, `category`, `emoji`, `content`

### ✏️ Add a new page
1. Create `src/pages/new-page.js`
2. Import and use the `Layout` component
3. Add to navigation in `config/site.js` if needed

### 🎨 Change brand colours
Edit `tailwind.config.js` under `theme.extend.colors.brand`.

### 🎨 Change fonts
Edit `src/styles/globals.css` — update the Google Fonts import URL and `--font-display`/`--font-body` variables.

---

## Brand

| Element | Value |
|---|---|
| Display font | Fredoka One (fun, rounded, friendly) |
| Body font | Nunito (clean, warm, readable) |
| Primary pink | #E8629A |
| Lavender | #9B8EC4 |
| Peach | #F4A261 |
| Mint | #52B788 |
| Sky | #74C0E8 |
| Cream | #FFF8F0 |
| Dark | #2D1B4E |
| Ballerina Bear colour | brand-pink (#E8629A) |
| Hip Hop Hippo colour | brand-lavender (#9B8EC4) |

---

## Deployment

- **Git branch:** `main`
- **Deploy:** Push to `main` → Vercel auto-deploys
- **Live URL:** https://dancingdots.co.uk

---

## Known Issues / To-Do

- [ ] About page team section needs real team photos and bios
- [ ] Add real stats to homepage counter (currently showing "500+", "400+", "200+")
- [ ] Contact form needs a real handler (Formspree, EmailJS, or Next.js API route)
- [ ] Add a real testimonials section with multiple quotes
- [ ] Add actual product images to `/public/images/`
- [ ] Replace placeholder OG image at `/public/images/og-default.png`
- [ ] Consider splitting Privacy Policy and Refund Policy onto separate pages
- [ ] Currency: currently showing £ (GBP) — original site used $ (USD). Confirm with owner.
- [ ] Add Google Analytics or Plausible tracking
- [ ] Blog posts are currently placeholder — replace with real content

---

## Key Contacts

| Role | Contact |
|---|---|
| Owner | hello@dancingdots.co.uk |
| Social | facebook.com/dancingdots1 · instagram.com/dancing_dots/ |
