import { projects } from '@/lib/projects'
import SEOEnhanced from '@/components/SEOEnhanced'
import ProjectsOverview from '@/components/projects/ProjectsOverview'

export default function ProjectsPage() {
  return (
    <>
      <SEOEnhanced 
        metadata={{
          title: "Project Portfolio - STEcom",
          description: "Bekijk onze project portfolio met case studies van succesvolle websites, webapplicaties en digitale transformaties.",
          keywords: ["project portfolio", "case studies", "web development", "website design", "SEO", "digital transformation"],
          canonical: "https://stecom.nl/projects",
          ogTitle: "Project Portfolio - STEcom",
          ogDescription: "Bekijk onze project portfolio met case studies van succesvolle websites, webapplicaties en digitale transformaties.",
          ogImage: "/og-image.jpg"
        }}
      />
      
      <main className="min-h-screen bg-white">
        <ProjectsOverview projects={projects} />
      </main>
    </>
  )
}
