"use client";

import { useEffect, useMemo, useState } from "react";
import { PageBanner } from "@/components/layout/page-baner.component";
import { Card, CardContent   } from "@/components/ui/card";
import grassPhoto from "@/assets/images/grass.jpg";
import { Category } from "@/types/category.types";
import Link from "next/link";
import { ProjectItem } from "@/types/project.types";
import { StrapiImage } from "@/components/custom/strapi-image.component";
import { removePolishCharacters } from "@/utils/removePolishCharacters";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [projects, setProjects] = useState<ProjectItem[]>([]);

  const visibleCategories = useMemo(() => {
    return [
      { id: 0, title: "wszystkie" },
      ...categories.map((category: Category) => ({ id: category.id, title: category.title })),
    ]
  }, [categories]);

  

    useEffect(() => {
      const fetchCategories = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/categories`);
        const data = await response.json();
  
        const categoriesData: Category[] = data.data;
        
        setCategories(categoriesData);
      };
      fetchCategories();
    }, []);

    useEffect(() => {
      const fetchProjects = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/projects`);
        const data = await response.json();
        const projectsData: ProjectItem[] = data.data;
        setProjects(projectsData);
      };
      fetchProjects();
    }, []);

    const filteredProjects = projects.filter((project: ProjectItem) => selectedCategory?.id === 0 ? true : project.categories.some((category: Category) => category.id === selectedCategory?.id));

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <PageBanner
          title="Nasze Projekty"
          breadcrumbs={[
            { label: "Strona główna", href: "/" },
            { label: "Nasze Projekty" }
          ]}
          backgroundImage={grassPhoto}
        />

        {/* Category Tabs */}
        <section className="border-b border-border bg-background">
          <div className="container mx-auto px-4">
            <div className="flex justify-end gap-8 overflow-x-auto">
              {visibleCategories.map((category: Category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category)}
                  className={`py-4 px-2 font-medium border-b-2 transition-colors whitespace-nowrap ${
                    selectedCategory === category
                      ? "text-foreground border-accent"
                      : "text-foreground/60 hover:text-foreground border-transparent hover:border-accent/50"
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filteredProjects.map((project) => {
                  const slug = removePolishCharacters(project.title);
                  return (
                    <Link href={`/projects/${slug}?id=${project.documentId}`} key={project.documentId}>  
                    <Card 
                      key={project.id} 
                      className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300 cursor-pointer"
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <StrapiImage 
                          src={project.image.url} 
                          width={project.image.width}
                          height={project.image.height}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          priority={true}
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-primary mb-2">
                          {project.title}
                        </h3>
                        <p className="text-foreground/70 leading-relaxed">
                          {project.description}
                        </p>
                        <div className="mt-4 inline-flex items-center text-accent font-medium text-sm group-hover:gap-2 transition-all">
                          Zobacz projekt
                          <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                  )
                })}
              </div>
            ) : (
              <div className="max-w-3xl mx-auto text-center">
                <div className="bg-muted/30 rounded-xl p-12 md:p-16">
                  <p className="text-foreground/70 text-lg">
                    Brak projektów w tej kategorii
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};
