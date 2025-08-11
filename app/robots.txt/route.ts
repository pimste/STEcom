import { generateRobotsTxt } from '@/lib/sitemap'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const robotsTxt = generateRobotsTxt()
    
    return new NextResponse(robotsTxt, {
      headers: {
        'Content-Type': 'text/plain',
        'Cache-Control': 'public, max-age=3600, s-maxage=86400',
      },
    })
  } catch (error) {
    console.error('Error generating robots.txt:', error)
    return new NextResponse('Error generating robots.txt', { status: 500 })
  }
} 