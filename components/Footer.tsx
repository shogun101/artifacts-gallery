import { BracketText } from './BracketText'

export function Footer() {
  return (
    <div className="flex flex-col gap-footer-gap">
      {/* Footer text */}
      <p className="text-body text-muted">
        IF YOU MADE <BracketText textClassName="text-muted">OR FOUND</BracketText> A COOL ARTEFACT
      </p>
      
      {/* CTA */}
      <a 
        href="https://x.com/akshitvrma" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-body hover:text-white transition-colors inline-block"
      >
        <BracketText textClassName="text-primary">
          DM ME ON X
        </BracketText>
      </a>
    </div>
  )
}
