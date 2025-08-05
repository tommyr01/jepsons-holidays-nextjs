'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { navigationItems } from '@/data/navigation';
import { businessInfo } from '@/data/business';
import { Menu, X, Phone } from 'lucide-react';
// import { cn } from '@/lib/utils';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky bg-white shadow-md z-50 top-0 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <h1 className="text-gray-900 text-2xl font-bold">
                Jepson&apos;s <span className="text-orange-500">Holidays</span>
              </h1>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center gap-x-8">
            {navigationItems.map((item) => (
              <Link 
                key={item.id} 
                href={item.href} 
                className="text-gray-800 text-sm font-bold tracking-wider uppercase hover:text-orange-500 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center gap-x-4">
            <a 
              href={`tel:${businessInfo.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-2 bg-orange-500 text-white px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-orange-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{businessInfo.phone}</span>
            </a>
          </div>
          
          <button 
            aria-label="Toggle menu" 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-800" />
            ) : (
              <Menu className="w-6 h-6 text-gray-800" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <nav className="px-4 py-4 space-y-4">
            {navigationItems.map((item) => (
              <Link 
                key={item.id} 
                href={item.href} 
                className="block text-gray-800 text-base font-semibold hover:text-orange-500 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a 
              href={`tel:${businessInfo.phone.replace(/\s/g, '')}`}
              className="flex items-center justify-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-orange-600 transition-colors mt-4"
            >
              <Phone className="w-4 h-4" />
              <span>Call {businessInfo.phone}</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}