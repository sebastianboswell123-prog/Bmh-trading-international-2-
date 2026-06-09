/**
 * EmailJS Configuration
 * ─────────────────────────────────────────────────────────────────────────
 * 1. Sign up at https://www.emailjs.com (free plan: 200 emails/month)
 * 2. Add an Email Service (Gmail, Outlook, or SMTP) → copy the Service ID
 * 3. Create a template for each form type below → copy the Template IDs
 * 4. Go to Account → API Keys → copy your Public Key
 * 5. Replace the placeholder strings below with your real values
 *
 * Template variables used per form:
 *
 *  CONTACT TEMPLATE (TEMPLATE_CONTACT):
 *    {{from_name}}   – sender's full name
 *    {{from_email}}  – sender's email
 *    {{phone}}       – phone number (optional)
 *    {{subject}}     – enquiry subject / category
 *    {{message}}     – message body
 *    {{to_email}}    – recipient (bradleyh@bmhtradinginternational.com)
 *
 *  PARTS TEMPLATE (TEMPLATE_PARTS):
 *    {{from_name}}   – sender's full name
 *    {{from_email}}  – sender's email
 *    {{phone}}       – phone number
 *    {{brand}}       – machine brand (e.g. Caterpillar)
 *    {{model}}       – machine model (e.g. 336 GC)
 *    {{part_number}} – part number or description
 *    {{message}}     – additional notes
 *    {{to_email}}    – recipient
 *
 *  RENTAL TEMPLATE (TEMPLATE_RENTAL):
 *    {{from_name}}   – sender's full name
 *    {{from_email}}  – sender's email
 *    {{phone}}       – phone number
 *    {{equipment}}   – equipment type requested
 *    {{duration}}    – hire duration
 *    {{start_date}}  – desired start date
 *    {{location}}    – project location
 *    {{message}}     – additional notes
 *    {{to_email}}    – recipient
 * ─────────────────────────────────────────────────────────────────────────
 */

export const EMAILJS_CONFIG = {
  SERVICE_ID:       'YOUR_SERVICE_ID',       // e.g. 'service_abc123'
  PUBLIC_KEY:       'YOUR_PUBLIC_KEY',        // e.g. 'AbCdEfGhIjKlMnOp'
  TEMPLATE_CONTACT: 'YOUR_TEMPLATE_CONTACT', // e.g. 'template_contact'
  TEMPLATE_PARTS:   'YOUR_TEMPLATE_PARTS',   // e.g. 'template_parts'
  TEMPLATE_RENTAL:  'YOUR_TEMPLATE_RENTAL',  // e.g. 'template_rental'
  TO_EMAIL:         'bradleyh@bmhtradinginternational.com',
};
