import { useCallback, useEffect, useRef, type Dispatch, type SetStateAction } from 'react'
import { AnimatePresence, motion, type Variants } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react'
import type { GalleryItem } from '../../data/gallery'

const slideVariants: Variants = {
  enter: (d: number) => ({ opacity: 0, x: d * 40 }),
  center: { opacity: 1, x: 0 },
  exit: (d: number) => ({ opacity: 0, x: d * -40 }),
}

interface LightboxProps {
  items: GalleryItem[]
  index: number | null
  onClose: () => void
  setIndex: Dispatch<SetStateAction<number | null>>
}

/* Accessible media lightbox (images + video).
   Controlled: parent owns `index` (number | null). */
export default function Lightbox({ items, index, onClose, setIndex }: LightboxProps) {
  const open = index !== null && index !== undefined
  const dialogRef = useRef<HTMLDivElement>(null)
  const touchX = useRef<number | null>(null)
  const dirRef = useRef<number>(1)

  const go = useCallback(
    (delta: number) => {
      dirRef.current = delta
      setIndex((i) => ((i ?? 0) + delta + items.length) % items.length)
    },
    [items.length, setIndex],
  )

  // Keyboard: Esc / arrows + a light focus trap
  useEffect(() => {
    if (!open) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowRight') go(1)
      else if (e.key === 'ArrowLeft') go(-1)
      else if (e.key === 'Tab') {
        const f = dialogRef.current?.querySelectorAll('button')
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
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [open, go, onClose])

  // Move focus into the dialog on open; restore it to the trigger on close.
  useEffect(() => {
    if (!open) return
    const prevFocus = document.activeElement
    const t = setTimeout(() => {
      ;(
        dialogRef.current?.querySelector('button[aria-label="Close viewer"]') as HTMLElement | null
      )?.focus()
    }, 30)
    return () => {
      clearTimeout(t)
      if (prevFocus && typeof (prevFocus as HTMLElement).focus === 'function')
        (prevFocus as HTMLElement).focus()
    }
  }, [open])

  const item = open && index != null ? items[index] : null

  const onTouchStart = (e: React.TouchEvent) => (touchX.current = e.touches[0].clientX)
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return
    const dx = e.changedTouches[0].clientX - touchX.current
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1)
    touchX.current = null
  }

  return (
    <AnimatePresence>
      {open && item && (
        <motion.div
          key="lightbox"
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={item.caption || 'Media viewer'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[200] flex flex-col bg-teal-950/92 backdrop-blur-md"
          onClick={(e: React.MouseEvent) => e.target === e.currentTarget && onClose()}
        >
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-4 text-cream-100 sm:px-8">
          <span className="text-sm font-bold tracking-wide tabular-nums">
            {String((index ?? 0) + 1).padStart(2, '0')}
            <span className="text-cream-100/40"> / {String(items.length).padStart(2, '0')}</span>
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close viewer"
            className="grid h-11 w-11 place-items-center rounded-full bg-cream-50/10 text-cream-50 transition-colors hover:bg-cream-50/20"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Stage */}
        <div
          className="relative flex flex-1 items-center justify-center overflow-hidden px-3 pb-3 sm:px-16"
          onClick={(e: React.MouseEvent) => e.target === e.currentTarget && onClose()}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous"
            className="absolute left-2 z-10 grid h-12 w-12 place-items-center rounded-full bg-cream-50/10 text-cream-50 transition-colors hover:bg-gold-500 hover:text-teal-900 sm:left-4"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>

          <AnimatePresence mode="wait" custom={dirRef.current}>
            <motion.div
              key={item.id}
              custom={dirRef.current}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex max-h-full max-w-5xl flex-col items-center"
            >
              {item.type === 'video' ? (
                <video
                  src={item.src}
                  poster={item.poster}
                  controls
                  autoPlay
                  playsInline
                  loop
                  className="max-h-[78vh] w-auto rounded-xl shadow-deep"
                />
              ) : (
                <img
                  src={item.src}
                  alt={item.alt}
                  width={item.w}
                  height={item.h}
                  className="max-h-[78vh] w-auto rounded-xl object-contain shadow-deep"
                />
              )}
              {item.caption && (
                <p className="mt-4 max-w-xl text-center text-sm text-cream-100/80">
                  {item.caption}
                </p>
              )}
            </motion.div>
          </AnimatePresence>

          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next"
            className="absolute right-2 z-10 grid h-12 w-12 place-items-center rounded-full bg-cream-50/10 text-cream-50 transition-colors hover:bg-gold-500 hover:text-teal-900 sm:right-4"
          >
            <ChevronRight className="h-7 w-7" />
          </button>
        </div>

        {/* Thumbnail strip */}
        <div className="hide-scrollbar flex shrink-0 items-center justify-start gap-2 overflow-x-auto px-5 py-4 sm:justify-center sm:px-8">
          {items.map((it, i) => (
            <button
              key={it.id}
              type="button"
              onClick={() => {
                dirRef.current = i > (index ?? 0) ? 1 : -1
                setIndex(i)
              }}
              aria-label={`View ${it.caption || it.alt}`}
              aria-current={i === index}
              className={`relative h-14 w-14 shrink-0 overflow-hidden rounded-lg ring-2 transition-all ${
                i === index ? 'ring-gold-500' : 'ring-transparent opacity-55 hover:opacity-100'
              }`}
            >
              <img
                src={it.type === 'video' ? it.poster : it.src}
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
              />
              {it.type === 'video' && (
                <span className="absolute inset-0 grid place-items-center bg-teal-950/30">
                  <Play className="h-4 w-4 fill-cream-50 text-cream-50" />
                </span>
              )}
            </button>
          ))}
        </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
