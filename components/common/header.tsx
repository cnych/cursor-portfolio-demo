'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Container from './container'
import { ThemeToggle } from './theme-toggle'

const Header = () => {
  const pathname = usePathname()
  
  const navItems = [
    { name: '首页', path: '/' },
    { name: '项目', path: '/apps' }
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="text-xl font-bold">
              Portfolio
            </Link>
            <nav className="flex gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`text-sm transition-colors hover:text-foreground/80 ${
                    pathname === item.path ? 'text-foreground' : 'text-foreground/60'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <ThemeToggle />
        </div>
      </Container>
    </header>
  )
}

export default Header 