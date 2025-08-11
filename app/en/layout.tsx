import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://stecommunications.nl'),
  title: 'STE Communications Company - IT that works, websites that convert',
  description: 'We fix IT before you rage quit. Websites, online visibility, automation and IT support that actually works.',
  keywords: ['IT support', 'web design', 'automation', 'online visibility', 'Pim Steijns'],
  authors: [{ name: 'Pim Steijns' }],
  openGraph: {
    title: 'STE Communications Company',
    description: 'IT that works, websites that convert',
    type: 'website',
    locale: 'en_US',
  },
}

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}