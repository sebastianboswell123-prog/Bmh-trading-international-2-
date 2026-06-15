import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Fullscreen photo viewer. Props:
//   photos: string[]  — image URLs
//   index:  number     — current photo index
//   title:  string
//   onClose(), onIndexChange(nextIndex)
export default function Lightbox({ photos = [], index = 0, title = '', onClose, onIndexChange }) {
  const count = photos.length;

  const go = useCallback(
    (dir) => {
      if (count < 2) return;
      onIndexChange((index + dir + count) % count);
    },
    [index, count, onIndexChange]
  );

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowRight') go(1);
      else if (e.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [go, onClose]);

  if (!count) return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex flex-col"
        style={{ background: 'rgba(8,14,26,0.96)', backdropFilter: 'blur(6px)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 sm:px-8 py-4 shrink-0" onClick={(e) => e.stopPropagation()}>
          <div className="min-w-0">
            <div className="text-[13px] sm:text-[15px] font-semibold uppercase tracking-wide truncate" style={{ fontFamily: 'var(--font-heading)', color: 'var(--chrome-light)' }}>
              {title}
            </div>
            {count > 1 && (
              <div className="text-[12px] font-light mt-0.5" style={{ color: 'var(--text-dim)' }}>
                {index + 1} / {count}
              </div>
            )}
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="w-10 h-10 flex items-center justify-center shrink-0 transition-colors"
            style={{ background: 'rgba(200,216,232,0.1)', border: '1px solid rgba(200,216,232,0.15)', color: 'var(--chrome-light)' }}
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Stage */}
        <div className="relative flex-1 flex items-center justify-center px-4 sm:px-16 min-h-0" onClick={(e) => e.stopPropagation()}>
          {count > 1 && (
            <button
              onClick={() => go(-1)}
              aria-label="Previous photo"
              className="absolute left-2 sm:left-5 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center transition-colors z-10"
              style={{ background: 'rgba(200,216,232,0.1)', border: '1px solid rgba(200,216,232,0.15)', color: 'var(--chrome-light)' }}
            >
              <ChevronLeft size={22} strokeWidth={1.5} />
            </button>
          )}

          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={photos[index]}
              alt={`${title} — photo ${index + 1}`}
              className="max-h-full max-w-full object-contain"
              style={{ boxShadow: '0 24px 80px rgba(0,0,0,0.5)' }}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
            />
          </AnimatePresence>

          {count > 1 && (
            <button
              onClick={() => go(1)}
              aria-label="Next photo"
              className="absolute right-2 sm:right-5 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center transition-colors z-10"
              style={{ background: 'rgba(200,216,232,0.1)', border: '1px solid rgba(200,216,232,0.15)', color: 'var(--chrome-light)' }}
            >
              <ChevronRight size={22} strokeWidth={1.5} />
            </button>
          )}
        </div>

        {/* Thumbnails */}
        {count > 1 && (
          <div className="flex gap-2 overflow-x-auto justify-start sm:justify-center px-5 sm:px-8 py-4 shrink-0" onClick={(e) => e.stopPropagation()}>
            {photos.map((p, i) => (
              <button
                key={i}
                onClick={() => onIndexChange(i)}
                aria-label={`View photo ${i + 1}`}
                className="shrink-0 w-16 h-14 sm:w-20 sm:h-16 overflow-hidden transition-all"
                style={{ border: i === index ? '2px solid var(--chrome-light)' : '2px solid transparent', opacity: i === index ? 1 : 0.5 }}
              >
                <img src={p} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}
