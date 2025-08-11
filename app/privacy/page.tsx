'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header language="nl" />
      
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
                Bij STE Communications Company nemen we je privacy serieus. 
                Deze pagina legt uit hoe we omgaan met je gegevens.
              </p>
              
              <h2 className="text-2xl font-display font-bold text-gray-900 mt-8 mb-4">
                Welke gegevens verzamelen we?
              </h2>
              <ul className="space-y-2">
                <li>• Contactgegevens die je vrijwillig deelt (naam, email)</li>
                <li>• Informatie over je IT problemen die je met ons deelt</li>
                <li>• Standaard website analytics (anoniem)</li>
              </ul>
              
              <h2 className="text-2xl font-display font-bold text-gray-900 mt-8 mb-4">
                Hoe gebruiken we deze gegevens?
              </h2>
              <ul className="space-y-2">
                <li>• Om contact met je op te nemen over je aanvraag</li>
                <li>• Om je de beste IT oplossingen te bieden</li>
                <li>• Om onze website te verbeteren</li>
              </ul>
              
              <h2 className="text-2xl font-display font-bold text-gray-900 mt-8 mb-4">
                Delen we je gegevens?
              </h2>
              <p>
                Nee, we verkopen of delen je gegevens niet met derden. 
                Jouw gegevens blijven bij ons, veilig opgeslagen.
              </p>
              
              <h2 className="text-2xl font-display font-bold text-gray-900 mt-8 mb-4">
                Vragen?
              </h2>
              <p>
                Heb je vragen over deze privacy policy? 
                <a href="#contact" className="text-primary-600 hover:text-primary-700 font-semibold">
                  Stuur me een berichtje
                </a> 
                en ik leg het graag uit.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer language="nl" />
    </main>
  )
}