"use client";

import { SimplifiedContactForm } from "@/components/contact-form/simplified-contact-form.component";
import { ImageLightbox } from "@/components/layout/image-lightbox.component";
import { PageBanner } from "@/components/layout/page-baner.component";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { StrapiImage } from "@/components/custom/strapi-image.component";
import { ProjectItem } from "@/types/project.types";
import { Calendar, MapPin } from "lucide-react";
import Link from "next/link";

const ProjectDetail = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [project, setProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    const fetchProjectById = async () => {
      if (!id) return;
      const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/projects/${id}`);
      const data = await response.json();
      const projectData: ProjectItem = data.data;
      setProject(projectData);
    };
    fetchProjectById();
  }, [id]);
  

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handleNavigate = (direction: "prev" | "next") => {
    if (direction === "prev" && currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    } else if (direction === "next" && currentImageIndex < (project?.galleryImages?.length ?? 0) - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  console.log(project);
  

  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-1">
        <PageBanner
          title={project?.title ?? ""}
          breadcrumbs={[
            { label: "Strona główna", href: "/" },
            { label: "Projekty", href: "/projects" },
            { label: project?.title ?? "" },
          ]}
        />

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <div className="flex gap-6 mb-6 text-foreground/70">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-accent" />
                    <span>{project?.location ?? ""}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-accent" />
                    <span>{project?.year ?? ""}</span>
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-6">
                  O projekcie
                </h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  {project?.description ?? ""}
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  {project?.longDescription ?? ""}
                </p>
              </div>

              {project?.image?.url && (
              <div>
                <StrapiImage
                  src={project?.image?.url ?? ""}
                  alt={project?.image?.alternativeText ?? ""}
                  width={project?.image?.width ?? 0}
                  height={project?.image?.height ?? 0}
                  className="w-full h-[400px] object-cover rounded-xl shadow-lg"
                  priority={true}
                />
              </div>
              )}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-12 text-center">
              Galeria zdjęć
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {project?.galleryImages?.map((image, index) => (
                <div
                  key={index}
                  onClick={() => openLightbox(index)}
                  className="relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer group"
                >
                  <StrapiImage
                    src={image.url}
                    alt={image.alternativeText ?? ""}
                    width={image.width}
                    height={image.height}
                    priority={true}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-medium">
                      Kliknij aby powiększyć
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-12 text-center">
              Zobacz inne projekty
            </h2>
            <div className="flex justify-center">
              <Link 
                href="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium bg-accent text-accent-foreground hover:bg-accent/90 h-11 px-8 shadow-md hover:shadow-lg transition-all"
              >
                Wszystkie projekty
              </Link>
            </div>
          </div>
        </section>

        <SimplifiedContactForm />
      </main>
 

      <ImageLightbox
        images={project?.galleryImages ?? []}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={handleNavigate}
      />
    </div>
  );
};

export default ProjectDetail;
