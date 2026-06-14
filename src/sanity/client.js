import { createClient } from '@sanity/client';

// Project + dataset are public, publishable values. Env vars override the
// baked-in defaults so the same build works locally and on Vercel.
export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'k5kbfta8',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  apiVersion: '2024-10-01',
  useCdn: true,
});
