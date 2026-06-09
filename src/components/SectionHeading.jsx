import { motion } from 'framer-motion';

export default function SectionHeading({ label, title, subtitle, align = 'left', noMargin = false }) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
      className={`flex flex-col ${alignment} ${noMargin ? '' : 'mb-12 lg:mb-16'}`}
    >
      {label && (
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-[1px] shimmer-line" style={{ background: 'var(--chrome)' }} />
          <span
            className="text-[12px] font-medium tracking-[0.4em] uppercase"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-dim)' }}
          >
            {label}
          </span>
        </div>
      )}
      <h2
        className="font-light uppercase leading-[1.0] tracking-[0.02em]"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(32px, 5vw, 62px)',
          color: 'var(--chrome-light)',
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="mt-5 max-w-2xl text-[15px] leading-relaxed font-light"
          style={{ color: 'var(--text-muted)' }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
