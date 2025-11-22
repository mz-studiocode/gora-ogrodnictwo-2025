"use client";

import { useState } from "react";
import { PageBanner } from "@/components/layout/page-baner.component";
import { Card, CardContent   } from "@/components/ui/card";
import grassPhoto from "@/assets/images/grass.jpg";
import Image from "next/image";
import { Category, projects } from "@/data/projects.mock";
import Link from "next/link";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("wszystkie");

  const categories: Category[] = ["wszystkie", "ogrodzenia", "ogrody", "trawniki", "inne"];

  const filteredProjects = selectedCategory === "wszystkie" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`py-4 px-2 font-medium border-b-2 transition-colors whitespace-nowrap ${
                    selectedCategory === category
                      ? "text-foreground border-accent"
                      : "text-foreground/60 hover:text-foreground border-transparent hover:border-accent/50"
                  }`}
                >
                  {category}
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
                {filteredProjects.map((project) => (
                  <Link href={`/projects/${project.slug}`} key={project.id}>  
                    <Card 
                      key={project.id} 
                      className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300 cursor-pointer"
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <Image 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
                ))}
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
