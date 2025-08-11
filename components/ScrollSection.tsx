'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { Code, BarChart3, Zap, Monitor } from 'lucide-react'

const sections = [
  {
    id: "01",
    title: "Gewoon beginnen",
    subtitle: "En gaandeweg steeds beter worden",
    description: "Wij geloven niet in maandenlange plannen en eindeloze meetings. We beginnen met een simpele versie van je website en maken deze stap voor stap beter. Zo zie je direct resultaat en kunnen we snel bijsturen als iets niet werkt.",
    features: [
      "Start met een werkende basisversie binnen 2 weken",
      "Wekelijkse updates met kleine verbeteringen", 
      "Direct testen met echte bezoekers",
      "Flexibel bijsturen op basis van resultaten"
    ],
    icon: Code,
    color: "blue"
  },
  {
    id: "02", 
    title: "Meten wat werkt",
    subtitle: "En wat beter kan",
    description: "Een mooie website is leuk, maar wat echt telt zijn de resultaten. Hoeveel mensen vullen je contactformulier in? Hoe lang blijven bezoekers op je site? Wij kijken naar de cijfers die er toe doen voor jouw bedrijf.",
    features: [
      "Heldere rapportages in begrijpelijke taal",
      "Focus op conversies, niet alleen bezoekers",
      "Maandelijkse evaluatie en verbetervoorstellen",
      "A/B testen van belangrijke elementen"
    ],
    icon: BarChart3,
    color: "green"
  },
  {
    id: "03",
    title: "Techniek die klopt", 
    subtitle: "Zonder gedoe",
    description: "Snelle laadtijden, veilige betalingen, automatische backups - de technische kant regelen wij. Jij hoeft alleen maar te zorgen dat je telefoon niet roodgloeiend wordt van alle nieuwe klanten.",
    features: [
      "Razendsnel op alle apparaten (ja, ook op je moeders tablet)",
      "Automatische updates en beveiliging", 
      "Werkt perfect met Google en andere zoekmachines",
      "24/7 monitoring en directe foutmeldingen"
    ],
    icon: Zap,
    color: "purple"
  },
  {
    id: "04",
    title: "Altijd in de gaten",
    subtitle: "Zodat jij rustig kunt slapen", 
    description: "Websites hebben onderhoud nodig, net zoals auto's. Wij houden alles in de gaten: van server prestaties tot beveiligingsupdates. Mocht er iets zijn, dan weet je het direct. En meestal hebben we het al opgelost voordat jij het doorhebt.",
    features: [
      "Proactieve monitoring 24/7",
      "Automatische backups elke dag",
      "Direct contact bij problemen (via WhatsApp of telefoon)",
      "Maandelijks overzicht van alles wat goed gaat"
    ],
    icon: Monitor,
    color: "indigo"
  }
]

// Define how many slides each section has
const slidesPerSection: Record<number, number> = {
  0: 1, // Section 1 has 1 slide
  1: 1, // Section 2 has 1 slide
  2: 1, // Section 3 has 1 slide
  3: 1, // Section 4 has 1 slide
}

export default function ScrollSection() {
  const [currentSection, setCurrentSection] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const isAnimating = useRef(false)
  const lastScrollTime = useRef(0)
  const isManualNavigation = useRef(false)

  // Calculate total slides across all sections
  const totalSlides = Object.values(slidesPerSection).reduce((sum, count) => sum + count, 0)

  // Navigation functions
  const goNext = () => {
    if (isAnimating.current) return
    
    isAnimating.current = true
    setTimeout(() => { isAnimating.current = false }, 500)

    if (currentSlide < slidesPerSection[currentSection] - 1) {
      // Go to next slide in current section
      setCurrentSlide(currentSlide + 1)
    } else if (currentSection < sections.length - 1) {
      // Go to first slide of next section
      setCurrentSection(currentSection + 1)
      setCurrentSlide(0)
    } else {
      // Reached the end - unlock scroll for next section
      document.body.style.overflow = ''
      document.body.classList.remove('scroll-locked')
    }
  }

  const goPrev = () => {
    if (isAnimating.current) return
    
    isAnimating.current = true
    setTimeout(() => { isAnimating.current = false }, 500)

    if (currentSlide > 0) {
      // Go to previous slide in current section
      setCurrentSlide(currentSlide - 1)
    } else if (currentSection > 0) {
      // Go to last slide of previous section
      const prevSection = currentSection - 1
      setCurrentSection(prevSection)
      setCurrentSlide(slidesPerSection[prevSection] - 1)
    }
  }

  // Handle wheel scroll
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isAnimating.current) {
        e.preventDefault()
        return
      }
      
      // Check if component is in view
      const container = containerRef.current
      if (!container) return
      
      const rect = container.getBoundingClientRect()
      const isInView = rect.top < window.innerHeight && rect.bottom > 0
      
      if (!isInView) return
      
      // Only handle wheel events when the component is fully in view
      const isFullyInView = rect.top <= 0 && rect.bottom >= window.innerHeight
      if (!isFullyInView) return
      
      // Prevent rapid scrolling
      const now = Date.now()
      if (now - lastScrollTime.current < 300) {
        e.preventDefault()
        return
      }
      
      lastScrollTime.current = now
      
      if (e.deltaY > 0) {
        goNext()
        e.preventDefault()
      } else if (e.deltaY < 0) {
        goPrev()
        e.preventDefault()
      }
    }
    
    window.addEventListener('wheel', handleWheel, { passive: false })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [currentSection, currentSlide])

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (isAnimating.current) return
      
      if (e.key === 'ArrowDown' || e.key === ' ') {
        goNext()
      } else if (e.key === 'ArrowUp') {
        goPrev()
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [currentSection, currentSlide])

  // Scroll to current slide when it changes
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    const slideHeight = scrollContainer.clientHeight
    const targetScroll = (currentSection * slideHeight) + (currentSlide * slideHeight)
    
    scrollContainer.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    })
  }, [currentSection, currentSlide])

  // Handle navigation clicks
  const handleNavClick = (sectionIndex: number) => {
    if (isAnimating.current) return
    
    isAnimating.current = true
    isManualNavigation.current = true
    setTimeout(() => { 
      isAnimating.current = false 
      isManualNavigation.current = false
    }, 1000) // Give more time for the scroll to complete
    
    setCurrentSection(sectionIndex)
    setCurrentSlide(0)
  }

  // Lock page scroll when component is in view and handle navigation highlighting
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScrollLock = () => {
      const rect = container.getBoundingClientRect()
      const isInView = rect.top < window.innerHeight && rect.bottom > 0
      const fullyInView = rect.top <= 0 && rect.bottom >= window.innerHeight

      if (fullyInView) {
        document.body.style.overflow = 'hidden'
        document.body.classList.add('scroll-locked')
      } else if (!isInView) {
        document.body.style.overflow = ''
        document.body.classList.remove('scroll-locked')
      }
    }

    // Intersection Observer for navigation highlighting
    const observerOptions = {
      root: scrollContainerRef.current,
      rootMargin: '-10% 0px -10% 0px',
      threshold: 0.05
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isManualNavigation.current) {
          const sectionIndex = parseInt(entry.target.getAttribute('data-section-index') || '0')
          console.log('Section in view:', sectionIndex, entry.target.getAttribute('data-section-index'))
          setCurrentSection(sectionIndex)
          setCurrentSlide(0) // Reset to first slide when section changes
        }
      })
    }, observerOptions)

    // Observe all section slides
    const sectionSlides = scrollContainerRef.current?.querySelectorAll('[data-section-index]')
    sectionSlides?.forEach((slide) => {
      observer.observe(slide)
    })

    // Add scroll listener to the scroll container for navigation highlighting
    const handleScrollHighlight = () => {
      if (!scrollContainerRef.current || isManualNavigation.current) return
      
      const container = scrollContainerRef.current
      const scrollTop = container.scrollTop
      const containerHeight = container.clientHeight
      
      // Check if we're on mobile (vertical layout)
      const isMobile = window.innerWidth < 768 // md breakpoint
      
      if (isMobile) {
        // On mobile, use window scroll instead of container scroll
        const windowScrollTop = window.scrollY
        const containerRect = container.getBoundingClientRect()
        const containerTop = containerRect.top
        const sectionHeight = window.innerHeight
        
        // Calculate which section should be highlighted based on window scroll
        const relativeScrollTop = windowScrollTop - containerTop
        const threshold = sectionHeight * 0.3
        const currentSectionIndex = Math.floor((relativeScrollTop + threshold) / sectionHeight)
        
        console.log('Mobile - Window scroll:', windowScrollTop, 'Container top:', containerTop, 'Current section:', currentSectionIndex)
        
        if (currentSectionIndex >= 0 && currentSectionIndex < sections.length) {
          setCurrentSection(currentSectionIndex)
          setCurrentSlide(0)
        }
      } else {
        // Desktop logic - use container scroll
        const sectionHeight = containerHeight
        const threshold = sectionHeight * 0.3
        const currentSectionIndex = Math.floor((scrollTop + threshold) / sectionHeight)
        
        console.log('Desktop - Scroll position:', scrollTop, 'Threshold:', threshold, 'Current section:', currentSectionIndex)
        
        if (currentSectionIndex >= 0 && currentSectionIndex < sections.length) {
          setCurrentSection(currentSectionIndex)
          setCurrentSlide(0)
        }
      }
    }

    scrollContainerRef.current?.addEventListener('scroll', handleScrollHighlight)
    window.addEventListener('scroll', handleScrollHighlight) // Also listen to window scroll for mobile
    window.addEventListener('scroll', handleScrollLock)
    window.addEventListener('resize', handleScrollLock)
    handleScrollLock() // Check initial state
    handleScrollHighlight() // Check initial state

    return () => {
      scrollContainerRef.current?.removeEventListener('scroll', handleScrollHighlight)
      window.removeEventListener('scroll', handleScrollHighlight)
      window.removeEventListener('scroll', handleScrollLock)
      window.removeEventListener('resize', handleScrollLock)
      document.body.style.overflow = ''
      document.body.classList.remove('scroll-locked')
      observer.disconnect()
    }
  }, [])

  // Cleanup scroll lock on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = ''
      document.body.classList.remove('scroll-locked')
    }
  }, [])

  return (
    <div 
      ref={containerRef} 
      className="relative flex flex-col md:flex-row w-full h-screen bg-white"
      style={{ overflow: 'hidden' }}
    >
      {/* Left: Sticky Navigation */}
      <nav className="sticky top-0 z-10 bg-white w-full md:w-1/2 md:h-screen border-b md:border-b-0 md:border-r border-slate-200">
        {/* Mobile: 2x2 Grid Layout */}
        <div className="md:hidden p-4">
          <div className="grid grid-cols-2 gap-3 h-32">
            {sections.map((section, idx) => (
              <button
                key={section.id}
                className={`transition-all duration-500 w-full h-full rounded-xl border-2 font-display text-center flex flex-col items-center justify-center p-3 ${
                  idx === currentSection
                    ? 'bg-blue-100 text-blue-700 border-blue-300 scale-105 shadow-lg'
                    : 'bg-slate-50 text-slate-500 border-slate-200 scale-100 hover:bg-slate-100'
                }`}
                onClick={() => handleNavClick(idx)}
                aria-current={idx === currentSection}
              >
                <span className="inline-block w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs border bg-white mb-1">
                  {section.id}
                </span>
                <span className="text-xs font-medium leading-tight">
                  {section.title}
                </span>
              </button>
            ))}
          </div>
        </div>
        
        {/* Desktop: Vertical List Layout */}
        <div className="hidden md:flex md:flex-col items-center justify-center h-full p-4">
          <ul className="flex md:flex-col gap-4 md:gap-8 max-w-lg w-full">
            {sections.map((section, idx) => (
              <li key={section.id}>
                <button
                  className={`transition-all duration-500 w-full text-left px-4 py-3 md:py-6 rounded-xl border font-display text-lg md:text-xl lg:text-2xl ${
                    idx === currentSection
                      ? 'bg-blue-100 text-blue-700 border-blue-200 scale-105 shadow-lg'
                      : 'bg-slate-50 text-slate-400 border-slate-100 scale-100 opacity-50'
                  }`}
                  onClick={() => handleNavClick(idx)}
                  aria-current={idx === currentSection}
                >
                  <div className="flex items-center gap-3 md:gap-4 mb-2">
                    <span className="inline-block w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center font-bold text-sm md:text-lg border bg-white">
                      {section.id}
                    </span>
                    <span className="text-sm md:text-base lg:text-lg">{section.title}</span>
                  </div>
                  <div className="text-xs md:text-sm font-medium">
                    {section.subtitle}
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Right: Scrollable Content */}
      <div 
        ref={scrollContainerRef}
        className="flex-1 h-[calc(100vh-144px)] md:h-screen overflow-y-scroll scroll-smooth scroll-container"
        style={{ scrollSnapType: 'y mandatory' }}
      >
        {sections.map((section, sectionIdx) => (
          Array.from({ length: slidesPerSection[sectionIdx] }, (_, slideIdx) => (
            <div
              key={`${section.id}-slide-${slideIdx}`}
              data-section-index={sectionIdx}
              className="min-h-screen flex items-center justify-center p-4 md:p-8 lg:p-12 scroll-section"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="max-w-lg space-y-6 md:space-y-8">
                <div>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-display font-light text-slate-800 leading-tight mb-4">
                    {section.title}
                  </h2>
                  <p className="text-sm md:text-base lg:text-lg text-slate-600 leading-relaxed mb-6 md:mb-8">
                    {section.description}
                  </p>
                </div>
                
                {/* Show different content based on slide index */}
                {slideIdx === 0 && (
                  <div className="space-y-3">
                    {section.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <div className={`flex-shrink-0 w-2 h-2 rounded-full mt-3 ${
                          section.color === 'blue' ? 'bg-blue-400' :
                          section.color === 'green' ? 'bg-green-400' :
                          section.color === 'purple' ? 'bg-purple-400' :
                          'bg-indigo-400'
                        }`} />
                        <span className="text-slate-600 leading-relaxed text-sm md:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                {/* Visual component for each section */}
                <div className="mt-6 md:mt-8">
                  {sectionIdx === 0 && <IterateVisual />}
                  {sectionIdx === 1 && <EvaluateVisual />}
                  {sectionIdx === 2 && <TechVisual />}
                  {sectionIdx === 3 && <MonitorVisual />}
                </div>
              </div>
            </div>
          ))
        ))}
      </div>
    </div>
  )
}

// Visual components for each section
function IterateVisual() {
  return (
    <div className="space-y-4 md:space-y-6">
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="bg-white rounded-xl p-4 md:p-6 border border-slate-200 shadow-sm"
      >
        <div className="flex items-center gap-2 mb-4">
          <Code className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />
          <span className="text-xs md:text-sm font-mono text-slate-600">website-v1.tsx</span>
        </div>
        <div className="space-y-2 font-mono text-xs md:text-sm">
          <div className="text-green-600">✓ Homepage gemaakt</div>
          <div className="text-green-600">✓ Contactformulier werkend</div>
          <div className="text-blue-600">→ About pagina toevoegen</div>
          <div className="text-slate-400">  Blog sectie volgende week</div>
        </div>
      </motion.div>
    </div>
  )
}



function EvaluateVisual() {
  return (
    <div className="space-y-4 md:space-y-6">
      <motion.div 
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="bg-white rounded-xl p-4 md:p-6 border border-slate-200 shadow-sm"
      >
        <div className="flex items-center gap-2 mb-4">
          <BarChart3 className="w-4 h-4 md:w-5 md:h-5 text-green-500" />
          <span className="font-medium text-slate-800 text-sm md:text-base">Deze maand</span>
        </div>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-xs md:text-sm text-slate-600">Bezoekers</span>
              <span className="text-xs md:text-sm font-medium text-green-600">+23%</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2">
              <motion.div 
                initial={{ width: "0%" }}
                animate={{ width: "78%" }}
                transition={{ duration: 2, delay: 0.5 }}
                className="bg-green-500 h-2 rounded-full"
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-xs md:text-sm text-slate-600">Contactaanvragen</span>
              <span className="text-xs md:text-sm font-medium text-blue-600">+45%</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2">
              <motion.div 
                initial={{ width: "0%" }}
                animate={{ width: "65%" }}
                transition={{ duration: 2, delay: 1 }}
                className="bg-blue-500 h-2 rounded-full"
              />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        className="bg-green-50 rounded-xl p-4 border border-green-200"
      >
        <div className="text-green-800 font-medium mb-2 text-sm md:text-base">💡 Inzicht van deze week</div>
        <p className="text-xs md:text-sm text-green-700">
          De nieuwe header zorgt voor 15% meer klikken naar je diensten pagina. 
          Goed bezig!
        </p>
      </motion.div>
    </div>
  )
}

function TechVisual() {
  return (
    <div className="space-y-4 md:space-y-6">
      <motion.div className="grid grid-cols-2 gap-3 md:gap-4">
        {[
          { name: "React", status: "running", color: "blue" },
          { name: "TypeScript", status: "running", color: "blue" },
          { name: "Tailwind", status: "running", color: "green" },
          { name: "Vercel", status: "running", color: "green" }
        ].map((tech, index) => (
          <motion.div
            key={tech.name}
            animate={{ 
              boxShadow: tech.status === 'running' 
                ? ["0 0 0 rgba(34, 197, 94, 0.4)", "0 0 20px rgba(34, 197, 94, 0.4)", "0 0 0 rgba(34, 197, 94, 0.4)"]
                : "none"
            }}
            transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
            className="bg-white rounded-lg p-3 md:p-4 border border-slate-200 text-center"
          >
            <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full mx-auto mb-2 ${
              tech.color === 'green' ? 'bg-green-400' : 'bg-blue-400'
            }`} />
            <div className="text-xs md:text-sm font-medium text-slate-700">{tech.name}</div>
            <div className="text-xs text-slate-500 capitalize">{tech.status}</div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="bg-slate-800 rounded-xl p-3 md:p-4 font-mono text-xs md:text-sm"
      >
        <div className="text-green-400 mb-2">$ performance-check</div>
        <div className="space-y-1 text-slate-300">
          <div>✓ Page load: 1.2s</div>
          <div>✓ SEO score: 98/100</div>
          <div>✓ Accessibility: AAA</div>
          <div>✓ Security: A+</div>
        </div>
      </motion.div>
    </div>
  )
}

function MonitorVisual() {
  return (
    <div className="space-y-4 md:space-y-6">
      <motion.div className="bg-white rounded-xl p-4 md:p-6 border border-slate-200 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Monitor className="w-4 h-4 md:w-5 md:h-5 text-green-500" />
          <span className="font-medium text-slate-800 text-sm md:text-base">Live Status</span>
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="w-2 h-2 bg-green-400 rounded-full ml-auto"
          />
        </div>
        
        <div className="space-y-3">
          {[
            { service: "Website", status: "Online", uptime: "99.9%" },
            { service: "Database", status: "Online", uptime: "100%" },
            { service: "Email", status: "Online", uptime: "99.8%" },
            { service: "Backup", status: "Completed", uptime: "2h ago" }
          ].map((item, index) => (
            <motion.div 
              key={item.service}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex items-center justify-between py-2"
            >
              <span className="text-xs md:text-sm text-slate-700">{item.service}</span>
              <div className="flex items-center gap-2">
                <span className="text-xs text-green-600 font-medium">{item.status}</span>
                <span className="text-xs text-slate-500">{item.uptime}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

 