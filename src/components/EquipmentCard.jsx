import { motion } from 'framer-motion';
import { Clock, Tag, ArrowUpRight, MapPin } from 'lucide-react';

export default function EquipmentCard({ item, index = 0 }) {
  // Show year only when it's a real value, and fold it into the machine name.
  const hasYear = item.year && String(item.year).toLowerCase() !== 'n/a';
  const title = hasYear ? `${item.year} ${item.name}` : item.name;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.23, 1, 0.32, 1] }}
      className="group cursor-pointer premium-card"
      style={{
        background: 'var(--bg-surface)',
        border: '1px solid var(--border)',
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
        <img
          src={item.image}
          alt={`${title} for sale in South Africa — BMH Trading International`}
          loading="lazy"
          className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.06]"
        />
        {/* Cinematic gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, rgba(15,42,74,0.1) 0%, transparent 30%, transparent 50%, rgba(15,42,74,0.8) 100%)',
          }}
        />
        {/* Hover reveal arrow */}
        <div
          className="absolute bottom-4 right-4 w-9 h-9 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-2 group-hover:translate-y-0"
          style={{ background: 'rgba(200,216,232,0.1)', backdropFilter: 'blur(8px)', border: '1px solid rgba(200,216,232,0.15)', color: 'var(--chrome-light)' }}
        >
          <ArrowUpRight size={15} strokeWidth={1.5} />
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Brand tag */}
        <div
          className="text-[9px] font-medium tracking-[0.35em] uppercase mb-2"
          style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-dim)' }}
        >
          {item.brand}
        </div>

        {/* Name */}
        <h3
          className="text-[15px] font-semibold tracking-wide uppercase leading-tight mb-3"
          style={{ fontFamily: 'var(--font-heading)', color: 'var(--chrome-light)' }}
        >
          {title}
        </h3>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className="flex items-center gap-1.5 text-[13px] font-light" style={{ color: 'var(--text-muted)' }}>
            <Clock size={11} strokeWidth={1.5} style={{ color: 'var(--text-dim)' }} />
            {/^[\d.,]+$/.test(String(item.hours)) ? `${item.hours} hrs` : item.hours}
          </span>
          <span className="flex items-center gap-1.5 text-[13px] font-light" style={{ color: 'var(--text-muted)' }}>
            <Tag size={11} strokeWidth={1.5} style={{ color: 'var(--text-dim)' }} />
            {item.category}
          </span>
          {item.location && (
            <span className="flex items-center gap-1.5 text-[13px] font-light" style={{ color: 'var(--text-muted)' }}>
              <MapPin size={11} strokeWidth={1.5} style={{ color: 'var(--text-dim)' }} />
              {item.location}
            </span>
          )}
        </div>

        {/* Description */}
        {item.description && (
          <p className="text-[15px] leading-relaxed line-clamp-2 font-light" style={{ color: 'var(--text-dim)' }}>
            {item.description}
          </p>
        )}

        {/* Key specs preview */}
        {item.specs && (
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
            {Object.entries(item.specs).slice(0, 2).map(([key, val]) => (
              <span key={key} className="text-[12px] font-light" style={{ color: 'var(--text-dim)' }}>
                <span style={{ color: 'var(--text-muted)' }}>{key}:</span> {val}
              </span>
            ))}
          </div>
        )}

        {/* Enquire link */}
        <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(200,216,232,0.06)' }}>
          <a
            href={`https://wa.me/27827800084?text=${encodeURIComponent(`Hi, I'm interested in the ${title}. Is it still available?`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 text-[12px] font-semibold tracking-[0.2em] uppercase transition-all duration-300"
            style={{
              fontFamily: 'var(--font-heading)',
              background: 'linear-gradient(135deg, #25D366 0%, #1da851 100%)',
              color: '#fff',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.15), 0 3px 12px rgba(37,211,102,0.2)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.2), 0 8px 24px rgba(37,211,102,0.35)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.15), 0 3px 12px rgba(37,211,102,0.2)';
            }}
          >
            Enquire Now →
          </a>
        </div>
      </div>
    </motion.div>
  );
}
