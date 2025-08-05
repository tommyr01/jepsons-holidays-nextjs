import { businessInfo, organizationSchema } from '@/data/business';
import { FleetVehicle } from '@/data/fleet';
import { Location } from '@/data/locations';
import { Service } from '@/data/services';

// Generate LocalBusiness schema
export function generateLocalBusinessSchema() {
  return {
    ...organizationSchema,
    "@type": ["VehicleRentalBusiness", "LocalBusiness"],
    "priceRange": "££",
    "currenciesAccepted": "GBP",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Free Parking" },
      { "@type": "LocationFeatureSpecification", "name": "24/7 Support" },
      { "@type": "LocationFeatureSpecification", "name": "Pet Friendly Options" },
      { "@type": "LocationFeatureSpecification", "name": "Airport Pickup Available" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Motorhome Rental Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Motorhome Hire" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Holiday Home Rental" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Airport Collection" } }
      ]
    }
  };
}

// Generate Vehicle schema for fleet pages
export function generateVehicleSchema(vehicle: FleetVehicle) {
  return {
    "@context": "https://schema.org",
    "@type": "Vehicle",
    "name": vehicle.title,
    "description": vehicle.detailedDescription,
    "brand": {
      "@type": "Brand",
      "name": "Fiat Ducato" // You might want to make this dynamic
    },
    "model": vehicle.name,
    "vehicleConfiguration": `${vehicle.berths} berth motorhome`,
    "vehicleEngine": {
      "@type": "EngineSpecification",
      "name": vehicle.engine
    },
    "vehicleTransmission": vehicle.transmission,
    "numberOfDoors": 4,
    "seatingCapacity": vehicle.sleeps,
    "modelDate": vehicle.year,
    "offers": {
      "@type": "Offer",
      "priceCurrency": "GBP",
      "price": vehicle.pricePerNight,
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": vehicle.pricePerNight,
        "priceCurrency": "GBP",
        "unitText": "DAY"
      },
      "seller": {
        "@type": "Organization",
        "name": businessInfo.name
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": vehicle.rating,
        "reviewCount": vehicle.reviews
      }
    }
  };
}

// Generate BreadcrumbList schema
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://jepsonsholidays.co.uk${item.url}`
    }))
  };
}

// Generate Service schema
export function generateServiceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": businessInfo.name
    },
    "areaServed": businessInfo.serviceAreas.map(area => ({
      "@type": "Place",
      "name": area
    })),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": service.title,
      "itemListElement": service.features.map(feature => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": feature
        }
      }))
    }
  };
}

// Generate FAQ schema
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

// Generate Location/Place schema
export function generatePlaceSchema(location: Location) {
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": `${location.name} - Motorhome Hire Service Area`,
    "description": location.description,
    "address": {
      "@type": "PostalAddress",
      "addressRegion": location.region,
      "addressCountry": "UK"
    },
    "containsPlace": location.areas.map(area => ({
      "@type": "Place",
      "name": area
    }))
  };
}

// Note: SchemaMarkup component is in components/seo/SchemaMarkup.tsx