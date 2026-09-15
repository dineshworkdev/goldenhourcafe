import DiamondMark from './DiamondMark'

interface MarqueeProps {
  items?: React.ReactNode[]
  speed?: 'slow' | 'normal'
  tone?: 'dark' | 'light'
  className?: string
}

/* Infinite horizontal marquee. Duplicates its items so the loop is
   seamless, pauses on hover, and freezes for reduced-motion users. */
export default function Marquee({
  items = [],
  speed = 'normal',
  tone = 'dark',
  className = '',
}: MarqueeProps) {
  const anim = speed === 'slow' ? 'animate-marquee-slow' : 'animate-marquee'
  const text = tone === 'light' ? 'text-cream-50' : 'text-teal-900'
  const mark = tone === 'light' ? 'text-gold-400' : 'text-gold-500'

  const Row = ({ ariaHidden }: { ariaHidden: boolean }) => (
    <div
      className={`flex shrink-0 items-center gap-8 pr-8 ${anim}`}
      aria-hidden={ariaHidden}
    >
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-8">
          <span
            className={`font-display text-2xl font-medium italic sm:text-3xl ${text}`}
          >
            {item}
          </span>
          <DiamondMark className={`h-4 w-4 shrink-0 ${mark}`} />
        </span>
      ))}
    </div>
  )

  return (
    <div className={`marquee-mask group flex overflow-hidden ${className}`}>
      <div className="flex group-hover:[&>*]:paused">
        <Row ariaHidden={false} />
        <Row ariaHidden={true} />
      </div>
    </div>
  )
}
