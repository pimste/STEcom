import { NextRequest, NextResponse } from 'next/server';
import { generateDynamicSitemap, generateSitemapXML } from '../../../../lib/seo/sitemap';

export async function GET(request: NextRequest) {
  try {
    // Generate dynamic sitemap URLs
    const urls = generateDynamicSitemap();
    
    // Generate XML sitemap
    const xml = generateSitemapXML(urls);
    
    // Return XML response
    return new NextResponse(xml, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=86400', // Cache for 1 hour, CDN for 24 hours
      },
    });
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return new NextResponse('Error generating sitemap', { status: 500 });
  }
}
