// Generates favicons from the BMH logo, centered on the brand navy.
// Run: node scripts/make-favicons.mjs
import sharp from 'sharp';
import path from 'node:path';

const SRC = 'public/bmh-logo-hd.png';
const NAVY = '#0F2137';
const targets = [
  { file: 'favicon-16x16.png', size: 16 },
  { file: 'favicon-32x32.png', size: 32 },
  { file: 'favicon-48x48.png', size: 48 },
  { file: 'apple-touch-icon.png', size: 180 },
  { file: 'icon-192.png', size: 192 },
  { file: 'icon-512.png', size: 512 },
];

const logoTrimmed = await sharp(SRC).trim().png().toBuffer();

for (const { file, size } of targets) {
  const targetW = Math.round(size * 0.86);
  const resized = await sharp(logoTrimmed).resize({ width: targetW }).toBuffer();
  const meta = await sharp(resized).metadata();
  const left = Math.round((size - meta.width) / 2);
  const top = Math.round((size - meta.height) / 2);
  await sharp({
    create: { width: size, height: size, channels: 4, background: NAVY },
  })
    .composite([{ input: resized, top, left }])
    .png()
    .toFile(path.join('public', file));
  console.log('✓', file, `${size}x${size}`);
}
console.log('Done.');
