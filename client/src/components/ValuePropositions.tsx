import { TrendingUp, Target, Award } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Operational Excellence",
    description: "We bring hands-on operational expertise to strengthen infrastructure and enhance business efficiency."
  },
  {
    icon: TrendingUp,
    title: "Disciplined Growth",
    description: "Strategic, methodical approach to scaling businesses with sustainable and measurable results."
  },
  {
    icon: Target,
    title: "Long-term Value",
    description: "Focus on enduring profitability rather than quick exits, building lasting enterprises for the future."
  }
];

export default function ValuePropositions() {
  return (
    <section className="py-20 md:py-24 bg-background">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
        <div className="mb-12 space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl" data-testid="text-values-heading">
            Our Approach
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground" data-testid="text-values-description">
            Grounded in principles that drive sustainable success and lasting impact.
          </p>
        </div>
        
        <div className="grid gap-8 md:gap-12 md:grid-cols-3">
          {values.map((value, index) => (
            <div key={value.title} className="text-center space-y-6" data-testid={`card-value-${index}`}>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <value.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold md:text-2xl" data-testid={`text-value-title-${index}`}>
                  {value.title}
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground" data-testid={`text-value-desc-${index}`}>
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
