'use client'

import { useRef, useEffect } from 'react'
import Lottie from 'lottie-react'

interface LottieAnimationProps {
  animationData: any
  loop?: boolean
  autoplay?: boolean
  speed?: number
  className?: string
  style?: React.CSSProperties
  onComplete?: () => void
  onLoopComplete?: () => void
  onEnterFrame?: (frame: number) => void
}

export default function LottieAnimation({
  animationData,
  loop = true,
  autoplay = true,
  speed = 1,
  className = '',
  style = {},
  onComplete,
  onLoopComplete,
  onEnterFrame
}: LottieAnimationProps) {
  const lottieRef = useRef<any>(null)

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(speed)
    }
  }, [speed])

  return (
    <Lottie
      ref={lottieRef}
      animationData={animationData}
      loop={loop}
      autoplay={autoplay}
      className={className}
      style={style}
      onComplete={onComplete}
      onLoopComplete={onLoopComplete}
      onEnterFrame={onEnterFrame}
    />
  )
}

// Predefined animations for common use cases
export const LoadingAnimation = ({ className = 'w-16 h-16' }: { className?: string }) => (
  <div className={`flex items-center justify-center ${className}`}>
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
  </div>
)

export const SuccessAnimation = ({ className = 'w-16 h-16' }: { className?: string }) => (
  <div className={`flex items-center justify-center ${className}`}>
    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    </div>
  </div>
)

export const ErrorAnimation = ({ className = 'w-16 h-16' }: { className?: string }) => (
  <div className={`flex items-center justify-center ${className}`}>
    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </div>
  </div>
) 