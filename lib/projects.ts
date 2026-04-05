export type Project = {
  slug: string
  title: string
  category: string
  year: string
  description: string
  tags: string[]
  coverColor: string
  featured: boolean
  challenge: string
  approach: string
  solution: string
  outcome: string
  role: string
}

export const projects: Project[] = [
  {
    slug: 'project-one',
    title: 'Project Title One',
    category: 'Product Design',
    year: '2024',
    description:
      'A brief compelling description of the project — what it is and what impact it made for the user or business.',
    tags: ['UX Research', 'Product Design', 'Prototyping'],
    coverColor: '#F0EBE4',
    featured: true,
    challenge:
      'Describe the core problem or challenge that needed to be solved.',
    approach:
      'Walk through the methodology — research methods, ideation, iterations.',
    solution:
      'Explain the final design decisions and what makes this solution effective.',
    outcome:
      'Quantify the results — metrics, user feedback, business impact.',
    role: 'Lead UX/UI Designer',
  },
  {
    slug: 'project-two',
    title: 'Project Title Two',
    category: 'Mobile App',
    year: '2023',
    description:
      'A brief compelling description of the project — what it is and what impact it made for the user or business.',
    tags: ['Mobile UX', 'iOS Design', 'User Testing'],
    coverColor: '#E4EBF0',
    featured: true,
    challenge:
      'Describe the core problem or challenge that needed to be solved.',
    approach:
      'Walk through the methodology — research methods, ideation, iterations.',
    solution:
      'Explain the final design decisions and what makes this solution effective.',
    outcome:
      'Quantify the results — metrics, user feedback, business impact.',
    role: 'Senior UX Designer',
  },
  {
    slug: 'project-three',
    title: 'Project Title Three',
    category: 'Design System',
    year: '2023',
    description:
      'A brief compelling description of the project — what it is and what impact it made for the user or business.',
    tags: ['Design Systems', 'Component Library', 'Documentation'],
    coverColor: '#EAE4F0',
    featured: true,
    challenge:
      'Describe the core problem or challenge that needed to be solved.',
    approach:
      'Walk through the methodology — research methods, ideation, iterations.',
    solution:
      'Explain the final design decisions and what makes this solution effective.',
    outcome:
      'Quantify the results — metrics, user feedback, business impact.',
    role: 'Lead Designer',
  },
]
