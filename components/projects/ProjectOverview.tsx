'use client'

import { motion } from 'framer-motion'
import { Project } from '@/lib/projects/types'
import { Target, CheckCircle, TrendingUp, Code, Palette, BarChart3 } from 'lucide-react'

interface ProjectOverviewProps {
  project: Project
}

export default function ProjectOverview({ project }: ProjectOverviewProps) {
  const categoryIcons = {
    frontend: Code,
    backend: Code,
    design: Palette,
    marketing: BarChart3,
    seo: TrendingUp,
    analytics: BarChart3,
    communication: Target
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

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Challenges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Uitdagingen</h3>
            </div>
            
            <div className="space-y-4">
              {project.challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-slate-700 leading-relaxed">{challenge}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Oplossingen</h3>
            </div>
            
            <div className="space-y-4">
              {project.solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-slate-700 leading-relaxed">{solution}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Resultaten</h3>
            </div>
            
            <div className="space-y-4">
              {project.results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-slate-700 leading-relaxed">{result}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(project.technologies).map(([category, techs]) => (
              <div key={category} className="space-y-4">
                <h4 className="text-lg font-semibold text-slate-800 capitalize">
                  {category}
                </h4>
                <div className="space-y-2">
                  {techs.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-slate-600"
                    >
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Skills by Category */}
          <div className="mt-12">
            <h4 className="text-xl font-semibold text-slate-800 mb-6 text-center">
              Expertise Gebieden
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {Object.entries(
                project.skills.reduce((acc, skill) => {
                  if (!acc[skill.category]) acc[skill.category] = []
                  acc[skill.category].push(skill)
                  return acc
                }, {} as Record<string, typeof project.skills>)
              ).map(([category, skills]) => {
                const Icon = categoryIcons[category as keyof typeof categoryIcons] || Target
                return (
                  <div key={category} className="bg-slate-50 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className="w-5 h-5 text-slate-600" />
                      <h5 className="font-semibold text-slate-800 capitalize">
                        {category}
                      </h5>
                    </div>
                    <div className="space-y-1">
                      {skills.map((skill, index) => (
                        <div key={index} className="text-sm text-slate-600">
                          {skill.name}
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
