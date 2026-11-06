/**
 * Site navigation: the one list used by the header, the mobile menu and the footer.
 * To add, rename or reorder a page link, change it here only.
 *
 * The header's main button is labelled "Donate". There are NO online payments,
 * so it goes to the How to Donate section on the Get Involved page.
 */
export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  { label: 'Programs', href: '/programs/' },
  { label: 'Get Involved', href: '/get-involved/' },
  { label: 'Events & News', href: '/events/' },
  { label: 'Contact', href: '/contact/' },
];

export const donateLink: NavLink = {
  label: 'Donate',
  href: '/get-involved/#how-to-donate',
};

export const privacyLink: NavLink = { label: 'Privacy Notice', href: '/privacy/' };
