import React, { useState } from 'react';
import { 
  Building2, 
  Settings, 
  Layers, 
  Sparkles, 
  Truck, 
  Award, 
  CheckCircle2, 
  ShieldCheck, 
  FileCheck,
  Package,
  Cpu,
  Send
} from 'lucide-react';

export const OemOdmSection: React.FC = () => {
  const [cabinetType, setCabinetType] = useState('guitar-vault');
  const [finishOption, setFinishOption] = useState('obsidian-black');
  const [doorType, setDoorType] = useState('low-e-uv');
  const [projectMoq, setProjectMoq] = useState('50');
  const [clientEmail, setClientEmail] = useState('');
  const [clientCompany, setClientCompany] = useState('');
  const [clientNotes, setClientNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="oem-odm" className="py-20 bg-neutral-50 text-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <Building2 className="w-3.5 h-3.5 text-amber-600" />
            <span>珠海市迪迈斯精密电器有限公司 · Zhuhai Deomax Precision</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-heading text-neutral-900">
            Private Label & Custom Humidity Control Solutions
          </h2>
          <p className="mt-3 text-base text-neutral-600">
            Zhuhai Deomax Precision Electrical Co., Ltd. provides factory-direct OEM/ODM solutions for international musical instrument brands, guitar luthier ateliers, camera retail chains, and precision laboratory distributors worldwide.
          </p>
        </div>

        {/* 8 Customization Pillars Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          <div className="p-5 rounded-xl bg-white border border-neutral-200 shadow-xs">
            <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-3">
              <Settings className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-neutral-900 mb-1">Custom Dimensions</h3>
            <p className="text-xs text-neutral-600">
              Tailored internal volumes from 50L tabletop units to 2,000L walk-in studio display vaults.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-neutral-200 shadow-xs">
            <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-3">
              <Layers className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-neutral-900 mb-1">Custom Wood & Finishes</h3>
            <p className="text-xs text-neutral-600">
              Piano black gloss, carbon matte obsidian, natural walnut veneer, or anodized aerospace alloy.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-neutral-200 shadow-xs">
            <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-3">
              <Sparkles className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-neutral-900 mb-1">Custom Brand Logo</h3>
            <p className="text-xs text-neutral-600">
              Precision CNC metal badge, laser-etched tempered glass door, silk-screened metal chassis.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-neutral-200 shadow-xs">
            <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-3">
              <Cpu className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-neutral-900 mb-1">Bespoke Control UI</h3>
            <p className="text-xs text-neutral-600">
              Touchscreen LCD, tactile rotary dial, mobile App IoT BLE/Wi-Fi monitoring, Modbus RS-485.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-neutral-200 shadow-xs">
            <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-3">
              <Package className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-neutral-900 mb-1">Private Label Packaging</h3>
            <p className="text-xs text-neutral-600">
              Export-standard drop-tested honeycomb mailer boxes with customized full-color retail graphics.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-neutral-200 shadow-xs">
            <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-3">
              <Award className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-neutral-900 mb-1">Global Certifications</h3>
            <p className="text-xs text-neutral-600">
              CE (LVD/EMC), FCC Part 15, RoHS 2.0, PSE, KC, and ISO9001 quality management certified.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-neutral-200 shadow-xs">
            <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-3">
              <Truck className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-neutral-900 mb-1">Global Logistics & DDP</h3>
            <p className="text-xs text-neutral-600">
              FCL / LCL container palletizing directly to USA, Europe, UK, Japan, Australia warehouses.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-neutral-200 shadow-xs">
            <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-3">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-neutral-900 mb-1">5-Year Core Warranty</h3>
            <p className="text-xs text-neutral-600">
              Direct factory replacement modules and modular hot-swap electronic climate drive blocks.
            </p>
          </div>
        </div>

        {/* Interactive Custom Quotation Configurator */}
        <div className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Form & Choices */}
            <div className="lg:col-span-7">
              <span className="text-xs uppercase font-bold tracking-wider text-amber-800 block mb-1">
                B2B Interactive Specification Tool
              </span>
              <h3 className="text-2xl font-bold text-neutral-900 font-heading">
                Configure Your Custom OEM/ODM Production Batch
              </h3>
              <p className="text-xs text-neutral-600 mt-2 mb-6">
                Specify your custom parameters below to generate a tailored factory quote with container packing volume and FOB estimates.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* 1. Target Category */}
                <div>
                  <label className="block text-xs font-semibold uppercase text-neutral-700 mb-2">
                    1. Target Application Chassis
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'guitar-vault', label: 'Musical Instrument Cabinet' },
                      { id: 'camera-vault', label: 'Camera & Optics Dry Vault' },
                      { id: 'industrial-dry', label: 'Industrial SMT / Ultra-Dry' }
                    ].map((item) => (
                      <button
                        type="button"
                        key={item.id}
                        onClick={() => setCabinetType(item.id)}
                        className={`p-3 rounded-lg text-xs font-medium border text-left transition-all ${
                          cabinetType === item.id
                            ? 'bg-neutral-900 border-neutral-900 text-white shadow-xs'
                            : 'bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Exterior Finish */}
                <div>
                  <label className="block text-xs font-semibold uppercase text-neutral-700 mb-2">
                    2. Exterior Finish & Material
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'obsidian-black', label: 'Matte Obsidian Steel' },
                      { id: 'walnut-veneer', label: 'Natural Walnut Grain' },
                      { id: 'custom-ral', label: 'Custom Brand RAL Color' }
                    ].map((item) => (
                      <button
                        type="button"
                        key={item.id}
                        onClick={() => setFinishOption(item.id)}
                        className={`p-3 rounded-lg text-xs font-medium border text-left transition-all ${
                          finishOption === item.id
                            ? 'bg-neutral-900 border-neutral-900 text-white shadow-xs'
                            : 'bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Door Glass Type */}
                <div>
                  <label className="block text-xs font-semibold uppercase text-neutral-700 mb-2">
                    3. Front Door Glass Technology
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'low-e-uv', label: 'Low-E 99% UV-Shield' },
                      { id: 'smoked-tint', label: 'Smoked Architectural Glass' },
                      { id: 'esd-conductive', label: 'ESD Anti-Static Coated' }
                    ].map((item) => (
                      <button
                        type="button"
                        key={item.id}
                        onClick={() => setDoorType(item.id)}
                        className={`p-3 rounded-lg text-xs font-medium border text-left transition-all ${
                          doorType === item.id
                            ? 'bg-neutral-900 border-neutral-900 text-white shadow-xs'
                            : 'bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 4. Target Batch Quantity */}
                <div>
                  <label className="block text-xs font-semibold uppercase text-neutral-700 mb-2">
                    4. Planned Order Volume (MOQ starts at 20 units for custom OEM)
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { id: '20', label: '20 Units (Pilot)' },
                      { id: '50', label: '50 Units (Standard)' },
                      { id: '100', label: '100 Units' },
                      { id: '200+', label: '200+ (Full Container)' }
                    ].map((item) => (
                      <button
                        type="button"
                        key={item.id}
                        onClick={() => setProjectMoq(item.id)}
                        className={`p-2.5 rounded-lg text-xs font-medium border text-center transition-all ${
                          projectMoq === item.id
                            ? 'bg-amber-500 text-neutral-950 font-bold border-amber-500'
                            : 'bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-50'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Contact Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div>
                    <label className="block text-xs text-neutral-600 mb-1">Company / Brand Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Guitars LLC / Tokyo Cine Rental"
                      value={clientCompany}
                      onChange={(e) => setClientCompany(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-white border border-neutral-200 text-xs text-neutral-900 focus:outline-none focus:border-amber-500 shadow-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-neutral-600 mb-1">Business Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="procurement@company.com"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-white border border-neutral-200 text-xs text-neutral-900 focus:outline-none focus:border-amber-500 shadow-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-neutral-600 mb-1">Specific Custom Requirements</label>
                  <textarea
                    rows={2}
                    placeholder="Custom logo laser placement, internal shelf spacing, target retail delivery date..."
                    value={clientNotes}
                    onChange={(e) => setClientNotes(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-white border border-neutral-200 text-xs text-neutral-900 focus:outline-none focus:border-amber-500 shadow-xs"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  id="submit-oem-quote-btn"
                  className="w-full py-3 px-6 rounded-xl bg-amber-500 hover:bg-amber-600 text-neutral-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-xs"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Factory Direct OEM/ODM Specification & Quote</span>
                </button>
              </form>
            </div>

            {/* Live Config Summary Card */}
            <div className="lg:col-span-5 bg-neutral-50 rounded-xl p-6 border border-neutral-200 self-stretch flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-neutral-500 block mb-3">
                  Production Specification Summary
                </span>

                <div className="space-y-3 text-xs mb-6 divide-y divide-neutral-200">
                  <div className="flex justify-between pt-2">
                    <span className="text-neutral-500">Chassis Architecture:</span>
                    <span className="font-semibold text-neutral-900 capitalize">{cabinetType.replace('-', ' ')}</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span className="text-neutral-500">Exterior Finish:</span>
                    <span className="font-semibold text-amber-800 capitalize">{finishOption.replace('-', ' ')}</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span className="text-neutral-500">Front Door Spec:</span>
                    <span className="font-semibold text-neutral-900 capitalize">{doorType.replace('-', ' ')}</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span className="text-neutral-500">Estimated Batch:</span>
                    <span className="font-semibold text-emerald-700">{projectMoq} Units</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span className="text-neutral-500">Tooling & Engineering:</span>
                    <span className="font-semibold text-neutral-700">Full 3D CAD + Pre-prod sample in 14 days</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span className="text-neutral-500">Mass Production Lead Time:</span>
                    <span className="font-semibold text-neutral-700">25–35 days FOB / DDP</span>
                  </div>
                </div>

                {submitted && (
                  <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-start gap-2 mb-4 animate-fade-in">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-emerald-600" />
                    <div>
                      <span className="font-bold block">Inquiry Dispatched Successfully!</span>
                      Our International OEM Director will send full technical schematics and FOB pricing to <strong>{clientEmail}</strong> within 1 business day.
                    </div>
                  </div>
                )}
              </div>

              <div className="p-4 rounded-lg bg-white border border-neutral-200 text-[11px] text-neutral-600 space-y-1.5 shadow-xs">
                <div className="flex items-center gap-1.5 text-neutral-800 font-semibold">
                  <FileCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified Factory Direct Supply</span>
                </div>
                <p>
                  Direct manufacturer facility with 12,000m² clean-room production, automated SMT humidity module assembly, and ISO9001/ISO14001 certification.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
