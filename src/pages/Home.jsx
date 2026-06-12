import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Globe, Wrench, Truck, Phone, ArrowUpRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { plantEquipment, brands } from '../data/equipment';

// Curated hero slideshow — real in-stock machines
const HERO_IDS = [7, 21, 5, 6, 41, 1, 4];
const heroImages = HERO_IDS
  .map((id) => plantEquipment.find((item) => item.id === id))
  .filter(Boolean)
  .map((item) => item.image.replace('w=900', 'w=1800').replace('q=80', 'q=85'));

const stats = [
  { value: String(plantEquipment.length), label: 'Machines In Stock' },
  { value: '14+', label: 'Leading Brands' },
  { value: '15+', label: 'Years Experience' },
  { value: '30+', label: 'Countries Served' },
];

const services = [
  {
    icon: Truck,
    title: 'Plant Sales',
    description: 'Quality used excavators, FELs, dozers, dumpers, TLBs, forklifts, skid steers, and cranes from leading manufacturers.',
    num: '01',
  },
  {
    icon: Wrench,
    title: 'Parts Supply',
    description: 'Genuine and aftermarket parts for Caterpillar, Komatsu, Volvo, and Hitachi equipment. Fast delivery across Africa.',
    num: '02',
  },
  {
    icon: Shield,
    title: 'Machine Inspections',
    description: 'All machines inspected and graded before sale. Full inspection reports available on request for any unit.',
    num: '03',
  },
  {
    icon: Globe,
    title: 'Global Shipping',
    description: 'Worldwide logistics and shipping solutions. We deliver equipment to any destination across the globe.',
    num: '04',
  },
];

export default function Home() {
  const [heroIdx, setHeroIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setHeroIdx((i) => (i + 1) % heroImages.length), 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <Helmet>
        <title>Used Construction & Mining Equipment South Africa | BMH Trading International</title>
        <meta name="description" content="BMH Trading International — South Africa's trusted supplier of quality used excavators, wheel loaders, bulldozers, cranes & forklifts. Based in Kempton Park, Gauteng. Shipping worldwide." />
        <meta property="og:title" content="Used Construction & Mining Equipment South Africa | BMH Trading International" />
        <meta property="og:description" content="Quality used excavators, loaders, dozers, cranes & forklifts for sale. Based in Kempton Park, SA. Shipping to 30+ countries." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bmhtradinginternational.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1503708928676-1cb796a0891e?w=1200&h=630&fit=crop&q=80" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Caterpillar excavator — BMH Trading International South Africa" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Used Construction & Mining Equipment South Africa | BMH Trading International" />
        <meta name="twitter:description" content="Quality used excavators, loaders, dozers, cranes & forklifts for sale. Based in Kempton Park, SA. Shipping to 30+ countries." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1503708928676-1cb796a0891e?w=1200&h=630&fit=crop&q=80" />
        <link rel="canonical" href="https://www.bmhtradinginternational.com/" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "BMH Trading International",
            "description": "Suppliers of quality used construction and mining equipment. Based in Kempton Park, South Africa. Shipping worldwide.",
            "url": "https://www.bmhtradinginternational.com",
            "email": "bradleyh@bmhtradinginternational.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "142 2nd Avenue, Bredell AH",
              "addressLocality": "Kempton Park",
              "addressRegion": "Gauteng",
              "postalCode": "1619",
              "addressCountry": "ZA"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -26.05,
              "longitude": 28.23
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
                "opens": "07:30",
                "closes": "17:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "08:00",
                "closes": "13:00"
              }
            ],
            "areaServed": ["South Africa", "Sub-Saharan Africa", "Middle East", "Worldwide"],
            "sameAs": []
          }
        `}</script>
      </Helmet>

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[94vh] flex items-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0">
          {/* Hero background slideshow — cycles through all stock */}
          <AnimatePresence>
            <motion.img
              key={heroIdx}
              src={heroImages[heroIdx]}
              alt={plantEquipment[heroIdx].name}
              className="absolute inset-0 w-full h-full object-contain object-center lg:object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.8, ease: 'easeInOut' }}
            />
          </AnimatePresence>
          {/* Dark cinematic overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(105deg, rgba(15,42,74,0.72) 0%, rgba(15,42,74,0.45) 50%, rgba(15,42,74,0.25) 100%),
                linear-gradient(to top, rgba(15,42,74,1) 0%, transparent 40%)
              `,
            }}
          />
          {/* Subtle chrome tint */}
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse 60% 50% at 75% 40%, rgba(200,216,232,0.06) 0%, transparent 65%)',
            }}
          />
          {/* Precision grid overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(200,216,232,0.04) 1px, transparent 1px),
                linear-gradient(90deg, rgba(200,216,232,0.04) 1px, transparent 1px)
              `,
              backgroundSize: '100px 100px',
            }}
          />
          {/* Bottom fade to site bg */}
          <div
            className="absolute bottom-0 left-0 right-0 h-56"
            style={{ background: 'linear-gradient(to top, var(--bg-deep) 0%, transparent 100%)' }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8 w-full py-12 sm:py-24">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="w-12 h-[1px] shimmer-line" style={{ background: 'rgba(200,216,232,0.4)' }} />
              <span
                className="text-[12px] font-medium tracking-[0.4em] uppercase"
                style={{ fontFamily: 'var(--font-heading)', color: '#ffffff' }}
              >
                BMH Trading International
              </span>
            </motion.div>

            {/* Title — using Bebas Neue for cinematic scale */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="uppercase leading-[0.92] mb-6 sm:mb-8"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(42px, 11vw, 128px)',
                fontWeight: 400,
                letterSpacing: '0.02em',
              }}
            >
              <span style={{ color: '#ffffff' }}>Quality Used</span>
              <br />
              <span style={{ color: '#ffffff' }}>Equipment</span>
              <br />
              <span style={{ color: '#ffffff' }}>Supplied Worldwide</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.23, 1, 0.32, 1] }}
              className="text-[15px] max-w-lg leading-relaxed mb-8 sm:mb-12 font-light"
              style={{ color: 'var(--text-muted)' }}
            >
              South Africa's trusted supplier of construction and mining equipment.
              Caterpillar, Komatsu, Volvo & Liebherr equipment backed by genuine parts and expert support.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/plant"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 text-[13px] font-semibold tracking-[0.2em] uppercase transition-all duration-400"
                style={{
                  fontFamily: 'var(--font-heading)',
                  background: '#ffffff',
                  color: '#0F2A4A',
                  border: '1px solid #ffffff',
                  boxShadow: '0 8px 30px rgba(255,255,255,0.25)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#ffffff';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 14px 44px rgba(255,255,255,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#ffffff';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(255,255,255,0.25)';
                }}
              >
                View Stock
                <ArrowRight size={14} strokeWidth={1.5} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 text-[13px] font-semibold tracking-[0.2em] uppercase transition-all duration-400"
                style={{
                  fontFamily: 'var(--font-heading)',
                  border: '1px solid rgba(255,255,255,0.35)',
                  color: '#ffffff',
                  background: 'transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Get In Touch
              </Link>
            </motion.div>
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-0"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`${i > 0 ? 'lg:pl-8 lg:border-l' : ''}`}
                style={{ borderColor: 'rgba(200,216,232,0.06)' }}
              >
                <div
                  className="stat-number text-4xl lg:text-5xl"
                  style={{ color: 'var(--chrome-light)' }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-[12px] tracking-[0.3em] uppercase mt-1 font-medium"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-dim)' }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ BRANDS TICKER ═══ */}
      <section
        className="py-12 relative overflow-hidden"
        style={{
          background: 'var(--bg-surface)',
          borderTop: '1px solid rgba(200,216,232,0.10)',
          borderBottom: '1px solid rgba(200,216,232,0.10)',
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          {/* Label row */}
          <div className="flex items-center gap-4 justify-center mb-7">
            <div className="h-[1px] w-10 shrink-0" style={{ background: 'rgba(200,216,232,0.2)' }} />
            <span
              className="text-[12px] font-semibold tracking-[0.4em] uppercase whitespace-nowrap"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--chrome)' }}
            >
              Authorized Dealer &amp; Supplier
            </span>
            <div className="h-[1px] w-10 shrink-0" style={{ background: 'rgba(200,216,232,0.2)' }} />
          </div>
          {/* Scrollable brand strip */}
          <div className="brands-strip flex flex-wrap items-center justify-center gap-x-5 gap-y-3 lg:gap-x-8">
            {brands.map((brand, i) => (
              <span
                key={brand}
                className="flex items-center gap-x-5 lg:gap-x-8"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                <span
                  className="text-base sm:text-lg lg:text-xl tracking-[0.06em] uppercase transition-colors duration-300 cursor-default hover:text-[var(--chrome-light)] whitespace-nowrap"
                  style={{ color: 'var(--chrome)', opacity: 0.85 }}
                >
                  {brand}
                </span>
                {i < brands.length - 1 && (
                  <span style={{ color: 'rgba(200,216,232,0.2)', fontSize: '10px' }}>◆</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="py-28 lg:py-36 relative" style={{ background: 'var(--bg-deep)', borderTop: '1px solid rgba(200,216,232,0.04)' }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <SectionHeading
            label="What We Do"
            title="Complete Equipment Solutions"
            subtitle="From sourcing quality machines to supplying genuine parts and providing expert support, we cover every aspect of your equipment needs."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: 'rgba(200,216,232,0.04)' }}>
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
                className="p-8 lg:p-10 group transition-all duration-500 cursor-pointer relative"
                style={{ background: 'var(--bg-deep)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--bg-alt)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--bg-deep)';
                }}
              >
                {/* Number */}
                <div
                  className="text-[13px] font-medium tracking-[0.3em] mb-6"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-dim)', opacity: 0.5 }}
                >
                  {service.num}
                </div>

                <div
                  className="w-10 h-10 flex items-center justify-center mb-6 transition-all duration-300"
                  style={{ color: 'var(--text-dim)' }}
                >
                  <service.icon size={22} strokeWidth={1.3} />
                </div>
                <h3
                  className="text-[15px] font-semibold tracking-[0.08em] uppercase mb-3"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--chrome-light)' }}
                >
                  {service.title}
                </h3>
                <p className="text-[15px] leading-relaxed font-light" style={{ color: 'var(--text-muted)' }}>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA BANNER ═══ */}
      <section className="relative py-28 lg:py-32 overflow-hidden" style={{ background: 'var(--bg-deep)' }}>
        {/* Atmospheric gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 60% 70% at 80% 50%, rgba(200,216,232,0.03) 0%, transparent 70%)',
          }}
        />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="luxury-divider mb-16" />
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[1px]" style={{ background: 'rgba(200,216,232,0.3)' }} />
                <span
                  className="text-[12px] font-medium tracking-[0.4em] uppercase"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-dim)' }}
                >
                  Ready to Get Started?
                </span>
              </div>
              <h2
                className="uppercase leading-[0.95] mb-5"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--chrome-light)', fontSize: 'clamp(36px, 5vw, 56px)' }}
              >
                Find Your Next Machine
              </h2>
              <p className="text-[15px] leading-relaxed font-light" style={{ color: 'var(--text-muted)' }}>
                Contact our team to discuss your equipment requirements. We source machines to your exact specifications.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/27827800084"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-[13px] font-semibold tracking-[0.18em] uppercase transition-all duration-300"
                style={{
                  fontFamily: 'var(--font-heading)',
                  background: 'linear-gradient(135deg, #25D366 0%, #1da851 100%)',
                  color: '#fff',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.15), 0 4px 16px rgba(37,211,102,0.25)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.2), 0 12px 32px rgba(37,211,102,0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.15), 0 4px 16px rgba(37,211,102,0.25)';
                }}
              >
                <Phone size={14} strokeWidth={1.5} />
                WhatsApp
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-[13px] font-semibold tracking-[0.18em] uppercase transition-all duration-300"
                style={{
                  fontFamily: 'var(--font-heading)',
                  border: '1px solid rgba(200,216,232,0.15)',
                  color: 'var(--text-muted)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(200,216,232,0.3)';
                  e.currentTarget.style.color = 'var(--chrome-light)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(200,216,232,0.15)';
                  e.currentTarget.style.color = 'var(--text-muted)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Contact Us
                <ArrowUpRight size={13} strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
