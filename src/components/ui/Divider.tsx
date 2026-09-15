import DiamondMark from './DiamondMark'

interface DividerProps {
  className?: string
  tone?: 'teal' | 'light' | 'gold'
}

/* Centered hairline divider with the brand diamond in the middle. */
export default function Divider({ className = '', tone = 'teal' }: DividerProps) {
  const line =
    tone === 'light'
      ? 'via-cream-50/30'
      : tone === 'gold'
        ? 'via-gold-500/40'
        : 'via-teal-600/25'
  const mark = tone === 'light' ? 'text-cream-50/70' : tone === 'gold' ? 'text-gold-500' : 'text-teal-600/80'

  return (
    <div className={`flex items-center justify-center gap-4 ${className}`} aria-hidden="true">
      <span className={`h-px w-16 bg-gradient-to-r from-transparent ${line} sm:w-24`} />
      <DiamondMark className={`h-4 w-4 shrink-0 ${mark}`} />
      <span className={`h-px w-16 bg-gradient-to-l from-transparent ${line} sm:w-24`} />
    </div>
  )
}
