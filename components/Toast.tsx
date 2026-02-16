'use client'

/* ─────────────────────────────────────────────────────────
 * ANIMATION STORYBOARD
 *
 *    0ms   toast appears (fade in, slide up)
 * 2500ms   toast fades out (slide up, fade)
 * 2800ms   toast removed from DOM
 * ───────────────────────────────────────────────────────── */

import { useEffect, useState } from 'react'

const TIMING = {
  display: 2500,    // ms to show toast
  fadeOut: 300,     // ms for exit animation
}

interface ToastProps {
  message: string
  onClose: () => void
}

export function Toast({ message, onClose }: ToastProps) {
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    const exitTimer = setTimeout(() => {
      setIsExiting(true)
    }, TIMING.display)

    const removeTimer = setTimeout(() => {
      onClose()
    }, TIMING.display + TIMING.fadeOut)

    return () => {
      clearTimeout(exitTimer)
      clearTimeout(removeTimer)
    }
  }, [onClose])

  return (
    <div 
      className={`
        fixed bottom-8 left-1/2 -translate-x-1/2 z-50
        px-6 py-3 bg-white/10 backdrop-blur-md
        border border-white/20 rounded-lg
        text-body text-white
        ${isExiting ? 'animate-toast-out' : 'animate-toast-in'}
      `}
    >
      <span className="text-muted">[</span>
      <span className="text-white">{message}</span>
      <span className="text-muted">]</span>
    </div>
  )
}
