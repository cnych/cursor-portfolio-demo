'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { Project } from '@/types/project'
import { projects } from '@/data/projects'

interface ProjectFilterContextType {
  searchQuery: string
  selectedCategory: string
  filteredProjects: Project[]
  setSearchQuery: (query: string) => void
  setSelectedCategory: (category: string) => void
}

const ProjectFilterContext = createContext<ProjectFilterContextType | undefined>(undefined)

export function ProjectFilterProvider({ children }: { children: ReactNode }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('全部')

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesCategory = selectedCategory === '全部' || project.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <ProjectFilterContext.Provider
      value={{
        searchQuery,
        selectedCategory,
        filteredProjects,
        setSearchQuery,
        setSelectedCategory,
      }}
    >
      {children}
    </ProjectFilterContext.Provider>
  )
}

export function useProjectFilter() {
  const context = useContext(ProjectFilterContext)
  if (context === undefined) {
    throw new Error('useProjectFilter must be used within a ProjectFilterProvider')
  }
  return context
} 