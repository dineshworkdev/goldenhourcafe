import { motion, type Variants } from 'framer-motion'
import { fadeUp, viewportOnce } from '../../lib/motion'

interface RevealProps {
  as?: keyof typeof motion
  variants?: Variants
  delay?: number
  className?: string
  children?: React.ReactNode
  [key: string]: unknown
}

/* Scroll-into-view reveal. Wrap any block; it fades + rises once. */
export default function Reveal({
  as = 'div',
  variants = fadeUp,
  delay = 0,
  className = '',
  children,
  ...rest
}: RevealProps) {
  const MotionTag = (motion[as] || motion.div) as React.ElementType
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      transition={delay ? { delay } : undefined}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
