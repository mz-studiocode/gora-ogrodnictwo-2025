
import { HOME_PAGE_COMPONENTS } from "./home-page.types";
import { Href } from "./href.types";
import { Icon } from "./icon.types";
import { Image } from "./image.types";
import { ProjectItem } from "./project.types";


export interface ServiceItem {
    __component: HOME_PAGE_COMPONENTS.ServicesSection;
    id:          number;
    slug:        Href;
    icon:        Icon;
    title:       string;
    description: string;
    longDescription: string;
    image: Image;
    projects: ProjectItem[];
}

export interface ServicesSection {
    __component: HOME_PAGE_COMPONENTS.ServicesSection;
    id:          number;
    title:       string;
    description: string;
    services:    ServiceItem[];
}