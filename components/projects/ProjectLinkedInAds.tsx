'use client'

import { motion } from 'framer-motion'
import { Project } from '@/lib/projects/types'
import { Linkedin, Target, TrendingUp, Eye, Users, MousePointer } from 'lucide-react'

interface ProjectLinkedInAdsProps {
  project: Project
}

export default function ProjectLinkedInAds({ project }: ProjectLinkedInAdsProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        {/* LinkedIn Ads Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-xl mb-4">
              <Linkedin className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-slate-800 mb-2">B2B Targeting</div>
            <div className="text-sm text-slate-600 mb-2">Gerichte advertenties</div>
            <div className="text-blue-600 font-semibold">LinkedIn Ads</div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200">
            <div className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-xl mb-4">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-slate-800 mb-2">Lead Generation</div>
            <div className="text-sm text-slate-600 mb-2">Kwalitatieve leads</div>
            <div className="text-green-600 font-semibold">Multi-platform</div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border border-purple-200">
            <div className="flex items-center justify-center w-12 h-12 bg-purple-500 rounded-xl mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-slate-800 mb-2">Brand Awareness</div>
            <div className="text-sm text-slate-600 mb-2">Verhoogde zichtbaarheid</div>
            <div className="text-purple-600 font-semibold">Real-time</div>
          </div>
        </motion.div>

        {/* Campaign Performance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 mb-16"
        >
          {/* LinkedIn Campaign Details */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <Linkedin className="w-6 h-6 text-blue-600" />
              LinkedIn Advertentie Campagne
            </h3>
            <div className="space-y-6">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-slate-800 mb-2">B2B Targeting</h4>
                <p className="text-sm text-slate-600">Gerichte advertenties voor professionals in de bouwsector</p>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-slate-800 mb-2">Lead Generation</h4>
                <p className="text-sm text-slate-600">Kwalitatieve leads door specifieke doelgroep targeting</p>
              </div>
              
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-slate-800 mb-2">Brand Awareness</h4>
                <p className="text-sm text-slate-600">Verhoogde zichtbaarheid in de B2B markt</p>
              </div>
              
              <div className="p-4 bg-orange-50 rounded-lg">
                <h4 className="font-semibold text-slate-800 mb-2">Performance</h4>
                <p className="text-sm text-slate-600">Boven gemiddelde click-through rates en conversies</p>
              </div>
            </div>
          </div>

          {/* Target Audience & Results */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Strategie & Resultaten</h3>
            <div className="space-y-6">
              <div className="p-4 bg-slate-50 rounded-lg">
                <h4 className="font-semibold text-slate-800 mb-3">Doelgroep</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• B2B professionals in de bouwsector</li>
                  <li>• Projectmanagers en aannemers</li>
                  <li>• Technische directeuren</li>
                  <li>• Inkoopmanagers</li>
                </ul>
              </div>
              
              <div className="p-4 bg-slate-50 rounded-lg">
                <h4 className="font-semibold text-slate-800 mb-3">Campagne Focus</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Professionele bouwoplossingen</li>
                  <li>• Betrouwbare leverancier</li>
                  <li>• Nederlandse expertise</li>
                  <li>• Kwaliteitsproducten</li>
                </ul>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-slate-800 mb-3">Resultaten</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-green-600 font-semibold">Kwalitatieve leads</div>
                    <div className="text-slate-600">Via LinkedIn</div>
                  </div>
                  <div>
                    <div className="text-green-600 font-semibold">Verhoogde zichtbaarheid</div>
                    <div className="text-slate-600">In B2B markt</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>


      </div>
    </section>
  )
}
