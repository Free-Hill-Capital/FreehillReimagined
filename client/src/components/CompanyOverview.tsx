export default function CompanyOverview() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
        <div className="grid gap-12 md:gap-16 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl" data-testid="text-section-title">
                Free Hill Capital
              </h2>
              <p className="text-4xl font-bold text-primary" data-testid="text-founded-year">
                Est. 2015
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-base leading-relaxed md:text-lg" data-testid="text-mission-statement">
              Founded in 2015, Free Hill Capital began as a private equity firm focused on investing in underrepresented founders and distressed companies with untapped potential. Over the years, it evolved into a modern conglomerate — a hands-on operator that builds, scales, and supports businesses across construction, technology, healthcare, and professional services.
            </p>
            <p className="text-base leading-relaxed md:text-lg" data-testid="text-company-mission">
              Free Hill's mission is grounded in operational excellence, disciplined growth, and long-term value creation. Rather than chasing quick exits, we partner with companies to strengthen infrastructure, enhance efficiency, and unlock enduring profitability. From capital to strategy, Free Hill Capital exists to turn strong ideas into lasting enterprises.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
