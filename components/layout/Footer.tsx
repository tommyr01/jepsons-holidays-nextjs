import Link from 'next/link';
import { businessInfo } from '@/data/business';
import { locations } from '@/data/locations';
import { services } from '@/data/services';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  const quickLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Our Fleet', href: '/fleet' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'FAQs', href: '/blog/motorhome-hire-faq-uk' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
  ];

  const topLocations = locations.slice(0, 6);
  const topServices = services.filter(s => s.category === 'feature').slice(0, 6);

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">
              Jepson&apos;s <span className="text-orange-500">Holidays</span>
            </h3>
            <p className="mb-4 text-sm">
              {businessInfo.description.replace("'", "&apos;")}
            </p>
            <div className="space-y-2">
              <a 
                href={`tel:${businessInfo.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2 text-sm hover:text-orange-500 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{businessInfo.phone}</span>
              </a>
              <a 
                href={`mailto:${businessInfo.email}`}
                className="flex items-center gap-2 text-sm hover:text-orange-500 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{businessInfo.email}</span>
              </a>
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 mt-0.5" />
                <address className="not-italic">
                  {businessInfo.address.streetAddress}<br />
                  {businessInfo.address.addressLocality}<br />
                  {businessInfo.address.addressRegion} {businessInfo.address.postalCode}
                </address>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-sm hover:text-orange-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Locations */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Popular Locations</h4>
            <ul className="space-y-2">
              {topLocations.map((location) => (
                <li key={location.id}>
                  <Link 
                    href={`/${location.slug}/motorhome-hire`}
                    className="text-sm hover:text-orange-500 transition-colors"
                  >
                    {location.name} Motorhome Hire
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {topServices.map((service) => (
                <li key={service.id}>
                  <Link 
                    href={`/services/${service.slug}`}
                    className="text-sm hover:text-orange-500 transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <a 
                href={businessInfo.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href={businessInfo.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={businessInfo.socialMedia.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-center">
              © {new Date().getFullYear()} {businessInfo.name}. All rights reserved. Est. {businessInfo.founded}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}