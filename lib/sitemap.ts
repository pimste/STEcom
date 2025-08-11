import { SitemapStream, streamToPromise } from 'sitemap'
import { Readable } from 'stream'

interface SitemapUrl {
  url: string
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority?: number
  lastmod?: string
  img?: Array<{
    url: string
    title?: string
    caption?: string
    geoLocation?: string
    license?: string
  }>
  video?: Array<{
    url: string
    title: string
    description: string
    thumbnail_loc: string
    duration: number
  }>
}

const baseUrl = 'https://stecom.nl'

const routes: SitemapUrl[] = [
  {
    url: '/',
    changefreq: 'daily',
    priority: 1.0,
    lastmod: new Date().toISOString(),
  },
  {
    url: '/privacy',
    changefreq: 'monthly',
    priority: 0.3,
    lastmod: new Date().toISOString(),
  },
  {
    url: '/en',
    changefreq: 'daily',
    priority: 0.9,
    lastmod: new Date().toISOString(),
  },
  {
    url: '/en/privacy',
    changefreq: 'monthly',
    priority: 0.3,
    lastmod: new Date().toISOString(),
  },
  {
    url: '/dashboard',
    changefreq: 'weekly',
    priority: 0.7,
    lastmod: new Date().toISOString(),
  },
]

export async function generateSitemap(): Promise<string> {
  const sitemap = new SitemapStream({ hostname: baseUrl })
  
  // Add all routes to sitemap
  routes.forEach(route => {
    sitemap.write(route)
  })
  
  sitemap.end()
  
  const sitemapBuffer = await streamToPromise(Readable.from(sitemap.toString()))
  return sitemapBuffer.toString()
}

export function generateRobotsTxt(): string {
  return `User-agent: *
Allow: /

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/

# Crawl-delay for respectful crawling
Crawl-delay: 1`
}

// Generate sitemap for specific sections
export function generateSectionSitemap(section: string): SitemapUrl[] {
  const sectionRoutes: { [key: string]: SitemapUrl[] } = {
    main: routes.filter(route => !route.url.includes('/en')),
    english: routes.filter(route => route.url.includes('/en')),
    legal: routes.filter(route => route.url.includes('privacy')),
  }
  
  return sectionRoutes[section] || []
}

// Generate sitemap with custom routes
export function generateCustomSitemap(customRoutes: SitemapUrl[]): SitemapUrl[] {
  return [...routes, ...customRoutes]
}

// Validate sitemap URL
export function validateSitemapUrl(url: SitemapUrl): boolean {
  if (!url.url || !url.url.startsWith('/')) {
    return false
  }
  
  if (url.priority && (url.priority < 0 || url.priority > 1)) {
    return false
  }
  
  if (url.changefreq && !['always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never'].includes(url.changefreq)) {
    return false
  }
  
  return true
}

// Generate sitemap for blog posts (if you have a blog)
export function generateBlogSitemap(posts: Array<{ slug: string; updatedAt: string }>): SitemapUrl[] {
  return posts.map(post => ({
    url: `/blog/${post.slug}`,
    changefreq: 'weekly',
    priority: 0.6,
    lastmod: post.updatedAt,
  }))
}

// Generate sitemap for portfolio items (if you have a portfolio)
export function generatePortfolioSitemap(items: Array<{ slug: string; updatedAt: string }>): SitemapUrl[] {
  return items.map(item => ({
    url: `/portfolio/${item.slug}`,
    changefreq: 'monthly',
    priority: 0.5,
    lastmod: item.updatedAt,
  }))
} 