/**
 * maiCare Foundation: site settings
 * ---------------------------------
 * This is the ONE file for things that change often. Edit the values below,
 * save, and the whole site updates. No other file needs to be touched for:
 *   1. contact details
 *   2. the emergency banner on/off switch
 *   3. the goals / impact numbers
 *
 * RULES
 * - `null` means "not known yet". Pages must hide anything that is `null`
 *   instead of showing a blank or a made-up value.
 * - Never put invented numbers here. Only real, confirmed figures.
 * - The site takes NO online payments. Do not add bank, GCash or QR details.
 */

// ---------------------------------------------------------------------------
// 1. Contact details
// ---------------------------------------------------------------------------
export const contact = {
  /** Public address. Confirm the full street address with the foundation. */
  address: {
    street: null as string | null, // TODO: street / barangay
    city: 'San Carlos City',
    province: 'Pangasinan',
    country: 'Philippines',
  },
  /** Mobile or landline, as people should dial it, e.g. "+63 9XX XXX XXXX". */
  phone: null as string | null, // TODO: confirm with foundation
  /** General questions. */
  emailInfo: null as string | null, // TODO: planned info@<domain> (Phase 9)
  /** Donation inquiries. */
  emailDonate: null as string | null, // TODO: planned donate@<domain> (Phase 9)
  /** Full link to the foundation's Facebook page. */
  facebookUrl: null as string | null, // TODO: confirm with foundation
  /** Shown on About and in the footer as a trust signal. */
  secRegistrationNumber: null as string | null, // TODO: confirm with foundation
  /** e.g. "Mon to Fri, 9:00 AM to 5:00 PM". */
  officeHours: null as string | null, // TODO: confirm with foundation
};

// ---------------------------------------------------------------------------
// 2. Emergency banner
// ---------------------------------------------------------------------------
// Set `enabled` to true and the banner shows on EVERY page (the banner itself
// is built in Phase 3). Set it back to false to hide it.
export const emergencyBanner = {
  enabled: false,
  /** One short sentence, e.g. "Typhoon ___ relief drive: here's what we need." */
  message: '',
  /** Button or link text, e.g. "See how to help". */
  linkLabel: 'See how to help',
  /** Where the link goes. Usually the How to Donate section. */
  linkHref: '/get-involved/',
};

// ---------------------------------------------------------------------------
// 3. Goals and impact numbers
// ---------------------------------------------------------------------------
// At launch there is no track record, so these are GOALS, not results.
//  - `target`  : the goal, e.g. 50 (null until the foundation confirms it)
//  - `current` : the real result so far (leave null until it is real)
//  - `confirmed: false` means the figure is still a placeholder and must not
//    be shown publicly. Set it to true only when the foundation approves it.
export type Goal = {
  id: string;
  /** What is being counted, e.g. "students supported". */
  label: string;
  /** The year the target applies to. */
  year: number | null;
  target: number | null;
  current: number | null;
  confirmed: boolean;
};

export const goals: Goal[] = [
  { id: 'students', label: 'students supported', year: null, target: null, current: null, confirmed: false },
  { id: 'storm-relief', label: 'families reached by storm relief', year: null, target: null, current: null, confirmed: false },
  { id: 'marginalized', label: 'orphans and elderly supported', year: null, target: null, current: null, confirmed: false },
];

// ---------------------------------------------------------------------------
// Fixed identity (rarely changes)
// ---------------------------------------------------------------------------
export const identity = {
  name: 'maiCare Foundation Inc.',
  shortName: 'maiCare',
  description:
    'A non-stock, non-profit foundation in San Carlos City, Pangasinan.',
  /** Public site address. Set in Phase 3 (preview link) and Phase 9 (domain). */
  siteUrl: null as string | null,
};
