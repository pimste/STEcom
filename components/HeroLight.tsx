'use client'

import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { ArrowDown, Sparkles } from 'lucide-react'
import { useParallaxShapes } from '@/lib/useParallax'

const words = [
  "websites",
  "apps", 
  "pipelines",
  "platforms",
  "support",
  "dataverwerking",
  "AI-oplossingen",
  "automatisering",
  "e-commerce",
  "dashboards",
  "integraties",
  "API's",
  "databases",
  "cloud oplossingen",
  "beveiliging",
  "performance",
  "SEO optimalisatie",
  "mobile apps",
  "web applicaties",
  "systeembeheer"
]

export default function HeroLight() {
  const containerRef = useRef<HTMLDivElement>(null)
  const shapesRef = useParallaxShapes()
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const scrollToNext = () => {
    const nextSection = document.getElementById('adaline-scroll')
    nextSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50"
    >
      {/* Abstract Background Shapes for Depth with Parallax */}
      <div ref={shapesRef} className="absolute inset-0 overflow-hidden">
        {/* Large organic blob - bottom right (foreground, more defined) */}
        <div
          data-parallax="0.2"
          className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-teal-300/45 to-blue-400/40 blur-sm"
          style={{
            transformOrigin: "bottom right",
            borderRadius: "58% 42% 38% 62% / 42% 58% 42% 58%",
          }}
        />
        
        {/* Medium organic blob - top left (midground, medium definition) */}
        <div
          data-parallax="0.4"
          className="absolute top-0 left-0 w-56 h-56 bg-gradient-to-br from-indigo-300/35 to-purple-400/30 blur-md"
          style={{
            transformOrigin: "top left",
            borderRadius: "65% 35% 45% 55% / 55% 45% 55% 45%",
          }}
        />
        
        {/* Small organic blob - center (background, softer) */}
        <div
          data-parallax="0.6"
          className="absolute w-20 h-20 bg-gradient-to-br from-blue-300/40 to-indigo-400/35 blur-lg"
          style={{
            left: `${25}%`,
            top: `${35}%`,
            borderRadius: `${40}% ${60}% ${35}% ${65}% / ${50}% ${50}% ${45}% ${55}%`,
          }}
        />
      </div>
      
      {/* Subtle floating shapes (no parallax) */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, Math.sin(i) * 30],
              y: [0, Math.cos(i) * 30],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2,
            }}
            className="absolute opacity-5"
            style={{
              left: `${10 + (i % 3) * 30}%`,
              top: `${10 + Math.floor(i / 3) * 30}%`,
            }}
          >
            <div className="w-24 h-24 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-xl" />
          </motion.div>
        ))}
      </div>
      
      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_70%,rgba(59,130,246,0.03),transparent_60%)]" />
      <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_80%_20%,rgba(147,51,234,0.02),rgba(59,130,246,0.02),rgba(147,51,234,0.02))]" />
      
      {/* Subtle noise texture */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.15)_1px,transparent_0)] bg-[length:20px_20px]" />

      {/* Main Content - No Parallax */}
      <motion.div 
        ref={ref}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        {/* Gentle introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm border border-slate-200 rounded-full text-slate-600 text-sm font-medium tracking-wide">
            <Sparkles className="w-4 h-4" />
            Digitaal vakmanschap sinds 2019
          </span>
        </motion.div>

        {/* Main headline - nieuwe titel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light text-slate-800 leading-[1.1] tracking-tight mb-4">
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="block"
            >
              Slimme IT-oplossingen
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="block text-blue-600"
            >
              die écht werken
            </motion.span>
          </h1>
        </motion.div>

        {/* Subtitle - met roterende tekst */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-12 space-y-4"
        >
          <p className="text-xl md:text-2xl text-slate-600 font-light max-w-3xl mx-auto leading-relaxed">
            Geen technische verhalen of marketingpraat.{' '}
            <span className="text-slate-800 font-medium">
              Gewoon eerlijke{' '}
              <span className="inline-block text-blue-600 min-w-[200px]">
                <motion.span
                  key={currentWordIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block"
                >
                  {words[currentWordIndex]}
                </motion.span>
              </span>
            </span>{' '}
            die je bezoekers blij maken én jouw doelen bereiken.
          </p>
        </motion.div>

        {/* Gentle stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-12 grid grid-cols-3 gap-8 max-w-xl mx-auto"
        >
          {[
            { value: "100+", label: "Tevreden klanten" },
            { value: "< 2s", label: "Laadtijd" },
            { value: "99.9%", label: "Beschikbaarheid" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -2 }}
              className="text-center group"
            >
              <div className="text-2xl md:text-3xl font-light text-blue-600 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-slate-500 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Friendly CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Laten we kennismaken
          </motion.button>

          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 border-2 border-slate-300 text-slate-700 rounded-xl font-medium hover:border-slate-400 hover:bg-slate-50 transition-all duration-300"
          >
            Bekijk ons werk
          </motion.button>
        </motion.div>

        {/* Gentle scroll indicator - now below buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="flex flex-col items-center gap-2"
        >
          <p className="text-sm text-slate-500">Ontdek hoe we werken</p>
          <motion.button
            onClick={scrollToNext}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-3 text-slate-400 hover:text-slate-600 transition-colors duration-300"
          >
            <ArrowDown className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}