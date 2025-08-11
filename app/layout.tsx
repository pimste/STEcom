import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { seoConfig } from '../lib/seo/config'
import { 
  generateTitle, 
  generateDescription, 
  generateLSIKeywords
} from '../lib/seo/utils'
import ClientHelmetProvider from '../components/ClientHelmetProvider'

const inter = Inter({ subsets: ['latin'] })

// Enhanced metadata with dynamic generation
export const metadata: Metadata = {
  title: generateTitle('Web Development & Design', 'STEcom'),
  description: generateDescription(
    'Wij maken websites die werken. Van simpele landing pages tot complexe webapplicaties. Altijd snel, veilig en gebruiksvriendelijk.',
    ['web development', 'website design', 'React', 'Next.js', 'SEO', 'performance']
  ),
  keywords: [
    'web development', 
    'website design', 
    'React', 
    'Next.js', 
    'SEO', 
    'performance',
    ...generateLSIKeywords('web development')
  ].join(', '),
  authors: [{ name: 'STEcom' }],
  creator: 'STEcom',
  publisher: 'STEcom',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(seoConfig.baseUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'STEcom - Web Development & Design',
    description: 'Wij maken websites die werken. Van simpele landing pages tot complexe webapplicaties.',
    url: seoConfig.baseUrl,
    siteName: 'STEcom',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'STEcom - Web Development & Design',
      },
    ],
    locale: 'nl_NL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'STEcom - Web Development & Design',
    description: 'Wij maken websites die werken. Van simpele landing pages tot complexe webapplicaties.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: seoConfig.tracking.googleAnalytics || 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className={inter.className}>
        <ClientHelmetProvider>
          {children}
        </ClientHelmetProvider>
      </body>
    </html>
  )
}