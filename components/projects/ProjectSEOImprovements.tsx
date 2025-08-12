'use client'

import { motion } from 'framer-motion'
import { Project } from '@/lib/projects/types'
import { TrendingUp, Users, Search, BarChart3 } from 'lucide-react'

interface ProjectSEOImprovementsProps {
  project: Project
}

export default function ProjectSEOImprovements({ project }: ProjectSEOImprovementsProps) {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            SEO Verbeteringen
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            De website heeft een spectaculaire groei doorgemaakt dankzij onze SEO optimalisatie strategie
          </p>
        </motion.div>

        {/* SEO Strategy Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-4">
              <Search className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-slate-800 mb-2">Technical SEO</div>
            <div className="text-sm text-slate-600 mb-2">Core Web Vitals optimalisatie</div>
            <div className="text-green-600 font-semibold">Verbeterd</div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
            <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl mb-4">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-slate-800 mb-2">Content Strategy</div>
            <div className="text-sm text-slate-600 mb-2">Keyword optimalisatie</div>
            <div className="text-green-600 font-semibold">Geoptimaliseerd</div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
            <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-xl mb-4">
              <BarChart3 className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-slate-800 mb-2">Performance</div>
            <div className="text-sm text-slate-600 mb-2">Laadtijd optimalisatie</div>
            <div className="text-green-600 font-semibold">Verbeterd</div>
          </div>
        </motion.div>

        {/* SEO Strategy Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* SEO Approach */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">SEO Aanpak</h3>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-slate-800 mb-2">Technical SEO</h4>
                <p className="text-sm text-slate-600">Core Web Vitals optimalisatie, schema markup implementatie en site structuur verbetering</p>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-slate-800 mb-2">Content Strategy</h4>
                <p className="text-sm text-slate-600">Keyword research, content optimalisatie en interne linkstructuur</p>
              </div>
              
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-slate-800 mb-2">Performance</h4>
                <p className="text-sm text-slate-600">Laadtijd optimalisatie, image compression en caching strategie</p>
              </div>
            </div>
          </div>

          {/* Results Overview */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Resultaten</h3>
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 rounded-lg">
                <h4 className="font-semibold text-slate-800 mb-2">Verbeterde vindbaarheid</h4>
                <p className="text-sm text-slate-600">Betere rankings in zoekmachines voor relevante zoektermen</p>
              </div>
              
              <div className="p-4 bg-slate-50 rounded-lg">
                <h4 className="font-semibold text-slate-800 mb-2">Toegenomen verkeer</h4>
                <p className="text-sm text-slate-600">Meer organisch verkeer en betere gebruikerservaring</p>
              </div>
              
              <div className="p-4 bg-slate-50 rounded-lg">
                <h4 className="font-semibold text-slate-800 mb-2">Conversie optimalisatie</h4>
                <p className="text-sm text-slate-600">Verbeterde conversieratios door betere website performance</p>
              </div>
            </div>
          </div>
        </motion.div>


      </div>
    </section>
  )
}
