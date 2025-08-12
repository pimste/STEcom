import { notFound } from 'next/navigation'
import { getProjectBySlug } from '@/lib/projects'
import SEOEnhanced from '@/components/SEOEnhanced'
import ProjectHero from '@/components/projects/ProjectHero'
import ProjectOverview from '@/components/projects/ProjectOverview'
import ProjectSEOImprovements from '@/components/projects/ProjectSEOImprovements'


import ProjectCTA from '@/components/projects/ProjectCTA'

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const { getAllProjectSlugs } = await import('@/lib/projects')
  const slugs = getAllProjectSlugs()
  
  return slugs.map((slug) => ({
    slug,
  }))
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug)
  
  if (!project) {
    notFound()
  }

  return (
    <>
      <SEOEnhanced 
        metadata={{
          title: project.seoTitle,
          description: project.seoDescription,
          keywords: project.seoKeywords,
          canonical: `https://stecom.nl/projects/${project.slug}`,
          ogTitle: project.title,
          ogDescription: project.seoDescription,
          ogImage: project.heroImage
        }}
      />
      
      <main className="min-h-screen bg-white">
        <ProjectHero project={project} />
        <ProjectOverview project={project} />
        <ProjectSEOImprovements project={project} />
        <ProjectCTA project={project} />
      </main>
    </>
  )
}
