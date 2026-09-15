import React, { useState } from 'react';
import { InquiryItem, Product } from '../types';
import { 
  X, 
  Trash2, 
  Send, 
  CheckCircle2, 
  FileText, 
  Building2, 
  User, 
  Plus, 
  Minus,
  Sparkles
} from 'lucide-react';

interface InquiryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: InquiryItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearAll: () => void;
}

export const InquiryDrawer: React.FC<InquiryDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearAll
}) => {
  const [inquiryType, setInquiryType] = useState<'individual' | 'commercial'>('individual');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-neutral-950/40 backdrop-blur-sm flex justify-end">
      <div 
        className="w-full max-w-xl bg-white border-l border-neutral-200 h-full flex flex-col justify-between shadow-2xl text-neutral-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-neutral-200 flex items-center justify-between bg-neutral-50">
          <div className="flex items-center space-x-2.5">
            <FileText className="w-5 h-5 text-amber-600" />
            <div>
              <h2 className="text-base font-bold text-neutral-900 font-heading">
                Quotation & Inquiry Basket
              </h2>
              <p className="text-[11px] text-neutral-500">
                {items.length} item{items.length === 1 ? '' : 's'} staged for technical inquiry
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white border border-neutral-200 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
            aria-label="Close quote drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 font-heading">
                Inquiry Successfully Submitted!
              </h3>
              <p className="text-xs text-neutral-600 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong className="text-neutral-900">{fullName}</strong>. A technical specialist from Zhuhai Deomax Precision Electrical Co., Ltd. (珠海市迪迈斯精密电器有限公司) has received your inquiry for {items.length} item(s) and will follow up at <strong className="text-amber-700">{email}</strong> within 12 hours.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClearAll();
                    onClose();
                  }}
                  className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-neutral-950 font-bold text-xs shadow-xs"
                >
                  Return to Storefront
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Items List */}
              <div>
                <div className="flex items-center justify-between text-xs text-neutral-500 uppercase tracking-wider mb-3">
                  <span>Selected Models</span>
                  {items.length > 0 && (
                    <button 
                      onClick={onClearAll}
                      className="text-rose-600 hover:text-rose-700 text-[11px] font-medium"
                    >
                      Clear all
                    </button>
                  )}
                </div>

                {items.length === 0 ? (
                  <div className="p-8 rounded-xl bg-neutral-50 border border-neutral-200 text-center">
                    <p className="text-sm text-neutral-700 font-medium">Your quotation basket is empty.</p>
                    <p className="text-xs text-neutral-500 mt-1">
                      Browse our Musical Instrument or Electronic Dry Cabinets and click the "+ Add to RFQ" button.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {items.map(({ product, quantity }) => (
                      <div 
                        key={product.id}
                        className="p-3.5 rounded-xl bg-white border border-neutral-200 flex items-center justify-between gap-3 shadow-xs"
                      >
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-14 h-14 object-cover rounded-lg bg-neutral-100 border border-neutral-200 flex-shrink-0"
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

                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs font-bold text-neutral-900 truncate">{product.name}</h4>
                          <span className="text-[10px] text-amber-800 block font-mono font-medium">{product.specs.rhRange}</span>
                          <span className="text-[10px] text-neutral-500">{product.specs.volumeLiters}L Chamber</span>
                        </div>

                        <div className="flex items-center space-x-2">
                          <div className="flex items-center border border-neutral-200 rounded-lg bg-neutral-50">
                            <button
                              onClick={() => onUpdateQuantity(product.id, Math.max(1, quantity - 1))}
                              className="p-1 text-neutral-600 hover:text-neutral-900"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2 text-xs font-mono font-bold text-neutral-900">{quantity}</span>
                            <button
                              onClick={() => onUpdateQuantity(product.id, quantity + 1)}
                              className="p-1 text-neutral-600 hover:text-neutral-900"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <button
                            onClick={() => onRemoveItem(product.id)}
                            className="p-1.5 text-neutral-400 hover:text-rose-600 transition-colors"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Inquiry Form */}
              <form onSubmit={handleSubmit} className="space-y-4 pt-4 border-t border-neutral-200">
                <span className="text-xs uppercase font-bold tracking-wider text-neutral-500 block">
                  Inquiry Profile
                </span>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setInquiryType('individual')}
                    className={`py-2 px-3 rounded-lg text-xs font-medium border flex items-center justify-center gap-1.5 transition-colors ${
                      inquiryType === 'individual'
                        ? 'bg-amber-500 text-neutral-950 font-bold border-amber-500'
                        : 'bg-white border-neutral-200 text-neutral-600 hover:bg-neutral-50'
                    }`}
                  >
                    <User className="w-3.5 h-3.5" />
                    <span>Musician / Collector</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setInquiryType('commercial')}
                    className={`py-2 px-3 rounded-lg text-xs font-medium border flex items-center justify-center gap-1.5 transition-colors ${
                      inquiryType === 'commercial'
                        ? 'bg-amber-500 text-neutral-950 font-bold border-amber-500'
                        : 'bg-white border-neutral-200 text-neutral-600 hover:bg-neutral-50'
                    }`}
                  >
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Dealer / B2B OEM</span>
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] text-neutral-600 font-medium mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-white border border-neutral-200 text-xs text-neutral-900 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-neutral-600 font-medium mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-white border border-neutral-200 text-xs text-neutral-900 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] text-neutral-600 font-medium mb-1">Country / Destination Region</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. United States, Germany, Japan, Singapore..."
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-white border border-neutral-200 text-xs text-neutral-900 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] text-neutral-600 font-medium mb-1">Project Notes or Specific Questions</label>
                  <textarea
                    rows={2}
                    placeholder="Target delivery timeframe, voltage requirements (110V vs 220V), custom logo engraving..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-white border border-neutral-200 text-xs text-neutral-900 focus:outline-none focus:border-amber-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  id="inquiry-submit-btn"
                  disabled={items.length === 0}
                  className="w-full py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-neutral-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-xs"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Technical Quote Request</span>
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
