import { PerformanceMetrics } from './types';

export interface PerformanceData {
  url: string;
  timestamp: Date;
  lcp: number;
  cls: number;
  fid: number;
  ttfb: number;
  bundleSize: number;
  imageOptimization: boolean;
  score: number;
}

export interface ABTestConfig {
  id: string;
  name: string;
  description: string;
  variants: ABTestVariant[];
  trafficSplit: number; // Percentage of traffic to test
  duration: number; // Days
  startDate: Date;
  endDate?: Date;
  active: boolean;
  metrics: string[];
}

export interface ABTestVariant {
  id: string;
  name: string;
  changes: ABTestChange[];
  performance: PerformanceData[];
  conversions: number;
  impressions: number;
  clicks: number;
  ctr: number;
}

export interface ABTestChange {
  type: 'title' | 'description' | 'heading' | 'content' | 'cta' | 'layout';
  selector: string;
  value: string;
  originalValue: string;
}

export interface RankTrackingData {
  keyword: string;
  position: number;
  previousPosition: number;
  change: number;
  searchVolume: number;
  cpc: number;
  url: string;
  date: Date;
}

// Performance monitoring class
export class PerformanceMonitor {
  private performanceData: PerformanceData[] = [];
  private thresholds = {
    lcp: 2500, // 2.5 seconds
    cls: 0.1, // 0.1
    fid: 100, // 100ms
    ttfb: 600, // 600ms
    bundleSize: 500000, // 500KB
  };

  async measurePerformance(url: string): Promise<PerformanceData> {
    // Simulate performance measurement
    const performanceData: PerformanceData = {
      url,
      timestamp: new Date(),
      lcp: Math.random() * 3000 + 500, // 500ms to 3.5s
      cls: Math.random() * 0.2, // 0 to 0.2
      fid: Math.random() * 200 + 50, // 50ms to 250ms
      ttfb: Math.random() * 800 + 200, // 200ms to 1s
      bundleSize: Math.random() * 1000000 + 100000, // 100KB to 1.1MB
      imageOptimization: Math.random() > 0.3, // 70% optimized
      score: 0
    };

    // Calculate performance score
    performanceData.score = this.calculatePerformanceScore(performanceData);
    
    this.performanceData.push(performanceData);
    return performanceData;
  }

  private calculatePerformanceScore(data: PerformanceData): number {
    let score = 100;

    // LCP scoring
    if (data.lcp > this.thresholds.lcp) {
      score -= Math.min(30, (data.lcp - this.thresholds.lcp) / 100);
    }

    // CLS scoring
    if (data.cls > this.thresholds.cls) {
      score -= Math.min(25, data.cls * 250);
    }

    // FID scoring
    if (data.fid > this.thresholds.fid) {
      score -= Math.min(20, (data.fid - this.thresholds.fid) / 10);
    }

    // TTFB scoring
    if (data.ttfb > this.thresholds.ttfb) {
      score -= Math.min(15, (data.ttfb - this.thresholds.ttfb) / 50);
    }

    // Bundle size scoring
    if (data.bundleSize > this.thresholds.bundleSize) {
      score -= Math.min(10, (data.bundleSize - this.thresholds.bundleSize) / 100000);
    }

    return Math.max(0, Math.round(score));
  }

  getPerformanceHistory(url: string, days: number = 30): PerformanceData[] {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - days);

    return this.performanceData.filter(
      data => data.url === url && data.timestamp > cutoffDate
    );
  }

  getAveragePerformance(url: string): PerformanceData | null {
    const urlData = this.performanceData.filter(data => data.url === url);
    
    if (urlData.length === 0) return null;

    const avg = urlData.reduce((acc, data) => ({
      url: data.url,
      timestamp: new Date(),
      lcp: acc.lcp + data.lcp,
      cls: acc.cls + data.cls,
      fid: acc.fid + data.fid,
      ttfb: acc.ttfb + data.ttfb,
      bundleSize: acc.bundleSize + data.bundleSize,
      imageOptimization: acc.imageOptimization && data.imageOptimization,
      score: acc.score + data.score
    }));

    return {
      url: avg.url,
      timestamp: avg.timestamp,
      lcp: avg.lcp / urlData.length,
      cls: avg.cls / urlData.length,
      fid: avg.fid / urlData.length,
      ttfb: avg.ttfb / urlData.length,
      bundleSize: avg.bundleSize / urlData.length,
      imageOptimization: avg.imageOptimization,
      score: Math.round(avg.score / urlData.length)
    };
  }

  generatePerformanceReport(url: string): string {
    const avgPerformance = this.getAveragePerformance(url);
    if (!avgPerformance) return 'No performance data available';

    const status = avgPerformance.score >= 90 ? 'Excellent' :
                   avgPerformance.score >= 70 ? 'Good' :
                   avgPerformance.score >= 50 ? 'Needs Improvement' : 'Poor';

    return `
Performance Report for ${url}

Overall Score: ${avgPerformance.score}/100 (${status})

Core Web Vitals:
- LCP: ${avgPerformance.lcp.toFixed(0)}ms ${avgPerformance.lcp <= this.thresholds.lcp ? '✅' : '❌'}
- CLS: ${avgPerformance.cls.toFixed(3)} ${avgPerformance.cls <= this.thresholds.cls ? '✅' : '❌'}
- FID: ${avgPerformance.fid.toFixed(0)}ms ${avgPerformance.fid <= this.thresholds.fid ? '✅' : '❌'}

Technical Metrics:
- TTFB: ${avgPerformance.ttfb.toFixed(0)}ms ${avgPerformance.ttfb <= this.thresholds.ttfb ? '✅' : '❌'}
- Bundle Size: ${(avgPerformance.bundleSize / 1024).toFixed(1)}KB ${avgPerformance.bundleSize <= this.thresholds.bundleSize ? '✅' : '❌'}
- Image Optimization: ${avgPerformance.imageOptimization ? '✅' : '❌'}

Recommendations:
${this.generateRecommendations(avgPerformance)}
    `.trim();
  }

  private generateRecommendations(performance: PerformanceData): string {
    const recommendations = [];

    if (performance.lcp > this.thresholds.lcp) {
      recommendations.push('- Optimize Largest Contentful Paint by improving image loading and server response times');
    }

    if (performance.cls > this.thresholds.cls) {
      recommendations.push('- Reduce Cumulative Layout Shift by setting proper image dimensions and avoiding dynamic content insertion');
    }

    if (performance.fid > this.thresholds.fid) {
      recommendations.push('- Improve First Input Delay by reducing JavaScript execution time and optimizing event handlers');
    }

    if (performance.ttfb > this.thresholds.ttfb) {
      recommendations.push('- Optimize Time to First Byte by improving server performance and using CDN');
    }

    if (performance.bundleSize > this.thresholds.bundleSize) {
      recommendations.push('- Reduce bundle size through code splitting, tree shaking, and removing unused dependencies');
    }

    if (!performance.imageOptimization) {
      recommendations.push('- Implement image optimization with WebP format, lazy loading, and responsive images');
    }

    return recommendations.length > 0 ? recommendations.join('\n') : '- Performance is optimal!';
  }
}

// A/B Testing class
export class ABTesting {
  private tests: ABTestConfig[] = [];
  private results: Map<string, ABTestVariant[]> = new Map();

  createTest(config: ABTestConfig): void {
    this.tests.push(config);
    this.results.set(config.id, config.variants);
  }

  getActiveTests(): ABTestConfig[] {
    const now = new Date();
    return this.tests.filter(test => 
      test.active && 
      test.startDate <= now && 
      (!test.endDate || test.endDate >= now)
    );
  }

  assignVariant(testId: string, userId: string): ABTestVariant | null {
    const test = this.tests.find(t => t.id === testId);
    if (!test || !test.active) return null;

    // Simple hash-based assignment for consistent user experience
    const hash = this.hashString(userId + testId);
    const variantIndex = hash % test.variants.length;
    
    return test.variants[variantIndex];
  }

  private hashString(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash);
  }

  trackImpression(testId: string, variantId: string): void {
    const variants = this.results.get(testId);
    if (!variants) return;

    const variant = variants.find(v => v.id === variantId);
    if (variant) {
      variant.impressions++;
      variant.ctr = variant.clicks / variant.impressions;
    }
  }

  trackClick(testId: string, variantId: string): void {
    const variants = this.results.get(testId);
    if (!variants) return;

    const variant = variants.find(v => v.id === variantId);
    if (variant) {
      variant.clicks++;
      variant.ctr = variant.clicks / variant.impressions;
    }
  }

  trackConversion(testId: string, variantId: string): void {
    const variants = this.results.get(testId);
    if (!variants) return;

    const variant = variants.find(v => v.id === variantId);
    if (variant) {
      variant.conversions++;
    }
  }

  getTestResults(testId: string): ABTestVariant[] | null {
    return this.results.get(testId) || null;
  }

  generateTestReport(testId: string): string {
    const test = this.tests.find(t => t.id === testId);
    const variants = this.results.get(testId);
    
    if (!test || !variants) return 'Test not found';

    const totalImpressions = variants.reduce((sum, v) => sum + v.impressions, 0);
    const totalClicks = variants.reduce((sum, v) => sum + v.clicks, 0);
    const totalConversions = variants.reduce((sum, v) => sum + v.conversions, 0);

    let report = `
A/B Test Report: ${test.name}
Test ID: ${test.id}
Duration: ${test.startDate.toLocaleDateString()} - ${test.endDate?.toLocaleDateString() || 'Ongoing'}

Overall Metrics:
- Total Impressions: ${totalImpressions}
- Total Clicks: ${totalClicks}
- Total Conversions: ${totalConversions}
- Overall CTR: ${totalImpressions > 0 ? ((totalClicks / totalImpressions) * 100).toFixed(2) : 0}%
- Overall Conversion Rate: ${totalClicks > 0 ? ((totalConversions / totalClicks) * 100).toFixed(2) : 0}%

Variant Performance:
`;

    variants.forEach((variant, index) => {
      const ctr = variant.impressions > 0 ? (variant.clicks / variant.impressions) * 100 : 0;
      const conversionRate = variant.clicks > 0 ? (variant.conversions / variant.clicks) * 100 : 0;
      
      report += `
${index + 1}. ${variant.name} (${variant.id})
   - Impressions: ${variant.impressions}
   - Clicks: ${variant.clicks}
   - Conversions: ${variant.conversions}
   - CTR: ${ctr.toFixed(2)}%
   - Conversion Rate: ${conversionRate.toFixed(2)}%
`;
    });

    // Determine winner
    const winner = this.determineWinner(variants);
    if (winner) {
      report += `\nWinner: ${winner.name} (${winner.id})`;
    }

    return report;
  }

  private determineWinner(variants: ABTestVariant[]): ABTestVariant | null {
    if (variants.length < 2) return null;

    // Simple winner determination based on conversion rate
    let bestVariant = variants[0];
    let bestRate = bestVariant.clicks > 0 ? bestVariant.conversions / bestVariant.clicks : 0;

    for (let i = 1; i < variants.length; i++) {
      const rate = variants[i].clicks > 0 ? variants[i].conversions / variants[i].clicks : 0;
      if (rate > bestRate) {
        bestRate = rate;
        bestVariant = variants[i];
      }
    }

    return bestRate > 0 ? bestVariant : null;
  }
}

// Rank tracking class
export class RankTracker {
  private rankData: RankTrackingData[] = [];
  private keywords: string[] = [];

  addKeyword(keyword: string): void {
    if (!this.keywords.includes(keyword)) {
      this.keywords.push(keyword);
    }
  }

  async trackRankings(keywords: string[] = this.keywords): Promise<RankTrackingData[]> {
    const newRankings: RankTrackingData[] = [];

    for (const keyword of keywords) {
      // Simulate rank tracking
      const previousRanking = this.getLatestRanking(keyword);
      const currentPosition = this.simulateRanking(keyword, previousRanking?.position);
      
      const rankingData: RankTrackingData = {
        keyword,
        position: currentPosition,
        previousPosition: previousRanking?.position || 0,
        change: previousRanking ? previousRanking.position - currentPosition : 0,
        searchVolume: Math.floor(Math.random() * 10000) + 100,
        cpc: Math.random() * 5 + 0.5,
        url: `https://stecom.nl/services/${keyword.toLowerCase().replace(/\s+/g, '-')}`,
        date: new Date()
      };

      this.rankData.push(rankingData);
      newRankings.push(rankingData);
    }

    return newRankings;
  }

  private simulateRanking(keyword: string, previousPosition?: number): number {
    // Simulate realistic ranking changes
    if (!previousPosition) {
      return Math.floor(Math.random() * 50) + 1; // Random position 1-50
    }

    // Simulate ranking fluctuations
    const change = Math.floor(Math.random() * 10) - 5; // -5 to +5
    const newPosition = Math.max(1, previousPosition + change);
    
    return newPosition;
  }

  getLatestRanking(keyword: string): RankTrackingData | null {
    const keywordData = this.rankData.filter(data => data.keyword === keyword);
    return keywordData.length > 0 ? keywordData[keywordData.length - 1] : null;
  }

  getRankingHistory(keyword: string, days: number = 30): RankTrackingData[] {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - days);

    return this.rankData.filter(
      data => data.keyword === keyword && data.date > cutoffDate
    );
  }

  generateRankingReport(keywords: string[] = this.keywords): string {
    let report = 'Ranking Report\n\n';

    keywords.forEach(keyword => {
      const latest = this.getLatestRanking(keyword);
      if (!latest) return;

      const changeSymbol = latest.change > 0 ? '↗️' : latest.change < 0 ? '↘️' : '➡️';
      
      report += `${keyword}:\n`;
      report += `  Position: ${latest.position} ${changeSymbol} (${latest.change > 0 ? '+' : ''}${latest.change})\n`;
      report += `  Search Volume: ${latest.searchVolume.toLocaleString()}\n`;
      report += `  CPC: €${latest.cpc.toFixed(2)}\n\n`;
    });

    return report;
  }

  getTopPerformers(limit: number = 10): RankTrackingData[] {
    return this.rankData
      .filter(data => data.position <= 10)
      .sort((a, b) => a.position - b.position)
      .slice(0, limit);
  }

  getBiggestMovers(days: number = 7): RankTrackingData[] {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - days);

    const recentData = this.rankData.filter(data => data.date > cutoffDate);
    
    return recentData
      .sort((a, b) => Math.abs(b.change) - Math.abs(a.change))
      .slice(0, 10);
  }
}

// Main SEO performance controller
export class SEOPerformanceController {
  private performanceMonitor: PerformanceMonitor;
  private abTesting: ABTesting;
  private rankTracker: RankTracker;

  constructor() {
    this.performanceMonitor = new PerformanceMonitor();
    this.abTesting = new ABTesting();
    this.rankTracker = new RankTracker();
  }

  async runPerformanceAudit(url: string): Promise<string> {
    const performance = await this.performanceMonitor.measurePerformance(url);
    return this.performanceMonitor.generatePerformanceReport(url);
  }

  createABTest(config: ABTestConfig): void {
    this.abTesting.createTest(config);
  }

  getABTestVariant(testId: string, userId: string): ABTestVariant | null {
    return this.abTesting.assignVariant(testId, userId);
  }

  async trackRankings(keywords: string[]): Promise<RankTrackingData[]> {
    keywords.forEach(keyword => this.rankTracker.addKeyword(keyword));
    return this.rankTracker.trackRankings(keywords);
  }

  generateComprehensiveReport(url: string, keywords: string[]): string {
    const performanceReport = this.performanceMonitor.generatePerformanceReport(url);
    const rankingReport = this.rankTracker.generateRankingReport(keywords);
    
    return `
SEO Performance Comprehensive Report
====================================

${performanceReport}

${rankingReport}

Active A/B Tests: ${this.abTesting.getActiveTests().length}
    `.trim();
  }
}
