import Container from './container'

const Footer = () => {
  return (
    <footer className="border-t border-border/40">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} <a href="/" className="hover:text-foreground">AppGenius</a>. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/cnych"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              GitHub
            </a>
            <a
              href="https://x.com/appgeniusxyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Twitter
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer 