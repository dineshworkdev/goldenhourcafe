import type React from 'react'

interface ArchFrameProps {
  src?: string
  alt?: string
  w?: number | string
  h?: number | string
  className?: string
  imgClassName?: string
  outline?: boolean
  eager?: boolean
  children?: React.ReactNode
}

/* Arch-topped image frame — the café signboard silhouette.
   Pass an image (src/alt) OR arbitrary children (e.g. a <video>). */
export default function ArchFrame({
  src,
  alt = '',
  w,
  h,
  className = '',
  imgClassName = '',
  outline = true,
  eager = false,
  children,
}: ArchFrameProps) {
  return (
    <div className={`relative ${className}`}>
      {/* offset decorative outline, like the double line on the sign */}
      {outline && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -inset-2.5 arch-top border border-teal-600/30"
        />
      )}
      <div className="relative arch-top overflow-hidden bg-teal-900/5 shadow-lift ring-1 ring-teal-900/10">
        {src ? (
          <img
            src={src}
            alt={alt}
            width={w}
            height={h}
            loading={eager ? 'eager' : 'lazy'}
            decoding="async"
            {...({ fetchpriority: eager ? 'high' : 'auto' } as Record<string, string>)}
            className={`h-full w-full object-cover ${imgClassName}`}
          />
        ) : (
          children
        )}
        {/* gentle warm vignette */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-teal-950/25 via-transparent to-transparent"
        />
      </div>
    </div>
  )
}
