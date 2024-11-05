import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, Github } from 'lucide-react'

interface ProjectCardProps {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  homeUrl?: string
  githubUrl?: string
}

const ProjectCard = ({ 
  id, 
  title, 
  description, 
  image, 
  technologies,
  homeUrl,
  githubUrl 
}: ProjectCardProps) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border shadow-sm bg-background p-6 hover:shadow-lg transition-all">
      <Link href={`/apps/${id}`} className="relative aspect-video overflow-hidden rounded-md">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-col gap-2 pt-4">
        <Link href={`/apps/${id}`}>
          <h3 className="text-xl font-semibold">{title}</h3>
        </Link>
        <Link href={`/apps/${id}`}>
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        </Link>
        <div className="flex flex-wrap gap-2 mt-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-4 flex gap-3">
          {homeUrl && (
            <a
              href={homeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
            >
              <ExternalLink className="h-4 w-4" />
              应用主页
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
            >
              <Github className="h-4 w-4" />
              源码
            </a>
          )}
          <Link
            href={`/apps/${id}`}
            className="ml-auto text-sm text-primary hover:underline"
          >
            了解更多
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard 