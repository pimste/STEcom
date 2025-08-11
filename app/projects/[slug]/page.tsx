import { notFound } from 'next/navigation'
import { getProjectBySlug } from '@/lib/projects'
import { SEO } from '@/components/SEO'
import ProjectHero from '@/components/projects/ProjectHero'
import ProjectOverview from '@/components/projects/ProjectOverview'
import ProjectMetrics from '@/components/projects/ProjectMetrics'
import ProjectProcess from '@/components/projects/ProjectProcess'
import ProjectResults from '@/components/projects/ProjectResults'
import ProjectGallery from '@/components/projects/ProjectGallery'
import ProjectTestimonials from '@/components/projects/ProjectTestimonials'
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
      <SEO 
        title={project.seoTitle}
        description={project.seoDescription}
        keywords={project.seoKeywords.join(', ')}
        url={`https://stecom.nl/projects/${project.slug}`}
      />
      
      <main className="min-h-screen bg-white">
        <ProjectHero project={project} />
        <ProjectOverview project={project} />
        <ProjectMetrics project={project} />
        <ProjectProcess project={project} />
        <ProjectResults project={project} />
        <ProjectGallery project={project} />
        <ProjectTestimonials project={project} />
        <ProjectCTA project={project} />
      </main>
    </>
  )
}
