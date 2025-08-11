'use client'

import { motion } from 'framer-motion'
import { Monitor } from 'lucide-react'
import { useParallaxShapes } from '@/lib/useParallax'
import { getFeaturedProjects } from '@/lib/projects'
import Link from 'next/link'

const projects = getFeaturedProjects()

export default function ShowcaseSection() {
  const shapesRef = useParallaxShapes()

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Enhanced Background Effects for Glass */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]" />
      
      {/* Abstract Background Shapes for Depth with Parallax */}
      <div ref={shapesRef} className="absolute inset-0 overflow-hidden">
        {/* Large organic blob - bottom left (foreground, more defined) */}
        <div
          data-parallax="0.3"
          className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-teal-400/50 to-blue-500/45 blur-sm"
          style={{
            transformOrigin: "bottom left",
            borderRadius: "63% 37% 16% 84% / 60% 54% 46% 40%",
          }}
        />
        
        {/* Medium organic blob - top right (midground, medium definition) */}
        <div
          data-parallax="0.5"
          className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-purple-400/40 to-pink-400/35 blur-md"
          style={{
            transformOrigin: "top right",
            borderRadius: "59% 41% 60% 40% / 69% 50% 50% 31%",
          }}
        />
        
        {/* Small organic blob - center (background, softer) */}
        <div
          data-parallax="0.7"
          className="absolute top-1/3 left-1/4 w-24 h-24 bg-gradient-to-br from-blue-300/35 to-indigo-400/30 blur-lg"
          style={{
            borderRadius: "45% 55% 35% 65% / 55% 45% 55% 45%",
          }}
        />
      </div>
      
      {/* Layered mesh gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]" />
      <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(147,51,234,0.03),rgba(59,130,246,0.03),rgba(147,51,234,0.03))]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-light text-slate-800 mb-4"
          >
            Ons werk
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto"
          >
            Innovatieve oplossingen die echte resultaten leveren
          </motion.p>
        </div>

        {/* Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group h-full"
            >
              {/* Glass Card */}
              <div className="relative h-full overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] hover:bg-white/15 pointer-events-auto">
                {/* Card Content */}
                <div className="p-6 md:p-8 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      project.color === 'blue' ? 'bg-blue-500/20' :
                      project.color === 'green' ? 'bg-green-500/20' :
                      'bg-purple-500/20'
                    }`}>
                      <Monitor className={`w-6 h-6 ${
                        project.color === 'blue' ? 'text-blue-600' :
                        project.color === 'green' ? 'text-green-600' :
                        'text-purple-600'
                      }`} />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-1">
                        {project.title}
                      </h3>
                      <p className="text-slate-600 text-sm">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {project.stats.map((stat, statIdx) => (
                      <div key={statIdx} className="text-center">
                        <div className="text-xl md:text-2xl font-bold text-slate-800 mb-1">
                          {stat.value}
                        </div>
                        <div className="text-xs text-slate-500">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.skills.slice(0, 4).map((skill, skillIdx) => (
                      <span
                        key={skillIdx}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-slate-700 border border-white/30"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <Link
                    href={`/projects/${project.slug}`}
                    className="w-full py-3 px-4 rounded-xl bg-slate-800/80 backdrop-blur-sm text-white font-medium hover:bg-slate-800 transition-all duration-300 group-hover:scale-105 border border-slate-700/30 flex items-center justify-center gap-2"
                  >
                    <Monitor className="w-4 h-4" />
                    Bekijk project details
                  </Link>
                </div>

                {/* Glass Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 border border-white/10 rounded-2xl" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform -skew-x-12 -translate-x-full group-hover:translate-x-full" />
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  )
} 