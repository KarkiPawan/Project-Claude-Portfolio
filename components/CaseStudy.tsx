'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import type { Project } from '@/lib/projects'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const sections = [
  { key: 'challenge', label: '01 — Challenge' },
  { key: 'approach', label: '02 — Approach' },
  { key: 'solution', label: '03 — Solution' },
  { key: 'outcome', label: '04 — Outcome' },
] as const

export default function CaseStudy({ project }: { project: Project }) {
  return (
    <article className="pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Back */}
        <motion.div initial="hidden" animate="show" variants={fadeUp}>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-[#0a0a0a] transition-colors mb-12 group"
          >
            <span className="group-hover:-translate-x-1 transition-transform duration-200">←</span>
            All Work
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mb-16"
        >
          <p className="text-xs text-[#FF5A0E] font-medium tracking-widest uppercase mb-3">
            {project.category} · {project.year}
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-[#0a0a0a] mb-6 max-w-3xl">
            {project.title}
          </h1>
          <p className="text-lg text-neutral-500 max-w-xl leading-relaxed">
            {project.description}
          </p>
        </motion.div>

        {/* Meta */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-neutral-100 mb-16"
        >
          {[
            { label: 'Role', value: project.role },
            { label: 'Category', value: project.category },
            { label: 'Year', value: project.year },
            {
              label: 'Tags',
              value: project.tags.join(', '),
            },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-xs text-neutral-400 uppercase tracking-widest mb-1.5">
                {item.label}
              </p>
              <p className="text-sm text-[#0a0a0a] font-medium">{item.value}</p>
            </div>
          ))}
        </motion.div>

        {/* Cover image placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="w-full aspect-[16/8] rounded-sm mb-20 flex items-center justify-center"
          style={{ backgroundColor: project.coverColor }}
        >
          <p className="text-sm text-neutral-400">Project Cover Image</p>
        </motion.div>

        {/* Case study sections */}
        <div className="max-w-3xl mx-auto space-y-20">
          {sections.map(({ key, label }, i) => (
            <motion.div
              key={key}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp}
            >
              <p className="text-xs text-[#FF5A0E] font-medium tracking-widest uppercase mb-4">
                {label}
              </p>
              <p className="text-neutral-600 leading-relaxed text-base">
                {project[key]}
              </p>

              {/* Image placeholder per section */}
              <div
                className="mt-8 w-full aspect-[16/7] rounded-sm flex items-center justify-center"
                style={{ backgroundColor: '#F5F5F5' }}
              >
                <p className="text-xs text-neutral-300">
                  {label} — Visual
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Next project */}
        <div className="mt-24 pt-12 border-t border-neutral-100 flex justify-between items-center">
          <Link
            href="/#work"
            className="text-sm text-neutral-400 hover:text-[#0a0a0a] transition-colors"
          >
            ← All Projects
          </Link>
          <Link
            href="/#contact"
            className="text-sm font-medium text-[#0a0a0a] hover:text-[#FF5A0E] transition-colors"
          >
            Start a project →
          </Link>
        </div>
      </div>
    </article>
  )
}
