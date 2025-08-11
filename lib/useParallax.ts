import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface ParallaxOptions {
  speed?: number
  ease?: string
  start?: string
  end?: string
  scrub?: boolean | number
}

export function useParallax(options: ParallaxOptions = {}) {
  const elementRef = useRef<HTMLDivElement>(null)
  
  const {
    speed = 0.5,
    ease = "none",
    start = "top bottom",
    end = "bottom top",
    scrub = true
  } = options

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start,
        end,
        scrub,
        ease,
      }
    })

    // Create parallax effect
    tl.to(element, {
      y: `${speed * 100}%`,
      ease: "none"
    })

    return () => {
      tl.kill()
    }
  }, [speed, ease, start, end, scrub])

  return elementRef
}

export function useParallaxShapes() {
  const shapesRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const shapes = shapesRef.current
    if (!shapes) return

    const shapeElements = shapes.querySelectorAll('[data-parallax]')
    
    shapeElements.forEach((shape, index) => {
      const speed = parseFloat(shape.getAttribute('data-parallax') || '0.5')
      
      gsap.to(shape, {
        y: `${speed * 50}%`, // Reduced from 100% to 50% for more subtle effect
        ease: "none",
        scrollTrigger: {
          trigger: shapes,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          // Ensure this only affects background shapes, not text content
          onUpdate: (self) => {
            // Only apply to elements with data-parallax attribute
            if (shape.hasAttribute('data-parallax')) {
              shape.style.transform = `translateY(${self.progress * speed * 50}%)`
            }
          }
        }
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return shapesRef
} 