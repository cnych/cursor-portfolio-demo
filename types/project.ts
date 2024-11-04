export interface Project {
  id: string
  title: string
  description: string
  image: string
  images: string[]
  technologies: string[]
  category: string
  demoUrl?: string
  githubUrl?: string
  createdAt: string
  features?: string[]
  experience?: string
  featured?: boolean
} 