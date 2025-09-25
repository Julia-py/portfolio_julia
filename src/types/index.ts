export type Theme = 'light' | 'dark'

export interface Project {
  id: string
  title: string
  description: string
  image?: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
}

export interface Experience {
  id: string
  title: string
  company: string
  period: string
  description: string
}

export interface Skill {
  category: string
  technologies: string[]
}
