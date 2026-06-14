import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const contactDetails = [
  {
    icon: Phone,
    title: 'WhatsApp',
    lines: ['Available Mon – Sat', 'Quick response guaranteed'],
    action: { label: 'WhatsApp Us', href: 'https://wa.me/27827800084' },
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['bradleyh@bmhtradinginternational.com'],
    action: { label: 'Send Email', href: 'mailto:bradleyh@bmhtradinginternational.com' },
  },
  {
    icon: MapPin,
    title: 'Location',
    lines: ['142 2nd Avenue, Bredell AH', 'Kempton Park, South Africa, 1619'],
    action: { label: 'Get Directions', href: 'https://maps.google.com/?q=142+2nd+Avenue+Bredell+AH+Kempton+Park+South+Africa' },
  },
  {
    icon: Clock,
    title: 'Business Hours',
    lines: ['Mon – Fri: 07:30 – 17:00', 'Sat: 08:00 – 13:00'],
    action: null,
  },
];

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact BMH Trading International | Kempton Park, South Africa</title>
        <meta name="description" content="Get in touch with BMH Trading International. 142 2nd Avenue, Bredell AH, Kempton Park, Gauteng. WhatsApp available Mon–Sat. Equipment enquiries answered within 24 hours." />
        <meta property="og:title" content="Contact BMH Trading International | Kempton Park, South Africa" />
        <meta property="og:description" content="Reach our team in Kempton Park, Gauteng. WhatsApp available. Equipment enquiries answered within 24 hours." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bmhplant.com/contact" />
        <meta property="og:image" content="https://www.bmhplant.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Contact BMH Trading International — Kempton Park, South Africa" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact BMH Trading International | Kempton Park, South Africa" />
        <meta name="twitter:description" content="Reach our team in Kempton Park, Gauteng. WhatsApp available. Equipment enquiries answered within 24 hours." />
        <meta name="twitter:image" content="https://www.bmhplant.com/og-image.jpg" />
        <link rel="canonical" href="https://www.bmhplant.com/contact" />
      </Helmet>
      <section
        className="relative py-28 lg:py-36"
        style={{ background: `radial-gradient(ellipse 50% 50% at 30% 50%, rgba(200,216,232,0.03) 0%, transparent 60%), var(--bg-alt)`, borderBottom: '1px solid rgba(200,216,232,0.04)' }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <SectionHeading label="Get In Touch" title="Contact Us" subtitle="Have a question about our equipment or need a specific machine? Reach out to our team and we'll respond within 24 hours." />
        </div>
      </section>

      <section className="py-16 lg:py-24" style={{ background: 'var(--bg-deep)' }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-4">
              {contactDetails.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.23, 1, 0.32, 1] }}
                  className="p-5 transition-all duration-400"
                  style={{ background: 'var(--bg-surface)', border: '1px solid rgba(200,216,232,0.06)' }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(200,216,232,0.12)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(200,216,232,0.06)'}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 flex items-center justify-center shrink-0" style={{ color: 'var(--text-dim)' }}>
                      <item.icon size={17} strokeWidth={1.3} />
                    </div>
                    <div>
                      <h4 className="text-[15px] font-semibold tracking-[0.06em] uppercase mb-1" style={{ fontFamily: 'var(--font-heading)', color: 'var(--chrome-light)' }}>
                        {item.title}
                      </h4>
                      {item.lines.map((line, j) => (
                        <p key={j} className="text-[15px] font-light" style={{ color: 'var(--text-muted)' }}>{line}</p>
                      ))}
                      {item.action && (
                        <a
                          href={item.action.href}
                          target={item.action.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="inline-flex items-center gap-1.5 mt-2 text-[12px] font-medium tracking-[0.2em] uppercase transition-colors duration-300 hover:text-[var(--chrome-light)]"
                          style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-dim)' }}
                        >
                          {item.action.label}
                          <ArrowUpRight size={10} strokeWidth={1.5} />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="lg:col-span-3 p-8 lg:p-12 flex flex-col items-start justify-center"
              style={{ background: 'var(--bg-surface)', border: '1px solid rgba(200,216,232,0.06)' }}
            >
              <h3 className="uppercase leading-[0.95] mb-5" style={{ fontFamily: 'var(--font-display)', color: 'var(--chrome-light)', fontSize: '32px' }}>
                Talk to Our Team
              </h3>
              <p className="text-[15px] font-light mb-8 max-w-xl" style={{ color: 'var(--text-muted)' }}>
                Message us directly on WhatsApp for the fastest response. Our team is available Monday to Saturday to answer any equipment, parts, or rental enquiries.
              </p>
              <a
                href="https://wa.me/27827800084"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 text-[13px] font-semibold tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer"
                style={{
                  fontFamily: 'var(--font-heading)',
                  background: 'rgba(37,211,102,0.12)',
                  color: '#6ee7a0',
                  border: '1px solid rgba(37,211,102,0.3)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(37,211,102,0.2)';
                  e.currentTarget.style.borderColor = 'rgba(37,211,102,0.5)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(37,211,102,0.12)';
                  e.currentTarget.style.borderColor = 'rgba(37,211,102,0.3)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Phone size={13} strokeWidth={1.5} />
                Contact Us
                <ArrowUpRight size={13} strokeWidth={1.5} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
