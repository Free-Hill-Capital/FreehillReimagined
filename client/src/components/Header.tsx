import { SiX, SiInstagram } from "react-icons/si";
import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="md:fixed left-0 right-0 w-full z-[100] border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-[9.8rem] md:h-16 max-w-7xl items-center justify-between px-6 md:px-12">
        <Link href="/" className="hover-elevate top-0 md:top-[36px] md:active-elevate-2" style={{ boxShadow: '0 0 10px 2px #00000017'  }}>
          <img src="/main-logo.jpg" alt="Free Hill Capital" className="w-auto object-contain h-20 md:h-32" style={{ height: '8rem' }} />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 md:gap-8">
          <nav className="flex items-center gap-6" data-testid="main-navigation">
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

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-4">
          <nav className="flex items-center gap-2" data-testid="social-links-mobile">
            <a 
              href="https://www.twitter.com/freehillcapital" 
              target="_blank" 
              rel="noopener noreferrer"
              className="rounded-md p-2 transition-colors"
              aria-label="Twitter"
            >
              <SiX className="h-4 w-4" />
            </a>
            <a 
              href="https://instagram.com/freehillcapital" 
              target="_blank" 
              rel="noopener noreferrer"
              className="rounded-md p-2 transition-colors"
              aria-label="Instagram"
            >
              <SiInstagram className="h-4 w-4" />
            </a>
          </nav>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="flex flex-col p-4 space-y-2">
            <Link 
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-sm font-medium rounded-md px-4 py-3 transition-all duration-300 ${
                location === '/' 
                  ? 'text-foreground bg-primary/10' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-sm font-medium rounded-md px-4 py-3 transition-all duration-300 ${
                location === '/about' 
                  ? 'text-foreground bg-primary/10' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
            >
              About Us
            </Link>
            <Link 
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-sm font-medium rounded-md px-4 py-3 transition-all duration-300 ${
                location === '/contact' 
                  ? 'text-foreground bg-primary/10' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
