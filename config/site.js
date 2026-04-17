// ============================================================
// DANCING DOTS — SITE CONFIG
// Edit this file to update global settings, SEO defaults,
// navigation, social links, and contact info.
// ============================================================

const siteConfig = {
  // ── Brand ─────────────────────────────────────────────────
  name:    'Dancing Dots',
  tagline: 'Pre-school Dance Class Syllabuses',
  url:     'https://dancingdots.co.uk',

  // ── Contact ───────────────────────────────────────────────
  email: 'hello@dancingdots.co.uk',

  // ── Social ────────────────────────────────────────────────
  social: {
    facebook:  'https://www.facebook.com/dancingdots1',
    instagram: 'https://www.instagram.com/dancing_dots/',
  },

  // ── Navigation ────────────────────────────────────────────
  nav: [
    { label: 'Home',    href: '/' },
    { label: 'About',   href: '/about' },
    { label: 'Shop',    href: '/shop' },
    { label: 'Blog',    href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],

  // ── Global SEO Defaults ───────────────────────────────────
  // These apply sitewide unless overridden per-page in content/pages/
  seo: {
    defaultTitle:       'Dancing Dots – Pre-school Dance Class Syllabuses',
    titleTemplate:      '%s | Dancing Dots',
    defaultDescription: 'Dancing Dots provides complete pre-school dance class packages — featuring Ballerina Bear and Hip Hop Hippo — for dance teachers worldwide. One-time cost, lifetime licence.',
    ogImage:            '/images/og-default.png',
    twitterCard:        'summary_large_image',
  },

  // ── Footer ────────────────────────────────────────────────
  footer: {
    tagline: 'Dancing Dots is your ultimate destination for all your pre-school dance class needs.',
    links: [
      { label: 'Contact Us',          href: '/contact' },
      { label: 'Refunds & Returns',   href: '/refund-returns' },
      { label: 'Shop',                href: '/shop' },
    ],
  },
}

module.exports = siteConfig
