import { useState } from 'react'
import Eyebrow from '../components/Eyebrow.jsx'
import Button from '../components/Button.jsx'
import { SITE, whatsappUrl } from '../constants/site.js'
import { enviarContato } from '../lib/enviarContato.js'

const TIPOS = ['Plano mensal', 'Cobertura em real time', 'Trabalho avulso', 'Ainda não sei']
const inputCls =
  'w-full box-border px-3.5 py-3 rounded-sm border-[1.5px] border-linha bg-papel text-marrom text-sm placeholder:text-marrom-label'

export default function Contato() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    tipo: TIPOS[0],
    mensagem: '',
    consentimento: false,
  })
  const [erros, setErros] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const set = (k) => (e) =>
    setForm((f) => ({ ...f, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }))

  const validar = () => {
    const er = {}
    if (!form.nome.trim()) er.nome = 'Informe seu nome'
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) er.email = 'E-mail inválido'
    if (!form.consentimento) er.consentimento = 'Necessário para entrarmos em contato'
    setErros(er)
    return Object.keys(er).length === 0
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!validar()) return
    setStatus('sending')
    try {
      await enviarContato(form)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="mx-auto max-w-xl px-4 md:px-8 py-10 md:py-14">
      <Eyebrow>Contato</Eyebrow>
      <h1 className="font-display text-[26px] md:text-4xl leading-tight mt-1.5 mb-2">
        Vamos contar essa história?
      </h1>
      <p className="text-sm md:text-base text-marrom-2">
        Conta pra gente sobre a sua marca e o seu evento — respondemos rapidinho.
      </p>

      {/* Canais diretos */}
      <div className="flex flex-col gap-2 text-[13px] mt-6">
        <a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-marrom no-underline">
          <b className="text-laranja-cta">Instagram</b> @{SITE.instagram}
        </a>
        <a href={`mailto:${SITE.email}`} className="text-marrom no-underline">
          <b className="text-laranja-cta">E-mail</b> {SITE.email}
        </a>
        <div>
          <b className="text-laranja-cta">Onde</b> {SITE.local}
        </div>
      </div>

      {/* Formulário */}
      <form onSubmit={onSubmit} noValidate className="flex flex-col gap-3.5 mt-6">
        <Field label="Nome" erro={erros.nome}>
          <input className={inputCls} placeholder="Seu nome" value={form.nome} onChange={set('nome')} />
        </Field>
        <Field label="E-mail" erro={erros.email}>
          <input className={inputCls} type="email" placeholder="voce@email.com" value={form.email} onChange={set('email')} />
        </Field>
        <Field label="WhatsApp">
          <input className={inputCls} placeholder="(51) 9 9999-9999" value={form.whatsapp} onChange={set('whatsapp')} />
        </Field>
        <Field label="Tipo de projeto">
          <select className={inputCls} value={form.tipo} onChange={set('tipo')}>
            {TIPOS.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </Field>
        <Field label="Mensagem">
          <textarea
            className={`${inputCls} resize-y`}
            rows={4}
            placeholder="Conta um pouco sobre sua marca ou evento"
            value={form.mensagem}
            onChange={set('mensagem')}
          />
        </Field>

        <label className="flex gap-2.5 items-start text-xs text-marrom-2 leading-snug">
          <input type="checkbox" className="mt-0.5" checked={form.consentimento} onChange={set('consentimento')} />
          Concordo com o uso dos meus dados para contato, conforme a LGPD (ver{' '}
          <a href="/privacidade" className="text-laranja-cta">Política de Privacidade</a>).
        </label>
        {erros.consentimento && <p className="text-xs text-laranja-cta -mt-2">{erros.consentimento}</p>}

        {status === 'idle' && (
          <Button type="submit" block>Enviar mensagem</Button>
        )}
        {status === 'sending' && (
          <div className="text-center py-3.5 rounded-pill bg-creme-escuro text-marrom-label text-sm font-semibold">
            Enviando mensagem…
          </div>
        )}
        {status === 'success' && (
          <div className="text-center px-4 py-3.5 rounded-md bg-[#EFE8D6] border border-dourado-escuro text-marrom-2 text-[13.5px]">
            ✓ Mensagem enviada! Retornamos em breve.
          </div>
        )}
        {status === 'error' && (
          <div>
            <div className="text-center px-4 py-3.5 rounded-md bg-[#F6E2D8] border border-laranja-cta text-laranja-cta text-[13.5px] mb-2.5">
              Algo deu errado. Tente novamente ou chama no WhatsApp.
            </div>
            <div className="flex flex-col gap-2">
              <Button type="button" variant="outline" block onClick={() => setStatus('idle')}>
                Tentar de novo
              </Button>
              <Button href={whatsappUrl('Oi! Tentei o formulário do site e quero falar com a GueZ 🐝')} variant="gold" block>
                Chamar no WhatsApp
              </Button>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}

function Field({ label, erro, children }) {
  return (
    <div>
      <label className="text-xs text-marrom-2 block mb-1.5">{label}</label>
      {children}
      {erro && <p className="text-xs text-laranja-cta mt-1">{erro}</p>}
    </div>
  )
}
