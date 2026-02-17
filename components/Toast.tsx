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
        fixed bottom-0 left-0 right-0 z-50
        px-6 py-4 bg-black/[0.88] backdrop-blur-md
        text-body text-white uppercase
        transition-transform duration-300 ease-out
        ${isExiting ? 'translate-y-full' : 'translate-y-0'}
      `}
      style={{ 
        animation: isExiting ? undefined : 'toast-slide-up 0.3s ease-out'
      }}
    >
      <span className="text-muted">[</span>
      <span className="text-white">{message}</span>
      <span className="text-muted">]</span>
    </div>
  )
}
