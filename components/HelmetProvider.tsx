'use client'

import { HelmetProvider as ReactHelmetProvider } from 'react-helmet-async'

export default function HelmetProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReactHelmetProvider>
      {children}
    </ReactHelmetProvider>
  )
} 