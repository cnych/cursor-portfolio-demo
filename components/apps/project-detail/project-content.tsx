import { Project } from '@/types/project'
import Markdown from 'react-markdown'

interface ProjectContentProps {
  project: Project
}

const ProjectContent = ({ project }: ProjectContentProps) => {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none mb-12">
      <Markdown>{project.content}</Markdown>
    </div>
  )
}

export default ProjectContent