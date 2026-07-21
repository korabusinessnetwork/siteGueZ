import Button from '../components/Button.jsx'
import Eyebrow from '../components/Eyebrow.jsx'
import { PLANOS, REAL_TIME_PASSOS, AVULSOS } from '../constants/servicos.js'

export default function Servicos() {
  return (
    <div className="mx-auto max-w-5xl px-4 md:px-8 py-10 md:py-12 lg:py-14">
      <Eyebrow>Serviços</Eyebrow>
      <h1 className="font-display text-[26px] md:text-[32px] lg:text-4xl leading-tight mt-1.5 mb-2">
        Planos, real time e trabalhos avulsos
      </h1>
      <p className="text-sm md:text-base text-marrom-2 max-w-2xl">
        Escolha o formato que combina com o momento da sua marca — sempre com storytelling no centro.
      </p>

      {/* PLANOS */}
      <div className="grid gap-5 md:grid-cols-3 md:gap-4 lg:gap-6 mt-8">
        {PLANOS.map((plano) => (
          <div
            key={plano.nome}
            className={`relative rounded-lg p-5 lg:p-6 bg-papel ${
              plano.destaque ? 'border-2 border-laranja-cta shadow-soft' : 'border border-linha'
            }`}
          >
            {plano.destaque && (
              <div className="absolute -top-3 left-5 bg-laranja-cta text-papel text-[10.5px] font-bold tracking-wide px-3 py-1 rounded-pill">
                MAIS PROCURADO
              </div>
            )}
            <div className="font-display text-[19px] mt-1">{plano.nome}</div>
            <div className="text-[13px] text-marrom-2 mt-1.5 mb-3.5">{plano.resumo}</div>
            <ul className="list-none p-0 m-0 flex flex-col gap-2 text-[13px] mb-4">
              {plano.itens.map((i) => (
                <li key={i}>✓ {i}</li>
              ))}
            </ul>
            <div className="text-xs text-marrom-label mb-3">{plano.preco}</div>
            <Button to="/contato" variant={plano.destaque ? 'solid' : 'outline'} block>
              Quero esse plano
            </Button>
          </div>
        ))}
      </div>

      {/* REAL TIME */}
      <div className="bg-marrom text-creme rounded-lg p-6 md:p-8 lg:p-10 mt-10">
        <div className="inline-block border-[1.5px] border-dashed border-dourado rounded-pill px-3 py-1 text-[11px] tracking-wide text-dourado mb-3">
          SERVIÇO-ASSINATURA
        </div>
        <div className="font-display text-[21px] md:text-2xl leading-snug mb-2">
          Cobertura de eventos em real time
        </div>
        <p className="text-[13.5px] md:text-sm text-creme-sobre-escuro max-w-2xl mb-5">
          Fotografamos e filmamos o seu evento e entregamos conteúdo editado ainda durante a
          festa — para quem não quer esperar até o dia seguinte.
        </p>
        <div className="flex flex-col md:flex-row md:gap-5 lg:gap-8 gap-3">
          {REAL_TIME_PASSOS.map((p, i) => (
            <div key={i} className="flex gap-3 items-start md:flex-1">
              <div className="shrink-0 grid place-items-center w-7 h-7 rounded-full bg-dourado text-marrom text-[13px] font-bold">
                {i + 1}
              </div>
              <div className="text-[13px] pt-1 text-creme">{p}</div>
            </div>
          ))}
        </div>
        <Button to="/contato" variant="gold" className="mt-6">
          Pedir orçamento de real time
        </Button>
      </div>

      {/* AVULSOS */}
      <div className="mt-12">
        <h2 className="font-display text-xl mb-4">Trabalhos avulsos</h2>
        {AVULSOS.map((g) => (
          <div key={g.grupo} className="mb-6">
            <div className="text-[13px] font-bold text-laranja-cta mb-2">{g.grupo}</div>
            <div className="flex flex-wrap gap-2">
              {g.itens.map((it) => (
                <span key={it} className="bg-papel border border-linha rounded-pill px-3.5 py-2 text-[12.5px]">
                  {it}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
