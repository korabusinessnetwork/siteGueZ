import { useState } from 'react'
import { FaPlay } from 'react-icons/fa6'
import Eyebrow from '../components/Eyebrow.jsx'
import ImagePlaceholder from '../components/ImagePlaceholder.jsx'
import VideoModal from '../components/VideoModal.jsx'
import { FILTROS, PORTFOLIO } from '../constants/portfolio.js'
import { parseVideo } from '../lib/videoEmbed.js'

function PlayGlyph() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="w-9 h-9 rounded-full bg-marrom/55 grid place-items-center">
        <FaPlay className="text-papel ml-0.5" size={12} aria-hidden="true" />
      </div>
    </div>
  )
}

export default function Portfolio() {
  const [filtro, setFiltro] = useState('todos')
  const [videoAtivo, setVideoAtivo] = useState(null) // { embedUrl, titulo } | null
  const visiveis = filtro === 'todos' ? PORTFOLIO : PORTFOLIO.filter((i) => i.cat === filtro)

  return (
    <div className="mx-auto max-w-5xl px-4 md:px-8 py-10 md:py-12 lg:py-14">
      <Eyebrow>Portfólio</Eyebrow>
      <h1 className="font-display text-[26px] md:text-[32px] lg:text-4xl leading-tight mt-1.5 mb-2">
        Histórias que já contamos
      </h1>
      <p className="text-sm md:text-base text-marrom-2 max-w-2xl">
        Cases de real time, social media, foto e vídeo — sempre com a marca no centro.
      </p>

      {/* FILTROS */}
      <div className="flex gap-2 overflow-x-auto pb-1 mt-6">
        {FILTROS.map((f) => (
          <button
            key={f.id}
            onClick={() => setFiltro(f.id)}
            className={`whitespace-nowrap rounded-pill px-4 py-2 text-[12.5px] transition-colors ${
              filtro === f.id
                ? 'bg-laranja-cta text-papel font-semibold'
                : 'bg-papel text-marrom-2 border border-linha font-medium hover:border-marrom-label'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5 md:gap-4 lg:gap-5 mt-5">
        {visiveis.map((item) => {
          const embed = parseVideo(item.videoUrl)
          const midia = (
            <div className="relative">
              <ImagePlaceholder
                label={item.placeholder}
                bordered={false}
                rounded="rounded-none"
                className="h-[120px] md:h-[150px] lg:h-[170px] w-full"
              />
              {embed && <PlayGlyph />}
              {item.isRealtime && (
                <span className="absolute top-2 left-2 bg-papel rounded-pill px-2 py-0.5 text-[9px] font-bold text-laranja-cta">
                  REAL TIME
                </span>
              )}
            </div>
          )
          return (
            <div key={item.id} className="bg-papel border border-linha rounded-md overflow-hidden shadow-soft">
              {embed ? (
                <button
                  type="button"
                  onClick={() => setVideoAtivo({ kind: embed.kind, src: embed.src, titulo: item.titulo })}
                  aria-label={`Assistir: ${item.titulo}`}
                  className="block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-laranja-cta"
                >
                  {midia}
                </button>
              ) : (
                midia
              )}
              <div className="px-3 py-2.5">
                <div className="text-[12.5px] font-semibold leading-tight">{item.titulo}</div>
                <div className="text-[11px] text-marrom-label mt-0.5">{item.tag}</div>
              </div>
            </div>
          )
        })}
      </div>

      {videoAtivo && (
        <VideoModal
          kind={videoAtivo.kind}
          src={videoAtivo.src}
          titulo={videoAtivo.titulo}
          onClose={() => setVideoAtivo(null)}
        />
      )}
    </div>
  )
}
