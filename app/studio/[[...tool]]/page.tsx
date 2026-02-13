'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '@/sanity.config'

export default function StudioPage() {
  // Show warning if Sanity is not configured
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
        <div className="max-w-md text-center">
          <h1 className="text-2xl mb-4">Sanity Not Configured</h1>
          <p className="text-gray-400">
            Set NEXT_PUBLIC_SANITY_PROJECT_ID in your .env.local file to enable the CMS.
          </p>
        </div>
      </div>
    )
  }
  
  return <NextStudio config={config} />
}
