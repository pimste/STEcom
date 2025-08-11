'use client'

import { motion } from 'framer-motion'
import { Project } from '@/lib/projects/types'
import { Quote } from 'lucide-react'

interface ProjectTestimonialsProps {
  project: Project
}

export default function ProjectTestimonials({ project }: ProjectTestimonialsProps) {
  if (!project.testimonials || project.testimonials.length === 0) {
    return null
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Wat de klant zegt
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Echte feedback van {project.client}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {project.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Quote className="w-6 h-6 text-blue-600" />
                </div>
                
                <div className="flex-1">
                  <blockquote className="text-slate-700 leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="border-t border-slate-200 pt-4">
                    <div className="font-semibold text-slate-800">{testimonial.author}</div>
                    <div className="text-sm text-slate-600">{testimonial.role}</div>
                    <div className="text-sm text-slate-500">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
