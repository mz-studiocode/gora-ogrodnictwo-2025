import Link from "next/link";
import { Facebook, Instagram, Phone, Mail } from "lucide-react";
import Logo from "@/assets/logo/logo.component";

export const Footer = () => {
  return (
    <footer className="bg-background text-foreground border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column - Brand */}
          <div>
            <Link href="/" className="flex items-center mb-6">
              <Logo width={70} height={75} className="text-primary" />
            </Link>
            
            <p className="text-foreground/70 mb-6 max-w-md leading-relaxed">
              Profesjonalne usługi projektowania ogrodów i terenów zielonych, tworzące piękne, 
              zrównoważone przestrzenie zewnętrzne, które podnoszą wartość Twojej nieruchomości i jakość życia.
            </p>

            {/* Social Media */}
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column - Links */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Szybkie linki</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-foreground/70 hover:text-accent transition-colors">
                    Strona główna
                  </Link>
                </li>
                <li>
                  <Link href="/offer" className="text-foreground/70 hover:text-accent transition-colors">
                    Oferta
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-foreground/70 hover:text-accent transition-colors">
                    Projekty
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-foreground/70 hover:text-accent transition-colors">
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Wsparcie</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-foreground/70 hover:text-accent transition-colors">
                    Polityka prywatności
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-foreground/70 hover:text-accent transition-colors">
                    Mapa strony
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="col-span-2">
              <h3 className="font-semibold text-lg mb-4">Kontakt</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="tel:+48795007742"
                    className="flex items-center gap-2 text-foreground/70 hover:text-accent transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    +48 795 007 742
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@gora-ogrodnictwo.com"
                    className="flex items-center gap-2 text-foreground/70 hover:text-accent transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    info@gora-ogrodnictwo.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/60 text-sm">
            Copyright © 2025. Wszelkie prawa zastrzeżone.
          </p>
          <p className="text-foreground/60 text-sm">
            Góra Ogrodnictwo | Profesjonalne usługi ogrodnicze
          </p>
        </div>
      </div>
    </footer>
  );
};
