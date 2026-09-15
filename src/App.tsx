import React, { useState, useEffect } from 'react';
import { NavigationTab, Product, InquiryItem, ProductCategory } from './types';
import { getStoredProducts } from './data/productStore';
import { LanguageProvider, useLanguage } from './translations';
import { Navbar } from './components/Navbar';
import { HomeHero } from './components/HomeHero';
import { HumiditySimulator } from './components/HumiditySimulator';
import { DualModeTechGraphic } from './components/DualModeTechGraphic';
import { ClimateZoneExplorer } from './components/ClimateZoneExplorer';
import { ProductCard } from './components/ProductCard';
import { ProductDetailModal } from './components/ProductDetailModal';
import { InquiryDrawer } from './components/InquiryDrawer';
import { InstrumentsPage } from './components/InstrumentsPage';
import { ProductsPage } from './components/ProductsPage';
import { ApplicationsPage } from './components/ApplicationsPage';
import { TechnologyPage } from './components/TechnologyPage';
import { GuidesPage } from './components/GuidesPage';
import { OemOdmSection } from './components/OemOdmSection';
import { AboutAndContact } from './components/AboutAndContact';
import { OrderMessageBoard } from './components/OrderMessageBoard';
import { AdminPortal } from './components/AdminPortal';
import { Footer } from './components/Footer';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Music, 
  Camera, 
  Sliders, 
  CheckCircle2, 
  Building2, 
  BookOpen,
  MessageSquare
} from 'lucide-react';

function AppContent() {
  const { t } = useLanguage();
  const [currentTab, setCurrentTab] = useState<NavigationTab>('home');
  const [audienceMode, setAudienceMode] = useState<'b2c' | 'b2b'>('b2c');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [inquiryItems, setInquiryItems] = useState<InquiryItem[]>([]);
  const [isInquiryDrawerOpen, setIsInquiryDrawerOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>(() => getStoredProducts());

  const handleProductsChanged = () => {
    setProducts(getStoredProducts());
  };

  useEffect(() => {
    const handleStorage = () => {
      setProducts(getStoredProducts());
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  // Add to inquiry basket
  const handleAddToInquiry = (product: Product) => {
    setInquiryItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsInquiryDrawerOpen(true);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    setInquiryItems(prev => 
      prev.map(item => 
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveInquiryItem = (productId: string) => {
    setInquiryItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const handleClearAllInquiry = () => {
    setInquiryItems([]);
  };

  const totalInquiryCount = inquiryItems.reduce((acc, item) => acc + item.quantity, 0);

  // Quick navigation handler with automatic scroll-to-top
  const handleNavigate = (tab: NavigationTab) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Featured lists for Home page
  const featuredInstruments = products.filter(p => 
    p.category === 'guitar-cabinets' || 
    p.category === 'violin-cabinets'
  ).slice(0, 3);

  const featuredDryCabinets = products.filter(p => 
    p.category === 'camera-optics' || 
    p.category === 'semiconductor-pcb'
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50/40 text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Global Navigation */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={handleNavigate}
        audienceMode={audienceMode}
        onToggleAudience={setAudienceMode}
        inquiryCount={totalInquiryCount}
        onOpenInquiry={() => setIsInquiryDrawerOpen(true)}
      />

      {/* Main Content Areas based on selected tab */}
      <main className="flex-1">
        {currentTab === 'home' && (
          <div>
            {/* 1. Hero Section */}
            <HomeHero
              onNavigate={handleNavigate}
              audienceMode={audienceMode}
              onOpenProductModal={setSelectedProduct}
            />

            {/* 2. Interactive Humidity Simulator (Core user-requested feature) */}
            <HumiditySimulator />

            {/* 3. Core Technology Differentiator: Active Dual-Mode vs Dry Cabinet */}
            <DualModeTechGraphic />

            {/* 4. Featured Musical Instrument Cabinets Showcase */}
            <section className="py-20 bg-white border-b border-neutral-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
                  <div>
                    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-2">
                      <Music className="w-3.5 h-3.5 text-amber-600" />
                      <span>Specialized Lutherie Preservation</span>
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900 font-heading">
                      Musical Instrument Humidity Cabinets
                    </h2>
                    <p className="mt-2 text-sm text-neutral-600 max-w-xl">
                      Automated 2-way microclimate storage. Prevents solid soundboard cracking, fret sprout, and animal hide glue failure.
                    </p>
                  </div>

                  <button
                    id="home-view-all-instruments-btn"
                    onClick={() => handleNavigate('instruments')}
                    className="self-start sm:self-auto text-xs font-semibold text-amber-600 hover:text-amber-700 flex items-center gap-1.5 transition-colors"
                  >
                    <span>View All Instrument Cabinets</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {featuredInstruments.map(product => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onViewDetails={setSelectedProduct}
                      onAddToInquiry={handleAddToInquiry}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* 5. Featured Electronic Dry Cabinets Showcase */}
            <section className="py-20 bg-neutral-50/70 border-b border-neutral-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
                  <div>
                    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-700 text-xs font-semibold uppercase tracking-wider mb-2">
                      <Camera className="w-3.5 h-3.5 text-amber-600" />
                      <span>Optics &amp; Industrial Micro-Electronics</span>
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900 font-heading">
                      Electronic Dry Cabinets
                    </h2>
                    <p className="mt-2 text-sm text-neutral-600 max-w-xl">
                      Ultra-fast solid-state moisture extraction. Permanent defense against glass fungus, lens haze, and SMT reflow delamination.
                    </p>
                  </div>

                  <button
                    id="home-view-all-dry-btn"
                    onClick={() => handleNavigate('dry-cabinets')}
                    className="self-start sm:self-auto text-xs font-semibold text-amber-600 hover:text-amber-700 flex items-center gap-1.5 transition-colors"
                  >
                    <span>Explore All Dry Cabinets</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {featuredDryCabinets.map(product => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onViewDetails={setSelectedProduct}
                      onAddToInquiry={handleAddToInquiry}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* 6. Global Geographies & Climate Zones */}
            <ClimateZoneExplorer />

            {/* 7. Dual Audience Gateway Callout */}
            <section className="py-16 bg-white border-b border-neutral-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* B2C Card */}
                  <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-amber-500/50 hover:shadow-md transition-all flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-1">
                        For Individual Musicians &amp; Collectors
                      </span>
                      <h3 className="text-2xl font-bold text-neutral-900 font-heading">
                        Safeguard Your Prized Guitars, Violins &amp; Optics at Home
                      </h3>
                      <p className="text-xs text-neutral-600 mt-3 leading-relaxed">
                        Plug-and-play simplicity, whisper-quiet &lt;22dB operation, and elegant furniture-grade craftsmanship that complements your music room or home studio.
                      </p>
                      <ul className="mt-4 space-y-2 text-xs text-neutral-700">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>No manual humidification packs or wet sponges needed</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Ultra-safe for vintage nitrocellulose lacquer finishes</span>
                        </li>
                      </ul>
                    </div>

                    <div className="mt-8 pt-4 border-t border-neutral-200">
                      <button
                        onClick={() => handleNavigate('instruments')}
                        className="px-5 py-2.5 rounded-lg bg-amber-500 text-neutral-950 font-bold text-xs hover:bg-amber-400 transition-colors flex items-center gap-2 shadow-sm"
                      >
                        <span>Find Your Instrument Vault</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* B2B Card */}
                  <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-amber-500/50 hover:shadow-md transition-all flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-1">
                        For Dealers, Luthier Brands &amp; OEM/ODM
                      </span>
                      <h3 className="text-2xl font-bold text-neutral-900 font-heading">
                        Private Label Manufacturing &amp; Wholesale Container Shipments
                      </h3>
                      <p className="text-xs text-neutral-600 mt-3 leading-relaxed">
                        Direct manufacturer supply with flexible MOQs, customized CNC dimensions, laser-etched brand logos, bespoke touchscreens, and CE/FCC/RoHS global compliance.
                      </p>
                      <ul className="mt-4 space-y-2 text-xs text-neutral-700">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Direct FOB / DDP shipping to USA, Europe, Japan, Australia</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>5-Year factory warranty with modular hot-swap electronics</span>
                        </li>
                      </ul>
                    </div>

                    <div className="mt-8 pt-4 border-t border-neutral-200">
                      <button
                        onClick={() => handleNavigate('oem-odm')}
                        className="px-5 py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs border border-neutral-800 transition-colors flex items-center gap-2 shadow-sm"
                      >
                        <span>Request B2B OEM / Wholesale Pricing</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 8. Knowledge Hub Spotlight */}
            <section className="py-20 bg-neutral-50/70 border-b border-neutral-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
                  <div>
                    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-2">
                      <BookOpen className="w-3.5 h-3.5 text-amber-600" />
                      <span>Scientific Preservation Guides</span>
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900 font-heading">
                      Humidity Science &amp; Lutherie Knowledge
                    </h2>
                    <p className="mt-2 text-sm text-neutral-600 max-w-xl">
                      Read our research articles on wood fiber hygroscopy, pernambuco bow tension, and preventing fungus etching.
                    </p>
                  </div>

                  <button
                    id="home-view-all-guides-btn"
                    onClick={() => handleNavigate('guides')}
                    className="self-start sm:self-auto text-xs font-semibold text-amber-600 hover:text-amber-700 flex items-center gap-1.5 transition-colors"
                  >
                    <span>Explore All Guides &amp; Articles</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div 
                    onClick={() => handleNavigate('guides')}
                    className="p-6 rounded-xl bg-white border border-neutral-200 hover:border-amber-500/50 hover:shadow-md cursor-pointer transition-all"
                  >
                    <span className="text-[11px] text-amber-700 font-semibold uppercase tracking-wider block mb-2">
                      Guitar Care &amp; Lutherie
                    </span>
                    <h3 className="text-base font-bold text-neutral-900 mb-2 font-heading">
                      What Is the Best Humidity for Acoustic Guitars? (45%–55% RH Guide)
                    </h3>
                    <p className="text-xs text-neutral-600 line-clamp-3">
                      Sitka spruce and kiln-dried tonewoods fracture along the center seam when indoor relative humidity plunges below 35%. Learn how active vaults prevent irreparable soundboard cracks.
                    </p>
                    <span className="text-xs text-amber-600 font-semibold inline-block mt-4">
                      Read Article →
                    </span>
                  </div>

                  <div 
                    onClick={() => handleNavigate('guides')}
                    className="p-6 rounded-xl bg-white border border-neutral-200 hover:border-amber-500/50 hover:shadow-md cursor-pointer transition-all"
                  >
                    <span className="text-[11px] text-sky-700 font-semibold uppercase tracking-wider block mb-2">
                      Comparison Analysis
                    </span>
                    <h3 className="text-base font-bold text-neutral-900 mb-2 font-heading">
                      Dry Cabinet vs. Active Humidity Controlled Cabinet
                    </h3>
                    <p className="text-xs text-neutral-600 line-clamp-3">
                      Traditional dry cabinets only pull moisture out. Storing an acoustic guitar or master violin in a dry cabinet during winter dry spells will actually accelerate wood shrinkage and cracking.
                    </p>
                    <span className="text-xs text-amber-600 font-semibold inline-block mt-4">
                      Read Article →
                    </span>
                  </div>

                  <div 
                    onClick={() => handleNavigate('guides')}
                    className="p-6 rounded-xl bg-white border border-neutral-200 hover:border-amber-500/50 hover:shadow-md cursor-pointer transition-all"
                  >
                    <span className="text-[11px] text-emerald-700 font-semibold uppercase tracking-wider block mb-2">
                      String Instrument Preservation
                    </span>
                    <h3 className="text-base font-bold text-neutral-900 mb-2 font-heading">
                      What Humidity Should a Master Violin &amp; Bow Be Stored At?
                    </h3>
                    <p className="text-xs text-neutral-600 line-clamp-3">
                      Animal hide glue seams release under fluctuating moisture, and dry horsehair contracts with enough force to snap Pernambuco bow heads.
                    </p>
                    <span className="text-xs text-amber-600 font-semibold inline-block mt-4">
                      Read Article →
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {currentTab === 'products' && (
          <ProductsPage
            products={products}
            onViewProduct={setSelectedProduct}
            onAddToInquiry={handleAddToInquiry}
          />
        )}

        {currentTab === 'instruments' && (
          <InstrumentsPage
            products={products}
            onViewProduct={setSelectedProduct}
            onAddToInquiry={handleAddToInquiry}
          />
        )}

        {currentTab === 'dry-cabinets' && (
          <ProductsPage
            products={products}
            onViewProduct={setSelectedProduct}
            onAddToInquiry={handleAddToInquiry}
            initialCategory="camera-optics"
          />
        )}

        {currentTab === 'order-board' && (
          <OrderMessageBoard
            onNavigateToProducts={() => handleNavigate('products')}
          />
        )}

        {currentTab === 'admin' && (
          <AdminPortal
            onProductsUpdated={handleProductsChanged}
          />
        )}

        {currentTab === 'applications' && (
          <ApplicationsPage
            onSelectApplicationModel={(model) => {
              const matched = products.find(p => p.name.includes(model));
              if (matched) setSelectedProduct(matched);
            }}
            onNavigateToProducts={() => handleNavigate('products')}
          />
        )}

        {currentTab === 'technology' && (
          <TechnologyPage />
        )}

        {currentTab === 'guides' && (
          <GuidesPage />
        )}

        {currentTab === 'oem-odm' && (
          <OemOdmSection />
        )}

        {currentTab === 'about' && (
          <AboutAndContact />
        )}

        {currentTab === 'contact' && (
          <AboutAndContact />
        )}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToInquiry={handleAddToInquiry}
      />

      {/* Quote / Inquiry Basket Drawer */}
      <InquiryDrawer
        isOpen={isInquiryDrawerOpen}
        onClose={() => setIsInquiryDrawerOpen(false)}
        items={inquiryItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveInquiryItem}
        onClearAll={handleClearAllInquiry}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
