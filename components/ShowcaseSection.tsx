'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Code, Globe, Sparkles, ExternalLink, Monitor, Zap, Database } from 'lucide-react'
import { useParallaxShapes } from '@/lib/useParallax'
import { useState } from 'react'

const projects = [
  {
    id: "01",
    title: "Automatisering Suite",
    subtitle: "Gestroomlijnde bedrijfsprocessen",
    description: "Gebouwde automatisering systemen die klantgegevens verwerking, e-mailcampagnes en rapportage workflows afhandelen. Verminderde handmatig werk met 80% en verbeterde nauwkeurigheid aanzienlijk.",
    stats: [
      { value: "80%", label: "Tijd bespaard" },
      { value: "500+", label: "Processen" },
      { value: "99.9%", label: "Nauwkeurigheid" }
    ],
    skills: ["Python", "API Integratie", "Database Design"],
    icon: Code,
    color: "blue"
  },
  {
    id: "02", 
    title: "E-commerce Platform",
    subtitle: "Moderne web ervaring",
    description: "Ontwikkelde een full-stack e-commerce oplossing met real-time voorraad, veilige betalingen en mobile-first design. Handelt duizenden transacties dagelijks af met 99.9% uptime.",
    stats: [
      { value: "10k+", label: "Producten" },
      { value: "50k+", label: "Klanten" },
      { value: "99.9%", label: "Uptime" }
    ],
    skills: ["React", "Node.js", "PostgreSQL"],
    icon: Globe,
    color: "green"
  },
  {
    id: "03",
    title: "NIBM Towercranes",
    subtitle: "Moderne website met CMS",
    description: "Een complete Next.js website met Tailwind CSS, Firebase backend en ingebouwde CDN. De klant kan alles zelf aanpassen via een gebruiksvriendelijk CMS. Razendsnel geladen en volledig SEO-geoptimaliseerd.",
    stats: [
      { value: "100%", label: "SEO Score" },
      { value: "350", label: "Bezoekers per dag" },
      { value: "< 2s", label: "Laadtijd" }
    ],
    skills: ["Next.js", "Tailwind CSS", "Firebase", "CMS"],
    icon: Monitor,
    color: "purple",
    hasIframe: true,
    iframeUrl: "https://nibmvb.eu",
    projectUrl: "https://nibmvb.eu"
  }
]

export default function ShowcaseSection() {
  const shapesRef = useParallaxShapes()
  const [activeIframe, setActiveIframe] = useState<string | null>(null)

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
                      <project.icon className={`w-6 h-6 ${
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
                    {project.skills.map((skill, skillIdx) => (
                      <span
                        key={skillIdx}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-slate-700 border border-white/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  {project.hasIframe ? (
                    <div className="w-full">
                      <button 
                        type="button"
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          setActiveIframe(activeIframe === project.id ? null : project.id)
                        }}
                        className="w-full py-3 px-4 rounded-xl bg-purple-600/80 backdrop-blur-sm text-white font-medium hover:bg-purple-600 transition-all duration-300 group-hover:scale-105 border border-purple-700/30 flex items-center justify-center gap-2 cursor-pointer z-10 relative"
                      >
                        <Monitor className="w-4 h-4" />
                        {activeIframe === project.id ? "Verberg preview" : "Live preview"}
                      </button>
                    </div>
                  ) : (
                    <button className="w-full py-3 px-4 rounded-xl bg-slate-800/80 backdrop-blur-sm text-white font-medium hover:bg-slate-800 transition-all duration-300 group-hover:scale-105 border border-slate-700/30">
                      Bekijk project
                    </button>
                  )}
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

        {/* Iframe Modal for NIBM Project */}
        <AnimatePresence>
          {activeIframe && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
              onClick={() => setActiveIframe(null)}
            >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-slate-200">
                <div>
                  <h3 className="text-xl font-bold text-slate-800">NIBM Towercranes - Business Case Study</h3>
                  <p className="text-slate-600 text-sm">Ontdek hoe we hun online aanwezigheid transformeerden</p>
                </div>
                <button
                  onClick={() => setActiveIframe(null)}
                  className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Commercial ROI Dashboard */}
              <div className="relative bg-gradient-to-br from-slate-50 to-blue-50 p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-[70vh]">
                  
                  {/* Left Panel - Performance Chart */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20 transform hover:scale-105 transition-all duration-300">
                    <h4 className="text-base font-bold text-slate-800 mb-4 flex items-center gap-2">
                      <div className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center">
                        <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      Performance Metrics
                    </h4>
                    
                    {/* Speed Chart */}
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs text-slate-600">Laadtijd</span>
                        <span className="text-xs font-bold text-green-600">&lt; 2s</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full" style={{width: '85%'}}></div>
                      </div>
                    </div>
                    
                    {/* SEO Chart */}
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs text-slate-600">SEO Score</span>
                        <span className="text-xs font-bold text-blue-600">100%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full" style={{width: '100%'}}></div>
                      </div>
                    </div>
                    
                    {/* Visitors Chart */}
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs text-slate-600">Bezoekers/dag</span>
                        <span className="text-xs font-bold text-purple-600">350+</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-2 rounded-full" style={{width: '70%'}}></div>
                      </div>
                    </div>
                    
                    <div className="text-center mt-4">
                      <div className="text-lg font-bold text-slate-800">Dit kan JOUW website zijn</div>
                    </div>
                  </div>

                  {/* Center Panel - Cost Savings Chart */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20 transform hover:scale-105 transition-all duration-300">
                    <h4 className="text-base font-bold text-slate-800 mb-4 flex items-center gap-2">
                      <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                      </div>
                      Cost Savings
                    </h4>
                    
                    {/* Annual Savings Chart */}
                    <div className="mb-6">
                      <div className="text-center mb-4">
                        <div className="text-3xl font-bold text-green-600">€6.000</div>
                        <div className="text-sm text-slate-600">Jaarlijks bespaard</div>
                      </div>
                      
                      {/* Monthly breakdown */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-slate-600">Webdeveloper</span>
                          <span className="text-xs font-bold text-red-600">-€500/maand</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-slate-600">Hosting & onderhoud</span>
                          <span className="text-xs font-bold text-red-600">-€200/maand</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-slate-600">Updates & beveiliging</span>
                          <span className="text-xs font-bold text-red-600">-€300/maand</span>
                        </div>
                        <div className="border-t border-slate-200 pt-2 mt-2">
                          <div className="flex justify-between items-center">
                            <span className="text-xs font-bold text-slate-800">Totaal bespaard</span>
                            <span className="text-xs font-bold text-green-600">€1.000/maand</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* ROI Chart */}
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 rounded-xl border border-green-200">
                      <div className="text-center">
                        <div className="text-lg font-bold text-green-600 mb-1">ROI: 300%</div>
                        <div className="text-xs text-green-600">Investeren in 3 maanden terugverdiend</div>
                      </div>
                    </div>
                  </div>

                  {/* Right Panel - Competitive Advantage Chart */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20 transform hover:scale-105 transition-all duration-300">
                    <h4 className="text-base font-bold text-slate-800 mb-4 flex items-center gap-2">
                      <div className="w-6 h-6 bg-purple-100 rounded-lg flex items-center justify-center">
                        <svg className="w-3 h-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      Competitive Edge
                    </h4>
                    
                    {/* Advantage Chart */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-600">Website snelheid</span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 bg-slate-200 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{width: '90%'}}></div>
                          </div>
                          <span className="text-xs font-bold text-green-600">90%</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-600">SEO optimalisatie</span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 bg-slate-200 rounded-full h-2">
                            <div className="bg-blue-500 h-2 rounded-full" style={{width: '100%'}}></div>
                          </div>
                          <span className="text-xs font-bold text-blue-600">100%</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-600">Mobile performance</span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 bg-slate-200 rounded-full h-2">
                            <div className="bg-purple-500 h-2 rounded-full" style={{width: '95%'}}></div>
                          </div>
                          <span className="text-xs font-bold text-purple-600">95%</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-600">Uptime garantie</span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 bg-slate-200 rounded-full h-2">
                            <div className="bg-orange-500 h-2 rounded-full" style={{width: '99.9%'}}></div>
                          </div>
                          <span className="text-xs font-bold text-orange-600">99.9%</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Key Benefit */}
                    <div className="mt-4 bg-gradient-to-r from-purple-50 to-violet-50 p-3 rounded-xl border border-purple-200">
                      <div className="text-center">
                        <div className="text-sm font-bold text-purple-600 mb-1">Blijf voor op concurrenten</div>
                        <div className="text-xs text-purple-600">Moderne technologie = meer klanten</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom CTA Section */}
                <div className="mt-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-4 text-white">
                  <div className="text-center">
                    <h3 className="text-lg font-bold mb-2">Wil je vergelijkbare resultaten?</h3>
                    <p className="text-blue-100 mb-3 text-sm">Laten we praten over wat we voor jouw bedrijf kunnen betekenen</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <a 
                        href="https://nibmvb.eu" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Bekijk de website
                      </a>
                      <button className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium">
                        Gratis consultatie
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Commercial Results */}
              <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50">
                <h4 className="text-lg font-semibold text-slate-800 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Meetbare Resultaten
                </h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-white/70 p-4 rounded-lg border border-green-200">
                    <div className="text-2xl font-bold text-green-600 mb-1">€6.000</div>
                    <div className="text-green-700 font-medium">Jaarlijks bespaard</div>
                    <div className="text-green-600 text-xs">Geen webdeveloper meer nodig</div>
                  </div>
                  <div className="bg-white/70 p-4 rounded-lg border border-blue-200">
                    <div className="text-2xl font-bold text-blue-600 mb-1">+150%</div>
                    <div className="text-blue-700 font-medium">Meer organisch verkeer</div>
                    <div className="text-blue-600 text-xs">Beter gevonden op Google</div>
                  </div>
                  <div className="bg-white/70 p-4 rounded-lg border border-purple-200">
                    <div className="text-2xl font-bold text-purple-600 mb-1">99.9%</div>
                    <div className="text-purple-700 font-medium">Uptime</div>
                    <div className="text-purple-600 text-xs">Nooit meer downtime</div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-white/50 rounded-lg border border-green-200">
                  <p className="text-sm text-slate-700">
                    <strong>Bottom line:</strong> NIBM Towercranes heeft nu een website die niet alleen er professioneel uitziet, maar ook daadwerkelijk meer klanten oplevert. Ze besparen geld, krijgen meer bezoekers, en kunnen alles zelf beheren.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </section>
  )
} 