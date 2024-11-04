'use client'

import ProjectCard from '@/components/common/project-card'
import { useProjectFilter } from '@/contexts/project-filter-context'

const ProjectList = () => {
  const { filteredProjects } = useProjectFilter()

  if (filteredProjects.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-muted-foreground">暂无匹配的项目</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProjects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  )
}

export default ProjectList 