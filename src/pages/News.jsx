import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, ArrowUpRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const articles = [
  {
    title: 'Genuine Caterpillar and Komatsu Parts Now Available',
    date: 'May 2026',
    category: 'Parts',
    excerpt: 'We have expanded our parts inventory with new genuine Caterpillar and Komatsu excavator components including hydraulic pumps, undercarriage, bucket teeth, and more.',
    image: 'https://images.unsplash.com/photo-1606811883055-0d24f05c8bcd?w=600&h=400&fit=crop',
  },
  {
    title: 'Fresh Stock: Komatsu D65PX-18 Dozer',
    date: 'April 2026',
    category: 'New Arrivals',
    excerpt: 'Fully refurbished Komatsu D65PX-18 dozer now available — new track shoes, rollers and idlers, iMC-ready for GPS dozing. Contact us for specifications and pricing.',
    image: 'https://images.unsplash.com/photo-1621922688758-359fc864071e?w=600&h=400&fit=crop',
  },
  {
    title: 'BMH Trading International Expands African Operations',
    date: 'March 2026',
    category: 'Company',
    excerpt: 'Following strong demand across the continent, BMH Trading International is expanding its dealer network and support infrastructure across Sub-Saharan Africa.',
    image: 'https://images.unsplash.com/photo-1630288214173-a119cf823388?w=600&h=400&fit=crop',
  },
];

export default function News() {
  return (
    <>
      <Helmet>
        <title>News & Stock Arrivals | BMH Trading International South Africa</title>
        <meta name="description" content="Latest news, new stock arrivals and company updates from BMH Trading International. New Komatsu dozers, Caterpillar parts and more. Kempton Park, South Africa." />
        <meta property="og:title" content="News & Stock Arrivals | BMH Trading International" />
        <meta property="og:description" content="Stay updated with our latest stock arrivals, parts availability and company news from BMH Trading International." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bmhtradinginternational.com/news" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1621922688758-359fc864071e?w=1200&h=630&fit=crop&q=80" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="BMH Trading International news and stock arrivals" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="News & Stock Arrivals | BMH Trading International" />
        <meta name="twitter:description" content="Stay updated with our latest stock arrivals, parts availability and company news from BMH Trading International." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1621922688758-359fc864071e?w=1200&h=630&fit=crop&q=80" />
        <link rel="canonical" href="https://www.bmhtradinginternational.com/news" />
      </Helmet>
      <section
        className="relative py-28 lg:py-36"
        style={{ background: `radial-gradient(ellipse 50% 50% at 60% 40%, rgba(200,216,232,0.03) 0%, transparent 60%), var(--bg-alt)`, borderBottom: '1px solid rgba(200,216,232,0.04)' }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <SectionHeading label="Latest Updates" title="News & Insights" subtitle="Stay updated with our latest stock arrivals, company news, and industry developments." />
        </div>
      </section>

      <section className="py-16 lg:py-24" style={{ background: 'var(--bg-deep)' }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {articles.map((article, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
                className="group cursor-pointer overflow-hidden premium-card"
                style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)' }}
              >
                <div className="relative overflow-hidden" style={{ aspectRatio: '16/10' }}>
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.06]" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(8,14,26,0.1) 0%, transparent 30%, transparent 50%, rgba(8,14,26,0.8) 100%)' }} />
                  <span className="absolute top-4 left-4 px-3 py-1 text-[9px] font-medium tracking-[0.25em] uppercase backdrop-blur-sm"
                    style={{ fontFamily: 'var(--font-heading)', background: 'rgba(8,14,26,0.6)', color: 'var(--chrome)', border: '1px solid rgba(200,216,232,0.1)' }}>
                    {article.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar size={11} strokeWidth={1.5} style={{ color: 'var(--text-dim)' }} />
                    <span className="text-[13px] font-light" style={{ color: 'var(--text-dim)' }}>{article.date}</span>
                  </div>
                  <h3 className="text-[15px] font-semibold tracking-wide uppercase leading-tight mb-3" style={{ fontFamily: 'var(--font-heading)', color: 'var(--chrome-light)' }}>
                    {article.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed line-clamp-3 font-light" style={{ color: 'var(--text-muted)' }}>
                    {article.excerpt}
                  </p>
                  <div className="mt-4 pt-4 flex items-center gap-2" style={{ borderTop: '1px solid rgba(200,216,232,0.06)' }}>
                    <span className="text-[12px] font-medium tracking-[0.2em] uppercase transition-colors duration-300 group-hover:text-[var(--chrome-light)]"
                      style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-dim)' }}>
                      Read More
                    </span>
                    <ArrowUpRight size={11} strokeWidth={1.5} className="transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style={{ color: 'var(--text-dim)' }} />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
