'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Quote } from 'lucide-react'
import { LucideIcon } from 'lucide-react'

interface BentoGridItem {
  id: string
  title: string
  description: string
  size: 'small' | 'medium' | 'large' | 'tall' | 'extra-tall'
  color: 'primary' | 'secondary' | 'accent'
  type: 'service' | 'quote' | 'image'
  icon?: LucideIcon
  features?: string[]
  cta?: { text: string; href: string }
  quote?: string
  author?: string
}

interface BentoGridProps {
  items: BentoGridItem[]
  className?: string
}

const sizeClasses = {
  small: 'col-span-1 row-span-1',
  medium: 'col-span-2 row-span-1',
  large: 'col-span-2 row-span-2',
  tall: 'col-span-1 row-span-2',
  'extra-tall': 'col-span-1 row-span-3'
}

const colorClasses = {
  primary: 'bg-gradient-to-br from-blue-500 to-blue-600 text-white',
  secondary: 'bg-gradient-to-br from-slate-500 to-slate-600 text-white',
  accent: 'bg-gradient-to-br from-purple-500 to-purple-600 text-white'
}

const colorClassesLight = {
  primary: 'bg-blue-50 border-blue-200 text-blue-900 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-100',
  secondary: 'bg-slate-50 border-slate-200 text-slate-900 dark:bg-slate-900/20 dark:border-slate-800 dark:text-slate-100',
  accent: 'bg-purple-50 border-purple-200 text-purple-900 dark:bg-purple-900/20 dark:border-purple-800 dark:text-purple-100'
}

export default function BentoGrid({ items, className = '' }: BentoGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 ${className}`}>
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className={`${sizeClasses[item.size]} group cursor-pointer`}
        >
          {item.type === 'quote' ? (
            <QuoteCard item={item} />
          ) : item.type === 'image' ? (
            <ImageCard item={item} />
          ) : (
            <ServiceCard item={item} />
          )}
        </motion.div>
      ))}
    </div>
  )
}

function ServiceCard({ item }: { item: BentoGridItem }) {
  const Icon = item.icon
  
  return (
    <div className={`h-full p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${colorClassesLight[item.color]}`}>
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          {Icon && (
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
              item.color === 'primary' ? 'bg-blue-100 dark:bg-blue-800/30' :
              item.color === 'secondary' ? 'bg-slate-100 dark:bg-slate-800/30' :
              'bg-purple-100 dark:bg-purple-800/30'
            }`}>
              <Icon className={`w-6 h-6 ${
                item.color === 'primary' ? 'text-blue-600 dark:text-blue-400' :
                item.color === 'secondary' ? 'text-slate-600 dark:text-slate-400' :
                'text-purple-600 dark:text-purple-400'
              }`} />
            </div>
          )}
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-2">{item.title}</h3>
            <p className="text-sm opacity-80 leading-relaxed">{item.description}</p>
          </div>
        </div>

        {/* Features */}
        {item.features && (
          <div className="flex-1 mb-4">
            <ul className="space-y-2">
              {item.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-sm">
                  <div className={`w-1.5 h-1.5 rounded-full mr-3 ${
                    item.color === 'primary' ? 'bg-blue-500' :
                    item.color === 'secondary' ? 'bg-slate-500' :
                    'bg-purple-500'
                  }`} />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* CTA */}
        {item.cta && (
          <div className="mt-auto">
            <a
              href={item.cta.href}
              className={`inline-flex items-center text-sm font-medium transition-colors ${
                item.color === 'primary' ? 'text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300' :
                item.color === 'secondary' ? 'text-slate-600 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300' :
                'text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300'
              }`}
            >
              {item.cta.text}
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

function QuoteCard({ item }: { item: BentoGridItem }) {
  return (
    <div className={`h-full p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${colorClassesLight[item.color]} flex flex-col justify-center`}>
      <div className="text-center">
        <Quote className={`w-8 h-8 mx-auto mb-4 opacity-60 ${
          item.color === 'primary' ? 'text-blue-600 dark:text-blue-400' :
          item.color === 'secondary' ? 'text-slate-600 dark:text-slate-400' :
          'text-purple-600 dark:text-purple-400'
        }`} />
        <blockquote className="text-lg font-medium mb-4 leading-relaxed">
          &ldquo;{item.quote}&rdquo;
        </blockquote>
        {item.author && (
          <cite className="text-sm opacity-70">
            — {item.author}
          </cite>
        )}
      </div>
    </div>
  )
}

function ImageCard({ item }: { item: BentoGridItem }) {
  return (
    <div className={`h-full p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${colorClassesLight[item.color]} flex flex-col justify-center`}>
      <div className="text-center">
        <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
          item.color === 'primary' ? 'bg-blue-100 dark:bg-blue-800/30' :
          item.color === 'secondary' ? 'bg-slate-100 dark:bg-slate-800/30' :
          'bg-purple-100 dark:bg-purple-800/30'
        }`}>
          <div className={`w-8 h-8 rounded-lg ${
            item.color === 'primary' ? 'bg-blue-500' :
            item.color === 'secondary' ? 'bg-slate-500' :
            'bg-purple-500'
          }`} />
        </div>
        <h3 className="text-lg font-bold mb-2">{item.title}</h3>
        <p className="text-sm opacity-80">{item.description}</p>
      </div>
    </div>
  )
}
