'use client'

import { useDialKit } from 'dialkit'
import { ArtifactCard } from './ArtifactCard'

interface Artifact {
  _id: string
  title: string
  imageUrl: string
  prompt: string
  sourceType: 'x' | 'web'
  sourceUrl: string
}

interface CardGridProps {
  artifacts: Artifact[]
}

export function CardGrid({ artifacts }: CardGridProps) {
  // Single DialKit panel for all card animations
  const animationParams = useDialKit('Card Hover', {
    glowBlur: [32, 0, 100],
    glowOpacity: [0.08, 0, 0.3],
    glowEnabled: true,
    shimmerEnabled: true,
    shimmerSpeed: [1.5, 0.5, 4],
    shimmerOpacity: [0.08, 0.02, 0.2],
  })

  // Single DialKit panel for toast animation
  const toastParams = useDialKit('Toast Animation', {
    bgOpacity: [0.88, 0.5, 1],
    blur: [12, 0, 30],
    inDuration: [0.3, 0.1, 1],
    outDuration: [0.3, 0.1, 1],
    displayTime: [2500, 500, 5000],
  })

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-dashed border-card-border">
      {artifacts.map((artifact, index) => (
        <ArtifactCard
          key={artifact._id}
          title={artifact.title}
          imageUrl={artifact.imageUrl}
          prompt={artifact.prompt}
          sourceType={artifact.sourceType}
          sourceUrl={artifact.sourceUrl}
          index={index}
          animationParams={animationParams}
          toastParams={toastParams}
        />
      ))}
    </div>
  )
}
