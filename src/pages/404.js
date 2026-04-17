import Layout from '@/components/Layout'
import Link from 'next/link'

export default function Custom404() {
  return (
    <Layout title="Page Not Found">
      <section className="min-h-screen bg-brand-cream dot-pattern flex items-center justify-center py-24">
        <div className="max-w-xl mx-auto px-6 text-center">
          <div className="text-[100px] leading-none mb-6 animate-bounce-slow">🐻</div>
          <h1 className="text-6xl text-brand-dark mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Oops!
          </h1>
          <p className="text-xl text-brand-dark/60 mb-8">
            Looks like Ballerina Bear twirled into the wrong page. Let's get you back on the right track!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn-primary">🏠 Go Home</Link>
            <Link href="/shop" className="btn-secondary">🛍️ View Classes</Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
