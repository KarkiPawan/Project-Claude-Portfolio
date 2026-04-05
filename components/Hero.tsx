'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

export default function Hero() {
  return (
    <section className="min-h-[100svh] flex flex-col justify-end pb-16 md:pb-24 pt-24">
      <div className="max-w-6xl mx-auto px-6 md:px-12 w-full">
        {/* Availability badge */}
        <motion.div
          initial="hidden"
          animate="show"
          custom={0}
          variants={fadeUp}
          className="inline-flex items-center gap-2.5 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5A0E] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF5A0E]" />
          </span>
          <span className="text-[11px] text-neutral-400 tracking-[0.15em] uppercase font-medium">
            Available for new projects
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial="hidden"
          animate="show"
          custom={0.1}
          variants={fadeUp}
          className="text-[clamp(2.75rem,7vw,6rem)] font-bold tracking-[-0.035em] leading-[0.95] text-[#0a0a0a] max-w-5xl"
        >
          Designing practical &<br />
          <span className="text-[#FF5A0E]">Human-Centered</span>{' '}
          Products
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial="hidden"
          animate="show"
          custom={0.25}
          variants={fadeUp}
          className="mt-8 text-base md:text-lg text-neutral-400 max-w-lg leading-[1.7]"
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
            className="group px-7 py-3.5 bg-[#0a0a0a] text-white text-[13px] font-medium tracking-wide hover:bg-[#FF5A0E] transition-all duration-300 rounded-full flex items-center gap-2"
          >
            View Selected Work
            <span className="inline-block group-hover:translate-x-0.5 transition-transform duration-200">↓</span>
          </Link>
          <a
            href="mailto:hello@pawankarki.com"
            className="px-7 py-3.5 text-[13px] font-medium text-neutral-500 border border-neutral-200 hover:border-neutral-400 hover:text-[#0a0a0a] transition-all duration-300 rounded-full"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Divider + Stats */}
        <motion.div
          initial="hidden"
          animate="show"
          custom={0.5}
          variants={fadeUp}
          className="mt-20 md:mt-28"
        >
          <div className="w-full h-px bg-neutral-200 mb-8" />
          <div className="flex items-baseline gap-12 md:gap-16">
            {[
              { value: '6+', label: 'Years' },
              { value: '40+', label: 'Projects' },
              { value: '15+', label: 'Clients' },
            ].map((stat) => (
              <div key={stat.label} className="flex items-baseline gap-2">
                <span className="text-2xl md:text-3xl font-bold tracking-tight text-[#0a0a0a]">
                  {stat.value}
                </span>
                <span className="text-[11px] text-neutral-400 tracking-wide uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
