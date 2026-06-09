const BASE = 'https://images.unsplash.com';
const Q    = '?auto=format&fit=crop&w=900&q=80';

const IMG = {
  // ── Excavators ──
  cat_exc:   `${BASE}/photo-1503708928676-1cb796a0891e${Q}`,
  kom_exc:   `${BASE}/photo-1649807533255-bbc9c9fb7d77${Q}`,
  vol_exc:   `${BASE}/photo-1568678453977-a90de6812e7a${Q}`,
  hit_exc:   `${BASE}/photo-1719409391675-671023c5f807${Q}`,
  lie_exc:   `${BASE}/photo-1628645419184-26a1f2757340${Q}`,
  // ── FEL (Front End Loaders) ──
  kom_wl:    `${BASE}/photo-1629807473015-41699c4471b5${Q}`,
  vol_wl:    `${BASE}/photo-1704570128155-78f044e20824${Q}`,
  cat_950h:  `${BASE}/photo-1652396614059-22f29cda1565${Q}`,
  kom_wa200: `${BASE}/photo-1757496156065-669f39ae77eb${Q}`,

  // ── Dozers ──
  kom_bull:  `${BASE}/photo-1627451945663-5c1daa80cb20${Q}`,

  // ── Mobile Cranes ──
  lie_crane: `${BASE}/photo-1727818899530-5a3bee908607${Q}`,
  grv_crane: `${BASE}/photo-1630235547004-48640091f9e5${Q}`,
  tadano_tr: `${BASE}/photo-1586458995526-09ce6839babe${Q}`,

  // ── Dumpers ──
  cat_dump:  `${BASE}/photo-1709489662983-3674d790b224${Q}`,
  vol_dump:  `${BASE}/photo-1629807472592-2649bfa09f9c${Q}`,

  // ── TLB ──
  jd_tlb:    `${BASE}/photo-1646881478375-2a40ff90b803${Q}`,

  // ── Forklifts ──
  fork_1:    `${BASE}/photo-1620388640785-892616248ec8${Q}`,

  // ── Skidsteers ──
  skid_1:    `${BASE}/photo-1669170941335-07ca7e9dcd73${Q}`,

  // ── Telescopic Handlers ──
  tele_1:    `${BASE}/photo-1742070122889-1c7ab35ea456${Q}`,
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
    id: 5,
    name: 'Liebherr R 945 Excavator',
    year: 2018,
    hours: '4,100',
    brand: 'Liebherr',
    category: 'Excavators',
    status: 'Available',
    condition: 'Refurbished',
    location: 'Kempton Park, Gauteng',
    image: IMG.lie_exc,
    description: '45-tonne class, purpose-built for heavy infrastructure, quarrying, and bulk earthworks. Fully refurbished including rebuilt travel motors, new track chains, and comprehensive hydraulic service.',
    specs: { 'Engine Power': '270 kW (362 hp)', 'Operating Weight': '44,900 kg', 'Max Dig Depth': '7.70 m', 'Bucket Capacity': '2.15 m³' },
  },

  // ── FEL (FRONT END LOADERS) ─────────────────────────────────────────────────
  {
    id: 8,
    name: 'Komatsu WA470-10 Wheel Loader',
    year: 2019,
    hours: '2,600',
    brand: 'Komatsu',
    category: 'FEL',
    status: 'Available',
    condition: 'Used',
    location: 'Kempton Park, Gauteng',
    image: IMG.kom_wl,
    description: 'KOMTRAX telematics with full machine health data available. Renowned for excellent performance on sandy and loose terrain. Features Komatsu Traction Control System (KTCS) and spacious ROPS/FOPS cab.',
    specs: { 'Engine Power': '194 kW (260 hp)', 'Operating Weight': '22,600 kg', 'Bucket Capacity': '3.2–4.6 m³', 'Tipping Load': '12,400 kg' },
  },
  {
    id: 9,
    name: 'Volvo L120H Wheel Loader',
    year: 2022,
    hours: '750',
    brand: 'Volvo',
    category: 'FEL',
    status: 'Available',
    condition: 'Used',
    location: 'Kempton Park, Gauteng',
    image: IMG.vol_wl,
    description: 'Near-new with just 750 operating hours. OptiShift transmission with torque converter lock-up delivers outstanding fuel savings. Full Volvo service history and original warranty documentation available.',
    specs: { 'Engine Power': '194 kW (260 hp)', 'Operating Weight': '20,700 kg', 'Bucket Capacity': '3.2–4.2 m³', 'Tipping Load': '12,100 kg' },
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

  // ── MOBILE CRANES ────────────────────────────────────────────────────────────
  {
    id: 12,
    name: 'Liebherr LTM 1100-4.2 Mobile Crane',
    year: 2018,
    hours: 'N/A',
    brand: 'Liebherr',
    category: 'Mobile Cranes',
    status: 'Available',
    condition: 'Used',
    location: 'Kempton Park, Gauteng',
    image: IMG.lie_crane,
    description: 'Premier 100-tonne all-terrain mobile crane. LICCON2 computer system, 60m main boom, and Y-guying system. Fully road-mobile with all-axle steering. Annual inspection valid.',
    specs: { 'Max Capacity': '100 tonnes', 'Max Boom': '60 m', 'Max Luffing Jib': '21 m', 'Drive': '8×8×8 All-Terrain' },
  },
  {
    id: 13,
    name: 'Grove RT760E Rough Terrain Crane',
    year: 2020,
    hours: 'N/A',
    brand: 'Grove',
    category: 'Mobile Cranes',
    status: 'Available',
    condition: 'Used',
    location: 'Kempton Park, Gauteng',
    image: IMG.grv_crane,
    description: '60-tonne rough terrain crane with 47.5 m full-power boom. Single-engine design with MEGAFORM boom for maximum strength-to-weight ratio. Full jib attachment included.',
    specs: { 'Max Capacity': '60 tonnes', 'Max Boom': '47.5 m', 'Max Jib': '15.2 m', 'Drive': '4WD Single-Engine' },
  },
  {
    id: 22,
    name: 'Tadano TR 250M Rough Terrain Crane',
    year: 1984,
    hours: 'N/A',
    brand: 'Tadano',
    category: 'Mobile Cranes',
    status: 'Available',
    condition: 'Used',
    location: 'South Africa',
    image: IMG.tadano_tr,
    description: '25-tonne rough terrain crane. Compact single-engine design with 4-wheel drive and 4-wheel steering for excellent manoeuvrability on site. Operational and well maintained. Inspection available.',
    specs: { 'Max Capacity': '25 tonnes', 'Drive': '4WD / 4WS', 'Boom Type': 'Telescopic', 'Configuration': 'Single Engine RT' },
  },

  // ── DUMPERS ──────────────────────────────────────────────────────────────────
  {
    id: 15,
    name: 'Caterpillar 745 Articulated Dumper',
    year: 2021,
    hours: '1,600',
    brand: 'Caterpillar',
    category: 'Dumpers',
    status: 'Available',
    condition: 'Used',
    location: 'Kempton Park, Gauteng',
    image: IMG.cat_dump,
    description: 'World\'s best-selling ADT in its payload class. 41.5 tonnes payload with Cat APECS for maximum throughput. Excellent condition with recent tyre replacement on all six axles.',
    specs: { 'Payload': '41.5 tonnes', 'Engine Power': '373 kW (500 hp)', 'Body Capacity': '25.5 m³', 'Transmission': '7-Speed Auto' },
  },
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

  // ── TELESCOPIC HANDLERS ──────────────────────────────────────────────────────
  {
    id: 34,
    name: 'JLG 4013 Telescopic Handler',
    year: 2020,
    hours: '2,800',
    brand: 'JLG',
    category: 'Telescopic Handlers',
    status: 'Available',
    condition: 'Used',
    location: 'Kempton Park, Gauteng',
    image: IMG.tele_1,
    description: 'Versatile 4-tonne telehandler with 13 m maximum lift height. Smooth Ride System (SRS) for material stability during travel. 4WD / 4WS for excellent off-road capability. Fork carriage and work platform attachments included.',
    specs: { 'Max Capacity': '4,000 kg', 'Max Lift Height': '13 m', 'Max Forward Reach': '9.3 m', 'Drive': '4WD / 4WS' },
  },
];

// Parts removed — this site focuses on equipment marketplace
export const partsInventory = [];
export const partsCategories = ['All'];

// Full brand lineup for the ticker
export const brands = [
  'Caterpillar', 'Komatsu', 'Volvo', 'Hitachi', 'Liebherr',
  'John Deere', 'Grove', 'Tadano', 'Toyota', 'Bobcat', 'JLG', 'Manitou',
];

export const equipmentCategories = [
  'All',
  'Excavators',
  'Dumpers',
  'TLB',
  'FEL',
  'Dozers',
  'Forklifts',
  'Mobile Cranes',
  'Skidsteers',
  'Telescopic Handlers',
];

export const companyInfo = {
  name: 'BMH Trading International',
  tagline: 'Quality Used Heavy Equipment — South Africa',
  phone: '+27 82 780 0084',
  email: 'bradleyh@bmhtradinginternational.com',
  address: '142 2nd Avenue, Bredell AH, Kempton Park, South Africa, 1619',
};
