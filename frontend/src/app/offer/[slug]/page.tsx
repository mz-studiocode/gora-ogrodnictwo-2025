"use client";

import teamPhoto from "@/assets/images/contact-tree.jpg";
import contactTruck from "@/assets/images/contact-truck.jpg";
import heroImage from "@/assets/images/hero-garden.jpeg";
import pavingStone from "@/assets/images/paving-stone.jpg";
import { SimplifiedContactForm } from "@/components/contact-form/simplified-contact-form.component";
import { PageBanner } from "@/components/layout/page-baner.component";
import { Card, CardContent } from "@/components/ui/card";
import { Droplets, Fence, Leaf, Shovel, Sprout, Sun, TreeDeciduous } from "lucide-react";
import Image from "next/image";
import { redirect, useParams } from "next/navigation";

const services = [
  {
    slug: "wycinka-drzew",
    icon: TreeDeciduous,
    title: "Wycinka drzew",
    description:
      "Profesjonalna wycinka drzew z zachowaniem pełnych norm bezpieczeństwa. Usuwamy drzewa każdej wielkości, zarówno w trudno dostępnych miejscach, jak i na otwartych przestrzeniach. Dysponujemy profesjonalnym sprzętem i doświadczoną ekipą, która zadba o bezpieczeństwo Twojej nieruchomości.",
    longDescription:
      "Nasza usługa wycinki drzew obejmuje kompleksową ocenę terenu, bezpieczne usunięcie drzew oraz uporządkowanie miejsca po zakończeniu prac. Pracujemy z najnowocześniejszym sprzętem i przestrzegamy wszystkich norm bezpieczeństwa. Nasz zespół składa się z certyfikowanych arborystów z wieloletnim doświadczeniem.",
    image: teamPhoto,
  },
  {
    slug: "mielenie-galezi-rebakiem",
    icon: Leaf,
    title: "Mielenie gałęzi rębakiem",
    description:
      "Usługa mielenia gałęzi za pomocą profesjonalnego rębaka. Przerabiamy gałęzie i konary na ekologiczny zrębek, który może być wykorzystany jako naturalne ściółkowanie w ogrodzie. Szybko i efektywnie pozbywa się niepotrzebnych odpadów ogrodowych.",
    longDescription:
      "Profesjonalne mielenie gałęzi to ekologiczne rozwiązanie pozwalające na przetworzenie odpadów ogrodowych w użyteczny materiał. Zrębek można wykorzystać jako naturalne ściółkowanie, które chroni glebę przed wysychaniem i wspiera zdrowy wzrost roślin. Dysponujemy wydajnymi rębakiami różnych wielkości.",
    image: pavingStone,
  },
  {
    slug: "frezowanie-pni-drzew",
    icon: Sprout,
    title: "Frezowanie pni drzew",
    description:
      "Usuwanie pni drzew metodą frezowania. Specjalistyczna frezarka pozwala na usunięcie pnia do 8-10 cm poniżej powierzchni ziemi wraz z korzeniami bez konieczności wykonywania dużych wykopów. Po frezowaniu pozostają jedynie trociny, które można wykorzystać jako kompost lub usunąć.",
    longDescription:
      "Frezowanie pni to najskuteczniejsza i najmniej inwazyjna metoda usuwania pozostałości po ściętych drzewiach. Nasza specjalistyczna frezarka usuwa pień wraz z korzeniami do głębokości 8-10 cm poniżej poziomu gruntu, co pozwala na swobodne zagospodarowanie terenu. Proces jest szybki, czysty i nie pozostawia wielkich dziur w ogrodzie.",
    image: heroImage,
  },
  {
    slug: "nawadnianie-automatyczne",
    icon: Droplets,
    title: "Nawadnianie automatyczne",
    description:
      "Projektowanie i montaż systemów automatycznego nawadniania ogrodów i trawników. Nowoczesne systemy zapewniają optymalne nawodnienie roślin przy jednoczesnej oszczędności wody. Programowalne sterowniki dostosowują podlewanie do potrzeb Twojego ogrodu.",
    longDescription:
      "Automatyczne systemy nawadniania to inwestycja, która szybko się zwraca poprzez oszczędność wody i czasu. Projektujemy systemy dostosowane do specyfiki każdego ogrodu, uwzględniając rodzaje roślin, topografię terenu i źródła wody. Instalujemy programowalne sterowniki z czujnikami deszczu i wilgotności gleby.",
    image: contactTruck,
  },
  {
    slug: "zakladanie-i-koszenie-trawnikow",
    icon: Sun,
    title: "Zakładanie i koszenie trawników",
    description:
      "Kompleksowe usługi związane z trawnikami - od zakładania z siewu lub rolki po profesjonalne koszenie traktorem ogrodniczym. Zapewniamy piękny, zdrowy trawnik przez cały sezon. Dysponujemy profesjonalnym sprzętem do koszenia dużych powierzchni.",
    longDescription:
      "Oferujemy pełen zakres usług trawnikowych - od przygotowania gleby, przez siew lub układanie trawy z rolki, po regularne koszenie i pielęgnację. Doradzamy w doborze odpowiedniej mieszanki traw dostosowanej do warunków świetlnych i użytkowania. Nasz sprzęt do koszenia gwarantuje równomierne i profesjonalne wykończenie.",
    image: pavingStone,
  },
  {
    slug: "kompleksowe-zakladanie-ogrodow",
    icon: Fence,
    title: "Kompleksowe zakładanie ogrodów",
    description:
      "Kompleksowe usługi zakładania ogrodów od projektu po realizację. Pielęgnacja drzew, roślin i nasadzenia. Zakładanie trawników z siewu i z rolki. Dysponujemy usługami koparkami różnej wielkości w zależności od potrzeby oraz wywozem gruzu i ziemi. Obsługujemy zarówno duże jak i małe inwestycje.",
    longDescription:
      "Realizujemy kompleksowe projekty ogrodowe od A do Z. Nasz zespół obejmuje architektów krajobrazu, ogrodników i operatorów maszyn. Tworzymy ogrody zgodne z Twoją wizją, uwzględniając estetykę, funkcjonalność i zrównoważony rozwój. Zajmujemy się wszystkimi pracami ziemnymi, nasadzeniami i wykończeniem.",
    image: teamPhoto,
  },
  {
    slug: "koparka-lancuchowa",
    icon: Shovel,
    title: "Koparka łańcuchowa",
    description:
      "Profesjonalne usługi koparki łańcuchowej do kopania rowów pod nawodnienie lub instalacje elektryczne. Możliwość wykonania rowów o głębokości 20, 40 lub 60 cm w zależności od potrzeb projektu. Precyzyjne i szybkie wykonanie bez nadmiernego naruszania terenu.",
    longDescription:
      "Koparka łańcuchowa to idealne rozwiązanie do wykonywania wąskich, głębokich rowów pod instalacje. W przeciwieństwie do tradycyjnych koparek, minimalizuje naruszenie terenu i pozwala na precyzyjną pracę nawet w trudno dostępnych miejscach. Oferujemy różne głębokości rowów dostosowane do wymagań instalacji.",
    image: contactTruck,
  },
];

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return redirect('/404')
  }

  const Icon = service.icon;

  // Mock example projects
  const exampleProjects = [
    {
      id: 1,
      image: pavingStone,
      title: "Realizacja w Krakowie",
      description: "Kompleksowa realizacja dla klienta prywatnego",
    },
    {
      id: 2,
      image: teamPhoto,
      title: "Projekt komercyjny",
      description: "Profesjonalne wykonanie dla firmy",
    },
    {
      id: 3,
      image: contactTruck,
      title: "Ogród przydomowy",
      description: "Piękny efekt końcowy",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-1">
        <PageBanner
          title={service.title}
          breadcrumbs={[
            { label: "Strona główna", href: "/" },
            { label: "Oferta", href: "/offer" },
            { label: service.title },
          ]}
          backgroundImage={service.image}
        />

        {/* Service Description */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-6">
                  O usłudze
                </h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  {service.description}
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  {service.longDescription}
                </p>
              </div>
              <div>
                <Image
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[400px] object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Example Projects */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-12 text-center">
              Przykładowe realizacje
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {exampleProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium text-primary mb-2">
                      {project.title}
                    </h3>
                    <p className="text-foreground/70">{project.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <SimplifiedContactForm />
      </main>
     
    </div>
  );
};
