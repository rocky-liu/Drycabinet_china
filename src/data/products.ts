import { Product } from '../types';

export const PRODUCTS: Product[] = [
  // GUITHOME FLAGSHIP INSTRUMENT LINEUP
  {
    id: 'gh-100',
    name: 'GuitHome GH-100 Solo Guitar Cabinet',
    category: 'guitar-cabinets',
    categoryName: 'Musical Instrument Cabinets',
    subCategory: 'Single Guitar Climate Cabinet',
    tagline: 'Active Dual-Mode Microclimate Showcase for Solo Master-Grade Guitars',
    description: 'Precision 45%–55% RH smart climate cabinet crafted from premium North American walnut. Features active dual-mode humidification and silent semiconductor dehumidification, digital LED status display, and UV-shield tempered glass door.',
    badge: 'GuitHome Classic',
    image: 'https://www.guithome.com/gh-100.png',
    isDualMode: true,
    recommendedFor: ['Acoustic Guitars', 'Classical Spanish Guitars', 'Archtop Jazz Guitars', 'Boutique Electric Guitars'],
    specs: {
      rhRange: '45% – 55% RH Precision Dual-Control',
      controlAccuracy: '±1.0% RH (Digital Sensor)',
      capacity: '1 Full-Size Guitar + Accessories',
      volumeLiters: 240,
      sensorType: 'Industrial Dual-Channel Digital Sensor',
      noiseLevel: '< 20 dB(A) Whisper-Quiet Studio Grade',
      powerConsumption: 'Avg. 18W (Ultra-low energy PTC & ultrasonic cell)',
      dimensionsExternal: '1200 × 500 × 400 mm',
      dimensionsInternal: '1140 × 460 × 360 mm',
      shelvesHooks: 'High-density EVA padded neck cradle + Bottom guitar boot cushion + Accessory drawer',
      glassType: '4mm Low-E Tempered UV-Shield Glass (blocks 99.2% UV light)',
      lockType: 'Dual Magnetic Air-Tight Seal + Smart RFID & Key Lock',
      weight: '38 kg'
    },
    features: [
      'Digital Humidity & Temperature Display Panel with instant ambient readouts',
      'Silent Semiconductor Dehumidifier System combined with active micro-atomized humidification',
      'Premium North American Walnut Solid Wood Shell with furniture-grade finish',
      'UV-Protection Explosion-Proof Tempered Glass Door',
      'Warm 3000K Museum-Grade High-CRI Internal LED Lighting with touch dimmer'
    ],
    suitableItems: ['Solid Top Acoustic Guitars', 'Martin, Taylor, Gibson, Collings, Lowden', 'Flamenco Guitars'],
    climateSuitability: ['dry', 'humid', 'variable']
  },
  {
    id: 'gh-300',
    name: 'GuitHome GH-300 Three-Guitar Cabinet',
    category: 'guitar-cabinets',
    categoryName: 'Musical Instrument Cabinets',
    subCategory: 'Three-Guitar Climate Showcase',
    tagline: 'Independent Microclimate Zones for Stage, Recording Studios & Serious Collectors',
    description: 'Accommodates 3 guitars with independent humidity zone management. High-performance dual-mode climate control, aviation-grade weather stripping, microcomputer temperature regulation, and anti-shock slip-resistant guitar stands.',
    badge: 'Studio Bestseller',
    image: 'https://www.guithome.com/gh-300.png',
    isDualMode: true,
    recommendedFor: ['Acoustic Guitars', 'Hollowbody Guitars', 'Bass Guitars', 'Multi-Guitar Sets'],
    specs: {
      rhRange: '45% – 55% RH (Precision Adjustable)',
      controlAccuracy: '±1.0% RH',
      capacity: '3 Guitars (Acoustic / Electric / Bass)',
      volumeLiters: 750,
      sensorType: 'Dual Redundant Sensirion Probes',
      noiseLevel: '< 22 dB(A)',
      powerConsumption: 'Avg. 32W',
      dimensionsExternal: '1200 × 1400 × 450 mm',
      dimensionsInternal: '1140 × 1350 × 410 mm',
      shelvesHooks: '3 Adjustable Padded Hanging Racks + Bottom Base Supports + Humidor Drawer',
      glassType: 'Double-Glazed Argon Filled UV Low-E Glass',
      lockType: 'Aviation-Grade Compression Latch & Biometric Fingerprint Lock',
      weight: '72 kg'
    },
    features: [
      'Independent Humidity Zone Control with dual micro-convection air loops',
      'Smart App Mobile Remote Monitoring & ambient anomaly push notifications',
      'Aviation-Grade High-Elasticity Silicone Weather Stripping for complete hermetic seal',
      'Microcomputer Temperature & Moisture Closed-Loop Balancing System',
      'Anti-Shock Slip-Resistant Guitar Neck & Body Support Cradles'
    ],
    suitableItems: ['Multi-guitar collections', 'Recording studio control rooms', 'Luthier showrooms'],
    climateSuitability: ['dry', 'humid', 'variable']
  },
  {
    id: 'gh-600',
    name: 'GuitHome GH-600 Six-Guitar Pro Cabinet',
    category: 'guitar-cabinets',
    categoryName: 'Musical Instrument Cabinets',
    subCategory: 'Pro Studio Six-Guitar Vault',
    tagline: 'Commercial Studio-Grade Temperature & Humidity Dual-Control Flagship Showcase',
    description: 'Flagship 6-guitar climate storage system featuring panoramic UV-protection glass walls, automatic water refill humidification, museum-grade air purification, and smart push alert monitoring.',
    badge: 'Pro Flagship',
    image: 'https://www.guithome.com/gh-600.png',
    isDualMode: true,
    recommendedFor: ['High-end Guitar Collections', 'Commercial Recording Studios', 'Music Academies', 'Private Showrooms'],
    specs: {
      rhRange: '40% – 60% RH (Precision Adjustable to ±1%)',
      controlAccuracy: '±1.0% RH',
      capacity: '6 Full-Size Guitars + Accessories',
      volumeLiters: 1800,
      sensorType: 'Studio-Grade Multi-Point Sensor Array',
      noiseLevel: '< 24 dB(A) Certified Studio Silent',
      powerConsumption: 'Avg. 45W',
      dimensionsExternal: '2000 × 1800 × 500 mm',
      dimensionsInternal: '1920 × 1740 × 460 mm',
      shelvesHooks: '6 Heavy-Duty Padded Suspension Cradles + Integrated Bottom Instrument Trays',
      glassType: 'Full-Span Panoramic Acoustic Low-E Tempered Glass Walls',
      lockType: 'Dual Industrial Compression Latch + Biometric & RFID Card Access',
      weight: '128 kg'
    },
    features: [
      'Studio-Grade Temperature & Humidity Dual Closed-Loop Active Regulation',
      'Panoramic UV-Protection Full-Vision Glass Architecture',
      'Automatic Water Refill & Continuous Atomization Humidification System',
      'Instant Anomaly Alert Push Notifications via WiFi / IoT Module',
      'Museum-Grade Air Purification & Activated Carbon VOC Filter'
    ],
    suitableItems: ['Vintage Martin/Gibson collections', 'Artist studios', 'Pro sound stages'],
    climateSuitability: ['dry', 'humid', 'variable']
  },
  {
    id: 'gh-custom',
    name: 'GuitHome GH-CUSTOM Bespoke Series Vault',
    category: 'guitar-cabinets',
    categoryName: 'Musical Instrument Cabinets',
    subCategory: 'Architectural In-Wall Bespoke Vault',
    tagline: 'Fully Embedded In-Wall Microclimate Showcase Designed by Acoustic Engineers',
    description: 'Custom-tailored architectural humidity storage built to exact architectural dimensions. On-site acoustic engineering survey, whole-home smart central control integration, and rare exotic tonewood finishes.',
    badge: 'Bespoke Luxury',
    image: 'https://www.guithome.com/gh-custom.png',
    isDualMode: true,
    recommendedFor: ['Architectural Luxury Residences', 'Private Instrument Museums', 'Celebrity Studios', 'Penthouse Displays'],
    specs: {
      rhRange: 'Custom Defined (35% – 65% RH Laboratory Grade)',
      controlAccuracy: '±0.5% RH',
      capacity: 'Custom Sized (4–16+ Guitars, Cellos & Harps)',
      volumeLiters: 2500,
      sensorType: 'Laboratory Redundant Digital Probe Grid',
      noiseLevel: '< 18 dB(A) Absolute Silence',
      powerConsumption: 'Avg. 55W',
      dimensionsExternal: 'Custom Measured On-Site to Wall Spec',
      dimensionsInternal: 'Tailored to Installation Bay',
      shelvesHooks: 'Custom Handcrafted Padded Hardwood Supports & Modular Displays',
      glassType: 'Museum-Spec Anti-Reflective Low-Iron Laminated Security Glass',
      lockType: 'Concealed Smart Home Electronic Lock & Motorized Seal Mechanism',
      weight: 'Custom Built'
    },
    features: [
      'Dedicated Acoustic & Climate Engineer On-Site Architectural Survey',
      'Fully Embedded Flush In-Wall Seamless Architectural Design',
      'Whole-Home Smart Automation Integration (KNX, Crestron, Control4, HomeKit)',
      'Rare Tonewood Shell Selections (Honduran Mahogany, East Indian Rosewood, Black Walnut)',
      'Lifetime Engineering Support & Remote Diagnostics Guarantee'
    ],
    suitableItems: ['Rare vintage instrument archives', 'Luxury villa music lounges', 'Museum exhibits'],
    climateSuitability: ['dry', 'humid', 'variable']
  },

  // MUSICAL INSTRUMENTS - VIOLIN & STRINGS
  {
    id: 'rhv-v100-strings',
    name: 'GuitHome Stradivari Violin & Viola Vault',
    category: 'violin-cabinets',
    categoryName: 'Musical Instrument Cabinets',
    subCategory: 'String Instruments & Bows',
    tagline: 'Precision 45%–50% Micro-Environment for Fine Violins, Violas & Master Pernambuco Bows',
    description: 'Classical stringed instruments rely on natural animal-hide glues and delicate spruce/maple carvings. Sudden drops in humidity cause open seams and cracked soundboards. This chamber locks in stable humidity year round.',
    badge: 'Concert Grade',
    image: 'https://www.guithome.com/gh-100.png',
    isDualMode: true,
    recommendedFor: ['Fine Violins', 'Violas', 'Baroque String Instruments', 'High-end Bows'],
    specs: {
      rhRange: '40% – 65% RH Precision Band',
      controlAccuracy: '±1.0% RH',
      capacity: '2 Violins/Violas + 4 Bow Suspension Mounts + Rosin Drawer',
      volumeLiters: 140,
      sensorType: 'High-Precision Microprocessor Hygrometer',
      noiseLevel: '< 20 dB(A) Silent Operation',
      powerConsumption: 'Avg. 15W',
      dimensionsExternal: 'W 460 × D 380 × H 880 mm',
      dimensionsInternal: 'W 410 × D 340 × H 810 mm',
      shelvesHooks: 'Magnetic Velvet Neck Supports + Horizontal Bow Preservation Clips',
      glassType: 'Optical UV-Filtered Acoustic Tempered Glass',
      lockType: 'Dual Magnetic Seal + Mechanical Cylinder Lock',
      weight: '24 kg'
    },
    features: [
      'Bow Hair Tension Preservation: prevents horsehair from snapping in extreme winter dry spells',
      'Prevents Hide-Glue Seam Separation and peg slippage during seasonal climate swings',
      'Aero-Gentle Micro-convection: No direct fan blast hitting delicate varnish',
      'Top drawer for hygrometers, fine rosin, spare Thomastik/Pirastro string sets, and mutes'
    ],
    suitableItems: ['Soloist violins', 'Vintage violas', 'Pernambuco & carbon fiber bows'],
    climateSuitability: ['dry', 'humid', 'variable']
  },

  // MUSICAL INSTRUMENTS - SAXOPHONE & WOODWINDS
  {
    id: 'rhv-w200-winds',
    name: 'GuitHome Woodwind & Saxophone Preservation Cabinet',
    category: 'woodwind-cabinets',
    categoryName: 'Musical Instrument Cabinets',
    subCategory: 'Saxophone, Clarinet, Oboe & Flutes',
    tagline: 'Anti-Corrosion, Anti-Rot Climate Control for Saxophone Pads & Grenadilla Woodwinds',
    description: 'Clarinet and oboe bodies made from dense African Blackwood (Grenadilla) are prone to catastrophic body bore cracking if allowed to dry out. Saxophone pads rot or grow mold if left damp. RHVault active dual-mode provides the exact equilibrium.',
    badge: 'Dual-Mode Active',
    image: 'https://www.guithome.com/gh-100.png',
    isDualMode: true,
    recommendedFor: ['Tenor & Alto Saxophones', 'Grenadilla Clarinets', 'Oboes', 'Solid Silver Flutes'],
    specs: {
      rhRange: '40% – 60% RH',
      controlAccuracy: '±1.5% RH',
      capacity: '2 Saxophones (Alto/Tenor) + 3 Clarinets/Flutes + Reed Humidor Box',
      volumeLiters: 210,
      sensorType: 'Digital Micro-Probe',
      noiseLevel: '< 23 dB(A)',
      powerConsumption: 'Avg. 20W',
      dimensionsExternal: 'W 560 × D 460 × H 1050 mm',
      dimensionsInternal: 'W 510 × D 410 × H 980 mm',
      shelvesHooks: 'Padded Saxophone Body Pegs + Flute/Clarinet Horizontal Velveteen Trays',
      glassType: 'Tempered Anti-Condensation Glass',
      lockType: 'High Security Cam Lock',
      weight: '34 kg'
    },
    features: [
      'Preserves saxophone leather resonator pads, cork tenons, and felt buffers from drying or rotting',
      'Prevents body bore splits in expensive Grenadilla wood clarinets and oboes',
      'Built-in Reed Conditioning Drawer maintains optimal moisture for cane reeds ready to play',
      'Odor-free anti-microbial interior coating prevents mold spore multiplication'
    ],
    suitableItems: ['Selmer, Yamaha, Yanagisawa Saxophones', 'Buffet Crampon Clarinets', 'Muramatsu Flutes'],
    climateSuitability: ['dry', 'humid', 'variable']
  },

  // ELECTRONIC DRY CABINETS - CAMERA & OPTICS
  {
    id: 'rhv-c120-optics',
    name: 'GuitHome Pro Cinema & Camera Lens Dry Vault',
    category: 'camera-optics',
    categoryName: 'Electronic Dry Cabinets',
    subCategory: 'Photography & Cinema Optics',
    tagline: 'Permanent Defense Against Glass Fungus, Coating Hazing, and Sensor Mold',
    description: 'Precision electronic dry storage tailored for cinematography optics, medium format cameras, drone gimbals, and telephoto glass. Keeps relative humidity strictly within the fungal safety zone (35%–45% RH) without over-drying rubber zoom rings or lens lubes.',
    badge: 'Photography Essential',
    image: 'https://www.guithome.com/gh-100.png',
    isDualMode: false,
    recommendedFor: ['Cinema Lenses (ARRI, Cooke, Zeiss)', 'DSLR & Mirrorless Bodies', 'Telephoto Optics', 'RED & Sony Cinema Cams'],
    specs: {
      rhRange: '25% – 55% RH (Electronic Ultra-Fast Dehumidification)',
      controlAccuracy: '±1.0% RH',
      capacity: '8–14 Camera Bodies & 12–20 Lenses',
      volumeLiters: 155,
      sensorType: 'Precision Semiconductor Desiccant Engine',
      noiseLevel: '0 dB (100% Solid-State Silent)',
      powerConsumption: 'Avg. 8W (Peak 16W during rapid moisture extraction)',
      dimensionsExternal: 'W 450 × D 400 × H 940 mm',
      dimensionsInternal: 'W 410 × D 360 × H 870 mm',
      shelvesHooks: '4 Pull-out Telescopic Steel Shelves with Wavy Foam Lens Cradles',
      glassType: 'Reinforced 4mm Explosion-Proof Tempered Glass',
      lockType: 'Electronic Touch Keypad + Mechanical Backup Key',
      weight: '26 kg'
    },
    features: [
      'Peltier Solid-State Freezing-Plate Condensation Dehumidification Core (No compressor, zero vibrations)',
      'Wave-Foam Modular Trays prevent lens rolling and protect front element coatings from scratching',
      'Non-magnetic, anti-static construction protects delicate digital imaging sensors and magnetic memory media',
      'Power-Outage Humidity Retention: stays under 50% RH for up to 24 hours without mains electricity'
    ],
    suitableItems: ['Sony FX6/A7S3', 'Canon R5', 'Nikon Z8', 'Hasselblad', 'Leica M Lenses'],
    climateSuitability: ['humid', 'variable']
  },
  {
    id: 'rhv-c300-masteroptics',
    name: 'GuitHome Commercial Production Gear Vault 320L',
    category: 'camera-optics',
    categoryName: 'Electronic Dry Cabinets',
    subCategory: 'Broadcast & Rental Houses',
    tagline: 'High-Capacity Studio Dehumidification Vault for Camera Rental Houses & Commercial Studios',
    description: '320 Liters of dry storage with double vertical doors. Built for high turnaround environments where gear comes in damp from field shoots and needs fast moisture evacuation.',
    badge: 'Heavy Duty',
    image: 'https://www.guithome.com/gh-300.png',
    isDualMode: false,
    recommendedFor: ['Rental Houses', 'Documentary Crews', 'High-speed Phantom Cameras', 'Broadcast Telephotos'],
    specs: {
      rhRange: '20% – 50% RH',
      controlAccuracy: '±1.0% RH',
      capacity: 'Full Production Package: 4 Cinema Rigs + 20 Prime Lenses + Lighting',
      volumeLiters: 320,
      sensorType: 'Dual Solid-State Desiccant Core Units',
      noiseLevel: '0 dB Solid State',
      powerConsumption: 'Avg. 16W',
      dimensionsExternal: 'W 850 × D 480 × H 980 mm',
      dimensionsInternal: 'W 800 × D 430 × H 910 mm',
      shelvesHooks: '5 Heavy-load Steel Slotted Trays (holds up to 30kg per shelf)',
      glassType: 'Dual French Doors with Low-E Tempered Glass',
      lockType: 'Heavy Compression Cam Locks',
      weight: '52 kg'
    },
    features: [
      'Rapid Dehumidification Turbo Mode drops internal RH from 80% to 40% in under 90 minutes',
      'Independent Left/Right Chamber Isolation reduces air exchange when opening a single door',
      'LED lighting columns with door-opening motion detection sensors'
    ],
    suitableItems: ['ARRI Alexa Mini LF', 'RED V-Raptor', 'Fujinon Cine Zooms'],
    climateSuitability: ['humid', 'variable']
  },

  // ELECTRONIC DRY CABINETS - SEMICONDUCTOR & PCB
  {
    id: 'rhv-s500-industrial',
    name: 'GuitHome SMT & Semiconductor Ultra-Dry Cabinet (<5% RH)',
    category: 'semiconductor-pcb',
    categoryName: 'Electronic Dry Cabinets',
    subCategory: 'Industrial SMT & Electronics',
    tagline: 'IPC/JEDEC J-STD-033D Compliant Ultra-Dry Storage for Moisture Sensitive Devices (MSDs)',
    description: 'Designed for electronic manufacturing, SMT surface mount assembly lines, and aerospace electronics. Achieves ultra-low relative humidity under 5% RH, preventing popcorn damage and delamination during reflow soldering.',
    badge: 'IPC/JEDEC Compliant',
    image: 'https://www.guithome.com/gh-600.png',
    isDualMode: false,
    recommendedFor: ['IC Chips & BGA packages', 'Unpopulated & Populated PCBs', 'SMT Tape & Reel', 'Quartz Oscillators'],
    specs: {
      rhRange: '1% – 10% RH Ultra-Low Humidity',
      controlAccuracy: '±0.5% RH',
      capacity: 'Up to 30 SMT Tape & Reel Packages / 40 PCB Trays',
      volumeLiters: 580,
      sensorType: 'Industrial Trace Moisture Sensor (Calibrated to ±0.5%)',
      noiseLevel: '< 28 dB',
      powerConsumption: 'Avg. 35W (Fast recovery heater regeneration)',
      dimensionsExternal: 'W 900 × D 600 × H 1450 mm',
      dimensionsInternal: 'W 850 × D 550 × H 1360 mm',
      shelvesHooks: '6 ESD-Safe Conductive Stainless Steel Shelves with Grounding Cord',
      glassType: 'Anti-Static ESD Coating Tempered Glass (Surface Resistivity 10^6 - 10^9 Ω)',
      lockType: 'Heavy Industrial Compression Latches + Digital Keycard Access',
      weight: '98 kg'
    },
    features: [
      'Compliant with IPC/JEDEC J-STD-033D standards for Level 2a through Level 6 MSDs',
      'Ultra-Rapid Recovery: Returns to <5% RH within 30 minutes after door opening for 1 minute',
      'Complete ESD-Safe Construction: Anti-static body paint, stainless steel interior, grounded chassis',
      'RS-485 / Modbus Data Logging Output: export real-time temperature and humidity logs for ISO auditing'
    ],
    suitableItems: ['BGA, QFP, CSP semiconductors', 'Automotive electronic modules', 'Precision sensors'],
    climateSuitability: ['humid', 'variable']
  },

  // PROFESSIONAL & FINE VALUABLES STORAGE
  {
    id: 'rhv-h180-horology',
    name: 'GuitHome ChronoMaster Watch & Horology Vault',
    category: 'professional-storage',
    categoryName: 'Professional Storage',
    subCategory: 'Luxury Watches & Fine Metals',
    tagline: 'Antioxidant & Constant Climate Environment for Automatic Timepieces & Precious Metals',
    description: 'Combines precision humidity control (keeps RH at 42% to prevent watch oil viscosity change and case gasket breakdown) with integrated programmable watch winders and velvet lined jewelry drawers.',
    badge: 'Luxury Vault',
    image: 'https://www.guithome.com/gh-300.png',
    isDualMode: true,
    recommendedFor: ['Automatic Luxury Watches', 'Vintage Timepieces', 'Gold & Platinum Jewelry', 'Numismatic Coins'],
    specs: {
      rhRange: '35% – 50% RH Precision Band',
      controlAccuracy: '±1.0% RH',
      capacity: '8 Programmable Winders + 16 Static Watch Pillows + Jewelry Drawers',
      volumeLiters: 180,
      sensorType: 'High-Precision Microprocessor Hygrometer',
      noiseLevel: '< 15 dB Whispering Silent',
      powerConsumption: 'Avg. 22W',
      dimensionsExternal: 'W 600 × D 500 × H 1020 mm',
      dimensionsInternal: 'W 540 × D 440 × H 930 mm',
      shelvesHooks: 'Italian Alcantara Suede Interior + Piano Lacquer Hardwood Winders',
      glassType: 'Ballistic Grade UV-Reflective Low-E Glass',
      lockType: 'Hidden Biometric Sensor + Mechanical Dual Deadbolts',
      weight: '62 kg'
    },
    features: [
      'Preserves delicate synthetic watch movement oils from drying out or emulsifying with moisture',
      'Stops tarnish and oxidation on silver, rose gold, and stainless steel dials and bezels',
      'Independent programmable winding directions (Clockwise, Counter-Clockwise, Bidirectional) with TPD controls'
    ],
    suitableItems: ['Patek Philippe, Rolex, Audemars Piguet, Omega', 'Rare coins', 'Fine jewelry'],
    climateSuitability: ['dry', 'humid', 'variable']
  },
  {
    id: 'rhv-a400-archives',
    name: 'GuitHome Archival Rare Books & Document Chamber',
    category: 'professional-storage',
    categoryName: 'Professional Storage',
    subCategory: 'Rare Books, Manuscripts & Art',
    tagline: 'Museum-Spec 50% RH Dual-Mode Conservation Chamber for Antiquities & Cellulose',
    description: 'Paper, parchment, and leather bindings require a stable 45%–55% RH. Below 40% RH, paper turns brittle; above 65% RH, silverfish and mold destroy paper fibers. Active dual-mode safeguards centuries of heritage.',
    badge: 'Museum Grade',
    image: 'https://www.guithome.com/gh-custom.png',
    isDualMode: true,
    recommendedFor: ['First Edition Books', 'Historic Parchments', 'Vintage Vinyl Records', 'Stamps & Currency'],
    specs: {
      rhRange: '40% – 60% RH Dual-Mode Active',
      controlAccuracy: '±1.0% RH',
      capacity: '400+ Rare Volumes / Archival Folio Cases',
      volumeLiters: 420,
      sensorType: 'Laboratory Calibrated Digital Sensor',
      noiseLevel: '< 22 dB',
      powerConsumption: 'Avg. 28W',
      dimensionsExternal: 'W 880 × D 520 × H 1350 mm',
      dimensionsInternal: 'W 820 × D 470 × H 1260 mm',
      shelvesHooks: 'Acid-Free Powder Coated Heavy Gauge Steel Shelving with Book Supports',
      glassType: 'UV 99.8% Blocking Laminated Safety Glass',
      lockType: 'Dual Cylinder High-Security Keyway',
      weight: '74 kg'
    },
    features: [
      'Prevents leather red rot and paper fiber embrittlement during dry continental winters',
      'Suppresses fungal mycelium development without introducing harmful chemical biocides',
      'Activated Carbon Air Filtration module purifies volatile organic compounds and airborne acidic particles'
    ],
    suitableItems: ['Antique leather bound books', 'Vintage map collections', 'Original music manuscripts'],
    climateSuitability: ['dry', 'humid', 'variable']
  }
];

export const CLIMATE_ZONES = [
  {
    id: 'humid',
    name: 'Humid Coastal & Tropical Climates',
    regions: 'Southeast Asia, South America, Gulf Coast, UK Summers, Japan, Coastal Europe',
    rhCharacteristics: 'Average Ambient 70% – 95% RH',
    threats: [
      'Mold and fungal spores attacking acoustic guitar braces, violin varnishes, and camera lens coatings',
      'Soundboard swelling, raising string action and causing sound distortion',
      'Corrosion of metal frets, tuners, saxophone pads, and camera electronics'
    ],
    recommendedRH: '45% – 50% RH',
    solutionMode: 'Active Thermoelectric Dehumidification',
    description: 'High moisture is the enemy of optics and wood acoustic stability. RHVault automatically condenses and extracts excess airborne water vapor, safely lowering RH to the 45% golden mean.'
  },
  {
    id: 'dry',
    name: 'Dry Arid & Heated Continental Winter',
    regions: 'California, Arizona, Middle East, Northern China, Central European / North American Heated Winters',
    rhCharacteristics: 'Indoor Ambient Plummets to 15% – 30% RH',
    threats: [
      'Severe wood shrinkage leading to catastrophic center-seam splits and soundboard cracks',
      'Fret sprout: wood fingerboard shrinks while metal fret wires protrude, cutting the player’s fingers',
      'Violin glue seam failure, peg loosening, and bridge warping; saxophone pads crack'
    ],
    recommendedRH: '45% – 50% RH',
    solutionMode: 'Active Micro-Mist Humidification',
    description: 'Traditional dry cabinets fail here because they ONLY dehumidify, causing further cracking! RHVault’s patented ultrasonic evaporative chamber automatically restores moisture to keep wood supple and crack-free.'
  },
  {
    id: 'variable',
    name: 'Four-Season Variable Climates',
    regions: 'Northeast US, Midwest, Central Europe, Eastern China, Southern Australia',
    rhCharacteristics: 'Swings wildly from 20% in Winter to 85% in Summer',
    threats: [
      'Constant dimensional expansion and contraction destroys instrument glue joints and bracing',
      'Intonation drifts continually, requiring constant truss rod adjustments and setups',
      'Optics suffer condensation when moving between air-conditioned and humid environments'
    ],
    recommendedRH: '45% RH Continuous Lock',
    solutionMode: 'Automatic Dual-Mode Reversible Control',
    description: 'RHVault acts as an intelligent microclimate sanctuary: dehumidifying in July and humidifying in January without user intervention. The true standard for year-round peace of mind.'
  }
];
