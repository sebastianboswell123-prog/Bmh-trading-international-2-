const BASE = 'https://images.unsplash.com';
const Q    = '?auto=format&fit=crop&w=900&q=80';

const IMG = {
  // ── Excavators ──
  cat_exc:   `${BASE}/photo-1503708928676-1cb796a0891e${Q}`,
  kom_exc:   `${BASE}/photo-1649807533255-bbc9c9fb7d77${Q}`,
  vol_exc:   `${BASE}/photo-1568678453977-a90de6812e7a${Q}`,
  hit_exc:   `${BASE}/photo-1719409391675-671023c5f807${Q}`,
  sany_sy335: '/images/sany-sy335c.jpg',
  // ── FEL (Front End Loaders) ──
  cat_950h:  `${BASE}/photo-1652396614059-22f29cda1565${Q}`,
  kom_wa200: `${BASE}/photo-1757496156065-669f39ae77eb${Q}`,
  cat_966l:  '/images/cat-966l.jpg',

  // ── Crushing & Screening ──
  metso_s211: '/images/metso-nordtrack-s211.jpg',

  // ── Attachments ──
  sany_b155:  '/images/sany-b155-breaker.jpg',

  // ── Dozers ──
  kom_bull:      `${BASE}/photo-1627451945663-5c1daa80cb20${Q}`,
  shantui_sd32:  '/images/shantui-sd32.jpg',
  komatsu_d375a: '/images/komatsu-d375a.jpg',

  // ── Dumpers ──
  vol_dump:  `${BASE}/photo-1629807472592-2649bfa09f9c${Q}`,

  // ── TLB ──
  jd_tlb:    `${BASE}/photo-1646881478375-2a40ff90b803${Q}`,

  // ── Forklifts ──
  fork_1:    `${BASE}/photo-1620388640785-892616248ec8${Q}`,

  // ── Skidsteers ──
  skid_1:    `${BASE}/photo-1669170941335-07ca7e9dcd73${Q}`,
};

export const plantEquipment = [
  // ── EXCAVATORS ──────────────────────────────────────────────────────────────
  {
    id: 1,
    name: 'Caterpillar 320 GX Excavator',
    year: 2021,
    hours: '1,450',
    brand: 'Caterpillar',
    category: 'Excavators',
    status: 'Available',
    condition: 'Used',
    location: 'Kempton Park, Gauteng',
    image: IMG.cat_exc,
    description: 'Benchmark mid-size excavator rigorously inspected — hydraulics, undercarriage, and swing bearing all graded excellent. Fitted with Cat GRADE with 2D and E-fence. Full service history available.',
    specs: { 'Engine Power': '122 kW (164 hp)', 'Operating Weight': '21,400 kg', 'Max Dig Depth': '6.77 m', 'Bucket Capacity': '0.52–1.19 m³' },
  },
  {
    id: 2,
    name: 'Komatsu PC290LC-11 Excavator',
    year: 2020,
    hours: '2,100',
    brand: 'Komatsu',
    category: 'Excavators',
    status: 'Available',
    condition: 'Used',
    location: 'Kempton Park, Gauteng',
    image: IMG.kom_exc,
    description: 'KOMTRAX telematics active — full machine history verifiable remotely. Preferred for fuel economy and reliability in high-temperature conditions. Undercarriage at 75% remaining life.',
    specs: { 'Engine Power': '155 kW (208 hp)', 'Operating Weight': '29,500 kg', 'Max Dig Depth': '7.23 m', 'Bucket Capacity': '1.2 m³' },
  },
  {
    id: 3,
    name: 'Volvo EC380E Excavator',
    year: 2019,
    hours: '3,200',
    brand: 'Volvo',
    category: 'Excavators',
    status: 'Available',
    condition: 'Refurbished',
    location: 'Kempton Park, Gauteng',
    image: IMG.vol_exc,
    description: 'Fully refurbished to Volvo Certified Rebuilt standard — new undercarriage, hydraulic pump overhaul, cab interior restored, and full repaint. Three-month mechanical warranty provided.',
    specs: { 'Engine Power': '210 kW (282 hp)', 'Operating Weight': '38,100 kg', 'Max Dig Depth': '7.35 m', 'Bucket Capacity': '1.9 m³' },
  },
  {
    id: 4,
    name: 'Hitachi ZX350LC-7 Excavator',
    year: 2022,
    hours: '890',
    brand: 'Hitachi',
    category: 'Excavators',
    status: 'Available',
    condition: 'Used',
    location: 'Kempton Park, Gauteng',
    image: IMG.hit_exc,
    description: 'Near-new with exceptionally low hours. Latest ZAXIS-7 series with redesigned hydraulic system delivering 10% greater fuel efficiency. Dual-mode bucket priority and e-Pilot proportional controls.',
    specs: { 'Engine Power': '193 kW (259 hp)', 'Operating Weight': '34,800 kg', 'Max Dig Depth': '7.40 m', 'Bucket Capacity': '1.5 m³' },
  },
  {
    id: 7,
    name: 'Sany SY335C Excavator',
    year: 2023,
    hours: 'Low Hours',
    brand: 'Sany',
    category: 'Excavators',
    status: 'Available',
    condition: 'Used',
    location: 'Kempton Park, Gauteng',
    image: IMG.sany_sy335,
    description: 'Near-new 33-tonne class excavator in excellent condition. Fuel-efficient engine with intelligent hydraulic control for fast, smooth cycles. Spacious ROPS cab with rear-view camera. Backed by a strong parts and service network across South Africa.',
    specs: { 'Engine Power': '184 kW (247 hp)', 'Operating Weight': '33,800 kg', 'Max Dig Depth': '7.04 m', 'Bucket Capacity': '1.6 m³' },
  },

  // ── FEL (FRONT END LOADERS) ─────────────────────────────────────────────────
  {
    id: 21,
    name: 'Caterpillar 966L Wheel Loader',
    year: 2019,
    hours: 'Low Hours',
    brand: 'Caterpillar',
    category: 'FEL',
    status: 'Available',
    condition: 'Refurbished',
    location: 'Kempton Park, Gauteng',
    image: IMG.cat_966l,
    description: 'Fully refurbished and repainted to an excellent standard. Proven Cat C9.3 ACERT engine paired with a fuel-efficient powershift transmission. Versatile general-purpose bucket fitted, ideal for quarrying, stockpiling, and load-and-carry work.',
    specs: { 'Engine Power': '213 kW (286 hp)', 'Operating Weight': '23,400 kg', 'Bucket Capacity': '3.1–6.3 m³', 'Tipping Load': '15,800 kg' },
  },
  {
    id: 19,
    name: 'Caterpillar 950H Wheel Loader',
    year: 2010,
    hours: '21,249',
    brand: 'Caterpillar',
    category: 'FEL',
    status: 'Available',
    condition: 'Used',
    location: 'Gauteng',
    image: IMG.cat_950h,
    description: 'Proven mid-size wheel loader well-suited for quarrying, recycling, and general earthworks. Reliable Cat C7 engine with ACERT technology. Recently serviced with new filters and fluids throughout.',
    specs: { 'Engine Power': '172 kW (231 hp)', 'Operating Weight': '18,100 kg', 'Bucket Capacity': '2.9 m³', 'Tipping Load': '10,450 kg' },
  },
  {
    id: 20,
    name: 'Komatsu WA200 Wheel Loader',
    year: 2015,
    hours: '20,000',
    brand: 'Komatsu',
    category: 'FEL',
    status: 'Available',
    condition: 'Used',
    location: 'Gauteng',
    image: IMG.kom_wa200,
    description: 'Compact and highly manoeuvrable loader ideal for confined sites and light earthworks. KOMTRAX telematics with full machine history. Good working order with recent tyre replacement.',
    specs: { 'Engine Power': '93 kW (125 hp)', 'Operating Weight': '10,450 kg', 'Bucket Capacity': '1.7 m³', 'Tipping Load': '6,200 kg' },
  },

  // ── DOZERS ───────────────────────────────────────────────────────────────────
  {
    id: 11,
    name: 'Komatsu D65PX-18 Dozer',
    year: 2019,
    hours: '2,700',
    brand: 'Komatsu',
    category: 'Dozers',
    status: 'Available',
    condition: 'Refurbished',
    location: 'Kempton Park, Gauteng',
    image: IMG.kom_bull,
    description: 'Fully refurbished — new track shoes, rollers, and idlers fitted. Wide-gauge track design provides outstanding flotation and stability on soft ground. Komatsu iMC ready for GPS dozing.',
    specs: { 'Engine Power': '168 kW (225 hp)', 'Operating Weight': '21,945 kg', 'Blade Capacity': '4.8 m³ (Semi-U)', 'Track Gauge': 'Extra-Wide PX' },
  },
  {
    id: 5,
    name: 'Shantui SD32 Dozer',
    year: 2023,
    hours: 'Low Hours',
    brand: 'Shantui',
    category: 'Dozers',
    status: 'Available',
    condition: 'Refurbished',
    location: 'Kempton Park, Gauteng',
    image: IMG.shantui_sd32,
    description: 'Powerful 320 hp crawler dozer fully refurbished and repainted to an excellent standard. Fitted with a heavy-duty semi-U blade and single-shank rear ripper for hard-ground work. Cummins NT855 engine, enclosed ROPS/FOPS cab. Ideal for mining, bulk earthworks, and land clearing.',
    specs: { 'Engine Power': '235 kW (320 hp)', 'Operating Weight': '37,000 kg', 'Blade Capacity': '10.0 m³ (Semi-U)', 'Attachment': 'Single-Shank Ripper' },
  },
  {
    id: 6,
    name: 'Komatsu D375A Dozer',
    year: 2015,
    hours: 'Available on request',
    brand: 'Komatsu',
    category: 'Dozers',
    status: 'Available',
    condition: 'Used',
    location: 'Kempton Park, Gauteng',
    image: IMG.komatsu_d375a,
    description: 'Heavy production mining dozer in strong working condition. SIGMADOZER semi-U blade for high-efficiency earthmoving and a giant single-shank ripper fitted at the rear. Proven Komatsu SAA6D170E engine with KOMTRAX telematics. Built for large-scale mining and quarry operations.',
    specs: { 'Engine Power': '455 kW (610 hp)', 'Operating Weight': '71,000 kg', 'Blade Capacity': '18.5 m³ (Semi-U)', 'Attachment': 'Giant Single-Shank Ripper' },
  },

  // ── DUMPERS ──────────────────────────────────────────────────────────────────
  {
    id: 16,
    name: 'Volvo A45G Articulated Dumper',
    year: 2019,
    hours: '3,400',
    brand: 'Volvo',
    category: 'Dumpers',
    status: 'Available',
    condition: 'Refurbished',
    location: 'Kempton Park, Gauteng',
    image: IMG.vol_dump,
    description: 'Fully refurbished with new hinge pins, fresh differential service, and body liner replaced. 42-tonne payload with all-wheel drive and cross-differential lock. On-Board Weighing system calibrated.',
    specs: { 'Payload': '42 tonnes', 'Engine Power': '336 kW (450 hp)', 'Body Capacity': '27 m³', 'Drive': 'A6×6 All-Wheel' },
  },

  // ── TLB (TRACTOR LOADER BACKHOE) ─────────────────────────────────────────────
  {
    id: 31,
    name: 'John Deere 315SL Backhoe Loader',
    year: 2018,
    hours: '5,200',
    brand: 'John Deere',
    category: 'TLB',
    status: 'Available',
    condition: 'Used',
    location: 'Gauteng',
    image: IMG.jd_tlb,
    description: 'Reliable mid-size TLB suited to general civil, municipal, and agricultural applications. PowerShift transmission with four speed ranges. Recent service with new filters, fluids, and loader pivot pins.',
    specs: { 'Engine Power': '74 kW (99 hp)', 'Operating Weight': '8,200 kg', 'Max Dig Depth': '5.49 m', 'Loader Capacity': '0.85 m³' },
  },

  // ── FORKLIFTS ────────────────────────────────────────────────────────────────
  {
    id: 32,
    name: 'Toyota 8FD30 Counterbalance Forklift',
    year: 2019,
    hours: '4,500',
    brand: 'Toyota',
    category: 'Forklifts',
    status: 'Available',
    condition: 'Used',
    location: 'Kempton Park, Gauteng',
    image: IMG.fork_1,
    description: 'Industry-standard 3-tonne diesel counterbalance forklift. SAS (System of Active Stability) for outstanding safety. Triple-stage mast with full free-lift. Recently serviced with new brake pads and tyres.',
    specs: { 'Lift Capacity': '3,000 kg', 'Lift Height': '4,500 mm', 'Engine': 'Toyota 4Y Petrol/Diesel', 'Mast': 'Triple Stage FFL' },
  },

  // ── SKIDSTEERS ───────────────────────────────────────────────────────────────
  {
    id: 33,
    name: 'Caterpillar 262D3 Skid Steer Loader',
    year: 2021,
    hours: '1,200',
    brand: 'Caterpillar',
    category: 'Skidsteers',
    status: 'Available',
    condition: 'Used',
    location: 'Kempton Park, Gauteng',
    image: IMG.skid_1,
    description: 'Compact and powerful skid steer for confined-space earthworks, loading, and demolition. Advanced machine display with fuel economy mode. Rides on 10×16.5 NHS tyres with good remaining life.',
    specs: { 'Engine Power': '68 kW (91 hp)', 'Operating Weight': '3,700 kg', 'Rated Capacity': '1,089 kg', 'Bucket Capacity': '0.43 m³' },
  },

  // ── CRUSHING & SCREENING ─────────────────────────────────────────────────────
  {
    id: 41,
    name: 'Metso Nordtrack S2.11 Mobile Screen',
    year: 2021,
    hours: 'Low Hours',
    brand: 'Metso',
    category: 'Crushing & Screening',
    status: 'Available',
    condition: 'Used',
    location: 'Kempton Park, Gauteng',
    image: IMG.metso_s211,
    description: 'Compact track-mounted double-deck scalping screen for contractors and aggregate producers. Quick set-up, fuel-efficient CAT diesel power unit, and hydraulically folding conveyors for easy transport. Produces up to three calibrated products in one pass.',
    specs: { 'Screen Type': 'Double Deck', 'Capacity': 'Up to 350 tph', 'Feed Hopper': '5 m³', 'Power Unit': 'CAT Diesel' },
  },

  // ── ATTACHMENTS ──────────────────────────────────────────────────────────────
  {
    id: 42,
    name: 'Sany B155 Hydraulic Breaker',
    year: 2024,
    hours: 'New',
    brand: 'Sany',
    category: 'Attachments',
    status: 'Available',
    condition: 'New',
    location: 'Kempton Park, Gauteng',
    image: IMG.sany_b155,
    description: 'Brand-new side-type hydraulic breaker suited to 20–30 tonne excavators. High impact energy for demolition, trenching, and rock breaking. Supplied with mounting bracket and genuine Sany hoses. Multiple units available ex-stock.',
    specs: { 'Carrier Class': '20–30 t Excavator', 'Chisel Diameter': '155 mm', 'Type': 'Side-Type Hydraulic Hammer', 'Condition': 'New, Crated' },
  },

];

// Parts removed — this site focuses on equipment marketplace
export const partsInventory = [];
export const partsCategories = ['All'];

// Full brand lineup for the ticker
export const brands = [
  'Caterpillar', 'Komatsu', 'Volvo', 'Hitachi', 'Liebherr', 'Shantui',
  'Sany', 'Metso', 'Grove', 'Tadano', 'John Deere', 'Toyota', 'JLG',
];

export const equipmentCategories = [
  'All',
  'Excavators',
  'Dumpers',
  'TLB',
  'FEL',
  'Dozers',
  'Forklifts',
  'Skidsteers',
  'Crushing & Screening',
  'Attachments',
];

export const companyInfo = {
  name: 'BMH Trading International',
  tagline: 'Quality Used Heavy Equipment — South Africa',
  phone: '+27 82 780 0084',
  email: 'bradleyh@bmhtradinginternational.com',
  address: '142 2nd Avenue, Bredell AH, Kempton Park, South Africa, 1619',
};
