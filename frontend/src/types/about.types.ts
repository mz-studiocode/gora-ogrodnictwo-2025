import { HOME_PAGE_COMPONENTS } from "./home-page.types";
import { Image } from "./image.types";

export interface AboutSection {
    __component: HOME_PAGE_COMPONENTS.AboutSection;
    id:          number;
    reversed:    boolean;
    headline:    string;
    content:     string;
    image:       Image;
}