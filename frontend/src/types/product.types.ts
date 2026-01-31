import { Image } from "./image.types";

export interface ProductCategory {
    id: number;
    name: string;
}

export interface Tag {
    id: number;
    name: string;
}

export interface Product {
    id: number;
    documentId: string;
    slug: string;
    name: string;
    description: string;
    category: ProductCategory;
    tags: Tag[];
    image: Image;
    price?: string;
    specifications?: {
      label: string;
      value: string;
    }[];
    galleryImages: Image[];
  }