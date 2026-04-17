import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import siteConfig from '../../config/site'

function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl">🩰</span>
          <span
            className="text-xl text-brand-dark group-hover:text-brand-pink transition-colors"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Dancing Dots
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {siteConfig.nav.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-2 rounded-full text-brand-dark/70 hover:text-brand-pink hover:bg-brand-pink/10 font-semibold transition-all text-sm"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/shop" className="ml-2 px-5 py-2 bg-brand-pink text-white rounded-full font-bold text-sm hover:bg-brand-pink/90 hover:shadow-md transition-all">
            Buy Now
          </Link>
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2 rounded-lg text-brand-dark"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className={`w-5 h-0.5 bg-brand-dark transition-all mb-1 ${open ? 'rotate-45 translate-y-1.5' : ''}`} />
          <div className={`w-5 h-0.5 bg-brand-dark transition-all mb-1 ${open ? 'opacity-0' : ''}`} />
          <div className={`w-5 h-0.5 bg-brand-dark transition-all ${open ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 pb-6 pt-2">
          {siteConfig.nav.map(item => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-brand-dark/80 hover:text-brand-pink font-semibold border-b border-gray-50"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/shop"
            onClick={() => setOpen(false)}
            className="mt-4 block text-center px-6 py-3 bg-brand-pink text-white rounded-full font-bold hover:bg-brand-pink/90 transition-all"
          >
            Buy Now
          </Link>
        </div>
      )}
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      {/* Wave top */}
      <div className="wavy-divider">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 30 Q180 0 360 30 Q540 60 720 30 Q900 0 1080 30 Q1260 60 1440 30 L1440 60 L0 60 Z" fill="#2D1B4E"/>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🩰</span>
              <span className="text-xl" style={{ fontFamily: 'var(--font-display)' }}>Dancing Dots</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">{siteConfig.footer.tagline}</p>
            <div className="flex gap-3 mt-4">
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-pink transition-colors flex items-center justify-center text-sm">f</a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-pink transition-colors flex items-center justify-center text-sm">ig</a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4 text-white/80 text-sm uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-2">
              {siteConfig.footer.links.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/60 hover:text-brand-peach transition-colors text-sm">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-white/80 text-sm uppercase tracking-widest">Say Hello</h4>
            <a href={`mailto:${siteConfig.email}`} className="text-white/60 hover:text-brand-peach transition-colors text-sm">
              {siteConfig.email}
            </a>
            <p className="text-white/40 text-xs mt-6">© {new Date().getFullYear()} Dancing Dots. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function Layout({ children, title, description }) {
  const seo = siteConfig.seo
  const pageTitle = title
    ? seo.titleTemplate.replace('%s', title)
    : seo.defaultTitle
  const pageDesc = description || seo.defaultDescription

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:image" content={seo.ogImage} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content={seo.twitterCard} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="pt-16">{children}</main>
      <Footer />
    </>
  )
}
