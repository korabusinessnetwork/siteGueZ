import Button from '../components/Button.jsx'
import Eyebrow from '../components/Eyebrow.jsx'
import ImagePlaceholder from '../components/ImagePlaceholder.jsx'

const DUPLA = [
  { nome: 'Lucy Freitas', papel: 'Storymaker', label: 'foto Lucy' },
  { nome: 'Érica Schmidt', papel: 'Marketing & fotografia', label: 'foto Érica' },
]

const PROCESSO = [
  { t: 'Conversa e briefing', d: 'A gente escuta sua marca, seu momento e o que você quer contar.' },
  { t: 'Roteiro e estratégia', d: 'Planejamos o conteúdo com storytelling no centro — nada genérico.' },
  { t: 'Captação', d: 'Foto e vídeo com olhar autoral; em eventos, capturando ao vivo.' },
  { t: 'Entrega', d: 'Conteúdo pronto pra publicar — e no real time, ainda durante o evento.' },
]

export default function Sobre() {
  return (
    <div className="mx-auto max-w-4xl px-4 md:px-8 py-10 md:py-12 lg:py-14">
      <Eyebrow>Sobre</Eyebrow>
      <h1 className="font-display text-[26px] md:text-[32px] lg:text-4xl leading-tight mt-1.5 mb-3">
        Duas mulheres, uma marca feita de histórias
      </h1>
      <p className="text-sm md:text-[17px] leading-relaxed text-marrom-2 max-w-2xl">
        A GueZ nasceu de um sonho: o de contar a história de cada marca de verdade — não só bonita,
        mas com alma e propósito. Somos um estúdio boutique de marketing e social media de Novo
        Hamburgo, no Vale do Sinos, e trabalhamos de perto, em baixa escala, com atenção real.
      </p>

      {/* A DUPLA */}
      <div className="grid grid-cols-2 gap-6 md:gap-10 mt-10 max-w-md">
        {DUPLA.map((p) => (
          <div key={p.nome} className="text-center">
            <ImagePlaceholder label={p.label} circle className="w-28 h-28 md:w-36 md:h-36 mx-auto" />
            <div className="text-[15px] font-semibold mt-3">{p.nome}</div>
            <div className="text-[13px] text-marrom-label">{p.papel}</div>
          </div>
        ))}
      </div>

      {/* PROCESSO */}
      <h2 className="font-display text-2xl mt-12 mb-5">Como trabalhamos</h2>
      <div className="grid gap-4 md:gap-4 lg:gap-5 md:grid-cols-2">
        {PROCESSO.map((s, i) => (
          <div key={i} className="bg-papel border border-linha rounded-lg p-5 flex gap-3.5">
            <div className="shrink-0 grid place-items-center w-8 h-8 rounded-full bg-laranja-cta text-papel text-sm font-bold">
              {i + 1}
            </div>
            <div>
              <div className="font-semibold text-[15px] mb-1">{s.t}</div>
              <div className="text-[13.5px] text-marrom-2 leading-relaxed">{s.d}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <Button to="/contato" size="lg">Vamos conversar</Button>
      </div>
    </div>
  )
}
