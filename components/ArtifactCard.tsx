'use client'

import { CopyPromptButton } from './CopyPromptButton'
import { SourceIcon } from './SourceIcon'

interface ArtifactCardProps {
  title: string
  imageUrl: string
  prompt: string
  sourceType: 'x' | 'web'
  sourceUrl: string
}

export function ArtifactCard({ title, imageUrl, prompt, sourceType, sourceUrl }: ArtifactCardProps) {
  return (
    <div className="relative border border-dashed border-card-border hover:border-card-border-hover aspect-card bg-black overflow-hidden group transition-colors">
      {/* Source icon */}
      <a
        href={sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-icon-y left-icon-x z-10 opacity-60 hover:opacity-100 transition-opacity"
      >
        <SourceIcon type={sourceType} />
      </a>

      {/* Artifact image */}
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />

      {/* Label row */}
      <div className="absolute bottom-label-bottom left-card-label-px right-card-label-px flex justify-between items-center z-10">
        <span className="text-muted text-body">{title}</span>
        <CopyPromptButton prompt={prompt} />
      </div>
    </div>
  )
}
