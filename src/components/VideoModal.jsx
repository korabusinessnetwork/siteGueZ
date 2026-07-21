import { useEffect, useRef } from 'react'

// Lightbox de vídeo. O iframe só é montado enquanto o modal está aberto
// (lazy) — nada de carregar players/trackers antes do clique do visitante.
export default function VideoModal({ embedUrl, titulo, provider, onClose }) {
  const fecharRef = useRef(null)
  const retrato = provider === 'instagram' // reels são verticais (9:16)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const overflowAnterior = document.body.style.overflow
    document.body.style.overflow = 'hidden' // trava o scroll do fundo
    fecharRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = overflowAnterior
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-marrom/85 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Vídeo: ${titulo}`}
    >
      <div
        className={`relative w-full ${retrato ? 'max-w-[400px]' : 'max-w-3xl'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={fecharRef}
          type="button"
          onClick={onClose}
          aria-label="Fechar vídeo"
          className="absolute -top-11 right-0 grid place-items-center w-9 h-9 rounded-full bg-creme text-marrom hover:bg-papel"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <div
          className={`relative w-full overflow-hidden rounded-md bg-black shadow-soft ${
            retrato ? 'h-[80vh]' : 'aspect-video'
          }`}
        >
          <iframe
            src={embedUrl}
            title={titulo}
            className="absolute inset-0 h-full w-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            allowFullScreen
            loading="lazy"
          />
        </div>

        <div className="mt-3 text-center text-[13px] text-creme-sobre-escuro">{titulo}</div>
      </div>
    </div>
  )
}
