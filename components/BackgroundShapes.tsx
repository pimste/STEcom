'use client'

import { motion } from 'framer-motion'

interface BackgroundShapesProps {
  variant?: 'hero' | 'showcase' | 'cta' | 'minimal'
  intensity?: 'subtle' | 'medium' | 'strong'
  className?: string
}

export default function BackgroundShapes({ 
  variant = 'showcase', 
  intensity = 'medium',
  className = '' 
}: BackgroundShapesProps) {
  const intensityClasses = {
    subtle: {
      opacity: 'opacity-25',
      blur: 'blur-md',
      scale: 0.8
    },
    medium: {
      opacity: 'opacity-40',
      blur: 'blur-sm',
      scale: 1
    },
    strong: {
      opacity: 'opacity-55',
      blur: 'blur-none',
      scale: 1.2
    }
  }

  const currentIntensity = intensityClasses[intensity]

  const variants = {
    hero: {
      shapes: [
        // Large organic blob - bottom right
        {
          className: `absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-teal-300/${currentIntensity.opacity} to-blue-400/${currentIntensity.opacity} ${currentIntensity.blur}`,
          animation: {
            scale: [1, 1.2, 1],
            rotate: [0, 15, 0],
          },
          transition: { duration: 30, repeat: Infinity, ease: "easeInOut" },
          style: { 
            transformOrigin: "bottom right",
            borderRadius: "58% 42% 38% 62% / 42% 58% 42% 58%"
          }
        },
        // Medium organic blob - top left
        {
          className: `absolute top-0 left-0 w-56 h-56 bg-gradient-to-br from-indigo-300/${currentIntensity.opacity} to-purple-400/${currentIntensity.opacity} ${currentIntensity.blur}`,
          animation: {
            scale: [1, 0.8, 1],
            rotate: [0, -20, 0],
          },
          transition: { duration: 25, repeat: Infinity, ease: "easeInOut", delay: 8 },
          style: { 
            transformOrigin: "top left",
            borderRadius: "65% 35% 45% 55% / 55% 45% 55% 45%"
          }
        }
      ],
      particles: 0,
      lines: 0
    },
    showcase: {
      shapes: [
        // Large organic blob - bottom left
        {
          className: `absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-teal-400/${currentIntensity.opacity} to-blue-500/${currentIntensity.opacity} ${currentIntensity.blur}`,
          animation: {
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          },
          transition: { duration: 20, repeat: Infinity, ease: "easeInOut" },
          style: { 
            transformOrigin: "bottom left",
            borderRadius: "63% 37% 16% 84% / 60% 54% 46% 40%"
          }
        },
        // Medium organic blob - top right
        {
          className: `absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-purple-400/${currentIntensity.opacity} to-pink-400/${currentIntensity.opacity} ${currentIntensity.blur}`,
          animation: {
            scale: [1, 0.9, 1],
            rotate: [0, -10, 0],
          },
          transition: { duration: 25, repeat: Infinity, ease: "easeInOut", delay: 5 },
          style: { 
            transformOrigin: "top right",
            borderRadius: "59% 41% 60% 40% / 69% 50% 50% 31%"
          }
        },
        // Small organic blob - center
        {
          className: `absolute top-1/3 left-1/4 w-24 h-24 bg-gradient-to-br from-blue-300/${currentIntensity.opacity} to-indigo-400/${currentIntensity.opacity} ${currentIntensity.blur}`,
          animation: {
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1],
          },
          transition: { duration: 15, repeat: Infinity, ease: "easeInOut", delay: 10 },
          style: {
            borderRadius: "45% 55% 35% 65% / 55% 45% 55% 45%"
          }
        }
      ],
      particles: 0,
      lines: 0
    },
    cta: {
      shapes: [
        // Large organic blob - center left
        {
          className: `absolute left-0 top-1/2 w-64 h-64 bg-gradient-to-br from-blue-200/${currentIntensity.opacity} to-indigo-300/${currentIntensity.opacity} ${currentIntensity.blur} transform -translate-y-1/2`,
          animation: {
            scale: [1, 1.15, 1],
            rotate: [0, 8, 0],
          },
          transition: { duration: 22, repeat: Infinity, ease: "easeInOut" },
          style: { 
            transformOrigin: "left center",
            borderRadius: "52% 48% 38% 62% / 48% 52% 48% 52%"
          }
        },
        // Medium organic blob - top right
        {
          className: `absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-purple-200/${currentIntensity.opacity} to-pink-200/${currentIntensity.opacity} ${currentIntensity.blur}`,
          animation: {
            scale: [1, 0.85, 1],
            rotate: [0, -12, 0],
          },
          transition: { duration: 28, repeat: Infinity, ease: "easeInOut", delay: 6 },
          style: { 
            transformOrigin: "top right",
            borderRadius: "61% 39% 55% 45% / 45% 55% 45% 55%"
          }
        },
        // Small organic blob - bottom center
        {
          className: `absolute bottom-0 left-1/2 w-32 h-32 bg-gradient-to-br from-indigo-200/${currentIntensity.opacity} to-purple-300/${currentIntensity.opacity} ${currentIntensity.blur} transform -translate-x-1/2`,
          animation: {
            scale: [1, 1.05, 1],
            rotate: [0, -5, 0],
          },
          transition: { duration: 30, repeat: Infinity, ease: "easeInOut", delay: 15 },
          style: {
            borderRadius: "70% 30% 30% 70% / 60% 40% 60% 40%"
          }
        }
      ],
      particles: 0,
      lines: 0
    },
    minimal: {
      shapes: [
        // Single subtle organic blob
        {
          className: `absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-br from-blue-200/${currentIntensity.opacity} to-purple-200/${currentIntensity.opacity} ${currentIntensity.blur} transform -translate-x-1/2 -translate-y-1/2`,
          animation: {
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          },
          transition: { duration: 20, repeat: Infinity, ease: "easeInOut" },
          style: {
            borderRadius: "50% 50% 50% 50% / 50% 50% 50% 50%"
          }
        }
      ],
      particles: 0,
      lines: 0
    }
  }

  const currentVariant = variants[variant]

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Main shapes */}
      {currentVariant.shapes.map((shape, index) => (
        <motion.div
          key={`shape-${index}`}
          animate={shape.animation}
          transition={shape.transition}
          className={shape.className}
          style={shape.style}
        />
      ))}

      {/* Floating particles */}
      {[...Array(currentVariant.particles)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.sin(i) * 30, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.5,
          }}
          className={`absolute w-3 h-3 bg-blue-400/80 ${
            i < 2 ? 'blur-none' : i < 4 ? 'blur-sm' : 'blur-md'
          }`}
          style={{
            left: `${20 + (i % 3) * 25}%`,
            top: `${30 + Math.floor(i / 3) * 20}%`,
            borderRadius: `${30 + i * 10}% ${70 - i * 10}% ${40 + i * 5}% ${60 - i * 5}% / ${50 + i * 5}% ${50 - i * 5}% ${45 + i * 10}% ${55 - i * 10}%`,
          }}
        />
      ))}

      {/* Energy lines */}
      {[...Array(currentVariant.lines)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          animate={{
            opacity: [0.3, 0.7, 0.3],
            scaleX: [1, 1.2, 1],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 6,
          }}
          className={`absolute w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400/35 to-transparent transform -skew-y-12 ${
            i === 0 ? 'blur-none' : i === 1 ? 'blur-sm' : 'blur-md'
          }`}
          style={{
            top: `${40 + i * 15}%`,
          }}
        />
      ))}

      {/* Mesh gradient overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]" />
      <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(147,51,234,0.03),rgba(59,130,246,0.03),rgba(147,51,234,0.03))]" />
    </div>
  )
} 