export interface FleetVehicle {
  readonly id: string;
  readonly name: string;
  readonly title: string;
  readonly description: string;
  readonly detailedDescription: string;
  readonly image: string;
  readonly gallery: readonly string[];
  readonly badge: string;
  readonly pricePerNight: number;
  readonly pricePerWeek: number;
  readonly rating: number;
  readonly reviews: number;
  readonly berths: number;
  readonly sleeps: number;
  readonly length: string;
  readonly engine: string;
  readonly transmission: string;
  readonly year: number;
  readonly features: readonly string[];
  readonly included: readonly string[];
  readonly optional: readonly string[];
}

export const fleetVehicles: FleetVehicle[] = [
  {
    id: 'nevis',
    name: 'Nevis',
    title: 'Nevis Compact Motorhome',
    description: 'Perfect for couples seeking adventure. Our most popular 2-berth motorhome.',
    detailedDescription: 'The Nevis is our flagship compact motorhome, ideal for couples who want to explore the UK\'s most scenic routes without compromising on comfort. Built on a reliable Fiat Ducato chassis, this 2-berth beauty offers exceptional fuel economy and easy maneuverability, perfect for navigating narrow Lake District roads or finding that perfect wild camping spot in the Yorkshire Dales.',
    image: '/images/fleet/nevis-hero.jpg',
    gallery: [
      '/images/fleet/nevis-exterior.jpg',
      '/images/fleet/nevis-interior.jpg',
      '/images/fleet/nevis-kitchen.jpg',
      '/images/fleet/nevis-bedroom.jpg'
    ],
    badge: 'Most Popular',
    pricePerNight: 89,
    pricePerWeek: 550,
    rating: 4.9,
    reviews: 127,
    berths: 2,
    sleeps: 2,
    length: '5.4m',
    engine: '2.3L Diesel 140bhp',
    transmission: 'Manual',
    year: 2023,
    features: [
      'Compact kitchen with 3-burner hob',
      'Fridge with freezer compartment',
      'Hot water and heating',
      'Toilet and shower',
      'Solar panel',
      'Bike rack for 2 bikes',
      'Reversing camera',
      'Cruise control'
    ],
    included: [
      'Comprehensive insurance',
      'Breakdown cover',
      'Kitchen equipment',
      'Bedding and towels',
      'Gas bottles',
      'Chemical toilet fluids'
    ],
    optional: [
      'Awning (£40/week)',
      'Satellite TV (£30/week)',
      'Pet package (£50)',
      'BBQ set (£25/week)'
    ]
  },
  {
    id: 'scafell',
    name: 'Scafell',
    title: 'Scafell Family Motorhome',
    description: 'Spacious 4-berth motorhome perfect for family adventures.',
    detailedDescription: 'Named after England\'s highest mountain, the Scafell is built for families who dream big. This 4-berth motorhome offers the perfect balance of space and efficiency, with a clever layout that maximizes living area while maintaining excellent drivability. The rear fixed bed and dinette conversion provide comfortable sleeping for two adults and two children.',
    image: '/images/fleet/scafell-hero.jpg',
    gallery: [
      '/images/fleet/scafell-exterior.jpg',
      '/images/fleet/scafell-lounge.jpg',
      '/images/fleet/scafell-kitchen.jpg',
      '/images/fleet/scafell-beds.jpg'
    ],
    badge: 'Family Favorite',
    pricePerNight: 125,
    pricePerWeek: 750,
    rating: 4.8,
    reviews: 89,
    berths: 4,
    sleeps: 4,
    length: '6.5m',
    engine: '2.3L Diesel 160bhp',
    transmission: 'Manual',
    year: 2023,
    features: [
      'Spacious lounge with dinette',
      'Full kitchen with oven',
      'Large fridge/freezer',
      'Separate toilet and shower',
      'Heating and hot water',
      'External awning',
      'TV/DVD player',
      'USB charging points'
    ],
    included: [
      'Comprehensive insurance',
      'European breakdown cover',
      'All kitchen equipment',
      'Bedding for 4',
      'Outdoor table and chairs',
      'First gas bottle'
    ],
    optional: [
      'Bike rack for 4 bikes (£60/week)',
      'Roof box (£40/week)',
      'WiFi router (£50/week)',
      'Child car seats (£25 each)'
    ]
  },
  {
    id: 'skiddaw',
    name: 'Skiddaw',
    title: 'Skiddaw 7-Berth Motorhome',
    description: 'Our largest motorhome, perfect for extended families or groups.',
    detailedDescription: 'The Skiddaw is the king of our fleet - a magnificent 7-berth motorhome that doesn\'t compromise on luxury or practicality. Named after the Lake District\'s fourth highest peak, this motorhome stands tall with its spacious interior, multiple sleeping areas, and premium amenities. Perfect for large families, groups of friends, or those who simply want the ultimate in motorhome luxury.',
    image: '/images/fleet/skiddaw-hero.jpg',
    gallery: [
      '/images/fleet/skiddaw-exterior.jpg',
      '/images/fleet/skiddaw-lounge.jpg',
      '/images/fleet/skiddaw-kitchen.jpg',
      '/images/fleet/skiddaw-bunks.jpg'
    ],
    badge: '7 Berth',
    pricePerNight: 175,
    pricePerWeek: 1050,
    rating: 4.7,
    reviews: 56,
    berths: 7,
    sleeps: 7,
    length: '7.5m',
    engine: '2.8L Diesel 180bhp',
    transmission: 'Automatic',
    year: 2022,
    features: [
      'Huge lounge area',
      'Full kitchen with dishwasher',
      'Separate toilet and shower rooms',
      'Bunk beds for children',
      'Air conditioning',
      'Satellite TV',
      'External BBQ point',
      'Garage for bikes/storage'
    ],
    included: [
      'Premium insurance package',
      'European breakdown cover',
      'Luxury bedding for 7',
      'Full kitchen equipment set',
      'Outdoor furniture for 7',
      'Two gas bottles'
    ],
    optional: [
      'Trailer for additional storage (£80/week)',
      'Electric bikes x2 (£100/week)',
      'Premium entertainment package (£60/week)',
      'Airport transfer service (POA)'
    ]
  },
  {
    id: 'snowdon',
    name: 'Snowdon',
    title: 'Snowdon Family Motorhome',
    description: 'Premium 6-berth motorhome with luxury features throughout.',
    detailedDescription: 'The Snowdon represents the peak of family motorhome luxury. This premium 6-berth vehicle combines the space needed for family adventures with high-end finishes and features typically found in much more expensive models. With its automatic transmission and comprehensive driver aids, the Snowdon makes long-distance touring a pleasure for drivers of all experience levels.',
    image: '/images/fleet/snowdon-hero.jpg',
    gallery: [
      '/images/fleet/snowdon-exterior.jpg',
      '/images/fleet/snowdon-interior.jpg',
      '/images/fleet/snowdon-master-bed.jpg',
      '/images/fleet/snowdon-bathroom.jpg'
    ],
    badge: 'Premium',
    pricePerNight: 155,
    pricePerWeek: 930,
    rating: 4.9,
    reviews: 73,
    berths: 6,
    sleeps: 6,
    length: '7.0m',
    engine: '2.3L Diesel 160bhp',
    transmission: 'Automatic',
    year: 2024,
    features: [
      'Leather upholstery',
      'Drop-down double bed',
      'Island bed configuration',
      'Premium sound system',
      'Solar panels with lithium batteries',
      'Underfloor heating',
      '4G WiFi system',
      'Rear-view camera system'
    ],
    included: [
      'VIP insurance package',
      'European breakdown and repatriation',
      'Premium bedding and towels',
      'Nespresso machine',
      'Outdoor furniture set',
      'Welcome hamper'
    ],
    optional: [
      'E-bikes x4 (£120/week)',
      'Paddleboard package (£80/week)',
      'Luxury awning with furniture (£100/week)',
      'Pet luxury package (£75)'
    ]
  }
] as const;