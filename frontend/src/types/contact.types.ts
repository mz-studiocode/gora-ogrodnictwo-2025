import { Image } from "./image.types";
import { HOME_PAGE_COMPONENTS } from "./home-page.types";

type Service = {
    id: number;
    name: string;
    isChecked: boolean;
}

export interface ContactSection {
    __component: HOME_PAGE_COMPONENTS.ContactSection;
    id:          number;
    title:       string;
    description: string;
    gallery:     Image[];
    isServicesCheckboxEnabled: boolean;
    services:    Service[];
}