import { BracketText } from './BracketText'

export function Header() {
  return (
    <div className="flex flex-col gap-header-gap">
      {/* Subtitle */}
      <p className="text-body text-muted">
        .* MAKE SURE TO CHECKOUT THE CREATORS *.
      </p>
      
      {/* Headline */}
      <h1 className="text-headline">
        <BracketText textClassName="text-primary">
          A LIBRARY OF BEAUTIFULLY DIRECTED BRAND COMPONENTS BROUGHT TO LIFE USING AI
        </BracketText>
      </h1>
    </div>
  )
}
