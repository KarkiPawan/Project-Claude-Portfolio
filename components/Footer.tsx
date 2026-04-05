import Link from 'next/link'

const socialLinks = [
  { href: 'https://linkedin.com/in/pawankarki', label: 'LinkedIn' },
  { href: 'https://dribbble.com/pawankarki', label: 'Dribbble' },
  { href: 'https://twitter.com/pawankarki', label: 'Twitter' },
]

export default function Footer() {
  return (
    <footer className="border-t border-neutral-100">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-[13px] text-neutral-400">
          © {new Date().getFullYear()} Pawan Karki
        </p>

        <nav className="flex items-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-neutral-400 hover:text-[#FF5A0E] transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
