import { useState } from 'react'
import Eyebrow from '../components/Eyebrow.jsx'
import ImagePlaceholder from '../components/ImagePlaceholder.jsx'
import { FILTROS, PORTFOLIO } from '../constants/portfolio.js'

function PlayGlyph() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="w-9 h-9 rounded-full bg-marrom/55 grid place-items-center">
        <div className="w-0 h-0 border-y-[6px] border-y-transparent border-l-[9px] border-l-papel ml-0.5" />
      </div>
    </div>
  )
}

export default function Portfolio() {
  const [filtro, setFiltro] = useState('todos')
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
        {visiveis.map((item) => (
          <div key={item.id} className="bg-papel border border-linha rounded-md overflow-hidden shadow-soft">
            <div className="relative">
              <ImagePlaceholder
                label={item.placeholder}
                bordered={false}
                rounded="rounded-none"
                className="h-[120px] md:h-[150px] lg:h-[170px] w-full"
              />
              {item.isVideo && <PlayGlyph />}
              {item.isRealtime && (
                <span className="absolute top-2 left-2 bg-papel rounded-pill px-2 py-0.5 text-[9px] font-bold text-laranja-cta">
                  REAL TIME
                </span>
              )}
            </div>
            <div className="px-3 py-2.5">
              <div className="text-[12.5px] font-semibold leading-tight">{item.titulo}</div>
              <div className="text-[11px] text-marrom-label mt-0.5">{item.tag}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
