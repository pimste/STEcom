'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    id: 'nibm-towercranes',
    title: 'NIBM Towercranes',
    subtitle: 'Website & SEO Optimalisatie',
    description: 'Moderne website met CMS, SEO optimalisatie en LinkedIn advertenties voor een torenkranen leverancier.',
    image: '/images/nibm-proj/5-ton-tower-cranes-1000x1000.jpeg',
    link: '/projects/nibm-towercranes',
    category: 'Web Development'
  },
  {
    id: 'potain-cranes',
    title: 'Potain MCR-305',
    subtitle: 'Product Catalogus',
    description: 'Uitgebreide product catalogus voor torenkranen met gedetailleerde specificaties en technische informatie.',
    image: '/images/nibm-proj/Potain.-MCR-305.-1.jpeg',
    link: '/projects/potain-cranes',
    category: 'Product Design'
  },
  {
    id: 'safety-equipment',
    title: 'Safety Equipment',
    subtitle: 'Veiligheidsuitrusting',
    description: 'Moderne veiligheidsuitrusting voor de bouwsector met focus op kwaliteit en duurzaamheid.',
    image: '/images/nibm-proj/Modern_Safety-Helmet-1024x576.webp',
    link: '/projects/safety-equipment',
    category: 'Safety Solutions'
  }
]

export default function InteractiveProjectGrid() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <section id="interactive-projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Meer Projecten ({projects.length})
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ontdek meer van onze projecten en zie hoe we verschillende strategieën en technieken toepassen voor optimale resultaten.
          </p>
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors mt-6 group"
          >
            Ontdek meer 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Container */}
              <div className="relative h-96 bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 transition-all duration-300 group-hover:shadow-2xl group-hover:scale-[1.02]">
                
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-6">
                  {/* Category Badge */}
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-white/90 text-lg mb-4">
                    {project.subtitle}
                  </p>

                  {/* Arrow Indicator */}
                  <div className="flex items-center text-white/80 group-hover:text-white transition-colors">
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Hover Overlay */}
                <AnimatePresence>
                  {hoveredCard === project.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-black/80 backdrop-blur-sm flex flex-col justify-center p-6"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="text-white"
                      >
                        <h4 className="text-xl font-bold mb-3">
                          {project.title}
                        </h4>
                        <p className="text-white/90 text-sm leading-relaxed mb-6">
                          {project.description}
                        </p>
                        <Link
                          href={project.link}
                          className="inline-flex items-center gap-2 text-white hover:text-blue-300 transition-colors group"
                        >
                          Lees meer
                          <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
          style={{ position: 'relative' }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:scale-110 group"
            style={{ 
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 10
            }}
          >
            <ArrowRight className="w-6 h-6 text-slate-600 group-hover:text-slate-800 transition-colors" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
