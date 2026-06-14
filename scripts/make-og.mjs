// Generates a branded 1200x630 social-share (Open Graph) image.
// Run: node scripts/make-og.mjs
import sharp from 'sharp';

const W = 1200, H = 630;
const SRC = 'public/bmh-logo-hd.png';

// Background: subtle vertical navy gradient with a faint grid feel.
const bg = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0F2137"/>
      <stop offset="100%" stop-color="#080E1A"/>
    </linearGradient>
    <radialGradient id="r" cx="50%" cy="34%" r="60%">
      <stop offset="0%" stop-color="#16365c" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="#16365c" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#g)"/>
  <rect width="${W}" height="${H}" fill="url(#r)"/>
  <rect x="0" y="${H - 6}" width="${W}" height="6" fill="#1C3A60"/>
</svg>`;

const text = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <style>
    .title { font-family: 'Arial', sans-serif; font-weight: 800; fill: #EAF2FB; letter-spacing: 4px; }
    .sub   { font-family: 'Arial', sans-serif; font-weight: 400; fill: #C8D8E8; letter-spacing: 2px; }
    .ey    { font-family: 'Arial', sans-serif; font-weight: 700; fill: #6FA3CE; letter-spacing: 8px; }
  </style>
  <text x="600" y="452" text-anchor="middle" class="title" font-size="58">BMH TRADING INTERNATIONAL</text>
  <text x="600" y="510" text-anchor="middle" class="sub" font-size="29">Quality Used Construction &amp; Mining Equipment</text>
  <text x="600" y="556" text-anchor="middle" class="ey" font-size="22">SOUTH AFRICA  •  SHIPPING WORLDWIDE</text>
</svg>`;

const logo = await sharp(SRC).trim().resize({ width: 470 }).png().toBuffer();
const logoMeta = await sharp(logo).metadata();

await sharp(Buffer.from(bg))
  .composite([
    { input: logo, top: 70, left: Math.round((W - logoMeta.width) / 2) },
    { input: Buffer.from(text), top: 0, left: 0 },
  ])
  .jpeg({ quality: 88 })
  .toFile('public/og-image.jpg');

console.log('✓ public/og-image.jpg', `${W}x${H}`);
