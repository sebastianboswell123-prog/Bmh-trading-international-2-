import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | BMH Trading International</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to BMH Trading International's homepage to browse used equipment for sale." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <section
        className="min-h-[80vh] flex items-center justify-center"
        style={{ background: 'var(--bg-deep)' }}
      >
        <div className="max-w-[600px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          >
            {/* 404 number */}
            <div
              className="text-[120px] lg:text-[160px] leading-none font-bold mb-2 select-none"
              style={{
                fontFamily: 'var(--font-display)',
                color: 'rgba(200,216,232,0.06)',
                letterSpacing: '0.05em',
              }}
            >
              404
            </div>

            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-[1px] w-8" style={{ background: 'rgba(200,216,232,0.2)' }} />
              <span
                className="text-[12px] font-medium tracking-[0.4em] uppercase"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-dim)' }}
              >
                Page Not Found
              </span>
              <div className="h-[1px] w-8" style={{ background: 'rgba(200,216,232,0.2)' }} />
            </div>

            <h1
              className="uppercase leading-[0.95] mb-5"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--chrome-light)', fontSize: 'clamp(28px, 5vw, 44px)' }}
            >
              This Page Doesn't Exist
            </h1>

            <p
              className="text-[14px] leading-relaxed font-light mb-10"
              style={{ color: 'var(--text-muted)' }}
            >
              The page you're looking for may have been moved or removed. Head back to browse our equipment inventory.
            </p>

            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                to="/"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 text-[13px] font-semibold tracking-[0.2em] uppercase transition-all duration-300"
                style={{
                  fontFamily: 'var(--font-heading)',
                  background: 'rgba(200,216,232,0.08)',
                  color: 'var(--chrome-light)',
                  border: '1px solid rgba(200,216,232,0.2)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(200,216,232,0.14)';
                  e.currentTarget.style.borderColor = 'rgba(200,216,232,0.35)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(200,216,232,0.08)';
                  e.currentTarget.style.borderColor = 'rgba(200,216,232,0.2)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Home size={13} strokeWidth={1.5} />
                Back to Home
              </Link>
              <Link
                to="/plant"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 text-[13px] font-semibold tracking-[0.2em] uppercase transition-all duration-300"
                style={{
                  fontFamily: 'var(--font-heading)',
                  border: '1px solid rgba(200,216,232,0.12)',
                  color: 'var(--text-muted)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(200,216,232,0.25)';
                  e.currentTarget.style.color = 'var(--chrome-light)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(200,216,232,0.12)';
                  e.currentTarget.style.color = 'var(--text-muted)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                View Stock
                <ArrowRight size={13} strokeWidth={1.5} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
