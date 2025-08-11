'use client'

import { motion } from 'framer-motion'
import { Project } from '@/lib/projects/types'
import { Image } from 'lucide-react'

interface ProjectGalleryProps {
  project: Project
}

export default function ProjectGallery({ project }: ProjectGalleryProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Project Gallery
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Een visuele impressie van het eindresultaat
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {project.gallery.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                <div className="text-center">
                  <Image className="w-12 h-12 text-slate-400 mx-auto mb-2" />
                  <div className="text-slate-600">Project Screenshot {index + 1}</div>
                </div>
              </div>
              
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
