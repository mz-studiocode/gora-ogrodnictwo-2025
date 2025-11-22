import { Button } from "@/components/ui/button";
import { Leaf, TreeDeciduous, Sprout, Droplets, Fence, Sun, Shovel } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: 1,
    slug: "wycinka-drzew",
    icon: TreeDeciduous,
    title: "Wycinka drzew",
    description:
      "Profesjonalna wycinka drzew z zachowaniem pełnych norm bezpieczeństwa. Usuwamy drzewa każdej wielkości, zarówno w trudno dostępnych miejscach, jak i na otwartych przestrzeniach. Dysponujemy profesjonalnym sprzętem i doświadczoną ekipą, która zadba o bezpieczeństwo Twojej nieruchomości.",
  },
  {
    id: 2,
    slug: "mielenie-galezi-rebakiem",
    icon: Leaf,
    title: "Mielenie gałęzi rębakiem",
    description:
      "Usługa mielenia gałęzi za pomocą profesjonalnego rębaka. Przerabiamy gałęzie i konary na ekologiczny zrębek, który może być wykorzystany jako naturalne ściółkowanie w ogrodzie. Szybko i efektywnie pozbywa się niepotrzebnych odpadów ogrodowych.",
  },
  {
    id: 3,
    slug: "frezowanie-pni-drzew",
    icon: Sprout,
    title: "Frezowanie pni drzew",
    description:
      "Usuwanie pni drzew metodą frezowania. Specjalistyczna frezarka pozwala na usunięcie pnia do 8-10 cm poniżej powierzchni ziemi wraz z korzeniami bez konieczności wykonywania dużych wykopów. Po frezowaniu pozostają jedynie trociny, które można wykorzystać jako kompost lub usunąć.",
  },
  {
    id: 4,
    slug: "nawadnianie-automatyczne",
    icon: Droplets,
    title: "Nawadnianie automatyczne",
    description:
      "Projektowanie i montaż systemów automatycznego nawadniania ogrodów i trawników. Nowoczesne systemy zapewniają optymalne nawodnienie roślin przy jednoczesnej oszczędności wody. Programowalne sterowniki dostosowują podlewanie do potrzeb Twojego ogrodu.",
  },
  {
    id: 5,
    slug: "zakladanie-i-koszenie-trawnikow",
    icon: Sun,
    title: "Zakładanie i koszenie trawników",
    description:
      "Kompleksowe usługi związane z trawnikami - od zakładania z siewu lub rolki po profesjonalne koszenie traktorem ogrodniczym. Zapewniamy piękny, zdrowy trawnik przez cały sezon. Dysponujemy profesjonalnym sprzętem do koszenia dużych powierzchni.",
  },
  {
    id: 6,
    slug: "kompleksowe-zakladanie-ogrodow",
    icon: Fence,
    title: "Kompleksowe zakładanie ogrodów",
    description:
      "Kompleksowe usługi zakładania ogrodów od projektu po realizację. Pielęgnacja drzew, roślin i nasadzenia. Zakładanie trawników z siewu i z rolki. Dysponujemy usługami koparkami różnej wielkości w zależności od potrzeby oraz wywozem gruzu i ziemi. Obsługujemy zarówno duże jak i małe inwestycje.",
  },
  {
    id: 7,
    slug: "koparka-lancuchowa",
    icon: Shovel,
    title: "Koparka łańcuchowa",
    description:
      "Profesjonalne usługi koparki łańcuchowej do kopania rowów pod nawodnienie lub instalacje elektryczne. Możliwość wykonania rowów o głębokości 20, 40 lub 60 cm w zależności od potrzeb projektu. Precyzyjne i szybkie wykonanie bez nadmiernego naruszania terenu.",
  },
];

export const Services = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-4">
            Nasze usługi
          </h2>
          <p className="text-base md:text-lg text-foreground/80">
            Kompleksowe rozwiązania ogrodowe i krajobrazowe zaprojektowane, aby przekształcić Twoją przestrzeń zewnętrzną 
            w piękne, zrównoważone środowisko, którym będziesz się cieszyć przez wiele lat.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-accent" />
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-medium text-primary mb-4">
                  {service.title}
                </h3>
                <p className="text-foreground/70 mb-6 leading-relaxed min-h-[140px]">
                  {service.description}
                </p>

                {/* CTA Button */}
                <Button asChild variant="outline" className="w-full hover:bg-accent hover:text-accent-foreground hover:border-accent">
                  <Link href={`/offer/${service.slug}`}>Dowiedz się więcej</Link>
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};