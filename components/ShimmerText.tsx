'use client'

import { useRef, useEffect, useState } from 'react'

interface ShimmerTextProps {
  children: string
  duration?: number // base duration in seconds
  className?: string
}

export function ShimmerText({ 
  children, 
  duration = 2,
  className = '' 
}: ShimmerTextProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [animationDuration, setAnimationDuration] = useState(duration)

  useEffect(() => {
    if (ref.current) {
      // Scale duration based on text width
      // Longer text = proportionally longer animation for consistent speed feel
      const width = ref.current.offsetWidth
      const baseWidth = 100 // baseline width in px
      const scaledDuration = duration * (width / baseWidth)
      // Clamp between 1s and 4s
      setAnimationDuration(Math.max(1, Math.min(4, scaledDuration)))
    }
  }, [children, duration])

  return (
    <span
      ref={ref}
      className={`shimmer-text ${className}`}
      style={{
        '--shimmer-duration': `${animationDuration}s`,
      } as React.CSSProperties}
    >
      {children}
    </span>
  )
}
