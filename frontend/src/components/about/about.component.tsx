import { HOME_PAGE_COMPONENTS, HomePageData } from "@/types/home-page.types";
import { StrapiImage } from "@/components/custom/strapi-image.component";
import { useMemo } from "react";
import { cn } from "@/lib/utils";
import RichText from "../layout/rich-text.component";

export const About = ({ data }: { data: HomePageData }) => {
  const aboutComponent = useMemo(() => {
    return data.blocks.filter((block) => block.__component === HOME_PAGE_COMPONENTS.AboutSection) ?? [];
  }, [data]);

  if (aboutComponent.length === 0) return null;

  return aboutComponent.map((component) => (
    <section key={component.id} className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Team Photo */}
          <div className={cn("relative", component.reversed ? "order-2" : "order-1")}>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <StrapiImage
                src={component.image.url}
                alt={component.image.alternativeText ?? "About us image"}
                width={component.image.width}
                height={component.image.height}
                className="w-full h-auto object-cover"
                priority={true}
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-full opacity-20 blur-2xl" />
          </div>

          {/* Content */}
          <div className={cn("order-1", component.reversed ? "text-right" : "text-left")}>
            {component.headline && component.headline.length > 0 && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-6">
                {component.headline}
              </h2>
            )}
            {component.content && component.content.length > 0 && (
              <RichText data={{ body: component.content }} />
            )}
          </div>
        </div>
      </div>
    </section>
  ));
};
