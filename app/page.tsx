import Link from 'next/link';
import { businessInfo } from '@/data/business';
import { fleetVehicles } from '@/data/fleet';
import { locations } from '@/data/locations';
import { services } from '@/data/services';
import { Phone, MapPin, Calendar } from 'lucide-react';

export default function Home() {
  const featuredVehicles = fleetVehicles.slice(0, 3);
  const topLocations = locations.slice(0, 6);
  const featuredServices = services.filter(s => s.category === 'feature').slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-orange-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Luxury Motorhome Hire in Lancashire
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Family-owned since {businessInfo.founded}, we offer premium motorhomes from our {businessInfo.address.addressLocality} base. 
              Perfect for exploring the Lake District, Yorkshire Dales, and beyond.
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
                View Our Fleet
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Premium Fleet</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredVehicles.map((vehicle) => (
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

      {/* Locations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Popular Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topLocations.map((location) => (
              <Link
                key={location.id}
                href={`/${location.slug}/motorhome-hire`}
                className="flex items-center gap-3 p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <MapPin className="w-5 h-5 text-orange-500" />
                <div>
                  <h3 className="font-semibold text-gray-900">{location.name}</h3>
                  <p className="text-sm text-gray-600">{location.driveTime}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <Link key={service.id} href={`/services/${service.slug}`} className="group">
                <div className="text-center">
                  <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                    <Calendar className="w-10 h-10 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.shortDescription}</p>
                  <p className="text-orange-500 font-semibold mt-2">{service.price}</p>
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
            Ready for Your Next Adventure?
          </h2>
          <p className="text-xl text-white mb-8">
            Book your motorhome today and explore the UK in comfort and style
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
