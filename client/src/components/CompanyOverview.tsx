import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function CompanyOverview() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 1, 1, 1]);

  return (
    <section ref={ref} className="py-20 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid gap-20 lg:grid-cols-[1fr,2fr] lg:gap-24">
          {/* Left Column - Title */}
          <motion.div className="space-y-4 lg:sticky lg:top-24 lg:self-start" style={{ y, opacity }}>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight" data-testid="text-section-title">
              Free Hill Capital
            </h2>
            <div className="flex items-baseline gap-3">
              <div className="h-px w-12 bg-primary" />
              <p className="text-2xl md:text-3xl font-medium text-primary" data-testid="text-founded-year">
                Est. 2015
              </p>
            </div>
          </motion.div>
          
          {/* Right Column - Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2 }}
          >
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground" data-testid="text-mission-statement">
              Founded in 2015, Free Hill Capital began as a private equity firm focused on investing in underrepresented founders and distressed companies with untapped potential. Over the years, it evolved into a modern conglomerate - a hands-on operator that builds, scales, and supports businesses across construction, technology, healthcare, and professional services.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground" data-testid="text-company-mission">
              Free Hill's mission is grounded in operational excellence, disciplined growth, and long-term value creation. Rather than chasing quick exits, we partner with companies to strengthen infrastructure, enhance efficiency, and unlock enduring profitability. From capital to strategy, Free Hill Capital exists to turn strong ideas into lasting enterprises.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
