'use client'

interface ShimmerTextProps {
  children: string
  className?: string
}

export function ShimmerText({ 
  children, 
  className = '' 
}: ShimmerTextProps) {
  return (
    <span className={`shimmer-text ${className}`}>
      {children}
    </span>
  )
}
