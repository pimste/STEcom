'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Project } from '@/lib/projects/types'
import { Target, CheckCircle, TrendingUp, ArrowRight, Code, Server, Globe, Link } from 'lucide-react'

interface ProjectOverviewProps {
  project: Project
}

export default function ProjectOverview({ project }: ProjectOverviewProps) {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const overviewCards = [
    {
      id: 'challenges',
      title: 'Uitdagingen',
      icon: Target,
      color: 'red',
      items: project.challenges,
      description: 'De belangrijkste uitdagingen die we hebben aangepakt',
      backgroundImage: '/images/nibm-proj/5-ton-tower-cranes-1000x1000.jpeg'
    },
    {
      id: 'solutions',
      title: 'Oplossingen',
      icon: CheckCircle,
      color: 'blue',
      items: project.solutions,
      description: 'Onze strategische oplossingen en aanpak',
      backgroundImage: '/images/nibm-proj/Potain.-MCR-305.-1.jpeg'
    },
    {
      id: 'results',
      title: 'Resultaten',
      icon: TrendingUp,
      color: 'green',
      items: project.results,
      description: 'De behaalde resultaten en verbeteringen',
      backgroundImage: '/images/nibm-proj/Modern_Safety-Helmet-1024x576.webp'
    }
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'red':
        return {
          bg: 'bg-red-100',
          text: 'text-red-600',
          border: 'border-red-200',
          dot: 'bg-red-500'
        }
      case 'blue':
        return {
          bg: 'bg-blue-100',
          text: 'text-blue-600',
          border: 'border-blue-200',
          dot: 'bg-blue-500'
        }
      case 'green':
        return {
          bg: 'bg-green-100',
          text: 'text-green-600',
          border: 'border-green-200',
          dot: 'bg-green-500'
        }
      default:
        return {
          bg: 'bg-slate-100',
          text: 'text-slate-600',
          border: 'border-slate-200',
          dot: 'bg-slate-500'
        }
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Project Overzicht
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Een complete breakdown van de uitdagingen, oplossingen en resultaten van dit project
          </p>
        </motion.div>

        {/* Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {overviewCards.map((card, index) => {
            const colors = getColorClasses(card.color)
            const Icon = card.icon
            
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card Container */}
                <div className={`relative h-80 bg-white rounded-2xl overflow-hidden shadow-lg border ${colors.border} transition-all duration-300 group-hover:shadow-2xl group-hover:scale-[1.02]`}>
                  
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={card.backgroundImage}
                      alt={`${card.title} background`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-end p-6">

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/80 text-sm mb-4">
                      {card.description}
                    </p>

                    {/* Arrow Indicator */}
                    <div className="flex items-center text-white/60 group-hover:text-white transition-colors">
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <AnimatePresence>
                    {hoveredCard === card.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm flex flex-col justify-center p-6"
                      >
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className="text-white"
                        >
                          <h4 className="text-xl font-bold mb-4">
                            {card.title}
                          </h4>
                          <div className="space-y-3">
                            {card.items.map((item, itemIndex) => (
                              <div key={itemIndex} className="flex items-start gap-3">
                                <div className={`w-2 h-2 ${colors.dot} rounded-full mt-2 flex-shrink-0`} />
                                <p className="text-white/90 text-sm leading-relaxed">
                                  {item}
                                </p>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Skills & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
              Gebruikte Technologieën & Vaardigheden
            </h3>
            <p className="text-lg text-slate-600">
              Een overzicht van alle tools, technologieën en expertise die we hebben ingezet
            </p>
          </div>

          {/* Technology Cards with Icons */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {Object.entries(project.technologies).map(([category, techs], index) => {
              const categoryIcons = {
                frontend: Code,
                backend: Server,
                infrastructure: Globe,
                thirdParty: Link
              }
              const Icon = categoryIcons[category as keyof typeof categoryIcons] || Code
              
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                  onMouseEnter={() => setHoveredCard(`tech-${category}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Card Container */}
                  <div className="relative h-48 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl overflow-hidden shadow-lg border border-slate-200 transition-all duration-300 group-hover:shadow-2xl group-hover:scale-[1.02]">
                    
                    {/* Content */}
                    <div className="relative h-full flex flex-col justify-center p-6 text-center">
                      {/* Category Icon */}
                      <div className="flex justify-center mb-4">
                        <div className="w-12 h-12 bg-slate-200 rounded-xl flex items-center justify-center">
                          <Icon className="w-6 h-6 text-slate-600" />
                        </div>
                      </div>

                      {/* Category Title */}
                      <h4 className="text-lg font-bold text-slate-800 mb-2 capitalize">
                        {category}
                      </h4>

                      {/* Technology Count */}
                      <p className="text-slate-600 text-sm mb-4">
                        {techs.length} technologie{techs.length !== 1 ? 'ën' : ''}
                      </p>

                      {/* Arrow Indicator */}
                      <div className="flex items-center justify-center text-slate-400 group-hover:text-slate-600 transition-colors">
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <AnimatePresence>
                      {hoveredCard === `tech-${category}` && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0 bg-slate-900/95 backdrop-blur-sm flex flex-col justify-center p-6"
                        >
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="text-white"
                          >
                            <h4 className="text-lg font-bold mb-4 capitalize">
                              {category}
                            </h4>
                            <div className="space-y-2">
                              {techs.map((tech, techIndex) => (
                                <div key={techIndex} className="flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0" />
                                  <p className="text-white/90 text-sm">
                                    {tech}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
