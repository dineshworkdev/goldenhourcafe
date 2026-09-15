import DiamondMark from './DiamondMark'

/* Branded Suspense fallback shown while a route chunk loads. */
export default function PageLoader() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center" role="status" aria-live="polite">
      <div className="flex flex-col items-center gap-4">
        <DiamondMark className="h-9 w-9 animate-float text-teal-600" withDot />
        <span className="text-sm font-semibold uppercase tracking-widest2 text-teal-600/70">
          Golden Hour
        </span>
        <span className="sr-only">Loading…</span>
      </div>
    </div>
  )
}
