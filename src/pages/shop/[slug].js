import Layout from '@/components/Layout'
import Link from 'next/link'

const products = {
  'ballerina-bear': {
    slug: 'ballerina-bear',
    name: 'Ballerina Bear',
    emoji: '🐻',
    tagline: 'Pre-school Ballet Syllabus',
    category: 'Ballet',
    shortDesc: 'The little dancers will twirl and spin alongside Ballerina Bear as she shares her enchanting adventures and tales with the children. Through action songs and original music, Ballerina Bear captivates the hearts of young dancers, fostering not only a connection with her but also encouraging interaction and togetherness among the children.',
    quote: 'It\'s truly inspiring to observe the enthusiasm of the little dancers as they engage with Ballerina Bear and their classmates.',
    accentColor: '#E8629A',
    bgLight: 'bg-pink-50',
    price: 329,
    priceOriginal: 399,
    currency: '£',
    related: 'hip-hop-hippo',
    keyPoints: [
      { title: 'Lifetime Licence', icon: '♾️', body: 'While other providers charge annually, Dancing Dots gives you a lifetime licence. Pay once, teach forever. No renewal fees.' },
      { title: 'Cost-Effective', icon: '💸', body: 'One upfront cost beats ongoing subscriptions every time. The savings over time are undeniable.' },
      { title: 'Created by Dance Teachers', icon: '🩰', body: 'Our syllabus has been meticulously crafted by real dance educators who understand what businesses like yours actually need.' },
      { title: 'No Overpricing', icon: '✅', body: 'We\'re not interested in monetising this to "market value." We believe in fair, affordable solutions for dance educators.' },
      { title: 'Optional Enhancements', icon: '🎁', body: 'Extras are available, but entirely optional. We never pressure our customers into add-ons.' },
      { title: 'International Use', icon: '🌍', body: 'We own the copyright on all materials. Teach Ballerina Bear anywhere in the world — no restrictions.' },
    ],
    packageIncludes: [
      'Lifetime licence to teach Ballerina Bear',
      'Full downloadable syllabus',
      'Complete access to the Ballerina Bear brand and logo',
      'Original music tracks for class – no music licence required (PRS)',
      'Advertising materials',
      'Child reward charts',
    ],
  },
  'hip-hop-hippo': {
    slug: 'hip-hop-hippo',
    name: 'Hip Hop Hippo',
    emoji: '🦛',
    tagline: 'Pre-school Hip Hop Syllabus',
    category: 'Hip Hop',
    shortDesc: 'In our classes, little dancers dive into the world of funky street moves, grooving to the latest music. They unleash their creativity and enhance coordination. Hip Hop Hippo leads the way, sharing exciting adventures and stories accompanied by action-packed songs set to original music. The children absolutely adore this class.',
    quote: 'It\'s truly inspiring to see their confidence grow as they engage, exchange high-fives with Hip Hop Hippo, and connect with their classmates.',
    accentColor: '#9B8EC4',
    bgLight: 'bg-purple-50',
    price: 329,
    priceOriginal: 399,
    currency: '£',
    related: 'ballerina-bear',
    keyPoints: [
      { title: 'Lifetime Licence', icon: '♾️', body: 'While other providers charge annually, Dancing Dots gives you a lifetime licence. Pay once, teach forever. No renewal fees.' },
      { title: 'Cost-Effective', icon: '💸', body: 'One upfront cost beats ongoing subscriptions every time. The savings over time are undeniable.' },
      { title: 'Created by Dance Teachers', icon: '🦛', body: 'Our syllabus has been meticulously crafted by real dance educators who understand what businesses like yours actually need.' },
      { title: 'No Overpricing', icon: '✅', body: 'We\'re not interested in monetising this to "market value." We believe in fair, affordable solutions for dance educators.' },
      { title: 'Optional Enhancements', icon: '🎁', body: 'Extras are available, but entirely optional. We never pressure our customers into add-ons.' },
      { title: 'International Use', icon: '🌍', body: 'We own the copyright on all materials. Teach Hip Hop Hippo anywhere in the world — no restrictions.' },
    ],
    packageIncludes: [
      'Lifetime licence to teach Hip Hop Hippo',
      'Full downloadable syllabus',
      'Complete access to the Hip Hop Hippo brand and logo',
      'Original music tracks for class – no music licence required (PRS)',
      'Advertising materials',
      'Child reward charts',
    ],
  },
}

export async function getStaticPaths() {
  return {
    paths: Object.keys(products).map(slug => ({ params: { slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const product = products[params.slug] || null
  return { props: { product } }
}

export default function ProductPage({ product }) {
  if (!product) return null
  const related = products[product.related]

  return (
    <Layout
      title={product.name}
      description={`${product.name} – complete pre-school dance class package. ${product.shortDesc.slice(0, 120)}...`}
    >
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-3 text-sm text-brand-dark/40">
          <Link href="/" className="hover:text-brand-pink transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/shop" className="hover:text-brand-pink transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span style={{ color: product.accentColor }}>{product.name}</span>
        </div>
      </div>

      {/* Hero */}
      <section className={`${product.bgLight} py-20`}>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center">
            <div className="text-[160px] leading-none animate-float">{product.emoji}</div>
          </div>
          <div>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-bold mb-4"
              style={{ background: product.accentColor + '20', color: product.accentColor }}>
              🏷️ On Sale
            </span>
            <h1 className="text-5xl md:text-6xl mb-3 text-brand-dark" style={{ fontFamily: 'var(--font-display)' }}>
              {product.name}
            </h1>
            <p className="text-brand-dark/50 font-semibold uppercase tracking-widest text-sm mb-6">{product.tagline}</p>
            <p className="text-brand-dark/70 leading-relaxed mb-8">{product.shortDesc}</p>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-brand-dark/30 line-through text-lg">{product.currency}{product.priceOriginal}</span>
              <span className="text-5xl font-bold text-brand-dark" style={{ fontFamily: 'var(--font-display)' }}>
                {product.currency}{product.price}
              </span>
            </div>
            <p className="text-brand-dark/40 text-sm mb-8">One-time payment · Lifetime licence · Instant digital delivery</p>

            {/* Add to basket - links to WooCommerce */}
            <a
              href={`https://dancingdots.co.uk/product/${product.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mb-4 inline-flex"
              style={{ background: product.accentColor }}
            >
              🛒 Add to Basket
            </a>
            <p className="text-xs text-brand-dark/30 mt-3">Secure checkout via the Dancing Dots store.</p>
          </div>
        </div>
      </section>

      {/* Package includes */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl mb-8 text-brand-dark" style={{ fontFamily: 'var(--font-display)' }}>
              📦 What's Included
            </h2>
            <ul className="space-y-4">
              {product.packageIncludes.map(item => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold"
                    style={{ background: product.accentColor }}>✓</span>
                  <span className="text-brand-dark/70">{item}</span>
                </li>
              ))}
            </ul>

            {/* Age Range */}
            <div className="mt-10 bg-brand-cream rounded-2xl p-6">
              <h4 className="font-bold text-brand-dark mb-3">👶 Age Range</h4>
              <p className="text-brand-dark/60 text-sm mb-3">Classes are tailored for budding dancers aged 2–5 years.</p>
              <div className="flex gap-2 flex-wrap">
                {['2–3 Years', '3–4 Years', '4–5 Years'].map(age => (
                  <span key={age} className="text-sm px-4 py-1.5 bg-white rounded-full text-brand-dark/60 border border-gray-200 font-medium">{age}</span>
                ))}
              </div>
              <p className="text-brand-dark/40 text-xs mt-3">For smaller classes, all ages can be taught together.</p>
            </div>
          </div>

          {/* Key Points */}
          <div>
            <h2 className="text-3xl mb-8 text-brand-dark" style={{ fontFamily: 'var(--font-display)' }}>
              ⭐ Key Points
            </h2>
            <div className="space-y-5">
              {product.keyPoints.map(kp => (
                <div key={kp.title} className="flex gap-4">
                  <span className="text-2xl flex-shrink-0">{kp.icon}</span>
                  <div>
                    <h4 className="font-bold text-brand-dark mb-1">{kp.title}</h4>
                    <p className="text-brand-dark/60 text-sm leading-relaxed">{kp.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16" style={{ background: product.accentColor + '10' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-2xl text-brand-dark/70 italic mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            "{product.quote}"
          </p>
          <p className="text-brand-dark/40 text-sm font-semibold uppercase tracking-wider">Dancing Dots Teacher</p>
        </div>
      </section>

      {/* Related */}
      {related && (
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl mb-4 text-brand-dark" style={{ fontFamily: 'var(--font-display)' }}>You Might Also Like</h2>
            <p className="text-brand-dark/50 mb-10">Add another syllabus to your teaching toolkit.</p>
            <div className="card max-w-md mx-auto p-8 flex flex-col items-center">
              <div className="text-8xl mb-4">{related.emoji}</div>
              <h3 className="text-2xl mb-2" style={{ fontFamily: 'var(--font-display)', color: related.accentColor }}>{related.name}</h3>
              <p className="text-brand-dark/50 text-sm mb-6">{related.tagline}</p>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-brand-dark/30 line-through">{related.currency}{related.priceOriginal}</span>
                <span className="text-2xl font-bold text-brand-dark">{related.currency}{related.price}</span>
              </div>
              <Link href={`/shop/${related.slug}`}
                className="px-6 py-3 rounded-full text-white font-bold transition-all hover:shadow-lg hover:-translate-y-0.5"
                style={{ background: related.accentColor }}>
                View {related.name} →
              </Link>
            </div>
          </div>
        </section>
      )}
    </Layout>
  )
}
