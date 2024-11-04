import Container from '../common/container'
import ProjectCard from '../common/project-card'
import { Button } from '../ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getFeaturedProjects } from '@/data/projects'

const FeaturedProjects = () => {
  const featuredProjects = getFeaturedProjects()

  return (
    <section className="py-20">
      <Container>
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            特色项目
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mb-8">
            这些是我最近完成的一些项目，展示了我在不同技术领域的实践经验。
            每个项目都经过精心设计和实现，注重用户体验和代码质量。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
          <Link href="/apps" className="mt-12">
            <Button className="group">
              查看更多项目
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  )
}

export default FeaturedProjects 