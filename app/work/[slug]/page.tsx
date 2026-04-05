import { notFound } from 'next/navigation'
import { projects } from '@/lib/projects'
import CaseStudy from '@/components/CaseStudy'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) return {}
  return {
    title: `${project.title} — Pawan Karki`,
    description: project.description,
  }
}

export default function WorkPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) notFound()
  return <CaseStudy project={project} />
}
