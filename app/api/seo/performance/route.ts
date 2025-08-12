import { NextRequest, NextResponse } from 'next/server';
import { SEOPerformanceController } from '@/lib/seo/performance';

const performanceController = new SEOPerformanceController();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { url, keywords, action } = body;

    if (!url) {
      return NextResponse.json(
        { error: 'URL is required' },
        { status: 400 }
      );
    }

    switch (action) {
      case 'audit':
        const auditReport = await performanceController.runPerformanceAudit(url);
        return NextResponse.json({
          success: true,
          data: { report: auditReport }
        });
      
      case 'track_rankings':
        if (!keywords || !Array.isArray(keywords)) {
          return NextResponse.json(
            { error: 'Keywords array is required for tracking rankings' },
            { status: 400 }
          );
        }
        const rankings = await performanceController.trackRankings(keywords);
        return NextResponse.json({
          success: true,
          data: { rankings }
        });
      
      default:
        return NextResponse.json(
          { error: 'Invalid action specified' },
          { status: 400 }
        );
    }
  } catch (error) {
    console.error('Error in performance monitoring:', error);
    return NextResponse.json(
      { error: 'Error in performance monitoring' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const url = searchParams.get('url');
    const keywords = searchParams.get('keywords')?.split(',') || [];
    const action = searchParams.get('action');

    if (!url) {
      return NextResponse.json(
        { error: 'URL parameter is required' },
        { status: 400 }
      );
    }

    switch (action) {
      case 'comprehensive_report':
        const report = performanceController.generateComprehensiveReport(url, keywords);
        return NextResponse.json({
          success: true,
          data: { report }
        });
      
      default:
        return NextResponse.json(
          { error: 'Invalid action specified' },
          { status: 400 }
        );
    }
  } catch (error) {
    console.error('Error generating performance report:', error);
    return NextResponse.json(
      { error: 'Error generating performance report' },
      { status: 500 }
    );
  }
}
