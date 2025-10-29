import Header from "@/components/Header";
import VideoHero from "@/components/VideoHero";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
            <div className="mb-12 space-y-4 text-center">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl" data-testid="text-about-heading">
                About Us
              </h1>
              <p className="mx-auto max-w-2xl text-xl text-muted-foreground" data-testid="text-about-subtitle">
                Learn more about our mission, values, and the story behind Free Hill Capital.
              </p>
            </div>
          </div>
        </section>
        
        <VideoHero title="Free Hill Capital Story" />
        
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="mx-auto max-w-4xl px-6 md:px-8 lg:px-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight" data-testid="text-our-story">
                  Our Story
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Founded in 2015, Free Hill Capital began as a private equity firm focused on investing in underrepresented founders and distressed companies with untapped potential. Over the years, it evolved into a modern conglomerate — a hands-on operator that builds, scales, and supports businesses across construction, technology, healthcare, and professional services.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Free Hill's mission is grounded in operational excellence, disciplined growth, and long-term value creation. Rather than chasing quick exits, we partner with companies to strengthen infrastructure, enhance efficiency, and unlock enduring profitability. From capital to strategy, Free Hill Capital exists to turn strong ideas into lasting enterprises.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight" data-testid="text-our-approach">
                  Our Approach
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  We believe in being hands-on partners, not passive investors. Our team brings deep operational expertise across multiple industries, allowing us to identify opportunities others might miss and execute transformations that create lasting value.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
