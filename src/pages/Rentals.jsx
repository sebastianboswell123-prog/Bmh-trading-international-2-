import { Helmet } from 'react-helmet-async';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Phone, CheckCircle, Send, CalendarDays } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { EMAILJS_CONFIG } from '../utils/emailService';

const rentalCategories = [
  {
    title: 'Excavators',
    range: '13 – 50 Ton',
    brands: 'Caterpillar, Komatsu',
    features: ['GPS tracking included', 'Operator available on request', 'Full maintenance support'],
    image: 'https://images.unsplash.com/photo-1503708928676-1cb796a0891e?w=600&h=400&fit=crop',
  },
  {
    title: 'Wheel Loaders',
    range: '3 – 6 Cubic Metre',
    brands: 'Komatsu',
    features: ['Front & rear camera systems', 'Ride control', 'Quick coupler ready'],
    image: 'https://images.unsplash.com/photo-1575642975010-983c53b3eeb9?w=600&h=400&fit=crop',
  },
  {
    title: 'Dozers',
    range: 'D6 – D9 Class',
    brands: 'Komatsu',
    features: ['Ripper attachments available', 'Wet & dry hire options', 'Transport arranged'],
    image: 'https://images.unsplash.com/photo-1690719465490-db2864ef85c1?w=600&h=400&fit=crop',
  },
];

const equipmentOptions = [
  'Excavator (13–20 Ton)', 'Excavator (20–35 Ton)', 'Excavator (35–50 Ton)',
  'Wheel Loader (3 m³)', 'Wheel Loader (4–6 m³)',
  'Dozer (D6 Class)', 'Dozer (D8/D9 Class)',
  'Not sure — advise me',
];

const durationOptions = [
  'Daily', 'Weekly', '1–3 Months', '3–6 Months', '6–12 Months', '12+ Months',
];

export default function Rentals() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '', email: '', phone: '', equipment: '', duration: '',
    start_date: '', location: '', message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.equipment) return;
    setStatus('sending');
    try {
      await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_RENTAL,
        formRef.current,
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      setStatus('success');
      setForm({ name: '', email: '', phone: '', equipment: '', duration: '', start_date: '', location: '', message: '' });
    } catch {
      setStatus('error');
    }
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
        <title>Construction Equipment Rental South Africa | Plant Hire Gauteng | BMH Trading</title>
        <meta name="description" content="Flexible plant hire & equipment rental across South Africa. Excavators, wheel loaders & bulldozers for short or long-term hire. Kempton Park, Gauteng. Get a quote via WhatsApp." />
        <meta property="og:title" content="Construction Equipment Rental South Africa | BMH Trading International" />
        <meta property="og:description" content="Excavators, wheel loaders & dozers for hire in South Africa. Short & long-term rental options available." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bmhtradinginternational.com/rentals" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1628645419184-26a1f2757340?w=1200&h=630&fit=crop&q=80" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Construction equipment for hire South Africa — BMH Trading International" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Construction Equipment Rental South Africa | BMH Trading International" />
        <meta name="twitter:description" content="Excavators, wheel loaders & dozers for hire in South Africa. Short & long-term rental options available." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1628645419184-26a1f2757340?w=1200&h=630&fit=crop&q=80" />
        <link rel="canonical" href="https://www.bmhtradinginternational.com/rentals" />
      </Helmet>

      {/* Hero */}
      <section
        className="relative py-28 lg:py-36"
        style={{
          background: `radial-gradient(ellipse 60% 50% at 60% 40%, rgba(200,216,232,0.03) 0%, transparent 60%), var(--bg-alt)`,
          borderBottom: '1px solid rgba(200,216,232,0.04)',
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Equipment Hire"
            title="Rental Solutions"
            subtitle="Flexible short and long-term rental options for construction and mining projects across South Africa."
          />
        </div>
      </section>

      {/* Category cards */}
      <section className="py-16 lg:py-24" style={{ background: 'var(--bg-deep)' }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {rentalCategories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
                className="group overflow-hidden premium-card"
                style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)' }}
              >
                <div className="relative overflow-hidden" style={{ aspectRatio: '16/10' }}>
                  <img src={cat.image} alt={`${cat.title} for hire in South Africa`} className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.06]" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(8,14,26,0.1) 0%, transparent 30%, transparent 40%, rgba(8,14,26,0.85) 100%)' }} />
                  <div className="absolute bottom-4 left-5">
                    <span className="text-[9px] font-medium tracking-[0.3em] uppercase px-3 py-1 backdrop-blur-sm"
                      style={{ fontFamily: 'var(--font-heading)', background: 'rgba(8,14,26,0.6)', color: 'var(--chrome)', border: '1px solid rgba(200,216,232,0.1)' }}>
                      For Hire
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="uppercase leading-[0.95] mb-1" style={{ fontFamily: 'var(--font-display)', color: 'var(--chrome-light)', fontSize: '24px' }}>
                    {cat.title}
                  </h3>
                  <p className="text-[12px] tracking-[0.25em] uppercase mb-1 font-medium" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-dim)' }}>
                    {cat.range}
                  </p>
                  <p className="text-[13px] mb-5 font-light" style={{ color: 'var(--text-dim)' }}>
                    Brands: {cat.brands}
                  </p>
                  <ul className="space-y-2.5 mb-6">
                    {cat.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2.5 text-[15px] font-light" style={{ color: 'var(--text-muted)' }}>
                        <CheckCircle size={13} strokeWidth={1.5} style={{ color: 'var(--whatsapp)', flexShrink: 0 }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#rental-quote"
                    className="w-full flex items-center justify-center gap-2 py-3 text-[12px] font-semibold tracking-[0.2em] uppercase transition-all duration-300"
                    style={{ fontFamily: 'var(--font-heading)', border: '1px solid rgba(200,216,232,0.15)', color: 'var(--text-muted)' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(200,216,232,0.06)';
                      e.currentTarget.style.borderColor = 'rgba(200,216,232,0.25)';
                      e.currentTarget.style.color = 'var(--chrome-light)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.borderColor = 'rgba(200,216,232,0.15)';
                      e.currentTarget.style.color = 'var(--text-muted)';
                    }}
                  >
                    <Send size={13} strokeWidth={1.5} />
                    Request Quote
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rental quote form */}
      <section id="rental-quote" className="py-16 lg:py-24" style={{ background: 'var(--bg-alt)', borderTop: '1px solid rgba(200,216,232,0.04)' }}>
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
                <div className="flex gap-4 mb-6">
                  <div style={{ color: 'var(--text-dim)' }}><CalendarDays size={22} strokeWidth={1.2} /></div>
                </div>
                <h3 className="uppercase leading-[0.95] mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--chrome-light)', fontSize: '28px' }}>
                  Request a Rental Quote
                </h3>
                <p className="text-[14px] leading-relaxed font-light mb-6" style={{ color: 'var(--text-muted)' }}>
                  Fill in your project requirements and we'll respond with availability and pricing within 24 hours. Wet and dry hire options available for all equipment.
                </p>
                <ul className="space-y-3">
                  {[
                    'Short & long-term hire available',
                    'Operator & transport on request',
                    'GPS tracking on all units',
                    'Nationwide delivery',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-[15px] font-light" style={{ color: 'var(--text-muted)' }}>
                      <CheckCircle size={13} strokeWidth={1.5} style={{ color: 'var(--text-dim)', flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6" style={{ borderTop: '1px solid rgba(200,216,232,0.06)' }}>
                  <p className="text-[13px] font-medium tracking-[0.15em] uppercase mb-3" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-dim)' }}>
                    Urgent Requirement?
                  </p>
                  <a
                    href="https://wa.me/27827800084?text=Hi%2C%20I%20need%20a%20rental%20quote%20for%20equipment.%20Can%20you%20help%3F"
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
                    WhatsApp Rental Enquiry
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
                Rental Quote Form
              </h3>

              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center"
                >
                  <CheckCircle size={36} strokeWidth={1} className="mx-auto mb-4" style={{ color: '#6ee7a0' }} />
                  <p className="text-[15px] font-light mb-1" style={{ color: 'var(--chrome-light)' }}>Quote Request Received</p>
                  <p className="text-[15px] font-light" style={{ color: 'var(--text-muted)' }}>We'll confirm availability and pricing within 24 hours.</p>
                  <button
                    className="mt-6 text-[12px] tracking-[0.2em] uppercase font-medium transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-dim)' }}
                    onClick={() => setStatus('idle')}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--chrome-light)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-dim)'}
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <input type="hidden" name="to_email" value={EMAILJS_CONFIG.TO_EMAIL} />

                  {/* Contact details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text" name="name" placeholder="Full Name *"
                      value={form.name} onChange={handleChange} required
                      style={inputStyle} onFocus={focusIn} onBlur={focusOut}
                    />
                    <input
                      type="email" name="email" placeholder="Email Address *"
                      value={form.email} onChange={handleChange} required
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
                      Rental Requirements
                    </p>
                  </div>

                  {/* Equipment & duration */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <select
                      name="equipment" value={form.equipment} onChange={handleChange} required
                      style={{ ...selectStyle, color: form.equipment ? 'var(--text-primary)' : 'var(--text-dim)' }}
                      onFocus={focusIn} onBlur={focusOut}
                    >
                      <option value="" style={{ background: '#0D1929', color: 'var(--text-dim)' }}>Equipment Type *</option>
                      {equipmentOptions.map((o) => (
                        <option key={o} value={o} style={{ background: '#0D1929', color: 'var(--text-primary)' }}>{o}</option>
                      ))}
                    </select>
                    <select
                      name="duration" value={form.duration} onChange={handleChange}
                      style={{ ...selectStyle, color: form.duration ? 'var(--text-primary)' : 'var(--text-dim)' }}
                      onFocus={focusIn} onBlur={focusOut}
                    >
                      <option value="" style={{ background: '#0D1929', color: 'var(--text-dim)' }}>Hire Duration</option>
                      {durationOptions.map((o) => (
                        <option key={o} value={o} style={{ background: '#0D1929', color: 'var(--text-primary)' }}>{o}</option>
                      ))}
                    </select>
                  </div>

                  {/* Date & location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <input
                        type="text" name="start_date" placeholder="Desired Start Date"
                        value={form.start_date} onChange={handleChange}
                        style={inputStyle} onFocus={focusIn} onBlur={focusOut}
                      />
                    </div>
                    <div className="relative flex items-center">
                      <input
                        type="text" name="location" placeholder="Project Location"
                        value={form.location} onChange={handleChange}
                        style={inputStyle} onFocus={focusIn} onBlur={focusOut}
                      />
                    </div>
                  </div>

                  <textarea
                    name="message" placeholder="Additional requirements (site conditions, attachments needed, etc.)"
                    rows={4} value={form.message} onChange={handleChange}
                    style={{ ...inputStyle, resize: 'vertical' }}
                    onFocus={focusIn} onBlur={focusOut}
                  />

                  <div className="flex items-center gap-4 flex-wrap">
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="inline-flex items-center gap-2.5 px-7 py-3.5 text-[13px] font-semibold tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                      style={{
                        fontFamily: 'var(--font-heading)',
                        background: 'rgba(200,216,232,0.08)',
                        color: 'var(--chrome-light)',
                        border: '1px solid rgba(200,216,232,0.2)',
                      }}
                      onMouseEnter={(e) => {
                        if (status !== 'sending') {
                          e.currentTarget.style.background = 'rgba(200,216,232,0.14)';
                          e.currentTarget.style.borderColor = 'rgba(200,216,232,0.35)';
                          e.currentTarget.style.transform = 'translateY(-2px)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(200,216,232,0.08)';
                        e.currentTarget.style.borderColor = 'rgba(200,216,232,0.2)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      <Send size={13} strokeWidth={1.5} />
                      {status === 'sending' ? 'Sending…' : 'Request Quote'}
                    </button>
                    {status === 'error' && (
                      <p className="text-[14px]" style={{ color: '#f87171' }}>
                        Failed to send. Please try WhatsApp or email directly.
                      </p>
                    )}
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
