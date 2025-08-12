export interface ProjectStats {
  value: string
  label: string
  description?: string
}

export interface ProjectSkill {
  name: string
  category: 'frontend' | 'backend' | 'design' | 'marketing' | 'seo' | 'analytics' | 'communication'
  icon?: string
}

export interface ProjectMetric {
  name: string
  value: string
  unit?: string
  improvement?: string
  description: string
  color: 'green' | 'blue' | 'purple' | 'orange' | 'red'
}

export interface SEOImprovement {
  metric: string
  before: string
  after: string
  improvement: string
  impact: string
}

export interface Project {
  id: string
  slug: string
  title: string
  subtitle: string
  client: string
  industry: string
  description: string
  longDescription: string
  
  // Visual
  heroImage: string
  gallery: string[]
  logo?: string
  color: 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'teal'
  
  // Quick Stats
  stats: ProjectStats[]
  skills: ProjectSkill[]
  
  // URLs
  projectUrl?: string
  hasIframe?: boolean
  iframeUrl?: string
  
  // Detailed Metrics
  performanceMetrics: ProjectMetric[]
  seoImprovements: SEOImprovement[]
  
  // Technical Details
  technologies: {
    frontend: string[]
    backend: string[]
    infrastructure: string[]
    thirdParty: string[]
  }
  
  // Content
  challenges: string[]
  solutions: string[]
  results: string[]
  
  // SEO
  seoTitle: string
  seoDescription: string
  seoKeywords: string[]
  
  // Dates
  startDate: string
  completionDate: string
  launchDate: string
  
  // Status
  status: 'completed' | 'in-progress' | 'maintenance'
  featured: boolean
}
