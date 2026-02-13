interface SourceIconProps {
  type: 'x' | 'web'
  className?: string
}

export function SourceIcon({ type, className = '' }: SourceIconProps) {
  if (type === 'x') {
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M10.7145 7.62371L17.4163 0H15.8286L10.0082 6.61788L5.36013 0H0L7.02748 10.0074L0 18H1.58779L7.73333 11.0132L12.6399 18H18L10.7141 7.62371H10.7145ZM8.53812 10.0956L7.8249 9.09906L2.16013 1.16971H4.59866L9.17146 7.56895L9.88467 8.56553L15.8294 16.8835H13.3909L8.53812 10.096V10.0956Z"
          fill="#888888"
        />
      </svg>
    )
  }

  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1Z"
        stroke="#888888"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 9H17"
        stroke="#888888"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 1C10.8784 3.07786 11.9591 5.9629 12 9C11.9591 12.0371 10.8784 14.9221 9 17C7.12159 14.9221 6.04086 12.0371 6 9C6.04086 5.9629 7.12159 3.07786 9 1Z"
        stroke="#888888"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
