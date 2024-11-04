import { Project } from '@/types/project'
import { ExternalLink, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ProjectHeaderProps {
  project: Project
}

const ProjectHeader = ({ project }: ProjectHeaderProps) => {
  return (
    <div className="mb-12">
      <h1 className="text-4xl font-bold tracking-tight mb-4">
        {project.title}
      </h1>
      <p className="text-lg text-muted-foreground mb-6">
        {project.description}
      </p>
      <div className="flex gap-4">
        {project.demoUrl && (
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
            <Button className="gap-2">
              <ExternalLink className="h-4 w-4" />
              在线演示
            </Button>
          </a>
        )}
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="gap-2">
              <Github className="h-4 w-4" />
              查看源码
            </Button>
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectHeader 