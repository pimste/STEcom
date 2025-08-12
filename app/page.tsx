'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import SEO from '@/components/SEO'
import { initAnimations, cleanupAnimations } from '@/lib/animations'
import { LoadingAnimation } from '@/components/LottieAnimation'
import PerformanceMonitor, { ScrollPerformanceMonitor } from '@/components/PerformanceMonitor'

// Light version components
import HeroLight from '@/components/HeroLight'
import ScrollSection from '@/components/ScrollSection'
import ShowcaseSection from '@/components/ShowcaseSection'
import CTALight from '@/components/CTALight'
import PreloaderLight from '@/components/PreloaderLight'



export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  const handlePreloaderComplete = () => {
    setIsLoading(false)
  }

  // Prevent scroll during loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    
    return () => {
      document.body.style.overflow = ''
    }
  }, [isLoading])

  // Initialize animations
  useEffect(() => {
    if (!isLoading) {
      initAnimations()
    }
    
    return () => {
      cleanupAnimations()
    }
  }, [isLoading])

  return (
    <>
      <SEO 
        title="STEcom - Web Development & Design"
        description="Wij maken websites die werken. Van simpele landing pages tot complexe webapplicaties. Altijd snel, veilig en gebruiksvriendelijk."
        keywords="web development, website design, React, Next.js, SEO, performance"
        url="https://stecom.nl"
      />
      
      {/* Performance Monitoring */}
      <PerformanceMonitor />
      <ScrollPerformanceMonitor />
      


      {/* Light Preloader */}
      <AnimatePresence>
        {isLoading && <PreloaderLight onComplete={handlePreloaderComplete} />}
      </AnimatePresence>

      <AnimatePresence>
        {!isLoading && (
          <main className="min-h-screen bg-white text-slate-800 overflow-x-hidden">
            {/* Light Progress Bar */}
            <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400 z-50 origin-left transform scale-x-0"></div>
            
            <div data-animate="fadeInUp" data-delay="0.1">
              <HeroLight />
            </div>
            <div id="adaline-scroll" data-animate="fadeInUp" data-delay="0.2">
              <ScrollSection />
            </div>
            <div id="showcase" data-animate="fadeInUp" data-delay="0.3">
              <ShowcaseSection />
            </div>
            <div data-animate="fadeInUp" data-delay="0.4">
              <CTALight />
            </div>
        
        {/* Simple Light Navigation */}
            <nav className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
              <div className="space-y-4">
                {[
                  { id: 'hero', label: 'Home' },
                  { id: 'adaline-scroll', label: 'Hoe we werken' },
                  { id: 'showcase', label: 'My Work' },

                  { href: '/projects', label: 'Portfolio' },
                ].map((item) => (
                  item.href ? (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group relative block w-3 h-3 bg-slate-300 rounded-full hover:bg-blue-500 transition-all duration-300 hover:scale-125"
                    >
                      <span className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white text-slate-700 px-3 py-1 rounded text-sm shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-slate-200">
                        {item.label}
                      </span>
                    </Link>
                  ) : (
                    <button
                      key={item.id}
                      onClick={() => {
                        const element = document.getElementById(item.id!)
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' })
                          // If clicking on "Hoe we werken", also reset the scroll section to first item
                          if (item.id === 'adaline-scroll') {
                            // Small delay to ensure scroll completes first
                            setTimeout(() => {
                              const scrollSection = document.querySelector('[data-section]')
                              if (scrollSection) {
                                // Trigger a custom event to reset the scroll section
                                window.dispatchEvent(new CustomEvent('resetScrollSection'))
                              }
                            }, 500)
                          }
                        }
                      }}
                      className="group relative block w-3 h-3 bg-slate-300 rounded-full hover:bg-blue-500 transition-all duration-300 hover:scale-125"
                    >
                      <span className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white text-slate-700 px-3 py-1 rounded text-sm shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-slate-200">
                        {item.label}
                      </span>
                    </button>
                  )
                ))}
              </div>
            </nav>
        
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="fixed bottom-8 right-8 p-4 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition-all duration-300 hover:scale-110 z-50 shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </main>
        )}
      </AnimatePresence>
    </>
  )
}