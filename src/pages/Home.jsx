import { useState } from 'react'
import { FaPlay } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import Button from '../components/Button.jsx'
import Eyebrow from '../components/Eyebrow.jsx'
import ImagePlaceholder from '../components/ImagePlaceholder.jsx'
import VideoModal from '../components/VideoModal.jsx'
import { SERVICOS_RESUMO, REAL_TIME_PASSOS } from '../constants/servicos.js'
import { PORTFOLIO_DESTAQUE } from '../constants/portfolio.js'
import { DEPOIMENTOS } from '../constants/depoimentos.js'
import { parseVideo } from '../lib/videoEmbed.js'

const container = 'mx-auto max-w-6xl px-4 md:px-8 lg:px-8'

export default function Home() {
  const [videoAtivo, setVideoAtivo] = useState(null) // { embedUrl, titulo, provider } | null
  return (
    <>
      {/* HERO — mobile + tablet (imagem com overlay) */}
      <section className="lg:hidden relative h-[460px] md:h-[420px]">
        <ImagePlaceholder
          label="reel/foto de capa"
          bordered={false}
          rounded="rounded-none"
          className="absolute inset-0 h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-marrom/90 via-marrom/40 to-marrom/10 md:via-marrom/25" />
        <div className="absolute inset-x-0 bottom-0 p-5 md:px-10 md:py-9 md:max-w-[520px]">
          <h1 className="font-display text-[28px] md:text-[34px] leading-tight md:leading-[1.16] text-creme mb-2.5 md:mb-3.5">
            Toda marca tem uma história que merece ser contada de verdade
          </h1>
          <p className="text-sm md:text-[14.5px] leading-snug md:leading-relaxed text-creme-sobre-escuro mb-4 md:mb-5">
            Agência boutique de marketing e social media, com cobertura de eventos em tempo real.
            Novo Hamburgo e Vale do Sinos.
          </p>
          <div className="flex flex-wrap gap-2.5 md:gap-3">
            <Button to="/contato">Fale com a gente</Button>
            <Button to="/servicos" variant="outlineLight">Ver serviços</Button>
          </div>
        </div>
      </section>

      {/* HERO — desktop (split) */}
      <section className="hidden lg:grid grid-cols-2 items-stretch">
        <div className="px-14 py-20 flex flex-col justify-center">
          <div className="text-[13px] tracking-[0.1em] uppercase text-laranja-cta mb-4">
            Agência boutique de social media
          </div>
          <h1 className="font-display text-[52px] leading-[1.12] mb-5">
            Toda marca tem uma história que merece ser contada de verdade
          </h1>
          <p className="text-[17px] leading-relaxed text-marrom-2 mb-8 max-w-[460px]">
            Storytelling, social media e cobertura de eventos em tempo real — para marcas de
            Novo Hamburgo e do Vale do Sinos.
          </p>
          <div className="flex gap-3.5">
            <Button to="/contato" size="lg">Fale com a gente</Button>
            <Button to="/servicos" variant="outline" size="lg">Ver serviços</Button>
          </div>
        </div>
        <ImagePlaceholder
          label="reel/foto de capa"
          bordered={false}
          rounded="rounded-none"
          className="min-h-[520px]"
        />
      </section>

      {/* QUEM É */}
      <section className={`${container} py-10 md:py-12 lg:py-16 md:grid md:grid-cols-[1.3fr_1fr] lg:grid-cols-2 md:gap-10 lg:gap-14 md:items-center`}>
        <div>
          <Eyebrow>Quem é a GueZ</Eyebrow>
          <p className="font-display text-[19px] md:text-[26px] lg:text-[30px] leading-snug mt-2 mb-4 md:mb-5">
            Somos a Lucy e a Érica: storytelling, marketing e fotografia, de perto e com alma.
          </p>
          <p className="hidden md:block text-[14.5px] lg:text-[15px] leading-relaxed text-marrom-2 max-w-[480px]">
            Trabalho autoral e de baixa escala — cada marca que atendemos recebe atenção de
            verdade, do roteiro à entrega.
          </p>
        </div>
        <div className="flex gap-4 md:gap-5 lg:gap-6 mt-2 md:mt-0">
          {[
            { nome: 'Lucy Freitas', papel: 'Storymaker', label: 'foto Lucy' },
            { nome: 'Érica Schmidt', papel: 'Marketing & fotografia', label: 'foto Érica' },
          ].map((p) => (
            <div key={p.nome} className="text-center flex-1">
              <ImagePlaceholder
                label={p.label}
                circle
                className="w-[76px] h-[76px] md:w-[100px] md:h-[100px] lg:w-[140px] lg:h-[140px] mx-auto"
              />
              <div className="text-[13px] md:text-[14px] lg:text-[15px] font-semibold mt-2 md:mt-3">{p.nome}</div>
              <div className="text-[11.5px] md:text-[12.5px] lg:text-[13px] text-marrom-label">{p.papel}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVIÇOS RESUMO */}
      <section className={`${container} pb-10 md:pb-12 lg:pb-16`}>
        <Eyebrow className="mb-2 md:mb-5">Serviços</Eyebrow>
        <div className="grid gap-3 md:grid-cols-3 md:gap-[18px] lg:gap-6">
          {SERVICOS_RESUMO.map((c) => (
            <div
              key={c.titulo}
              className={
                c.destaque
                  ? 'bg-marrom text-creme rounded-md md:rounded-lg p-[18px] md:p-6 lg:p-8'
                  : 'bg-papel border border-linha rounded-md md:rounded-lg p-[18px] md:p-6 lg:p-8'
              }
            >
              <div className="font-display text-base md:text-[19px] lg:text-[22px] mb-1 md:mb-2.5">{c.titulo}</div>
              <div className={`text-sm md:text-[14.5px] md:leading-relaxed ${c.destaque ? 'text-creme-sobre-escuro' : 'text-marrom-2'}`}>
                {c.texto}
              </div>
            </div>
          ))}
        </div>
        <Link to="/servicos" className="inline-block mt-4 md:mt-6 text-sm md:text-[14.5px] font-semibold text-laranja-cta no-underline">
          Ver todos os serviços →
        </Link>
      </section>

      {/* DIFERENCIAL REAL TIME */}
      <section className={`${container} pb-10 md:pb-12 lg:pb-16`}>
        <div className="bg-creme-escuro rounded-lg p-[22px] md:p-8 lg:p-12">
          <div className="font-display text-lg md:text-[24px] lg:text-[26px] leading-snug mb-3.5 md:mb-6">
            Como funciona o real time
          </div>
          <div className="grid gap-3 md:grid-cols-3 md:gap-[18px] lg:gap-8">
            {REAL_TIME_PASSOS.map((p, i) => (
              <div key={i} className="flex gap-3 items-start">
                <div className="shrink-0 grid place-items-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-laranja-cta text-papel text-xs md:text-sm font-bold">
                  {i + 1}
                </div>
                <div className="text-sm md:text-[14.5px] pt-0.5 md:pt-1">{p}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFÓLIO DESTAQUE */}
      <section className={`${container} pb-10 md:pb-12 lg:pb-16`}>
        <Eyebrow className="mb-2.5 md:mb-5">Cases em destaque</Eyebrow>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 md:gap-4 lg:gap-5">
          {PORTFOLIO_DESTAQUE.map((item) => {
            const embed = parseVideo(item.videoUrl)
            const midia = (
              <div className="relative">
                <ImagePlaceholder
                  label={item.placeholder}
                  bordered={false}
                  rounded="rounded-none"
                  className="h-[100px] md:h-[140px] lg:h-[180px] w-full"
                />
                {embed && (
                  <div className="absolute inset-0 grid place-items-center pointer-events-none">
                    <span className="grid place-items-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-marrom/55">
                      <FaPlay className="text-papel ml-0.5" size={13} aria-hidden="true" />
                    </span>
                  </div>
                )}
                {item.isRealtime && (
                  <span className="absolute top-1.5 left-1.5 md:top-2 md:left-2 lg:top-2.5 lg:left-2.5 bg-papel rounded-pill px-1.5 md:px-2 lg:px-2.5 py-0.5 md:py-1 text-[8.5px] md:text-[9.5px] lg:text-[10px] font-bold text-laranja-cta">
                    REAL TIME
                  </span>
                )}
              </div>
            )
            return (
              <div key={item.id} className="relative rounded-md md:rounded-md lg:rounded-lg overflow-hidden bg-papel border border-linha">
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
                <div className="px-2.5 md:px-3 lg:px-3.5 py-2 md:py-2.5 lg:py-3 text-[11.5px] md:text-[12.5px] lg:text-[13.5px] font-semibold">
                  {item.titulo}
                </div>
              </div>
            )
          })}
        </div>
        <Link to="/portfolio" className="inline-block mt-4 md:mt-6 text-sm md:text-[14.5px] font-semibold text-laranja-cta no-underline">
          Ver portfólio completo →
        </Link>
      </section>

      {/* DEPOIMENTOS */}
      <section className={`${container} pb-10 md:pb-12 lg:pb-16`}>
        <Eyebrow className="mb-2.5 md:mb-5">Quem já contou a história com a gente</Eyebrow>
        <div className="grid gap-3 md:grid-cols-2 md:gap-[18px] lg:gap-6">
          {DEPOIMENTOS.map((d, i) => (
            <div key={i} className="bg-papel border border-linha rounded-md md:rounded-lg p-[18px] md:p-[22px] lg:p-7">
              <p className="font-display italic text-[14.5px] md:text-[15.5px] lg:text-[18px] leading-normal md:leading-[1.5] mb-2.5 md:mb-3">
                “{d.texto}”
              </p>
              <div className="text-xs md:text-[13px] text-marrom-label">{d.autor}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className={`${container} pb-12 md:pb-12 lg:pb-20`}>
        <div className="bg-marrom text-creme rounded-lg p-6 md:p-9 lg:p-14 md:grid md:grid-cols-2 md:gap-8 lg:gap-12 md:items-center">
          <div>
            <div className="font-display text-[19px] md:text-[26px] lg:text-[30px] mb-2 md:mb-3">Bora contar essa história?</div>
            <p className="text-sm md:text-[15px] text-creme-sobre-escuro mb-4 md:mb-0">
              Deixa seu contato que a gente te chama em até 1 dia útil.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-2.5 md:gap-2.5 lg:gap-3">
            <input
              placeholder="Seu nome"
              aria-label="Seu nome"
              className="flex-1 min-w-0 rounded-sm px-3.5 py-3 bg-creme text-marrom placeholder:text-marrom-label border-0 text-sm"
            />
            <input
              placeholder="WhatsApp ou e-mail"
              aria-label="WhatsApp ou e-mail"
              className="flex-1 min-w-0 rounded-sm px-3.5 py-3 bg-creme text-marrom placeholder:text-marrom-label border-0 text-sm"
            />
            <Button to="/contato" variant="gold" className="whitespace-nowrap">
              Enviar
            </Button>
          </div>
        </div>
      </section>

      {videoAtivo && (
        <VideoModal
          kind={videoAtivo.kind}
          src={videoAtivo.src}
          titulo={videoAtivo.titulo}
          onClose={() => setVideoAtivo(null)}
        />
      )}
    </>
  )
}
