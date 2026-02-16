export function Footer() {
  return (
    <div className="flex flex-col gap-footer-gap">
      {/* Footer text - removed inline brackets for consistency */}
      <p className="text-body text-muted">
        IF YOU MADE OR FOUND A COOL ARTEFACT
      </p>
      
      {/* CTA - unified hover: glow effect matching cards */}
      <a 
        href="https://x.com/akshitvrma" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-body transition-all inline-block group/cta hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
      >
        <span className="text-muted group-hover/cta:text-white transition-colors">[</span>
        <span className="text-primary group-hover/cta:text-white transition-colors">DM ME ON X</span>
        <span className="text-muted group-hover/cta:text-white transition-colors">]</span>
      </a>
    </div>
  )
}
