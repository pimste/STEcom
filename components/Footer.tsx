'use client'

import { motion } from 'framer-motion'
import { Heart, Coffee, Code, Zap } from 'lucide-react'
import Link from 'next/link'

interface FooterProps {
  language: 'nl' | 'en'
}

const translations = {
  nl: {
    tagline: 'Gemaakt met té veel koffie door STE Communications Company',
    nav: {
      services: 'Services',
      about: 'Over Ons',
      contact: 'Contact',
    },
    legal: {
      privacy: 'Privacy',
      terms: 'Voorwaarden',
    },
    social: 'Volg de chaos',
    quote: 'Code is poëzie die computers kunnen lezen',
  },
  en: {
    tagline: 'Made with too much coffee by STE Communications Company',
    nav: {
      services: 'Services',
      about: 'About Us',
      contact: 'Contact',
    },
    legal: {
      privacy: 'Privacy',
      terms: 'Terms',
    },
    social: 'Follow the chaos',
    quote: 'Code is poetry that computers can read',
  },
}

export default function Footer({ language }: FooterProps) {
  const t = translations[language]
  const basePath = language === 'en' ? '/en' : ''
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Logo & Tagline */}
          <div className="lg:col-span-2 space-y-6">
            <Link href={basePath || '/'} className="flex items-center space-x-3 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center"
              >
                <Zap className="w-6 h-6 text-white" />
              </motion.div>
              <div className="font-display font-black text-2xl text-neutral-900 dark:text-neutral-100 tracking-tight">
                STE Communications
              </div>
            </Link>

            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed max-w-md">
                {t.quote}
              </p>
              
              {/* Fun Tagline */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="flex items-center space-x-2 text-gray-400"
              >
                <span>{t.tagline.split('té veel koffie')[0] || t.tagline.split('too much coffee')[0]}</span>
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                >
                  <Coffee className="w-4 h-4 text-amber-400" />
                </motion.div>
                <span>
                  {language === 'nl' ? 'té veel koffie' : 'too much coffee'}
                </span>
                <Heart className="w-4 h-4 text-red-400" />
                <span>
                  {t.tagline.split(language === 'nl' ? 'té veel koffie door ' : 'too much coffee by ')[1]}
                </span>
              </motion.div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-display font-semibold text-white">
              Quick Links
            </h3>
            <nav className="space-y-3">
              <Link
                href={`${basePath}#services`}
                className="block text-gray-400 hover:text-primary-400 transition-colors duration-200"
              >
                {t.nav.services}
              </Link>
              <Link
                href={`${basePath}#about`}
                className="block text-gray-400 hover:text-primary-400 transition-colors duration-200"
              >
                {t.nav.about}
              </Link>
              <Link
                href={`${basePath}#contact`}
                className="block text-gray-400 hover:text-primary-400 transition-colors duration-200"
              >
                {t.nav.contact}
              </Link>
            </nav>
          </div>


        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
        >
          <div className="text-gray-400 text-sm">
            © {currentYear} STE Communications Company. 
            <span className="ml-1">
              {language === 'nl' 
                ? 'Alle rechten voorbehouden (maar we delen graag!)' 
                : 'All rights reserved (but we love to share!)'
              }
            </span>
          </div>
          
          <div className="flex items-center space-x-6 text-sm">
            <Link
              href={`${basePath}/privacy`}
              className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
            >
              {t.legal.privacy}
            </Link>
            <Link
              href={`${basePath}/terms`}
              className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
            >
              {t.legal.terms}
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}