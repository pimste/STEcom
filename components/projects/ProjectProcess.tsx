'use client'

import { motion } from 'framer-motion'
import { Project } from '@/lib/projects/types'
import { Calendar, MessageSquare, Code, CheckCircle, Clock } from 'lucide-react'

interface ProjectProcessProps {
  project: Project
}

export default function ProjectProcess({ project }: ProjectProcessProps) {
  const getPhaseIcon = (phase: string) => {
    if (phase.toLowerCase().includes('design')) return '🎨'
    if (phase.toLowerCase().includes('development')) return '💻'
    if (phase.toLowerCase().includes('testing')) return '🧪'
    if (phase.toLowerCase().includes('launch')) return '🚀'
    if (phase.toLowerCase().includes('seo')) return '📈'
    return '📋'
  }

  const getCommunicationIcon = (type: string) => {
    switch (type) {
      case 'meeting': return '🤝'
      case 'email': return '📧'
      case 'call': return '📞'
      case 'presentation': return '📊'
      default: return '💬'
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
            Project Proces
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Een gedetailleerd overzicht van onze werkwijze en communicatie
          </p>
        </motion.div>

        {/* Development Phases */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Code className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800">Development Fases</h3>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200" />
            
            <div className="space-y-8">
              {project.developmentPhases.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative flex items-start gap-6"
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10 w-16 h-16 bg-white rounded-full border-4 border-blue-500 flex items-center justify-center text-2xl">
                    {getPhaseIcon(phase.phase)}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-slate-50 rounded-xl p-6 border border-slate-200">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xl font-semibold text-slate-800">{phase.phase}</h4>
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Clock className="w-4 h-4" />
                        {phase.duration}
                      </div>
                    </div>
                    
                    <p className="text-slate-700 mb-4">{phase.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-slate-800 mb-2">Technologieën</h5>
                        <div className="flex flex-wrap gap-2">
                          {phase.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-slate-800 mb-2">Deliverables</h5>
                        <div className="space-y-1">
                          {phase.deliverables.map((deliverable, delIndex) => (
                            <div key={delIndex} className="flex items-center gap-2 text-sm text-slate-600">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              {deliverable}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Communication Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800">Communicatie Timeline</h3>
          </div>
          
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <div className="space-y-6">
              {project.communicationLog.map((log, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-200"
                >
                  <div className="text-2xl">
                    {getCommunicationIcon(log.type)}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-slate-800 capitalize">{log.type}</h4>
                      <div className="text-sm text-slate-500">
                        {new Date(log.date).toLocaleDateString('nl-NL', { 
                          day: 'numeric', 
                          month: 'short', 
                          year: 'numeric' 
                        })}
                      </div>
                    </div>
                    
                    <p className="text-slate-700 mb-2">{log.summary}</p>
                    <p className="text-sm text-slate-600">
                      <strong>Uitkomst:</strong> {log.outcome}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
