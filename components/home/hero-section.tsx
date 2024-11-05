import Container from '../common/container'
import { Github, Mail, Twitter } from 'lucide-react'
import { IoLogoWechat } from "react-icons/io5";
import Image from 'next/image';
import Link from 'next/link'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/cnych',
    icon: Github
  },
  {
    name: 'Twitter',
    href: 'https://x.com/appgeniusxyz', 
    icon: Twitter
  },
  {
    name: 'Email',
    href: 'mailto:icnych@gmail.com',
    icon: Mail
  }
]

const HeroSection = () => {
  return (
    <Container className="py-12 md:py-16">
      <div className="flex flex-col items-center text-center">
        <div className="flex flex-col items-center gap-4 mb-8">
          <Link href="/">
            <img src="/AppGeniusLogo.svg" alt="AppGenius Logo" className="h-36 hover:scale-110 transition-transform duration-300 ease-in-out border-2 border-primary rounded-full shadow-md w-auto" />
          </Link>
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm text-muted-foreground">
            <span>👋 欢迎来到 AppGenius 工作室</span>
          </div>
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          专业的<span className="text-primary">独立开发工作室</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          我们专注于开发 AI 应用、Web 应用、Chrome 插件、移动应用以及专业视频课程教学，
          致力于为用户提供高质量的产品和服务。
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
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="p-2 rounded-full hover:bg-muted transition-colors">
                  <IoLogoWechat className="h-5 w-5" />
                </button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <Image 
                  src="https://picdn.youdianzhishi.com/images/1730793505932.png" 
                  alt="微信二维码"
                  width={128}
                  height={128}
                />
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </Container>
  )
}

export default HeroSection
