import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, ArrowUpRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const openings = [
  {
    title: 'Diesel Mechanic',
    location: 'Kempton Park, Gauteng',
    type: 'Full-time',
    department: 'Workshop',
    desc: 'Experienced diesel mechanic needed for servicing and repairing heavy earthmoving equipment including excavators, dozers, and wheel loaders.',
  },
  {
    title: 'Sales Representative',
    location: 'Kempton Park, Gauteng',
    type: 'Full-time',
    department: 'Sales',
    desc: 'Drive equipment sales across Southern Africa. Requires knowledge of construction and mining equipment markets.',
  },
  {
    title: 'Parts Specialist',
    location: 'Kempton Park, Gauteng',
    type: 'Full-time',
    department: 'Parts',
    desc: 'Source and supply genuine and aftermarket parts for Caterpillar, Komatsu, and Volvo equipment ranges.',
  },
];

export default function Careers() {
  return (
    <>
      <Helmet>
        <title>Careers at BMH Trading International | Heavy Equipment Jobs Gauteng, South Africa</title>
        <meta name="description" content="Join the BMH Trading International team in Kempton Park, Gauteng. Open roles in diesel mechanics, equipment sales & parts. Apply today." />
        <meta property="og:title" content="Careers at BMH Trading International | Kempton Park, Gauteng" />
        <meta property="og:description" content="Open positions in heavy equipment sales, diesel mechanics & parts. Based in Kempton Park, South Africa." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bmhtradinginternational.com/careers" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1690719465490-db2864ef85c1?w=1200&h=630&fit=crop&q=80" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Careers at BMH Trading International — heavy equipment jobs Gauteng" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Careers at BMH Trading International | Kempton Park, Gauteng" />
        <meta name="twitter:description" content="Open positions in heavy equipment sales, diesel mechanics & parts. Based in Kempton Park, South Africa." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1690719465490-db2864ef85c1?w=1200&h=630&fit=crop&q=80" />
        <link rel="canonical" href="https://www.bmhtradinginternational.com/careers" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "itemListElement": openings.map((job, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "item": {
              "@type": "JobPosting",
              "title": job.title,
              "description": job.desc,
              "datePosted": "2026-05-01",
              "employmentType": "FULL_TIME",
              "hiringOrganization": {
                "@type": "Organization",
                "name": "BMH Trading International",
                "sameAs": "https://www.bmhtradinginternational.com",
                "logo": "https://www.bmhtradinginternational.com/bmh-logo-hd.png"
              },
              "jobLocation": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "142 2nd Avenue, Bredell AH",
                  "addressLocality": "Kempton Park",
                  "addressRegion": "Gauteng",
                  "postalCode": "1619",
                  "addressCountry": "ZA"
                }
              }
            }
          }))
        })}</script>
      </Helmet>
      <section
        className="relative py-28 lg:py-36"
        style={{ background: `radial-gradient(ellipse 50% 50% at 50% 40%, rgba(200,216,232,0.03) 0%, transparent 60%), var(--bg-alt)`, borderBottom: '1px solid rgba(200,216,232,0.04)' }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Join Our Team"
            title="Careers at BMH"
            subtitle="Be part of a dynamic team in the heavy equipment industry. We're always looking for skilled professionals who share our passion for quality machinery."
          />
        </div>
      </section>

      <section className="py-16 lg:py-24" style={{ background: 'var(--bg-deep)' }}>
        <div className="max-w-[900px] mx-auto px-6 lg:px-8">
          <div className="space-y-3">
            {openings.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.23, 1, 0.32, 1] }}
                className="group p-6 lg:p-8 cursor-pointer premium-card"
                style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)' }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[9px] font-medium tracking-[0.35em] uppercase mb-2 block" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-dim)' }}>
                      {job.department}
                    </span>
                    <h3 className="uppercase leading-[0.95] mb-3" style={{ fontFamily: 'var(--font-display)', color: 'var(--chrome-light)', fontSize: '22px' }}>
                      {job.title}
                    </h3>
                    <p className="text-[15px] leading-relaxed mb-4 font-light" style={{ color: 'var(--text-muted)' }}>{job.desc}</p>
                    <div className="flex flex-wrap gap-4">
                      <span className="flex items-center gap-1.5 text-[13px] font-light" style={{ color: 'var(--text-dim)' }}>
                        <MapPin size={11} strokeWidth={1.5} /> {job.location}
                      </span>
                      <span className="flex items-center gap-1.5 text-[13px] font-light" style={{ color: 'var(--text-dim)' }}>
                        <Briefcase size={11} strokeWidth={1.5} /> {job.type}
                      </span>
                    </div>
                  </div>
                  <div className="shrink-0 w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-1 group-hover:translate-y-0" style={{ color: 'var(--text-dim)' }}>
                    <ArrowUpRight size={16} strokeWidth={1.3} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 p-8 text-center"
            style={{ background: 'var(--bg-surface)', border: '1px solid rgba(200,216,232,0.06)' }}
          >
            <h4 className="uppercase leading-[0.95] mb-2" style={{ fontFamily: 'var(--font-display)', color: 'var(--chrome-light)', fontSize: '22px' }}>
              Don't See a Fit?
            </h4>
            <p className="text-[15px] mb-5 font-light" style={{ color: 'var(--text-muted)' }}>
              Send your CV to us anyway. We're always interested in hearing from talented professionals.
            </p>
            <a
              href="mailto:bradleyh@bmhtradinginternational.com"
              className="inline-flex items-center gap-2 px-6 py-3 text-[12px] font-semibold tracking-[0.2em] uppercase transition-all duration-300"
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
              Email Your CV
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
