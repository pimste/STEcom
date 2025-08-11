'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Code2, Zap } from 'lucide-react'
import Link from 'next/link'

interface HeroProps {
  language: 'nl' | 'en'
}

const translations = {
  nl: {
    headline: 'IT die werkt,',
    headlineAccent: 'websites die converteren',
    subheading: 'Geen wachtmuziek, geen technisch gebrabbel. Gewoon problemen oplossen en resultaten leveren die er toe doen.',
    cta: 'Gratis Gesprek',
  },
  en: {
    headline: 'IT that works,',
    headlineAccent: 'websites that convert',
    subheading: "No hold music, no technical jargon. Just solving problems and delivering results that matter.",
    cta: 'Free Consultation',
  },
}

export default function Hero({ language }: HeroProps) {
  const t = translations[language]
  const basePath = language === 'en' ? '/en' : ''

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-accent-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-primary-900/20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-200 dark:bg-primary-800/30 rounded-full blur-3xl opacity-30 dark:opacity-10"
        />
        <motion.div
          animate={{
            x: [0, -150, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-200 dark:bg-accent-800/30 rounded-full blur-3xl opacity-20 dark:opacity-8"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 right-1/3 w-48 h-48 bg-primary-300 dark:bg-primary-700/30 rounded-full blur-3xl opacity-15 dark:opacity-5"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          {/* Floating Background Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 10, 0]
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute top-32 right-20 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl shadow-lg opacity-10 blur-sm"
            />
            <motion.div
              animate={{ 
                y: [0, 15, 0],
                rotate: [0, -8, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, delay: 2 }}
              className="absolute bottom-40 left-1/4 w-8 h-8 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl shadow-lg opacity-15 blur-sm"
            />
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ duration: 10, repeat: Infinity, delay: 4 }}
              className="absolute top-1/2 left-20 w-6 h-6 bg-gradient-to-br from-primary-400 to-accent-400 rounded-lg shadow-lg opacity-20 blur-sm"
            />
          </div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Headlines */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="fluid-text-5xl font-display font-black text-neutral-900 dark:text-neutral-100 leading-tight tracking-tight"
              >
                {t.headline}
                <br />
                <span className="text-emphasis relative">
                  {t.headlineAccent}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                  />
                </span>
              </motion.h1>
            </div>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="fluid-text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed"
            >
              {t.subheading}
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="pt-8"
            >
              <Link
                href={`${basePath}#contact`}
                className="btn-primary fluid-text-base"
              >
                <span>{t.cta}</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-neutral-400 dark:border-neutral-500 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gradient-to-b from-primary-500 to-accent-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}