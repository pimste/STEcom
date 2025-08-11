'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

export default function EnglishPrivacyPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header language="en" />
      
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-xl p-8 lg:p-12"
          >
            <h1 className="text-4xl font-display font-bold text-gray-900 mb-8">
              Privacy Policy
            </h1>
            
            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <p>
                At STE Communications Company, we take your privacy seriously. 
                This page explains how we handle your data.
              </p>
              
              <h2 className="text-2xl font-display font-bold text-gray-900 mt-8 mb-4">
                What data do we collect?
              </h2>
              <ul className="space-y-2">
                <li>• Contact information you voluntarily share (name, email)</li>
                <li>• Information about your IT problems that you share with us</li>
                <li>• Standard website analytics (anonymous)</li>
              </ul>
              
              <h2 className="text-2xl font-display font-bold text-gray-900 mt-8 mb-4">
                How do we use this data?
              </h2>
              <ul className="space-y-2">
                <li>• To contact you about your request</li>
                <li>• To provide you with the best IT solutions</li>
                <li>• To improve our website</li>
              </ul>
              
              <h2 className="text-2xl font-display font-bold text-gray-900 mt-8 mb-4">
                Do we share your data?
              </h2>
              <p>
                No, we don&apos;t sell or share your data with third parties. 
                Your data stays with us, safely stored.
              </p>
              
              <h2 className="text-2xl font-display font-bold text-gray-900 mt-8 mb-4">
                Questions?
              </h2>
              <p>
                Have questions about this privacy policy? 
                <a href="#contact" className="text-primary-600 hover:text-primary-700 font-semibold">
                  Send me a message
                </a> 
                and I&apos;ll gladly explain.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer language="en" />
    </main>
  )
}