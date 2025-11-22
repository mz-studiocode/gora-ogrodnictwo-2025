import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import heroImage from "@/assets/images/hero-garden.jpeg";


export const Hero = () => {
  return (
    <section className="bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] lg:min-h-[700px]">
          {/* Content - Left Side */}
          <div className="flex items-center px-4 py-16 lg:py-24">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
                Przekształć swoją przestrzeń zewnętrzną w naturalny raj
              </h1>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                Profesjonalne usługi projektowania i aranżacji ogrodów, które wcielają Twoją wizję w życie. 
                Od koncepcji po realizację, tworzymy zrównoważone, piękne tereny zielone dostosowane do Twoich potrzeb.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  asChild 
                  variant="cta" 
                  size="lg"
                  className="text-base"
                >
                  <Link href="/">Uzyskaj bezpłatną konsultację</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-base font-medium border-2"
                >
                  <a href="tel:+48795007742" className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    +48 795 007 742
                  </a>
                </Button>
              </div>

              {/* Service Feature */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-foreground font-medium">
                    Projektowanie ogrodów / architektura krajobrazu / utrzymanie / pielęgnacja sezonowa
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image - Right Side */}
          <div className="relative lg:h-auto h-[400px]">
            <Image 
              src={heroImage}
              width={600}
              height={400}
              alt="Professional garden landscaping" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
