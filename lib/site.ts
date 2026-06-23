/* Shared site data: navigation + brand constants. */

export type NavItem = { href: string; label: string };

/* Main navigation (also used, minus Kontakt, in the footer). */
export const NAV_ITEMS: NavItem[] = [
  { href: '/programme', label: 'Programme' },
  { href: '/trainer', label: 'Trainer' },
  { href: '/standort', label: 'Standort' },
  { href: '/galerie', label: 'Galerie' },
  { href: '/news', label: 'News' },
  { href: '/preise', label: 'Preise' },
  { href: '/kontakt', label: 'Kontakt' },
];

/* Footer navigation column (no Kontakt — that lives in the contact column). */
export const FOOTER_ITEMS: NavItem[] = NAV_ITEMS.filter((i) => i.href !== '/kontakt');

export const CONTACT_EMAIL = 'office@nextgen-tennisacademy.at';

/**
 * Base path the site is served under. Empty for local dev and user/org Pages
 * sites; set to "/<repo>" by the GitHub Pages workflow for project sites.
 * Raw <img>/<video> src strings aren't rewritten by Next, so prefix them with
 * asset() to keep them working under a subpath.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
export const asset = (path: string) => `${BASE_PATH}${path}`;
