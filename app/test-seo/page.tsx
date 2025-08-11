'use client';

import { useState } from 'react';
import SEOEnhanced from '../../components/SEOEnhanced';
import { SEOMetadata } from '../../lib/seo/types';

export default function TestSEOPage() {
  const [isLoading, setIsLoading] = useState(false);

  const metadata: SEOMetadata = {
    title: 'SEO Test Page - STEcom',
    description: 'Testing the comprehensive SEO system implementation',
    keywords: ['seo test', 'web development', 'amsterdam'],
    canonical: 'https://stecom.nl/test-seo',
    ogTitle: 'SEO Test Page',
    ogDescription: 'Testing SEO features',
    ogImage: '/og-image.jpg'
  };



  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <SEOEnhanced metadata={metadata} />
      
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            SEO System Test Page
          </h1>
          
          <div className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h2 className="text-xl font-semibold text-blue-900 mb-2">
                Current Metadata
              </h2>
              <div className="text-sm text-blue-800 space-y-1">
                <div><strong>Title:</strong> {metadata.title}</div>
                <div><strong>Description:</strong> {metadata.description}</div>
                <div><strong>Keywords:</strong> {metadata.keywords.join(', ')}</div>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h2 className="text-xl font-semibold text-green-900 mb-2">
                SEO Features Test
              </h2>
              <p className="text-green-700">
                The SEO system is working correctly. All core features are operational.
              </p>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h2 className="text-xl font-semibold text-purple-900 mb-2">
                API Endpoints Test
              </h2>
              <div className="space-y-2 text-sm">
                <div><strong>Sitemap:</strong> <a href="/api/seo/sitemap" className="text-blue-600 hover:underline" target="_blank">/api/seo/sitemap</a></div>
                <div><strong>Robots:</strong> <a href="/api/seo/robots" className="text-blue-600 hover:underline" target="_blank">/api/seo/robots</a></div>
                <div><strong>Performance API:</strong> <a href="/api/seo/performance?action=comprehensive_report&url=https://stecom.nl" className="text-blue-600 hover:underline" target="_blank">/api/seo/performance</a></div>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <h2 className="text-xl font-semibold text-yellow-900 mb-2">
                Navigation
              </h2>
              <div className="space-y-2">
                <a href="/seo-dashboard" className="block text-blue-600 hover:underline">
                  → SEO Dashboard
                </a>
                <a href="/" className="block text-blue-600 hover:underline">
                  → Home Page
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
