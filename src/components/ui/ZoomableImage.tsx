import { forwardRef, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, ZoomIn, ZoomOut, Maximize, Search } from 'lucide-react'

const MIN = 1
const MAX = 4
const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v))

interface ZoomableImageProps {
  src: string
  alt: string
  w?: number
  h?: number
  label?: string
  className?: string
}

/* A thumbnail that opens a full-screen, zoom + pannable viewer.
   Supports wheel zoom, pinch zoom, drag-to-pan and double-tap. */
export default function ZoomableImage({ src, alt, w, h, label, className = '' }: ZoomableImageProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`group relative block w-full overflow-hidden rounded-2xl bg-cream-200 shadow-soft ring-1 ring-teal-900/10 transition-shadow hover:shadow-lift ${className}`}
        aria-label={`Zoom into ${label || alt}`}
      >
        <img
          src={src}
          alt={alt}
          width={w}
          height={h}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute inset-0 bg-teal-950/0 transition-colors duration-300 group-hover:bg-teal-950/10" />
        <span className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-teal-900/80 px-3 py-1.5 text-xs font-bold text-cream-50 backdrop-blur-sm">
          <Search className="h-3.5 w-3.5" /> Tap to zoom
        </span>
        {label && (
          <span className="absolute bottom-3 left-3 rounded-full bg-cream-50/90 px-3 py-1.5 text-xs font-bold text-teal-800">
            {label}
          </span>
        )}
      </button>

      <AnimatePresence>
        {open && <ZoomViewer src={src} alt={alt} onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  )
}

interface ZoomViewerProps {
  src: string
  alt: string
  onClose: () => void
}

function ZoomViewer({ src, alt, onClose }: ZoomViewerProps) {
  const [scale, setScale] = useState<number>(1)
  const [pos, setPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
  const drag = useRef<{ x: number; y: number } | null>(null)
  const pinch = useRef<{ dist: number; scale: number } | null>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)

  const reset = () => {
    setScale(1)
    setPos({ x: 0, y: 0 })
  }
  const zoomBy = (f: number) =>
    setScale((s) => {
      const next = clamp(+(s * f).toFixed(2), MIN, MAX)
      if (next === 1) setPos({ x: 0, y: 0 })
      return next
    })

  useEffect(() => {
    const prev = document.body.style.overflow
    const prevFocus = document.activeElement
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === '+' || e.key === '=') zoomBy(1.3)
      else if (e.key === '-') zoomBy(1 / 1.3)
      else if (e.key === '0') reset()
      else if (e.key === 'Tab') {
        const f = dialogRef.current?.querySelectorAll('button:not([disabled])')
        if (!f || f.length === 0) return
        const first = f[0]
        const last = f[f.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          ;(last as HTMLElement).focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          ;(first as HTMLElement).focus()
        }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
      if (prevFocus && typeof (prevFocus as HTMLElement).focus === 'function') (prevFocus as HTMLElement).focus()
    }
  }, [onClose])

  const onWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault()
    zoomBy(e.deltaY < 0 ? 1.12 : 1 / 1.12)
  }

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (scale <= 1) return
    drag.current = { x: e.clientX - pos.x, y: e.clientY - pos.y }
    e.currentTarget.setPointerCapture?.(e.pointerId)
  }
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!drag.current) return
    setPos({ x: e.clientX - drag.current.x, y: e.clientY - drag.current.y })
  }
  const endDrag = () => (drag.current = null)

  // basic pinch
  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX
      const dy = e.touches[0].clientY - e.touches[1].clientY
      pinch.current = { dist: Math.hypot(dx, dy), scale }
    }
  }
  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 2 && pinch.current) {
      e.preventDefault()
      const dx = e.touches[0].clientX - e.touches[1].clientX
      const dy = e.touches[0].clientY - e.touches[1].clientY
      const dist = Math.hypot(dx, dy)
      setScale(clamp(+(pinch.current.scale * (dist / pinch.current.dist)).toFixed(2), MIN, MAX))
    }
  }
  const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length < 2) pinch.current = null
    if (scale <= 1) setPos({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`${alt} — zoom view`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[200] flex flex-col bg-teal-950/94 backdrop-blur-md"
    >
      <div className="flex items-center justify-between px-5 py-4 sm:px-8">
        <span className="text-sm font-bold tracking-wide text-cream-100/80 tabular-nums">
          {Math.round(scale * 100)}%
        </span>
        <div className="flex items-center gap-2">
          <ZoomBtn label="Zoom out" onClick={() => zoomBy(1 / 1.3)} disabled={scale <= MIN}>
            <ZoomOut className="h-5 w-5" />
          </ZoomBtn>
          <ZoomBtn label="Reset zoom" onClick={reset} disabled={scale === 1}>
            <Maximize className="h-5 w-5" />
          </ZoomBtn>
          <ZoomBtn label="Zoom in" onClick={() => zoomBy(1.3)} disabled={scale >= MAX}>
            <ZoomIn className="h-5 w-5" />
          </ZoomBtn>
          <ZoomBtn label="Close" onClick={onClose} ref={closeRef}>
            <X className="h-6 w-6" />
          </ZoomBtn>
        </div>
      </div>

      <div
        className="relative flex flex-1 touch-none items-center justify-center overflow-hidden p-3"
        onWheel={onWheel}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onDoubleClick={() => (scale > 1 ? reset() : setScale(2.5))}
        onClick={(e) => e.target === e.currentTarget && scale === 1 && onClose()}
      >
        <img
          src={src}
          alt={alt}
          draggable="false"
          className="max-h-full max-w-full select-none rounded-lg shadow-deep"
          style={{
            transform: `translate(${pos.x}px, ${pos.y}px) scale(${scale})`,
            cursor: scale > 1 ? 'grab' : 'zoom-in',
            transition: drag.current ? 'none' : 'transform 0.2s ease-out',
          }}
        />
      </div>

      <p className="pb-5 text-center text-xs text-cream-100/60">
        Scroll, pinch or double-tap to zoom · drag to pan · Esc to close
      </p>
    </motion.div>
  )
}

interface ZoomBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  label: string
}

const ZoomBtn = forwardRef<HTMLButtonElement, ZoomBtnProps>(function ZoomBtn({ children, label, ...rest }, ref) {
  return (
    <button
      ref={ref}
      type="button"
      aria-label={label}
      className="grid h-11 w-11 place-items-center rounded-full bg-cream-50/10 text-cream-50 transition-colors hover:bg-gold-500 hover:text-teal-900 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-cream-50/10 disabled:hover:text-cream-50"
      {...rest}
    >
      {children}
    </button>
  )
})
