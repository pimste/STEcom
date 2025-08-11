'use client'

import { motion } from 'framer-motion'
import { Project } from '@/lib/projects/types'
import { Trophy, TrendingUp, Target, Award } from 'lucide-react'

interface ProjectResultsProps {
  project: Project
}

export default function ProjectResults({ project }: ProjectResultsProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Business Impact & Resultaten
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            De concrete voordelen en voorsprong die dit project heeft opgeleverd
          </p>
        </motion.div>

        {/* Competitive Advantages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Trophy className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800">Competitieve Voordelen</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.competitiveAdvantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Award className="w-4 h-4 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-slate-800">Voordeel {index + 1}</h4>
                </div>
                <p className="text-slate-700">{advantage}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Business Impact Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Bottom Line Impact</h3>
            <p className="text-lg text-slate-600">
              Wat dit project betekent voor de business van {project.client}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">{project.roi}</div>
              <div className="text-lg font-semibold text-slate-800 mb-1">ROI</div>
              <div className="text-sm text-slate-600">Return on Investment</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{project.paybackPeriod}</div>
              <div className="text-lg font-semibold text-slate-800 mb-1">Terugverdientijd</div>
              <div className="text-sm text-slate-600">Wanneer de investering is terugverdiend</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">{project.annualSavings}</div>
              <div className="text-lg font-semibold text-slate-800 mb-1">Jaarlijkse besparing</div>
              <div className="text-sm text-slate-600">Besparingen op operationele kosten</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
