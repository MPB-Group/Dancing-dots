import '@/styles/globals.css'
import { useEffect } from 'react'

export default function App({ Component, pageProps }) {
  // Scroll-triggered fade-up animations
  useEffect(() => {
    const els = document.querySelectorAll('.fade-up')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.15 }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return <Component {...pageProps} />
}
