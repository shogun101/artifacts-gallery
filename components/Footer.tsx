import { ShimmerText } from './ShimmerText'

export function Footer() {
  return (
    <div className="flex flex-col gap-footer-gap">
      {/* Footer text - removed inline brackets for consistency */}
      <p className="text-body text-muted">
        IF YOU MADE OR FOUND A COOL ARTEFACT
      </p>
      
      {/* CTA - shimmer text effect */}
      <a 
        href="https://x.com/akshitvrma" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-body transition-all inline-block hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
      >
        <span className="text-muted">[</span>
        <ShimmerText className="text-primary">DM ME ON X</ShimmerText>
        <span className="text-muted">]</span>
      </a>
    </div>
  )
}
