import { client, isConfigured } from '@/sanity/client'
import { Sidebar, CardGrid } from '@/components'
import { artifactsQuery } from '@/lib/queries'

// Sample artifacts with local images
const mockArtifacts = [
  {
    _id: '1',
    title: 'ARTIFACT I',
    imageUrl: '/artifacts/HorizontalBorder.png',
    prompt: 'A hyper-detailed 3D render of a decorative border element, ornate baroque style, gold and ivory, studio lighting, octane render',
    sourceType: 'x' as const,
    sourceUrl: 'https://x.com/akshitvrma'
  },
  {
    _id: '2',
    title: 'ARTIFACT II',
    imageUrl: '/artifacts/HorizontalBorder-1.png',
    prompt: 'An intricate horizontal border design with classical motifs, photorealistic rendering, dramatic shadows',
    sourceType: 'x' as const,
    sourceUrl: 'https://x.com/akshitvrma'
  },
  {
    _id: '3',
    title: 'ARTIFACT III',
    imageUrl: '/artifacts/HorizontalBorder-2.png',
    prompt: 'A decorative architectural border element, renaissance style, marble and gold leaf, product photography',
    sourceType: 'web' as const,
    sourceUrl: 'https://example.com'
  },
  {
    _id: '4',
    title: 'ARTIFACT IV',
    imageUrl: '/artifacts/HorizontalBorder-3.png',
    prompt: 'An ornamental frame border with floral patterns, vintage aesthetic, high detail macro photography',
    sourceType: 'x' as const,
    sourceUrl: 'https://x.com/akshitvrma'
  },
  {
    _id: '5',
    title: 'ARTIFACT V',
    imageUrl: '/artifacts/HorizontalBorder-4.png',
    prompt: 'A minimalist decorative border, geometric patterns, matte finish, studio lighting setup',
    sourceType: 'x' as const,
    sourceUrl: 'https://x.com/akshitvrma'
  },
  {
    _id: '6',
    title: 'ARTIFACT VI',
    imageUrl: '/artifacts/HorizontalBorder-5.png',
    prompt: 'An elaborate corner border element, art deco influence, chrome and glass materials, 8k render',
    sourceType: 'web' as const,
    sourceUrl: 'https://example.com'
  },
  {
    _id: '7',
    title: 'ARTIFACT VII',
    imageUrl: '/artifacts/HorizontalBorder-6.png',
    prompt: 'A classical frieze border design, Greco-Roman style, weathered stone texture, cinematic lighting',
    sourceType: 'x' as const,
    sourceUrl: 'https://x.com/akshitvrma'
  },
  {
    _id: '8',
    title: 'ARTIFACT VIII',
    imageUrl: '/artifacts/HorizontalBorder-7.png',
    prompt: 'An intricate woodcarving border pattern, medieval craftsmanship, oak finish, natural lighting',
    sourceType: 'x' as const,
    sourceUrl: 'https://x.com/akshitvrma'
  },
  {
    _id: '9',
    title: 'ARTIFACT IX',
    imageUrl: '/artifacts/HorizontalBorder-8.png',
    prompt: 'A symmetrical decorative border with botanical elements, Victorian era style, sepia tones, archival quality',
    sourceType: 'x' as const,
    sourceUrl: 'https://x.com/akshitvrma'
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
    <main className="min-h-screen bg-black font-sans text-body uppercase">
      {/* Sidebar - fixed on mobile, sticky on desktop */}
      <Sidebar />
      
      {/* Cards - below sidebar on mobile, offset on desktop */}
      <div className="xl:ml-[565px]">
        <CardGrid artifacts={artifacts} />
      </div>
    </main>
  )
}
