/* A four-point concave star — abstracted from the diamond at the
   centre of the café logo. Used as a decorative brand glyph. */
interface DiamondMarkProps {
  className?: string
  withDot?: boolean
}

export default function DiamondMark({ className = 'h-5 w-5 text-teal-600', withDot = false }: DiamondMarkProps) {
  return (
    <svg
      viewBox="0 0 100 110"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      {withDot && <circle cx="50" cy="9" r="7" />}
      <path
        d="M50 18 Q57 43 82 50 Q57 57 50 92 Q43 57 18 50 Q43 43 50 18 Z"
        transform={withDot ? '' : 'translate(0 -9)'}
      />
    </svg>
  )
}
