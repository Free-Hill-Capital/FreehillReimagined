import { Building2, Laptop, Heart, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
    icon: Heart,
    title: "Healthcare",
    description: "Supporting healthcare businesses that improve patient outcomes and operational efficiency."
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    description: "Partnering with service-based businesses to enhance capabilities and drive growth."
  }
];

export default function FocusAreas() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
        <div className="mb-12 space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl" data-testid="text-focus-heading">
            Focus Areas
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground" data-testid="text-focus-description">
            We invest across diverse industries, bringing operational expertise and strategic capital to each sector.
          </p>
        </div>
        
        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((area, index) => (
            <Card key={area.title} className="hover-elevate" data-testid={`card-focus-${index}`}>
              <CardContent className="p-8 space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <area.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold" data-testid={`text-focus-title-${index}`}>
                  {area.title}
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground" data-testid={`text-focus-desc-${index}`}>
                  {area.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
