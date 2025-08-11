import { SEOConfig } from './types';

// Main SEO Configuration for STEcom
export const seoConfig: SEOConfig = {
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || 'https://stecom.nl',
  defaultLocale: 'nl',
  supportedLocales: ['nl', 'en', 'de', 'fr'],
  
  greyHat: {
    enabled: process.env.NODE_ENV === 'production' && process.env.GREY_HAT_ENABLED === 'true',
    hiddenContent: false,
    trafficSimulation: false,
    commentSpinning: false,
    contentScraping: false,
    linkPyramids: false,
  },
  

  
  tracking: {
    googleAnalytics: process.env.GA_MEASUREMENT_ID || '',
    googleSearchConsole: process.env.GSC_PROPERTY || '',
    bingWebmaster: process.env.BING_WEBMASTER || '',
  },
};

// Keyword clusters for SEO optimization
export const keywordClusters = {
  webDevelopment: {
    pillarTopic: 'Web Development',
    primaryKeywords: [
      'web development amsterdam',
      'react developer netherlands',
      'next.js development company',
      'frontend development services',
      'e-commerce website development',
      'custom web application development'
    ]
  },
  
  seo: {
    pillarTopic: 'SEO Services',
    primaryKeywords: [
      'seo services amsterdam',
      'technical seo optimization',
      'local seo netherlands',
      'e-commerce seo services',
      'seo audit amsterdam'
    ]
  },
  
  design: {
    pillarTopic: 'Web Design',
    primaryKeywords: [
      'web design amsterdam',
      'ui ux design services',
      'responsive web design',
      'landing page design',
      'conversion optimization'
    ]
  }
};

// Local SEO data for multiple locations
export const localSEOData = {
  amsterdam: {
    businessName: 'STEcom - Web Development Amsterdam',
    address: 'Amsterdam, Netherlands',
    phone: '+31 20 123 4567',
    email: 'info@stecom.nl',
    coordinates: { lat: 52.3676, lng: 4.9041 },
    serviceAreas: ['Amsterdam', 'Rotterdam', 'The Hague', 'Utrecht', 'Eindhoven'],
    businessHours: {
      'Monday': '9:00 AM - 6:00 PM',
      'Tuesday': '9:00 AM - 6:00 PM',
      'Wednesday': '9:00 AM - 6:00 PM',
      'Thursday': '9:00 AM - 6:00 PM',
      'Friday': '9:00 AM - 6:00 PM',
      'Saturday': '10:00 AM - 4:00 PM',
      'Sunday': 'Closed'
    }
  }
};

// Schema templates for different content types
export const schemaTemplates = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'STEcom',
    url: 'https://stecom.nl',
    logo: 'https://stecom.nl/logo.png',
    description: 'Professional web development and design services in Amsterdam',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Amsterdam',
      addressCountry: 'NL'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+31-20-123-4567',
      contactType: 'customer service'
    }
  },
  
  service: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Web Development Services',
    provider: {
      '@type': 'Organization',
      name: 'STEcom'
    },
    areaServed: {
      '@type': 'Country',
      name: 'Netherlands'
    }
  },
  
  faq: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: []
  }
};
