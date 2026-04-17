import Layout from '@/components/Layout'
import Link from 'next/link'

// ─── Decorative floating dots ───────────────────────────────
function FloatingDots() {
  const dots = [
    { size: 80, color: '#E8629A', top: '8%',  left: '3%',  delay: '0s',   dur: '5s'  },
    { size: 50, color: '#9B8EC4', top: '20%', left: '90%', delay: '0.8s', dur: '6s'  },
    { size: 35, color: '#F4A261', top: '60%', left: '95%', delay: '1.5s', dur: '4.5s'},
    { size: 60, color: '#52B788', top: '75%', left: '2%',  delay: '0.4s', dur: '7s'  },
    { size: 25, color: '#74C0E8', top: '40%', left: '92%', delay: '2s',   dur: '5.5s'},
    { size: 45, color: '#E8629A', top: '85%', left: '88%', delay: '1s',   dur: '6.5s'},
  ]
  return (
    <div className="pointer-events-none" aria-hidden="true">
      {dots.map((d, i) => (
        <div
          key={i}
          className="absolute rounded-full opacity-25"
          style={{
            width: d.size, height: d.size,
            background: d.color,
            top: d.top, left: d.left,
            animation: `float ${d.dur} ease-in-out infinite`,
            animationDelay: d.delay,
          }}
        />
      ))}
    </div>
  )
}

// ─── Hero ────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden dot-pattern">
      <FloatingDots />

      {/* Big decorative circle */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-brand-pink/10 pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-brand-lavender/10 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <div className="inline-flex items-center gap-2 bg-brand-pink/10 text-brand-pink px-4 py-2 rounded-full text-sm font-bold mb-6">
            <span>🌟</span> Pre-school Dance for Ages 2–5
          </div>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl text-brand-dark leading-tight mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Welcome to<br />
            <span className="text-brand-pink">Dancing</span>{' '}
            <span className="text-brand-lavender">Dots</span>
          </h1>
          <p className="text-lg text-brand-dark/70 leading-relaxed mb-8 max-w-lg font-body">
            Let <strong className="text-brand-pink">Ballerina Bear</strong> and{' '}
            <strong className="text-brand-lavender">Hip Hop Hippo</strong> guide your little
            dancers through the magical world of ballet and hip hop. Complete class packages
            with a one-time cost and a lifetime licence.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/shop" className="btn-primary">
              <span>🛍️</span> Shop Now
            </Link>
            <Link href="/about" className="btn-secondary">
              Learn More →
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-6 mt-10">
            {[
              { icon: '♾️', label: 'Lifetime Licence' },
              { icon: '🌍', label: 'Used Internationally' },
              { icon: '🎵', label: 'Original Music Included' },
            ].map(b => (
              <div key={b.label} className="flex items-center gap-2 text-sm text-brand-dark/60 font-semibold">
                <span className="text-lg">{b.icon}</span> {b.label}
              </div>
            ))}
          </div>
        </div>

        {/* Characters */}
        <div className="relative flex justify-center items-end gap-6">
          {/* Ballerina Bear card */}
          <div className="card p-6 text-center w-48 animate-float flex-shrink-0">
            <div className="text-7xl mb-3">🐻</div>
            <div className="text-brand-pink font-bold" style={{ fontFamily: 'var(--font-display)' }}>
              Ballerina Bear
            </div>
            <div className="text-xs text-brand-dark/50 mt-1">Ballet</div>
            <Link href="/shop/ballerina-bear"
              className="mt-3 block text-xs bg-brand-pink/10 text-brand-pink px-3 py-1.5 rounded-full font-bold hover:bg-brand-pink hover:text-white transition-all">
              View →
            </Link>
          </div>

          {/* Hip Hop Hippo card */}
          <div className="card p-6 text-center w-48 animate-float2 flex-shrink-0 mb-8">
            <div className="text-7xl mb-3">🦛</div>
            <div className="text-brand-lavender font-bold" style={{ fontFamily: 'var(--font-display)' }}>
              Hip Hop Hippo
            </div>
            <div className="text-xs text-brand-dark/50 mt-1">Hip Hop</div>
            <Link href="/shop/hip-hop-hippo"
              className="mt-3 block text-xs bg-brand-lavender/10 text-brand-lavender px-3 py-1.5 rounded-full font-bold hover:bg-brand-lavender hover:text-white transition-all">
              View →
            </Link>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0 wavy-divider">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 40 Q180 0 360 40 Q540 80 720 40 Q900 0 1080 40 Q1260 80 1440 40 L1440 80 L0 80 Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}

// ─── Classes Section ─────────────────────────────────────────
function ClassesSection() {
  const classes = [
    {
      name: 'Ballerina Bear',
      emoji: '🐻',
      tagline: 'Ballet for little dreamers',
      description: 'Twirl and spin alongside Ballerina Bear through enchanting adventures and tales. Through action songs and original music, Ballerina Bear captivates the hearts of young dancers.',
      href: '/shop/ballerina-bear',
      color: 'brand-pink',
      bg: 'bg-brand-pink/5',
      border: 'border-brand-pink/20',
      btn: 'bg-brand-pink hover:bg-brand-pink/90',
      badge: 'bg-brand-pink/10 text-brand-pink',
    },
    {
      name: 'Hip Hop Hippo',
      emoji: '🦛',
      tagline: 'Hip Hop for little groovers',
      description: 'Dive into the world of funky street moves, grooving to the latest music. Hip Hop Hippo leads the way with exciting adventures, action-packed songs, and high-fives all round.',
      href: '/shop/hip-hop-hippo',
      color: 'brand-lavender',
      bg: 'bg-brand-lavender/5',
      border: 'border-brand-lavender/20',
      btn: 'bg-brand-lavender hover:bg-brand-lavender/90',
      badge: 'bg-brand-lavender/10 text-brand-lavender',
    },
  ]

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 fade-up">
          <h2 className="section-heading mb-4">Our Classes</h2>
          <p className="text-brand-dark/60 text-lg max-w-xl mx-auto">
            Two loveable characters, two complete syllabuses — everything you need to teach pre-school dance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {classes.map((c, i) => (
            <div key={c.name} className={`fade-up card ${c.bg} border ${c.border} p-8`} style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="text-8xl mb-6 text-center">{c.emoji}</div>
              <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold mb-3 ${c.badge}`}>
                {c.tagline}
              </div>
              <h3 className="text-3xl mb-3" style={{ fontFamily: 'var(--font-display)' }}>{c.name}</h3>
              <p className="text-brand-dark/60 mb-6 leading-relaxed">{c.description}</p>

              <ul className="space-y-2 mb-8">
                {['Lifetime licence', 'Full syllabus', 'Original music (no PRS)', 'Logos & brand materials', 'Reward charts'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm text-brand-dark/70">
                    <span className="text-green-500 font-bold">✓</span> {item}
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-brand-dark/40 line-through text-sm">£399</span>
                  <span className="text-2xl font-bold text-brand-dark ml-2">£329</span>
                </div>
                <Link href={c.href} className={`${c.btn} text-white px-6 py-3 rounded-full font-bold transition-all hover:shadow-lg`}>
                  Buy Now →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Features Section ────────────────────────────────────────
function FeaturesSection() {
  const features = [
    { icon: '📦', title: 'Complete Class Packages', body: 'From syllabus and music to logos, advertising materials, and child reward charts — everything you need is included.' },
    { icon: '🌍', title: 'Available Internationally', body: 'We own the copyright for all materials, ensuring unrestricted international use. Delivered electronically at checkout.' },
    { icon: '🩰', title: 'Created by Dance Teachers', body: 'Meticulously crafted by dance teachers who understand the real needs of businesses like yours.' },
    { icon: '♾️', title: 'Lifetime Licence', body: 'One payment, one licence — forever. No annual renewals, no surprise fees. Teach for as long as you like.' },
    { icon: '💸', title: 'Genuinely Affordable', body: 'We believe dance teachers deserve fair pricing. No inflated market-rate charges — just great value.' },
    { icon: '🎵', title: 'Original Music Included', body: 'Every package includes purpose-made music tracks. No PRS music licence required — just press play and teach.' },
  ]

  return (
    <section className="py-24 bg-brand-cream dot-pattern">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 fade-up">
          <h2 className="section-heading mb-4">Why Dancing Dots?</h2>
          <p className="text-brand-dark/60 text-lg max-w-xl mx-auto">
            Everything a dance teacher needs to run brilliant pre-school classes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="fade-up card bg-white p-6"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-bold mb-2 text-brand-dark" style={{ fontFamily: 'var(--font-display)' }}>{f.title}</h3>
              <p className="text-brand-dark/60 text-sm leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Stats Section ───────────────────────────────────────────
function StatsSection() {
  const stats = [
    { value: '500+', label: 'Ballerina Bear Classes Taught', emoji: '🐻' },
    { value: '400+', label: 'Hip Hop Hippo Classes Taught', emoji: '🦛' },
    { value: '200+', label: 'Dance Schools Worldwide', emoji: '🌍' },
  ]

  return (
    <section className="py-20 bg-brand-dark text-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {stats.map((s, i) => (
            <div key={s.label} className="fade-up" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="text-4xl mb-2">{s.emoji}</div>
              <div className="text-5xl font-bold mb-2 text-brand-peach" style={{ fontFamily: 'var(--font-display)' }}>
                {s.value}
              </div>
              <div className="text-white/60 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Testimonial ─────────────────────────────────────────────
function TestimonialSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center fade-up">
        <div className="text-6xl mb-6">💬</div>
        <blockquote className="text-2xl md:text-3xl text-brand-dark/80 leading-relaxed mb-8 italic" style={{ fontFamily: 'var(--font-display)' }}>
          "It's truly inspiring to observe the enthusiasm of the little dancers as they engage with the characters and their classmates."
        </blockquote>
        <div className="flex items-center justify-center gap-3">
          <div className="w-12 h-12 rounded-full bg-brand-pink/20 flex items-center justify-center text-xl">🩰</div>
          <div className="text-left">
            <div className="font-bold text-brand-dark">Andi McCormack</div>
            <div className="text-brand-dark/50 text-sm">Dance School Owner</div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── CTA Section ─────────────────────────────────────────────
function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-brand-pink via-brand-lavender to-brand-sky text-white relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="relative max-w-3xl mx-auto px-6 text-center fade-up">
        <div className="text-5xl mb-6">🎉</div>
        <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'var(--font-display)' }}>
          Ready to Start Dancing?
        </h2>
        <p className="text-white/80 text-lg mb-10 leading-relaxed">
          Join hundreds of dance teachers worldwide who use Dancing Dots to run engaging, 
          effortless pre-school dance classes. One payment, lifetime licence.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/shop" className="px-8 py-4 bg-white text-brand-pink rounded-full font-bold text-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
            🛍️ Shop Now
          </Link>
          <Link href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-brand-pink transition-all">
            Got a Question?
          </Link>
        </div>
      </div>
    </section>
  )
}

// ─── Page ────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <Layout
      title={null}
      description="Let Ballerina Bear and Hip Hop Hippo guide your little dancers through the magical world of ballet and hip hop. Complete pre-school dance packages with lifetime licences."
    >
      <Hero />
      <ClassesSection />
      <FeaturesSection />
      <StatsSection />
      <TestimonialSection />
      <CTASection />
    </Layout>
  )
}
