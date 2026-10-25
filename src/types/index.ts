export type ProductCategory = 'all' | 'cakes' | 'brownies' | 'pastries' | 'cupcakes' | 'eggless';

export interface Product {
  id: number;
  name: string;
  cat: 'cakes' | 'brownies' | 'pastries' | 'cupcakes' | 'eggless';
  price: number;
  rating: number;
  dietary: 'Eggless' | 'Vegetarian' | 'Gluten-Free' | 'Vegan' | 'Contains Nuts';
  weight: string;
  desc: string;
  image: string;
  ingredients?: string[];
  allergens?: string;
  storage?: string;
}

export interface CartItem {
  id: string;
  title: string;
  price: number;
  variant: string;
  qty: number;
  image?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  price: string;
  desc: string;
  perk: string;
  icon: string;
}

export interface BakerItem {
  id: string;
  name: string;
  title: string;
  exp: string;
  spec: string;
  rating: string;
  image: string;
  department: 'cakes' | 'brownies' | 'custom' | 'pastries';
  bio: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  cat: 'cakes' | 'brownies' | 'dessert-tables';
  image: string;
  details: string;
}

export interface Testimonial {
  id: number;
  name: string;
  event: string;
  rating: number;
  quote: string;
  date: string;
}

export interface FaqItem {
  q: string;
  a: string;
  category?: string;
}

export interface CustomCakeConfig {
  occasion: string;
  occPrice: number;
  tier: string;
  tierPrice: number;
  sponge: string;
  spongePrice: number;
  filling: string;
  fillingPrice: number;
  frosting: string;
  frostingPrice: number;
  plaque: string;
  date: string;
}
