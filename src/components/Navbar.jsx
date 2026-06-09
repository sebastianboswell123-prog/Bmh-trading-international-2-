import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MapPin, ArrowUpRight, ChevronRight } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Plant', path: '/plant' },
  { label: 'Parts', path: '/parts' },
  { label: 'About', path: '/about' },
  { label: 'News', path: '/news' },
  { label: 'Contact', path: '/contact' },
];

// Light grey palette
const C = {
  base:        'rgba(90, 90, 95, 0.95)',
  baseScrolled:'rgba(78, 78, 83, 0.98)',
  infoBar:     'rgba(68, 68, 73, 0.98)',
  border:      'rgba(255,255,255,0.14)',
  borderHover: 'rgba(255,255,255,0.24)',
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <div className="sticky top-0 z-50">

        {/* Top info bar */}
        <div
          className="w-full hidden lg:block transition-all duration-500"
          style={{
            background: C.infoBar,
            backdropFilter: 'blur(12px)',
            height: scrolled ? 0 : 34,
            opacity: scrolled ? 0 : 1,
            overflow: 'hidden',
            borderBottom: `1px solid ${C.border}`,
          }}
        >
          <div className="max-w-[1400px] mx-auto px-8 h-[34px] flex items-center justify-between">
            <div className="flex items-center gap-8">
              <span className="flex items-center gap-2 text-[11px] tracking-[0.08em]" style={{ color: 'rgba(255,255,255,0.38)', fontFamily: 'var(--font-body)' }}>
                <MapPin size={10} strokeWidth={1.5} />
                Kempton Park, South Africa
              </span>
              <span className="flex items-center gap-2 text-[11px] tracking-[0.08em]" style={{ color: 'rgba(255,255,255,0.38)', fontFamily: 'var(--font-body)' }}>
                <Phone size={10} strokeWidth={1.5} />
                WhatsApp Available
              </span>
            </div>
            <span className="text-[10px] tracking-[0.3em] uppercase" style={{ color: 'rgba(255,255,255,0.28)', fontFamily: 'var(--font-heading)', fontWeight: 500 }}>
              Quality Equipment Worldwide
            </span>
          </div>
        </div>

        {/* Main navbar */}
        <nav
          className="w-full transition-all duration-500"
          style={{
            background: scrolled ? C.baseScrolled : C.base,
            backdropFilter: 'blur(24px) saturate(1.3)',
            borderBottom: `1px solid ${scrolled ? C.borderHover : C.border}`,
            boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.4)' : '0 2px 16px rgba(0,0,0,0.25)',
          }}
        >
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8 h-[76px] lg:h-[88px] flex items-center justify-between relative">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3.5 shrink-0 group">
              <img
                src="/bmh-logo-hd.png"
                alt="BMH Trading International"
                className="h-14 lg:h-[72px] w-auto transition-all duration-300"
                style={{ filter: 'brightness(1.15) contrast(1.05) drop-shadow(0 2px 10px rgba(80,140,220,0.4))' }}
              />
              <div className="hidden sm:block leading-none">
                <div
                  className="text-[18px] lg:text-[22px] font-bold tracking-[0.10em] uppercase"
                  style={{ fontFamily: 'var(--font-heading)', color: '#ffffff', textShadow: '0 1px 12px rgba(255,255,255,0.2)' }}
                >
                  BMH Trading
                </div>
                <div
                  className="text-[10px] tracking-[0.38em] uppercase font-semibold mt-0.5"
                  style={{ fontFamily: 'var(--font-heading)', color: 'rgba(255,255,255,0.7)' }}
                >
                  International
                </div>
              </div>
            </Link>

            {/* Mobile centre title */}
            <div className="lg:hidden absolute left-1/2 -translate-x-1/2 text-center leading-none pointer-events-none">
              <div
                className="text-[14px] font-bold tracking-[0.12em] uppercase"
                style={{ fontFamily: 'var(--font-heading)', color: '#ffffff', textShadow: '0 1px 10px rgba(255,255,255,0.2)' }}
              >
                BMH Trading
              </div>
              <div
                className="text-[9px] tracking-[0.35em] uppercase font-semibold mt-0.5"
                style={{ fontFamily: 'var(--font-heading)', color: 'rgba(255,255,255,0.65)' }}
              >
                International
              </div>
            </div>

            {/* Desktop nav links */}
            <div className="hidden lg:flex flex-1 items-center justify-center gap-1 mx-6">
              {navLinks.map((link) => {
                const active = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="relative px-4 py-2.5 text-[15px] font-bold tracking-[0.10em] uppercase transition-all duration-200 rounded-sm group"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      color: '#ffffff',
                      textShadow: active ? '0 0 20px rgba(255,255,255,0.3)' : 'none',
                      background: active ? 'rgba(255,255,255,0.07)' : 'transparent',
                    }}
                    onMouseEnter={(e) => {
                      if (!active) {
                        e.currentTarget.style.color = '#ffffff';
                        e.currentTarget.style.background = 'rgba(255,255,255,0.10)';
                        e.currentTarget.style.textShadow = '0 0 16px rgba(255,255,255,0.25)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!active) {
                        e.currentTarget.style.color = '#ffffff';
                        e.currentTarget.style.textShadow = 'none';
                        e.currentTarget.style.background = 'transparent';
                      }
                    }}
                  >
                    {link.label}
                    {active && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-sm -z-10"
                        style={{ background: 'rgba(255,255,255,0.07)' }}
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    {active && (
                      <motion.div
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-3 right-3 h-[1.5px] rounded-full"
                        style={{ background: 'rgba(200,216,232,0.8)' }}
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3 shrink-0">
              <Link
                to="/contact"
                className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-[12px] font-semibold tracking-[0.18em] uppercase transition-all duration-300"
                style={{
                  fontFamily: 'var(--font-heading)',
                  background: 'rgba(200,216,232,0.1)',
                  border: '1px solid rgba(200,216,232,0.25)',
                  color: 'rgba(232,240,248,0.9)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(200,216,232,0.18)';
                  e.currentTarget.style.borderColor = 'rgba(200,216,232,0.45)';
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.15), 0 6px 20px rgba(0,0,0,0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(200,216,232,0.1)';
                  e.currentTarget.style.borderColor = 'rgba(200,216,232,0.25)';
                  e.currentTarget.style.color = 'rgba(232,240,248,0.9)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.08)';
                }}
              >
                Enquire Now
                <ArrowUpRight size={11} strokeWidth={2} />
              </Link>

              <button
                className="lg:hidden p-2 transition-colors duration-200"
                onClick={() => setOpen(!open)}
                style={{ color: 'rgba(255,255,255,0.7)' }}
                aria-label="Toggle menu"
              >
                {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
              </button>
            </div>

          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
            style={{ background: 'rgba(10,10,12,0.8)', backdropFilter: 'blur(16px)' }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
              className="absolute right-0 top-0 bottom-0 w-[320px] max-w-[85vw] flex flex-col pt-24 px-7"
              style={{ background: '#5a5a5f', borderLeft: `1px solid ${C.border}` }}
              onClick={(e) => e.stopPropagation()}
            >
              {navLinks.map((link, i) => {
                const active = location.pathname === link.path;
                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, ease: [0.23, 1, 0.32, 1] }}
                  >
                    <Link
                      to={link.path}
                      className="flex items-center justify-between py-4 text-[13px] font-medium tracking-[0.1em] uppercase transition-colors duration-200"
                      style={{
                        fontFamily: 'var(--font-heading)',
                        color: active ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.45)',
                        borderBottom: `1px solid ${C.border}`,
                      }}
                    >
                      {link.label}
                      <ChevronRight size={13} strokeWidth={1.5} style={{ opacity: active ? 0.7 : 0.3 }} />
                    </Link>
                  </motion.div>
                );
              })}

              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.36 }}
                href="https://wa.me/27827800084"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex items-center justify-center gap-2 py-3.5 text-sm font-semibold tracking-[0.15em] uppercase"
                style={{
                  fontFamily: 'var(--font-heading)',
                  background: 'linear-gradient(135deg, #25D366 0%, #1da851 100%)',
                  color: '#fff',
                  boxShadow: '0 4px 20px rgba(37,211,102,0.35)',
                }}
              >
                <Phone size={14} strokeWidth={2} />
                WhatsApp Us
              </motion.a>

              <div className="mt-auto pb-8">
                <div className="h-px mb-6" style={{ background: `linear-gradient(90deg, transparent, ${C.borderHover}, transparent)` }} />
                <img src="/bmh-logo-hd.png" alt="BMH" className="h-10 w-auto mb-3" style={{ opacity: 0.7 }} />
                <p className="text-[11px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.28)', fontFamily: 'var(--font-body)' }}>
                  142 2nd Avenue, Bredell AH<br />
                  Kempton Park, South Africa
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
