import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, TextPlugin)
}

// Animation presets
export const fadeInUp = {
  opacity: 0,
  y: 50,
  duration: 0.8,
  ease: "power2.out"
}

export const fadeInDown = {
  opacity: 0,
  y: -50,
  duration: 0.8,
  ease: "power2.out"
}

export const fadeInLeft = {
  opacity: 0,
  x: -50,
  duration: 0.8,
  ease: "power2.out"
}

export const fadeInRight = {
  opacity: 0,
  x: 50,
  duration: 0.8,
  ease: "power2.out"
}

export const scaleIn = {
  opacity: 0,
  scale: 0.8,
  duration: 0.6,
  ease: "back.out(1.7)"
}

export const slideInUp = {
  opacity: 0,
  y: 100,
  duration: 1,
  ease: "power3.out"
}

// Stagger animations
export const staggerFadeInUp = {
  opacity: 0,
  y: 30,
  duration: 0.6,
  ease: "power2.out",
  stagger: 0.1
}

export const staggerScaleIn = {
  opacity: 0,
  scale: 0.8,
  duration: 0.5,
  ease: "back.out(1.7)",
  stagger: 0.1
}

// Utility functions
export const animateOnScroll = (element: string | Element, animation: any, trigger?: any) => {
  return gsap.fromTo(element, 
    animation.from || { opacity: 0, y: 50 },
    {
      ...animation.to || { opacity: 1, y: 0 },
      scrollTrigger: {
        trigger: trigger || element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    }
  )
}

export const parallaxEffect = (element: string | Element, speed: number = 0.5) => {
  return gsap.to(element, {
    yPercent: -50 * speed,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  })
}

export const textReveal = (element: string | Element, delay: number = 0) => {
  return gsap.fromTo(element,
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay,
      ease: "power2.out"
    }
  )
}

export const counterAnimation = (element: string | Element, endValue: number, duration: number = 2) => {
  return gsap.to(element, {
    innerHTML: endValue,
    duration,
    ease: "power2.out",
    snap: { innerHTML: 1 },
    scrollTrigger: {
      trigger: element,
      start: "top 80%"
    }
  })
}

// Page transitions
export const pageEnter = (element: string | Element) => {
  const tl = gsap.timeline()
  
  tl.fromTo(element,
    { opacity: 0, scale: 0.95 },
    { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" }
  )
  
  return tl
}

export const pageExit = (element: string | Element) => {
  return gsap.to(element, {
    opacity: 0,
    scale: 1.05,
    duration: 0.4,
    ease: "power2.in"
  })
}

// Hover animations
export const hoverScale = (element: string | Element, scale: number = 1.05) => {
  const el = typeof element === 'string' ? document.querySelector(element) : element
  if (!el) return

  el.addEventListener('mouseenter', () => {
    gsap.to(el, { scale, duration: 0.3, ease: "power2.out" })
  })
  
  el.addEventListener('mouseleave', () => {
    gsap.to(el, { scale: 1, duration: 0.3, ease: "power2.out" })
  })
}

export const hoverLift = (element: string | Element, lift: number = -10) => {
  const el = typeof element === 'string' ? document.querySelector(element) : element
  if (!el) return

  el.addEventListener('mouseenter', () => {
    gsap.to(el, { y: lift, duration: 0.3, ease: "power2.out" })
  })
  
  el.addEventListener('mouseleave', () => {
    gsap.to(el, { y: 0, duration: 0.3, ease: "power2.out" })
  })
}

// Loading animations
export const loadingSpinner = (element: string | Element) => {
  return gsap.to(element, {
    rotation: 360,
    duration: 1,
    ease: "none",
    repeat: -1
  })
}

export const progressBar = (element: string | Element, progress: number) => {
  return gsap.to(element, {
    width: `${progress}%`,
    duration: 1,
    ease: "power2.out"
  })
}

// Cleanup function
export const cleanupAnimations = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
}

// Initialize animations on page load
export const initAnimations = () => {
  // Animate elements with data-animate attribute
  gsap.utils.toArray('[data-animate]').forEach((el: any) => {
    const animation = el.dataset.animate
    const delay = parseFloat(el.dataset.delay) || 0
    
    switch (animation) {
      case 'fadeInUp':
        gsap.fromTo(el, fadeInUp, { ...fadeInUp, delay, opacity: 1, y: 0 })
        break
      case 'fadeInDown':
        gsap.fromTo(el, fadeInDown, { ...fadeInDown, delay, opacity: 1, y: 0 })
        break
      case 'fadeInLeft':
        gsap.fromTo(el, fadeInLeft, { ...fadeInLeft, delay, opacity: 1, x: 0 })
        break
      case 'fadeInRight':
        gsap.fromTo(el, fadeInRight, { ...fadeInRight, delay, opacity: 1, x: 0 })
        break
      case 'scaleIn':
        gsap.fromTo(el, scaleIn, { ...scaleIn, delay, opacity: 1, scale: 1 })
        break
    }
  })
} 