interface BracketTextProps {
  children: React.ReactNode
  className?: string
  bracketClassName?: string
  textClassName?: string
}

export function BracketText({ 
  children, 
  className = '',
  bracketClassName = 'text-muted',
  textClassName = 'text-white'
}: BracketTextProps) {
  return (
    <span className={className}>
      <span className={bracketClassName}>[</span>
      <span className={textClassName}>{children}</span>
      <span className={bracketClassName}>]</span>
    </span>
  )
}
