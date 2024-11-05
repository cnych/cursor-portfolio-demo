import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/providers/theme-provider'
import Header from '@/components/common/header'
import Footer from '@/components/common/footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AppGenius工作室 ｜ 视频课程、AI应用、Web应用、浏览器插件、移动应用',
  description: '专注于开发高质量的视频课程、AI应用、Web应用、浏览器插件、移动应用和开源项目的独立工作室'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <div className="relative min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
