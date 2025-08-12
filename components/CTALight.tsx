'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MessageCircle, Calendar, Mail, Phone } from 'lucide-react'

export default function CTALight() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  return (
    <section id="contact" className="relative py-24 bg-white overflow-hidden">


      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-light text-slate-800 mb-6 leading-tight">
            Zullen we eens
            <span className="text-blue-600"> kletsen?</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Geen verplichtingen, geen vervelende verkooppraatjes. 
            Gewoon een fijn gesprek over hoe jouw website beter kan.
          </p>
        </motion.div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: MessageCircle,
              title: "Even bellen",
              subtitle: "15 minuten, vrijblijvend",
              description: "Perfect voor een eerste kennismaking en om te horen wat je nodig hebt.",
              action: "Bel me terug",
              color: "blue",
            },
            {
              icon: Calendar,
              title: "Koffie drinken",
              subtitle: "Online of in het echt",
              description: "Neem de tijd voor een uitgebreid gesprek over jouw plannen en wensen.",
              action: "Plan een afspraak",
              color: "green",
            },
            {
              icon: Mail,
              title: "Even mailen",
              subtitle: "Op je eigen tempo",
              description: "Vertel me over je project en ik stuur je binnen een dag een reactie terug.",
              action: "Stuur een berichtje",
              color: "purple",
            },
          ].map((option, index) => {
            const Icon = option.icon
            const colorClasses = {
              blue: {
                bg: "bg-blue-50",
                border: "border-blue-200",
                icon: "text-blue-600",
                button: "bg-blue-600 hover:bg-blue-700 text-white"
              },
              green: {
                bg: "bg-green-50", 
                border: "border-green-200",
                icon: "text-green-600",
                button: "bg-green-600 hover:bg-green-700 text-white"
              },
              purple: {
                bg: "bg-purple-50",
                border: "border-purple-200", 
                icon: "text-purple-600",
                button: "bg-purple-600 hover:bg-purple-700 text-white"
              }
            }
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className={`h-full p-6 ${colorClasses[option.color as keyof typeof colorClasses].bg} border ${colorClasses[option.color as keyof typeof colorClasses].border} rounded-2xl transition-all duration-300`}>
                  <div className={`inline-flex items-center justify-center w-12 h-12 mb-4 ${colorClasses[option.color as keyof typeof colorClasses].icon} bg-white rounded-xl shadow-sm`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <h3 className="text-xl font-medium text-slate-800 mb-2">
                    {option.title}
                  </h3>
                  <p className="text-sm text-slate-500 font-medium mb-3">
                    {option.subtitle}
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {option.description}
                  </p>
                  
                  <motion.a
                    href={option.action === "Bel me terug" ? "tel:+31612345678" : 
                          option.action === "Plan een afspraak" ? "mailto:hallo@stecom.nl?subject=Afspraak plannen" :
                          "mailto:hallo@stecom.nl?subject=Project informatie"}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 rounded-xl font-medium transition-all duration-300 ${colorClasses[option.color as keyof typeof colorClasses].button} flex items-center justify-center`}
                  >
                    {option.action}
                  </motion.a>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Quick Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-slate-200"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="text-center sm:text-left">
              <h4 className="font-medium text-slate-800 mb-1">Of gewoon direct contact</h4>
              <p className="text-slate-600">We nemen meestal binnen een paar uur contact op</p>
            </div>
            
            <div className="flex gap-3">
              <motion.a
                href="tel:+31612345678"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
              >
                <Phone className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:hallo@stecom.nl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-slate-600 text-white rounded-xl hover:bg-slate-700 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}