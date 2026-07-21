import { useEffect, useRef } from 'react'
import { IoClose } from 'react-icons/io5'

// Lightbox de vídeo. Toca DENTRO do site:
//   kind 'file'  → <video> nativo (autoplay ao abrir, controles, inline)
//   kind youtube/vimeo → player embutido (iframe), 16:9
// O player só é montado enquanto o modal está aberto (lazy).
export default function VideoModal({ kind, src, titulo, onClose }) {
  const fecharRef = useRef(null)
  const isFile = kind === 'file'

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
        className={`relative w-full ${isFile ? 'max-w-2xl' : 'max-w-3xl'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={fecharRef}
          type="button"
          onClick={onClose}
          aria-label="Fechar vídeo"
          className="absolute -top-11 right-0 grid place-items-center w-9 h-9 rounded-full bg-creme text-marrom hover:bg-papel"
        >
          <IoClose size={20} aria-hidden="true" />
        </button>

        {isFile ? (
          <video
            src={src}
            controls
            autoPlay
            playsInline
            className="w-full max-h-[82vh] rounded-md bg-black shadow-soft"
          />
        ) : (
          <div className="relative w-full aspect-video overflow-hidden rounded-md bg-black shadow-soft">
            <iframe
              src={src}
              title={titulo}
              className="absolute inset-0 h-full w-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
              allowFullScreen
              loading="lazy"
            />
          </div>
        )}

        <div className="mt-3 text-center text-[13px] text-creme-sobre-escuro">{titulo}</div>
      </div>
    </div>
  )
}
