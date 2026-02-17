import { TextShimmerWave } from './motion-primitives/text-shimmer-wave'

export function Footer() {
  return (
    <div className="flex flex-col gap-footer-gap">
      {/* Footer text */}
      <p className="text-body text-muted">
        IF YOU MADE OR FOUND A COOL ARTEFACT
      </p>
      
      {/* CTA - shimmer wave effect */}
      <a 
        href="https://x.com/akshitvrma" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-body transition-all inline-block hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
      >
        <span className="text-muted">[</span>
        <TextShimmerWave 
          as="span" 
          className="text-body [--base-color:#888888] [--base-gradient-color:#ffffff]"
          duration={1}
        >
          DM ME ON X
        </TextShimmerWave>
        <span className="text-muted">]</span>
      </a>
    </div>
  )
}
