import { client, isConfigured } from '@/sanity/client'
import { Sidebar, CardGrid } from '@/components'
import { artifactsQuery } from '@/lib/queries'

// Mock data for development (remove when Sanity is connected)
const mockArtifacts = [
  {
    _id: '1',
    title: '16TH CENTURY COIN',
    imageUrl: 'https://placehold.co/440x497/000/333?text=Artifact+1',
    prompt: 'A hyper-detailed 3D render of a medieval coin with dragon motifs, studio lighting, octane render',
    sourceType: 'x' as const,
    sourceUrl: 'https://x.com/example'
  },
  {
    _id: '2',
    title: 'WAX SEAL',
    imageUrl: 'https://placehold.co/440x497/000/333?text=Artifact+2',
    prompt: 'A photorealistic wax seal with intricate heraldic design, deep red color, dramatic lighting',
    sourceType: 'web' as const,
    sourceUrl: 'https://example.com'
  },
  {
    _id: '3',
    title: 'KEYCAP',
    imageUrl: 'https://placehold.co/440x497/000/333?text=Artifact+3',
    prompt: 'A custom mechanical keyboard keycap with galaxy design, translucent resin, macro photography',
    sourceType: 'x' as const,
    sourceUrl: 'https://x.com/example'
  },
  {
    _id: '4',
    title: 'PILL CAPSULE',
    imageUrl: 'https://placehold.co/440x497/000/333?text=Artifact+4',
    prompt: 'A futuristic pill capsule with bioluminescent contents, glass material, studio lighting',
    sourceType: 'x' as const,
    sourceUrl: 'https://x.com/example'
  },
  {
    _id: '5',
    title: 'BOTTLE CAP',
    imageUrl: 'https://placehold.co/440x497/000/333?text=Artifact+5',
    prompt: 'A vintage soda bottle cap with retro typography, weathered metal texture, product photography',
    sourceType: 'web' as const,
    sourceUrl: 'https://example.com'
  },
  {
    _id: '6',
    title: 'SIGNET RING',
    imageUrl: 'https://placehold.co/440x497/000/333?text=Artifact+6',
    prompt: 'An ornate gold signet ring with family crest engraving, baroque style, dramatic shadows',
    sourceType: 'x' as const,
    sourceUrl: 'https://x.com/example'
  },
]

export default async function Home() {
  let artifacts = mockArtifacts
  
  // Fetch from Sanity if configured
  if (isConfigured && client) {
    try {
      const sanityArtifacts = await client.fetch(artifactsQuery, {}, { next: { tags: ['artifacts'] } })
      if (sanityArtifacts && sanityArtifacts.length > 0) {
        artifacts = sanityArtifacts
      }
    } catch (error) {
      console.error('Failed to fetch from Sanity:', error)
    }
  }

  return (
    <main className="grid grid-cols-1 lg:grid-cols-[565px_1fr] min-h-screen bg-black font-sans text-body uppercase">
      <Sidebar />
      <CardGrid artifacts={artifacts} />
    </main>
  )
}
