import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Wrench, Send, CheckCircle } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const WHATSAPP_NUMBER = '27827800084';

const brands = [
  'Caterpillar', 'Komatsu', 'Volvo', 'Hitachi', 'Liebherr',
  'John Deere', 'Grove', 'Tadano', 'Toyota', 'Bobcat', 'JLG', 'Other',
];

const supportedBrands = [
  { name: 'Caterpillar', parts: 'Engines, hydraulics, undercarriage, GET, filters' },
  { name: 'Komatsu', parts: 'Track components, hydraulic pumps, seals, buckets' },
  { name: 'Liebherr', parts: 'Travel motors, swing bearings, cylinders, filters' },
  { name: 'John Deere', parts: 'Transmissions, final drives, loader pins, filters' },
  { name: 'Volvo', parts: 'Boom & arm pins, filters, AC components, tyres' },
  { name: 'Hitachi', parts: 'Pumps, motors, undercarriage, attachments' },
];

export default function Parts() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', brand: '', model: '', part_number: '', message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | success

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.brand || !form.part_number) return;
    const text = [
      'Parts enquiry from the BMH website:',
      `Name: ${form.name}`,
      form.email ? `Email: ${form.email}` : null,
      form.phone ? `Phone: ${form.phone}` : null,
      `Brand: ${form.brand}`,
      form.model ? `Model: ${form.model}` : null,
      `Part needed: ${form.part_number}`,
      form.message ? `Notes: ${form.message}` : null,
    ].filter(Boolean).join('\n');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
    setStatus('success');
    setForm({ name: '', email: '', phone: '', brand: '', model: '', part_number: '', message: '' });
  };

  const inputStyle = {
    background: 'rgba(200,216,232,0.03)',
    border: '1px solid rgba(200,216,232,0.08)',
    color: 'var(--text-primary)',
    fontFamily: 'var(--font-body)',
    fontSize: '14px',
    fontWeight: 300,
    padding: '13px 16px',
    width: '100%',
    outline: 'none',
    transition: 'border-color 0.3s, background 0.3s',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    appearance: 'none',
  };

  const selectStyle = {
    ...inputStyle,
    cursor: 'pointer',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%234A5F6E' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 14px center',
    paddingRight: '36px',
  };

  const focusIn = (e) => {
    e.currentTarget.style.borderColor = 'rgba(200,216,232,0.2)';
    e.currentTarget.style.background = 'rgba(200,216,232,0.05)';
  };
  const focusOut = (e) => {
    e.currentTarget.style.borderColor = 'rgba(200,216,232,0.08)';
    e.currentTarget.style.background = 'rgba(200,216,232,0.03)';
  };

  return (
    <>
      <Helmet>
        <title>Genuine & Aftermarket Parts for Caterpillar, Komatsu, Volvo, Hitachi | BMH Trading South Africa</title>
        <meta name="description" content="OEM and aftermarket spare parts for Caterpillar, Komatsu, Volvo, Hitachi, Liebherr & more. Fast delivery across South Africa and Africa. Contact BMH Trading International, Kempton Park." />
        <meta property="og:title" content="Heavy Equipment Parts South Africa | BMH Trading International" />
        <meta property="og:description" content="Genuine & aftermarket parts for leading brands. Fast delivery across South Africa. Enquire now." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bmhplant.com/parts" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1606811883055-0d24f05c8bcd?w=1200&h=630&fit=crop&q=80" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Heavy equipment spare parts — BMH Trading International South Africa" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Genuine & Aftermarket Parts South Africa | BMH Trading International" />
        <meta name="twitter:description" content="OEM and aftermarket spare parts for Caterpillar, Komatsu, Volvo, Hitachi & more. Fast delivery across Africa." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1606811883055-0d24f05c8bcd?w=1200&h=630&fit=crop&q=80" />
        <link rel="canonical" href="https://www.bmhplant.com/parts" />
      </Helmet>

      {/* Hero */}
      <section
        className="relative py-28 lg:py-36"
        style={{
          background: `radial-gradient(ellipse 50% 50% at 30% 40%, rgba(200,216,232,0.03) 0%, transparent 60%), var(--bg-alt)`,
          borderBottom: '1px solid rgba(200,216,232,0.04)',
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Parts & Components"
            title="Genuine & Aftermarket Parts"
            subtitle="We source genuine and aftermarket parts for all major equipment brands. Submit your enquiry below and we'll respond within 24 hours."
          />
        </div>
      </section>

      {/* Brands grid */}
      <section className="py-14 lg:py-20" style={{ background: 'var(--bg-alt)', borderBottom: '1px solid rgba(200,216,232,0.04)' }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <p className="text-[12px] font-medium tracking-[0.3em] uppercase mb-8" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-dim)' }}>
            Brands We Support
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {supportedBrands.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.23, 1, 0.32, 1] }}
                className="p-5 transition-all duration-300"
                style={{ background: 'var(--bg-surface)', border: '1px solid rgba(200,216,232,0.06)' }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(200,216,232,0.12)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(200,216,232,0.06)'}
              >
                <div className="flex items-start gap-3">
                  <CheckCircle size={14} strokeWidth={1.5} style={{ color: 'var(--text-dim)', marginTop: 2, flexShrink: 0 }} />
                  <div>
                    <h4 className="text-[14px] font-semibold tracking-[0.08em] uppercase mb-1" style={{ fontFamily: 'var(--font-heading)', color: 'var(--chrome-light)' }}>
                      {b.name}
                    </h4>
                    <p className="text-[14px] font-light leading-relaxed" style={{ color: 'var(--text-muted)' }}>{b.parts}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Parts enquiry form */}
      <section className="py-16 lg:py-24" style={{ background: 'var(--bg-deep)' }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Left: info */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              >
                <div className="w-10 h-10 flex items-center justify-center mb-6" style={{ color: 'var(--text-dim)' }}>
                  <Wrench size={22} strokeWidth={1.2} />
                </div>
                <h3 className="uppercase leading-[0.95] mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--chrome-light)', fontSize: '28px' }}>
                  Parts On Request
                </h3>
                <p className="text-[14px] leading-relaxed font-light mb-6" style={{ color: 'var(--text-muted)' }}>
                  Can't find your part? Send us the machine brand, model and part number (or description) and our team will source it for you — often with same-week availability.
                </p>
                <ul className="space-y-3">
                  {[
                    'OEM & aftermarket options available',
                    'Bulk orders welcome',
                    'Pan-African delivery arranged',
                    'Quotes within 24 hours',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-[15px] font-light" style={{ color: 'var(--text-muted)' }}>
                      <CheckCircle size={13} strokeWidth={1.5} style={{ color: 'var(--text-dim)', flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6" style={{ borderTop: '1px solid rgba(200,216,232,0.06)' }}>
                  <p className="text-[13px] font-medium tracking-[0.15em] uppercase mb-3" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-dim)' }}>
                    Prefer WhatsApp?
                  </p>
                  <a
                    href="https://wa.me/27827800084?text=Hi%2C%20I%20need%20a%20part%20for%20my%20machine.%20Can%20you%20help%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 text-[12px] font-semibold tracking-[0.18em] uppercase transition-all duration-300"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      background: 'linear-gradient(135deg, #25D366 0%, #1da851 100%)',
                      color: '#fff',
                      boxShadow: '0 4px 16px rgba(37,211,102,0.2)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 12px 28px rgba(37,211,102,0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 16px rgba(37,211,102,0.2)';
                    }}
                  >
                    <Phone size={13} strokeWidth={1.5} />
                    WhatsApp Parts Enquiry
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right: form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
              className="lg:col-span-3 p-6 lg:p-10"
              style={{ background: 'var(--bg-surface)', border: '1px solid rgba(200,216,232,0.06)' }}
            >
              <h3 className="uppercase leading-[0.95] mb-8" style={{ fontFamily: 'var(--font-display)', color: 'var(--chrome-light)', fontSize: '28px' }}>
                Submit a Parts Enquiry
              </h3>

              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center"
                >
                  <CheckCircle size={36} strokeWidth={1} className="mx-auto mb-4" style={{ color: '#6ee7a0' }} />
                  <p className="text-[15px] font-light mb-1" style={{ color: 'var(--chrome-light)' }}>Opening WhatsApp…</p>
                  <p className="text-[15px] font-light" style={{ color: 'var(--text-muted)' }}>Your enquiry is pre-filled — just press send. If WhatsApp didn't open, message us on +27&nbsp;82&nbsp;780&nbsp;0084.</p>
                  <button
                    className="mt-6 text-[12px] tracking-[0.2em] uppercase font-medium transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-dim)' }}
                    onClick={() => setStatus('idle')}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--chrome-light)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-dim)'}
                  >
                    Submit Another Enquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Contact details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text" name="name" placeholder="Full Name *"
                      value={form.name} onChange={handleChange} required
                      style={inputStyle} onFocus={focusIn} onBlur={focusOut}
                    />
                    <input
                      type="email" name="email" placeholder="Email Address"
                      value={form.email} onChange={handleChange}
                      style={inputStyle} onFocus={focusIn} onBlur={focusOut}
                    />
                  </div>
                  <input
                    type="tel" name="phone" placeholder="Phone / WhatsApp Number"
                    value={form.phone} onChange={handleChange}
                    style={inputStyle} onFocus={focusIn} onBlur={focusOut}
                  />

                  {/* Divider */}
                  <div className="pt-2 pb-1">
                    <p className="text-[12px] font-medium tracking-[0.25em] uppercase" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-dim)' }}>
                      Machine & Part Details
                    </p>
                  </div>

                  {/* Machine details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <select
                      name="brand" value={form.brand} onChange={handleChange} required
                      style={{ ...selectStyle, color: form.brand ? 'var(--text-primary)' : 'var(--text-dim)' }}
                      onFocus={focusIn} onBlur={focusOut}
                    >
                      <option value="" style={{ background: '#15355A', color: 'var(--text-dim)' }}>Machine Brand *</option>
                      {brands.map((b) => (
                        <option key={b} value={b} style={{ background: '#15355A', color: 'var(--text-primary)' }}>{b}</option>
                      ))}
                    </select>
                    <input
                      type="text" name="model" placeholder="Machine Model (e.g. 336 GC)"
                      value={form.model} onChange={handleChange}
                      style={inputStyle} onFocus={focusIn} onBlur={focusOut}
                    />
                  </div>
                  <input
                    type="text" name="part_number" placeholder="Part Number or Description *"
                    value={form.part_number} onChange={handleChange} required
                    style={inputStyle} onFocus={focusIn} onBlur={focusOut}
                  />
                  <textarea
                    name="message" placeholder="Additional notes (quantity needed, urgency, etc.)"
                    rows={4} value={form.message} onChange={handleChange}
                    style={{ ...inputStyle, resize: 'vertical' }}
                    onFocus={focusIn} onBlur={focusOut}
                  />

                  <div className="flex items-center gap-4 flex-wrap">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2.5 px-7 py-3.5 text-[13px] font-semibold tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer"
                      style={{
                        fontFamily: 'var(--font-heading)',
                        background: 'linear-gradient(135deg, #25D366 0%, #1da851 100%)',
                        color: '#fff',
                        boxShadow: '0 4px 16px rgba(37,211,102,0.2)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 12px 28px rgba(37,211,102,0.3)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 16px rgba(37,211,102,0.2)';
                      }}
                    >
                      <Send size={13} strokeWidth={1.5} />
                      Send via WhatsApp
                    </button>
                  </div>
                </form>
              )}
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
