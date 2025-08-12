'use client'

import { motion } from 'framer-motion'
import { Project } from '@/lib/projects/types'
import { ArrowLeft, ExternalLink, Calendar, Users, TrendingUp } from 'lucide-react'
import Link from 'next/link'

interface ProjectHeroProps {
  project: Project
}

export default function ProjectHero({ project }: ProjectHeroProps) {
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600', 
    purple: 'from-purple-500 to-purple-600',
    orange: 'from-orange-500 to-orange-600',
    red: 'from-red-500 to-red-600',
    teal: 'from-teal-500 to-teal-600'
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50" />
      
      {/* Background Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Back Button */}
            <Link 
              href="/#showcase"
              className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Terug naar portfolio
            </Link>

            {/* Client & Industry */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-slate-500">Client</span>
                <span className="text-lg font-semibold text-slate-800">{project.client}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-slate-500">Industry</span>
                <span className="text-lg font-semibold text-slate-800">{project.industry}</span>
              </div>
            </div>

            {/* Title */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                {project.title}
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 font-light">
                {project.subtitle}
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-slate-700 leading-relaxed max-w-2xl">
              {project.longDescription}
            </p>



            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {project.projectUrl && (
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r ${colorClasses[project.color]} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                >
                  <ExternalLink className="w-5 h-5" />
                  Bekijk de website
                </a>
              )}
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-800 font-semibold rounded-xl border-2 border-slate-200 hover:border-slate-300 transition-all duration-300 transform hover:scale-105"
              >
                Vergelijkbaar project?
              </Link>
            </div>

            {/* Project Info */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-slate-200">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-slate-500" />
                <div>
                  <div className="text-sm text-slate-500">Project periode</div>
                  <div className="font-medium text-slate-800">
                    {new Date(project.startDate).toLocaleDateString('nl-NL', { month: 'short', year: 'numeric' })} - {new Date(project.completionDate).toLocaleDateString('nl-NL', { month: 'short', year: 'numeric' })}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-slate-500" />
                <div>
                  <div className="text-sm text-slate-500">Traffic groei</div>
                  <div className="font-medium text-slate-800">Spectaculair</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Hero Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/nibm-proj/Screenshot 2025-08-12 at 13.39.20.png"
                alt="NIBM Towercranes Homepage"
                className="w-full h-auto"
              />
              
              {/* Overlay with project info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-white/90">{project.subtitle}</p>
              </div>
            </div>


          </motion.div>
        </div>
      </div>
    </section>
  )
}
