import Layout from '@/components/Layout'
import Link from 'next/link'

const privacySections = [
  {
    title: 'Introduction',
    body: 'Welcome to Dancing Dots. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website (dancingdots.co.uk) and tell you about your privacy rights and how the law protects you.',
  },
  {
    title: 'Data We Collect About You',
    items: [
      { label: 'Identity Data', text: 'first name, last name, username or similar identifier.' },
      { label: 'Contact Data', text: 'email address, telephone numbers.' },
      { label: 'Technical Data', text: 'IP address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform.' },
      { label: 'Usage Data', text: 'information about how you use our website, products, and services.' },
      { label: 'Marketing and Communications Data', text: 'your preferences in receiving marketing from us and your communication preferences.' },
    ],
  },
  {
    title: 'How We Collect Your Data',
    items: [
      { label: 'Direct interactions', text: 'You may give us your Identity and Contact Data by filling in forms or by corresponding with us by post, phone, email, or otherwise.' },
      { label: 'Automated technologies', text: 'As you interact with our website, we may automatically collect Technical Data about your equipment, browsing actions, and patterns via cookies and server logs.' },
      { label: 'Third parties', text: 'We may receive personal data about you from various third parties and public sources.' },
    ],
  },
  {
    title: 'How We Use Your Personal Data',
    list: [
      'To register you as a new customer.',
      'To process and deliver your order.',
      'To manage your relationship with us.',
      'To administer and protect our business and this website.',
      'To deliver relevant website content and advertisements to you.',
      'To use data analytics to improve our website, products, and services.',
      'To make suggestions and recommendations to you about products that may be of interest.',
    ],
  },
  {
    title: 'Disclosures of Your Personal Data',
    body: 'We may share your personal data with IT service providers, professional advisers (lawyers, bankers, auditors, insurers), and HMRC or regulatory authorities where required. Third-party service providers are bound by confidentiality agreements and cannot use your information for any other purpose. While we take reasonable measures to protect your personal information, absolute security cannot be guaranteed.',
  },
]

const refundSections = [
  {
    title: 'Digital Products',
    body: 'All of our products, including syllabi, music, logos, advertising material, and child reward charts, are delivered as digital downloads. Once the purchase is completed, you will receive immediate access to the intellectual property.',
  },
  {
    title: 'No Refunds',
    body: 'As our products are digital and the intellectual property is shared upon purchase, we cannot offer refunds. This policy is in place because, once the product is downloaded, it cannot be returned in the same way as a physical product.',
  },
  {
    title: 'Product Issues',
    body: 'If you encounter any issues with your purchase, such as technical difficulties or incomplete downloads, please contact us immediately at hello@dancingdots.co.uk. We are dedicated to resolving any problems to ensure you receive the full value of your purchase.',
  },
  {
    title: 'Customer Satisfaction',
    body: "Your satisfaction is important to us. While we do not offer refunds, we are committed to providing excellent customer service and support. If you have any questions or concerns about our products, please reach out to us.",
  },
]

function Section({ num, title, body, items, list }) {
  return (
    <div className="mb-8 fade-up">
      <h3 className="text-xl font-bold text-brand-dark mb-3" style={{ fontFamily: 'var(--font-display)' }}>
        {num}. {title}
      </h3>
      {body && <p className="text-brand-dark/60 leading-relaxed">{body}</p>}
      {items && (
        <ul className="space-y-2 mt-3">
          {items.map(item => (
            <li key={item.label} className="text-brand-dark/60 text-sm leading-relaxed">
              <strong className="text-brand-dark">{item.label}:</strong> {item.text}
            </li>
          ))}
        </ul>
      )}
      {list && (
        <ul className="mt-3 space-y-1">
          {list.map(item => (
            <li key={item} className="flex items-start gap-2 text-brand-dark/60 text-sm">
              <span className="text-brand-pink mt-0.5">•</span> {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function RefundReturnsPage() {
  return (
    <Layout
      title="Refund, Returns & Privacy Policy"
      description="Dancing Dots refund policy and privacy policy. All products are digital downloads. Effective January 2024."
    >
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-brand-cream to-white dot-pattern text-center">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-6xl mb-6">📋</div>
          <h1 className="text-5xl text-brand-dark mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Policies
          </h1>
          <p className="text-brand-dark/50">Effective Date: January 01, 2024</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-16 space-y-16">
        {/* Privacy */}
        <div>
          <h2 className="text-3xl text-brand-dark mb-8 pb-4 border-b border-gray-100" style={{ fontFamily: 'var(--font-display)' }}>
            🔒 Privacy Policy
          </h2>
          {privacySections.map((s, i) => (
            <Section key={s.title} num={i + 1} {...s} />
          ))}
        </div>

        {/* Refunds */}
        <div>
          <h2 className="text-3xl text-brand-dark mb-8 pb-4 border-b border-gray-100" style={{ fontFamily: 'var(--font-display)' }}>
            💳 Refund Policy
          </h2>
          {refundSections.map((s, i) => (
            <Section key={s.title} num={i + 1} {...s} />
          ))}

          <div className="bg-brand-cream rounded-2xl p-6 mt-8">
            <p className="text-brand-dark/60 text-sm">
              <strong className="text-brand-dark">Questions?</strong> Contact us at{' '}
              <a href="mailto:hello@dancingdots.co.uk" className="text-brand-pink hover:underline">
                hello@dancingdots.co.uk
              </a>{' '}
              and we'll do our best to help.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
