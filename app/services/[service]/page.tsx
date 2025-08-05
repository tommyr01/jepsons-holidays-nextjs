import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { getServiceBySlug, services, getServicesByCategory } from '@/data/services';
import { fleetVehicles } from '@/data/fleet';
import { businessInfo } from '@/data/business';
import { generateMeta, metaDescriptions } from '@/lib/seo/meta';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/seo/schema';
import { SchemaMarkup } from '@/components/seo/SchemaMarkup';
import { Phone, Check, Star, Users, Heart, Zap, Calendar } from 'lucide-react';

interface ServicePageProps {
  params: {
    service: string;
  };
}

const iconMap = {
  'Users': Users,
  'Heart': Heart,
  'Zap': Zap,
  'Calendar': Calendar,
  'Check': Check,
};

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const service = getServiceBySlug(params.service);
  
  if (!service) {
    return generateMeta({
      title: 'Service Not Found',
      description: 'The service you are looking for could not be found.',
      path: `/services/${params.service}`,
      noindex: true
    });
  }

  const title = `${service.title} | ${businessInfo.name}`;
  const description = metaDescriptions.servicePage(service.title);

  return generateMeta({
    title,
    description,
    path: `/services/${params.service}`
  });
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.service);
  
  if (!service) {
    notFound();
  }

  const relatedServices = getServicesByCategory(service.category).filter(s => s.id !== service.id).slice(0, 3);
  const suitableVehicles = fleetVehicles.filter(vehicle => {
    // Filter vehicles based on service type
    if (service.id === '7-berth') return vehicle.berths === 7;
    if (service.id === '6-berth') return vehicle.berths === 6;
    if (service.id === 'automatic') return vehicle.transmission === 'Automatic';
    return true; // Show all vehicles for other services
  }).slice(0, 3);
  
  const serviceSchema = generateServiceSchema(service);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: service.title, url: `/services/${service.slug}` }
  ]);

  const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Check;

  return (
    <>
      <SchemaMarkup schema={serviceSchema} />
      <SchemaMarkup schema={breadcrumbSchema} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-orange-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <IconComponent className="w-10 h-10 text-orange-500" />
            </div>
            <span className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-semibold mb-4">
              {service.badge}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {service.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${businessInfo.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call {businessInfo.phone}
              </a>
              <span className="inline-flex items-center justify-center px-8 py-4 text-2xl font-bold text-orange-500">
                {service.price}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What's Included
              </h2>
              <div className="space-y-4">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-orange-500 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Choose This Service?
              </h3>
              <div className="space-y-4">
                <p className="text-gray-600">
                  At {businessInfo.name}, we understand that every motorhome adventure is unique. 
                  Our {service.title.toLowerCase()} option is designed to meet your specific needs and preferences.
                </p>
                <p className="text-gray-600">
                  With over {new Date().getFullYear() - parseInt(businessInfo.founded)} years of experience in the motorhome hire industry, 
                  we've perfected our service to ensure you have the best possible touring experience.
                </p>
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Expert Tip</h4>
                  <p className="text-gray-600">
                    {service.category === 'feature' && "Book early to secure your preferred vehicle, especially during peak season (March-October)."}
                    {service.category === 'duration' && "Consider our longer rental periods for better value and more flexibility."}
                    {service.category === 'convenience' && "Let us know your flight details so we can plan the perfect pickup time."}
                    {service.category === 'audience' && "This service is particularly popular with returning customers - book early!"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Suitable Vehicles */}
      {suitableVehicles.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Perfect Vehicles for This Service
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
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-2xl font-bold text-orange-500">£{vehicle.pricePerNight}/night</span>
                        <span className="text-sm text-gray-500">{vehicle.berths} berth</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">{vehicle.rating} ({vehicle.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Related Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedServices.map((relatedService) => {
                const RelatedIcon = iconMap[relatedService.icon as keyof typeof iconMap] || Check;
                return (
                  <Link key={relatedService.id} href={`/services/${relatedService.slug}`} className="group">
                    <div className="text-center p-6 border rounded-lg hover:shadow-md transition-shadow">
                      <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                        <RelatedIcon className="w-8 h-8 text-orange-500" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{relatedService.title}</h3>
                      <p className="text-gray-600 mb-4">{relatedService.shortDescription}</p>
                      <p className="text-orange-500 font-semibold">{relatedService.price}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Book {service.title}?
          </h2>
          <p className="text-xl text-white mb-8">
            Call us today to check availability and secure your booking
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