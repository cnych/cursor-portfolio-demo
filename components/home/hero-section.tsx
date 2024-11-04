import Container from '../common/container'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import Link from 'next/link'

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/yourusername',
    icon: Github
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/yourusername',
    icon: Linkedin
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/yourusername',
    icon: Twitter
  },
  {
    name: 'Email',
    href: 'mailto:your@email.com',
    icon: Mail
  }
]

const HeroSection = () => {
  return (
    <Container className="py-20 md:py-28">
      <div className="flex flex-col items-center text-center">
        <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm mb-8 text-muted-foreground">
          <span>👋 欢迎来到我的作品集</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          你好，我是<span className="text-primary">开发者</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          一名全栈开发工程师，热衷于创造优秀的用户体验和高质量的代码。
          专注于 React、Next.js 和 TypeScript 技术栈。
        </p>
        <div className="mt-8 flex gap-4">
          {socialLinks.map((link) => {
            const Icon = link.icon
            return (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-muted transition-colors"
                aria-label={link.name}
              >
                <Icon className="h-5 w-5" />
              </Link>
            )
          })}
        </div>
      </div>
    </Container>
  )
}

export default HeroSection
