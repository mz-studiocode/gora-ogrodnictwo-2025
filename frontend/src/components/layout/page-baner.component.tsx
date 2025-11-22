import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { StaticImageData } from "next/image";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageBannerProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
  backgroundImage: StaticImageData;
}

export const PageBanner = ({ title, breadcrumbs, backgroundImage }: PageBannerProps) => {
  return (
    <div className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage.src})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-white/80 mb-6 text-sm md:text-base">
          {breadcrumbs.map((crumb, index) => (
            <div key={index} className="flex items-center gap-2">
              {crumb.href ? (
                <Link 
                  href={crumb.href}
                  className="hover:text-white transition-colors"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white">{crumb.label}</span>
              )}
              {index < breadcrumbs.length - 1 && (
                <ChevronRight className="w-4 h-4" />
              )}
            </div>
          ))}
        </nav>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-wide">
          {title}
        </h1>
      </div>
    </div>
  );
};