import { Button } from "@/components/ui/button";
import { CTA_THEME } from "@/types/cta.types";
import { HOME_PAGE_COMPONENTS, HomePageData } from "@/types/home-page.types";
import { Phone } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";
import { StrapiImage } from "@/components/custom/strapi-image.component";

export const Hero = ({ data }: { data: HomePageData }) => {
  const heroComponent = useMemo(() => {
    return data.blocks.find((block) => block.__component === HOME_PAGE_COMPONENTS.HeroSection) ?? null;
  }, [data]);

  if (!heroComponent) return null;

  return (
    <section className="bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] lg:min-h-[700px]">
          {/* Content - Left Side */}
          <div className="flex items-center px-4 py-16 lg:py-24">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
                {heroComponent.heading}
              </h1>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                {heroComponent.description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  asChild 
                  variant={heroComponent.cta.theme === CTA_THEME.YELLOW ? "cta" : "outline"}
                  size="lg"
                  className="text-base"
                >
                  <Link href={heroComponent.cta.href}>{heroComponent.cta.text}</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant={heroComponent.phone.theme === CTA_THEME.TRANSPARENT ? "outline" : "cta"}
                  className="text-base font-medium border-2"
                >
                  <a href={heroComponent.phone.href} className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    {heroComponent.phone.text}
                  </a>
                </Button>
              </div>

              {/* Service Feature */}
              {heroComponent.service && (
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-foreground font-medium">
                    {heroComponent.service}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Image - Right Side */}
          <div className="relative lg:h-auto h-[400px]">
            <StrapiImage 
              src={heroComponent.image.url}
              width={heroComponent.image.width}
              height={heroComponent.image.height}
              alt={heroComponent.image.alternativeText ?? "Profesjonalne projektowanie ogrodów"} 
              className="absolute inset-0 w-full h-full object-cover"
              priority={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
