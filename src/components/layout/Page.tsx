'use client'

import { motion } from 'framer-motion'
import { pageTransition } from '../../lib/motion'

interface PageProps {
  children?: React.ReactNode
  className?: string
  title?: string
  description?: string
}

/* Client wrapper used by each page (view): applies the page-enter
   transition. SEO (title/description) is handled by Next's Metadata API
   in each route segment's page.jsx, so the `title`/`description` props
   the views still pass are accepted for compatibility but intentionally
   unused here. */
export default function Page({ children, className = '' }: PageProps) {
  return (
    <motion.div
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      className={className}
    >
      {children}
    </motion.div>
  )
}
