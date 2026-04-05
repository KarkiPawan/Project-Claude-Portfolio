'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { projects } from '@/lib/projects'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function WorkSection() {
  return (
    <section id="work" className="py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-20"
        >
          <p className="text-[11px] text-[#FF5A0E] font-medium tracking-[0.2em] uppercase mb-4">
            Selected Work
          </p>
          <div className="flex items-end justify-between">
            <h2 className="text-3xl md:text-[2.75rem] font-bold tracking-tight text-[#0a0a0a] leading-[1.1]">
              Featured<br />Case Studies
            </h2>
            <p className="text-[11px] text-neutral-300 tracking-wide uppercase hidden md:block">
              {String(projects.length).padStart(2, '0')} projects
            </p>
          </div>
          <div className="w-full h-px bg-neutral-200 mt-8" />
        </motion.div>

        {/* Project cards — stacked full-width with large image areas */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeUp}
            >
              <Link
                href={`/work/${project.slug}`}
                className="group block"
              >
                {/* Image placeholder */}
                <div
                  className="w-full aspect-[16/8] rounded-lg overflow-hidden mb-6 relative"
                  style={{ backgroundColor: project.coverColor }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm text-neutral-400 font-medium">
                      {project.title} — Cover
                    </span>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#0a0a0a] opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500" />
                </div>

                {/* Project info */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[11px] text-neutral-300 font-mono">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-[11px] text-neutral-400 tracking-wide uppercase">
                        {project.category} · {project.year}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-[#0a0a0a] group-hover:text-[#FF5A0E] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-neutral-400 mt-2 max-w-md leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags + arrow */}
                  <div className="flex items-center gap-4 md:flex-col md:items-end md:pt-6">
                    <div className="flex flex-wrap gap-1.5 md:justify-end">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] text-neutral-400 bg-neutral-50 px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="text-neutral-300 group-hover:text-[#FF5A0E] group-hover:translate-x-1 transition-all duration-300 ml-auto md:ml-0 mt-2">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-neutral-100 mt-8" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
