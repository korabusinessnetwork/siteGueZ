// Placeholder de imagem/vídeo (troque por <img>/<video>/embed real depois).
// Reproduz o "slot" pontilhado dos mockups do handoff.
export default function ImagePlaceholder({
  label,
  className = '',
  circle = false,
  rounded = 'rounded-md',
  bordered = true,
}) {
  const shape = circle ? 'rounded-full' : rounded
  const border = bordered ? 'border border-dashed border-linha' : ''
  return (
    <div
      className={`flex items-center justify-center bg-creme-escuro text-marrom-label text-center ${border} ${shape} ${className}`}
      role="img"
      aria-label={label}
    >
      <span className="px-2 text-[11px] leading-tight">{label}</span>
    </div>
  )
}
