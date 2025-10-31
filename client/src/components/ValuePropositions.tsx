import { TrendingUp, LineChart, Award } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const values = [
  {
    icon: Award,
    title: "Operational\nExcellence",
    description: "We bring hands-on operational expertise to strengthen infrastructure and enhance business efficiency."
  },
  {
    icon: TrendingUp,
    title: "Disciplined\nGrowth",
    description: "Strategic, methodical approach to scaling businesses with sustainable and measurable results."
  },
  {
    icon: LineChart,
    title: "Long-term\nValue",
    description: "Focus on enduring profitability rather than quick exits, building lasting enterprises for the future."
  }
];

export default function ValuePropositions() {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true, amount: 0.5 });

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 md:px-4">
        <div ref={headerRef} className="mb-16 space-y-4 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight" data-testid="text-values-heading">
            Our Approach
          </h2>
          <p className="mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground" data-testid="text-values-description">
            Grounded in principles that drive sustainable success and lasting impact.
          </p>
        </div>
        
        <div className="grid gap-3 md:gap-1 md:grid-cols-3">
          {values.map((value, index) => {
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 2.5 }}
                className="group text-center space-y-6 p-8 rounded-2xl transition-all duration-300 hover:bg-muted/30 hover:shadow-lg" 
                data-testid={`card-value-${index}`}
              >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 transition-all duration-500 group-hover:bg-primary group-hover:scale-110 group-hover:rotate-[360deg]">
                <value.icon className="h-10 w-10 text-primary transition-colors duration-300 group-hover:text-primary-foreground" strokeWidth={1.5} />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold transition-colors duration-300 group-hover:text-primary whitespace-pre-line" data-testid={`text-value-title-${index}`}>
                  {value.title}
                </h3>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground" data-testid={`text-value-desc-${index}`}>
                  {value.description}
                </p>
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
