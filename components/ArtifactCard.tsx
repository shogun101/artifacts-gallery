'use client'

/* ─────────────────────────────────────────────────────────
 * ANIMATION STORYBOARD
 *
 * Read top-to-bottom. Each card animates on scroll into view.
 *
 *    0ms   card waiting (opacity 0, y +20px)
 *   50ms   card fades in, slides up (staggered by index × 50ms)
 *  hover   glow appears, border brightens (no scale)
 *  copy    toast overlay slides up from bottom, covers card
 * ───────────────────────────────────────────────────────── */

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CopyPromptButton } from './CopyPromptButton'
import { SourceIcon } from './SourceIcon'

export interface CardAnimationParams {
  glowBlur: number
  glowOpacity: number
  glowEnabled: boolean
  shimmerEnabled: boolean
  shimmerSpeed: number
  shimmerOpacity: number
}

export interface ToastAnimationParams {
  bgOpacity: number
  blur: number
  inDuration: number
  outDuration: number
  displayTime: number
}

interface ArtifactCardProps {
  title: string
  imageUrl: string
  prompt: string
  sourceType: 'x' | 'web'
  sourceUrl: string
  index: number
  animationParams: CardAnimationParams
  toastParams: ToastAnimationParams
}

export function ArtifactCard({ 
  title, 
  imageUrl, 
  prompt, 
  sourceType, 
  sourceUrl, 
  index,
  animationParams: p,
  toastParams: toast,
}: ArtifactCardProps) {
  const [showToast, setShowToast] = useState(false)

  const handleCopy = () => {
    setShowToast(true)
  }

  // Auto-hide toast
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), toast.displayTime)
      return () => clearTimeout(timer)
    }
  }, [showToast, toast.displayTime])

  // Stagger delay: 50ms per card
  const animationDelay = `${index * 0.05}s`
  const hoverGlow = p.glowEnabled 
    ? `0 8px ${p.glowBlur}px rgba(255, 255, 255, ${p.glowOpacity})` 
    : 'none'

  return (
    <motion.div 
      className="relative border-r border-b border-dashed border-card-border aspect-card bg-black overflow-hidden group card-animate"
      style={{ 
        animationDelay,
        ['--shimmer-speed' as string]: `${p.shimmerSpeed}s`,
        ['--shimmer-opacity' as string]: p.shimmerOpacity,
      }}
      whileHover={{ 
        boxShadow: hoverGlow,
      }}
      transition={{ duration: 0.2 }}
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
      {p.shimmerEnabled && <div className="card-shimmer" />}

      {/* Gradient overlay for label readability */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none" />

      {/* Label row */}
      <div className="absolute bottom-label-bottom left-card-label-px right-card-label-px flex justify-between items-center z-10">
        <span className="text-label text-body">{title}</span>
        <CopyPromptButton prompt={prompt} onCopy={handleCopy} />
      </div>

      {/* Toast overlay - slides up from bottom, covers entire card */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-30"
            style={{ 
              backgroundColor: `rgba(0, 0, 0, ${toast.bgOpacity})`,
              backdropFilter: `blur(${toast.blur}px)`,
            }}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ 
              duration: toast.inDuration,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="text-body text-white uppercase">
              <span className="text-muted">[</span>
              COPIED
              <span className="text-muted">]</span>
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
