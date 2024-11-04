import { notFound } from 'next/navigation'
import Container from '@/components/common/container'
import ProjectHeader from '@/components/apps/project-detail/project-header'
import ProjectContent from '@/components/apps/project-detail/project-content'
import ProjectGallery from '@/components/apps/project-detail/project-gallery'
import ProjectTechStack from '@/components/apps/project-detail/project-tech-stack'
import { projects } from '@/data/projects'

type Params = Promise<{ id: string }>

export default async function ProjectPage({ params }: { params: Params }) {
  const { id } = await params
  const project = projects.find(p => p.id === id)

  if (!project) {
    notFound()
  }

  return (
    <Container className="py-20">
      <ProjectHeader project={project} />
      <ProjectGallery images={project.images} />
      <ProjectContent project={project} />
      <ProjectTechStack technologies={project.technologies} />
    </Container>
  )
} 

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id
  }))
}
