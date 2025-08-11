'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Phone, Mail, MapPin, MessageCircle } from 'lucide-react'

interface ContactProps {
  language: 'nl' | 'en'
}

const translations = {
  nl: {
    title: 'Kopje Koffie?',
    subtitle: 'Laten we praten over hoe we jouw IT-uitdagingen kunnen oplossen.',
    form: {
      name: 'Je naam',
      email: 'Email adres',
      problem: 'Vertel me over je project of uitdaging',
      submit: 'Plan Gratis Consult',
      sending: 'Versturen...',
    },
    contact: {
      title: 'Of direct contact',
      phone: '+31 6 12345678',
      email: 'pim@stecommunications.nl',
      location: 'Nederland',
    },
    success: 'Bericht verstuurd! Ik neem binnen 24 uur contact op.',
    error: 'Er ging iets mis. Probeer het nog eens of mail me direct.',
  },
  en: {
    title: 'Coffee?',
    subtitle: "Let's talk about how we can solve your IT challenges.",
    form: {
      name: 'Your name',
      email: 'Email address',
      problem: 'Tell me about your project or challenge',
      submit: 'Schedule Free Consultation',
      sending: 'Sending...',
    },
    contact: {
      title: 'Or direct contact',
      phone: '+31 6 12345678',
      email: 'pim@stecommunications.nl',
      location: 'The Netherlands',
    },
    success: 'Message sent! I\'ll get back to you within 24 hours.',
    error: 'Something went wrong. Try again or email me directly.',
  },
}

export default function Contact({ language }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    problem: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  
  const t = translations[language]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', problem: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
    
    // Reset status after 5 seconds
    setTimeout(() => setSubmitStatus('idle'), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-gray-900 via-primary-900 to-accent-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-black mb-6 tracking-tight">
            {t.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  {t.form.name}
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300"
                  placeholder={t.form.name}
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  {t.form.email}
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300"
                  placeholder={t.form.email}
                />
              </div>

              {/* Problem Textarea */}
              <div>
                <label htmlFor="problem" className="block text-sm font-medium text-gray-300 mb-2">
                  {t.form.problem}
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  id="problem"
                  name="problem"
                  value={formData.problem}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300 resize-none"
                  placeholder={t.form.problem}
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    <span>{t.form.sending}</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>{t.form.submit}</span>
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300"
                >
                  {t.success}
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300"
                >
                  {t.error}
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-display font-bold mb-6">
                {t.contact.title}
              </h3>
              
              <div className="space-y-6">
                {/* Phone */}
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 group"
                >
                  <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center group-hover:bg-primary-500/30 transition-colors duration-300">
                    <Phone className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 font-medium">Phone</div>
                    <div className="text-white font-semibold">{t.contact.phone}</div>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 group"
                >
                  <div className="w-12 h-12 bg-accent-500/20 rounded-lg flex items-center justify-center group-hover:bg-accent-500/30 transition-colors duration-300">
                    <Mail className="w-6 h-6 text-accent-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 font-medium">Email</div>
                    <div className="text-white font-semibold">{t.contact.email}</div>
                  </div>
                </motion.div>

                {/* Location */}
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 group"
                >
                  <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center group-hover:bg-primary-500/30 transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 font-medium">Location</div>
                    <div className="text-white font-semibold">{t.contact.location}</div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Fun Quote */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm"
            >
              <MessageCircle className="w-8 h-8 text-primary-400 mb-4" />
              <p className="text-gray-300 italic leading-relaxed">
                {language === 'nl' 
                  ? '"Ik antwoord meestal binnen een uur. Tenzij ik slaap, eet, of vastloop in een debugging sessie. Dan duurt het iets langer."'
                  : '"I usually respond within an hour. Unless I\'m sleeping, eating, or stuck in a debugging session. Then it takes a bit longer."'
                }
              </p>
              <div className="text-primary-400 font-semibold mt-3">- Pim</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}