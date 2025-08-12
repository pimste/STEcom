import { Project } from './types'

export const nibmProject: Project = {
  id: "nibm-towercranes",
  slug: "nibm-towercranes",
  title: "NIBM Towercranes",
  subtitle: "Moderne website met CMS",
  client: "NIBM Towercranes",
  industry: "Heavy Machinery & Construction",
  description: "Een complete Next.js website met Tailwind CSS, Firebase backend en ingebouwde CDN. De klant kan alles zelf aanpassen via een gebruiksvriendelijk CMS. Razendsnel geladen en volledig SEO-geoptimaliseerd.",
  longDescription: "NIBM Towercranes is een toonaangevende leverancier van torenkranen en hijsapparatuur in Nederland. Ze hadden een verouderde website die niet meer voldeed aan moderne standaarden. We hebben een complete digitale transformatie uitgevoerd met focus op performance, SEO en gebruiksvriendelijkheid.",
  
  // Visual
  heroImage: "/projects/nibm-hero.jpg",
  gallery: [
    "/images/nibm-proj/Screenshot 2025-08-12 at 13.39.20.png",
    "/projects/nibm-homepage.jpg",
    "/projects/nibm-products.jpg", 
    "/projects/nibm-contact.jpg",
    "/projects/nibm-mobile.jpg"
  ],
  logo: "/projects/nibm-logo.png",
  color: "purple",
  
  // Quick Stats
  stats: [
    { value: "100%", label: "SEO Score", description: "Perfecte Google ranking" },
    { value: "Spectaculair", label: "Traffic groei", description: "Aanzienlijke verbetering" },
    { value: "< 2s", label: "Laadtijd", description: "Lichtning snel" }
  ],
  skills: [
    { name: "Next.js", category: "frontend" },
    { name: "Tailwind CSS", category: "frontend" },
    { name: "Firebase", category: "backend" },
    { name: "CMS", category: "backend" },
    { name: "SEO Optimization", category: "seo" },
    { name: "Google Ads", category: "marketing" },
    { name: "Performance", category: "analytics" },
    { name: "Client Communication", category: "communication" }
  ],
  
  // URLs
  projectUrl: "https://nibmvb.eu",
  hasIframe: true,
  iframeUrl: "https://nibmvb.eu",
  
  // Detailed Metrics
  performanceMetrics: [
    {
      name: "Page Speed",
      value: "95",
      unit: "%",
      improvement: "+45%",
      description: "Google PageSpeed Insights score",
      color: "green"
    },
    {
      name: "SEO Score", 
      value: "100",
      unit: "%",
      improvement: "+100%",
      description: "Perfecte SEO optimalisatie",
      color: "blue"
    },
    {
      name: "Mobile Performance",
      value: "98",
      unit: "%", 
      improvement: "+52%",
      description: "Mobile-first design score",
      color: "purple"
    },
    {
      name: "Uptime",
      value: "99.9",
      unit: "%",
      improvement: "+0.5%",
      description: "Betrouwbare hosting",
      color: "orange"
    }
  ],
  

  

  
  seoImprovements: [
    {
      metric: "Google Ranking",
      before: "Pagina 3-4",
      after: "Pagina 1",
      improvement: "+200%",
      impact: "Direct zichtbaar in zoekresultaten"
    },
    {
      metric: "Organisch Verkeer",
      before: "140 bezoekers/dag",
      after: "350 bezoekers/dag", 
      improvement: "+150%",
      impact: "Meer potentiële klanten"
    },
    {
      metric: "Conversie Rate",
      before: "1.2%",
      after: "3.8%",
      improvement: "+217%",
      impact: "Betere website ervaring"
    },
    {
      metric: "Bounce Rate",
      before: "68%",
      after: "32%",
      improvement: "-53%", 
      impact: "Bezoekers blijven langer"
    }
  ],
  

  

  

  
  // Technical Details
  technologies: {
    frontend: ["Next.js 14", "React 18", "Tailwind CSS", "Framer Motion"],
    backend: ["Firebase", "Firestore", "Firebase Auth", "Cloud Functions"],
    infrastructure: ["Vercel", "Cloudflare CDN", "Google Cloud Platform"],
    thirdParty: ["Google Analytics", "Google Search Console", "Google Ads"]
  },
  
  // Content
  challenges: [
    "Verouderde website met slechte performance",
    "Geen mobiele optimalisatie",
    "Slechte SEO rankings",
    "Geen CMS voor content updates",
    "Hoge hosting en onderhoudskosten",
    "Geen analytics of inzicht in bezoekers"
  ],
  solutions: [
    "Moderne Next.js website met optimale performance",
    "Mobile-first responsive design",
    "Uitgebreide SEO optimalisatie",
    "Gebruiksvriendelijk CMS systeem",
    "Efficiënte cloud hosting met lage kosten",
    "Comprehensive analytics en monitoring"
  ],
  results: [
    "100% SEO score en top Google rankings",
    "Spectaculaire groei in online zichtbaarheid",
    "Verbeterde vindbaarheid door SEO en LinkedIn ads",
    "99.9% uptime en betrouwbare performance",
    "Klant kan alles zelf beheren via CMS",
    "Professionele uitstraling die vertrouwen wekt"
  ],
  

  
  // SEO
  seoTitle: "NIBM Towercranes - Moderne Website met CMS | STEcom Case Study",
  seoDescription: "Ontdek hoe we NIBM Towercranes hebben geholpen met een moderne website die spectaculair meer verkeer genereert door SEO optimalisatie en LinkedIn advertenties.",
  seoKeywords: ["torenkranen", "website", "CMS", "SEO", "Next.js", "case study", "NIBM"],
  
  // Dates
  startDate: "2024-01-15",
  completionDate: "2024-03-15", 
  launchDate: "2024-03-15",
  
  // Status
  status: "completed",
  featured: true
}
