import Layout from '@/components/Layout'
import Link from 'next/link'

// ─────────────────────────────────────────────────────────────
// BLOG POST CONTENT
// Add each post's full content here, keyed by slug.
// Alternatively, wire this up to a CMS or MDX files as needed.
// ─────────────────────────────────────────────────────────────
const postContent = {
  'welcome-to-dancing-dots': {
    title: 'Welcome to Dancing Dots',
    date: '2024-01-01',
    author: 'The Dancing Dots Team',
    category: 'News',
    emoji: '🎉',
    content: `
We're so thrilled to be launching Dancing Dots — your new home for complete, 
ready-to-teach pre-school dance class packages.

**What is Dancing Dots?**

Dancing Dots is a complete pre-school dance solution, built by dance teachers for dance teachers. 
Our two flagship syllabuses — Ballerina Bear (ballet) and Hip Hop Hippo (hip hop) — give you 
everything you need to run brilliant pre-school classes, without any of the planning headache.

Each package includes a full syllabus, original music tracks, brand materials, advertising resources, 
and child reward charts. And unlike other providers, we offer a **lifetime licence** — pay once, 
teach for as long as you like.

**Why we built it**

We were frustrated by the endless annual fees and overpriced syllabuses in the market. 
We knew there was a better way, and Dancing Dots is it.

We hope you love it as much as we do. Welcome to the family! 🩰
    `,
  },
  'why-lifetime-licences-matter': {
    title: 'Why We Only Offer Lifetime Licences',
    date: '2024-02-01',
    author: 'The Dancing Dots Team',
    category: 'Teaching Tips',
    emoji: '♾️',
    content: `
When we first started planning Dancing Dots, one of the most important decisions we made was to 
offer **lifetime licences only**.

No annual fees. No renewals. No nasty surprises.

**Why annual fees are a problem**

Running a dance school is already expensive. Venue hire, insurance, marketing, admin — it all adds up. 
The last thing dance teachers need is another annual bill for a syllabus they've been teaching for years.

We've spoken to teachers who've paid thousands in subscription fees over the years for syllabuses they 
could have bought outright for a fraction of the cost.

**Our promise to you**

When you buy a Dancing Dots syllabus, it's yours. Forever. 
Teach it in your school for the next 30 years — we won't charge you another penny.

That's the Dancing Dots difference.
    `,
  },
  'teaching-preschool-dance-tips': {
    title: '5 Tips for Teaching Pre-school Dance',
    date: '2024-03-01',
    author: 'The Dancing Dots Team',
    category: 'Teaching Tips',
    emoji: '🩰',
    content: `
Teaching pre-school dance is one of the most rewarding — and wonderfully unpredictable — things a 
dance teacher can do. Here are five tips to help you make the most of every class.

**1. Keep it short and snappy**
Pre-school children have short attention spans. Aim for activities that last no more than 3–5 minutes 
before transitioning to something new. Variety is key.

**2. Use characters and stories**
Children respond brilliantly to characters. That's why we created Ballerina Bear and Hip Hop Hippo — 
when children connect with a character, they're more engaged, more imaginative, and more willing to try new moves.

**3. Repetition is your friend**
Don't be afraid to repeat the same activities week after week. Children gain confidence through 
familiarity, and repetition helps them build the coordination and muscle memory that underpins 
good dance technique.

**4. Celebrate everything**
At this age, effort matters far more than technique. Celebrate every spin, every jump, every wobbly 
attempt. Your enthusiasm is contagious, and it builds the confidence that lasts a lifetime.

**5. Keep parents engaged**
Occasional parent watch weeks are brilliant for motivation. When children know mum or dad is watching, 
they light up. And happy parents become your best advocates.

Happy teaching! 🎉
    `,
  },
}

export async function getStaticPaths() {
  return {
    paths: Object.keys(postContent).map(slug => ({ params: { slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const post = postContent[params.slug] || null
  return { props: { post } }
}

export default function BlogPostPage({ post }) {
  if (!post) return null

  const paragraphs = post.content.trim().split('\n\n')

  return (
    <Layout title={post.title} description={post.content.trim().slice(0, 150)}>
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-brand-cream to-white dot-pattern text-center">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-6xl mb-6">{post.emoji}</div>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-xs px-3 py-1 rounded-full bg-brand-pink/10 text-brand-pink font-semibold">{post.category}</span>
            <span className="text-xs text-brand-dark/40">
              {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl text-brand-dark mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            {post.title}
          </h1>
          <p className="text-brand-dark/50 text-sm">By {post.author}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-6 prose prose-lg">
          {paragraphs.map((para, i) => {
            // Bold headings that start with **
            if (para.startsWith('**') && para.endsWith('**')) {
              return <h2 key={i} className="text-2xl font-bold text-brand-dark mt-10 mb-4" style={{ fontFamily: 'var(--font-display)' }}>{para.replace(/\*\*/g, '')}</h2>
            }
            // Replace inline **bold**
            const parts = para.split(/(\*\*[^*]+\*\*)/)
            return (
              <p key={i} className="text-brand-dark/70 leading-relaxed mb-5">
                {parts.map((part, j) =>
                  part.startsWith('**') ? <strong key={j} className="text-brand-dark font-bold">{part.replace(/\*\*/g, '')}</strong> : part
                )}
              </p>
            )
          })}
        </div>

        {/* Back to blog */}
        <div className="max-w-2xl mx-auto px-6 mt-12 pt-8 border-t border-gray-100">
          <Link href="/blog" className="inline-flex items-center gap-2 text-brand-pink font-bold hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </section>
    </Layout>
  )
}
