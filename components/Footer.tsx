export function Footer() {
  return (
    <div className="flex flex-col gap-footer-gap">
      {/* Footer text */}
      <p className="text-body text-muted">
        IF YOU MADE <span className="text-muted">[</span>OR FOUND<span className="text-muted">]</span> A COOL ARTEFACT
      </p>
      
      {/* CTA */}
      <a 
        href="https://x.com/akshitvrma" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-body transition-colors inline-block group/cta"
      >
        <span className="text-muted group-hover/cta:text-white transition-colors">[</span>
        <span className="text-primary group-hover/cta:text-white transition-colors">DM ME ON X</span>
        <span className="text-muted group-hover/cta:text-white transition-colors">]</span>
      </a>
    </div>
  )
}
