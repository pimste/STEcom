import { projects } from '@/lib/projects'
import { SEO } from '@/components/SEO'
import ProjectsOverview from '@/components/projects/ProjectsOverview'

export default function ProjectsPage() {
  return (
    <>
      <SEO 
        title="Project Portfolio - STEcom"
        description="Bekijk onze project portfolio met case studies van succesvolle websites, webapplicaties en digitale transformaties."
        keywords="project portfolio, case studies, web development, website design, SEO, digital transformation"
        url="https://stecom.nl/projects"
      />
      
      <main className="min-h-screen bg-white">
        <ProjectsOverview projects={projects} />
      </main>
    </>
  )
}
