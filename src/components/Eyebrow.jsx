// Rótulo de seção em caixa alta (padrão do design system).
export default function Eyebrow({ children, className = '' }) {
  return (
    <div className={`text-xs tracking-[0.1em] uppercase text-marrom-label ${className}`}>
      {children}
    </div>
  )
}
