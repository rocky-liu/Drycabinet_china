import { GuideArticle } from '../types';

export const GUIDE_ARTICLES: GuideArticle[] = [
  {
    id: 'guide-guitar-humidity',
    slug: 'what-is-the-best-humidity-for-acoustic-guitars',
    title: 'What Is the Best Humidity for Acoustic Guitars? (The 45%–55% Golden Window)',
    category: 'Guitar Care & Lutherie',
    readTime: '6 min read',
    publishedDate: 'March 2026',
    idealRH: '45% – 50% RH',
    summary: 'Acoustic guitars are crafted from thin, kiln-dried tonewoods under strict lutherie factory conditions (typically 45%–50% RH). Deviations in home humidity cause string buzz, belly bulge, or catastrophic soundboard cracking.',
    seoKeywords: [
      'best humidity for acoustic guitars',
      'ideal humidity guitar storage',
      'acoustic guitar humidity 45%',
      'guitar humidity controlled cabinet',
      'how to protect guitar from dry air'
    ],
    content: [
      {
        sectionHeading: 'The Physics of Tonewood: Why Guitars Breathe',
        paragraphs: [
          'Unlike solid-body electric guitars that have thick lacquer and massive timber blocks, fine acoustic guitars rely on ultra-thin soundboards (often 2.5mm to 3.0mm of Sitka Spruce, Engelmann, or Western Red Cedar) braced with delicate Adirondack or Sitka spruce struts.',
          'Wood is an anisotropic hygroscopic material: it expands across the grain when absorbing moisture and shrinks as it gives up moisture to the surrounding air. When your indoor relative humidity drops below 35%, the wood shrinks, but the rigid internal braces cannot compress at the same rate. This tensile tension rips the spruce top open along the center seam.'
        ]
      },
      {
        sectionHeading: 'Symptoms of Low Humidity (<35% RH) vs High Humidity (>65% RH)',
        paragraphs: [
          'Recognizing early signs will save your instrument before structural fracture occurs:'
        ],
        bulletPoints: [
          'Under-Humidified (<35% RH): Top sinks in around the bridge, string height drops causing intense fret buzz, sharp fret ends sprout from the sides of the fingerboard (cutting your fretting fingers), pickguard curls, bridge begins lifting.',
          'Severely Dry (<25% RH): Hairline cracks radiate from the bridge toward the lower bout; braces pop off with an audible crack.',
          'Over-Humidified (>65% RH): Soundboard bulges upward, action skyrockets making playing painful, tonal projection becomes muddy, and internal hide glues soften.',
          'Optimal Equilibrium (45%–50% RH): Crisp attack, stable intonation, flat soundboard arch, smooth fingerboard edges, zero seasonal truss rod drama.'
        ]
      },
      {
        sectionHeading: 'Why Chemical Humidifier Packs Fall Short in Arid Climates',
        paragraphs: [
          'Traditional two-way silica or gel packs inside hard cases are limited to a few grams of water capacity. In severe continental winters with indoor heating (15%–20% RH), packs dry rock-hard within 7 to 10 days. Forgetting to replace them leaves the guitar defenseless.',
          'An active dual-mode cabinet with a continuous digital sensor and ultrasonic mist injection maintains absolute ±1% RH fidelity indefinitely, without touching the instrument or risk of chemical liquid leakage.'
        ]
      }
    ]
  },
  {
    id: 'guide-dry-cabinet-vs-humidity-cabinet',
    slug: 'dry-cabinet-vs-humidity-controlled-cabinet',
    title: 'Electronic Dry Cabinet vs. Humidity Controlled Cabinet: The Critical Difference',
    category: 'Technology & Preservation',
    readTime: '5 min read',
    publishedDate: 'February 2026',
    idealRH: 'Dual-Mode Active',
    summary: 'Most people assume all storage cabinets are the same. But a standard Electronic Dry Cabinet ONLY removes moisture. For musical instruments, putting a guitar in a dry cabinet during dry weather will accelerate wood cracking!',
    seoKeywords: [
      'dry cabinet vs humidity controlled cabinet',
      'electronic dry cabinet',
      'automatic humidity control cabinet',
      'dual humidity control cabinet',
      'cabinet with active humidification'
    ],
    content: [
      {
        sectionHeading: 'The Traditional Dry Cabinet: Engineered Exclusively for Dehumidification',
        paragraphs: [
          'Electronic Dry Cabinets gained popularity among photographers and electronics manufacturers to protect camera lenses from fungal etching and PCB components from moisture absorption before soldering. They utilize a Peltier condensing chip or multi-porous desiccant box to exhaust moisture outside.',
          'They work exceptionally well for non-organic items where the goal is simply "as dry as possible" (e.g. 20% to 40% RH). However, if your ambient room drops to 20% RH in winter, a standard dry cabinet has NO ability to add moisture back. It stays at 20% or even drops further.'
        ]
      },
      {
        sectionHeading: 'The Humidity Controlled Cabinet: Active 2-Way Moisture Regulation',
        paragraphs: [
          'Organic items like acoustic guitars, violins, cello wood, fine cigars, and rare book bindings do NOT want to be dry. They want equilibrium (usually 45%–52% RH).',
          'A genuine humidity-controlled cabinet integrates two independent opposing sub-systems controlled by a central microprocessor:'
        ],
        bulletPoints: [
          'When Ambient RH > Target RH: The high-efficiency dehumidification module condenses ambient vapor and vents water molecules out.',
          'When Ambient RH < Target RH: The ultrasonic piezo-electric atomizer or molecular vapor cell infuses microscopic water vapor into the air circulation loop.',
          'Feedback Loop: High-speed Sensirion digital probes sample the air 10 times per second to hold the target within ±1% RH.'
        ]
      },
      {
        sectionHeading: 'Conclusion: Choose Based On Your Asset Material',
        paragraphs: [
          'If you store exclusively camera lenses, IC chips, and metal tools, an Electronic Dry Cabinet is ideal. But if you store solid-wood guitars, violins, woodwinds, or historical papers, you MUST use an Active Dual-Mode Humidity Controlled Cabinet.'
        ]
      }
    ]
  },
  {
    id: 'guide-violin-humidity-care',
    slug: 'what-humidity-should-a-violin-be-stored-at',
    title: 'What Humidity Should a Violin & Master Bow Be Stored At?',
    category: 'Stringed Instruments',
    readTime: '4 min read',
    publishedDate: 'January 2026',
    idealRH: '45% – 50% RH',
    summary: 'Master violins and violas are held together by soluble hide glue designed to release before wood ruptures. Learn how sudden humidity shifts ruin peg action and cause top seam separation.',
    seoKeywords: [
      'what humidity should a violin be stored at',
      'violin humidity cabinet',
      'protect violin from cracking',
      'bow hair tension humidity'
    ],
    content: [
      {
        sectionHeading: 'The Vulnerability of Animal Hide Glue and Aged Spruce',
        paragraphs: [
          'Unlike industrial polyvinyl acetates, lutherie hide glue is hydro-sensitive. In extremely humid environments, hide glue softens, causing the neck projection angle to sag and lowering the fingerboard elevation.',
          'Conversely, in winter conditions below 35% RH, the back maple and belly spruce shrink at differing rates. Pegs shrink and slip loose, making tuning impossible, and the ribs may pull away from the purfling.'
        ]
      },
      {
        sectionHeading: 'The Forgotten Peril: Pernambuco Bow Hair Tension',
        paragraphs: [
          'Natural Mongolian horsehair expands when damp and contracts sharply when dry. In a severely dry room, horsehair contracts so severely that it exerts tremendous lateral pressure on the bow tip, often snapping antique Pernambuco heads even when the screw is fully loosened.'
        ]
      }
    ]
  },
  {
    id: 'guide-lens-fungus-prevention',
    slug: 'how-lens-fungus-forms-and-how-to-prevent-it',
    title: 'How Lens Fungus Forms: Protecting Cinema & DSLR Glass in High RH Climates',
    category: 'Optics & Cinematography',
    readTime: '5 min read',
    publishedDate: 'January 2026',
    idealRH: '35% – 45% RH',
    summary: 'Fungal spores thrive above 60% RH, etching permanent spider-web patterns into anti-reflective lens coatings. Understand how solid-state dehumidification eliminates the threat permanently.',
    seoKeywords: [
      'camera dry cabinet',
      'prevent lens fungus',
      'lens storage humidity',
      'cinema optics dry storage'
    ],
    content: [
      {
        sectionHeading: 'The Biology of Lens Fungus (Aspergillus & Penicillium)',
        paragraphs: [
          'Airborne fungal spores enter camera lenses through barrel zoom mechanisms and weather-seal gaps. Spores lie dormant until two conditions are met: darkness and relative humidity above 60% RH. Once germinated, the fungus feeds on organic lens cement and microscopic dust, producing acidic metabolic byproducts that permanently dissolve anti-reflective optical coatings.'
        ]
      },
      {
        sectionHeading: 'Why Not Store at 10% RH?',
        paragraphs: [
          'A common amateur mistake is setting a dry cabinet to maximum dryness (<15% RH). Overly dry environments cause barrel grease and zoom lubricants to desiccate and migrate, while rubber focus rings become brittle and turn white. 35% to 45% RH is the medically proven sweet spot: 100% dry enough to kill spores, yet moist enough to keep lubricants and seals intact.'
        ]
      }
    ]
  },
  {
    id: 'guide-woodwind-saxophone-storage',
    slug: 'saxophone-woodwind-pad-and-body-preservation',
    title: 'Saxophone & Woodwind Care: Preventing Pad Dry-Rot & Grenadilla Body Cracks',
    category: 'Woodwind Instruments',
    readTime: '5 min read',
    publishedDate: 'March 2026',
    idealRH: '45% – 55% RH',
    summary: 'Saxophone leather resonator pads and Grenadilla clarinet body bores live in two opposite moisture worlds. Learn how balanced active humidity storage prevents costly repads and cracked upper joints.',
    seoKeywords: [
      'saxophone humidity cabinet',
      'woodwind instrument storage',
      'clarinet body crack prevention',
      'saxophone pad care'
    ],
    content: [
      {
        sectionHeading: 'The Dilemma of Damp Playing vs Dry Storage',
        paragraphs: [
          'When you play a saxophone or clarinet, 100% RH breath saturates the bore and soaks the leather pads. If you seal the instrument in a non-breathing hard case immediately, mold blooms on the pads and lacquer verdigris develops on brass keywork.',
          'On the other hand, if you leave a dense African Blackwood clarinet in a dry heated room, the outer shell contracts while the damp inner bore remains expanded, resulting in a disastrous barrel split. RHVault’s gentle convective airflow stabilizes internal and external moisture simultaneously.'
        ]
      }
    ]
  }
];
