import { Project } from './types'
import { nibmProject } from './nibm-towercranes'

// All projects collection
export const projects: Project[] = [
  nibmProject,
  // Add more projects here as they are created
]

// Utility functions
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(project => project.featured)
}

export function getProjectsByIndustry(industry: string): Project[] {
  return projects.filter(project => project.industry === industry)
}

export function getProjectsByStatus(status: Project['status']): Project[] {
  return projects.filter(project => project.status === status)
}

export function getAllProjectSlugs(): string[] {
  return projects.map(project => project.slug)
}

// SEO utilities
export function generateProjectSitemap() {
  return projects.map(project => ({
    url: `/projects/${project.slug}`,
    lastModified: project.launchDate,
    changeFrequency: 'monthly' as const,
    priority: project.featured ? 0.8 : 0.6
  }))
}

// Analytics utilities
export function getProjectStats() {
  const totalProjects = projects.length
  const completedProjects = projects.filter(p => p.status === 'completed').length

  return {
    totalProjects,
    completedProjects,
    trafficImprovement: "Spectaculair",
    featuredProjects: projects.filter(p => p.featured).length
  }
}
