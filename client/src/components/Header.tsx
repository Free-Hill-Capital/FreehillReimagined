import { SiFacebook, SiX, SiPinterest, SiTumblr } from "react-icons/si";
import { Link, useLocation } from "wouter";

export default function Header() {
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between px-6 md:px-12">
        <Link href="/">
          <a className="text-xl md:text-2xl font-bold tracking-tight hover-elevate active-elevate-2 rounded-md px-2 py-1 -ml-2">
            Free Hill Capital
          </a>
        </Link>
        
        <div className="flex items-center gap-6 md:gap-8">
          <nav className="hidden sm:flex items-center gap-6" data-testid="main-navigation">
            <Link href="/">
              <a 
                className={`text-sm font-medium hover-elevate active-elevate-2 rounded-md px-3 py-2 transition-colors ${
                  location === '/' ? 'text-foreground' : 'text-muted-foreground'
                }`}
                data-testid="link-home"
              >
                Home
              </a>
            </Link>
            <Link href="/about">
              <a 
                className={`text-sm font-medium hover-elevate active-elevate-2 rounded-md px-3 py-2 transition-colors ${
                  location === '/about' ? 'text-foreground' : 'text-muted-foreground'
                }`}
                data-testid="link-about"
              >
                About Us
              </a>
            </Link>
          </nav>
          
          <nav className="flex items-center gap-3 md:gap-4" data-testid="social-links-header">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover-elevate active-elevate-2 rounded-md p-2 transition-colors"
              aria-label="Facebook"
              data-testid="link-facebook"
            >
              <SiFacebook className="h-5 w-5" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover-elevate active-elevate-2 rounded-md p-2 transition-colors"
              aria-label="Twitter"
              data-testid="link-twitter"
            >
              <SiX className="h-5 w-5" />
            </a>
            <a 
              href="https://pinterest.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover-elevate active-elevate-2 rounded-md p-2 transition-colors"
              aria-label="Pinterest"
              data-testid="link-pinterest"
            >
              <SiPinterest className="h-5 w-5" />
            </a>
            <a 
              href="https://tumblr.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover-elevate active-elevate-2 rounded-md p-2 transition-colors"
              aria-label="Tumblr"
              data-testid="link-tumblr"
            >
              <SiTumblr className="h-5 w-5" />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
