import { currency } from '../../data/site'
import type { MenuItem } from '../../data/menu'
import DiamondMark from './DiamondMark'

interface PriceProps {
  value: number
}

function Price({ value }: PriceProps) {
  return (
    <span className="shrink-0 whitespace-nowrap font-display text-lg font-semibold text-teal-700">
      <span className="mr-0.5 text-xs font-bold uppercase tracking-wide text-teal-700">
        {currency}
      </span>
      {value}
    </span>
  )
}

interface TagsProps {
  tags?: string[]
}

function Tags({ tags }: TagsProps) {
  if (!tags?.length) return null
  return (
    <div className="mt-2 flex flex-wrap gap-1.5">
      {tags.map((t) => (
        <span
          key={t}
          className="rounded-full bg-gold-400 px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-wide text-teal-900"
        >
          {t}
        </span>
      ))}
    </div>
  )
}

/* List-row presentation used on the Menu page (dotted leader + price). */
interface DishProps {
  item: MenuItem
}

export function DishRow({ item }: DishProps) {
  return (
    <li className="group py-3">
      <div className="flex items-baseline gap-2">
        <h4 className="flex shrink-0 items-center gap-2 font-sans text-base font-bold text-ink sm:text-lg">
          {item.featured && <DiamondMark className="h-3.5 w-3.5 text-gold-500" />}
          {item.name}
        </h4>
        <span className="mx-1 -translate-y-0.5 grow border-b border-dotted border-teal-900/20 transition-colors group-hover:border-teal-600/40" />
        <Price value={item.price} />
      </div>
      {item.desc && (
        <p className="mt-1 max-w-prose text-sm leading-relaxed text-ink-muted">{item.desc}</p>
      )}
      <Tags tags={item.tags} />
    </li>
  )
}

/* Card presentation used for "featured" dishes on the Home page. */
export function DishCard({ item }: DishProps) {
  return (
    <article className="card-cream group relative flex flex-col overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gold-500/10 transition-transform duration-500 group-hover:scale-150"
      />
      <div className="relative flex items-start justify-between gap-4">
        <h3 className="font-display text-xl font-semibold leading-tight text-teal-900">
          {item.name}
        </h3>
        <Price value={item.price} />
      </div>
      {item.desc && (
        <p className="relative mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{item.desc}</p>
      )}
      <div className="relative mt-4 flex items-center justify-between">
        <Tags tags={item.tags || (item.featured ? ['Most loved'] : [])} />
        <DiamondMark className="h-4 w-4 text-teal-600/30 transition-colors group-hover:text-gold-500" />
      </div>
    </article>
  )
}
