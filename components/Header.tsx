'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Zap } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import DarkModeToggle from './DarkModeToggle'

interface HeaderProps {
  language: 'nl' | 'en'
}

const translations = {
  nl: {
    nav: {
      home: 'Home',
      services: 'Hoe we werken',
      about: 'Ons werk',
      contact: 'Kopje Koffie?',
    },
    cta: 'Gratis Consult',
    switchLang: 'English',
  },
  en: {
    nav: {
      home: 'Home',
      services: 'How we work',
      about: 'Our work',
      contact: 'Coffee?',
    },
    cta: 'Free Consultation',
    switchLang: 'Nederlands',
  },
}

export default function Header({ language }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const t = translations[language]
  
  const basePath = language === 'en' ? '/en' : ''
  const otherLangPath = language === 'en' ? '/' : '/en'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: t.nav.home, href: basePath || '/' },
    { name: t.nav.services, href: `${basePath}#adaline-scroll` }, // Points to "Hoe we werken" section
    { name: t.nav.about, href: `${basePath}#showcase` }, // Points to "Ons werk" section
    { name: t.nav.contact, href: `${basePath}#contact` }, // Points to "Zullen we eens kletsen" section
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl shadow-lg border-b border-neutral-200/50 dark:border-neutral-700/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href={basePath || '/'} className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ rotate: 180, scale: 1.1 }}
              transition={{ duration: 0.4, type: "spring" }}
              className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center shadow-lg"
            >
              <Zap className="w-6 h-6 text-white" />
            </motion.div>
            <div className="flex flex-col">
              <div className="font-display font-bold text-xl text-neutral-900 dark:text-neutral-100 tracking-tight">
                STE Communications
              </div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                IT Solutions
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-200 group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 dark:bg-primary-400 transition-all duration-200 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Language Switch, Dark Mode & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href={otherLangPath}
              className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              {t.switchLang}
            </Link>
            <DarkModeToggle />
            <Link href={`${basePath}#contact`} className="btn-primary">
              {t.cta}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <DarkModeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6 text-neutral-700 dark:text-neutral-300" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6 text-neutral-700 dark:text-neutral-300" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-3 border-t border-neutral-200/50 dark:border-neutral-700/50 mt-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-2 text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="pt-4 space-y-3"
                >
                  <Link
                    href={otherLangPath}
                    className="block text-sm text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {t.switchLang}
                  </Link>
                  <Link
                    href={`${basePath}#contact`}
                    onClick={() => setIsOpen(false)}
                    className="btn-primary w-full text-center"
                  >
                    {t.cta}
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}