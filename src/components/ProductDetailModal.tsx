import React, { useState } from 'react';
import { Product } from '../types';
import { 
  X, 
  Check, 
  ShieldCheck, 
  Sparkles, 
  Droplets, 
  Wind, 
  VolumeX, 
  Zap, 
  Sliders, 
  Plus, 
  ArrowRight,
  Maximize2,
  FileDown,
  Info
} from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToInquiry: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToInquiry
}) => {
  const [copiedNotification, setCopiedNotification] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    onAddToInquiry(product);
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-neutral-950/50 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6">
      <div 
        className="relative bg-white border border-neutral-200 rounded-2xl w-full max-w-5xl overflow-hidden shadow-2xl my-8 text-neutral-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="modal-close-btn"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 border border-neutral-200 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors shadow-xs"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="max-h-[85vh] overflow-y-auto">
          {/* Top Section: Photo + Quick Specs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 bg-neutral-50/50 border-b border-neutral-200">
            {/* Product Image & Badges */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-neutral-100 border border-neutral-200 group shadow-xs">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.dataset.triedFallback && target.src.includes('guithome.com')) {
                      const parts = target.src.split('/');
                      const filename = parts[parts.length - 1];
                      if (filename) {
                        target.dataset.triedFallback = 'true';
                        target.src = `/products/${filename}`;
                      }
                    }
                  }}
                />
                <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                  {product.badge && (
                    <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-amber-500 text-neutral-950 shadow-xs">
                      {product.badge}
                    </span>
                  )}
                  {product.isDualMode ? (
                    <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-300 shadow-xs">
                      Dual-Mode Active
                    </span>
                  ) : (
                    <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-white/90 text-neutral-800 border border-neutral-300 shadow-xs">
                      Ultra-Dry Dehumidifier
                    </span>
                  )}
                </div>
                <div className="absolute bottom-3 right-3 px-3 py-1 rounded-md bg-white/90 backdrop-blur-md text-[11px] font-mono text-neutral-800 border border-neutral-200 shadow-xs">
                  {product.specs.volumeLiters} Liters
                </div>
              </div>

              {/* Recommended Items */}
              <div className="mt-4 pt-4 border-t border-neutral-200">
                <span className="text-[11px] uppercase tracking-wider text-neutral-500 font-semibold block mb-2">
                  Engineered For:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {product.recommendedFor.map((item, idx) => (
                    <span key={idx} className="px-2.5 py-0.5 rounded-full text-xs bg-white text-neutral-700 border border-neutral-200 shadow-xs">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side: Key Metadata & Quick Parameters */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="text-xs uppercase tracking-widest text-amber-800 font-bold mb-1">
                  {product.categoryName} • {product.subCategory}
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900 font-heading tracking-tight">
                  {product.name}
                </h1>
                <p className="text-sm font-medium text-amber-800 mt-1">
                  {product.tagline}
                </p>
                <p className="text-xs sm:text-sm text-neutral-600 mt-3 leading-relaxed">
                  {product.description}
                </p>

                {/* Key Spec Grid */}
                <div className="grid grid-cols-2 gap-3 mt-6">
                  <div className="p-3 rounded-lg bg-white border border-neutral-200 shadow-xs">
                    <span className="text-[10px] text-neutral-500 uppercase tracking-wider block">RH Range</span>
                    <span className="text-sm font-bold text-neutral-900 font-mono">{product.specs.rhRange}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white border border-neutral-200 shadow-xs">
                    <span className="text-[10px] text-neutral-500 uppercase tracking-wider block">Control Accuracy</span>
                    <span className="text-sm font-bold text-emerald-700 font-mono">{product.specs.controlAccuracy}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white border border-neutral-200 shadow-xs">
                    <span className="text-[10px] text-neutral-500 uppercase tracking-wider block">Acoustic Noise</span>
                    <span className="text-sm font-bold text-neutral-900 font-mono">{product.specs.noiseLevel}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white border border-neutral-200 shadow-xs">
                    <span className="text-[10px] text-neutral-500 uppercase tracking-wider block">Power Draw</span>
                    <span className="text-sm font-bold text-neutral-900 font-mono">{product.specs.powerConsumption}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-neutral-200 flex flex-wrap items-center gap-3">
                <button
                  id="modal-add-quote-btn"
                  onClick={handleAdd}
                  className="flex-1 py-3 px-5 rounded-xl bg-amber-500 hover:bg-amber-600 text-neutral-950 font-bold text-xs tracking-wider uppercase transition-all shadow-sm flex items-center justify-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>{copiedNotification ? 'Added to Quote Basket!' : 'Add to RFQ / Inquiry'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Section: Dual-Mode Climate Schematic */}
          {product.isDualMode && (
            <div className="p-6 sm:p-8 bg-neutral-50/70 border-b border-neutral-200">
              <div className="text-center max-w-xl mx-auto mb-6">
                <span className="text-xs uppercase font-bold tracking-wider text-amber-800">
                  Core Engineering Highlight
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 font-heading mt-0.5">
                  Closed-Loop Dual-Mode Climate Equilibrium
                </h3>
              </div>

              <div className="max-w-3xl mx-auto p-4 sm:p-6 rounded-xl bg-white border border-neutral-200 shadow-xs">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
                  <div className="flex-1 p-3 rounded-lg bg-amber-50 border border-amber-200">
                    <span className="text-xs text-amber-800 font-bold block mb-1">Dehumidification</span>
                    <span className="text-[11px] text-neutral-600">Thermoelectric Solid-State Cold Plate</span>
                    <span className="text-[10px] text-amber-700 block mt-1">Extracts excess moisture vapor</span>
                  </div>

                  <div className="px-4 py-2 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 font-mono font-bold text-sm shadow-xs">
                    45% RH Stable
                  </div>

                  <div className="flex-1 p-3 rounded-lg bg-sky-50 border border-sky-200">
                    <span className="text-xs text-sky-800 font-bold block mb-1">Active Humidification</span>
                    <span className="text-[11px] text-neutral-600">Piezoelectric Ultrasonic Atomizer</span>
                    <span className="text-[10px] text-sky-700 block mt-1">Infuses sub-micron clean vapor</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Section: 4 Value Pillars */}
          <div className="p-6 sm:p-8 border-b border-neutral-200">
            <h3 className="text-xs uppercase tracking-wider font-bold text-neutral-500 mb-6 text-center">
              Why Store in an RHVault Precision Microclimate?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 mb-3">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-neutral-900 mb-1">Prevent Wood Cracking</h4>
                <p className="text-xs text-neutral-600">
                  Stops dry winter air from tearing solid soundboard seams apart and creating fret sprout.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-3">
                  <Droplets className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-neutral-900 mb-1">Stop Moisture Damage</h4>
                <p className="text-xs text-neutral-600">
                  Prevents soundboard swelling, high unplayable string action, and optical fungus spores.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-3">
                  <Sliders className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-neutral-900 mb-1">Stable Constant Humidity</h4>
                <p className="text-xs text-neutral-600">
                  Holds ±1% RH continuously 365 days a year without manual refill packs or sponges.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 mb-3">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-neutral-900 mb-1">Preserve Asset Value</h4>
                <p className="text-xs text-neutral-600">
                  Protects vintage lacquer, animal hide glues, delicate coatings, and investment appreciation.
                </p>
              </div>
            </div>
          </div>

          {/* Section: Technical Specifications Table */}
          <div className="p-6 sm:p-8 bg-neutral-50/50">
            <h3 className="text-sm font-bold text-neutral-900 mb-4 uppercase tracking-wider">
              Technical Specifications
            </h3>
            <div className="rounded-xl border border-neutral-200 bg-white overflow-hidden text-xs shadow-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-neutral-200">
                <div className="divide-y divide-neutral-200">
                  <div className="p-3 flex justify-between"><span className="text-neutral-500">Model Name:</span><span className="font-semibold text-neutral-900">{product.name}</span></div>
                  <div className="p-3 flex justify-between"><span className="text-neutral-500">Category:</span><span className="font-semibold text-neutral-900">{product.categoryName}</span></div>
                  <div className="p-3 flex justify-between"><span className="text-neutral-500">RH Control Range:</span><span className="font-semibold text-amber-800 font-mono">{product.specs.rhRange}</span></div>
                  <div className="p-3 flex justify-between"><span className="text-neutral-500">Sensor Type:</span><span className="font-semibold text-neutral-900">{product.specs.sensorType}</span></div>
                  <div className="p-3 flex justify-between"><span className="text-neutral-500">Gross Capacity:</span><span className="font-semibold text-neutral-900">{product.specs.capacity}</span></div>
                  <div className="p-3 flex justify-between"><span className="text-neutral-500">Internal Volume:</span><span className="font-semibold text-neutral-900 font-mono">{product.specs.volumeLiters} L</span></div>
                </div>
                <div className="divide-y divide-neutral-200">
                  <div className="p-3 flex justify-between"><span className="text-neutral-500">External Dimensions:</span><span className="font-semibold text-neutral-900 font-mono">{product.specs.dimensionsExternal}</span></div>
                  <div className="p-3 flex justify-between"><span className="text-neutral-500">Internal Dimensions:</span><span className="font-semibold text-neutral-900 font-mono">{product.specs.dimensionsInternal}</span></div>
                  <div className="p-3 flex justify-between"><span className="text-neutral-500">Glass Door:</span><span className="font-semibold text-neutral-900">{product.specs.glassType}</span></div>
                  <div className="p-3 flex justify-between"><span className="text-neutral-500">Acoustic Noise:</span><span className="font-semibold text-emerald-700 font-mono">{product.specs.noiseLevel}</span></div>
                  <div className="p-3 flex justify-between"><span className="text-neutral-500">Power Rating:</span><span className="font-semibold text-neutral-900 font-mono">{product.specs.powerConsumption}</span></div>
                  <div className="p-3 flex justify-between"><span className="text-neutral-500">Net Weight:</span><span className="font-semibold text-neutral-900 font-mono">{product.specs.weight}</span></div>
                </div>
              </div>
            </div>

            {/* Feature List */}
            <div className="mt-6">
              <h4 className="text-xs font-semibold uppercase text-neutral-500 tracking-wider mb-2">
                Standard Inclusions & Hardware
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-700">
                {product.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
