'use client'

import { motion } from 'framer-motion'
import { Project } from '@/lib/projects/types'
import { BarChart3, TrendingUp, DollarSign, Target, Zap, Users } from 'lucide-react'

interface ProjectMetricsProps {
  project: Project
}

export default function ProjectMetrics({ project }: ProjectMetricsProps) {
  const getColorClasses = (color: string) => {
    const colors = {
      green: 'from-green-500 to-green-600',
      blue: 'from-blue-500 to-blue-600',
      purple: 'from-purple-500 to-purple-600',
      orange: 'from-orange-500 to-orange-600',
      red: 'from-red-500 to-red-600'
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Meetbare Resultaten
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Concrete cijfers en metrics die laten zien wat we hebben bereikt
          </p>
        </motion.div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800">Performance Metrics</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.performanceMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-slate-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-slate-800">{metric.name}</h4>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getColorClasses(metric.color)} text-white`}>
                    {metric.improvement}
                  </div>
                </div>
                
                <div className="text-3xl font-bold text-slate-800 mb-2">
                  {metric.value}{metric.unit}
                </div>
                
                <p className="text-sm text-slate-600 mb-4">
                  {metric.description}
                </p>
                
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full bg-gradient-to-r ${getColorClasses(metric.color)}`}
                    style={{ width: `${parseInt(metric.value)}%` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Cost Savings */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800">Kostenbesparingen</h3>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {project.costSavings.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="space-y-4"
                >
                  <h4 className="font-semibold text-slate-800">{item.item}</h4>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">Voor</span>
                      <span className="text-sm font-medium text-red-600">{item.before}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">Na</span>
                      <span className="text-sm font-medium text-green-600">{item.after}</span>
                    </div>
                    <div className="border-t border-slate-200 pt-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold text-slate-800">Besparing</span>
                        <span className="text-sm font-bold text-green-600">{item.savings}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-xs text-slate-500">{item.description}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">
                  Totale jaarlijkse besparing: {project.annualSavings}
                </div>
                <p className="text-green-700">
                  ROI van {project.roi} - terugverdiend in {project.paybackPeriod}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Marketing Results */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800">Marketing Resultaten</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.marketingResults.map((channel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-slate-200"
              >
                <h4 className="font-semibold text-slate-800 mb-4">{channel.name}</h4>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Budget</span>
                    <span className="text-sm font-medium text-slate-800">{channel.budget}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Resultaten</span>
                    <span className="text-sm font-medium text-slate-800">{channel.results}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">ROI</span>
                    <span className="text-sm font-bold text-green-600">{channel.roi}</span>
                  </div>
                </div>
                
                <p className="text-xs text-slate-500 mt-4">{channel.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SEO Improvements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800">SEO Verbeteringen</h3>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
            <div className="grid md:grid-cols-2 gap-8">
              {project.seoImprovements.map((improvement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="space-y-4"
                >
                  <h4 className="font-semibold text-slate-800">{improvement.metric}</h4>
                  
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-sm text-slate-500 mb-1">Voor</div>
                      <div className="text-lg font-semibold text-red-600">{improvement.before}</div>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="text-2xl text-slate-400">→</div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-500 mb-1">Na</div>
                      <div className="text-lg font-semibold text-green-600">{improvement.after}</div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600 mb-1">{improvement.improvement}</div>
                    <p className="text-sm text-slate-600">{improvement.impact}</p>
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
