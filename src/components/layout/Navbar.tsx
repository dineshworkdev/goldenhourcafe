'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu as MenuIcon, X, Phone, Instagram } from 'lucide-react'
import { nav, brand, contact } from '../../data/site'
import GoldenHourMark from '../ui/GoldenHourMark'

interface BrandProps {
  light?: boolean
  onClick?: () => void
}

function Brand({ light, onClick }: BrandProps) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className="group flex items-center gap-3"
      aria-label={`${brand.name} — home`}
    >
      <span
        className={`grid h-11 w-11 place-items-center rounded-full transition-colors duration-300 ${
          light ? 'bg-cream-50/10 ring-1 ring-cream-50/30' : 'bg-teal-600/10 ring-1 ring-teal-600/20'
        }`}
      >
        <GoldenHourMark
          className={`h-6 w-6 transition-transform duration-500 group-hover:scale-110 ${
            light ? 'text-cream-50' : 'text-teal-600'
          }`}
        />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-xl font-semibold tracking-tight transition-colors duration-300 ${
            light ? 'text-cream-50' : 'text-teal-900'
          }`}
        >
          {brand.shortName}
        </span>
        <span
          className={`mt-0.5 text-[0.6rem] font-bold uppercase tracking-widest2 transition-colors duration-300 ${
            light ? 'text-gold-400/90' : 'text-teal-600/70'
          }`}
        >
          A place to slow down, eat well, and stay awhile.
        </span>
      </span>
    </Link>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false)
  const [open, setOpen] = useState<boolean>(false)
  const pathname = usePathname()
  const closeBtnRef = useRef<HTMLButtonElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  const isActive = (to: string) =>
    to === '/' ? pathname === '/' : pathname === to || pathname.startsWith(`${to}/`)

  // Scroll state → switch between transparent (over hero) and solid pill
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on navigation
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Body scroll-lock + focus trap + Esc handling while the overlay is open
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    const prevFocus = document.activeElement
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        return
      }
      if (e.key === 'Tab') {
        const f = overlayRef.current?.querySelectorAll('a[href], button:not([disabled])')
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
    closeBtnRef.current?.focus()
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
      if (prevFocus && typeof (prevFocus as HTMLElement).focus === 'function') (prevFocus as HTMLElement).focus()
    }
  }, [open])

  const light = !scrolled && !open

  return (
    <header className="fixed inset-x-0 top-0 z-[100] px-3 sm:px-5">
      <nav
        aria-label="Primary"
        className={`mx-auto flex max-w-7xl items-center justify-between transition-all duration-500 ease-out-expo ${
          scrolled
            ? 'mt-3 rounded-full border border-cream-300/70 bg-cream-50/85 px-4 py-2.5 shadow-soft backdrop-blur-md sm:px-6'
            : 'mt-4 rounded-full border border-transparent px-2 py-2.5 sm:px-4'
        }`}
      >
        <Brand light={light} />

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const active = isActive(item.to)
            return (
              <li key={item.to}>
                <Link
                  href={item.to}
                  aria-current={active ? 'page' : undefined}
                  className={`group relative rounded-full px-4 py-2 text-sm font-bold transition-colors duration-200 ${
                    light ? 'text-cream-100/90 hover:text-cream-50' : 'text-ink-soft hover:text-teal-700'
                  } ${active ? (light ? '!text-cream-50' : '!text-teal-700') : ''}`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-gold-500 transition-all duration-300 ${
                      active ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'
                    }`}
                  />
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${contact.phoneHref}`}
            className={`flex items-center gap-2 text-sm font-bold transition-colors ${
              light ? 'text-cream-50 hover:text-gold-400' : 'text-teal-700 hover:text-teal-900'
            }`}
          >
            <Phone className="h-4 w-4" />
            <span className="hidden xl:inline">{contact.phoneDisplay}</span>
          </a>
          <Link href="/menu" className={`btn ${light ? 'btn-gold' : 'btn-primary'} !px-5 !py-2.5`}>
            View Menu
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className={`grid h-11 w-11 place-items-center rounded-full transition-colors lg:hidden ${
            light ? 'text-cream-50 hover:bg-cream-50/10' : 'text-teal-800 hover:bg-teal-600/10'
          }`}
        >
          <MenuIcon className="h-6 w-6" />
        </button>
      </nav>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={overlayRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grain fixed inset-0 z-[110] flex flex-col bg-teal-radial text-cream-50 lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
          >
            <div className="flex items-center justify-between px-5 pt-7">
              <Brand light onClick={() => setOpen(false)} />
              <button
                ref={closeBtnRef}
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid h-11 w-11 place-items-center rounded-full text-cream-50 hover:bg-cream-50/10"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <motion.ul
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.07, delayChildren: 0.12 } } }}
              className="flex flex-1 flex-col justify-center gap-2 px-7"
            >
              {nav.map((item, i) => {
                const active = isActive(item.to)
                return (
                  <motion.li
                    key={item.to}
                    variants={{ hidden: { opacity: 0, x: -24 }, show: { opacity: 1, x: 0 } }}
                  >
                    <Link
                      href={item.to}
                      aria-current={active ? 'page' : undefined}
                      className={`flex items-baseline gap-4 py-2 font-display text-4xl font-semibold transition-colors sm:text-5xl ${
                        active ? 'text-gold-400' : 'text-cream-50 hover:text-gold-300'
                      }`}
                    >
                      <span className="text-sm font-sans font-bold text-cream-100/40">0{i + 1}</span>
                      {item.label}
                    </Link>
                  </motion.li>
                )
              })}
            </motion.ul>

            <div className="space-y-4 px-7 pb-10">
              <div className="rule opacity-30" />
              <a
                href={`tel:${contact.phoneHref}`}
                className="flex items-center gap-3 text-lg font-bold text-cream-50"
              >
                <Phone className="h-5 w-5 text-gold-400" />
                {contact.phoneDisplay}
              </a>
              <a
                href={contact.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-base font-semibold text-cream-100/80"
              >
                <Instagram className="h-5 w-5 text-gold-400" />
                {contact.instagram.handle}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
