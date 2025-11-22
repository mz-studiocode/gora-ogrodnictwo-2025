"use client"

import { useState } from "react";
import { PageBanner } from "@/components/layout/page-baner.component";
import { Card, CardContent } from "@/components/ui/card";
import { products, productCategories, type ProductCategory } from "@/data/products.mock";
import { Badge } from "@/components/ui/badge";
import heroGarden from "@/assets/images/hero-garden.jpeg";
import Link from "next/link";
import Image from "next/image";

const ProductCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | "All">("All");

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <PageBanner
          title="Katalog Produktów"
          breadcrumbs={[
            { label: "Strona główna", href: "/" },
            { label: "Produkty" }
          ]}
          backgroundImage={heroGarden}
        />

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar */}
              <aside className="lg:w-64 flex-shrink-0">
                <div className="bg-muted/30 rounded-xl p-6 sticky top-24">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Kategorie</h3>
                  <nav className="space-y-2">
                    <button
                      onClick={() => setSelectedCategory("All")}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedCategory === "All"
                          ? "bg-accent text-accent-foreground font-medium"
                          : "text-foreground/70 hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      Wszystkie produkty
                    </button>
                    {productCategories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                          selectedCategory === category
                            ? "bg-accent text-accent-foreground font-medium"
                            : "text-foreground/70 hover:bg-muted hover:text-foreground"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </nav>
                </div>
              </aside>

              {/* Products Grid */}
              <div className="flex-1">
                {filteredProducts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
                      <Link
                        key={product.id}
                        href={`/products/${product.slug}`}
                      >
                        <Card className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
                          <div className="aspect-[4/3] overflow-hidden">
                            <Image
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <CardContent className="p-6">
                            <h3 className="text-xl font-semibold text-foreground mb-2">
                              {product.name}
                            </h3>
                            {product.price && (
                              <p className="text-lg font-medium text-accent mb-3">
                                {product.price}
                              </p>
                            )}
                            <div className="flex flex-wrap gap-2">
                              {product.tags.map((tag, index) => (
                                <Badge
                                  key={index}
                                  variant="secondary"
                                  className="text-xs"
                                >
                                  {tag}
                                </Badge>
                              ))}
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
                        Brak produktów w tej kategorii
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductCatalog;
