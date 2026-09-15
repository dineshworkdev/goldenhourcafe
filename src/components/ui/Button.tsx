import Link from 'next/link'

const VARIANTS = {
  primary: 'btn-primary',
  gold: 'btn-gold',
  outline: 'btn-outline',
  ghostLight: 'btn-ghost-light',
}

interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  variant?: keyof typeof VARIANTS
  to?: string
  href?: string
  className?: string
  children?: React.ReactNode
}

/* Renders the right element for the context:
   - `to`   → next/link <Link>
   - `href` → external <a>
   - else   → <button>
*/
export default function Button({
  variant = 'primary',
  to,
  href,
  className = '',
  children,
  ...rest
}: ButtonProps) {
  const cls = `${VARIANTS[variant] || VARIANTS.primary} ${className}`

  if (to) {
    return (
      <Link href={to} className={cls} {...rest}>
        {children}
      </Link>
    )
  }
  if (href) {
    const external = /^https?:|^mailto:|^tel:/.test(href)
    return (
      <a
        href={href}
        className={cls}
        {...(external ? { target: href.startsWith('http') ? '_blank' : undefined, rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {children}
      </a>
    )
  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  )
}
