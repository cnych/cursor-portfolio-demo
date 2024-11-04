interface ProjectTechStackProps {
  technologies: string[]
}

const ProjectTechStack = ({ technologies }: ProjectTechStackProps) => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold tracking-tight mb-4">技术栈</h2>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

export default ProjectTechStack 