import { HeroSection } from "./hero.types";
import { AboutSection } from "./about.types";
import { ServicesSection } from "./services.types";
import { ContactSection } from "./contact.types";

type HomePageComponent = HeroSection | AboutSection | ServicesSection | ContactSection;

export enum HOME_PAGE_COMPONENTS {
    HeroSection = 'blocks.hero-section',
    AboutSection = 'blocks.about-section',
    ServicesSection = 'blocks.service-section',
    ContactSection = 'blocks.contact-section',
}

export interface HomePage {
    data: HomePageData;
}

export interface HomePageData {
    id:          number;
    documentId:  string;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
    blocks:      HomePageComponent[];
}


