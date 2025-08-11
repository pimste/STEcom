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
    { value: "350+", label: "Bezoekers per dag", description: "150% meer organisch verkeer" },
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
  
  costSavings: [
    {
      item: "Webdeveloper",
      before: "€500/maand",
      after: "€0/maand", 
      savings: "€6.000/jaar",
      description: "Geen externe developer meer nodig"
    },
    {
      item: "Hosting & Onderhoud",
      before: "€200/maand",
      after: "€50/maand",
      savings: "€1.800/jaar", 
      description: "Efficiënte cloud hosting"
    },
    {
      item: "Updates & Beveiliging",
      before: "€300/maand",
      after: "€0/maand",
      savings: "€3.600/jaar",
      description: "Automatische updates en beveiliging"
    }
  ],
  
  marketingResults: [
    {
      name: "Google Ads",
      budget: "€1.500/maand",
      results: "45 leads/maand",
      roi: "350%",
      description: "Gerichte PPC campagnes voor B2B markt"
    },
    {
      name: "SEO Organisch",
      budget: "€0/maand", 
      results: "350 bezoekers/dag",
      roi: "∞",
      description: "Gratis organisch verkeer door SEO optimalisatie"
    },
    {
      name: "Social Media",
      budget: "€300/maand",
      results: "12 leads/maand", 
      roi: "200%",
      description: "LinkedIn en Facebook campagnes"
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
  
  developmentPhases: [
    {
      phase: "Discovery & Planning",
      duration: "1 week",
      description: "Analyse van huidige website, doelstellingen en requirements",
      technologies: ["Figma", "Google Analytics", "SEO Tools"],
      deliverables: ["Project plan", "Wireframes", "SEO audit"]
    },
    {
      phase: "Design & UX",
      duration: "2 weken", 
      description: "Moderne, professionele design met focus op conversie",
      technologies: ["Figma", "Adobe Creative Suite"],
      deliverables: ["UI/UX Design", "Mobile mockups", "Design system"]
    },
    {
      phase: "Development",
      duration: "4 weken",
      description: "Full-stack development met Next.js en Firebase",
      technologies: ["Next.js", "Tailwind CSS", "Firebase", "TypeScript"],
      deliverables: ["Responsive website", "CMS", "Admin panel"]
    },
    {
      phase: "SEO & Performance",
      duration: "1 week",
      description: "Uitgebreide SEO optimalisatie en performance tuning",
      technologies: ["Google Search Console", "PageSpeed Insights", "Core Web Vitals"],
      deliverables: ["SEO optimalisatie", "Performance audit", "Analytics setup"]
    },
    {
      phase: "Testing & Launch",
      duration: "1 week",
      description: "Uitgebreide testing en succesvolle lancering",
      technologies: ["Browser testing", "Mobile testing", "Performance monitoring"],
      deliverables: ["Live website", "Documentatie", "Training"]
    }
  ],
  
  communicationLog: [
    {
      date: "2024-01-15",
      type: "meeting",
      summary: "Eerste kennismaking en project briefing",
      outcome: "Project scope gedefinieerd, budget en timeline vastgesteld"
    },
    {
      date: "2024-01-22", 
      type: "presentation",
      summary: "Presentatie van design concepten",
      outcome: "Design richting goedgekeurd, feedback verwerkt"
    },
    {
      date: "2024-02-15",
      type: "call",
      summary: "Tussentijdse update development voortgang",
      outcome: "Klant tevreden met voortgang, extra features toegevoegd"
    },
    {
      date: "2024-03-01",
      type: "email",
      summary: "SEO strategie en Google Ads setup",
      outcome: "Marketing plan goedgekeurd, campagnes gestart"
    },
    {
      date: "2024-03-15",
      type: "meeting",
      summary: "Finale presentatie en training",
      outcome: "Website gelanceerd, klant getraind op CMS"
    }
  ],
  
  // Business Impact
  roi: "300%",
  paybackPeriod: "3 maanden",
  annualSavings: "€6.000",
  competitiveAdvantages: [
    "Moderne, professionele uitstraling",
    "Razendsnelle laadtijden (< 2 seconden)",
    "Volledig mobiel geoptimaliseerd",
    "SEO-geoptimaliseerd voor betere vindbaarheid",
    "Gebruiksvriendelijk CMS voor zelfbeheer",
    "99.9% uptime garantie",
    "Automatische backups en beveiliging"
  ],
  
  // Technical Details
  technologies: {
    frontend: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "Framer Motion"],
    backend: ["Firebase", "Firestore", "Firebase Auth", "Cloud Functions"],
    infrastructure: ["Vercel", "Cloudflare CDN", "Google Cloud Platform"],
    thirdParty: ["Google Analytics", "Google Search Console", "Google Ads", "Hotjar"]
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
    "350+ bezoekers per dag (150% meer organisch verkeer)",
    "€6.000 jaarlijkse besparingen op IT kosten",
    "99.9% uptime en betrouwbare performance",
    "Klant kan alles zelf beheren via CMS",
    "Professionele uitstraling die vertrouwen wekt"
  ],
  
  testimonials: [
    {
      quote: "STEcom heeft onze website volledig getransformeerd. We krijgen nu veel meer bezoekers en kunnen alles zelf aanpassen. De investering heeft zich al binnen 3 maanden terugverdiend!",
      author: "Mark van der Berg",
      role: "Directeur",
      company: "NIBM Towercranes"
    }
  ],
  
  // SEO
  seoTitle: "NIBM Towercranes - Moderne Website met CMS | STEcom Case Study",
  seoDescription: "Ontdek hoe we NIBM Towercranes hebben geholpen met een moderne website die 150% meer bezoekers genereert en €6.000 per jaar bespaart.",
  seoKeywords: ["torenkranen", "website", "CMS", "SEO", "Next.js", "case study", "NIBM"],
  
  // Dates
  startDate: "2024-01-15",
  completionDate: "2024-03-15", 
  launchDate: "2024-03-15",
  
  // Status
  status: "completed",
  featured: true
}
