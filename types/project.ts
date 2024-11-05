export interface Project {
  id: string
  title: string
  description: string
  image: string
  images: string[]
  technologies: string[]
  content: string
  category: string
  homeUrl?: string
  githubUrl?: string
  appUrl?: string
  createdAt: string
  features?: string[]
  experience?: string
  featured?: boolean
} 