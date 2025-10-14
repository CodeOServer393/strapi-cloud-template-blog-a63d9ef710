import type { Schema, Struct } from '@strapi/strapi';

export interface CuisineCard extends Struct.ComponentSchema {
  collectionName: 'components_cuisine_cards';
  info: {
    displayName: 'card';
    icon: 'arrowRight';
  };
  attributes: {
    Description: Schema.Attribute.Text & Schema.Attribute.Required;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    Link_To: Schema.Attribute.String & Schema.Attribute.Required;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomepageCard extends Struct.ComponentSchema {
  collectionName: 'components_homepage_cards';
  info: {
    displayName: 'Card';
    icon: 'briefcase';
  };
  attributes: {
    Description: Schema.Attribute.Text & Schema.Attribute.Required;
    Images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    > &
      Schema.Attribute.Required;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomepageMain extends Struct.ComponentSchema {
  collectionName: 'components_homepage_mains';
  info: {
    displayName: 'Main';
    icon: 'code';
  };
  attributes: {};
}

export interface MainCard extends Struct.ComponentSchema {
  collectionName: 'components_main_cards';
  info: {
    displayName: 'Card';
    icon: 'book';
  };
  attributes: {
    Description: Schema.Attribute.Text & Schema.Attribute.Required;
    Image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    > &
      Schema.Attribute.Required;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SeoFaq extends Struct.ComponentSchema {
  collectionName: 'components_seo_faqs';
  info: {
    displayName: 'faq';
    icon: 'bulletList';
  };
  attributes: {
    Answer: Schema.Attribute.Text & Schema.Attribute.Required;
    Question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SeoMain extends Struct.ComponentSchema {
  collectionName: 'components_seo_mains';
  info: {
    displayName: 'main';
    icon: 'alien';
  };
  attributes: {
    Description: Schema.Attribute.Text & Schema.Attribute.Required;
    faq: Schema.Attribute.Component<'seo.faq', true>;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Keywords: Schema.Attribute.String;
    Site_Name: Schema.Attribute.String & Schema.Attribute.Required;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
    Url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'cuisine.card': CuisineCard;
      'homepage.card': HomepageCard;
      'homepage.main': HomepageMain;
      'main.card': MainCard;
      'seo.faq': SeoFaq;
      'seo.main': SeoMain;
    }
  }
}
