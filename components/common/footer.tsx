import Container from './container'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="border-t border-border/40">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} <Link href="/" className="hover:text-foreground">AppGenius</Link>. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/cnych"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              GitHub
            </Link>
            <Link
              href="https://x.com/appgeniusxyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Twitter
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer