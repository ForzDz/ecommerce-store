// Import images
import premiumBaggyJogger1 from '@/assets/images/Premium_Baggy_Jogger.jpg';
import premiumBaggyJogger2 from '@/assets/images/Premium_Baggy_Jogger (1).jpg';
import premiumBaggyJogger3 from '@/assets/images/Premium_Baggy_Jogger (2).jpg';
import premiumBaggyJogger4 from '@/assets/images/Premium_Baggy_Jogger (3).jpg';
import sweatBlack from '@/assets/images/sweat black.jpg';
import sweat2 from '@/assets/images/sweat 2.jpg';
import sweat3 from '@/assets/images/sweat 3.jpg';
import ensemble2 from '@/assets/images/ensemble2.jpg';
import ensemble3 from '@/assets/images/ensemble3.jpg';
import baggy1 from '@/assets/images/baggy1.jpg';
import baggy2 from '@/assets/images/baggy2.jpg';
import baggy3 from '@/assets/images/baggy3.jpg';
import nikeTechGrey from '@/assets/images/nike_tech_grey.png';
import nikeTechBlack from '@/assets/images/nike_tech_black.png';

export interface ProductColor {
  name: string;
  hex: string;
}

export interface Review {
  id: string;
  author: string;
  avatar: string;
  date: string;
  rating: number;
  comment: string;
  helpful: number;
  replies: number;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  oldPrice?: number;
  images: string[];
  colors: ProductColor[];
  sizes: string[];
  rating: number;
  reviewsCount: number;
  category: string;
  subcategory?: string;
  inStock: boolean;
  stockCount: number;
  description: string;
  details: string[];
  isNew?: boolean;
  isSale?: boolean;
  reviews: Review[];
}

export const products: Product[] = [
  {
    id: "9",
    name: "Premium Baggy Jogger",
    brand: "Nike",
    price: 3500,
    oldPrice: 5000,
    images: [
      premiumBaggyJogger1,
      premiumBaggyJogger2,
      premiumBaggyJogger4
    ],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Light Gray", hex: "#E5E5E5" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.7,
    reviewsCount: 124,
    category: "Vêtements",
    subcategory: "Pantalons",
    inStock: true,
    stockCount: 15,
    description: "Sweatpants premium avec coupe baggy confortable et design moderne.",
    details: [
      "Tissu doux et respirant",
      "Coupe baggy moderne",
      "Coutures renforcées",
      "Logo Nike brodé"
    ],
    isNew: false,
    isSale: true,
    reviews: []
  },
  {
    id: "10",
    name: "Ensemble Nike Tech Fleece",
    brand: "Nike",
    price: 18000,
    oldPrice: 22000,
    images: [
      nikeTechGrey,
      nikeTechBlack
    ],
    colors: [
      { name: "Gris", hex: "#808080" },
      { name: "Noir", hex: "#000000" }
    ],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.8,
    reviewsCount: 45,
    category: "Vêtements",
    subcategory: "Ensembles",
    inStock: true,
    stockCount: 10,
    description: "L'ensemble Nike Tech Fleece offre chaleur et style sans le poids.",
    details: [
      "Tissu Tech Fleece léger et chaud",
      "Coupe standard pour une tenue décontractée",
      "Poche zippée sur la manche",
      "Taille élastique avec cordon de serrage"
    ],
    isNew: true,
    isSale: false,
    reviews: []
  },
  {
    id: "11",
    name: "Baggy Jeans Light Blue",
    brand: "Bershka",
    price: 5900,
    images: [
      baggy3
    ],
    colors: [
      { name: "Light Blue", hex: "#ADD8E6" }
    ],
    sizes: ["30", "32", "34", "36", "38"],
    rating: 4.6,
    reviewsCount: 32,
    category: "Vêtements",
    subcategory: "Baggy Jeans",
    inStock: true,
    stockCount: 20,
    description: "Jean coupe baggy tendance délavé clair.",
    details: [
      "100% Coton denim",
      "Coupe large",
      "5 poches classiques",
      "Délavage clair tendance"
    ],
    isNew: true,
    isSale: false,
    reviews: []
  },
  {
    id: "17",
    name: "Baggy Jeans Dark Wash",
    brand: "Bershka",
    price: 6500,
    oldPrice: 7500,
    images: [
      baggy2
    ],
    colors: [
      { name: "Dark Blue", hex: "#00008B" }
    ],
    sizes: ["30", "32", "34", "36", "38"],
    rating: 4.8,
    reviewsCount: 15,
    category: "Vêtements",
    subcategory: "Baggy Jeans",
    inStock: true,
    stockCount: 18,
    description: "Jean baggy foncé pour un style urbain affirmé.",
    details: [
      "Denim robuste",
      "Coupe oversize",
      "Finition premium",
      "Style streetwear"
    ],
    isNew: true,
    isSale: true,
    reviews: []
  },
  {
    id: "18",
    name: "Baggy Jeans Vintage",
    brand: "Pull & Bear",
    price: 6200,
    images: [
      baggy3
    ],
    colors: [
      { name: "Vintage Blue", hex: "#7CB9E8" }
    ],
    sizes: ["30", "32", "34", "36", "38"],
    rating: 4.7,
    reviewsCount: 24,
    category: "Vêtements",
    subcategory: "Baggy Jeans",
    inStock: true,
    stockCount: 25,
    description: "Jean baggy au look vintage authentique.",
    details: [
      "Effet usé",
      "Confort maximal",
      "Look rétro",
      "100% Coton"
    ],
    isNew: true,
    isSale: false,
    reviews: []
  },
  {
    id: "12",
    name: "Sweat à Capuche Essentials",
    brand: "Nike",
    price: 4500,
    images: [
      sweatBlack
    ],
    colors: [
      { name: "Noir", hex: "#000000" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.8,
    reviewsCount: 15,
    category: "Vêtements",
    subcategory: "Sweats",
    inStock: true,
    stockCount: 50,
    description: "Sweat à capuche confortable et stylé pour le quotidien.",
    details: [
      "Coton doux",
      "Capuche ajustable",
      "Poche kangourou",
      "Coupe standard"
    ],
    isNew: true,
    isSale: false,
    reviews: []
  },
  {
    id: "13",
    name: "Sweat Crewneck Premium",
    brand: "Nike",
    price: 3900,
    oldPrice: 4500,
    images: [
      sweat2
    ],
    colors: [
      { name: "Noir", hex: "#000000" }
    ],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.7,
    reviewsCount: 8,
    category: "Vêtements",
    subcategory: "Sweats",
    inStock: true,
    stockCount: 30,
    description: "Sweat col rond premium, idéal pour un look décontracté.",
    details: [
      "Tissu premium",
      "Col rond renforcé",
      "Finitions soignées",
      "Logo brodé"
    ],
    isNew: false,
    isSale: true,
    reviews: []
  },
  {
    id: "14",
    name: "Sweat Oversize Streetwear",
    brand: "Nike",
    price: 3900,
    oldPrice: 4900,
    images: [
      sweat3
    ],
    colors: [
      { name: "Noir", hex: "#000000" }
    ],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.9,
    reviewsCount: 22,
    category: "Vêtements",
    subcategory: "Sweats",
    inStock: true,
    stockCount: 25,
    description: "Coupe oversize tendance pour un style urbain affirmé.",
    details: [
      "Coupe large",
      "Coton épais",
      "Style streetwear",
      "Confort maximal"
    ],
    isNew: true,
    isSale: true,
    reviews: []
  },
  {
    id: "15",
    name: "Ensemble Street Summer",
    brand: "Nike",
    price: 9500,
    images: [
      ensemble2
    ],
    colors: [
      { name: "Beige", hex: "#F5F5DC" }
    ],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.7,
    reviewsCount: 18,
    category: "Vêtements",
    subcategory: "Ensembles",
    inStock: true,
    stockCount: 12,
    description: "Ensemble d'été léger et confortable pour un look décontracté.",
    details: [
      "Tissu respirant",
      "Coupe ajustée",
      "Design moderne",
      "Idéal pour l'été"
    ],
    isNew: true,
    isSale: false,
    reviews: []
  },
  {
    id: "16",
    name: "Ensemble Sport Casual",
    brand: "Nike",
    price: 11000,
    images: [
      ensemble3
    ],
    colors: [
      { name: "Bleu Marine", hex: "#000080" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.6,
    reviewsCount: 25,
    category: "Vêtements",
    subcategory: "Ensembles",
    inStock: true,
    stockCount: 15,
    description: "Ensemble polyvalent pour le sport et la détente.",
    details: [
      "Matière technique",
      "Séchage rapide",
      "Confort optimal",
      "Style polyvalent"
    ],
    isNew: false,
    isSale: false,
    reviews: []
  },
  {
    id: "19",
    name: "Premium Baggy Jogger Grey",
    brand: "Nike",
    price: 3500,
    images: [
      premiumBaggyJogger4
    ],
    colors: [
      { name: "Grey", hex: "#808080" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.8,
    reviewsCount: 12,
    category: "Vêtements",
    subcategory: "Pantalons",
    inStock: true,
    stockCount: 15,
    description: "Jogger premium gris, coupe baggy confortable.",
    details: [
      "Tissu doux",
      "Coupe large",
      "Poches latérales",
      "Cordon de serrage"
    ],
    isNew: true,
    isSale: false,
    reviews: []
  },
  {
    id: "20",
    name: "Premium Baggy Jogger Beige",
    brand: "Nike",
    price: 3500,
    images: [
      premiumBaggyJogger2
    ],
    colors: [
      { name: "Beige", hex: "#F5F5DC" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.7,
    reviewsCount: 8,
    category: "Vêtements",
    subcategory: "Pantalons",
    inStock: true,
    stockCount: 10,
    description: "Jogger premium beige, style décontracté.",
    details: [
      "Tissu respirant",
      "Coupe relax",
      "Taille élastiquée",
      "Finitions soignées"
    ],
    isNew: true,
    isSale: false,
    reviews: []
  }
];

export const categories = [
  { id: "femmes", name: "Femmes", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600" },
  { id: "hommes", name: "Hommes", image: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=600" },
  { id: "enfants", name: "Enfants", image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=600" },
  { id: "sports", name: "Sports", image: "https://images.unsplash.com/photo-1461896836934-0fe2bd709dcd?w=600" }
];

export const brands = [
  { id: "nike", name: "Nike", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/200px-Logo_NIKE.svg.png" },
  { id: "adidas", name: "Adidas", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/200px-Adidas_Logo.svg.png" },
  { id: "reebok", name: "Reebok", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Reebok_2019_logo.svg/200px-Reebok_2019_logo.svg.png" },
  { id: "puma", name: "Puma", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/da/Puma_complete_logo.svg/200px-Puma_complete_logo.svg.png" },
  { id: "newbalance", name: "New Balance", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/New_Balance_logo.svg/200px-New_Balance_logo.svg.png" }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('fr-DZ', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price) + ' دج';
};
