export enum CTA_THEME {
    YELLOW = 'yellow',
    TRANSPARENT = 'transparent',
}

export interface Cta {
    id:         number;
    text:       string;
    href:       string;
    isExternal: boolean;
    theme:      CTA_THEME;
}