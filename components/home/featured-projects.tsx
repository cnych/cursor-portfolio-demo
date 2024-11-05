import Container from '../common/container'
import ProjectCard from '../common/project-card'
import { Button } from '../ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getFeaturedProjects } from '@/data/projects'

const FeaturedProjects = () => {
  const featuredProjects = getFeaturedProjects()

  return (
    <section className="py-20 bg-muted/50">
      <Container>
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            特色项目
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mb-8">
            这些是我们工作室开发的一些精品项目，涵盖了 AI 应用、Web 应用、Chrome 插件等多个领域。
            每个项目都由我们专业的团队精心打造，确保卓越的用户体验和稳定的产品质量。
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