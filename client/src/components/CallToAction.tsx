import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

export default function CallToAction() {
  const handleContact = () => {
    console.log('Contact button clicked');
    window.location.href = 'mailto:info@freehillcapital.com';
  };

  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="mx-auto max-w-4xl px-6 md:px-8 lg:px-12 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl" data-testid="text-cta-heading">
              Ready to Build Something Lasting?
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground" data-testid="text-cta-description">
              Whether you're a founder looking for strategic capital or a business seeking operational expertise, we're here to partner with you.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="gap-2 px-8"
              onClick={handleContact}
              data-testid="button-contact"
            >
              <Mail className="h-5 w-5" />
              Get in Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="gap-2 px-8"
              onClick={() => console.log('Learn more clicked')}
              data-testid="button-learn-more"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
