import { ArtifactCard } from './ArtifactCard'

interface Artifact {
  _id: string
  title: string
  imageUrl: string
  prompt: string
  sourceType: 'x' | 'web'
  sourceUrl: string
}

interface CardGridProps {
  artifacts: Artifact[]
}

export function CardGrid({ artifacts }: CardGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 overflow-y-auto">
      {artifacts.map((artifact) => (
        <ArtifactCard
          key={artifact._id}
          title={artifact.title}
          imageUrl={artifact.imageUrl}
          prompt={artifact.prompt}
          sourceType={artifact.sourceType}
          sourceUrl={artifact.sourceUrl}
        />
      ))}
    </div>
  )
}
