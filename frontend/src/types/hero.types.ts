import { Cta } from "./cta.types";
import { HOME_PAGE_COMPONENTS } from "./home-page.types";
import { Image } from "./image.types";

export interface HeroSection {
    __component: HOME_PAGE_COMPONENTS.HeroSection;
    id:          number;
    heading:     string;
    description: string;
    image:       Image;
    cta:         Cta;
    phone:       Cta;
    service:     string;
}