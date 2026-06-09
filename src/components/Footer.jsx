import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-alt)' }}>
      {/* Luxury divider */}
      <div className="luxury-divider" />

      {/* Main footer */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand col */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img
                src="/bmh-logo-hd.png"
                alt="BMH Trading International"
                className="h-16 w-auto opacity-90"
              />
            </div>
            <p className="text-[13px] leading-relaxed mb-6 font-light" style={{ color: 'var(--text-muted)' }}>
              Suppliers of quality used construction and mining equipment worldwide.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4
              className="text-[10px] font-medium tracking-[0.35em] uppercase mb-6"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-dim)' }}
            >
              Equipment
            </h4>
            <ul className="space-y-3">
              {['Plant', 'Parts'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-[13px] font-light flex items-center gap-1.5 transition-colors duration-300"
                    style={{ color: 'var(--text-muted)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--chrome-light)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                  >
                    {item}
                    <ArrowUpRight size={10} strokeWidth={1.5} style={{ opacity: 0.4 }} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4
              className="text-[10px] font-medium tracking-[0.35em] uppercase mb-6"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-dim)' }}
            >
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'About', path: '/about' },
                { label: 'News', path: '/news' },
                { label: 'Contact', path: '/contact' },
              ].map(({ label, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-[13px] font-light flex items-center gap-1.5 transition-colors duration-300"
                    style={{ color: 'var(--text-muted)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--chrome-light)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                  >
                    {label}
                    <ArrowUpRight size={10} strokeWidth={1.5} style={{ opacity: 0.4 }} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-[10px] font-medium tracking-[0.35em] uppercase mb-6"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-dim)' }}
            >
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={14} strokeWidth={1.5} className="mt-0.5 shrink-0" style={{ color: 'var(--text-dim)' }} />
                <span className="text-[13px] leading-relaxed font-light" style={{ color: 'var(--text-muted)' }}>
                  142 2nd Avenue, Bredell AH,<br />
                  Kempton Park, South Africa, 1619
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} strokeWidth={1.5} className="shrink-0" style={{ color: 'var(--text-dim)' }} />
                <a href="https://wa.me/27827800084" target="_blank" rel="noopener noreferrer" className="text-[13px] font-light" style={{ color: 'var(--text-muted)' }}>
                  WhatsApp Us
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} strokeWidth={1.5} className="shrink-0" style={{ color: 'var(--text-dim)' }} />
                <a href="mailto:bradleyh@bmhtradinginternational.com" className="text-[13px] font-light break-all" style={{ color: 'var(--text-muted)' }}>
                  bradleyh@bmhtradinginternational.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="luxury-divider" />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-[11px] font-light" style={{ color: 'var(--text-dim)' }}>
          &copy; {new Date().getFullYear()} BMH Trading International. All rights reserved.
        </p>
        <div className="flex gap-8">
          <span className="text-[11px] font-light cursor-pointer transition-colors duration-300 hover:text-[var(--text-muted)]" style={{ color: 'var(--text-dim)' }}>Privacy Policy</span>
          <span className="text-[11px] font-light cursor-pointer transition-colors duration-300 hover:text-[var(--text-muted)]" style={{ color: 'var(--text-dim)' }}>Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}
