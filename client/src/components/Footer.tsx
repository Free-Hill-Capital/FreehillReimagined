import { SiFacebook, SiX, SiPinterest, SiTumblr } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="border-t bg-background py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4 md:col-span-2">
            <h3 className="text-xl font-bold" data-testid="text-footer-title">
              Free Hill Capital
            </h3>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground" data-testid="text-footer-tagline">
              Building lasting enterprises through operational excellence, disciplined growth, and long-term value creation.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold" data-testid="text-footer-contact-heading">Contact</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p data-testid="text-footer-email">info@freehillcapital.com</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold" data-testid="text-footer-connect-heading">Connect</h4>
            <div className="flex gap-4" data-testid="social-links-footer">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover-elevate active-elevate-2 rounded-md p-2 transition-colors"
                aria-label="Facebook"
                data-testid="link-footer-facebook"
              >
                <SiFacebook className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover-elevate active-elevate-2 rounded-md p-2 transition-colors"
                aria-label="Twitter"
                data-testid="link-footer-twitter"
              >
                <SiX className="h-5 w-5" />
              </a>
              <a 
                href="https://pinterest.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover-elevate active-elevate-2 rounded-md p-2 transition-colors"
                aria-label="Pinterest"
                data-testid="link-footer-pinterest"
              >
                <SiPinterest className="h-5 w-5" />
              </a>
              <a 
                href="https://tumblr.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover-elevate active-elevate-2 rounded-md p-2 transition-colors"
                aria-label="Tumblr"
                data-testid="link-footer-tumblr"
              >
                <SiTumblr className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground" data-testid="text-copyright">
          <p>© {new Date().getFullYear()} Free Hill Capital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
