export default function FilterBar({ categories, active, onSelect }) {
  return (
    <div className="flex flex-wrap gap-2 mb-10 min-w-0">
      {categories.map((cat) => {
        const isActive = active === cat;
        return (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            className="relative px-5 py-2.5 text-[12px] font-medium tracking-[0.2em] uppercase transition-all duration-300"
            style={{
              fontFamily: 'var(--font-heading)',
              background: isActive ? 'rgba(200,216,232,0.08)' : 'transparent',
              color: isActive ? 'var(--chrome-light)' : 'var(--text-dim)',
              border: `1px solid ${isActive ? 'rgba(200,216,232,0.2)' : 'var(--border)'}`,
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              if (!isActive) {
                e.currentTarget.style.borderColor = 'rgba(200,216,232,0.15)';
                e.currentTarget.style.color = 'var(--chrome)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive) {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.color = 'var(--text-dim)';
              }
            }}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
