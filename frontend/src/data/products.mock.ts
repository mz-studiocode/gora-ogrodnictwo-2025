import heroGarden from "@/assets/images/hero-garden.jpeg";
import teamPhoto from "@/assets/images/contact-tree.jpg";
import contactTruck from "@/assets/images/contact-truck.jpg";
import contactWorker from "@/assets/images/contact-tree.jpg";
import contactTeam from "@/assets/images/contact-grass.jpg";
import { StaticImageData } from "next/image";


export type ProductCategory = "Kory ozdobne" | "Palikowanie" | "Rośliny" | "Nawozy" | "Akcesoria";

export interface Product {
  id: number;
  slug: string;
  name: string;
  description: string;
  category: ProductCategory;
  tags: string[];
  image: StaticImageData;
  price?: string;
  specifications?: {
    label: string;
    value: string;
  }[];
  galleryImages: StaticImageData[];
}

export const products: Product[] = [
  {
    id: 1,
    slug: "kora-sosnowa-gruboziarnista",
    name: "Kora sosnowa gruboziarnista",
    description: "Naturalna kora sosnowa o frakcji 20-40mm, idealna do ścieżek ogrodowych i rabat. Doskonale chroni przed chwastami i utrzymuje wilgotność w glebie.",
    category: "Kory ozdobne",
    tags: ["kora", "ścieżki", "mulcz", "sosna"],
    image: heroGarden,
    price: "25 zł/worek 50L",
    specifications: [
      { label: "Frakcja", value: "20-40mm" },
      { label: "Pojemność", value: "50L" },
      { label: "Pochodzenie", value: "Polska" },
    ],
    galleryImages: [heroGarden, teamPhoto, contactTeam],
  },
  {
    id: 2,
    slug: "kora-kamienna-czerwona",
    name: "Kora kamienna czerwona",
    description: "Elegancka kora kamienna w kolorze czerwonym. Trwały i dekoracyjny element aranżacji ogrodu, nie wymaga częstej wymiany.",
    category: "Kory ozdobne",
    tags: ["kamień", "dekoracja", "czerwony", "trwały"],
    image: contactTeam,
    price: "45 zł/worek 25kg",
    specifications: [
      { label: "Frakcja", value: "16-32mm" },
      { label: "Waga", value: "25kg" },
      { label: "Kolor", value: "Czerwony" },
    ],
    galleryImages: [contactTeam, heroGarden, teamPhoto],
  },
  {
    id: 3,
    slug: "slupki-do-palikowania-drzew",
    name: "Słupki do palikowania drzew",
    description: "Drewniane słupki sosnowe impregnowane ciśnieniowo. Idealne do podpierania młodych drzew i krzewów.",
    category: "Palikowanie",
    tags: ["drewno", "palikowanie", "drzewa", "impregnacja"],
    image: contactWorker,
    price: "18 zł/szt",
    specifications: [
      { label: "Długość", value: "180cm" },
      { label: "Średnica", value: "6-8cm" },
      { label: "Materiał", value: "Sosna impregnowana" },
    ],
    galleryImages: [contactWorker, contactTruck, heroGarden],
  },
  {
    id: 4,
    slug: "taśma-do-podwiązywania-drzew",
    name: "Taśma do podwiązywania drzew",
    description: "Elastyczna taśma do podwiązywania drzew do słupków. Nie uszkadza kory drzewa, zapewnia stabilność.",
    category: "Palikowanie",
    tags: ["taśma", "podwiązywanie", "elastyczna", "ochrona"],
    image: teamPhoto,
    price: "12 zł/rolka 25m",
    specifications: [
      { label: "Długość", value: "25m" },
      { label: "Szerokość", value: "20mm" },
      { label: "Materiał", value: "Guma naturalna" },
    ],
    galleryImages: [teamPhoto, heroGarden, contactTeam],
  },
  {
    id: 5,
    slug: "hortensja-ogrodowa",
    name: "Hortensja ogrodowa",
    description: "Piękna hortensja ogrodowa w doniczce C5. Bogate kwiaty w odcieniach różu i błękitu. Idealna do cienia i półcienia.",
    category: "Rośliny",
    tags: ["kwiaty", "cień", "wieloletnia", "ozdobna"],
    image: heroGarden,
    price: "35 zł/szt",
    specifications: [
      { label: "Doniczka", value: "C5 (5L)" },
      { label: "Wysokość", value: "40-50cm" },
      { label: "Stanowisko", value: "Cień/półcień" },
    ],
    galleryImages: [heroGarden, contactTeam, teamPhoto],
  },
  {
    id: 6,
    slug: "lawenda-angielska",
    name: "Lawenda angielska",
    description: "Aromatyczna lawenda w doniczce C2. Odporna, kwitnąca od czerwca do sierpnia. Idealna na rabaty i krawędzie.",
    category: "Rośliny",
    tags: ["lawenda", "aromatyczna", "słońce", "rabaty"],
    image: contactTeam,
    price: "18 zł/szt",
    specifications: [
      { label: "Doniczka", value: "C2 (2L)" },
      { label: "Wysokość", value: "25-35cm" },
      { label: "Stanowisko", value: "Słoneczne" },
    ],
    galleryImages: [contactTeam, heroGarden, contactTruck],
  },
  {
    id: 7,
    slug: "nawoz-uniwersalny-organiczny",
    name: "Nawóz uniwersalny organiczny",
    description: "Naturalny nawóz organiczny do wszystkich roślin ogrodowych. Poprawia strukturę gleby i dostarcza składników odżywczych.",
    category: "Nawozy",
    tags: ["nawóz", "organiczny", "uniwersalny", "ekologiczny"],
    image: contactTruck,
    price: "35 zł/worek 10kg",
    specifications: [
      { label: "Waga", value: "10kg" },
      { label: "Typ", value: "Organiczny" },
      { label: "Zastosowanie", value: "Wszystkie rośliny" },
    ],
    galleryImages: [contactTruck, teamPhoto, heroGarden],
  },
  {
    id: 8,
    slug: "sekator-profesjonalny",
    name: "Sekator profesjonalny",
    description: "Wysokiej jakości sekator ze stali nierdzewnej. Ergonomiczny uchwyt, precyzyjne cięcie gałęzi do 25mm.",
    category: "Akcesoria",
    tags: ["narzędzia", "sekator", "cięcie", "profesjonalny"],
    image: teamPhoto,
    price: "85 zł/szt",
    specifications: [
      { label: "Materiał ostrza", value: "Stal nierdzewna" },
      { label: "Max średnica cięcia", value: "25mm" },
      { label: "Długość", value: "20cm" },
    ],
    galleryImages: [teamPhoto, contactWorker, heroGarden],
  },
  {
    id: 9,
    slug: "geowloknina-chwastoblocz",
    name: "Geowłóknina chwastobłócz",
    description: "Przepuszczalna geowłóknina o gramaturze 100g/m². Skutecznie blokuje chwasty, przepuszcza wodę i powietrze.",
    category: "Akcesoria",
    tags: ["geowłóknina", "chwasty", "przepuszczalna", "ochrona"],
    image: contactWorker,
    price: "4 zł/m²",
    specifications: [
      { label: "Gramatura", value: "100g/m²" },
      { label: "Szerokość rolki", value: "1,6m" },
      { label: "Długość rolki", value: "50m" },
    ],
    galleryImages: [contactWorker, contactTruck, teamPhoto],
  },
];

export const productCategories: ProductCategory[] = [
  "Kory ozdobne",
  "Palikowanie",
  "Rośliny",
  "Nawozy",
  "Akcesoria",
];
