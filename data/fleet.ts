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
    title: 'Nevis - Autotrail Adventure 65',
    description: 'Perfect for couples seeking adventure. Compact 4-berth with pop-top roof bed and pet-friendly interior.',
    detailedDescription: 'The Nevis is our compact Autotrail Adventure 65, ideal for couples and small families who want to explore the UK\'s most scenic routes without compromising on comfort. Built on a reliable Fiat Ducato chassis, this 4-berth motorhome features a unique pop-top roof bed and pet-friendly interior, perfect for navigating narrow Lake District roads or finding that perfect wild camping spot in the Yorkshire Dales.',
    image: '/images/fleet/nevis-hero.jpg',
    gallery: [
      '/images/fleet/nevis-exterior.jpg',
      '/images/fleet/nevis-interior.jpg',
      '/images/fleet/nevis-kitchen.jpg',
      '/images/fleet/nevis-bedroom.jpg'
    ],
    badge: 'Pet Friendly',
    pricePerNight: 89,
    pricePerWeek: 550,
    rating: 4.9,
    reviews: 127,
    berths: 4,
    sleeps: 4,
    length: '6.3m',
    engine: '2.3L Diesel 140bhp',
    transmission: 'Manual',
    year: 2023,
    features: [
      '4 berth sleeping (pop-top roof bed)',
      'Pet-friendly interior with easy-clean surfaces',
      'Compact kitchen with 3-burner hob',
      'Fridge with freezer compartment',
      'Hot water and heating',
      'Toilet and shower',
      'Reversing camera',
      'Easy to drive and maneuver'
    ],
    included: [
      'UK & EU insurance',
      'Unlimited mileage',
      'Breakdown cover',
      'Kitchen equipment and crockery',
      'Outside table and chairs',
      'LPG gas',
      '8am-10pm helpline',
      'Secure car parking'
    ],
    optional: [
      'Pet package (£50)',
      'Awning (£40/week)',
      'Satellite TV (£30/week)',
      'BBQ set (£25/week)'
    ]
  },
  {
    id: 'helvellyn',
    name: 'Helvellyn',
    title: 'Helvellyn - Rimor Super Brig 95',
    description: 'Spacious 4-berth motorhome with rear fixed single beds and electric drop-down bed.',
    detailedDescription: 'The Helvellyn is our Rimor Super Brig 95, designed for families who value comfort and space. This 4-berth motorhome offers an excellent layout with rear fixed single beds and an electric drop-down bed, providing flexible sleeping arrangements. The spacious interior and practical design make it perfect for family adventures across the UK and Europe.',
    image: '/images/fleet/helvellyn-hero.jpg',
    gallery: [
      '/images/fleet/helvellyn-exterior.jpg',
      '/images/fleet/helvellyn-lounge.jpg',
      '/images/fleet/helvellyn-kitchen.jpg',
      '/images/fleet/helvellyn-beds.jpg'
    ],
    badge: 'Popular Choice',
    pricePerNight: 125,
    pricePerWeek: 750,
    rating: 4.8,
    reviews: 89,
    berths: 4,
    sleeps: 4,
    length: '7.37m',
    engine: '2.3L Diesel 160bhp',
    transmission: 'Manual',
    year: 2023,
    features: [
      '4 berth sleeping',
      'Rear fixed single beds',
      'Electric drop-down bed',
      'Spacious lounge with dinette',
      'Full kitchen with oven',
      'Large fridge/freezer',
      'Separate toilet and shower',
      'Heating and hot water'
    ],
    included: [
      'UK & EU insurance',
      'Unlimited mileage',
      'Breakdown cover',
      'Kitchen equipment and crockery',
      'Outside table and chairs',
      'LPG gas',
      '8am-10pm helpline',
      'Secure car parking'
    ],
    optional: [
      'Bike rack for 4 bikes (£60/week)',
      'Roof box (£40/week)',
      'WiFi router (£50/week)',
      'Child car seats (£25 each)'
    ]
  },
  {
    id: 'scafell',
    name: 'Scafell',
    title: 'Scafell - Rimor Superbrig 69',
    description: 'Premium 4-berth with rear island bed and electric drop-down bed for ultimate comfort.',
    detailedDescription: 'The Scafell is our premium Rimor Superbrig 69, offering the ultimate in comfort and luxury. This 4-berth motorhome features a rear island bed and electric drop-down bed, providing spacious and comfortable sleeping arrangements. With high-end finishes and premium amenities, the Scafell is perfect for those who want the best motorhome experience.',
    image: '/images/fleet/scafell-hero.jpg',
    gallery: [
      '/images/fleet/scafell-exterior.jpg',
      '/images/fleet/scafell-lounge.jpg',
      '/images/fleet/scafell-kitchen.jpg',
      '/images/fleet/scafell-beds.jpg'
    ],
    badge: 'Premium',
    pricePerNight: 155,
    pricePerWeek: 930,
    rating: 4.9,
    reviews: 156,
    berths: 4,
    sleeps: 4,
    length: '7.37m',
    engine: '2.3L Diesel 160bhp',
    transmission: 'Manual',
    year: 2024,
    features: [
      '4 berth luxury sleeping',
      'Rear island bed',
      'Electric drop-down bed',
      'Premium kitchen appliances',
      'Large bathroom with separate shower',
      'Entertainment center with TV/DVD',
      'Solar panels with lithium batteries',
      'Air conditioning'
    ],
    included: [
      'UK & EU insurance',
      'Unlimited mileage',
      'Breakdown cover',
      'Kitchen equipment and crockery',
      'Outside table and chairs',
      'LPG gas',
      '8am-10pm helpline',
      'Secure car parking'
    ],
    optional: [
      'E-bikes x2 (£100/week)',
      'Luxury awning with furniture (£100/week)',
      'Premium entertainment package (£60/week)',
      'Welcome hamper (£50)'
    ]
  },
  {
    id: 'skiddaw',
    name: 'Skiddaw',
    title: 'Skiddaw - Rimor Super Brig Suite',
    description: '4-berth motorhome with rear lounge that converts to double bed and overcab bed.',
    detailedDescription: 'The Skiddaw is our versatile Rimor Super Brig Suite, designed for families who value flexibility and comfort. This 4-berth motorhome features a rear lounge that converts to a double bed and an overcab bed, providing excellent living space during the day and comfortable sleeping at night. The spacious layout makes it perfect for extended family trips.',
    image: '/images/fleet/skiddaw-hero.jpg',
    gallery: [
      '/images/fleet/skiddaw-exterior.jpg',
      '/images/fleet/skiddaw-lounge.jpg',
      '/images/fleet/skiddaw-kitchen.jpg',
      '/images/fleet/skiddaw-beds.jpg'
    ],
    badge: 'Flexible Layout',
    pricePerNight: 135,
    pricePerWeek: 810,
    rating: 4.8,
    reviews: 78,
    berths: 4,
    sleeps: 4,
    length: '7.17m',
    engine: '2.3L Diesel 160bhp',
    transmission: 'Manual',
    year: 2023,
    features: [
      '4 berth sleeping',
      'Rear lounge converts to double bed',
      'Overcab bed',
      'Spacious living area',
      'Full kitchen facilities with oven',
      'Bathroom with shower',
      'Heating and hot water',
      'TV/DVD entertainment system'
    ],
    included: [
      'UK & EU insurance',
      'Unlimited mileage',
      'Breakdown cover',
      'Kitchen equipment and crockery',
      'Outside table and chairs',
      'LPG gas',
      '8am-10pm helpline',
      'Secure car parking'
    ],
    optional: [
      'Bike rack for 4 bikes (£60/week)',
      'Awning with furniture (£80/week)',
      'WiFi router (£50/week)',
      'Child-friendly package (£40/week)'
    ]
  },
  {
    id: 'snowdon',
    name: 'Snowdon',
    title: 'Snowdon - Rimor Seal 67 Plus',
    description: '4-berth motorhome with front dinette that converts to bed and electric drop-down bed.',
    detailedDescription: 'The Snowdon is our efficient Rimor Seal 67 Plus, perfect for families who want premium features in a more compact package. This 4-berth motorhome features a front dinette that converts to a bed and an electric drop-down bed, providing excellent space utilization. Despite its compact size, it doesn\'t compromise on comfort or amenities.',
    image: '/images/fleet/snowdon-hero.jpg',
    gallery: [
      '/images/fleet/snowdon-exterior.jpg',
      '/images/fleet/snowdon-interior.jpg',
      '/images/fleet/snowdon-kitchen.jpg',
      '/images/fleet/snowdon-beds.jpg'
    ],
    badge: 'Compact Premium',
    pricePerNight: 145,
    pricePerWeek: 870,
    rating: 4.7,
    reviews: 65,
    berths: 4,
    sleeps: 4,
    length: '6.45m',
    engine: '2.3L Diesel 140bhp',
    transmission: 'Manual',
    year: 2024,
    features: [
      '4 berth sleeping',
      'Front dinette converts to bed',
      'Electric drop-down bed',
      'Efficient kitchen layout with oven',
      'Bathroom with shower',
      'Heating and hot water',
      'Easy handling and parking',
      'Modern interior design'
    ],
    included: [
      'UK & EU insurance',
      'Unlimited mileage',
      'Breakdown cover',
      'Kitchen equipment and crockery',
      'Outside table and chairs',
      'LPG gas',
      '8am-10pm helpline',
      'Secure car parking'
    ],
    optional: [
      'Bike rack for 2 bikes (£40/week)',
      'Awning (£60/week)',
      'Satellite TV (£30/week)',
      'Premium bedding upgrade (£35/week)'
    ]
  },
  {
    id: 'whernside',
    name: 'Whernside',
    title: 'Whernside - 7 Berth Family',
    description: '7-berth motorhome ideal for large families with rear fixed bunk beds and overcab double bed.',
    detailedDescription: 'The Whernside is our largest motorhome, perfect for big families or groups who need maximum sleeping capacity. This 7-berth motorhome features rear fixed bunk beds and an overcab double bed, providing comfortable accommodation for up to 7 people. With 6 travel seats and a spacious interior, it\'s ideal for large family adventures.',
    image: '/images/fleet/whernside-hero.jpg',
    gallery: [
      '/images/fleet/whernside-exterior.jpg',
      '/images/fleet/whernside-lounge.jpg',
      '/images/fleet/whernside-kitchen.jpg',
      '/images/fleet/whernside-bunks.jpg'
    ],
    badge: 'Large Family',
    pricePerNight: 175,
    pricePerWeek: 1050,
    rating: 4.6,
    reviews: 93,
    berths: 7,
    sleeps: 7,
    length: '7.5m',
    engine: '2.3L Diesel 160bhp',
    transmission: 'Manual',
    year: 2022,
    features: [
      '7 berth sleeping capacity',
      '6 travel seats',
      'Rear fixed bunk beds',
      'Overcab double bed',
      'Large kitchen and dining area',
      'Spacious bathroom',
      'Huge storage capacity',
      'Entertainment system with TV'
    ],
    included: [
      'UK & EU insurance',
      'Unlimited mileage',
      'Breakdown cover',
      'Kitchen equipment and crockery',
      'Outside table and chairs',
      'LPG gas',
      '8am-10pm helpline',
      'Secure car parking'
    ],
    optional: [
      'Bike rack for 6 bikes (£80/week)',
      'Large awning with furniture (£120/week)',
      'WiFi router (£50/week)',
      'Child safety package (£60/week)'
    ]
  },
  {
    id: 'catbells',
    name: 'Catbells',
    title: 'Catbells - Rimor Evo 95 Plus',
    description: '4-berth premium motorhome with modern design and luxury amenities.',
    detailedDescription: 'The Catbells is our newest addition, a luxurious Rimor Evo 95 Plus that represents the latest in motorhome design and technology. This 4-berth premium motorhome features modern styling, cutting-edge amenities, and superior build quality. Perfect for those who want the very latest in motorhome luxury and innovation.',
    image: '/images/fleet/catbells-hero.jpg',
    gallery: [
      '/images/fleet/catbells-exterior.jpg',
      '/images/fleet/catbells-interior.jpg',
      '/images/fleet/catbells-kitchen.jpg',
      '/images/fleet/catbells-bedroom.jpg'
    ],
    badge: 'Newest Addition',
    pricePerNight: 165,
    pricePerWeek: 990,
    rating: 4.9,
    reviews: 42,
    berths: 4,
    sleeps: 4,
    length: '7.3m',
    engine: '2.3L Diesel 160bhp',
    transmission: 'Manual',
    year: 2024,
    features: [
      '4 berth luxury sleeping',
      'Modern interior design',
      'Premium fixtures and fittings',
      'State-of-the-art kitchen',
      'Large bathroom with premium finishes',
      'Advanced entertainment system',
      'Solar panels with smart battery system',
      'LED lighting throughout'
    ],
    included: [
      'UK & EU insurance',
      'Unlimited mileage',
      'Breakdown cover',
      'Kitchen equipment and crockery',
      'Outside table and chairs',
      'LPG gas',
      '8am-10pm helpline',
      'Secure car parking'
    ],
    optional: [
      'E-bikes x2 (£100/week)',
      'Premium entertainment package (£70/week)',
      'Luxury bedding upgrade (£50/week)',
      'Concierge service (£80/week)'
    ]
  }
] as const;