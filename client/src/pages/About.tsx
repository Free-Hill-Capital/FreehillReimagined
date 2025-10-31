import Header from "@/components/Header";
import VideoHero from "@/components/VideoHero";
import Footer from "@/components/Footer";
import { BookOpen, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="relative min-h-screen bg-background">
      <Header />
      <main className="relative pt-16 md:pt-20 md:pb-[80px]">
        <section className="pt-0 md:pt-[150px]">
          <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
            <div className="mb-12 md:mb-16 space-y-4 text-center">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight md:text-5xl" data-testid="text-about-heading">
                About Us
              </h1>
              <p className="mx-auto max-w-3xl text-base sm:text-lg md:text-xl text-muted-foreground" data-testid="text-about-subtitle">
                Learn more about our mission, values, and the story behind Free Hill Capital.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-0 md:py-16 bg-background">
          <div className="mx-auto max-w-7xl pb-10 md:pb-0 px-6 md:px-12">
            {/* Grid Layout: 2 rows x 2 columns */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              
              {/* 1st Column: Our Story (spans 2 rows) */}
              <Card className="group border-none shadow-lg hover:shadow-2xl transition-all duration-500 lg:row-span-2">
                <CardContent className="p-8 md:p-10 py-12 md:py-16 space-y-6 h-full flex flex-col justify-center">
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-all duration-500 group-hover:bg-primary group-hover:scale-110 group-hover:rotate-12">
                      <BookOpen className="h-8 w-8 text-primary transition-colors duration-500 group-hover:text-primary-foreground" strokeWidth={1.5} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight transition-colors duration-300 group-hover:text-primary" data-testid="text-our-story">
                      Our Story
                    </h2>
                  </div>
                  <div className="space-y-6">
                    <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                      Founded in 2015, Free Hill Capital began as a private equity firm focused on investing in underrepresented founders and distressed companies with untapped potential. Over the years, it evolved into a modern conglomerate — a hands-on operator that builds, scales, and supports businesses across construction, technology, healthcare, and professional services.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                      Free Hill's mission is grounded in operational excellence, disciplined growth, and long-term value creation. Rather than chasing quick exits, we partner with companies to strengthen infrastructure, enhance efficiency, and unlock enduring profitability. From capital to strategy, Free Hill Capital exists to turn strong ideas into lasting enterprises.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* 2nd Column - 1st Row: Video */}
              <div className="lg:row-span-1">
                <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted shadow-lg h-full">
                  <video
                    autoPlay
                    loop
                    controls
                    playsInline
                    className="h-full w-full object-cover"
                    data-testid="video-player"
                  >
                    <source src="/banner-video.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>

              {/* 2nd Column - 2nd Row: Our Approach */}
              <Card className="group border-none shadow-lg hover:shadow-2xl transition-all duration-500 lg:row-span-1">
                <CardContent className="p-8 md:p-10 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-all duration-500 group-hover:bg-primary group-hover:scale-110 group-hover:rotate-12">
                      <Target className="h-8 w-8 text-primary transition-colors duration-500 group-hover:text-primary-foreground" strokeWidth={1.5} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight transition-colors duration-300 group-hover:text-primary" data-testid="text-our-approach">
                      Our Approach
                    </h2>
                  </div>
                  <div className="space-y-4">
                    <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                      We believe in being hands-on partners, not passive investors. Our team brings deep operational expertise across multiple industries, allowing us to identify opportunities others might miss and execute transformations that create lasting value.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
