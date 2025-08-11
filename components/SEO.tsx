'use client'

import Head from 'next/head'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: 'website' | 'article' | 'product'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
  tags?: string[]
}

export default function SEO({
  title = 'STEcom - Web Development & Design',
  description = 'Wij maken websites die werken. Van simpele landing pages tot complexe webapplicaties. Altijd snel, veilig en gebruiksvriendelijk.',
  keywords = 'web development, website design, React, Next.js, SEO, performance',
  image = '/og-image.jpg',
  url = 'https://stecom.nl',
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'STEcom',
  section,
  tags = []
}: SEOProps) {
  const fullUrl = url.startsWith('http') ? url : `https://stecom.nl${url}`
  const fullImageUrl = image.startsWith('http') ? image : `https://stecom.nl${image}`

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="STEcom" />
      <meta property="og:locale" content="nl_NL" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:site" content="@stecom" />
      
      {/* Article specific meta tags */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}
      {type === 'article' && section && (
        <meta property="article:section" content={section} />
      )}
      {type === 'article' && tags.length > 0 && (
        tags.map((tag, index) => (
          <meta key={index} property="article:tag" content={tag} />
        ))
      )}
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "STEcom",
          "url": "https://stecom.nl",
          "logo": "https://stecom.nl/logo.png",
          "description": description,
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "NL"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "availableLanguage": "Dutch"
          },
          "sameAs": [
            "https://twitter.com/stecom",
            "https://linkedin.com/company/stecom"
          ]
        })}
      </script>
    </Head>
  )
} 