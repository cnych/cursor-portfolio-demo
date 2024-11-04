import { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: "1",
    title: "项目管理系统",
    description: "一个现代化的项目管理系统，支持任务分配、进度跟踪和团队协作。",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    images: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
      "https://images.unsplash.com/photo-1494200483035-db7bc6aa5739",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
    ],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker"],
    category: "Web应用",
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/yourusername/project1",
    createdAt: "2024-01-01",
    features: [
      "任务管理和分配",
      "项目进度跟踪",
      "团队协作功能",
      "实时通知"
    ],
    experience: "在开发这个项目的过程中，我深入学习了React的新特性和Node.js的最佳实践...",
    featured: true
  },
  {
    id: "2",
    title: "电商平台",
    description: "基于 Next.js 开发的全栈电商平台，支持商品管理、购物车、支付等功能。采用 SSR 技术提升性能和 SEO。",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc",
    images: [
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc",
      "https://images.unsplash.com/photo-1557821552-17105176677c",
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12"
    ],
    technologies: ["Next.js", "TailwindCSS", "PostgreSQL", "Prisma", "Stripe"],
    category: "Web应用",
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/yourusername/project2",
    createdAt: "2024-02-01",
    featured: true
  },
  {
    id: "3",
    title: "AI 助手应用",
    description: "集成 OpenAI API 的智能助手应用，支持自然语言对话和任务处理。使用 Vue.js 构建前端界面。",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    images: [
      "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      "https://images.unsplash.com/photo-1673187456578-63a9f8674e82",
      "https://images.unsplash.com/photo-1684163761859-4dd1ab7f40b8"
    ],
    technologies: ["Vue.js", "Python", "FastAPI", "MongoDB", "OpenAI"],
    category: "Web应用",
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/yourusername/project3",
    createdAt: "2024-03-01",
    featured: true
  },
  {
    id: "4",
    title: "移动端新闻应用",
    description: "基于 React Native 开发的跨平台新闻应用，支持个性化推荐、离线阅读等功能。",
    image: "https://images.unsplash.com/photo-1586880244406-556ebe35f282",
    images: [
      "https://images.unsplash.com/photo-1586880244406-556ebe35f282",
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3"
    ],
    technologies: ["React Native", "TypeScript", "Redux", "Node.js"],
    category: "移动应用",
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/yourusername/project4",
    createdAt: "2024-03-15"
  },
  {
    id: "5",
    title: "开源 UI 组件库",
    description: "一个基于 React 的开源 UI 组件库，提供丰富的可定制组件，支持 TypeScript。",
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498",
    images: [
      "https://images.unsplash.com/photo-1556075798-4825dfaaf498",
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e",
      "https://images.unsplash.com/photo-1618788372246-79faff0c3742"
    ],
    technologies: ["React", "TypeScript", "Storybook", "Jest"],
    category: "开源项目",
    githubUrl: "https://github.com/yourusername/project5",
    createdAt: "2024-04-01"
  }
]

// 获取特色项目的辅助函数
export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured)
} 