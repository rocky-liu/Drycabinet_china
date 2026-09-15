import { Product, OrderMessage, OrderStatus } from '../types';
import { PRODUCTS } from './products';

const PRODUCTS_STORAGE_KEY = 'deomax_products_v1';
const ORDERS_STORAGE_KEY = 'deomax_order_messages_v1';

// Initial sample orders for realistic message board display
const INITIAL_ORDER_MESSAGES: OrderMessage[] = [
  {
    id: 'ord-101',
    orderNumber: 'DEO-202609-1082',
    createdAt: '2026-09-14 14:32',
    customerName: 'Marcus Lindholm',
    companyName: 'Nordic String Atelier & Guitars',
    email: 'marcus@nordicstrings.se',
    phone: '+46 8 123 4567',
    countryRegion: 'Sweden / Stockholm',
    productName: 'GuitHome GH-300 Three-Guitar Cabinet (3把装)',
    productId: 'gh-300',
    quantity: 4,
    voltageHz: '230V 50Hz (EU Standard Plug)',
    targetRHRequirement: '48% RH (Acoustic Spruce tops)',
    requirements: 'Need 4 units shipped to Stockholm via sea-air freight. Custom walnut finish required with studio silent dampers.',
    status: 'quoted',
    adminReply: 'Quotation dispatched with CIF Gothenburg shipping and dual-sensor calibration certificate. Lead time: 10 business days.',
    repliedAt: '2026-09-14 16:15'
  },
  {
    id: 'ord-102',
    orderNumber: 'DEO-202609-1083',
    createdAt: '2026-09-15 09:10',
    customerName: '陈建豪 (Chen Jianhao)',
    companyName: '星海爱乐乐器调律中心',
    email: 'chen.jh@xinghai-music.cn',
    phone: '+86 138-0000-8888',
    countryRegion: '中国 / 广州市',
    productName: 'GuitHome GH-600 Six-Guitar Vault (6把装旗舰双向恒湿)',
    productId: 'gh-600',
    quantity: 2,
    voltageHz: '220V 50Hz 国标',
    targetRHRequirement: '45%–50% RH 回南天重度除湿+干燥自动加湿',
    requirements: '琴房用于存放名家手工古典吉他与大提琴，需要深色黑胡桃木纹外观，并配带双重磁吸密封与智能湿度警报模块。',
    status: 'processing',
    adminReply: '已指派技术工程师对接专属琴托内衬开模，今天下午提供样品测试数据图。',
    repliedAt: '2026-09-15 10:20'
  },
  {
    id: 'ord-103',
    orderNumber: 'DEO-202609-1084',
    createdAt: '2026-09-15 11:45',
    customerName: 'Dr. Emily Watson',
    companyName: 'Apex Precision Optics & Imaging Lab',
    email: 'e.watson@apex-optics.com',
    phone: '+1 (415) 890-2341',
    countryRegion: 'United States / California',
    productName: 'RHVault ED-160 Pro Lens & Camera Dry Vault (160L)',
    productId: 'ed-160',
    quantity: 6,
    voltageHz: '110V 60Hz (US Plug)',
    targetRHRequirement: '20%–25% RH Ultra-Low Moisture for Cinema Primes',
    requirements: 'Purchasing for cleanroom camera lens storage. Require low-E tempered UV blocking glass and anti-static ESD grounding.',
    status: 'pending'
  }
];

// PRODUCT STORE FUNCTIONS
export function getStoredProducts(): Product[] {
  if (typeof window === 'undefined') return PRODUCTS;
  try {
    const raw = localStorage.getItem(PRODUCTS_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(PRODUCTS));
      return PRODUCTS;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : PRODUCTS;
  } catch (e) {
    console.error('Failed to load products from storage', e);
    return PRODUCTS;
  }
}

export function saveProducts(products: Product[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(products));
    window.dispatchEvent(new Event('deomax_products_updated'));
  } catch (e) {
    console.error('Failed to save products to storage', e);
  }
}

export function addProduct(product: Product): Product[] {
  const current = getStoredProducts();
  const updated = [product, ...current];
  saveProducts(updated);
  return updated;
}

export function updateProduct(product: Product): Product[] {
  const current = getStoredProducts();
  const updated = current.map((p) => (p.id === product.id ? product : p));
  saveProducts(updated);
  return updated;
}

export function deleteProduct(productId: string): Product[] {
  const current = getStoredProducts();
  const updated = current.filter((p) => p.id !== productId);
  saveProducts(updated);
  return updated;
}

export function resetProductsToDefault(): Product[] {
  saveProducts(PRODUCTS);
  return PRODUCTS;
}

// ORDER MESSAGES STORE FUNCTIONS
export function getStoredOrderMessages(): OrderMessage[] {
  if (typeof window === 'undefined') return INITIAL_ORDER_MESSAGES;
  try {
    const raw = localStorage.getItem(ORDERS_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(INITIAL_ORDER_MESSAGES));
      return INITIAL_ORDER_MESSAGES;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : INITIAL_ORDER_MESSAGES;
  } catch (e) {
    console.error('Failed to load orders from storage', e);
    return INITIAL_ORDER_MESSAGES;
  }
}

export function saveOrderMessages(orders: OrderMessage[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders));
    window.dispatchEvent(new Event('deomax_orders_updated'));
  } catch (e) {
    console.error('Failed to save orders to storage', e);
  }
}

export function addOrderMessage(orderData: Omit<OrderMessage, 'id' | 'orderNumber' | 'createdAt' | 'status'>): OrderMessage {
  const current = getStoredOrderMessages();
  const now = new Date();
  const dateStr = now.toISOString().slice(0, 10).replace(/-/g, '');
  const randNum = Math.floor(1000 + Math.random() * 9000);
  
  const newOrder: OrderMessage = {
    ...orderData,
    id: `ord-${Date.now()}`,
    orderNumber: `DEO-${dateStr}-${randNum}`,
    createdAt: `${now.toISOString().slice(0, 10)} ${now.toTimeString().slice(0, 5)}`,
    status: 'pending'
  };

  const updated = [newOrder, ...current];
  saveOrderMessages(updated);
  return newOrder;
}

export function updateOrderStatus(orderId: string, status: OrderStatus, adminReply?: string): OrderMessage[] {
  const current = getStoredOrderMessages();
  const now = new Date();
  const updated = current.map((ord) => {
    if (ord.id === orderId) {
      return {
        ...ord,
        status,
        ...(adminReply ? { 
          adminReply, 
          repliedAt: `${now.toISOString().slice(0, 10)} ${now.toTimeString().slice(0, 5)}` 
        } : {})
      };
    }
    return ord;
  });
  saveOrderMessages(updated);
  return updated;
}

export function deleteOrderMessage(orderId: string): OrderMessage[] {
  const current = getStoredOrderMessages();
  const updated = current.filter((ord) => ord.id !== orderId);
  saveOrderMessages(updated);
  return updated;
}
