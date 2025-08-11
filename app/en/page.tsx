'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function EnglishHome() {
  return (
    <main className="min-h-screen">
      <Header language="en" />
      <Hero language="en" />
      <Services language="en" />
      <About language="en" />
      <Contact language="en" />
      <Footer language="en" />
    </main>
  )
}