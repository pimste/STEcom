'use client'

import { motion } from 'framer-motion'
import { Coffee, Code, Heart, Zap } from 'lucide-react'
import Image from 'next/image'

interface AboutProps {
  language: 'nl' | 'en'
}

const translations = {
  nl: {
    title: 'Over STE Communications',
    subtitle: 'De man achter de magie',
    intro: 'Hey! Ik ben Pim Steijns, de hersens achter STE Communications. Ik drink te veel koffie, los IT problemen op die anderen hebben opgegeven, en bouw websites die écht werken.',
    story: [
      'Begonnen als die nerd die iedereen belde als hun computer crashte.',
      'Ontdekte dat bedrijven dezelfde frustraties hebben als gewone mensen.',
      'Besloot er iets aan te doen met humor, kunde en véél koffie.',
      'Nu help ik bedrijven groeien met IT die niet in de weg staat.',
    ],
    stats: [],
    philosophy: 'Mijn filosofie? IT moet werken, niet frustreren. Websites moeten verkopen, niet alleen mooi zijn. En automatisering moet tijd besparen, niet meer problemen creëren.',
    cta: 'Klaar om te beginnen?',
  },
  en: {
    title: 'About STE Communications',
    subtitle: 'The man behind the magic',
    intro: "Hey! I'm Pim Steijns, the brains behind STE Communications. I drink too much coffee, solve IT problems others have given up on, and build websites that actually work.",
    story: [
      'Started as that nerd everyone called when their computer crashed.',
      'Discovered that businesses have the same frustrations as regular people.',
      'Decided to do something about it with humor, skill, and lots of coffee.',
      'Now I help businesses grow with IT that gets out of the way.',
    ],
    stats: [],
    philosophy: 'My philosophy? IT should work, not frustrate. Websites should sell, not just look pretty. And automation should save time, not create more problems.',
    cta: 'Ready to get started?',
  },
}

export default function About({ language }: AboutProps) {
  const t = translations[language]
  const basePath = language === 'en' ? '/en' : ''

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-black text-gray-900 mb-6 tracking-tight">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Profile Image Placeholder */}
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-80 h-80 mx-auto bg-gradient-to-br from-primary-100 to-accent-100 rounded-3xl flex items-center justify-center shadow-xl"
              >
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">PS</span>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-display font-bold text-gray-800">
                      Pim Steijns
                    </div>
                    <div className="text-gray-600 font-medium">
                      Founder & IT Wizard
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <Coffee className="w-6 h-6 text-white" />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <Code className="w-6 h-6 text-white" />
              </motion.div>
            </div>


          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Intro */}
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                {t.intro}
              </p>

              {/* Story Points */}
              <div className="space-y-4">
                {t.story.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-4 group"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mt-3 group-hover:scale-150 transition-transform duration-300" />
                    <p className="text-gray-600 leading-relaxed">
                      {point}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="p-8 bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl border border-primary-100"
            >
              <p className="text-lg text-gray-700 leading-relaxed font-medium italic">
                &ldquo;{t.philosophy}&rdquo;
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a
                href={`${basePath}#contact`}
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
              >
                <span>{t.cta}</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Zap className="w-5 h-5" />
                </motion.div>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}