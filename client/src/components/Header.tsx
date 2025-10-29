import { Facebook } from "lucide-react";
import { SiFacebook, SiX, SiPinterest, SiTumblr } from "react-icons/si";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between px-6 md:px-12">
        <div className="text-xl md:text-2xl font-bold tracking-tight">
          Free Hill Capital
        </div>
        
        <nav className="flex items-center gap-4 md:gap-6" data-testid="social-links-header">
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
    </header>
  );
}
