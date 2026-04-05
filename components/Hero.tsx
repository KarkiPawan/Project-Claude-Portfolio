'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { LampEffect } from '@/components/ui/lamp'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

const fadeIn = {
  hidden: { opacity: 0, scale: 0.98 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
  },
}

export default function Hero() {
  return (
    <section className="min-h-[100svh] flex flex-col pt-[72px] relative">

      {/* Vertical grid lines — from nav bottom to stats divider only */}
      <div aria-hidden="true" className="absolute inset-x-0 pointer-events-none z-0 flex justify-center overflow-hidden" style={{ top: '72px', bottom: '112px' }}>
        <div className="w-full max-w-6xl relative h-full">
          <div className="absolute top-0 bottom-0 w-px bg-neutral-100 left-[4px] md:left-[28px]" />
          <div className="absolute top-0 bottom-0 w-px bg-neutral-100" style={{ left: '66.666%' }} />
          <div className="absolute top-0 bottom-0 w-px bg-neutral-100 right-[4px] md:right-[28px]" />
        </div>
      </div>

      {/* Outer wrapper — matches grid line coordinate system (no inner padding) */}
      <div className="max-w-6xl mx-auto w-full flex flex-col flex-1 relative z-10 pb-28">

        {/* Right column — lamp + portrait, between grid line 3 and line 4 */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeIn}
          className="absolute hidden md:flex flex-col items-center justify-center"
          style={{ left: 'calc(66.666% + 30px)', right: '58px', top: 0, bottom: '120px' }}
        >
          {/* Portrait */}
          <div
            className="w-full rounded-[8px] overflow-hidden relative flex-shrink-0"
            style={{ aspectRatio: '3/4', maxHeight: '62vh' }}
          >
            <Image
              src="/pawan.png"
              alt="Pawan Karki"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* 12px gap between image bottom and tube */}
          <div style={{ height: 12, flexShrink: 0 }} />

          {/* Glowing tube — full width of the image */}
          <LampEffect className="w-full flex-shrink-0" />
        </motion.div>

        {/* Copy — vertically centered in remaining space, with content padding */}
        <div className="flex-1 flex items-center px-6 md:px-12">
          <div className="w-full md:w-2/3 pr-0 md:pr-12">

            {/* Headline */}
            <motion.h1
              initial="hidden"
              animate="show"
              custom={0.1}
              variants={fadeUp}
              className="text-[clamp(2rem,5vw,4.5rem)] font-bold tracking-[-0.035em] leading-[1.2] text-[#0a0a0a]"
            >
              Designing Practical &{' '}
              <span className="text-[#FF5A0E]">Human-Centered</span>{' '}
              Products
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial="hidden"
              animate="show"
              custom={0.25}
              variants={fadeUp}
              className="mt-6 text-base md:text-lg text-neutral-400 leading-[1.7]"
            >
              Senior UX/UI Designer with 6 years of experience turning complex
              problems into clear, intuitive digital experiences.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial="hidden"
              animate="show"
              custom={0.35}
              variants={fadeUp}
              className="mt-10 flex items-center gap-3"
            >
              <Link
                href="#work"
                className="group px-7 py-3.5 bg-[#FF5A0E] text-white text-[16px] font-medium hover:bg-[#E04E0C] transition-all duration-300 rounded-[4px]"
              >
                View Selected Work
              </Link>
              <a
                href="mailto:hello@pawankarki.com"
                className="px-7 py-3.5 text-[16px] font-medium text-neutral-500 bg-white border border-neutral-200 hover:border-neutral-400 hover:text-[#0a0a0a] transition-all duration-300 rounded-[4px]"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>
        </div>


      </div>
    </section>
  )
}
