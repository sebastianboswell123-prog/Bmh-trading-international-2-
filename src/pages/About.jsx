import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, Users, Shield, Award, MapPin, Phone, ArrowUpRight, CheckCircle } from 'lucide-react';

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '30+', label: 'Countries Served' },
  { value: '500+', label: 'Machines Supplied' },
  { value: '23', label: 'Machines In Stock' },
];

const values = [
  {
    icon: Shield,
    title: 'Quality Assured',
    desc: 'Every machine is thoroughly inspected and graded before sale. Full inspection reports available on request.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    desc: 'Operating from South Africa, we supply equipment to clients across Africa, the Middle East, and beyond.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    desc: 'Our team brings decades of combined knowledge in heavy equipment sales, inspection, and logistics.',
  },
  {
    icon: Award,
    title: 'Trusted Reputation',
    desc: 'Built on honest dealings and reliable machinery. Our long-standing client relationships speak for themselves.',
  },
];

const capabilities = [
  'Excavators, FELs, Dozers & Dumpers',
  'TLBs, Forklifts & Skid Steers',
  'Mobile Cranes & Telescopic Handlers',
  'Genuine & Aftermarket Parts Supply',
  'Pre-sale Machine Inspection & Grading',
  'International Freight & Logistics',
  'Export Documentation & Compliance',
  'After-Sales Technical Support',
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, delay, ease: [0.23, 1, 0.32, 1] },
});

export default function About() {
  return (
    <>
      <Helmet>
        <title>About BMH Trading International | Used Equipment Dealer Kempton Park, South Africa</title>
        <meta name="description" content="15+ years supplying quality used construction and mining equipment from Kempton Park, Gauteng. Shipping to 30+ countries worldwide." />
        <link rel="canonical" href="https://www.bmhplant.com/about" />
      </Helmet>

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1503708928676-1cb796a0891e?auto=format&fit=crop&w=1800&q=85"
            alt="Heavy equipment construction site"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, rgba(15,42,74,0.55) 0%, rgba(15,42,74,0.3) 40%, rgba(15,42,74,0.85) 80%, rgba(15,42,74,1) 100%)',
            }}
          />
        </div>

        {/* Content */}
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8 pb-20 lg:pb-28 pt-40 w-full">
          <motion.div {...fadeUp(0)}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px" style={{ background: 'rgba(200,216,232,0.5)' }} />
              <span
                className="text-[12px] font-medium tracking-[0.4em] uppercase"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-dim)' }}
              >
                About Us
              </span>
            </div>
            <h1
              className="uppercase leading-[0.92] mb-6"
              style={{
                fontFamily: 'var(--font-display)',
                color: 'var(--chrome-light)',
                fontSize: 'clamp(38px, 6vw, 72px)',
                letterSpacing: '-0.01em',
              }}
            >
              Built on Trust.<br />Driven by Quality.
            </h1>
            <p
              className="max-w-xl text-[15px] leading-relaxed font-light"
              style={{ color: 'rgba(200,216,232,0.65)' }}
            >
              South Africa's trusted supplier of quality used construction and mining equipment.
              Based in Kempton Park, Gauteng — delivering machinery worldwide since 2009.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg-alt)', borderBottom: '1px solid rgba(200,216,232,0.06)' }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0" style={{ '--tw-divide-opacity': 1, borderColor: 'rgba(200,216,232,0.06)' }}>
            {stats.map((s, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.08)}
                className="py-10 px-8 text-center"
              >
                <div
                  className="stat-number mb-1"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--chrome-light)', fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1 }}
                >
                  {s.value}
                </div>
                <div
                  className="text-[12px] tracking-[0.3em] uppercase font-medium"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-dim)' }}
                >
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR STORY ────────────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-36 overflow-hidden" style={{ background: 'var(--bg-deep)' }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Text */}
            <motion.div {...fadeUp(0)}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-px" style={{ background: 'rgba(200,216,232,0.4)' }} />
                <span className="text-[12px] font-medium tracking-[0.4em] uppercase" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-dim)' }}>
                  Our Story
                </span>
              </div>
              <h2
                className="uppercase leading-[0.95] mb-8"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--chrome-light)', fontSize: 'clamp(26px, 3.5vw, 42px)' }}
              >
                A Decade and a Half<br />of Heavy Equipment
              </h2>
              <div className="space-y-5 text-[14px] leading-[1.85] font-light" style={{ color: 'var(--text-muted)' }}>
                <p>
                  BMH Trading International was founded with a single goal: to make quality used heavy equipment accessible and trustworthy. From our base in Kempton Park, Gauteng, we have grown into one of South Africa's most respected suppliers in the construction and mining equipment sector.
                </p>
                <p>
                  We specialise in sourcing, inspecting, and supplying excavators, front end loaders, dozers, dumpers, TLBs, forklifts, skid steers, mobile cranes, and telescopic handlers from the world's leading manufacturers — including Caterpillar, Komatsu, Volvo, Hitachi, and more.
                </p>
                <p>
                  Beyond equipment sales, we operate a comprehensive parts supply service, stocking genuine and aftermarket components to keep your fleet moving. Every sale is backed by our commitment to honesty and long-term support.
                </p>
              </div>

              <div className="mt-10 flex items-center gap-3">
                <MapPin size={14} strokeWidth={1.5} style={{ color: 'var(--text-dim)' }} />
                <span className="text-[15px] font-light" style={{ color: 'var(--text-muted)' }}>
                  142 2nd Avenue, Bredell AH, Kempton Park, South Africa, 1619
                </span>
              </div>
            </motion.div>

            {/* Image + capabilities */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.75, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
              className="space-y-6"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden" style={{ border: '1px solid rgba(200,216,232,0.07)' }}>
                <img
                  src="https://images.unsplash.com/photo-1568678453977-a90de6812e7a?auto=format&fit=crop&w=900&q=80"
                  alt="Volvo excavator at work — BMH Trading International South Africa"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(15,42,74,0.6) 100%)' }}
                />
              </div>

              {/* Capabilities checklist */}
              <div
                className="p-6"
                style={{ background: 'var(--bg-surface)', border: '1px solid rgba(200,216,232,0.07)' }}
              >
                <p className="text-[12px] font-medium tracking-[0.35em] uppercase mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-dim)' }}>
                  What We Supply
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                  {capabilities.map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <CheckCircle size={12} strokeWidth={1.5} style={{ color: '#25D366', flexShrink: 0 }} />
                      <span className="text-[14px] font-light" style={{ color: 'var(--text-muted)' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── VALUES ───────────────────────────────────────────────────────────── */}
      <section
        className="py-20 lg:py-28"
        style={{ background: 'var(--bg-alt)', borderTop: '1px solid rgba(200,216,232,0.05)' }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">

          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px" style={{ background: 'rgba(200,216,232,0.3)' }} />
              <span className="text-[12px] font-medium tracking-[0.4em] uppercase" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-dim)' }}>
                Our Values
              </span>
              <div className="w-8 h-px" style={{ background: 'rgba(200,216,232,0.3)' }} />
            </div>
            <h2
              className="uppercase"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--chrome-light)', fontSize: 'clamp(24px, 3vw, 38px)' }}
            >
              Why Choose BMH
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: 'rgba(200,216,232,0.05)' }}>
            {values.map((v, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                className="group p-8 lg:p-10 text-center transition-all duration-500 cursor-default"
                style={{ background: 'var(--bg-alt)' }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'var(--bg-surface)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'var(--bg-alt)'}
              >
                <div
                  className="w-12 h-12 mx-auto flex items-center justify-center mb-5 transition-all duration-300"
                  style={{ border: '1px solid rgba(200,216,232,0.1)', color: 'var(--text-dim)' }}
                >
                  <v.icon size={20} strokeWidth={1.3} />
                </div>
                <h4
                  className="text-[15px] font-semibold tracking-[0.1em] uppercase mb-3"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--chrome-light)' }}
                >
                  {v.title}
                </h4>
                <p className="text-[15px] leading-relaxed font-light" style={{ color: 'var(--text-muted)' }}>
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section
        className="py-20 lg:py-24 relative overflow-hidden"
        style={{ background: 'var(--bg-deep)', borderTop: '1px solid rgba(200,216,232,0.05)' }}
      >
        {/* Subtle glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(200,216,232,0.025) 0%, transparent 70%)' }}
        />
        <motion.div {...fadeUp(0)} className="relative max-w-[1400px] mx-auto px-6 lg:px-8 text-center">
          <p
            className="text-[12px] font-medium tracking-[0.4em] uppercase mb-4"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-dim)' }}
          >
            Get In Touch
          </p>
          <h2
            className="uppercase mb-6"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--chrome-light)', fontSize: 'clamp(24px, 3.5vw, 42px)' }}
          >
            Ready to Find Your Machine?
          </h2>
          <p className="text-[14px] font-light mb-10 max-w-lg mx-auto leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            Browse our current stock or contact us directly — we'll help you find the right equipment for your project.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/plant"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-[13px] font-semibold tracking-[0.2em] uppercase transition-all duration-300"
              style={{
                fontFamily: 'var(--font-heading)',
                background: 'var(--chrome-light)',
                color: 'var(--bg-deep)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(200,216,232,0.15)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              View Stock
              <ArrowUpRight size={13} strokeWidth={2} />
            </Link>
            <a
              href="https://wa.me/27827800084"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-[13px] font-semibold tracking-[0.2em] uppercase transition-all duration-300"
              style={{
                fontFamily: 'var(--font-heading)',
                background: 'linear-gradient(135deg, #25D366 0%, #1da851 100%)',
                color: '#fff',
                boxShadow: '0 4px 20px rgba(37,211,102,0.25)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(37,211,102,0.35)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,211,102,0.25)'; }}
            >
              <Phone size={13} strokeWidth={2} />
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
