'use client'

import { motion } from 'framer-motion'
import { Project } from '@/lib/projects/types'
import { Search, Filter, Monitor, Calendar, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import { useState, useMemo } from 'react'

interface ProjectsOverviewProps {
  projects: Project[]
}

export default function ProjectsOverview({ projects }: ProjectsOverviewProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedIndustry, setSelectedIndustry] = useState('all')
  const [selectedStatus, setSelectedStatus] = useState('all')

  // Get unique industries and statuses
  const industries = useMemo(() => {
    const unique = [...new Set(projects.map(p => p.industry))]
    return ['all', ...unique]
  }, [projects])

  const statuses = useMemo(() => {
    const unique = [...new Set(projects.map(p => p.status))]
    return ['all', ...unique]
  }, [projects])

  // Filter projects
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesIndustry = selectedIndustry === 'all' || project.industry === selectedIndustry
      const matchesStatus = selectedStatus === 'all' || project.status === selectedStatus
      
      return matchesSearch && matchesIndustry && matchesStatus
    })
  }, [projects, searchTerm, selectedIndustry, selectedStatus])

  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600', 
    purple: 'from-purple-500 to-purple-600',
    orange: 'from-orange-500 to-orange-600',
    red: 'from-red-500 to-red-600',
    teal: 'from-teal-500 to-teal-600'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
              Project Portfolio
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Ontdek onze succesvolle projecten en case studies. Van websites tot webapplicaties, 
              elk project toont onze expertise in digitale transformatie.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-800">{projects.length}</div>
                <div className="text-slate-600">Projecten</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-800">
                  {projects.filter(p => p.status === 'completed').length}
                </div>
                <div className="text-slate-600">Voltooid</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-800">
                  {Math.round(projects.reduce((sum, p) => sum + parseInt(p.roi.replace('%', '')), 0) / projects.length)}%
                </div>
                <div className="text-slate-600">Gem. ROI</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Zoek projecten..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Industry Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-slate-400" />
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {industries.map(industry => (
                  <option key={industry} value={industry}>
                    {industry === 'all' ? 'Alle industrieën' : industry}
                  </option>
                ))}
              </select>
            </div>

            {/* Status Filter */}
            <div className="flex items-center gap-2">
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {statuses.map(status => (
                  <option key={status} value={status}>
                    {status === 'all' ? 'Alle statussen' : 
                     status === 'completed' ? 'Voltooid' :
                     status === 'in-progress' ? 'In uitvoering' : 'Onderhoud'}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Geen projecten gevonden</h3>
              <p className="text-slate-600">Probeer andere zoektermen of filters</p>
            </motion.div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={`/projects/${project.slug}`}>
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200 group-hover:scale-105">
                      {/* Project Image */}
                      <div className="aspect-[4/3] bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                        <div className="text-center">
                          <Monitor className="w-12 h-12 text-slate-400 mx-auto mb-2" />
                          <div className="text-slate-600">{project.title}</div>
                        </div>
                      </div>

                      {/* Project Info */}
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm text-slate-500">{project.industry}</span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            project.status === 'completed' ? 'bg-green-100 text-green-700' :
                            project.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                            'bg-orange-100 text-orange-700'
                          }`}>
                            {project.status === 'completed' ? 'Voltooid' :
                             project.status === 'in-progress' ? 'In uitvoering' : 'Onderhoud'}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-slate-800 mb-2">{project.title}</h3>
                        <p className="text-slate-600 text-sm mb-4 line-clamp-2">{project.description}</p>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-3 gap-4 mb-4">
                          {project.stats.slice(0, 3).map((stat, statIndex) => (
                            <div key={statIndex} className="text-center">
                              <div className="text-lg font-bold text-slate-800">{stat.value}</div>
                              <div className="text-xs text-slate-500">{stat.label}</div>
                            </div>
                          ))}
                        </div>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.skills.slice(0, 3).map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-2 py-1 bg-slate-100 text-slate-700 rounded-full text-xs"
                            >
                              {skill.name}
                            </span>
                          ))}
                          {project.skills.length > 3 && (
                            <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded-full text-xs">
                              +{project.skills.length - 3}
                            </span>
                          )}
                        </div>

                        {/* Project Meta */}
                        <div className="flex items-center justify-between text-sm text-slate-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(project.completionDate).getFullYear()}
                          </div>
                          <div className="flex items-center gap-1">
                            <TrendingUp className="w-4 h-4" />
                            {project.roi}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
