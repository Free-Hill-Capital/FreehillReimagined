import { Building2, Laptop, HeartPulse, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const focusAreas = [
  {
    icon: Building2,
    title: "Construction",
    description: "Building infrastructure and creating value in the construction sector through operational improvements."
  },
  {
    icon: Laptop,
    title: "Technology",
    description: "Investing in innovative tech companies with scalable solutions and strong market potential."
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description: "Supporting healthcare businesses that improve patient outcomes and operational efficiency."
  },
  {
    icon: Users,
    title: "Professional Services",
    description: "Partnering with service-based businesses to enhance capabilities and drive growth."
  }
];

export default function FocusAreas() {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true, amount: 0.5 });

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div ref={headerRef} className="mb-12 md:mb-16 space-y-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight" data-testid="text-focus-heading">
            Focus Areas
          </h2>
          <p className="mx-auto max-w-3xl text-base sm:text-lg md:text-xl text-muted-foreground" data-testid="text-focus-description">
            We invest across diverse industries, bringing operational expertise and strategic capital to each sector.
          </p>
        </div>
        
        <div className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((area, index) => {
            // Middle cards (index 1, 2) animate first together, outer cards (index 0, 3) animate last
            const delay = index === 1 || index === 2 ? 0 : index === 0 ? 0.3 : 0.3;
            
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, x: index < 2 ? -1000 : 1000 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index < 2 ? -1000 : 1000 }}
                transition={{ duration: 1.5, delay }}
              >
                <Card 
                className="group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full" 
                data-testid={`card-focus-${index}`}
              >
                <CardContent className="p-6 md:p-8 space-y-4">
                  <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                    <area.icon className="h-11 w-11 text-primary transition-colors duration-300 group-hover:text-primary-foreground" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold transition-colors duration-300 group-hover:text-primary" data-testid={`text-focus-title-${index}`}>
                    {area.title}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed text-muted-foreground" data-testid={`text-focus-desc-${index}`}>
                    {area.description}
                  </p>
                </CardContent>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-500 ease-out group-hover:w-full" />
              </Card>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
