import Layout from '@/components/Layout'
import Link from 'next/link'

// ─────────────────────────────────────────────────────────────
// BLOG POSTS
// To add a new post, add an object to this array.
// Fields: slug, title, date, excerpt, author, category, emoji
// Then create the content at content/blog/[slug].md
// ─────────────────────────────────────────────────────────────
const posts = [
  // Example post - replace with real content when ready
  {
    slug: 'welcome-to-dancing-dots',
    title: 'Welcome to Dancing Dots',
    date: '2024-01-01',
    excerpt: 'We\'re so excited to launch Dancing Dots — the complete pre-school dance class solution for dance teachers worldwide. Find out what we\'re all about.',
    author: 'The Dancing Dots Team',
    category: 'News',
    emoji: '🎉',
  },
  {
    slug: 'why-lifetime-licences-matter',
    title: 'Why We Only Offer Lifetime Licences',
    date: '2024-02-01',
    excerpt: 'Annual subscription fees were draining dance school owners. Here\'s why we decided from day one to offer lifetime licences instead — and what it means for you.',
    author: 'The Dancing Dots Team',
    category: 'Teaching Tips',
    emoji: '♾️',
  },
  {
    slug: 'teaching-preschool-dance-tips',
    title: '5 Tips for Teaching Pre-school Dance',
    date: '2024-03-01',
    excerpt: 'Pre-school dance is magical — but it can also be chaos! Here are five tips from our team to help you create brilliant, engaging classes for your tiniest dancers.',
    author: 'The Dancing Dots Team',
    category: 'Teaching Tips',
    emoji: '🩰',
  },
]

function PostCard({ post }) {
  return (
    <article className="card p-6 group hover:border-brand-pink/30 border border-transparent">
      <div className="text-4xl mb-4">{post.emoji}</div>
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs px-3 py-1 rounded-full bg-brand-pink/10 text-brand-pink font-semibold">
          {post.category}
        </span>
        <span className="text-xs text-brand-dark/40">
          {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
        </span>
      </div>
      <h2 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-pink transition-colors" style={{ fontFamily: 'var(--font-display)' }}>
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h2>
      <p className="text-brand-dark/60 text-sm leading-relaxed mb-5">{post.excerpt}</p>
      <div className="flex items-center justify-between">
        <span className="text-xs text-brand-dark/40">{post.author}</span>
        <Link href={`/blog/${post.slug}`} className="text-brand-pink text-sm font-bold hover:underline">
          Read more →
        </Link>
      </div>
    </article>
  )
}

export default function BlogPage() {
  return (
    <Layout
      title="Blog"
      description="Tips, news, and inspiration for pre-school dance teachers from the Dancing Dots team."
    >
      {/* Header */}
      <section className="py-24 bg-gradient-to-br from-brand-mint/10 via-brand-cream to-brand-sky/10 dot-pattern text-center">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-6xl mb-6">📝</div>
          <h1 className="text-5xl md:text-6xl text-brand-dark mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            The Blog
          </h1>
          <p className="text-brand-dark/60 text-lg">
            Tips, news, and inspiration for pre-school dance teachers.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map(p => <PostCard key={p.slug} post={p} />)}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-20 text-brand-dark/40">
              <div className="text-6xl mb-4">✏️</div>
              <p className="text-lg">No posts yet — check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  )
}
