import Eyebrow from '../components/Eyebrow.jsx'
import { SITE } from '../constants/site.js'

export default function Privacidade() {
  return (
    <div className="mx-auto max-w-2xl px-4 md:px-8 py-10 md:py-14">
      <Eyebrow>Política de Privacidade</Eyebrow>
      <h1 className="font-display text-[26px] md:text-4xl leading-tight mt-1.5 mb-6">
        Como cuidamos dos seus dados
      </h1>

      <div className="prose-guez flex flex-col gap-5 text-[14.5px] leading-relaxed text-marrom-2">
        <p>
          Esta página explica, de forma simples, como a GueZ trata os dados pessoais enviados pelo
          formulário de contato deste site, em conformidade com a LGPD (Lei nº 13.709/2018).
        </p>

        <Section titulo="Quais dados coletamos">
          Apenas o que você nos envia no formulário: nome, e-mail, WhatsApp, tipo de projeto e a sua
          mensagem. Não coletamos dados sensíveis nem dados de menores de idade.
        </Section>

        <Section titulo="Para que usamos">
          Exclusivamente para responder ao seu contato e conversar sobre um possível trabalho. Não
          vendemos, alugamos nem compartilhamos seus dados com terceiros para fins de marketing.
        </Section>

        <Section titulo="Consentimento">
          O envio do formulário só acontece com o seu consentimento explícito, marcado na caixa de
          seleção antes do envio.
        </Section>

        <Section titulo="Seus direitos">
          Você pode, a qualquer momento, pedir acesso, correção ou exclusão dos seus dados. É só
          escrever para <a href={`mailto:${SITE.email}`} className="text-laranja-cta">{SITE.email}</a>.
        </Section>

        <Section titulo="Contato">
          Dúvidas sobre esta política? Fale com a gente pelo e-mail acima ou pelo Instagram{' '}
          <a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-laranja-cta">
            @{SITE.instagram}
          </a>.
        </Section>

        <p className="text-xs text-marrom-label mt-2">
          Última atualização: julho de 2026 · Este texto é um rascunho inicial e pode ser revisado.
        </p>
      </div>
    </div>
  )
}

function Section({ titulo, children }) {
  return (
    <div>
      <h2 className="font-display text-xl text-marrom mb-1.5">{titulo}</h2>
      <p>{children}</p>
    </div>
  )
}
