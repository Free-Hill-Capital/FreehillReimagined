import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroWithVideoProps {
  videoUrl?: string;
  slogan?: string;
  description?: string;
}

export default function HeroWithVideo({ 
  videoUrl = "/banner-video.mp4",
  slogan = "Building Lasting Enterprises",
  description = "We partner with founders and companies to build, scale, and strengthen businesses through operational excellence and disciplined growth."
}: HeroWithVideoProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <section ref={ref} className="relative h-[60vh] min-h-[600px] md:h-[70vh] md:min-h-[930px] overflow-hidden">
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
          data-testid="video-background"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/50 pointer-events-none" />
      </motion.div>
      
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center pt-[80px] md:pt-[220px] px-6 md:px-12">
        <motion.div 
          className="text-center space-y-4 md:space-y-6 max-w-4xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.5, delay: 0.5, ease: "easeOut" }}
        >
          <h1 
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-5xl"
            data-testid="text-hero-title"
          >
            {slogan}
          </h1>
          <p 
            className="mx-auto max-w-2xl text-sm sm:text-base text-white/90 md:text-xl px-4"
            style={{ lineHeight: '1.8' }}
            data-testid="text-hero-subtitle"
          >
            {description}
          </p>
          
          <div className="pt-2 md:pt-4">
            <Link href="/about">
              <Button 
                size="lg" 
                className="group h-10 sm:h-12 px-6 sm:px-8 text-sm sm:text-base font-semibold bg-white text-black hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
