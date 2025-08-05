export interface HolidayHome {
  readonly id: string;
  readonly name: string;
  readonly title: string;
  readonly description: string;
  readonly detailedDescription: string;
  readonly location: string;
  readonly image: string;
  readonly gallery: readonly string[];
  readonly badge: string;
  readonly priceFromPerNight: number;
  readonly priceFromPerWeek: number;
  readonly rating: number;
  readonly reviews: number;
  readonly sleeps: number;
  readonly bedrooms: number;
  readonly bathrooms: number;
  readonly features: readonly string[];
  readonly included: readonly string[];
  readonly nearby: readonly string[];
  readonly bookingNote: string;
}

export const holidayHomes: HolidayHome[] = [
  {
    id: 'pwllheli-3bed',
    name: 'Pwllheli 3 Bedroom',
    title: 'Pwllheli 3 Bedroom Holiday Home',
    description: 'Luxury 3-bedroom holiday home near Abersoch with stunning sea and harbour views.',
    detailedDescription: 'Our premium 3-bedroom holiday home in Pwllheli offers the perfect base for exploring North Wales. Located near the charming seaside town of Abersoch, this luxury accommodation provides stunning sea and harbour views. Just 500 yards from slipway access and close to the majestic Snowdon mountain range and exciting bike parks, it&apos;s ideal for families seeking both relaxation and adventure.',
    location: 'Pwllheli, North Wales',
    image: '/images/holiday-homes/pwllheli-3bed-hero.jpg',
    gallery: [
      '/images/holiday-homes/pwllheli-3bed-exterior.jpg',
      '/images/holiday-homes/pwllheli-3bed-lounge.jpg',
      '/images/holiday-homes/pwllheli-3bed-kitchen.jpg',
      '/images/holiday-homes/pwllheli-3bed-bedroom.jpg',
      '/images/holiday-homes/pwllheli-3bed-view.jpg'
    ],
    badge: 'Sea Views',
    priceFromPerNight: 120,
    priceFromPerWeek: 700,
    rating: 4.8,
    reviews: 156,
    sleeps: 6,
    bedrooms: 3,
    bathrooms: 2,
    features: [
      'Stunning sea and harbour views',
      '3 comfortable bedrooms',
      '2 modern bathrooms',
      'Fully equipped kitchen',
      'Spacious living area',
      'Private parking',
      'Garden with outdoor furniture',
      'WiFi throughout'
    ],
    included: [
      'Bed linen and towels',
      'Kitchen equipment',
      'WiFi internet access',
      'Private car parking',
      'Garden furniture',
      'Welcome pack'
    ],
    nearby: [
      'Abersoch Beach (2 miles)',
      'Snowdon Mountain Range (15 miles)',
      'Zip World Velocity (12 miles)',
      'Portmeirion Village (20 miles)',
      'Pwllheli Marina (0.5 miles)',
      'Local shops and restaurants (0.3 miles)'
    ],
    bookingNote: 'Enquire for dates before booking. Also available through Sykes Cottages.'
  },
  {
    id: 'loch-lomond',
    name: 'Loch Lomond',
    title: 'Loch Lomond Holiday Home',
    description: 'Picturesque 6-person holiday home at the northern tip of Loch Lomond in Ardlui Holiday Park.',
    detailedDescription: 'Escape to our beautiful holiday home situated at the northern tip of the stunning Loch Lomond. Located within the peaceful Ardlui Holiday Park, this accommodation offers breathtaking water views and direct access to a wealth of outdoor activities. Perfect for families and groups who want to explore the Trossachs National Park and enjoy the tranquil beauty of Scotland&apos;s most famous loch.',
    location: 'Ardlui, Loch Lomond, Scotland',
    image: '/images/holiday-homes/loch-lomond-hero.jpg',
    gallery: [
      '/images/holiday-homes/loch-lomond-exterior.jpg',
      '/images/holiday-homes/loch-lomond-lounge.jpg',
      '/images/holiday-homes/loch-lomond-kitchen.jpg',
      '/images/holiday-homes/loch-lomond-bedroom.jpg',
      '/images/holiday-homes/loch-lomond-loch-view.jpg'
    ],
    badge: 'Loch Views',
    priceFromPerNight: 110,
    priceFromPerWeek: 650,
    rating: 4.9,
    reviews: 203,
    sleeps: 6,
    bedrooms: 3,
    bathrooms: 2,
    features: [
      'Spectacular Loch Lomond views',
      'Within Ardlui Holiday Park',
      '3 comfortable bedrooms',
      '2 bathrooms with shower',
      'Open plan living area',
      'Fully equipped kitchen',
      'Private deck/patio',
      'Central heating'
    ],
    included: [
      'Bed linen and towels',
      'Kitchen equipment and utensils',
      'WiFi internet access',
      'Car parking space',
      'Access to park facilities',
      'Welcome information pack'
    ],
    nearby: [
      'Loch Lomond shoreline (50 yards)',
      'Trossachs National Park (on doorstep)',
      'Ben Lomond hiking trail (5 miles)',
      'Inverarnan Hotel (1 mile)',
      'Falls of Falloch (2 miles)',
      'Crianlarich village (8 miles)'
    ],
    bookingNote: 'Enquire for dates before booking. Subject to park opening times and seasonal availability.'
  },
  {
    id: 'pwllheli-2bed',
    name: 'Pwllheli 2 Bedroom',
    title: 'Pwllheli 2 Bedroom Holiday Home',
    description: 'Cozy 2-bedroom holiday home near Abersoch with beautiful sea and harbour views.',
    detailedDescription: 'Our charming 2-bedroom holiday home in Pwllheli provides the perfect intimate getaway for couples or small families. With the same stunning sea and harbour views as our larger property, this cozy accommodation is ideally located near Abersoch and the Snowdonia region. Enjoy easy access to beautiful beaches, mountain adventures, and the rich culture of North Wales.',
    location: 'Pwllheli, North Wales',
    image: '/images/holiday-homes/pwllheli-2bed-hero.jpg',
    gallery: [
      '/images/holiday-homes/pwllheli-2bed-exterior.jpg',
      '/images/holiday-homes/pwllheli-2bed-lounge.jpg',
      '/images/holiday-homes/pwllheli-2bed-kitchen.jpg',
      '/images/holiday-homes/pwllheli-2bed-bedroom.jpg',
      '/images/holiday-homes/pwllheli-2bed-view.jpg'
    ],
    badge: 'Intimate Stay',
    priceFromPerNight: 95,
    priceFromPerWeek: 580,
    rating: 4.7,
    reviews: 124,
    sleeps: 6,
    bedrooms: 2,
    bathrooms: 1,
    features: [
      'Beautiful sea and harbour views',
      '2 comfortable bedrooms',
      '1 modern bathroom',
      'Compact fully equipped kitchen',
      'Cozy living area',
      'Private parking space',
      'Small private garden',
      'Electric heating'
    ],
    included: [
      'Bed linen and towels',
      'Kitchen equipment',
      'WiFi internet access',
      'Private car parking',
      'Garden furniture',
      'Basic welcome pack'
    ],
    nearby: [
      'Abersoch Beach (2 miles)',
      'Snowdonia National Park (15 miles)',
      'Pwllheli town center (0.5 miles)',
      'Local beaches (0.8 miles)',
      'Golf courses (3 miles)',
      'Restaurants and pubs (0.4 miles)'
    ],
    bookingNote: 'Enquire for dates before booking. Perfect for couples and small families.'
  }
] as const;

// Helper functions
export function getHolidayHomeBySlug(slug: string): HolidayHome | undefined {
  return holidayHomes.find(home => home.id === slug);
}

export function getHolidayHomesByLocation(location: string): HolidayHome[] {
  return holidayHomes.filter(home => 
    home.location.toLowerCase().includes(location.toLowerCase())
  );
}