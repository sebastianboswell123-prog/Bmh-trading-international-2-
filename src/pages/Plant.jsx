import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import EquipmentCard from '../components/EquipmentCard';
import FilterBar from '../components/FilterBar';
import { equipmentCategories as CATEGORY_ORDER } from '../data/equipment';
import { useEquipment } from '../sanity/equipment';

export default function Plant() {
  const [active, setActive] = useState('All');
  const { equipment: plantEquipment, loading } = useEquipment();

  // Show only categories that actually have stock, in the preferred order.
  const present = new Set(plantEquipment.map((e) => e.category));
  const equipmentCategories = ['All', ...CATEGORY_ORDER.filter((c) => c !== 'All' && present.has(c))];

  const filtered = active === 'All' ? plantEquipment : plantEquipment.filter((e) => e.category === active);

  return (
    <>
      <Helmet>
        <title>Used Heavy Machinery For Sale South Africa | Excavators, Loaders, Dozers | BMH Trading</title>
        <meta name="description" content="Browse quality used construction & mining machines for sale in South Africa. Caterpillar, Komatsu, Volvo, Hitachi, Liebherr & more. Kempton Park, Gauteng. Enquire today." />
        <meta property="og:title" content="Used Heavy Machinery For Sale South Africa | BMH Trading International" />
        <meta property="og:description" content="28+ used excavators, wheel loaders, bulldozers, cranes & more. Leading brands. Based in Kempton Park, SA." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bmhtradinginternational.com/plant" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1503708928676-1cb796a0891e?w=1200&h=630&fit=crop&q=80" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Used heavy machinery for sale — BMH Trading International South Africa" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Used Heavy Machinery For Sale South Africa | BMH Trading International" />
        <meta name="twitter:description" content="28+ used excavators, wheel loaders, bulldozers, cranes & more. Leading brands. Based in Kempton Park, SA." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1503708928676-1cb796a0891e?w=1200&h=630&fit=crop&q=80" />
        <link rel="canonical" href="https://www.bmhtradinginternational.com/plant" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Used Heavy Machinery For Sale — BMH Trading International",
          "description": "Quality used construction, mining and agricultural equipment for sale in South Africa.",
          "url": "https://www.bmhtradinginternational.com/plant",
          "numberOfItems": plantEquipment.length,
          "itemListElement": plantEquipment.map((item, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "item": {
              "@type": "Product",
              "name": item.name,
              "description": item.description,
              "image": item.image,
              "brand": { "@type": "Brand", "name": item.brand },
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "priceCurrency": "ZAR",
                "seller": { "@type": "Organization", "name": "BMH Trading International" },
                "url": "https://www.bmhtradinginternational.com/plant"
              },
              "additionalProperty": [
                { "@type": "PropertyValue", "name": "Year", "value": String(item.year) },
                { "@type": "PropertyValue", "name": "Operating Hours", "value": item.hours },
                { "@type": "PropertyValue", "name": "Location", "value": item.location }
              ]
            }
          }))
        })}</script>
      </Helmet>
      <section
        className="relative py-28 lg:py-36"
        style={{
          background: `radial-gradient(ellipse 60% 60% at 70% 30%, rgba(200,216,232,0.03) 0%, transparent 60%), var(--bg-alt)`,
          borderBottom: '1px solid rgba(200,216,232,0.04)',
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Plant & Equipment"
            title="Heavy Machinery For Sale"
            subtitle="Browse our current inventory of quality used construction, mining and agricultural equipment. All machines inspected and ready for deployment."
          />
        </div>
      </section>

      <section className="py-16 lg:py-24" style={{ background: 'var(--bg-deep)' }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <FilterBar categories={equipmentCategories} active={active} onSelect={setActive} />

          {loading ? (
            <div className="py-20 text-center">
              <p className="text-base font-light" style={{ color: 'var(--text-dim)' }}>
                Loading stock…
              </p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-base font-light" style={{ color: 'var(--text-dim)' }}>
                No equipment found in this category. Contact us for specific requirements.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((item, i) => (
                <EquipmentCard key={item.id} item={item} index={i} type="plant" />
              ))}
            </div>
          )}

          {/* Enquiry banner */}
          <div
            className="mt-16 p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-6"
            style={{ background: 'var(--bg-surface)', border: '1px solid rgba(200,216,232,0.06)' }}
          >
            <div>
              <h3
                className="uppercase leading-[0.95] mb-2"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--chrome-light)', fontSize: '24px' }}
              >
                Can't Find What You Need?
              </h3>
              <p className="text-[14px] font-light" style={{ color: 'var(--text-muted)' }}>
                We source equipment to your exact specifications from our worldwide network.
              </p>
            </div>
            <a
              href="https://wa.me/27827800084"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 text-[13px] font-semibold tracking-[0.2em] uppercase transition-all duration-300"
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
              Send Enquiry
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
