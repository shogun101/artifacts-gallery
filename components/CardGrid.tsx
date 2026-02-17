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
  const animationParams = useDialKit('Card Animation', {
    glowBlur: [32, 0, 100],
    glowOpacity: [0.08, 0, 0.3],
    hoverDuration: [0.2, 0.05, 1],
    shimmerSpeed: [2, 0.5, 5],
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
        />
      ))}
    </div>
  )
}
