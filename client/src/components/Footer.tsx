import { SiX, SiInstagram } from "react-icons/si";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-background pt-10 md:pb-[40px] md:pt-[80px]">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-6 md:col-span-2 lg:col-span-1">
            <h3 className="text-4xl md:text-[2.4rem] font-bold" data-testid="text-footer-title">
              Free Hill Capital
            </h3>
            <p className="max-w-md text-lg md:text-xl leading-relaxed text-muted-foreground" data-testid="text-footer-tagline">
              Building lasting enterprises through operational excellence, disciplined growth, and long-term value creation.
            </p>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-2xl md:text-[2.4rem] font-bold mb-8" data-testid="text-footer-contact-heading">Contact Information</h4>
            <div className="space-y-7 text-lg md:text-xl">
              <div className="flex items-start gap-5" data-testid="text-footer-location-ct">
                <MapPin className="h-7 w-7 mt-1 flex-shrink-0 text-primary" strokeWidth={1.5} />
                <div>
                  <p className="font-semibold text-xl md:text-2xl">Connecticut</p>
                  <p className="text-muted-foreground mt-1">860.310.5504</p>
                </div>
              </div>
              <div className="flex items-start gap-5" data-testid="text-footer-location-ny">
                <MapPin className="h-7 w-7 mt-1 flex-shrink-0 text-primary" strokeWidth={1.5} />
                <div>
                  <p className="font-semibold text-xl md:text-2xl">New York</p>
                  <p className="text-muted-foreground mt-1">917.970.0822</p>
                </div>
              </div>
              <div className="flex items-center gap-5" data-testid="text-footer-email">
                <Mail className="h-7 w-7 flex-shrink-0 text-primary" strokeWidth={1.5} />
                <a href="mailto:info@freehillcapital.com" className="text-muted-foreground hover:text-foreground transition-colors">
                  info@freehillcapital.com
                </a>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-2xl md:text-[2.4rem] font-bold mb-8" data-testid="text-footer-connect-heading">Connect</h4>
            <div className="flex gap-4" data-testid="social-links-footer">
              <a 
                href="https://www.twitter.com/freehillcapital" 
                target="_blank" 
                rel="noopener noreferrer"
                className="rounded-md p-2 transition-all hover:bg-muted"
                aria-label="Twitter"
                data-testid="link-footer-twitter"
              >
                <SiX className="h-6 w-6" />
              </a>
              <a 
                href="https://instagram.com/freehillcapital" 
                target="_blank" 
                rel="noopener noreferrer"
                className="rounded-md p-2 transition-all hover:bg-muted"
                aria-label="Instagram"
                data-testid="link-footer-instagram"
              >
                <SiInstagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="md:mt-20 mt-12 border-t py-12 md:pt-[40px] md:py-0 text-center text-base md:text-lg text-muted-foreground" data-testid="text-copyright">
          <p>© {new Date().getFullYear()} Free Hill Capital. <span className="block md:inline">All rights reserved.</span></p>
        </div>
      </div>
    </footer>
  );
}
