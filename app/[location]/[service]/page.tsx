import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { getLocationBySlug, getNearbyLocations } from '@/data/locations';
import { fleetVehicles } from '@/data/fleet';
import { businessInfo } from '@/data/business';
import { generateMeta, metaDescriptions } from '@/lib/seo/meta';
import { generatePlaceSchema, generateBreadcrumbSchema } from '@/lib/seo/schema';
import { SchemaMarkup } from '@/components/seo/SchemaMarkup';
import { Phone, MapPin, Calendar, Star, Clock, Users } from 'lucide-react';

interface LocationServicePageProps {
  params: {
    location: string;
    service: string;
  };
}

export async function generateMetadata({
  params,
}: LocationServicePageProps): Promise<Metadata> {
  const location = getLocationBySlug(params.location);
  
  if (!location) {
    return generateMeta({
      title: 'Page Not Found',
      description: 'The page you are looking for could not be found.',
      path: `/${params.location}/${params.service}`,
      noindex: true
    });
  }

  const title = `Motorhome Hire ${location.name} | ${businessInfo.name}`;
  const description = metaDescriptions.locationPage(location.name);

  return generateMeta({
    title,
    description,
    path: `/${params.location}/${params.service}`
  });
}

export default function LocationServicePage({ params }: LocationServicePageProps) {
  const location = getLocationBySlug(params.location);
  
  if (!location) {
    notFound();
  }

  const nearbyLocations = getNearbyLocations(location.id);
  const suitableVehicles = fleetVehicles.slice(0, 3); // Show top 3 vehicles
  
  const placeSchema = generatePlaceSchema(location);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Locations', url: '/locations' },
    { name: `${location.name} Motorhome Hire`, url: `/${location.slug}/motorhome-hire` }
  ]);

  return (
    <>
      <SchemaMarkup schema={placeSchema} />
      <SchemaMarkup schema={breadcrumbSchema} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-orange-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Motorhome Hire {location.name}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Premium motorhome rental serving {location.name} and surrounding areas. 
              Based in {businessInfo.address.addressLocality}, we&apos;re just {location.driveTime} away from {location.name}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${businessInfo.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call {businessInfo.phone}
              </a>
              <Link
                href="/fleet"
                className="inline-flex items-center justify-center gap-2 bg-white text-orange-500 border-2 border-orange-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-50 transition-colors"
              >
                View Available Vehicles
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Location Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Exploring {location.name} by Motorhome
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {location.description} Located in {location.region}, this stunning area offers endless opportunities for motorhome adventures.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-orange-500" />
                  <span><strong>Distance from our base:</strong> {location.distance}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-orange-500" />
                  <span><strong>Drive time:</strong> {location.driveTime}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-orange-500" />
                  <span><strong>Popular with:</strong> Families, couples, and group adventures</span>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Areas We Serve</h3>
                <div className="grid grid-cols-2 gap-2">
                  {location.areas.map((area) => (
                    <span key={area} className="text-gray-600">• {area}</span>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Must-Visit Attractions</h3>
              <div className="space-y-3">
                {location.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-center gap-3">
                    <Star className="w-4 h-4 text-orange-500" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6 mt-8">Popular Routes</h3>
              <div className="space-y-3">
                {location.popularRoutes.map((route) => (
                  <div key={route} className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-orange-500" />
                    <span className="text-gray-700">{route}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Suitable Vehicles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Perfect Vehicles for {location.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {suitableVehicles.map((vehicle) => (
              <Link key={vehicle.id} href={`/vehicles/${vehicle.id}`} className="group">
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-gray-200">
                    {/* Placeholder for vehicle image */}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                      {vehicle.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{vehicle.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-orange-500">£{vehicle.pricePerNight}/night</span>
                      <span className="text-sm text-gray-500">{vehicle.berths} berth</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Locations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Other Popular Destinations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {nearbyLocations.map((nearbyLocation) => (
              <Link
                key={nearbyLocation.id}
                href={`/${nearbyLocation.slug}/motorhome-hire`}
                className="flex items-center gap-3 p-4 bg-white rounded-lg border hover:shadow-md transition-shadow"
              >
                <MapPin className="w-5 h-5 text-orange-500" />
                <div>
                  <h3 className="font-semibold text-gray-900">{nearbyLocation.name}</h3>
                  <p className="text-sm text-gray-600">{nearbyLocation.driveTime}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Explore {location.name}?
          </h2>
          <p className="text-xl text-white mb-8">
            Book your motorhome today for the perfect {location.name} adventure
          </p>
          <a
            href={`tel:${businessInfo.phone.replace(/\s/g, '')}`}
            className="inline-flex items-center gap-2 bg-white text-orange-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            <Phone className="w-5 h-5" />
            Call {businessInfo.phone} to Book
          </a>
        </div>
      </section>
    </>
  );
}