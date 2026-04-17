import Layout from '@/components/Layout'
import Link from 'next/link'

const values = [
  { icon: '💛', title: 'Fair Pricing', body: 'One price, one licence, forever. No annual renewals, no hidden fees. We believe dance teachers deserve better than that.' },
  { icon: '🎓', title: 'Made by Teachers', body: 'Every element of our syllabus has been tested and refined in real dance classes, by real dance educators.' },
  { icon: '🌍', title: 'Globally Available', body: 'We own the copyright on all materials — syllabus, logos, and music — meaning you can teach anywhere in the world.' },
  { icon: '🤝', title: 'Teacher Support', body: 'We\'re a small team that genuinely cares. Reach out any time and we\'ll do our best to help.' },
]

export default function AboutPage() {
  return (
    <Layout
      title="About Us"
      description="Dancing Dots was created by dance teachers, for dance teachers. Learn about our mission to make pre-school dance class planning effortless and affordable worldwide."
    >
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-brand-pink/10 via-brand-cream to-brand-lavender/10 dot-pattern text-center">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-6xl mb-6">🩰</div>
          <h1 className="text-5xl md:text-6xl text-brand-dark mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            About Dancing Dots
          </h1>
          <p className="text-xl text-brand-dark/60 leading-relaxed">
            Created by dance teachers, for dance teachers.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="fade-up">
            <h2 className="text-4xl text-brand-dark mb-6" style={{ fontFamily: 'var(--font-display)' }}>Our Mission</h2>
            <p className="text-brand-dark/60 leading-relaxed mb-4">
              Dancing Dots exists to support dance school businesses by providing high-quality, 
              affordable pre-school syllabuses with a lifetime licence.
            </p>
            <p className="text-brand-dark/60 leading-relaxed">
              Unlike other providers who charge annual fees, we believe dance teachers deserve 
              fair, transparent pricing and complete creative freedom. Pay once, teach forever.
            </p>
          </div>
          <div className="fade-up grid grid-cols-2 gap-4">
            {[
              { emoji: '🐻', label: 'Ballerina Bear', sub: 'Ballet' },
              { emoji: '🦛', label: 'Hip Hop Hippo', sub: 'Hip Hop' },
              { emoji: '🎵', label: 'Original Music', sub: 'No PRS Needed' },
              { emoji: '♾️', label: 'Lifetime Licence', sub: 'Pay Once' },
            ].map(card => (
              <div key={card.label} className="card p-5 text-center bg-brand-cream">
                <div className="text-4xl mb-2">{card.emoji}</div>
                <div className="font-bold text-brand-dark text-sm">{card.label}</div>
                <div className="text-brand-dark/40 text-xs">{card.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-brand-cream dot-pattern">
        <div className="max-w-3xl mx-auto px-6 text-center fade-up">
          <h2 className="text-4xl text-brand-dark mb-8" style={{ fontFamily: 'var(--font-display)' }}>Our Story</h2>
          <p className="text-brand-dark/60 leading-relaxed mb-6 text-lg">
            Dancing Dots was born out of frustration. As working dance teachers, we saw how much 
            time and money was being spent on annual licensing fees for pre-school syllabuses that 
            felt overpriced and over-complicated.
          </p>
          <p className="text-brand-dark/60 leading-relaxed text-lg">
            We set out to build something better: two loveable characters — <strong className="text-brand-pink">Ballerina Bear</strong> and{' '}
            <strong className="text-brand-lavender">Hip Hop Hippo</strong> — with complete class packages that any dance teacher 
            could pick up and teach from day one. No planning, no faff. Just brilliant pre-school dance.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="section-heading mb-16 fade-up">What We Stand For</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <div key={v.title} className="fade-up flex gap-5" style={{ transitionDelay: `${i * 80}ms` }}>
                <span className="text-4xl flex-shrink-0">{v.icon}</span>
                <div>
                  <h3 className="text-xl font-bold text-brand-dark mb-2" style={{ fontFamily: 'var(--font-display)' }}>{v.title}</h3>
                  <p className="text-brand-dark/60 leading-relaxed">{v.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-dark text-white text-center">
        <div className="max-w-xl mx-auto px-6 fade-up">
          <div className="text-5xl mb-6">🎉</div>
          <h2 className="text-3xl mb-4" style={{ fontFamily: 'var(--font-display)' }}>Ready to Join Us?</h2>
          <p className="text-white/60 mb-8">Explore our class packages and start teaching with Dancing Dots today.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/shop" className="px-8 py-4 bg-brand-pink text-white rounded-full font-bold hover:bg-brand-pink/90 transition-all">
              🛍️ View Classes
            </Link>
            <Link href="/contact" className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-bold hover:border-white transition-all">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
