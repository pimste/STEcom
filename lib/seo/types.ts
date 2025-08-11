// Core SEO Types for STEcom SEO System
export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  schema?: SchemaMarkup[];
  hreflang?: HreflangEntry[];
}

export interface SchemaMarkup {
  '@context': string;
  '@type': string;
  [key: string]: any;
}

export interface HreflangEntry {
  hreflang: string;
  href: string;
}

export interface KeywordData {
  keyword: string;
  searchVolume: number;
  difficulty: number;
  cpc: number;
  relatedKeywords: string[];
  questions: string[];
  intent: 'informational' | 'navigational' | 'transactional';
}

export interface LocalSEOData {
  businessName: string;
  address: string;
  phone: string;
  email: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  serviceAreas: string[];
  businessHours: Record<string, string>;
}

export interface PerformanceMetrics {
  lcp: number;
  cls: number;
  fid: number;
  ttfb: number;
  bundleSize: number;
  imageOptimization: boolean;
}

export interface GreyHatConfig {
  enabled: boolean;
  hiddenContent: boolean;
  trafficSimulation: boolean;
  commentSpinning: boolean;
  contentScraping: boolean;
  linkPyramids: boolean;
}

export interface SEOConfig {
  baseUrl: string;
  defaultLocale: string;
  supportedLocales: string[];
  greyHat: GreyHatConfig;
  tracking: {
    googleAnalytics: string;
    googleSearchConsole: string;
    bingWebmaster: string;
  };
}
