import { Play } from 'lucide-react'
import type { GalleryItem } from '../../data/gallery'

interface MediaCardProps {
  item: GalleryItem
  onOpen?: React.MouseEventHandler<HTMLButtonElement>
  className?: string
}

/* A single gallery tile (image or video poster). Click → onOpen().
   Uses the media's real aspect ratio so masonry columns vary nicely. */
export default function MediaCard({ item, onOpen, className = '' }: MediaCardProps) {
  const isVideo = item.type === 'video'
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Open ${item.caption || item.alt}`}
      className={`group relative block w-full overflow-hidden rounded-2xl bg-cream-200 shadow-soft ring-1 ring-teal-900/10 transition-shadow duration-300 hover:shadow-lift ${className}`}
      style={{ aspectRatio: `${item.w} / ${item.h}` }}
    >
      <img
        src={isVideo ? item.poster : item.src}
        alt={item.alt}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.06]"
      />
      {/* gradient + caption */}
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-teal-950/75 via-teal-950/0 to-teal-950/0 opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 p-4 text-left opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <span className="text-sm font-semibold text-cream-50 drop-shadow">{item.caption}</span>
      </span>

      {isVideo && (
        <span className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-cream-50/90 text-teal-800 shadow-lift transition-transform duration-300 group-hover:scale-110">
          <Play className="h-6 w-6 translate-x-0.5 fill-teal-800" />
        </span>
      )}
    </button>
  )
}
