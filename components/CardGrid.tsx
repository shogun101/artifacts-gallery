'use client'

import { useState, useCallback } from 'react'
import { ArtifactCard } from './ArtifactCard'
import { Toast } from './Toast'

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
  const [toast, setToast] = useState<string | null>(null)

  const handleCopy = useCallback((title: string) => {
    setToast(`COPIED PROMPT FOR ${title}`)
  }, [])

  const closeToast = useCallback(() => {
    setToast(null)
  }, [])

  return (
    <>
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
            onCopy={handleCopy}
          />
        ))}
      </div>
      
      {toast && <Toast message={toast} onClose={closeToast} />}
    </>
  )
}
