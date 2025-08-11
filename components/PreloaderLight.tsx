'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

interface PreloaderLightProps {
  onComplete: () => void
}

export default function PreloaderLight({ onComplete }: PreloaderLightProps) {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => {
            setIsComplete(true)
            setTimeout(onComplete, 600)
          }, 300)
          return 100
        }
        return prev + Math.random() * 12
      })
    }, 120)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-100 bg-white flex items-center justify-center overflow-hidden"
        >
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div 
              className="w-full h-full"
              style={{
                backgroundImage: `radial-gradient(circle at 20px 20px, #3B82F6 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
              }}
            />
          </div>
          
          {/* Floating gentle elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  x: [0, Math.random() * 50 - 25],
                  y: [0, Math.random() * 50 - 25],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 8 + Math.random() * 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 3,
                }}
                className="absolute w-16 h-16 bg-gradient-to-br from-blue-100 to-slate-100 rounded-full opacity-30"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>

          {/* Main content */}
          <div className="relative z-10 flex flex-col items-center space-y-8 max-w-md mx-auto px-6">
            {/* Clean logo animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              {/* Simple geometric logo */}
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                className="text-blue-600"
              >
                {/* Outer circle */}
                <motion.circle
                  cx="40"
                  cy="40"
                  r="35"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  pathLength="1"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
                
                {/* Inner shape - clean hexagon */}
                <motion.path
                  d="M40 15 L60 27.5 L60 52.5 L40 65 L20 52.5 L20 27.5 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  pathLength="1"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
                />
                
                {/* Center dot */}
                <motion.circle
                  cx="40"
                  cy="40"
                  r="3"
                  fill="currentColor"
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                />
              </svg>
              
              {/* Subtle glow */}
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-20"
              />
            </motion.div>

            {/* Brand name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center space-y-2"
            >
              <h1 className="text-3xl font-display font-light text-slate-800 tracking-wide">
                STECOM
              </h1>
              <p className="text-sm text-slate-500 font-medium tracking-wider uppercase">
                Websites die werken
              </p>
            </motion.div>

            {/* Clean progress bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="w-64 space-y-3"
            >
              <div className="flex justify-between text-xs text-slate-500">
                <span>Voorbereiden...</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="relative h-1 bg-slate-200 rounded-full overflow-hidden">
                <motion.div
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
                {/* Shine effect */}
                <motion.div
                  className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                  animate={{ x: [-64, 280] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </motion.div>

            {/* Loading message */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-slate-400 text-sm tracking-wide text-center"
            >
              Een moment geduld...
            </motion.div>
          </div>

          {/* Corner decorations - minimal */}
          {[
            { position: "top-8 left-8", delay: 1.8 },
            { position: "top-8 right-8", delay: 2 },
            { position: "bottom-8 left-8", delay: 2.2 },
            { position: "bottom-8 right-8", delay: 2.4 },
          ].map((corner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.3, scale: 1 }}
              transition={{ duration: 0.4, delay: corner.delay }}
              className={`absolute ${corner.position} w-2 h-2 border-t border-r border-blue-300`}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}