// Core business information for NAP consistency
export const businessInfo = {
  name: "Jepson's Holidays",
  legalName: "Jepson's Holidays Ltd",
  description: "Family-owned motorhome hire company serving the North West, Ribble Valley, and beyond since 1985. Specializing in luxury motorhome rentals and holiday homes.",
  phone: "01200 442244",
  email: "enquiries@jepsonsholidays.co.uk",
  address: {
    streetAddress: "Ribble View Business Park",
    addressLocality: "Clitheroe",
    addressRegion: "Lancashire",
    postalCode: "BB7 2AB",
    addressCountry: "UK"
  },
  geo: {
    latitude: 53.8708,
    longitude: -2.3915
  },
  openingHours: [
    "Mo-Fr 09:00-17:30",
    "Sa 09:00-17:00",
    "Su 10:00-16:00"
  ],
  socialMedia: {
    facebook: "https://facebook.com/jepsonsholidays",
    instagram: "https://instagram.com/jepsonsholidays",
    twitter: "https://twitter.com/jepsonsholidays"
  },
  serviceAreas: [
    "Ribble Valley",
    "Lancashire",
    "North West England",
    "Lake District",
    "Yorkshire Dales",
    "Preston",
    "Blackburn",
    "Burnley",
    "Lancaster"
  ],
  founded: "1985",
  logo: "/images/jepsons-logo.svg",
  image: "/images/jepsons-office.jpg"
} as const;

// For structured data
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "VehicleRentalBusiness",
  "@id": "https://jepsonsholidays.co.uk/#organization",
  "name": businessInfo.name,
  "legalName": businessInfo.legalName,
  "description": businessInfo.description,
  "url": "https://jepsonsholidays.co.uk",
  "logo": `https://jepsonsholidays.co.uk${businessInfo.logo}`,
  "image": `https://jepsonsholidays.co.uk${businessInfo.image}`,
  "telephone": businessInfo.phone,
  "email": businessInfo.email,
  "address": {
    "@type": "PostalAddress",
    ...businessInfo.address
  },
  "geo": {
    "@type": "GeoCoordinates",
    ...businessInfo.geo
  },
  "openingHoursSpecification": businessInfo.openingHours.map(hours => {
    const [days, times] = hours.split(' ');
    const [open, close] = times.split('-');
    return {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": days,
      "opens": open,
      "closes": close
    };
  }),
  "sameAs": Object.values(businessInfo.socialMedia),
  "areaServed": businessInfo.serviceAreas.map(area => ({
    "@type": "Place",
    "name": area
  })),
  "foundingDate": businessInfo.founded
};