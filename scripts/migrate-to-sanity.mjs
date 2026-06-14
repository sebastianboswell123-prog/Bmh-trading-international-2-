// One-time migration: pushes the existing equipment listings into Sanity.
// Usage: SANITY_WRITE_TOKEN=xxx node scripts/migrate-to-sanity.mjs
import { createClient } from '@sanity/client';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { plantEquipment } from '../src/data/equipment.js';

const token = process.env.SANITY_WRITE_TOKEN;
if (!token) {
  console.error('Missing SANITY_WRITE_TOKEN env var');
  process.exit(1);
}

const client = createClient({
  projectId: 'k5kbfta8',
  dataset: 'production',
  apiVersion: '2024-10-01',
  token,
  useCdn: false,
});

// Machines to surface in the homepage hero slideshow (real photos + best stock)
const FEATURED = new Set([1, 4, 7, 21, 5, 6, 41]);

async function uploadImage(image, name) {
  let buffer, filename;
  if (image.startsWith('/images/')) {
    buffer = await readFile(path.join(process.cwd(), 'public', image));
    filename = path.basename(image);
  } else {
    const res = await fetch(image);
    if (!res.ok) throw new Error(`Fetch failed ${res.status} for ${image}`);
    buffer = Buffer.from(await res.arrayBuffer());
    filename = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') + '.jpg';
  }
  const asset = await client.assets.upload('image', buffer, { filename });
  return asset._id;
}

async function run() {
  // Clear any existing equipment so re-runs stay idempotent
  const existing = await client.fetch(`*[_type == "equipment"]._id`);
  if (existing.length) {
    const tx = client.transaction();
    existing.forEach((id) => tx.delete(id));
    await tx.commit();
    console.log(`Cleared ${existing.length} existing docs`);
  }

  let order = 0;
  for (const m of plantEquipment) {
    const assetId = await uploadImage(m.image, m.name);
    const specs = Object.entries(m.specs || {}).map(([label, value], i) => ({
      _key: `spec${i}`,
      _type: 'spec',
      label,
      value,
    }));

    const doc = {
      _type: 'equipment',
      name: m.name,
      brand: m.brand,
      category: m.category,
      condition: m.condition,
      location: m.location,
      status: m.status || 'Available',
      description: m.description,
      specs,
      image: { _type: 'image', asset: { _type: 'reference', _ref: assetId }, alt: m.name },
      featured: FEATURED.has(m.id),
      displayOrder: order++,
    };
    const year = String(m.year ?? '').toLowerCase();
    if (year && year !== 'n/a') doc.year = String(m.year);
    const hours = String(m.hours ?? '').toLowerCase();
    if (hours && hours !== 'n/a') doc.hours = String(m.hours);

    const created = await client.create(doc);
    console.log('✓', created._id, '—', m.name);
  }
  console.log(`\nDone. Migrated ${plantEquipment.length} machines.`);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
