# STECOM Studio - A/B Test Website

🧪 **Professional A/B testing setup comparing two distinct design approaches**

## 🎯 **A/B Test Overview**

We're testing two completely different design philosophies to see which converts better:

### **Version A: Dark/Neon** (Aggressive Studio Vibe)
- Dark theme with electric neon colors
- Bold, confident copywriting ("Code. Create. Conquer.")
- High-energy animations and effects
- Studio/agency positioning

### **Version B: Light/Friendly** (Approachable Consultant Vibe)  
- Light theme with soft, professional colors
- Friendly, conversational copywriting (Paulien Cornelisse style)
- Subtle animations, Adaline.ai inspired layout
- Personal consultant positioning

## ✨ Features

### 🎨 Visual Excellence
- **SVG-based Preloader** with animated logo and progress tracking
- **Neon Color Palette** with electric blues, purples, and cyberpunk vibes
- **3D Hover Effects** and magnetic cursor interactions
- **Parallax Scrolling** with multiple layers and smooth transforms
- **Dynamic Aurora Backgrounds** with animated gradients

### ⚡ Performance & Interactions
- **Sub-2s Load Times** with optimized animations
- **Intersection Observer** scroll-triggered reveals
- **Framer Motion** powered micro-interactions
- **GPU-accelerated** animations and transforms
- **Mobile-first** responsive design

### 🔥 Cutting-Edge Components

#### Hero Section
- Haiku-style messaging: "Code. Create. Conquer."
- Interactive stats with real-time animations
- Magnetic button effects with neon glows

#### Services Grid
- 4 animated service cards with 3D transforms
- Hover-triggered glow effects and content reveals
- Technology badges with micro-interactions

#### Manifesto Section
- Sticky header with parallax movement
- Masonry grid with bold statements
- Real performance metrics display

#### Portfolio Showcase
- Dynamic filtering system
- Featured project highlighting
- Hover-zoom with overlay interactions

#### CTA Section
- Multiple engagement options
- Neon-style buttons with conic gradients
- Emergency hotline with pulsing effects

## 🛠 Tech Stack

```json
{
  "framework": "Next.js 14.2.0",
  "styling": "Tailwind CSS 3.4.0",
  "animations": "Framer Motion 11.0.0", 
  "interactions": "React Intersection Observer",
  "fonts": ["Space Grotesk", "Inter", "JetBrains Mono"],
  "performance": "GPU-optimized animations"
}
```

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🧪 **A/B Testing Features**

### **Automatic Assignment**
- 50/50 random split for new visitors
- Variant stored in localStorage to ensure consistency
- No server-side setup required

### **Conversion Tracking**
- Tracks CTA clicks, form submissions, and other key actions
- Real-time analytics in development dashboard
- Local storage based (production would use proper analytics)

### **Development Controls**
- Live dashboard showing performance metrics
- Manual variant switching for testing
- Debug info showing current variant

### **Testing the A/B System**

```bash
# 1. Visit the site normally - you'll be randomly assigned
http://localhost:3002

# 2. Open in incognito/private browsing to simulate new users

# 3. Use the development controls (bottom-left gear icon) to:
#    - See real-time conversion rates
#    - Manually switch between variants
#    - View user assignment data

# 4. Clear localStorage to get reassigned:
localStorage.clear()
```

## 🎯 Performance Targets

- ⚡ **<2s** First Contentful Paint
- 📱 **100/100** Lighthouse Mobile Score
- 🖥️ **100/100** Lighthouse Desktop Score
- ♿ **AA** WCAG Accessibility Compliance

## 🎨 Design Systems

### **Dark Version Colors**
```css
--electric-blue: #00F5FF
--electric-purple: #8B5CF6  
--electric-pink: #F97CE6
--electric-green: #00FFA1
--electric-yellow: #FFE066
--dark-900: #0A0A0B
```

### **Light Version Colors**
```css
--blue-600: #2563EB
--slate-800: #1E293B
--slate-600: #475569
--blue-50: #EFF6FF
--white: #FFFFFF
```

### **Typography Approach**
- **Dark**: Bold, heavy fonts (Space Grotesk)
- **Light**: Light, clean fonts (Inter Light/Regular)

### **Animation Philosophy**
- **Dark**: High-energy, neon effects, magnetic interactions
- **Light**: Subtle, professional, smooth transitions

### Typography Scale
- **Hero**: `clamp(3rem, 10vw, 12rem)`
- **Display**: Responsive clamp functions
- **Body**: Optimized line-heights and spacing

### Animation Principles
- **Easing**: Custom cubic-bezier curves
- **Duration**: 300-800ms for optimal feel
- **Staggering**: 100-200ms delays for reveals
- **GPU**: Transform and opacity only for 60fps

## 📁 Project Structure

```
STEcom/
├── app/
│   ├── page.tsx               # A/B test coordinator + both versions
│   ├── layout.tsx             # Root layout
│   └── globals.css            # Global styles & utilities
├── components/
│   # Dark Version Components
│   ├── Preloader.tsx          # SVG loading animation
│   ├── HeroStudio.tsx         # Aggressive hero with neon effects
│   ├── WhatWeDo.tsx           # Bold services grid
│   ├── WhyUs.tsx              # Manifesto-style about section
│   ├── Portfolio.tsx          # High-energy portfolio showcase
│   ├── CTASection.tsx         # Conversion-optimized CTAs
│   
│   # Light Version Components  
│   ├── HeroLight.tsx          # Friendly, approachable hero
│   ├── ProcessSections.tsx    # Adaline-style process explanation
│   ├── SplitSection.tsx       # Reusable left-static/right-moving layout
│   ├── CTALight.tsx           # Gentle, conversational CTAs
│   
│   # Shared Utilities
│   ├── ScrollEffects.tsx      # Animation utilities
│   └── ABTestControls.tsx     # Development dashboard
├── lib/
│   └── abtest.ts              # A/B testing logic & analytics
├── tailwind.config.js         # Extended config with animations
└── package.json               # Dependencies & scripts
```

## 📊 **Key Metrics to Track**

### **Conversion Events**
1. **Primary CTA clicks** (main action buttons)
2. **Contact form submissions** 
3. **Phone/email clicks**
4. **Scroll depth** (how far users scroll)
5. **Time on site**

### **Hypothesis**
- **Dark version** will appeal to tech-savvy, younger demographics
- **Light version** will perform better with traditional business owners
- **Light version** may have higher conversion due to trust/approachability

### **Success Criteria**
- Minimum 100 users per variant for statistical significance
- Primary metric: Contact form conversion rate
- Secondary metrics: Time on site, scroll depth, CTA click-through rate

## 🎯 Conversion Optimization

### Psychology-Driven Copy
- **Urgency**: "Can't Wait? Need It Yesterday?"
- **Authority**: "We don't compete—we dominate"
- **Social Proof**: Real performance metrics
- **Exclusivity**: "Winners Only" messaging

### UX Patterns
- **Progressive Disclosure**: Reveal information as needed
- **Micro-Commitments**: Multiple low-friction CTAs
- **Visual Hierarchy**: Clear action paths
- **Trust Signals**: Performance stats and guarantees

## 🔧 Customization

### Adding New Sections
1. Create component in `/components/`
2. Add scroll effects from `ScrollEffects.tsx`
3. Import in `app/page.tsx`
4. Add navigation item to floating menu

### Styling Guidelines
- Use Tailwind's utility classes
- Leverage custom animations from config
- Follow the neon color palette
- Maintain 60fps with GPU acceleration

## 🌟 Pro Tips

- **Performance**: Use `transform` and `opacity` for animations
- **Accessibility**: All interactions have focus states
- **SEO**: Semantic HTML with proper heading hierarchy
- **Analytics**: Track micro-interactions for optimization

---

**Built with ⚡ by STECOM Studio**  
*Where code meets creativity*