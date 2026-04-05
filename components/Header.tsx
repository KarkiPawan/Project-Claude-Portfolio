'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

const navLinks = [
  { href: '/#work', label: 'Work' },
  { href: '/#about', label: 'About' },
  { href: '/#contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.04)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-[15px] font-semibold tracking-[-0.01em] text-[#0a0a0a] hover:text-[#FF5A0E] transition-colors duration-300"
        >
          Pawan Karki
        </Link>

        {/* Nav */}
        <nav className="flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] text-neutral-400 hover:text-[#0a0a0a] transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:hello@pawankarki.com"
            className="text-[13px] px-5 py-2.5 bg-[#0a0a0a] text-white hover:bg-[#FF5A0E] transition-all duration-300 rounded-full font-medium"
          >
            Let's Talk
          </a>
        </nav>
      </div>
    </header>
  )
}
