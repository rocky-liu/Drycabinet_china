import React, { useState } from 'react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { 
  Music, 
  ShieldCheck, 
  AlertTriangle, 
  Droplets, 
  Wind, 
  Sparkles,
  ArrowRight,
  Info
} from 'lucide-react';

interface InstrumentsPageProps {
  products: Product[];
  onViewProduct: (product: Product) => void;
  onAddToInquiry: (product: Product) => void;
}

export const InstrumentsPage: React.FC<InstrumentsPageProps> = ({
  products,
  onViewProduct,
  onAddToInquiry
}) => {
  const [subFilter, setSubFilter] = useState<'all' | 'guitar' | 'violin' | 'woodwind'>('all');

  const instrumentProducts = products.filter(p => 
    p.category === 'guitar-cabinets' || 
    p.category === 'violin-cabinets' || 
    p.category === 'woodwind-cabinets'
  );

  const filteredProducts = instrumentProducts.filter(p => {
    if (subFilter === 'all') return true;
    if (subFilter === 'guitar') return p.category === 'guitar-cabinets';
    if (subFilter === 'violin') return p.category === 'violin-cabinets';
    if (subFilter === 'woodwind') return p.category === 'woodwind-cabinets';
    return true;
  });

  return (
    <div className="py-12 bg-white text-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <Music className="w-3.5 h-3.5 text-amber-600" />
            <span>Lutherie Grade Microclimate Storage</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading text-neutral-900">
            Musical Instrument Humidity Cabinets
          </h1>
          <p className="mt-3 text-base sm:text-lg text-neutral-600">
            Acoustic tonewoods are alive: they expand in summer dampness and shrink to fracture in winter dryness. RHVault active dual-mode cabinets keep solid-wood guitars, violins, and woodwinds anchored at a perfect <strong className="text-amber-800 font-mono">45%–50% RH</strong> year-round.
          </p>
        </div>

        {/* 4 Instrument Damage Scenarios Section (Section VIII from Prompt) */}
        <div className="mb-16 p-6 sm:p-8 rounded-2xl bg-neutral-50 border border-neutral-200">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-neutral-900">
              Protect Your Instruments From Unmitigated Climate Damage
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1">
              Why world-class concert masters, vintage collectors, and recording studios replace manual sponges with active climate vaults.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Scenario 1: Acoustic Guitar */}
            <div className="p-5 rounded-xl bg-white border border-neutral-200 flex flex-col justify-between shadow-xs">
              <div>
                <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider block mb-1">
                  1. Acoustic Guitar
                </span>
                <h3 className="text-base font-bold text-neutral-900 mb-2">Tonewood Sensitivity</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Kiln-dried Sitka spruce and mahogany are under continuous ~160 lbs of string tension. Dry air forces the soundboard to cave in, while fret ends sprout. Below 30% RH, the top splits along the center book-match seam.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-neutral-200 text-[11px] text-emerald-700 font-medium flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Locked at 45%–50% RH</span>
              </div>
            </div>

            {/* Scenario 2: Violin & Strings */}
            <div className="p-5 rounded-xl bg-white border border-neutral-200 flex flex-col justify-between shadow-xs">
              <div>
                <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider block mb-1">
                  2. Master Violin &amp; Viola
                </span>
                <h3 className="text-base font-bold text-neutral-900 mb-2">Animal Hide-Glue Seams</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Violin plates are joined by organic hide glue. Drastic humidity cycles trigger open seam separation and cause ebony pegs to slip loose. Mongolian horsehair contracts and snaps fragile Pernambuco bow tips.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-neutral-200 text-[11px] text-emerald-700 font-medium flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Maintains Varnish &amp; Seam Integrity</span>
              </div>
            </div>

            {/* Scenario 3: Saxophone */}
            <div className="p-5 rounded-xl bg-white border border-neutral-200 flex flex-col justify-between shadow-xs">
              <div>
                <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider block mb-1">
                  3. Saxophone
                </span>
                <h3 className="text-base font-bold text-neutral-900 mb-2">Pad Condensation &amp; Rot</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Trapped saliva breath causes leather resonator pads to rot or develop mold in damp storage. Left in dry conditions, pad leather shrivels and loses its airtight compression seal against tone holes.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-neutral-200 text-[11px] text-emerald-700 font-medium flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Supple Leather &amp; Anti-Verdigris</span>
              </div>
            </div>

            {/* Scenario 4: Woodwinds */}
            <div className="p-5 rounded-xl bg-white border border-neutral-200 flex flex-col justify-between shadow-xs">
              <div>
                <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider block mb-1">
                  4. Woodwinds (Clarinet / Oboe)
                </span>
                <h3 className="text-base font-bold text-neutral-900 mb-2">Dense Grenadilla Bore Cracking</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  African Blackwood (Dalbergia melanoxylon) has immense density. When external air drops, outer fibers shrink while the moist inner bore stays expanded, cracking the upper barrel joint beyond repair.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-neutral-200 text-[11px] text-emerald-700 font-medium flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Zero Bore Strain Equilibrium</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Navigation */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Instrument Cabinets' },
              { id: 'guitar', label: 'Guitar Humidity Cabinets' },
              { id: 'violin', label: 'Violin & String Cabinets' },
              { id: 'woodwind', label: 'Saxophone & Woodwind' }
            ].map((tab) => (
              <button
                key={tab.id}
                id={`filter-inst-${tab.id}`}
                onClick={() => setSubFilter(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  subFilter === tab.id
                    ? 'bg-amber-500 text-neutral-950 font-bold shadow-xs'
                    : 'bg-white border border-neutral-200 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <span className="text-xs text-neutral-500 font-mono">
            Showing {filteredProducts.length} Dual-Mode Models
          </span>
        </div>

        {/* Products Grid */}
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
      </div>
    </div>
  );
};
