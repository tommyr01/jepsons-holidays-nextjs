import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { fleetVehicles } from '@/data/fleet';
import { businessInfo } from '@/data/business';
import { generateMeta, metaDescriptions } from '@/lib/seo/meta';
import { generateVehicleSchema, generateBreadcrumbSchema } from '@/lib/seo/schema';
import { SchemaMarkup } from '@/components/seo/SchemaMarkup';
import { Phone, Check, Star, Users, Fuel, Calendar, Settings, Shield } from 'lucide-react';

interface VehiclePageProps {
  params: {
    vehicle: string;
  };
}

export async function generateMetadata({
  params,
}: VehiclePageProps): Promise<Metadata> {
  const vehicle = fleetVehicles.find(v => v.id === params.vehicle);
  
  if (!vehicle) {
    return generateMeta({
      title: 'Vehicle Not Found',
      description: 'The vehicle you are looking for could not be found.',
      path: `/vehicles/${params.vehicle}`,
      noindex: true
    });
  }

  const title = `Hire ${vehicle.title} | ${businessInfo.name}`;
  const description = metaDescriptions.vehiclePage(vehicle.name);

  return generateMeta({
    title,
    description,
    path: `/vehicles/${params.vehicle}`
  });
}

export default function VehiclePage({ params }: VehiclePageProps) {
  const vehicle = fleetVehicles.find(v => v.id === params.vehicle);
  
  if (!vehicle) {
    notFound();
  }

  const otherVehicles = fleetVehicles.filter(v => v.id !== vehicle.id).slice(0, 3);
  
  const vehicleSchema = generateVehicleSchema(vehicle);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Our Fleet', url: '/fleet' },
    { name: vehicle.title, url: `/vehicles/${vehicle.id}` }
  ]);

  return (
    <>
      <SchemaMarkup schema={vehicleSchema} />
      <SchemaMarkup schema={breadcrumbSchema} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-orange-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                {vehicle.badge}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {vehicle.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {vehicle.description}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center">
                  <Users className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{vehicle.sleeps}</div>
                  <div className="text-sm text-gray-600">Sleeps</div>
                </div>
                <div className="text-center">
                  <Calendar className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{vehicle.berths}</div>
                  <div className="text-sm text-gray-600">Berth</div>
                </div>
                <div className="text-center">
                  <Fuel className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                  <div className="text-sm font-bold text-gray-900">{vehicle.engine}</div>
                  <div className="text-sm text-gray-600">Engine</div>
                </div>
                <div className="text-center">
                  <Settings className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                  <div className="text-sm font-bold text-gray-900">{vehicle.transmission}</div>
                  <div className="text-sm text-gray-600">Gearbox</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${businessInfo.phone.replace(/\s/g, '')}`}
                  className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Book for £{vehicle.pricePerNight}/night
                </a>
                <div className="text-center py-4">
                  <div className="flex items-center justify-center gap-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="font-bold text-lg">{vehicle.rating}</span>
                    <span className="text-gray-600">({vehicle.reviews} reviews)</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-200 rounded-lg h-96">
                {/* Placeholder for vehicle image gallery */}
                <div className="flex items-center justify-center h-full text-gray-500">
                  Vehicle Image Gallery
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Description */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About the {vehicle.name}
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p>{vehicle.detailedDescription}</p>
                
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Standard Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {vehicle.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What's Included</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {vehicle.included.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-orange-50 p-6 rounded-lg sticky top-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Pricing</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Per night</span>
                    <span className="text-2xl font-bold text-orange-500">£{vehicle.pricePerNight}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Weekly rate</span>
                    <span className="text-xl font-bold text-gray-900">£{vehicle.pricePerWeek}</span>
                  </div>
                  <div className="text-sm text-gray-500 border-t pt-3">
                    Prices include comprehensive insurance and 24/7 support
                  </div>
                </div>
                
                <h4 className="text-lg font-bold text-gray-900 mt-6 mb-3">Optional Extras</h4>
                <div className="space-y-2 text-sm">
                  {vehicle.optional.map((extra) => (
                    <div key={extra} className="text-gray-600">• {extra}</div>
                  ))}
                </div>
                
                <a
                  href={`tel:${businessInfo.phone.replace(/\s/g, '')}`}
                  className="w-full mt-6 bg-orange-500 text-white px-6 py-3 rounded-full font-bold text-center block hover:bg-orange-600 transition-colors"
                >
                  Call to Book
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Technical Specifications
          </h2>
          <div className="bg-white rounded-lg p-8 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Dimensions</h4>
                <p className="text-gray-600">Length: {vehicle.length}</p>
                <p className="text-gray-600">Year: {vehicle.year}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Engine</h4>
                <p className="text-gray-600">{vehicle.engine}</p>
                <p className="text-gray-600">{vehicle.transmission}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Capacity</h4>
                <p className="text-gray-600">Sleeps: {vehicle.sleeps}</p>
                <p className="text-gray-600">Berths: {vehicle.berths}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Rating</h4>
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-bold">{vehicle.rating}/5</span>
                </div>
                <p className="text-gray-600">{vehicle.reviews} reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Vehicles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Other Vehicles in Our Fleet
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherVehicles.map((otherVehicle) => (
              <Link key={otherVehicle.id} href={`/vehicles/${otherVehicle.id}`} className="group">
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-gray-200">
                    {/* Placeholder for vehicle image */}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                      {otherVehicle.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{otherVehicle.description}</p>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-2xl font-bold text-orange-500">£{otherVehicle.pricePerNight}/night</span>
                      <span className="text-sm text-gray-500">{otherVehicle.berths} berth</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{otherVehicle.rating} ({otherVehicle.reviews} reviews)</span>
                    </div>
                  </div>
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
            Ready to Book the {vehicle.name}?
          </h2>
          <p className="text-xl text-white mb-8">
            Call us today to check availability and secure your dates
          </p>
          <a
            href={`tel:${businessInfo.phone.replace(/\s/g, '')}`}
            className="inline-flex items-center gap-2 bg-white text-orange-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            <Phone className="w-5 h-5" />
            Call {businessInfo.phone} Now
          </a>
        </div>
      </section>
    </>
  );
}