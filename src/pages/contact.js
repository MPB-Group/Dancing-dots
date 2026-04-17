import Layout from '@/components/Layout'
import { useState } from 'react'
import siteConfig from '../../config/site'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'success' | 'error'

  const handleChange = e => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    // Replace this with your actual form handler (e.g. Formspree, EmailJS, or an API route)
    // For now, simulate a success after 1s
    await new Promise(r => setTimeout(r, 1000))
    setStatus('success')
  }

  return (
    <Layout
      title="Contact Us"
      description="Get in touch with Dancing Dots. We'd love to hear from you – whether you have a question about our syllabuses, need support, or just want to say hello."
    >
      {/* Header */}
      <section className="py-24 bg-gradient-to-br from-brand-sky/20 via-brand-cream to-brand-mint/10 dot-pattern text-center">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-6xl mb-6">💌</div>
          <h1 className="text-5xl md:text-6xl text-brand-dark mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Get in Touch
          </h1>
          <p className="text-brand-dark/60 text-lg">
            We'd love to hear from you. Fill in the form below and we'll get back to you as soon as we can.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-12">

          {/* Contact info */}
          <div className="space-y-8 fade-up">
            <div>
              <h3 className="text-xl font-bold text-brand-dark mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Contact Info
              </h3>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-brand-dark/60 hover:text-brand-pink transition-colors">
                <span className="text-2xl">📧</span>
                <span className="text-sm">{siteConfig.email}</span>
              </a>
            </div>

            <div>
              <h3 className="text-xl font-bold text-brand-dark mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Follow Us
              </h3>
              <div className="space-y-3">
                <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-brand-dark/60 hover:text-brand-pink transition-colors text-sm">
                  <span className="text-2xl">📘</span> Facebook
                </a>
                <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-brand-dark/60 hover:text-brand-pink transition-colors text-sm">
                  <span className="text-2xl">📸</span> Instagram
                </a>
              </div>
            </div>

            <div className="card bg-brand-cream p-6">
              <p className="text-brand-dark/60 text-sm leading-relaxed">
                💡 <strong>Before you get in touch</strong>, you might find your answer on our{' '}
                <a href="/refund-returns" className="text-brand-pink hover:underline">Refund & Returns</a> page.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-2 fade-up">
            {status === 'success' ? (
              <div className="card bg-green-50 border border-green-200 p-12 text-center">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-green-700 mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                  Message Sent!
                </h3>
                <p className="text-green-600">Thank you! We'll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-brand-dark mb-2">
                      Your Name <span className="text-brand-pink">*</span>
                    </label>
                    <input
                      type="text" name="name" required
                      value={formData.name} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-pink focus:ring-2 focus:ring-brand-pink/20 transition-all text-brand-dark"
                      placeholder="Jane Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-brand-dark mb-2">
                      Email Address <span className="text-brand-pink">*</span>
                    </label>
                    <input
                      type="email" name="email" required
                      value={formData.email} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-pink focus:ring-2 focus:ring-brand-pink/20 transition-all text-brand-dark"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-brand-dark mb-2">
                    Phone Number <span className="text-brand-dark/30">(optional, inc. country code)</span>
                  </label>
                  <input
                    type="tel" name="phone"
                    value={formData.phone} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-pink focus:ring-2 focus:ring-brand-pink/20 transition-all text-brand-dark"
                    placeholder="+44 7700 000000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-brand-dark mb-2">
                    Message <span className="text-brand-pink">*</span>
                  </label>
                  <textarea
                    name="message" required rows={6}
                    value={formData.message} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-pink focus:ring-2 focus:ring-brand-pink/20 transition-all text-brand-dark resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? '⏳ Sending...' : '📨 Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  )
}
