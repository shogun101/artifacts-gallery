'use client'

import { useState } from 'react'

interface CopyPromptButtonProps {
  prompt: string
}

export function CopyPromptButton({ prompt }: CopyPromptButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      console.error('Failed to copy')
    }
  }

  return (
    <button 
      onClick={handleCopy} 
      className="group/btn uppercase text-body cursor-pointer bg-transparent border-none p-0 transition-opacity"
    >
      <span className="text-muted group-hover/btn:text-white transition-colors">[</span>
      <span className="text-white">
        {copied ? 'COPIED!' : 'COPY PROMPT'}
      </span>
      <span className="text-muted group-hover/btn:text-white transition-colors">]</span>
    </button>
  )
}
