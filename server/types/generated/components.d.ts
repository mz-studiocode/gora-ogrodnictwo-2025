import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksAboutSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_about_sections';
  info: {
    displayName: 'About Section';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    headline: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    reversed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface BlocksContactSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_contact_sections';
  info: {
    displayName: 'Contact Section';
  };
  attributes: {
    gallery: Schema.Attribute.Media<'images' | 'files', true>;
    isServicesCheckboxEnabled: Schema.Attribute.Boolean;
    services: Schema.Attribute.Component<'elements.checkbox', true>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    phone: Schema.Attribute.Component<'elements.link', false>;
    service: Schema.Attribute.String;
  };
}

export interface BlocksServiceSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_service_sections';
  info: {
    displayName: 'Service Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    services: Schema.Attribute.Relation<'oneToMany', 'api::service.service'>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsCheckbox extends Struct.ComponentSchema {
  collectionName: 'components_elements_checkboxes';
  info: {
    displayName: 'Checkbox';
  };
  attributes: {
    isChecked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    name: Schema.Attribute.String;
  };
}

export interface ElementsIcon extends Struct.ComponentSchema {
  collectionName: 'components_elements_icons';
  info: {
    displayName: 'Icon';
  };
  attributes: {
    name: Schema.Attribute.Enumeration<
      [
        'ArrowRight',
        'ArrowLeft',
        'ArrowUp',
        'ArrowDown',
        'Search',
        'Menu',
        'X',
        'Check',
        'Plus',
        'Minus',
        'ChevronRight',
        'ChevronLeft',
        'ChevronUp',
        'ChevronDown',
        'Mail',
        'Phone',
        'User',
        'Users',
        'Star',
        'Heart',
        'Home',
        'Settings',
        'Bell',
        'Camera',
        'Image',
        'Edit',
        'Trash',
        'Copy',
        'Download',
        'Upload',
        'Globe',
        'Lock',
        'Unlock',
        'Eye',
        'EyeOff',
        'Folder',
        'Tag',
        'Calendar',
        'Clock',
        'Map',
        'Pin',
        'ShoppingCart',
        'CreditCard',
        'Gift',
        'Filter',
        'Share',
        'Wifi',
        'Bluetooth',
        'Cpu',
        'Monitor',
        'Laptop',
        'Tablet',
        'Smartphone',
        'Battery',
        'BatteryCharging',
        'Cloud',
        'CloudRain',
        'CloudSun',
        'CloudSnow',
        'CloudLightning',
        'Sun',
        'Moon',
        'StarHalf',
        'Leaf',
        'Sprout',
        'TreeDeciduous',
        'Droplets',
        'Water',
        'Flower',
        'Sunrise',
        'Sunset',
        'Wind',
        'Thermometer',
        'Shovel',
        'Fence',
        'Bug',
        'Shield',
        'List',
        'Layers',
        'Book',
        'Bookmark',
        'MessageCircle',
        'MessageSquare',
        'Send',
        'Play',
        'Pause',
        'Stop',
        'Volume',
        'VolumeX',
        'Headphones',
        'Music',
        'Video',
        'Film',
        'Briefcase',
        'Archive',
        'Box',
        'ChartBar',
        'ChartLine',
        'ChartPie',
        'Rocket',
        'Sparkles',
      ]
    >;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
    theme: Schema.Attribute.Enumeration<['yellow', 'transparent']>;
  };
}

export interface ElementsLogo extends Struct.ComponentSchema {
  collectionName: 'components_elements_logos';
  info: {
    displayName: 'Logo';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface ElementsSpecification extends Struct.ComponentSchema {
  collectionName: 'components_elements_specifications';
  info: {
    displayName: 'Specification';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.about-section': BlocksAboutSection;
      'blocks.contact-section': BlocksContactSection;
      'blocks.hero-section': BlocksHeroSection;
      'blocks.service-section': BlocksServiceSection;
      'elements.checkbox': ElementsCheckbox;
      'elements.icon': ElementsIcon;
      'elements.link': ElementsLink;
      'elements.logo': ElementsLogo;
      'elements.specification': ElementsSpecification;
    }
  }
}
