'use client'

/* ─────────────────────────────────────────────────────────
 * ANIMATION STORYBOARD
 *
 * Read top-to-bottom. Each card animates on scroll into view.
 *
 *    0ms   card waiting (opacity 0, y +20px)
 *   50ms   card fades in, slides up (staggered by index × 50ms)
 *  hover   glow appears, border brightens (no scale)
 * ───────────────────────────────────────────────────────── */

import { motion } from 'framer-motion'
import { useDialKit } from 'dialkit'
import { CopyPromptButton } from './CopyPromptButton'
import { SourceIcon } from './SourceIcon'

interface ArtifactCardProps {
  title: string
  imageUrl: string
  prompt: string
  sourceType: 'x' | 'web'
  sourceUrl: string
  index: number
  onCopy?: (title: string) => void
}

export function ArtifactCard({ 
  title, 
  imageUrl, 
  prompt, 
  sourceType, 
  sourceUrl, 
  index,
  onCopy 
}: ArtifactCardProps) {
  // DialKit controls for animation tweaking
  const p = useDialKit('Card Animation', {
    glowBlur: [32, 0, 100],
    glowOpacity: [0.08, 0, 0.3],
    hoverDuration: [0.2, 0.05, 1],
    shimmerSpeed: [2, 0.5, 5],
  })
  
  const handleCopy = () => {
    onCopy?.(title)
  }

  // Stagger delay: 50ms per card
  const animationDelay = `${index * 0.05}s`
  const hoverGlow = `0 8px ${p.glowBlur}px rgba(255, 255, 255, ${p.glowOpacity})`

  return (
    <motion.div 
      className="relative border-r border-b border-dashed border-card-border aspect-card bg-black overflow-hidden group card-animate"
      style={{ 
        animationDelay,
        ['--shimmer-speed' as string]: `${p.shimmerSpeed}s`,
      }}
      whileHover={{ 
        boxShadow: hoverGlow,
      }}
      transition={{ duration: p.hoverDuration }}
    >
      {/* Source icon with tooltip */}
      <a
        href={sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-icon-y left-icon-x z-20 opacity-60 group-hover:opacity-100 transition-opacity"
        title={sourceType === 'x' ? 'View on X' : 'View source'}
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

      {/* Shimmer effect on hover */}
      <div className="card-shimmer" />

      {/* Gradient overlay for label readability */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none" />

      {/* Label row */}
      <div className="absolute bottom-label-bottom left-card-label-px right-card-label-px flex justify-between items-center z-10">
        <span className="text-label text-body">{title}</span>
        <CopyPromptButton prompt={prompt} onCopy={handleCopy} />
      </div>
    </motion.div>
  )
}
