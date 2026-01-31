import { Category } from "./category.types";
import { Image } from "./image.types";

export interface ProjectItem {
    id: number;
    documentId: string;
    title: string;
    description: string;
    image: Image;
    categories: Category[];
    location: string;
    year: number;
    longDescription: string;
    galleryImages: Image[];
}