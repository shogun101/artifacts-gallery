import { TextScramble } from './motion-primitives/text-scramble'

export function Header() {
  return (
    <div className="flex flex-col gap-header-gap">
      {/* Subtitle */}
      <p className="text-body text-muted">
        .* MAKE SURE TO CHECKOUT THE CREATORS *.
      </p>
      
      {/* Headline with scramble effect */}
      <h1 className="text-headline">
        <span className="text-muted">[</span>
        <TextScramble 
          as="span" 
          className="text-primary"
          duration={0.8}
          speed={0.04}
        >
          A LIBRARY OF BEAUTIFULLY DIRECTED BRAND COMPONENTS BROUGHT TO LIFE USING AI
        </TextScramble>
        <span className="text-muted">]</span>
      </h1>
    </div>
  )
}
