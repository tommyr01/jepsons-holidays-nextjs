export interface Service {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly shortDescription: string;
  readonly description: string;
  readonly image: string;
  readonly icon: string;
  readonly badge: string;
  readonly price: string;
  readonly features: readonly string[];
  readonly category: 'feature' | 'duration' | 'convenience' | 'audience';
}

export const services: Service[] = [
  // Feature-based services
  {
    id: '7-berth',
    slug: '7-berth-motorhome-hire',
    title: '7 Berth Motorhome Hire',
    shortDescription: 'Our largest motorhomes for groups and extended families.',
    description: 'Experience the ultimate in group travel with our 7-berth motorhomes. Perfect for large families, groups of friends, or those who simply want maximum space and comfort on their touring holiday.',
    image: '/images/services/7-berth.jpg',
    icon: 'Users',
    badge: 'Spacious',
    price: 'From £175/night',
    features: [
      'Sleeps up to 7 people comfortably',
      'Multiple separate sleeping areas',
      'Large kitchen and dining area',
      'Spacious bathroom facilities',
      'Ample storage for extended trips',
      'Perfect for families with children'
    ],
    category: 'feature'
  },
  {
    id: '6-berth',
    slug: '6-berth-motorhome-hire',
    title: '6 Berth Motorhome Hire',
    shortDescription: 'Ideal family motorhomes with premium features.',
    description: 'Our 6-berth motorhomes offer the perfect balance of space and maneuverability. With comfortable sleeping for six and all the amenities of home, these vehicles are ideal for family adventures.',
    image: '/images/services/6-berth.jpg',
    icon: 'Home',
    badge: 'Family Size',
    price: 'From £155/night',
    features: [
      'Comfortable sleeping for 6',
      'Separate bedroom areas',
      'Full kitchen facilities',
      'Entertainment systems',
      'Outdoor awning included',
      'Child-friendly layouts'
    ],
    category: 'feature'
  },
  {
    id: 'pet-friendly',
    slug: 'pet-friendly-motorhome-hire',
    title: 'Pet Friendly Motorhome Hire',
    shortDescription: 'Bring your furry friends on your adventure.',
    description: 'Don\'t leave your beloved pets behind! Our pet-friendly motorhomes are specially prepared to accommodate your four-legged family members, with easy-clean surfaces and secure areas.',
    image: '/images/services/pet-friendly.jpg',
    icon: 'Heart',
    badge: 'Pet Friendly',
    price: 'From £89/night + £50',
    features: [
      'Pet-safe interiors',
      'Easy-clean surfaces',
      'Secure pet areas',
      'Pet bedding provided',
      'Local pet-friendly site guide',
      'Pet first aid kit included'
    ],
    category: 'feature'
  },
  {
    id: 'automatic',
    slug: 'automatic-motorhome-hire',
    title: 'Automatic Motorhome Hire',
    shortDescription: 'Easy-drive automatic transmission motorhomes.',
    description: 'Make your motorhome adventure effortless with our automatic transmission vehicles. Perfect for those new to motorhoming or anyone who prefers the convenience of automatic driving.',
    image: '/images/services/automatic.jpg',
    icon: 'Zap',
    badge: 'Easy Drive',
    price: 'From £135/night',
    features: [
      'Smooth automatic transmission',
      'Cruise control included',
      'Hill-start assist',
      'Parking sensors',
      'Reversing cameras',
      'Perfect for beginners'
    ],
    category: 'feature'
  },
  {
    id: 'bike-rack',
    slug: 'motorhome-hire-bike-rack',
    title: 'Motorhome Hire with Bike Rack',
    shortDescription: 'Explore further with bikes included.',
    description: 'Combine motorhome touring with cycling adventures. Our vehicles with bike racks let you explore beyond where four wheels can take you, perfect for active holidays.',
    image: '/images/services/bike-rack.jpg',
    icon: 'Bike',
    badge: 'Active',
    price: 'From £89/night',
    features: [
      'Secure bike rack for 2-4 bikes',
      'Electric bike compatible',
      'Bike locks included',
      'Cycling route maps',
      'Basic bike maintenance kit',
      'Helmet storage'
    ],
    category: 'feature'
  },
  {
    id: 'awning',
    slug: 'motorhome-hire-awning',
    title: 'Motorhome Hire with Awning',
    shortDescription: 'Extra outdoor living space for relaxation.',
    description: 'Extend your living space into the great outdoors with our motorhomes featuring premium awnings. Perfect for longer stays and making the most of sunny days.',
    image: '/images/services/awning.jpg',
    icon: 'Tent',
    badge: 'Outdoor Living',
    price: 'From £125/night',
    features: [
      'Wind-out awning included',
      'Outdoor furniture provided',
      'LED awning lights',
      'Privacy screens available',
      'Awning groundsheet',
      'Easy one-person operation'
    ],
    category: 'feature'
  },
  // Duration-based services
  {
    id: 'weekend',
    slug: 'weekend-motorhome-hire',
    title: 'Weekend Motorhome Hire',
    shortDescription: 'Short breaks and weekend getaways.',
    description: 'Escape for a weekend adventure with our flexible short-term hire options. Perfect for trying motorhoming or quick getaways to your favorite destinations.',
    image: '/images/services/weekend.jpg',
    icon: 'Calendar',
    badge: 'Short Break',
    price: 'From £250/weekend',
    features: [
      'Friday to Monday hire',
      'Flexible collection times',
      'Weekend route suggestions',
      'Quick orientation included',
      'All essentials provided',
      'Last-minute availability'
    ],
    category: 'duration'
  },
  {
    id: 'long-term',
    slug: 'long-term-motorhome-hire',
    title: 'Long Term Motorhome Hire',
    shortDescription: 'Extended adventures with special rates.',
    description: 'Planning an extended tour? Our long-term hire options offer exceptional value for adventures lasting two weeks or more, with special rates and additional support.',
    image: '/images/services/long-term.jpg',
    icon: 'Clock',
    badge: 'Best Value',
    price: '20% off 14+ days',
    features: [
      'Discounted weekly rates',
      'Extended insurance coverage',
      'European travel permitted',
      'Mid-hire servicing included',
      'Flexible return dates',
      'Storage solutions available'
    ],
    category: 'duration'
  },
  // Convenience services
  {
    id: 'manchester-airport',
    slug: 'manchester-airport-motorhome-hire',
    title: 'Manchester Airport Pickup',
    shortDescription: 'Start your adventure straight from the airport.',
    description: 'Fly in and drive away! Our Manchester Airport pickup service means you can start your UK motorhome adventure the moment you land. We\'ll meet you at the airport with your fully prepared vehicle.',
    image: '/images/services/manchester-airport.jpg',
    icon: 'Plane',
    badge: 'Convenient',
    price: '£75 airport delivery',
    features: [
      'Airport collection service',
      'Flight delay accommodation',
      'Pre-stocked groceries option',
      'Return to airport available',
      'Secure parking included',
      '24/7 collection times'
    ],
    category: 'convenience'
  },
  {
    id: 'liverpool-airport',
    slug: 'liverpool-airport-motorhome-hire',
    title: 'Liverpool Airport Pickup',
    shortDescription: 'Convenient collection from Liverpool Airport.',
    description: 'Start your motorhome holiday directly from Liverpool Airport. We provide a seamless pickup service with full orientation, perfect for international visitors or those flying in from across the UK.',
    image: '/images/services/liverpool-airport.jpg',
    icon: 'MapPin',
    badge: 'Easy Start',
    price: '£85 airport delivery',
    features: [
      'Meet and greet service',
      'Airport transfer included',
      'Comprehensive handover',
      'Route planning assistance',
      'Luggage storage if needed',
      'Express check-in available'
    ],
    category: 'convenience'
  },
  // Special features
  {
    id: 'unlimited-mileage',
    slug: 'unlimited-mileage-motorhome-hire',
    title: 'Unlimited Mileage',
    shortDescription: 'Explore without limits on our premium packages.',
    description: 'Don\'t let mileage restrictions limit your adventure. Our unlimited mileage packages give you the freedom to explore every corner of the UK and beyond without watching the odometer.',
    image: '/images/services/unlimited-mileage.jpg',
    icon: 'Navigation',
    badge: 'Freedom',
    price: 'Included in Premium',
    features: [
      'No mileage restrictions',
      'UK and Europe coverage',
      'GPS navigation included',
      'Route planning support',
      'Fuel efficiency tips',
      'Scenic route guides'
    ],
    category: 'feature'
  },
  {
    id: 'european-insurance',
    slug: 'motorhome-hire-european-insurance',
    title: 'European Travel Insurance',
    shortDescription: 'Full coverage for continental adventures.',
    description: 'Take your adventure across the Channel with our comprehensive European insurance package. Explore France, Spain, Italy and beyond with complete peace of mind.',
    image: '/images/services/european-insurance.jpg',
    icon: 'Shield',
    badge: 'Europe Ready',
    price: '£150/week extra',
    features: [
      'Full European coverage',
      'Green card included',
      'Breakdown repatriation',
      'Medical travel insurance',
      'Ferry booking assistance',
      'European camping guides'
    ],
    category: 'feature'
  }
] as const;

// Helper functions
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}

export function getServicesByCategory(category: Service['category']): Service[] {
  return services.filter(service => service.category === category);
}