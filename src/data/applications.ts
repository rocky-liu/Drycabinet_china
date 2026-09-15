import { ApplicationProfile } from '../types';

export const APPLICATIONS: ApplicationProfile[] = [
  {
    id: 'acoustic-guitar',
    name: 'Acoustic Guitars & Luthiers',
    subtitle: 'Preserving Solid Tonewood Arch, Intonation & Center Seams',
    iconName: 'Guitar',
    targetUsers: 'Acoustic Guitar Collectors, Recording Studios, Luthiers, Vintage Dealers',
    criticalRH: '45% – 50% RH Constant',
    riskIfUncontrolled: 'Soundboard sinking, top split, fret sprout, popped braces, high action buzz',
    benefit: 'Eliminates seasonal setups, keeps strings in tune longer, protects $5,000+ collector value.',
    popularModels: ['GuitHome GH-100 Solo Guitar Cabinet', 'GuitHome GH-300 Three-Guitar Cabinet'],
    image: 'https://www.guithome.com/gh-100.png'
  },
  {
    id: 'violin-strings',
    name: 'Violins, Violas & Master Bows',
    subtitle: 'Protecting Animal Hide Glues, Varnishes & Horsehair Tension',
    iconName: 'Music2',
    targetUsers: 'Concert Violinists, Conservatory Faculty, Instrument Dealers, Bow Makers',
    criticalRH: '45% – 50% RH Constant',
    riskIfUncontrolled: 'Open seam separation, peg slipping, soundpost collapse, snapped bow heads',
    benefit: 'Maintains uniform acoustic resonance and preserves delicate 18th/19th century varnishes.',
    popularModels: ['GuitHome Stradivari Violin & Viola Vault'],
    image: 'https://www.guithome.com/gh-100.png'
  },
  {
    id: 'woodwind-sax',
    name: 'Saxophones & Woodwinds',
    subtitle: 'Preventing Grenadilla Cracking & Leather Pad Decomposition',
    iconName: 'Wind',
    targetUsers: 'Jazz Saxophonists, Orchestral Clarinetists, Flute Soloists, Brass Bands',
    criticalRH: '45% – 55% RH Balanced',
    riskIfUncontrolled: 'Bore cracking in African blackwood, pad rot, key verdigris corrosion, reed dry-warping',
    benefit: 'Pads stay supple for immediate airtight seal; ready-to-play reed conditioning.',
    popularModels: ['GuitHome Woodwind & Saxophone Preservation Cabinet'],
    image: 'https://www.guithome.com/gh-100.png'
  },
  {
    id: 'cinema-optics',
    name: 'Cinema Cameras & Prime Optics',
    subtitle: 'Total Eradication of Mold, Glass Fungus & Sensor Delamination',
    iconName: 'Camera',
    targetUsers: 'Directors of Photography, Cinema Rental Houses, Wildlife Photographers',
    criticalRH: '35% – 42% RH Controlled Dry',
    riskIfUncontrolled: 'Fungal web etching inside elements, coating hazing, sticky rubber barrels',
    benefit: 'Extends equipment lifecycle, maintains crystal MTF sharpness and resale value.',
    popularModels: ['GuitHome Pro Cinema & Camera Lens Dry Vault', 'GuitHome Commercial Production Gear Vault 320L'],
    image: 'https://www.guithome.com/gh-300.png'
  },
  {
    id: 'semiconductor-electronics',
    name: 'Semiconductors, SMT & PCB',
    subtitle: 'IPC/JEDEC J-STD-033D Compliant Ultra-Dry Baking & Storage',
    iconName: 'Cpu',
    targetUsers: 'SMT Assembly Plants, Defense & Aerospace Labs, Electronics Engineers',
    criticalRH: '< 5% RH Ultra-Low Moisture',
    riskIfUncontrolled: 'Moisture expansion during reflow oven (popcorn effect), IC delamination, solder defects',
    benefit: 'Resets floor-life clock for Level 2a-6 MSDs, ESD-grounded architecture.',
    popularModels: ['GuitHome SMT & Semiconductor Ultra-Dry Cabinet (<5% RH)'],
    image: 'https://www.guithome.com/gh-600.png'
  },
  {
    id: 'horology-collectibles',
    name: 'Horology, Fine Art & Antiques',
    subtitle: 'Antioxidant Protection for Luxury Watches, First Editions & Rare Metals',
    iconName: 'Watch',
    targetUsers: 'Watch Collectors, Numismatists, Rare Book Antiquarians, Family Offices',
    criticalRH: '40% – 45% RH Stable',
    riskIfUncontrolled: 'Escapement oil dry-out/gelling, dial silver oxidation, leather red-rot, paper brittleness',
    benefit: 'Combines Swiss climate stability with programmable winding and biometric security.',
    popularModels: ['GuitHome ChronoMaster Watch & Horology Vault', 'GuitHome Archival Rare Books & Document Chamber'],
    image: 'https://www.guithome.com/gh-custom.png'
  }
];
