import { Button } from "@/components/ui/button";
import { ServicesSection } from "@/types/services.types";
import Link from "next/link";
import { useMemo } from "react";
import DynamicIcon from "../dynamic-icon/DynamicIcon";

export const Services = ({ data }: { data: ServicesSection | null }) => {
  const servicesComponent = useMemo(() => {
    return data ?? null;
  }, [data]);
  
  
  if (!servicesComponent) return null;


  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-4">
            {servicesComponent.title}
          </h2>
          <p className="text-base md:text-lg text-foreground/80">
            {servicesComponent.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {servicesComponent.services.map((service, index) => {
            const iconName = service.icon.name;
            const href = service.slug?.href;
            const text = service.slug?.text;

            return (
              <div
                key={index}
                className="bg-card rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Icon */}
                {iconName && (
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                    <DynamicIcon name={iconName} />
                  </div>
                )}

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-medium text-primary mb-4">
                  {service.title}
                </h3>
                <p className="text-foreground/70 mb-6 leading-relaxed min-h-[140px]">
                  {service.description}
                </p>

                {/* CTA Button */}
                {service.slug && (
                <Button asChild variant="outline" className="w-full hover:bg-accent hover:text-accent-foreground hover:border-accent">
                    <Link href={`/offer/${href}`}>{text}</Link>
                  </Button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};