'use client'

import { useEffect, useRef } from 'react'

// Declare gtag for TypeScript
declare global {
  var gtag: (...args: any[]) => void
}

interface PerformanceMetrics {
  fcp: number // First Contentful Paint
  lcp: number // Largest Contentful Paint
  fid: number // First Input Delay
  cls: number // Cumulative Layout Shift
  ttfb: number // Time to First Byte
}

export default function PerformanceMonitor() {
  const metricsRef = useRef<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0
  })

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Measure Time to First Byte
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    if (navigation) {
      metricsRef.current.ttfb = navigation.responseStart - navigation.requestStart
    }

    // Measure First Contentful Paint
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const fcp = entries[entries.length - 1]
      if (fcp) {
        metricsRef.current.fcp = fcp.startTime
        console.log('FCP:', fcp.startTime)
      }
    })
    fcpObserver.observe({ entryTypes: ['paint'] })

    // Measure Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const lcp = entries[entries.length - 1]
      if (lcp) {
        metricsRef.current.lcp = lcp.startTime
        console.log('LCP:', lcp.startTime)
      }
    })
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

    // Measure First Input Delay
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      entries.forEach((entry) => {
        if (entry.entryType === 'first-input') {
          const firstInputEntry = entry as any
          metricsRef.current.fid = firstInputEntry.processingStart - firstInputEntry.startTime
          console.log('FID:', metricsRef.current.fid)
        }
      })
    })
    fidObserver.observe({ entryTypes: ['first-input'] })

    // Measure Cumulative Layout Shift
    const clsObserver = new PerformanceObserver((list) => {
      let clsValue = 0
      for (const entry of list.getEntries()) {
        const layoutShiftEntry = entry as any
        if (!layoutShiftEntry.hadRecentInput) {
          clsValue += layoutShiftEntry.value
        }
      }
      metricsRef.current.cls = clsValue
      console.log('CLS:', clsValue)
    })
    clsObserver.observe({ entryTypes: ['layout-shift'] })

    // Send metrics to analytics (you can replace this with your analytics service)
    const sendMetrics = () => {
      const metrics = metricsRef.current
      
      // Only send if we have meaningful data
      if (metrics.fcp > 0 || metrics.lcp > 0 || metrics.fid > 0 || metrics.cls > 0) {
        // Send to Google Analytics (if configured)
        if (typeof gtag !== 'undefined') {
          gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'STEcom',
            value: Math.round(metrics.lcp),
            custom_map: {
              metric1: 'fcp',
              metric2: 'lcp',
              metric3: 'fid',
              metric4: 'cls',
              metric5: 'ttfb'
            }
          })
        }

        // Send to your own analytics endpoint
        fetch('/api/analytics/performance', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            url: window.location.href,
            timestamp: new Date().toISOString(),
            metrics
          })
        }).catch(console.error)
      }
    }

    // Send metrics after a delay to ensure all measurements are complete
    const timeoutId = setTimeout(sendMetrics, 5000)

    return () => {
      fcpObserver.disconnect()
      lcpObserver.disconnect()
      fidObserver.disconnect()
      clsObserver.disconnect()
      clearTimeout(timeoutId)
    }
  }, [])

  // Don't render anything visible
  return null
}

// Hook for measuring custom performance metrics
export function usePerformanceMetrics() {
  const startTime = useRef<number>(Date.now())

  const measureCustomMetric = (name: string, value: number) => {
    const duration = Date.now() - startTime.current
    
    if (typeof gtag !== 'undefined') {
      gtag('event', 'custom_metric', {
        event_category: 'Performance',
        event_label: name,
        value: Math.round(value),
        custom_map: {
          metric1: 'duration'
        }
      })
    }

    console.log(`Custom Metric - ${name}:`, value, 'ms')
  }

  const measureInteraction = (name: string, callback: () => void) => {
    const start = performance.now()
    callback()
    const end = performance.now()
    measureCustomMetric(name, end - start)
  }

  return {
    measureCustomMetric,
    measureInteraction,
    startTime: startTime.current
  }
}

// Component for measuring scroll performance
export function ScrollPerformanceMonitor() {
  const scrollStartTime = useRef<number>(0)
  const scrollMetrics = useRef<{
    totalScrolls: number
    averageScrollTime: number
    maxScrollTime: number
  }>({
    totalScrolls: 0,
    averageScrollTime: 0,
    maxScrollTime: 0
  })

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleScrollStart = () => {
      scrollStartTime.current = performance.now()
    }

    const handleScrollEnd = () => {
      const scrollTime = performance.now() - scrollStartTime.current
      const metrics = scrollMetrics.current
      
      metrics.totalScrolls++
      metrics.averageScrollTime = (metrics.averageScrollTime * (metrics.totalScrolls - 1) + scrollTime) / metrics.totalScrolls
      metrics.maxScrollTime = Math.max(metrics.maxScrollTime, scrollTime)

      // Log scroll performance every 10 scrolls
      if (metrics.totalScrolls % 10 === 0) {
        console.log('Scroll Performance:', {
          totalScrolls: metrics.totalScrolls,
          averageScrollTime: metrics.averageScrollTime.toFixed(2),
          maxScrollTime: metrics.maxScrollTime.toFixed(2)
        })
      }
    }

    let scrollTimeout: NodeJS.Timeout

    const handleScroll = () => {
      if (scrollTimeout) clearTimeout(scrollTimeout)
      
      if (scrollStartTime.current === 0) {
        handleScrollStart()
      }

      scrollTimeout = setTimeout(handleScrollEnd, 150)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimeout) clearTimeout(scrollTimeout)
    }
  }, [])

  return null
} 