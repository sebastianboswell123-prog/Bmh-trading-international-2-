import { Helmet } from 'react-helmet-async';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, ArrowUpRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { EMAILJS_CONFIG } from '../utils/emailService';

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
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const formRef = useRef();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('sending');
    try {
      // Replace these with your EmailJS credentials from emailjs.com
      await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_CONTACT,
        formRef.current,
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      setStatus('success');
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
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

  return (
    <>
      <Helmet>
        <title>Contact BMH Trading International | Kempton Park, South Africa</title>
        <meta name="description" content="Get in touch with BMH Trading International. 142 2nd Avenue, Bredell AH, Kempton Park, Gauteng. WhatsApp available Mon–Sat. Equipment enquiries answered within 24 hours." />
        <meta property="og:title" content="Contact BMH Trading International | Kempton Park, South Africa" />
        <meta property="og:description" content="Reach our team in Kempton Park, Gauteng. WhatsApp available. Equipment enquiries answered within 24 hours." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bmhtradinginternational.com/contact" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1628645419184-26a1f2757340?w=1200&h=630&fit=crop&q=80" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Contact BMH Trading International — Kempton Park, South Africa" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact BMH Trading International | Kempton Park, South Africa" />
        <meta name="twitter:description" content="Reach our team in Kempton Park, Gauteng. WhatsApp available. Equipment enquiries answered within 24 hours." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1628645419184-26a1f2757340?w=1200&h=630&fit=crop&q=80" />
        <link rel="canonical" href="https://www.bmhtradinginternational.com/contact" />
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
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
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

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="lg:col-span-3 p-6 lg:p-10"
              style={{ background: 'var(--bg-surface)', border: '1px solid rgba(200,216,232,0.06)' }}
            >
              <h3 className="uppercase leading-[0.95] mb-8" style={{ fontFamily: 'var(--font-display)', color: 'var(--chrome-light)', fontSize: '28px' }}>
                Send an Enquiry
              </h3>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <input type="hidden" name="to_email" value={EMAILJS_CONFIG.TO_EMAIL} />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" name="name" placeholder="Full Name *" value={form.name} onChange={handleChange} style={inputStyle}
                    onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(200,216,232,0.2)'; e.currentTarget.style.background = 'rgba(200,216,232,0.05)'; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(200,216,232,0.08)'; e.currentTarget.style.background = 'rgba(200,216,232,0.03)'; }}
                  />
                  <input type="email" name="email" placeholder="Email Address *" value={form.email} onChange={handleChange} style={inputStyle}
                    onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(200,216,232,0.2)'; e.currentTarget.style.background = 'rgba(200,216,232,0.05)'; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(200,216,232,0.08)'; e.currentTarget.style.background = 'rgba(200,216,232,0.03)'; }}
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} style={inputStyle}
                    onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(200,216,232,0.2)'; e.currentTarget.style.background = 'rgba(200,216,232,0.05)'; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(200,216,232,0.08)'; e.currentTarget.style.background = 'rgba(200,216,232,0.03)'; }}
                  />
                  <select name="subject" value={form.subject} onChange={handleChange}
                    style={{ ...selectStyle, color: form.subject ? 'var(--text-primary)' : 'var(--text-dim)' }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(200,216,232,0.2)'; e.currentTarget.style.background = 'rgba(200,216,232,0.05)'; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(200,216,232,0.08)'; e.currentTarget.style.background = 'rgba(200,216,232,0.03)'; }}
                  >
                    <option value="" style={{ background: '#0D1929', color: 'var(--text-dim)' }}>Subject</option>
                    <option value="plant" style={{ background: '#0D1929', color: 'var(--text-primary)' }}>Plant / Equipment Enquiry</option>
                    <option value="parts" style={{ background: '#0D1929', color: 'var(--text-primary)' }}>Parts Enquiry</option>
                    <option value="rental" style={{ background: '#0D1929', color: 'var(--text-primary)' }}>Rental Enquiry</option>
                    <option value="general" style={{ background: '#0D1929', color: 'var(--text-primary)' }}>General Enquiry</option>
                  </select>
                </div>
                <textarea name="message" placeholder="Your Message *" rows={5} value={form.message} onChange={handleChange}
                  style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(200,216,232,0.2)'; e.currentTarget.style.background = 'rgba(200,216,232,0.05)'; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(200,216,232,0.08)'; e.currentTarget.style.background = 'rgba(200,216,232,0.03)'; }}
                />
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 text-[13px] font-semibold tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    background: status === 'success' ? 'rgba(37,211,102,0.12)' : 'rgba(200,216,232,0.08)',
                    color: status === 'success' ? '#6ee7a0' : 'var(--chrome-light)',
                    border: `1px solid ${status === 'success' ? 'rgba(37,211,102,0.3)' : 'rgba(200,216,232,0.2)'}`,
                  }}
                  onMouseEnter={(e) => {
                    if (status !== 'success') {
                      e.currentTarget.style.background = 'rgba(200,216,232,0.14)';
                      e.currentTarget.style.borderColor = 'rgba(200,216,232,0.35)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (status !== 'success') {
                      e.currentTarget.style.background = 'rgba(200,216,232,0.08)';
                      e.currentTarget.style.borderColor = 'rgba(200,216,232,0.2)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }
                  }}
                >
                  <Send size={13} strokeWidth={1.5} />
                  {status === 'sending' ? 'Sending…' : status === 'success' ? 'Enquiry Sent!' : 'Send Enquiry'}
                </button>
                {status === 'error' && (
                  <p className="text-[14px] mt-2" style={{ color: '#f87171' }}>
                    Something went wrong. Please try WhatsApp or email directly.
                  </p>
                )}
              </form>
            </motion.div>
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 w-full overflow-hidden"
            style={{ border: '1px solid rgba(200,216,232,0.06)', aspectRatio: '21/6' }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.0!2d28.3!3d-26.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBredell%20AH%20Kempton%20Park!5e0!3m2!1sen!2sza!4v1"
              width="100%" height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.3) brightness(0.7)' }}
              allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              title="BMH Trading International Location"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
