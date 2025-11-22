'use client'

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useCallback, useState } from "react";
import Logo from "@/assets/logo/logo.component";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = useCallback((path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
 
    return pathname.startsWith(path);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center group cursor-pointer">
            <Logo width={70} height={75} className="text-primary transition-colors group-hover:opacity-90" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            <Link href="/" className={cn("text-foreground hover:text-accent transition-colors font-medium relative pb-1 border-b-2 border-transparent hover:border-accent", isActive("/") && "border-accent")}>
              Strona główna
            </Link>
            <Link href="/offer" className={cn("text-foreground hover:text-accent transition-colors font-medium relative pb-1 border-b-2 border-transparent hover:border-accent", isActive("/offer") && "border-accent")}>
              Oferta
            </Link>
            <Link href="/projects" className={cn("text-foreground hover:text-accent transition-colors font-medium relative pb-1 border-b-2 border-transparent hover:border-accent", isActive("/projects") && "border-accent")}  >
              Projekty
            </Link>
            <Link href="/contact" className={cn("text-foreground hover:text-accent transition-colors font-medium relative pb-1 border-b-2 border-transparent hover:border-accent", isActive("/contact") && "border-accent")}>
              Kontakt
            </Link>
          </nav>

          {/* CTA Button - Desktop */}
          <Button asChild variant={isActive("/products") ? "default" : "cta"} className={"hidden md:inline-flex"}>
            <Link href="/products">Produkty</Link>
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={cn("text-foreground hover:text-accent transition-colors font-medium py-2", isActive("/") && "text-accent")}
              >
                Strona główna
              </Link>
              <Link
                href="/offer"
                onClick={() => setMobileMenuOpen(false)}
                className={cn("text-foreground hover:text-accent transition-colors font-medium py-2", isActive("/offer") && "text-accent")}
              >
                Oferta
              </Link>
              <Link
                href="/projects"
                onClick={() => setMobileMenuOpen(false)}
                className={cn("text-foreground hover:text-accent transition-colors font-medium py-2", isActive("/projects") && "text-accent")}
              >
                Projekty
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={cn("text-foreground hover:text-accent transition-colors font-medium py-2", isActive("/contact") && "text-accent")}
              >
                Kontakt
              </Link>
              <Button asChild variant={isActive("/products") ? "default" : "cta"} className={"w-full mt-2"}>
                <Link href="/products">Produkty</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
