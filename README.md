# Dancing Dots Website

> Pre-school dance class syllabuses — [dancingdots.co.uk](https://dancingdots.co.uk)

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Fonts:** Fredoka One (display) + Nunito (body) via Google Fonts
- **Deployment:** Vercel (auto-deploys on push to `main`)
- **Content:** YAML files in `/content/` + hardcoded in page components

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# → http://localhost:3000

# Build for production
npm run build
npm start
```

---

## Project Structure

```
dancing-dots/
├── config/site.js          ← Global settings (name, nav, SEO, social, footer)
├── content/                ← All editable copy (YAML)
│   ├── pages/              ← Home, About, Contact, Policies
│   └── products/           ← Ballerina Bear, Hip Hop Hippo
├── src/
│   ├── components/         ← Layout (Nav + Footer)
│   ├── pages/              ← All page routes
│   └── styles/             ← Global CSS
├── public/
│   └── images/             ← Static images
└── CLAUDE.md               ← AI management brief
```

---

## Making Changes

| What to change | Where |
|---|---|
| Homepage copy | `content/pages/home.yaml` |
| Product prices / descriptions | `content/products/*.yaml` + update `src/pages/shop/*.js` |
| SEO titles / meta descriptions | `seo:` block in each content `.yaml` file |
| Global SEO defaults | `config/site.js` → `seo` |
| Nav links | `config/site.js` → `nav` |
| Social links / email | `config/site.js` → `email`, `social` |
| Add a blog post | `src/pages/blog/index.js` + `src/pages/blog/[slug].js` |
| Brand colours | `tailwind.config.js` → `theme.extend.colors.brand` |

---

## Deployment

The site is deployed on **Vercel** and auto-deploys on every push to `main`.

```bash
git add .
git commit -m "Your update message"
git push origin main
# → Vercel picks it up and deploys automatically
```

---

## Adding Images

Place images in `/public/images/`. Reference them in code as `/images/filename.png`.

The site expects:
- `/public/images/ballerina-bear.png` — main character image
- `/public/images/hip-hop-hippo.png` — main character image  
- `/public/images/og-default.png` — Open Graph share image (1200×630)

---

## Contact Form

The contact form in `src/pages/contact.js` currently simulates a success response.
To wire it up for real, replace the `handleSubmit` function with:

- **Formspree:** `fetch('https://formspree.io/f/YOUR_ID', ...)`
- **EmailJS:** Use the EmailJS SDK
- **API Route:** Create `src/pages/api/contact.js`

---

## AI Management

See `CLAUDE.md` for a full AI management brief. To update the site using Claude:
1. Open a new conversation with Claude
2. Share `CLAUDE.md` and tell Claude what you want to change
3. Claude will update the relevant files

---

*Built with ❤️ for Dancing Dots*
