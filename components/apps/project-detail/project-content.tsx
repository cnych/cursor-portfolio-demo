import { Project } from '@/types/project'

interface ProjectContentProps {
  project: Project
}

const ProjectContent = ({ project }: ProjectContentProps) => {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none mb-12">
      <h2>项目介绍</h2>
      <p>{project.description}</p>
      
      {project.features && (
        <>
          <h2>主要功能</h2>
          <ul>
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </>
      )}

      {project.experience && (
        <>
          <h2>开发心得</h2>
          <p>{project.experience}</p>
        </>
      )}
    </div>
  )
}

export default ProjectContent 