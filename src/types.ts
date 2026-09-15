export type NavigationTab = 
  | 'home' 
  | 'products' 
  | 'instruments' 
  | 'dry-cabinets'
  | 'applications' 
  | 'technology' 
  | 'guides' 
  | 'order-board'
  | 'admin'
  | 'oem-odm' 
  | 'about' 
  | 'contact';

export type ProductCategory = 
  | 'all' 
  | 'musical-instruments' 
  | 'guitar-cabinets'
  | 'violin-cabinets'
  | 'woodwind-cabinets'
  | 'electronic-dry-cabinets' 
  | 'camera-optics'
  | 'semiconductor-pcb'
  | 'professional-storage';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  categoryName: string;
  subCategory: string;
  tagline: string;
  description: string;
  badge?: string;
  image: string;
  isDualMode: boolean; // True = Auto Dehumidify + Auto Humidify; False = Ultra Dry Dehumidify only
  recommendedFor: string[];
  specs: {
    rhRange: string;
    controlAccuracy: string;
    capacity: string;
    volumeLiters: number;
    sensorType: string;
    noiseLevel: string;
    powerConsumption: string;
    dimensionsExternal: string;
    dimensionsInternal: string;
    shelvesHooks: string;
    glassType: string;
    lockType: string;
    weight: string;
  };
  features: string[];
  suitableItems: string[];
  climateSuitability: ('dry' | 'humid' | 'variable')[];
}

export interface ClimateZone {
  id: string;
  name: string;
  regions: string;
  rhCharacteristics: string;
  threats: string[];
  recommendedRH: string;
  solutionMode: string;
  description: string;
}

export interface GuideArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  publishedDate: string;
  summary: string;
  seoKeywords: string[];
  idealRH: string;
  content: {
    sectionHeading: string;
    paragraphs: string[];
    bulletPoints?: string[];
  }[];
}

export interface ApplicationProfile {
  id: string;
  name: string;
  subtitle: string;
  iconName: string;
  targetUsers: string;
  criticalRH: string;
  riskIfUncontrolled: string;
  benefit: string;
  popularModels: string[];
  image: string;
}

export interface InquiryItem {
  product: Product;
  quantity: number;
  notes?: string;
}

export type OrderStatus = 'pending' | 'processing' | 'quoted' | 'completed' | 'cancelled';

export interface OrderMessage {
  id: string;
  orderNumber: string;
  createdAt: string;
  customerName: string;
  companyName?: string;
  email: string;
  phone?: string;
  countryRegion: string;
  productName: string;
  productId?: string;
  quantity: number;
  voltageHz?: string; // 220V 50Hz / 110V 60Hz / Universal
  targetRHRequirement?: string;
  requirements: string;
  status: OrderStatus;
  adminReply?: string;
  repliedAt?: string;
}

