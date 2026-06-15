import { useEffect, useState } from 'react';
import { client } from './client';
import { urlFor } from './image';

// Sold items are hidden from the public site; ordered by the client's displayOrder.
const EQUIPMENT_QUERY = `*[_type == "equipment" && status != "Sold"]
  | order(displayOrder asc, _createdAt asc){
    _id, name, brand, category, year, hours, location, status,
    description, featured,
    "specs": specs[]{label, value},
    image,
    gallery
  }`;

// Map a Sanity document to the shape the existing components expect.
function mapDoc(doc) {
  const specs = {};
  (doc.specs || []).forEach((s) => {
    if (s?.label) specs[s.label] = s.value;
  });

  // Main photo first, then any gallery photos — skip blanks.
  const allImages = [doc.image, ...(doc.gallery || [])].filter((img) => img?.asset);

  const hasImage = allImages.length > 0;
  const image = hasImage
    ? urlFor(allImages[0]).width(900).height(675).fit('crop').auto('format').url()
    : '';
  const imageLarge = hasImage
    ? urlFor(allImages[0]).width(1800).height(1100).fit('crop').auto('format').url()
    : '';
  // Full-size, aspect-preserved versions for the photo viewer (main + gallery).
  const photos = allImages.map((img) =>
    urlFor(img).width(1600).fit('max').auto('format').url()
  );

  return {
    id: doc._id,
    name: doc.name,
    brand: doc.brand,
    category: doc.category,
    year: doc.year || 'N/A',
    hours: doc.hours || 'N/A',
    location: doc.location,
    status: doc.status || 'Available',
    description: doc.description,
    featured: !!doc.featured,
    specs,
    image,
    imageLarge,
    photos,
  };
}

export function useEquipment() {
  const [equipment, setEquipment] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    client
      .fetch(EQUIPMENT_QUERY)
      .then((docs) => {
        if (active) {
          setEquipment(docs.map(mapDoc));
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error('Failed to load equipment from Sanity:', err);
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, []);

  return { equipment, loading };
}
