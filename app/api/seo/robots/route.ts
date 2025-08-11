import { NextRequest, NextResponse } from 'next/server';
import { generateRobotsTxt } from '../../../../lib/seo/sitemap';

export async function GET(request: NextRequest) {
  try {
    // Generate robots.txt content
    const robotsContent = generateRobotsTxt();
    
    // Return text response
    return new NextResponse(robotsContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain',
        'Cache-Control': 'public, max-age=3600, s-maxage=86400', // Cache for 1 hour, CDN for 24 hours
      },
    });
  } catch (error) {
    console.error('Error generating robots.txt:', error);
    return new NextResponse('Error generating robots.txt', { status: 500 });
  }
}
