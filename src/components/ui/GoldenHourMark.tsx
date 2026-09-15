/* A simple Golden Hour icon — rising sun over gentle waves.
   Inspired by the café's actual logo mark (sun + wave concept).
   Used exclusively in the Navbar brand slot. Sized via className (default h-6 w-6). */

interface GoldenHourMarkProps {
  className?: string
}

export default function GoldenHourMark({ className = 'h-6 w-6' }: GoldenHourMarkProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {/* Sun disc — upper half visible above the waves */}
      <circle cx="24" cy="23" r="8" fill="currentColor" />

      {/* Sun rays — 7 short strokes fanning upward */}
      <line x1="24" y1="11" x2="24" y2="8"  stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="31.9" y1="13.1" x2="34.0" y2="11.0" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="36.9" y1="21"   x2="40.0" y2="20"   stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="16.1" y1="13.1" x2="14.0" y2="11.0" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="11.1" y1="21"   x2="8.0"  y2="20"   stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="34.5" y1="16.5" x2="36.5" y2="14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="13.5" y1="16.5" x2="11.5" y2="14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />

      {/* Wave 1 — sits across the lower part of the sun */}
      <path
        d="M6 31 Q12 27 18 31 Q24 35 30 31 Q36 27 42 31"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
        opacity="0.9"
      />

      {/* Wave 2 — a second smaller wave below */}
      <path
        d="M8 37 Q14 33 20 37 Q26 41 32 37 Q38 33 44 37"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
    </svg>
  )
}
