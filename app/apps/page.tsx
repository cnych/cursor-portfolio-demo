import Container from '@/components/common/container'
import ProjectList from '@/components/apps/project-list'
import ProjectFilter from '@/components/apps/project-filter'
import { ProjectFilterProvider } from '@/contexts/project-filter-context'

export const metadata = {
  title: '项目列表 - Portfolio',
  description: '展示所有个人独立开发的项目'
}

export default function ProjectsPage() {
  return (
    <ProjectFilterProvider>
      <Container className="py-20">
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            工作室项目
          </h1>
          <p className="text-muted-foreground text-center max-w-2xl">
            这里展示了我们工作室开发的所有项目，包括知识付费、Web应用、移动应用和开源项目等。
            我们致力于为用户提供优质的产品和服务，每个项目都凝聚着团队的心血和创新。
            你可以通过分类和搜索来了解更多项目详情。
          </p>
        </div>
        <ProjectFilter />
        <ProjectList />
      </Container>
    </ProjectFilterProvider>
  )
} 