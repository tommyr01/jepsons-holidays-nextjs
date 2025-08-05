export interface NavigationItem {
  readonly id: string;
  readonly label: string;
  readonly href: string;
}

export const navigationItems: NavigationItem[] = [
  { id: 'motorhome-hire', label: 'Motorhome Hire', href: '/services/motorhome-hire' },
  { id: 'locations', label: 'Locations', href: '/locations' },
  { id: 'fleet', label: 'Our Fleet', href: '/fleet' },
  { id: 'holiday-homes', label: 'Holiday Homes', href: '/holiday-homes' },
  { id: 'blog', label: 'Blog', href: '/blog' },
  { id: 'about', label: 'About', href: '/about' },
  { id: 'contact', label: 'Contact', href: '/contact' }
] as const;