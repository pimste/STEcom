import { seoConfig, keywordClusters } from './config';

export interface SitemapURL {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
  image?: {
    loc: string;
    title?: string;
    caption?: string;
  }[];
}

export interface SitemapConfig {
  baseUrl: string;
  excludePatterns: string[];
  includePatterns: string[];
  defaultPriority: number;
  defaultChangefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
}

// Generate dynamic sitemap URLs based on content clusters
export function generateDynamicSitemap(): SitemapURL[] {
  const urls: SitemapURL[] = [];
  
  // Homepage
  urls.push({
    loc: seoConfig.baseUrl,
    changefreq: 'daily',
    priority: 1.0,
    lastmod: new Date().toISOString()
  });
  
  // Service pages
  urls.push({
    loc: `${seoConfig.baseUrl}/services`,
    changefreq: 'weekly',
    priority: 0.9,
    lastmod: new Date().toISOString()
  });
  
  urls.push({
    loc: `${seoConfig.baseUrl}/services/web-development`,
    changefreq: 'weekly',
    priority: 0.8,
    lastmod: new Date().toISOString()
  });
  
  urls.push({
    loc: `${seoConfig.baseUrl}/services/seo`,
    changefreq: 'weekly',
    priority: 0.8,
    lastmod: new Date().toISOString()
  });
  
  urls.push({
    loc: `${seoConfig.baseUrl}/services/web-design`,
    changefreq: 'weekly',
    priority: 0.8,
    lastmod: new Date().toISOString()
  });
  
  // Location-based pages for local SEO
  const locations = ['amsterdam', 'rotterdam', 'den-haag', 'utrecht', 'eindhoven'];
  locations.forEach(location => {
    urls.push({
      loc: `${seoConfig.baseUrl}/locations/${location}`,
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date().toISOString()
    });
    
    // Service + location combinations
    ['web-development', 'seo', 'web-design'].forEach(service => {
      urls.push({
        loc: `${seoConfig.baseUrl}/services/${service}/${location}`,
        changefreq: 'monthly',
        priority: 0.6,
        lastmod: new Date().toISOString()
      });
    });
  });
  
  // Service pages based on keyword clusters
  Object.entries(keywordClusters).forEach(([clusterKey, cluster]) => {
    // Main service page
    urls.push({
      loc: `${seoConfig.baseUrl}/services/${clusterKey}`,
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date().toISOString()
    });
    
    // Keyword-specific service pages
    cluster.primaryKeywords.forEach(keyword => {
      const slug = keyword.toLowerCase().replace(/\s+/g, '-');
      urls.push({
        loc: `${seoConfig.baseUrl}/services/${clusterKey}/${slug}`,
        changefreq: 'monthly',
        priority: 0.6,
        lastmod: new Date().toISOString()
      });
    });
  });
  
  // Legal pages
  urls.push({
    loc: `${seoConfig.baseUrl}/privacy`,
    changefreq: 'yearly',
    priority: 0.3,
    lastmod: new Date().toISOString()
  });
  
  urls.push({
    loc: `${seoConfig.baseUrl}/terms`,
    changefreq: 'yearly',
    priority: 0.3,
    lastmod: new Date().toISOString()
  });
  
  // Contact page
  urls.push({
    loc: `${seoConfig.baseUrl}/contact`,
    changefreq: 'monthly',
    priority: 0.6,
    lastmod: new Date().toISOString()
  });
  
  return urls;
}

// Generate XML sitemap content
export function generateSitemapXML(urls: SitemapURL[]): string {
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
  const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">';
  const urlsetClose = '</urlset>';
  
  const urlEntries = urls.map(url => {
    let entry = '  <url>\n';
    entry += `    <loc>${url.loc}</loc>\n`;
    
    if (url.lastmod) {
      entry += `    <lastmod>${url.lastmod}</lastmod>\n`;
    }
    
    if (url.changefreq) {
      entry += `    <changefreq>${url.changefreq}</changefreq>\n`;
    }
    
    if (url.priority) {
      entry += `    <priority>${url.priority}</priority>\n`;
    }
    
    // Add image sitemap entries if present
    if (url.image && url.image.length > 0) {
      url.image.forEach(img => {
        entry += '    <image:image>\n';
        entry += `      <image:loc>${img.loc}</image:loc>\n`;
        if (img.title) {
          entry += `      <image:title>${img.title}</image:title>\n`;
        }
        if (img.caption) {
          entry += `      <image:caption>${img.caption}</image:caption>\n`;
        }
        entry += '    </image:image>\n';
      });
    }
    
    entry += '  </url>';
    return entry;
  }).join('\n');
  
  return `${xmlHeader}\n${urlsetOpen}\n${urlEntries}\n${urlsetClose}`;
}

// Generate sitemap index for large sites
export function generateSitemapIndex(sitemaps: Array<{ loc: string; lastmod?: string }>): string {
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
  const sitemapindexOpen = '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  const sitemapindexClose = '</sitemapindex>';
  
  const sitemapEntries = sitemaps.map(sitemap => {
    let entry = '  <sitemap>\n';
    entry += `    <loc>${sitemap.loc}</loc>\n`;
    if (sitemap.lastmod) {
      entry += `    <lastmod>${sitemap.lastmod}</lastmod>\n`;
    }
    entry += '  </sitemap>';
    return entry;
  }).join('\n');
  
  return `${xmlHeader}\n${sitemapindexOpen}\n${sitemapEntries}\n${sitemapindexClose}`;
}

// Generate robots.txt content
export function generateRobotsTxt(
  baseUrl: string = seoConfig.baseUrl,
  sitemapUrl: string = `${seoConfig.baseUrl}/sitemap.xml`,
  customRules: string[] = []
): string {
  const rules = [
    'User-agent: *',
    'Allow: /',
    '',
    // Disallow admin and private areas
    'Disallow: /admin/',
    'Disallow: /api/',
    'Disallow: /_next/',
    'Disallow: /private/',
    '',
    // Allow important directories
    'Allow: /services/',
    'Allow: /content/',
    'Allow: /locations/',
    '',
    // Crawl delay for respectful crawling
    'Crawl-delay: 1',
    '',
    // Sitemap location
    `Sitemap: ${sitemapUrl}`,
    '',
    // Additional sitemaps
    `Sitemap: ${baseUrl}/sitemap-images.xml`,
    `Sitemap: ${baseUrl}/sitemap-news.xml`,
    '',
    // Custom rules
    ...customRules
  ];
  
  return rules.join('\n');
}

// Detect and handle zombie pages (0 traffic, 0 backlinks)
export function detectZombiePages(urls: SitemapURL[]): SitemapURL[] {
  // This would integrate with analytics APIs to detect low-performing pages
  // For now, we'll implement a basic heuristic
  return urls.map(url => {
    // Example: Mark old blog posts as lower priority
    if (url.loc.includes('/blog/') && url.lastmod) {
      const lastModDate = new Date(url.lastmod);
      const daysSinceUpdate = (Date.now() - lastModDate.getTime()) / (1000 * 60 * 60 * 24);
      
      if (daysSinceUpdate > 365) {
        return {
          ...url,
          priority: 0.1,
          changefreq: 'yearly' as const
        };
      }
    }
    
    return url;
  });
}

// Generate news sitemap for content sites
export function generateNewsSitemap(articles: Array<{
  title: string;
  url: string;
  publicationDate: string;
  keywords: string[];
}>): string {
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
  const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">';
  const urlsetClose = '</urlset>';
  
  const urlEntries = articles.map(article => {
    return `  <url>
    <loc>${article.url}</loc>
    <news:news>
      <news:publication>
        <news:name>STEcom Blog</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${article.publicationDate}</news:publication_date>
      <news:title>${article.title}</news:title>
      <news:keywords>${article.keywords.join(', ')}</news:keywords>
    </news:news>
  </url>`;
  }).join('\n');
  
  return `${xmlHeader}\n${urlsetOpen}\n${urlEntries}\n${urlsetClose}`;
}
