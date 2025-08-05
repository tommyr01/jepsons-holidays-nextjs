import { Metadata } from 'next';
import { businessInfo } from '@/data/business';

interface MetaProps {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article';
  image?: string;
  noindex?: boolean;
}

export function generateMeta({
  title,
  description,
  path,
  type = 'website',
  image = businessInfo.image,
  noindex = false
}: MetaProps): Metadata {
  const url = `https://jepsonsholidays.co.uk${path}`;
  const fullTitle = `${title} | ${businessInfo.name}`;
  
  return {
    title: fullTitle,
    description,
    metadataBase: new URL('https://jepsonsholidays.co.uk'),
    alternates: {
      canonical: url
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: businessInfo.name,
      images: [{
        url: image,
        width: 1200,
        height: 630,
        alt: title
      }],
      locale: 'en_GB',
      type
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image]
    },
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex
      }
    }
  };
}

// Common meta descriptions
export const metaDescriptions = {
  home: `${businessInfo.name} - Family-owned motorhome hire in ${businessInfo.address.addressLocality}, Lancashire. Luxury motorhomes from 2-7 berth. Pet-friendly options. Call ${businessInfo.phone} for best prices.`,
  
  locationPage: (location: string) => 
    `Motorhome hire ${location} from ${businessInfo.name}. Collection from ${businessInfo.address.addressLocality} or delivery available. 2-7 berth motorhomes. Call ${businessInfo.phone} to book.`,
  
  servicePage: (service: string) => 
    `${service} from ${businessInfo.name} in ${businessInfo.address.addressLocality}. Premium motorhomes with full insurance and 24/7 support. Book online or call ${businessInfo.phone}.`,
  
  vehiclePage: (vehicle: string) => 
    `Hire the ${vehicle} motorhome from ${businessInfo.name}. Based in ${businessInfo.address.addressLocality}, serving all of Lancashire and beyond. View specs and book online.`,
  
  blogPost: (topic: string) => 
    `${topic} - Expert advice from ${businessInfo.name}, Lancashire's trusted motorhome hire specialists since ${businessInfo.founded}. Call ${businessInfo.phone} for more info.`
};