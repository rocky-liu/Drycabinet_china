import React from 'react';
import { Product } from '../types';
import { Eye, Plus, Check, ShieldCheck, Sparkles, Droplets } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
  onAddToInquiry: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onViewDetails,
  onAddToInquiry
}) => {
  return (
    <div className="group bg-white rounded-xl border border-neutral-200 hover:border-amber-400 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-md">
      <div>
        {/* Card Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
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
          <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1.5">
            {product.badge && (
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500 text-neutral-950 shadow-xs">
                {product.badge}
              </span>
            )}
            {product.isDualMode ? (
              <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-300 backdrop-blur-sm shadow-xs">
                Dual-Mode Active
              </span>
            ) : (
              <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-white/90 text-neutral-700 border border-neutral-300 backdrop-blur-sm shadow-xs">
                Dehumidifier
              </span>
            )}
          </div>
          <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-white/90 backdrop-blur-md text-[10px] font-mono text-neutral-800 border border-neutral-200 shadow-xs">
            {product.specs.volumeLiters}L
          </div>
        </div>

        {/* Card Content */}
        <div className="p-4 sm:p-5">
          <div className="flex items-center justify-between text-[11px] text-neutral-500 mb-1">
            <span>{product.subCategory}</span>
            <span className="text-emerald-700 font-mono font-semibold">{product.specs.controlAccuracy}</span>
          </div>

          <h3 
            onClick={() => onViewDetails(product)}
            className="text-base font-bold text-neutral-900 group-hover:text-amber-600 transition-colors cursor-pointer line-clamp-1 font-heading"
          >
            {product.name}
          </h3>

          <p className="text-xs text-neutral-600 mt-1 line-clamp-2 leading-relaxed">
            {product.tagline}
          </p>

          {/* Quick Specs Tags */}
          <div className="mt-4 pt-3 border-t border-neutral-200 grid grid-cols-2 gap-2 text-[11px]">
            <div className="text-neutral-500">
              <span className="block text-[10px] uppercase text-neutral-400">RH Control</span>
              <span className="text-neutral-900 font-mono font-medium">{product.specs.rhRange.split('(')[0]}</span>
            </div>
            <div className="text-neutral-500">
              <span className="block text-[10px] uppercase text-neutral-400">Acoustics</span>
              <span className="text-emerald-700 font-mono font-medium">{product.specs.noiseLevel}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="p-4 pt-0 flex items-center gap-2">
        <button
          id={`view-details-${product.id}`}
          onClick={() => onViewDetails(product)}
          className="flex-1 py-2 px-3 rounded-lg bg-neutral-50 hover:bg-neutral-100 text-xs font-semibold text-neutral-700 hover:text-neutral-900 transition-colors flex items-center justify-center gap-1.5 border border-neutral-200"
        >
          <Eye className="w-3.5 h-3.5 text-neutral-500" />
          <span>View Specs</span>
        </button>
        <button
          id={`add-inquiry-${product.id}`}
          onClick={() => onAddToInquiry(product)}
          className="p-2 rounded-lg bg-neutral-50 hover:bg-amber-500 hover:text-neutral-950 text-amber-600 transition-colors border border-neutral-200"
          title="Add to Quote Basket"
          aria-label={`Add ${product.name} to quote`}
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
