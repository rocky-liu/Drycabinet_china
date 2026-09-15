import React, { useState } from 'react';
import { Product, ProductCategory } from '../types';
import { ProductCard } from './ProductCard';
import { 
  SlidersHorizontal, 
  Search, 
  ShieldCheck, 
  Sparkles, 
  Layers,
  Music,
  Camera,
  Cpu,
  Archive
} from 'lucide-react';

interface ProductsPageProps {
  products: Product[];
  onViewProduct: (product: Product) => void;
  onAddToInquiry: (product: Product) => void;
  initialCategory?: ProductCategory;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  products,
  onViewProduct,
  onAddToInquiry,
  initialCategory = 'all'
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [dualModeOnly, setDualModeOnly] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Storage Vaults' },
    { id: 'musical-instruments', label: 'Musical Instruments (All)' },
    { id: 'guitar-cabinets', label: 'Acoustic Guitar Cabinets' },
    { id: 'violin-cabinets', label: 'Violin & String Cabinets' },
    { id: 'woodwind-cabinets', label: 'Saxophone & Woodwind' },
    { id: 'camera-optics', label: 'Camera & Cinema Optics' },
    { id: 'semiconductor-pcb', label: 'Semiconductor & SMT (<5% RH)' },
    { id: 'professional-storage', label: 'Luxury Horology & Archives' }
  ];

  const filteredProducts = products.filter(p => {
    // Category match
    if (selectedCategory === 'musical-instruments') {
      if (p.category !== 'guitar-cabinets' && p.category !== 'violin-cabinets' && p.category !== 'woodwind-cabinets') {
        return false;
      }
    } else if (selectedCategory !== 'all' && p.category !== selectedCategory) {
      return false;
    }

    // Dual-mode filter
    if (dualModeOnly && !p.isDualMode) {
      return false;
    }

    // Search query match
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const match = 
        p.name.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.subCategory.toLowerCase().includes(q) ||
        p.recommendedFor.some(r => r.toLowerCase().includes(q));
      if (!match) return false;
    }

    return true;
  });

  return (
    <div className="py-12 bg-white text-neutral-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5 text-amber-600" />
            <span>Complete Global Catalog</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading text-neutral-900">
            Precision Climate Storage Vaults
          </h1>
          <p className="mt-3 text-base sm:text-lg text-neutral-600">
            Engineered across eight specialized applications. Choose between active dual-mode humidifying &amp; dehumidifying chambers or industrial ultra-dry electronic desiccant vaults.
          </p>
        </div>

        {/* Filters and Controls */}
        <div className="mb-8 space-y-4">
          {/* Search Bar & Dual Mode Check */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="relative w-full sm:max-w-md">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search models, instrument types, camera bodies, specs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-neutral-200 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-amber-500 shadow-xs"
              />
            </div>

            <label className="flex items-center space-x-2.5 text-xs text-neutral-700 cursor-pointer select-none bg-white px-4 py-2.5 rounded-xl border border-neutral-200 hover:border-neutral-300 shadow-xs">
              <input
                type="checkbox"
                checked={dualModeOnly}
                onChange={(e) => setDualModeOnly(e.target.checked)}
                className="rounded bg-neutral-100 border-neutral-300 text-amber-500 focus:ring-0 w-4 h-4"
              />
              <span className="font-semibold text-neutral-900">Dual-Mode Only (Auto Humidify + Dehumidify)</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            </label>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`cat-filter-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-amber-500 text-neutral-950 font-bold shadow-xs'
                    : 'bg-white border border-neutral-200 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between text-xs text-neutral-500 font-mono mb-6 pb-2 border-b border-neutral-200">
          <span>Displaying {filteredProducts.length} precision vault model{filteredProducts.length === 1 ? '' : 's'}</span>
          <span>All units certified CE / FCC / RoHS / Sensirion ±1% RH</span>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center bg-neutral-50 rounded-2xl border border-neutral-200">
            <p className="text-sm text-neutral-600">No vaults matching your current filter criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setDualModeOnly(false);
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-neutral-950 text-xs font-semibold shadow-xs"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={onViewProduct}
                onAddToInquiry={onAddToInquiry}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
