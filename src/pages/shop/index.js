import Layout from '@/components/Layout'
import Link from 'next/link'

const products = [
  {
    slug: 'ballerina-bear',
    name: 'Ballerina Bear',
    emoji: '🐻',
    tagline: 'Pre-school Ballet Syllabus',
    description: 'The little dancers will twirl and spin alongside Ballerina Bear as she shares her enchanting adventures and tales. Through action songs and original music, Ballerina Bear captivates the hearts of young dancers.',
    price: 329,
    priceOriginal: 399,
    currency: '£',
    color: 'pink',
    bgFrom: 'from-pink-50',
    accentColor: '#E8629A',
    badge: 'Most Popular',
  },
  {
    slug: 'hip-hop-hippo',
    name: 'Hip Hop Hippo',
    emoji: '🦛',
    tagline: 'Pre-school Hip Hop Syllabus',
    description: 'Little dancers dive into the world of funky street moves, grooving to the latest music. Hip Hop Hippo leads the way with exciting adventures, action-packed songs and high-fives all round.',
    price: 329,
    priceOriginal: 399,
    currency: '£',
    color: 'lavender',
    bgFrom: 'from-purple-50',
    accentColor: '#9B8EC4',
    badge: 'Best Value',
  },
]

function ProductCard({ product }) {
  const includes = [
    'Lifetime licence to teach',
    'Full downloadable syllabus',
    'Brand & logo access',
    'Original music tracks (no PRS)',
    'Advertising materials',
    'Child reward charts',
  ]

  return (
    <div className="card overflow-visible relative">
      {product.badge && (
        <div className="absolute -top-4 left-6 px-4 py-1 rounded-full text-white text-sm font-bold shadow-md"
          style={{ background: product.accentColor }}>
          {product.badge}
        </div>
      )}

      {/* Gradient top */}
      <div className={`bg-gradient-to-br ${product.bgFrom} to-white p-8 text-center border-b border-gray-100`}>
        <div className="text-9xl mb-4">{product.emoji}</div>
        <h2 className="text-3xl mb-1" style={{ fontFamily: 'var(--font-display)', color: product.accentColor }}>
          {product.name}
        </h2>
        <p className="text-brand-dark/50 text-sm font-semibold tracking-wide uppercase">{product.tagline}</p>
      </div>

      <div className="p-8">
        <p className="text-brand-dark/60 leading-relaxed mb-6">{product.description}</p>

        <h4 className="font-bold text-brand-dark mb-3 text-sm uppercase tracking-wider">What's Included</h4>
        <ul className="space-y-2 mb-8">
          {includes.map(item => (
            <li key={item} className="flex items-center gap-2 text-sm text-brand-dark/70">
              <span className="text-green-500 font-bold">✓</span> {item}
            </li>
          ))}
        </ul>

        {/* Age range */}
        <div className="bg-brand-cream rounded-2xl p-4 mb-8">
          <p className="text-sm font-bold text-brand-dark mb-2">👶 Age Range: 2–5 Years</p>
          <div className="flex gap-2 flex-wrap">
            {['2–3 Years', '3–4 Years', '4–5 Years'].map(age => (
              <span key={age} className="text-xs px-3 py-1 bg-white rounded-full text-brand-dark/60 border border-gray-200">{age}</span>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-brand-dark/30 line-through text-base">{product.currency}{product.priceOriginal}</span>
            <div className="text-4xl font-bold text-brand-dark" style={{ fontFamily: 'var(--font-display)' }}>
              {product.currency}{product.price}
            </div>
            <p className="text-xs text-brand-dark/40">One-time payment · Lifetime licence</p>
          </div>
          <Link
            href={`/shop/${product.slug}`}
            className="px-6 py-3 rounded-full text-white font-bold hover:shadow-lg hover:-translate-y-0.5 transition-all"
            style={{ background: product.accentColor }}
          >
            View & Buy →
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function ShopPage() {
  return (
    <Layout title="Shop" description="Buy the complete Ballerina Bear and Hip Hop Hippo pre-school dance class packages. Lifetime licence. One-time cost.">

      {/* Header */}
      <div className="bg-gradient-to-br from-brand-pink/10 via-brand-lavender/10 to-brand-sky/10 py-20 text-center dot-pattern">
        <div className="max-w-2xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl text-brand-dark mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Our Classes
          </h1>
          <p className="text-brand-dark/60 text-lg">
            Two complete pre-school dance packages. One-time payment. Lifetime licence. Teach anywhere in the world.
          </p>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10">
          {products.map(p => <ProductCard key={p.slug} product={p} />)}
        </div>

        {/* Bundle nudge */}
        <div className="mt-12 bg-brand-dark text-white rounded-3xl p-8 text-center">
          <div className="text-4xl mb-3">🎁</div>
          <h3 className="text-2xl mb-2" style={{ fontFamily: 'var(--font-display)' }}>Want Both?</h3>
          <p className="text-white/60 mb-6">Teach both ballet and hip hop at your school. Get in touch for bundle pricing.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-pink text-white rounded-full font-bold hover:bg-brand-pink/90 transition-all">
            Contact Us →
          </Link>
        </div>
      </div>
    </Layout>
  )
}
