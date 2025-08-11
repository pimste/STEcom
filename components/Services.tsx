'use client'

import { motion } from 'framer-motion'
import { Monitor, Globe, BarChart3, Cog, ArrowRight, Zap, Shield, Rocket, PieChart } from 'lucide-react'
import BentoGrid from './BentoGrid'

interface ServicesProps {
  language: 'nl' | 'en'
}

const translations = {
  nl: {
    title: 'Onze Diensten',
    subtitle: 'Professionele IT-oplossingen die écht werken voor jouw bedrijf.',
    services: [
      {
        id: 'it-support',
        icon: Monitor,
        title: 'IT Support',
        description: 'Geen wachtmuziek, geen technisch gebrabbel. Gewoon problemen oplossen wanneer je ze hebt.',
        features: ['24/7 monitoring', 'Snelle response', 'Proactieve oplossingen'],
        size: 'medium' as const,
        color: 'primary' as const,
        cta: { text: 'Meer over IT Support', href: '#contact' },
      },
      {
        id: 'websites',
        icon: Globe,
        title: 'Website Ontwikkeling',
        description: 'Moderne, snelle websites die je bezoekers omzetten in klanten.',
        features: ['Responsive design', 'SEO geoptimaliseerd', 'Hoge conversie'],
        size: 'small' as const,
        color: 'accent' as const,
        cta: { text: 'Bekijk voorbeelden', href: '#contact' },
      },

      {
        id: 'automation',
        icon: Cog,
        title: 'Automatisering',
        description: 'Laat computers het repetitieve werk doen, zodat jij je kunt focussen op wat belangrijk is.',
        features: ['Workflow automatisering', 'Tijdbesparende tools', 'Efficiëntie'],
        size: 'small' as const,
        color: 'secondary' as const,
      },

      {
        id: 'performance',
        icon: Rocket,
        title: 'Performance Optimalisatie',
        description: 'Zorg dat je systemen snel en betrouwbaar blijven werken.',
        features: ['Snelheidstests', 'Optimalisatie', 'Continue monitoring'],
        size: 'small' as const,
        color: 'accent' as const,
      },
      {
        id: 'analytics',
        icon: PieChart,
        title: 'Data Visualisatie & Rapportages',
        description: 'Transformeer je data in duidelijke inzichten met Power BI, Tableau of op maat gemaakte dashboards.',
        features: ['Power BI dashboards', 'Tableau rapportages', 'Custom visualisaties'],
        size: 'medium' as const,
        color: 'secondary' as const,
        cta: { text: 'Bekijk voorbeelden', href: '#contact' },
      },
    ],
    cta: 'Neem contact op',
  },
  en: {
    title: 'Our Services',
    subtitle: 'Professional IT solutions that actually work for your business.',
    services: [
      {
        id: 'it-support',
        icon: Monitor,
        title: 'IT Support',
        description: 'No hold music, no technical jargon. Just solving problems when you have them.',
        features: ['24/7 monitoring', 'Fast response', 'Proactive solutions'],
        size: 'medium' as const,
        color: 'primary' as const,
        cta: { text: 'More about IT Support', href: '#contact' },
      },
      {
        id: 'websites',
        icon: Globe,
        title: 'Website Development',
        description: 'Modern, fast websites that convert your visitors into customers.',
        features: ['Responsive design', 'SEO optimized', 'High conversion'],
        size: 'small' as const,
        color: 'accent' as const,
        cta: { text: 'View examples', href: '#contact' },
      },

      {
        id: 'automation',
        icon: Cog,
        title: 'Automation',
        description: 'Let computers do the repetitive work, so you can focus on what matters.',
        features: ['Workflow automation', 'Time-saving tools', 'Efficiency'],
        size: 'small' as const,
        color: 'secondary' as const,
      },

      {
        id: 'performance',
        icon: Rocket,
        title: 'Performance Optimization',
        description: 'Keep your systems fast and reliable.',
        features: ['Speed testing', 'Optimization', 'Continuous monitoring'],
        size: 'small' as const,
        color: 'accent' as const,
      },
      {
        id: 'analytics',
        icon: PieChart,
        title: 'Data Visualization & Reporting',
        description: 'Transform your data into clear insights with Power BI, Tableau or custom dashboards.',
        features: ['Power BI dashboards', 'Tableau reports', 'Custom visualizations'],
        size: 'medium' as const,
        color: 'secondary' as const,
        cta: { text: 'View examples', href: '#contact' },
      },
    ],
    cta: 'Get in touch',
  },
}

export default function Services({ language }: ServicesProps) {
  const t = translations[language]
  const basePath = language === 'en' ? '/en' : ''

  return (
    <section id="services" className="section-padding bg-white dark:bg-neutral-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h2 className="fluid-text-5xl font-display font-black text-neutral-900 dark:text-neutral-100 mb-6 tracking-tight">
            {t.title}
          </h2>
          <p className="fluid-text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Bento Grid Services with Creative Elements */}
        <BentoGrid items={[
          // Rij 1: IT Support (2x2) + Website (1x2) + Klaar om te beginnen (1x3 - start in rij 1)
          {
            ...t.services.find(s => s.id === 'it-support')!,
            size: 'large' as const,
            type: 'service' as const
          },
          {
            ...t.services.find(s => s.id === 'websites')!,
            size: 'tall' as const,
            type: 'service' as const
          },
          {
            id: 'contact-teaser',
            title: language === 'nl' ? 'Klaar om te beginnen?' : 'Ready to get started?',
            description: language === 'nl' 
              ? 'Laten we koffiedrinken en praten over je IT-uitdagingen.'
              : 'Let\'s grab coffee and talk about your IT challenges.',
            size: 'extra-tall' as const,
            color: 'primary' as const,
            type: 'service' as const,
            cta: { text: language === 'nl' ? 'Plan een gesprek' : 'Schedule a call', href: '#contact' }
          },
          
          // Rij 2: Quote (2x2) + Automatisering (1x2)
          {
            id: 'quote-1',
            title: '',
            description: '',
            size: 'large' as const,
            color: 'secondary' as const,
            type: 'quote' as const,
            quote: language === 'nl' 
              ? 'Technologie moet werken voor jou, niet andersom. Wij zorgen ervoor dat het gewoon werkt.'
              : 'Technology should work for you, not the other way around. We make sure it just works.',
            author: language === 'nl' ? 'Pim Steijns, STE Communications' : 'Pim Steijns, STE Communications'
          },
          {
            ...t.services.find(s => s.id === 'automation')!,
            size: 'tall' as const,
            type: 'service' as const
          },
          
          
          // Rij 3: Resultaten & Contact + andere items
          {
            id: 'results-contact',
            title: language === 'nl' ? 'Resultaten & Contact' : 'Results & Contact',
            description: language === 'nl' 
              ? 'Meetbare verbeteringen voor je bedrijf'
              : 'Measurable improvements for your business',
            size: 'small' as const,
            color: 'primary' as const,
            type: 'service' as const,
            cta: { text: language === 'nl' ? 'Bekijk resultaten' : 'View results', href: '#contact' }
          },
          {
            ...t.services.find(s => s.id === 'performance')!,
            size: 'small' as const,
            type: 'service' as const
          },
          {
            ...t.services.find(s => s.id === 'analytics')!,
            size: 'small' as const,
            type: 'service' as const
          },
          {
            id: 'image-placeholder',
            title: language === 'nl' ? 'Project Showcase' : 'Project Showcase',
            description: language === 'nl' 
              ? 'Bekijk onze laatste projecten en succesvolle implementaties'
              : 'View our latest projects and successful implementations',
            size: 'medium' as const,
            color: 'accent' as const,
            type: 'image' as const
          },
        ]} className="mb-16 lg:mb-20" />

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <a
            href={`${basePath}#contact`}
            className="btn-primary fluid-text-base"
          >
            <span>{t.cta}</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}