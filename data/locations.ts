export interface Location {
  readonly id: string;
  readonly name: string;
  readonly slug: string;
  readonly region: string;
  readonly description: string;
  readonly areas: string[];
  readonly distance: string;
  readonly driveTime: string;
  readonly highlights: string[];
  readonly popularRoutes: string[];
  readonly image: string;
}

export const locations: Location[] = [
  {
    id: 'ribble-valley',
    name: 'Ribble Valley',
    slug: 'ribble-valley',
    region: 'Lancashire',
    description: 'Our home base in the beautiful Ribble Valley, gateway to the Yorkshire Dales and Forest of Bowland.',
    areas: ['Clitheroe', 'Whalley', 'Longridge', 'Ribchester'],
    distance: '0 miles',
    driveTime: 'Base location',
    highlights: [
      'Pendle Hill',
      'Clitheroe Castle',
      'Forest of Bowland AONB',
      'Ribble Way walking route'
    ],
    popularRoutes: [
      'Ribble Valley Food Trail',
      'Pendle Witch Trail',
      'Three Peaks Scenic Route'
    ],
    image: '/images/locations/ribble-valley.jpg'
  },
  {
    id: 'lake-district',
    name: 'Lake District',
    slug: 'lake-district',
    region: 'Cumbria',
    description: 'England\'s premier National Park with stunning lakes, mountains, and charming villages.',
    areas: ['Windermere', 'Keswick', 'Ambleside', 'Grasmere', 'Coniston'],
    distance: '45 miles',
    driveTime: '1 hour',
    highlights: [
      'Lake Windermere',
      'Scafell Pike',
      'Beatrix Potter\'s House',
      'Dove Cottage'
    ],
    popularRoutes: [
      'Central Lakes Tour',
      'Northern Lakes Circuit',
      'Hardknott Pass Adventure'
    ],
    image: '/images/locations/lake-district.jpg'
  },
  {
    id: 'yorkshire-dales',
    name: 'Yorkshire Dales',
    slug: 'yorkshire-dales',
    region: 'Yorkshire',
    description: 'Spectacular limestone scenery, charming market towns, and excellent motorhome facilities.',
    areas: ['Skipton', 'Grassington', 'Hawes', 'Settle', 'Malham'],
    distance: '25 miles',
    driveTime: '35 minutes',
    highlights: [
      'Malham Cove',
      'Aysgarth Falls',
      'Bolton Abbey',
      'Ribblehead Viaduct'
    ],
    popularRoutes: [
      'Dales Way',
      'Settle-Carlisle Railway Route',
      'Wensleydale Cheese Trail'
    ],
    image: '/images/locations/yorkshire-dales.jpg'
  },
  {
    id: 'north-york-moors',
    name: 'North York Moors',
    slug: 'north-york-moors',
    region: 'Yorkshire',
    description: 'Wild moorland, historic abbeys, and the stunning Yorkshire coast.',
    areas: ['Pickering', 'Helmsley', 'Whitby', 'Goathland'],
    distance: '85 miles',
    driveTime: '1 hour 45 minutes',
    highlights: [
      'Whitby Abbey',
      'North Yorkshire Moors Railway',
      'Rievaulx Abbey',
      'Robin Hood\'s Bay'
    ],
    popularRoutes: [
      'Moors to Sea Route',
      'Abbey Trail',
      'Steam Railway Circuit'
    ],
    image: '/images/locations/north-york-moors.jpg'
  },
  {
    id: 'preston',
    name: 'Preston',
    slug: 'preston',
    region: 'Lancashire',
    description: 'Historic city with excellent transport links and gateway to the Lancashire coast.',
    areas: ['City Centre', 'Fulwood', 'Penwortham', 'Bamber Bridge'],
    distance: '15 miles',
    driveTime: '25 minutes',
    highlights: [
      'Harris Museum',
      'Avenham Park',
      'Preston Docks',
      'Brockholes Nature Reserve'
    ],
    popularRoutes: [
      'Guild Wheel Cycling Route',
      'Ribble Link Canal',
      'Lancashire Coastal Way'
    ],
    image: '/images/locations/preston.jpg'
  },
  {
    id: 'blackburn',
    name: 'Blackburn',
    slug: 'blackburn',
    region: 'Lancashire',
    description: 'Industrial heritage meets natural beauty in the heart of Lancashire.',
    areas: ['Town Centre', 'Darwen', 'Rishton', 'Great Harwood'],
    distance: '12 miles',
    driveTime: '20 minutes',
    highlights: [
      'Blackburn Cathedral',
      'Corporation Park',
      'Witton Country Park',
      'Darwen Tower'
    ],
    popularRoutes: [
      'Darwen Moors Walk',
      'Leeds-Liverpool Canal',
      'Pennine Bridleway'
    ],
    image: '/images/locations/blackburn.jpg'
  },
  {
    id: 'burnley',
    name: 'Burnley',
    slug: 'burnley',
    region: 'Lancashire',
    description: 'Gateway to the South Pennines with easy access to stunning countryside.',
    areas: ['Town Centre', 'Padiham', 'Nelson', 'Colne'],
    distance: '18 miles',
    driveTime: '30 minutes',
    highlights: [
      'Towneley Hall',
      'Singing Ringing Tree',
      'Pendle Hill',
      'Thompson Park'
    ],
    popularRoutes: [
      'Pendle Way',
      'Burnley Way',
      'Brontë Country Route'
    ],
    image: '/images/locations/burnley.jpg'
  },
  {
    id: 'lancaster',
    name: 'Lancaster',
    slug: 'lancaster',
    region: 'Lancashire',
    description: 'Historic city with castle, canals, and gateway to the Lake District.',
    areas: ['City Centre', 'Morecambe', 'Heysham', 'Carnforth'],
    distance: '28 miles',
    driveTime: '40 minutes',
    highlights: [
      'Lancaster Castle',
      'Williamson Park',
      'Lancaster Canal',
      'Morecambe Bay'
    ],
    popularRoutes: [
      'Bay Cycle Way',
      'Lune Valley Route',
      'Forest of Bowland Circuit'
    ],
    image: '/images/locations/lancaster.jpg'
  },
  {
    id: 'clitheroe',
    name: 'Clitheroe',
    slug: 'clitheroe',
    region: 'Lancashire',
    description: 'Our local market town, perfectly positioned for exploring the Ribble Valley.',
    areas: ['Town Centre', 'Waddington', 'Chatburn', 'Sabden'],
    distance: '2 miles',
    driveTime: '5 minutes',
    highlights: [
      'Clitheroe Castle',
      'Grand Theatre',
      'Market Street',
      'Brungerley Park'
    ],
    popularRoutes: [
      'Ribble Valley Sculpture Trail',
      'Tolkien Trail',
      'Lancashire Cheese Route'
    ],
    image: '/images/locations/clitheroe.jpg'
  },
  {
    id: 'north-west',
    name: 'North West England',
    slug: 'north-west',
    region: 'Regional',
    description: 'Explore the diverse landscapes and attractions of North West England.',
    areas: ['Manchester', 'Liverpool', 'Chester', 'Carlisle'],
    distance: 'Various',
    driveTime: '30 mins - 2 hours',
    highlights: [
      'Manchester Museums',
      'Liverpool Waterfront',
      'Chester Rows',
      'Hadrian\'s Wall'
    ],
    popularRoutes: [
      'Cheshire Ring Canal',
      'Cumbrian Coast',
      'Peak District Loop'
    ],
    image: '/images/locations/north-west.jpg'
  },
  {
    id: 'lancashire',
    name: 'Lancashire',
    slug: 'lancashire',
    region: 'County',
    description: 'From countryside to coast, Lancashire offers diverse motorhome destinations.',
    areas: ['Blackpool', 'Southport', 'Lytham', 'Fleetwood'],
    distance: 'Various',
    driveTime: '20 mins - 1 hour',
    highlights: [
      'Blackpool Tower',
      'Southport Pier',
      'Martin Mere',
      'Beacon Fell'
    ],
    popularRoutes: [
      'Lancashire Coastal Way',
      'Ribble Estuary Route',
      'Forest of Bowland AONB'
    ],
    image: '/images/locations/lancashire.jpg'
  }
] as const;

// Helper function to get location by slug
export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find(location => location.slug === slug);
}

// Helper function to get nearby locations
export function getNearbyLocations(locationId: string, limit: number = 3): Location[] {
  return locations
    .filter(loc => loc.id !== locationId)
    .slice(0, limit);
}