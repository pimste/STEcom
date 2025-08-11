'use client';

import SEODashboard from '../../components/SEODashboard';
import { SEOMetadata } from '../../lib/seo/types';

export default function SEODashboardPage() {
  // Sample metadata for demonstration
  const sampleMetadata: SEOMetadata = {
    title: 'STEcom - Web Development & Design',
    description: 'Professional web development and design services in Amsterdam. Expert React, Next.js, and SEO solutions.',
    keywords: ['web development', 'amsterdam', 'react development', 'next.js', 'seo services'],
    canonical: 'https://stecom.nl',
    ogTitle: 'STEcom - Web Development Amsterdam',
    ogDescription: 'Expert web development services in Amsterdam',
    ogImage: '/og-image.jpg',
    twitterTitle: 'STEcom - Web Development',
    twitterDescription: 'Professional web development services',
    twitterImage: '/twitter-image.jpg'
  };

  return (
    <SEODashboard 
      currentUrl="https://stecom.nl/seo-dashboard"
      metadata={sampleMetadata}
    />
  );
}
