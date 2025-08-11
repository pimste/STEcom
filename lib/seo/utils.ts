import { SEOMetadata, SchemaMarkup, KeywordData } from './types';
import { seoConfig, schemaTemplates } from './config';

// SEO Utility Functions for STEcom

/**
 * Generate optimized title tags with keyword density and length optimization
 */
export function generateTitle(keyword: string, brand: string = 'STEcom', maxLength: number = 60): string {
  const baseTitle = `${keyword} | ${brand}`;
  return baseTitle.length > maxLength 
    ? `${keyword} - ${brand}` 
    : baseTitle;
}

/**
 * Generate meta descriptions with optimal length and keyword inclusion
 */
export function generateDescription(
  content: string, 
  keywords: string[], 
  maxLength: number = 160
): string {
  let description = content;
  
  // Ensure primary keyword is included
  if (keywords.length > 0 && !description.toLowerCase().includes(keywords[0].toLowerCase())) {
    description = `${keywords[0]}: ${description}`;
  }
  
  // Truncate to optimal length
  if (description.length > maxLength) {
    description = description.substring(0, maxLength - 3) + '...';
  }
  
  return description;
}

/**
 * Generate LSI (Latent Semantic Indexing) keywords from primary keyword
 */
export function generateLSIKeywords(primaryKeyword: string): string[] {
  const lsiMap: Record<string, string[]> = {
    'web development': [
      'frontend development', 'backend development', 'full-stack development',
      'react development', 'next.js development', 'javascript development',
      'website development', 'web application development', 'custom development'
    ],
    'seo': [
      'search engine optimization', 'technical seo', 'local seo',
      'on-page seo', 'off-page seo', 'seo audit', 'keyword optimization',
      'link building', 'content seo'
    ],
    'web design': [
      'ui design', 'ux design', 'responsive design', 'user interface design',
      'user experience design', 'website design', 'landing page design',
      'conversion optimization', 'brand design'
    ]
  };
  
  const normalizedKeyword = primaryKeyword.toLowerCase();
  return lsiMap[normalizedKeyword] || [];
}

/**
 * Generate structured FAQ schema from questions and answers
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>): SchemaMarkup {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

/**
 * Generate LocalBusiness schema for location-based SEO
 */
export function generateLocalBusinessSchema(
  businessName: string,
  address: string,
  phone: string,
  coordinates: { lat: number; lng: number }
): SchemaMarkup {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: businessName,
    address: {
      '@type': 'PostalAddress',
      addressLocality: address
    },
    telephone: phone,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: coordinates.lat,
      longitude: coordinates.lng
    },
    url: seoConfig.baseUrl,
    sameAs: [
      'https://www.linkedin.com/company/stecom',
      'https://twitter.com/stecom'
    ]
  };
}

/**
 * Generate Article schema for blog posts and content pages
 */
export function generateArticleSchema(
  title: string,
  description: string,
  author: string,
  publishDate: string,
  modifiedDate?: string,
  image?: string
): SchemaMarkup {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    author: {
      '@type': 'Person',
      name: author
    },
    publisher: {
      '@type': 'Organization',
      name: 'STEcom',
      logo: {
        '@type': 'ImageObject',
        url: `${seoConfig.baseUrl}/logo.png`
      }
    },
    datePublished: publishDate,
    dateModified: modifiedDate || publishDate,
    image: image ? `${seoConfig.baseUrl}${image}` : undefined,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': seoConfig.baseUrl
    }
  };
}

/**
 * Generate BreadcrumbList schema for navigation structure
 */
export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>): SchemaMarkup {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url
    }))
  };
}

/**
 * Generate hreflang tags for international SEO
 */
export function generateHreflangTags(
  path: string,
  locales: string[] = seoConfig.supportedLocales
): Array<{ hreflang: string; href: string }> {
  return locales.map(locale => ({
    hreflang: locale,
    href: `${seoConfig.baseUrl}/${locale}${path}`
  }));
}

/**
 * Optimize image filenames for SEO
 */
export function optimizeImageFilename(originalName: string, keywords: string[]): string {
  const extension = originalName.split('.').pop();
  const baseName = originalName.split('.')[0];
  
  // Include primary keyword in filename
  const primaryKeyword = keywords[0]?.replace(/\s+/g, '-').toLowerCase() || baseName;
  
  return `${primaryKeyword}-${Date.now()}.${extension}`;
}

/**
 * Generate alt text for images with keyword optimization
 */
export function generateAltText(
  imageDescription: string,
  keywords: string[],
  context: string = ''
): string {
  let altText = imageDescription;
  
  // Include primary keyword if not already present
  if (keywords.length > 0 && !altText.toLowerCase().includes(keywords[0].toLowerCase())) {
    altText = `${keywords[0]} - ${altText}`;
  }
  
  // Add context if provided
  if (context) {
    altText = `${altText} ${context}`;
  }
  
  return altText;
}

/**
 * Calculate keyword density in content
 */
export function calculateKeywordDensity(content: string, keyword: string): number {
  const wordCount = content.toLowerCase().split(/\s+/).length;
  const keywordCount = (content.toLowerCase().match(new RegExp(keyword.toLowerCase(), 'g')) || []).length;
  return wordCount > 0 ? (keywordCount / wordCount) * 100 : 0;
}

/**
 * Generate internal linking suggestions based on content similarity
 */
export function suggestInternalLinks(
  currentContent: string,
  availablePages: Array<{ url: string; title: string; keywords: string[] }>,
  maxSuggestions: number = 5
): Array<{ url: string; title: string; relevance: number }> {
  const suggestions = availablePages
    .map(page => {
      const relevance = page.keywords.reduce((score, keyword) => {
        return score + (currentContent.toLowerCase().includes(keyword.toLowerCase()) ? 1 : 0);
      }, 0);
      
      return {
        url: page.url,
        title: page.title,
        relevance
      };
    })
    .filter(suggestion => suggestion.relevance > 0)
    .sort((a, b) => b.relevance - a.relevance)
    .slice(0, maxSuggestions);
    
  return suggestions;
}

/**
 * Generate Open Graph tags for social media optimization
 */
export function generateOpenGraphTags(
  title: string,
  description: string,
  image: string = '/og-image.jpg',
  type: string = 'website'
): Record<string, any> {
  return {
    'og:title': title,
    'og:description': description,
    'og:image': `${seoConfig.baseUrl}${image}`,
    'og:url': seoConfig.baseUrl,
    'og:type': type,
    'og:site_name': 'STEcom',
    'og:locale': seoConfig.defaultLocale,
  };
}

/**
 * Generate Twitter Card tags for Twitter optimization
 */
export function generateTwitterCardTags(
  title: string,
  description: string,
  image: string = '/twitter-image.jpg'
): Record<string, any> {
  return {
    'twitter:card': 'summary_large_image',
    'twitter:title': title,
    'twitter:description': description,
    'twitter:image': `${seoConfig.baseUrl}${image}`,
    'twitter:site': '@stecom',
    'twitter:creator': '@stecom',
  };
}
