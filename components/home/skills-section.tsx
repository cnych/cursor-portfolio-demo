import Container from '../common/container'
import { Code2, Database, Wrench } from 'lucide-react'

const skills = [
  {
    category: "前端开发",
    icon: Code2,
    description: "构建响应式和交互性强的现代化 Web 应用",
    items: [
      { name: "React", level: "精通" },
      { name: "Next.js", level: "精通" },
      { name: "TypeScript", level: "精通" },
      { name: "Tailwind CSS", level: "精通" },
      { name: "Shadcn UI", level: "精通" },
      { name: "Redux", level: "熟练" },
      { name: "Ant Design", level: "熟练" },
      { name: "Vue.js", level: "熟练" }
    ]
  },
  {
    category: "后端开发",
    icon: Database,
    description: "设计和实现可扩展的服务端应用和 API",
    items: [
      { name: "Python", level: "精通" },
      { name: "Golang", level: "精通" },
      { name: "Node.js", level: "精通" },
      { name: "MySQL", level: "精通" },
      { name: "PostgreSQL", level: "熟练" },
      { name: "MongoDB", level: "熟练" },
      { name: "Docker", level: "熟练" },
      { name: "Kubernetes", level: "精通" }
    ]
  },
  {
    category: "开发工具",
    icon: Wrench,
    description: "熟练使用现代开发工具提升开发效率",
    items: [
      { name: "Git", level: "精通" },
      { name: "VS Code", level: "精通" },
      { name: "Cursor", level: "精通" },
      { name: "Webpack", level: "熟练" },
      { name: "Vite", level: "熟练" },
      { name: "Figma", level: "熟练" },
      { name: "Jest", level: "熟练" }
    ]
  }
]

const SkillsSection = () => {
  return (
    <section className="py-20">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            技术栈
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            多年的开发经验让我掌握了全栈开发所需的各种技术，能够独立完成从前端到后端的完整项目开发。
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill) => {
            const Icon = skill.icon
            return (
              <div 
                key={skill.category}
                className="p-6 rounded-lg bg-background border hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{skill.category}</h3>
                </div>
                <p className="text-muted-foreground mb-6">{skill.description}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item.name}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                      title={item.level}
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default SkillsSection 