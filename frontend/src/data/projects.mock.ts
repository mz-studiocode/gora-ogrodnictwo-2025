import heroGarden from "@/assets/images/hero-garden.jpeg";
import teamPhoto from "@/assets/images/contact-tree.jpg";
import contactTruck from "@/assets/images/contact-truck.jpg";
import contactWorker from "@/assets/images/contact-tree.jpg";
import contactTeam from "@/assets/images/contact-grass.jpg";
import { StaticImageData } from "next/image";

export type Category = "wszystkie" | "ogrodzenia" | "ogrody" | "trawniki" | "inne";

export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  category: Category;
  image: StaticImageData;
  longDescription: string;
  location: string;
  year: string;
  galleryImages: StaticImageData[];
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "nowoczesny-ogrod-przydomowy",
    title: "Nowoczesny ogród przydomowy",
    description: "Kompleksowe zagospodarowanie ogrodu z trawnikiem z rolki, rabatami roślinnymi i systemem nawadniania.",
    category: "ogrody",
    image: heroGarden,
    longDescription: "Ten projekt to kompleksowa metamorfoza ogrodu przydomowego. Realizacja obejmowała założenie wysokiej jakości trawnika z rolki, zaprojektowanie i wykonanie estetycznych rabat roślinnych oraz instalację nowoczesnego systemu nawadniania automatycznego. Klient otrzymał funkcjonalną i piękną przestrzeń do wypoczynku.",
    location: "Warszawa",
    year: "2024",
    galleryImages: [heroGarden, teamPhoto, contactTeam, contactTruck, contactWorker, heroGarden],
  },
  {
    id: 2,
    slug: "pielegnacja-drzew-owocowych",
    title: "Pielęgnacja drzew owocowych",
    description: "Profesjonalne cięcie i kształtowanie drzew owocowych w sadzie przydomowym.",
    category: "ogrody",
    image: contactWorker,
    longDescription: "Kompleksowa pielęgnacja sadu przydomowego obejmująca profesjonalne cięcie sanitarne i kształtujące drzew owocowych. Dzięki naszym zabiegom drzewa odzyskały zdrowie i zwiększyły plonowanie. Przeprowadziliśmy również zabiegi ochronne i nawożenie.",
    location: "Konstancin-Jeziorna",
    year: "2024",
    galleryImages: [contactWorker, contactTeam, heroGarden, teamPhoto],
  },
  {
    id: 3,
    slug: "zakladanie-trawnika",
    title: "Zakładanie trawnika",
    description: "Przygotowanie terenu i założenie trawnika z siewu z profesjonalnym systemem podlewania.",
    category: "trawniki",
    image: teamPhoto,
    longDescription: "Projekt zakładał stworzenie pięknego, gęstego trawnika na dużej powierzchni. Rozpoczęliśmy od gruntownego przygotowania podłoża, następnie przeprowadziliśmy siew wyselekcjonowaną mieszanką traw. Całość uzupełniliśmy systemem automatycznego nawadniania.",
    location: "Piaseczno",
    year: "2023",
    galleryImages: [teamPhoto, heroGarden, contactTruck, contactTeam],
  },
  {
    id: 4,
    slug: "usuwanie-pni-drzew",
    title: "Usuwanie pni drzew",
    description: "Frezowanie pni drzew po wycince z pełnym usunięciem korzeni.",
    category: "inne",
    image: contactTruck,
    longDescription: "Usunięcie pozostałości po starych drzewach za pomocą profesjonalnej frezarki. Pnie zostały sfrezowane do głębokości 10 cm poniżej poziomu gruntu, co umożliwiło klientowi swobodne zagospodarowanie terenu. Wszystkie odpady zostały usunięte z miejsca realizacji.",
    location: "Józefosław",
    year: "2024",
    galleryImages: [contactTruck, contactWorker, contactTeam, heroGarden],
  },
  {
    id: 5,
    slug: "ogrod-ozdobny",
    title: "Ogród ozdobny",
    description: "Projekt i realizacja ogrodu ozdobnego z różnorodnymi gatunkami roślin i kamiennymi elementami.",
    category: "ogrody",
    image: contactTeam,
    longDescription: "Prestiżowa realizacja kompleksowego ogrodu ozdobnego łączącego różnorodne gatunki roślin, eleganckie kamienne elementy i nowoczesne oświetlenie. Projekt zawiera strefy wypoczynku, ozdobne rabaty oraz ścieżki z kamienia naturalnego.",
    location: "Konstancin-Jeziorna",
    year: "2023",
    galleryImages: [contactTeam, heroGarden, teamPhoto, contactTruck, contactWorker],
  },
  {
    id: 6,
    slug: "nawodnienie-automatyczne",
    title: "Nawodnienie automatyczne",
    description: "Instalacja systemu nawadniania kropelkowego dla dużej powierzchni zieleni.",
    category: "trawniki",
    image: heroGarden,
    longDescription: "Zaprojektowanie i wykonanie zaawansowanego systemu nawadniania kropelkowego dla dużego ogrodu. System wyposażony w programowalny sterownik z czujnikami wilgotności i deszczu zapewnia optymalne nawodnienie przy minimalnym zużyciu wody.",
    location: "Warszawa",
    year: "2024",
    galleryImages: [heroGarden, contactTruck, teamPhoto, contactTeam],
  },
];

export const categories: Category[] = ["wszystkie", "ogrodzenia", "ogrody", "trawniki", "inne"];
