'use client'

import { motion } from 'framer-motion'
import { Project } from '@/lib/projects/types'
import { ArrowRight, ExternalLink, MessageCircle } from 'lucide-react'
import Link from 'next/link'

interface ProjectCTAProps {
  project: Project
}

export default function ProjectCTA({ project }: ProjectCTAProps) {
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600', 
    purple: 'from-purple-500 to-purple-600',
    orange: 'from-orange-500 to-orange-600',
    red: 'from-red-500 to-red-600',
    teal: 'from-teal-500 to-teal-600'
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Wil je vergelijkbare resultaten?
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Laten we praten over wat we voor jouw bedrijf kunnen betekenen. 
            Net zoals {project.client} kun je ook profiteren van onze expertise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left: Key Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6">Wat je kunt verwachten:</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <div className="font-semibold">ROI van {project.roi}</div>
                  <div className="text-slate-300 text-sm">Terugverdiend in {project.paybackPeriod}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <div className="font-semibold">Jaarlijkse besparing van {project.annualSavings}</div>
                  <div className="text-slate-300 text-sm">Op operationele kosten</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <div className="font-semibold">Professionele uitstraling</div>
                  <div className="text-slate-300 text-sm">Die vertrouwen wekt bij klanten</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <div className="font-semibold">Volledige ondersteuning</div>
                  <div className="text-slate-300 text-sm">Van concept tot lancering</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: CTA Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold mb-6">Start jouw project</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Naam</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Jouw naam"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="jouw@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Bedrijf</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Jouw bedrijf"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Project beschrijving</label>
                <textarea 
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 resize-none"
                  placeholder="Vertel ons over jouw project..."
                />
              </div>
              
              <button 
                className={`w-full py-4 px-6 bg-gradient-to-r ${colorClasses[project.color]} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2`}
              >
                <MessageCircle className="w-5 h-5" />
                Gratis consultatie aanvragen
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-slate-300">
                Of bel direct: <a href="tel:+31612345678" className="text-blue-400 hover:text-blue-300">+31 6 12345678</a>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {project.projectUrl && (
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Bekijk {project.title} live
              </a>
            )}
            
            <Link
              href="/#showcase"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
            >
              <ArrowRight className="w-4 h-4" />
              Meer projecten bekijken
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
