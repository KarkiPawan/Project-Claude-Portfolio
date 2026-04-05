'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function ContactSection() {
  return (
    <section id="contact" className="py-28 md:py-36 border-t border-neutral-100">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-10"
        >
          {/* Left */}
          <div>
            <p className="text-[11px] text-[#FF5A0E] font-medium tracking-[0.2em] uppercase mb-4">
              Get in Touch
            </p>
            <h2 className="text-4xl md:text-[3.5rem] font-bold tracking-tight text-[#0a0a0a] leading-[1]">
              Let's work<br />together.
            </h2>
            <p className="text-neutral-400 text-[15px] leading-[1.7] mt-6 max-w-sm">
              Have a project in mind or need a design partner?
              I'd love to hear from you.
            </p>
          </div>

          {/* Right — CTA buttons */}
          <div className="flex flex-col items-start md:items-end gap-3">
            <a
              href="mailto:hello@pawankarki.com"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#0a0a0a] text-white text-[16px] font-medium hover:bg-[#FF5A0E] transition-all duration-300 rounded-[4px]"
            >
              hello@pawankarki.com
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/pawankarki"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border border-neutral-200 text-[#0a0a0a] text-[16px] font-medium hover:border-neutral-400 transition-all duration-300 rounded-[4px]"
            >
              Connect on LinkedIn
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
