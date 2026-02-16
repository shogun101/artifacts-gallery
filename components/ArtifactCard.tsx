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
import { CopyPromptButton } from './CopyPromptButton'
import { SourceIcon } from './SourceIcon'

/* Card entrance animation */
const CARD_ANIMATION = {
  initialY: 20,           // px below final position
  staggerDelay: 0.05,     // seconds between each card (50ms)
  spring: { 
    type: "spring" as const, 
    stiffness: 300, 
    damping: 30 
  },
}

/* Hover glow effect */
const HOVER = {
  glow: '0 0 0 1px #444444, 0 8px 32px rgba(255, 255, 255, 0.06)',
  transition: { duration: 0.2 },
}

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
  
  const handleCopy = () => {
    onCopy?.(title)
  }

  return (
    <motion.div 
      className="relative border border-dashed border-card-border aspect-card bg-black overflow-hidden group"
      initial={{ 
        opacity: 0, 
        y: CARD_ANIMATION.initialY 
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0 
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        ...CARD_ANIMATION.spring, 
        delay: index * CARD_ANIMATION.staggerDelay 
      }}
      whileHover={{ 
        boxShadow: HOVER.glow,
        borderColor: '#444444',
      }}
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
