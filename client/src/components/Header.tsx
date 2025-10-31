import { SiX, SiInstagram } from "react-icons/si";
import { Link, useLocation } from "wouter";

export default function Header() {
  const [location] = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-[100] border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between px-6 md:px-12">
        <Link href="/" className="hover-elevate active-elevate-2" style={{ boxShadow: '0 0 10px 2px #00000017', top: '36px' }}>
          <img src="/main-logo.jpg" alt="Free Hill Capital" className="w-auto object-contain" style={{ height: '8rem' }} />
        </Link>
        
        <div className="flex items-center gap-6 md:gap-8">
          <nav className="hidden sm:flex items-center gap-6" data-testid="main-navigation">
            <Link 
              href="/"
              className={`text-sm font-medium rounded-md px-4 py-2 transition-all duration-300 ease-in-out border-b-2 ${
                location === '/' 
                  ? 'text-foreground bg-primary/10 border-primary' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50 border-transparent'
              }`}
              data-testid="link-home"
            >
              Home
            </Link>
            <Link 
              href="/about"
              className={`text-sm font-medium rounded-md px-4 py-2 transition-all duration-300 ease-in-out border-b-2 ${
                location === '/about' 
                  ? 'text-foreground bg-primary/10 border-primary' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50 border-transparent'
              }`}
              data-testid="link-about"
            >
              About Us
            </Link>
            <Link 
              href="/contact"
              className={`text-sm font-medium rounded-md px-4 py-2 transition-all duration-300 ease-in-out border-b-2 ${
                location === '/contact' 
                  ? 'text-foreground bg-primary/10 border-primary' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50 border-transparent'
              }`}
              data-testid="link-contact"
            >
              Contact Us
            </Link>
          </nav>
          
          <nav className="flex items-center gap-3 md:gap-[0.3rem]" data-testid="social-links-header">
            <a 
              href="https://www.twitter.com/freehillcapital" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover-elevate active-elevate-2 rounded-md p-2 transition-colors"
              aria-label="Twitter"
              data-testid="link-twitter"
            >
              <SiX className="h-5 w-5" />
            </a>
            <a 
              href="https://instagram.com/freehillcapital" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover-elevate active-elevate-2 rounded-md p-2 transition-colors"
              aria-label="Instagram"
              data-testid="link-instagram"
            >
              <SiInstagram className="h-5 w-5" />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
