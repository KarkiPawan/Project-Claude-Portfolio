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

const skills = [
  'UX Research',
  'Product Strategy',
  'Interaction Design',
  'Design Systems',
  'Prototyping',
  'Usability Testing',
  'Information Architecture',
  'Visual Design',
]

const tools = [
  'Figma',
  'FigJam',
  'Principle',
  'ProtoPie',
  'Maze',
  'Hotjar',
  'Notion',
  'Loom',
]

export default function AboutSection() {
  return (
    <section id="about" className="py-28 md:py-36 border-t border-neutral-100">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-16"
        >
          <p className="text-[11px] text-[#FF5A0E] font-medium tracking-[0.2em] uppercase mb-4">
            About
          </p>
          <h2 className="text-3xl md:text-[2.75rem] font-bold tracking-tight text-[#0a0a0a] leading-[1.1]">
            Design with purpose,<br />clarity, and intent.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-12 md:gap-8">
          {/* Bio — takes 7 columns */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="md:col-span-7"
          >
            <div className="space-y-5 text-neutral-500 text-[15px] leading-[1.8] max-w-xl">
              <p>
                I'm Pawan Karki, a Senior UX/UI Designer based in [Location]
                with 6 years of experience designing digital products that are
                both beautiful and functional.
              </p>
              <p>
                My approach is rooted in understanding people — their needs,
                behaviors, and frustrations — then translating those insights
                into experiences that feel effortless. I believe great design
                is invisible; it just works.
              </p>
              <p>
                I've worked with startups and established brands, leading design
                from early discovery through to shipped product. I care deeply
                about the details and the process behind them.
              </p>
            </div>

            <div className="mt-10">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-[13px] font-medium text-[#0a0a0a] border border-neutral-200 hover:border-[#FF5A0E] hover:text-[#FF5A0E] transition-all duration-300 rounded-full group"
              >
                Download Resume
                <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Skills + Tools — takes 5 columns */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              ...fadeUp,
              show: { ...fadeUp.show, transition: { ...fadeUp.show.transition, delay: 0.15 } },
            }}
            className="md:col-span-5"
          >
            {/* Skills */}
            <div className="mb-10">
              <p className="text-[11px] text-neutral-400 tracking-[0.15em] uppercase mb-4 font-medium">
                Expertise
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[13px] text-[#0a0a0a] border border-neutral-200 px-4 py-2 rounded-full bg-white hover:border-[#FF5A0E] hover:text-[#FF5A0E] transition-colors duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <p className="text-[11px] text-neutral-400 tracking-[0.15em] uppercase mb-4 font-medium">
                Tools
              </p>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-[13px] text-neutral-400 bg-neutral-50 px-4 py-2 rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
