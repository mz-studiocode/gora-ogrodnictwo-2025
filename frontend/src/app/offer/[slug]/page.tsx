"use client";

import teamPhoto from "@/assets/images/contact-tree.jpg";
import { SimplifiedContactForm } from "@/components/contact-form/simplified-contact-form.component";
import { StrapiImage } from "@/components/custom/strapi-image.component";
import DynamicIcon from "@/components/dynamic-icon/DynamicIcon";
import { PageBanner } from "@/components/layout/page-baner.component";
import { Card, CardContent } from "@/components/ui/card";
import { ServiceItem } from "@/types/services.types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";


export default function ServiceDetail() {
  const [services, setServices] = useState<ServiceItem[]>([]);
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    const fetchServices = async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/services`);
      const data = await response.json();

      const servicesData: ServiceItem[] = data.data;
      
      setServices(servicesData);
    };
    fetchServices();
  }, []);
  

  
  const service = services.find((s) => s.slug.href === slug);

  const Icon = service?.icon;

  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-1">
        <PageBanner
          title={service?.title ?? ""}
          breadcrumbs={[
            { label: "Strona główna", href: "/" },
            { label: "Oferta", href: "/offer" },
            { label: service?.title ?? "" },
          ]}
          backgroundImage={teamPhoto}
        />

        {/* Service Description */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <DynamicIcon name={Icon?.name ?? ""} />
                </div>
                <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-6">
                  O usłudze
                </h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  {service?.description ?? ""}
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  {service?.longDescription ?? ""}
                </p>
              </div>
              <div>
                {service?.image?.url && (
              <StrapiImage
                src={service?.image?.url ?? ""}
                alt={service?.image?.alternativeText ?? "About us image"}
                width={service?.image?.width ?? 0}
                height={service?.image?.height ?? 0}
                className="w-full h-[400px] object-cover rounded-xl shadow-lg"
                priority={true}
              />
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Example Projects */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-12 text-center">
              Przykładowe realizacje
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {service?.projects.map((project) => (
                <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <StrapiImage
                    src={project.image.url}
                    alt={project.title}
                    width={project.image.width}
                    height={project.image.height}
                    className="w-full h-64 object-cover"
                    priority={true}
                  />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium text-primary mb-2">
                      {project.title}
                    </h3>
                    <p className="text-foreground/70">{project.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <SimplifiedContactForm />
      </main>
     
    </div>
  );
};
