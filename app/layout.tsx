import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Pawan Karki — Senior UX/UI Designer',
  description: 'Designing practical & Human-Centered Products. Senior UX/UI Designer with 6 years of experience crafting intuitive digital experiences.',
  keywords: ['UX Designer', 'UI Designer', 'Product Designer', 'Pawan Karki'],
  openGraph: {
    title: 'Pawan Karki — Senior UX/UI Designer',
    description: 'Designing practical & Human-Centered Products.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} font-sans bg-white text-[#0a0a0a] antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
