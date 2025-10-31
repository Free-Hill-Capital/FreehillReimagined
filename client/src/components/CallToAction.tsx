import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CallToAction() {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true, amount: 0.5 });

  const handleContact = () => {
    console.log('Contact button clicked');
    window.location.href = '/contact';
  };

  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="mx-auto max-w-4xl px-6 md:px-8 lg:px-12 text-center">
        <motion.div 
          ref={headerRef}
          className="space-y-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={{ duration: 1.5 }}
        >
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
              className="gap-2 px-8 transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
              onClick={handleContact}
              data-testid="button-contact"
            >
              <Mail className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
              Get in Touch
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
