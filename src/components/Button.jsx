import { Link } from 'react-router-dom'

const VARIANTS = {
  solid: 'bg-laranja-cta text-papel hover:bg-laranja-cta-hover',
  outline: 'border-[1.5px] border-marrom text-marrom hover:bg-marrom/5',
  outlineLight: 'border-[1.5px] border-creme text-creme hover:bg-creme/10',
  gold: 'bg-dourado text-marrom hover:bg-dourado-escuro',
}

const SIZES = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-7 py-4 text-[15px]',
}

// Botão polimórfico: vira <Link> (to), <a> (href) ou <button>.
export default function Button({
  to,
  href,
  variant = 'solid',
  size = 'md',
  block = false,
  className = '',
  children,
  ...rest
}) {
  const display = block ? 'block w-full text-center' : 'inline-block text-center'
  const cls = `${display} rounded-pill font-semibold transition-colors no-underline ${SIZES[size]} ${VARIANTS[variant]} ${className}`
  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    )
  }
  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {children}
      </Link>
    )
  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  )
}
