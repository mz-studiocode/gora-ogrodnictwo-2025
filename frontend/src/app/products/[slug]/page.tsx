'use client';

import { useSearchParams } from "next/navigation";
import { PageBanner } from "@/components/layout/page-baner.component";
import { SimplifiedContactForm } from "@/components/contact-form/simplified-contact-form.component";
import { ImageLightbox } from "@/components/layout/image-lightbox.component";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { Product } from "@/types/product.types";
import { StrapiImage } from "@/components/custom/strapi-image.component";

const ProductDetail = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [product, setProduct] = useState<Product | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchProductById = async () => {
      if (!id) return;
      const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/strore-products/${id}`);
      const data = await response.json();
      const productData: Product = data.data;
      setProduct(productData);
    };
    fetchProductById();
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Produkt nie został znaleziony</h1>
            <Link href="/products" className="text-accent hover:underline">
              Wróć do katalogu produktów
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handleNavigate = (direction: "prev" | "next") => {
    if (direction === "prev" && currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    } else if (direction === "next" && currentImageIndex < product.galleryImages.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <PageBanner
          title={product.name}
          breadcrumbs={[
            { label: "Strona główna", href: "/" },
            { label: "Produkty", href: "/products" },
            { label: product.name }
          ]}
        />

        {/* Product Details */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <StrapiImage
                    src={product.image.url}
                    alt={product.image.alternativeText ?? product.name}
                    width={product.image.width}
                    height={product.image.height}
                    className="w-full rounded-xl shadow-lg"
                    priority={true}
                  />
                </div>
                <div>
                  <div className="mb-4">
                    <Badge variant="secondary" className="mb-4">
                      {product.category.name}
                    </Badge>
                  </div>
                  
                  {product.price && (
                    <p className="text-3xl font-bold text-accent mb-6">
                      {product.price}
                    </p>
                  )}

                  <p className="text-foreground/80 leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {product.specifications && (
                    <div className="bg-muted/30 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-4">Specyfikacja</h3>
                      <dl className="space-y-3">
                        {product.specifications.map((spec, index) => (
                          <div key={index} className="flex justify-between">
                            <dt className="text-foreground/70 font-medium">{spec.label}:</dt>
                            <dd className="text-foreground">{spec.value}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  )}

                  <div className="mt-6 flex flex-wrap gap-2">
                    {product.tags.map((tag, index) => (
                      <Badge key={index} variant="outline">
                        {tag.name}
                      </Badge>
                    ))}
                  </div>

                  <a href="tel:+48123456789" className="mt-6 block">
                    <Button variant="cta" size="lg" className="w-full cursor-pointer">
                      <Phone className="w-5 h-5" />
                      Zamów
                    </Button>
                  </a>
                </div>
              </div>

              {/* Gallery */}
              {product.galleryImages.length > 0 && (
                <div className="mb-16">
                  <h2 className="text-3xl font-semibold text-foreground mb-8">Galeria zdjęć</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {product.galleryImages.map((image, index) => (
                      <div
                        key={index}
                        className="aspect-square overflow-hidden rounded-lg cursor-pointer group"
                        onClick={() => openLightbox(index)}
                      >
                        <StrapiImage
                          src={image.url}
                          alt={image.alternativeText ?? `${product.name} - zdjęcie ${index + 1}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          width={image.width}
                          height={image.height}
                          priority={true}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
        <SimplifiedContactForm />
      </main>

      <ImageLightbox
        images={product.galleryImages}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={handleNavigate}
      />
    </div>
  );
};

export default ProductDetail;
