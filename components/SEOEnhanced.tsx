'use client';

import { Helmet } from 'react-helmet-async';
import { SEOMetadata, SchemaMarkup } from '../lib/seo/types';
import { 
  generateOpenGraphTags, 
  generateTwitterCardTags,
  generateLSIKeywords 
} from '../lib/seo/utils';
import { seoConfig } from '../lib/seo/config';

interface SEOEnhancedProps {
  metadata: SEOMetadata;
  schema?: SchemaMarkup[];
  noindex?: boolean;
  nofollow?: boolean;
  canonical?: string;
  hreflang?: Array<{ hreflang: string; href: string }>;
  structuredData?: SchemaMarkup[];
  performance?: {
    preload?: string[];
    prefetch?: string[];
  };
}

export default function SEOEnhanced({
  metadata,
  schema = [],
  noindex = false,
  nofollow = false,
  canonical,
  hreflang = [],
  structuredData = [],
  performance
}: SEOEnhancedProps) {
  const {
    title,
    description,
    keywords,
    ogTitle,
    ogDescription,
    ogImage,
    twitterTitle,
    twitterDescription,
    twitterImage
  } = metadata;

  // Generate LSI keywords for enhanced semantic relevance
  const lsiKeywords = keywords.length > 0 ? generateLSIKeywords(keywords[0]) : [];
  const allKeywords = [...keywords, ...lsiKeywords];

  // Generate Open Graph tags
  const ogTags = generateOpenGraphTags(
    ogTitle || title,
    ogDescription || description,
    ogImage
  );

  // Generate Twitter Card tags
  const twitterTags = generateTwitterCardTags(
    twitterTitle || title,
    twitterDescription || description,
    twitterImage
  );

  // Combine all schema markup
  const allSchema = [...schema, ...structuredData];

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords.join(', ')} />
      <meta name="author" content="STEcom" />
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Hreflang Tags for International SEO */}
      {hreflang.map(({ hreflang, href }) => (
        <link key={hreflang} rel="alternate" hrefLang={hreflang} href={href} />
      ))}
      
      {/* Open Graph Tags */}
      {Object.entries(ogTags).map(([property, content]) => (
        <meta key={property} property={property} content={content} />
      ))}
      
      {/* Twitter Card Tags */}
      {Object.entries(twitterTags).map(([name, content]) => (
        <meta key={name} name={name} content={content} />
      ))}
      
      {/* Performance Optimizations */}
      {performance?.preload?.map((resource, index) => (
        <link key={`preload-${index}`} rel="preload" href={resource} as="fetch" crossOrigin="anonymous" />
      ))}
      
      {performance?.prefetch?.map((resource, index) => (
        <link key={`prefetch-${index}`} rel="prefetch" href={resource} />
      ))}
      
      {/* Structured Data / Schema Markup */}
      {allSchema.map((schemaData, index) => (
        <script
          key={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData)
          }}
        />
      ))}
      
      {/* Additional SEO Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      
      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      
      {/* Verification Tags */}
      {seoConfig.tracking.googleAnalytics && (
        <meta name="google-site-verification" content={seoConfig.tracking.googleAnalytics} />
      )}
      
      {/* Favicon and App Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />
    </Helmet>
  );
}

// Hook for dynamic SEO updates
export function useSEOUpdate(metadata: SEOMetadata) {
  // This hook can be used to dynamically update SEO metadata
  // based on user interactions or content changes
  return {
    updateMetadata: (newMetadata: Partial<SEOMetadata>) => {
      // Implementation for dynamic metadata updates
      console.log('Updating SEO metadata:', newMetadata);
    }
  };
}
