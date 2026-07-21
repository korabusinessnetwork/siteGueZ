// Camada de serviço — único ponto que fala com o provedor de formulário (ADR-003).
// Trocar de provedor mexe SÓ aqui, nunca no componente.
//
// Sem VITE_FORM_ENDPOINT configurado, roda em modo simulação (dev): resolve com
// sucesso após um pequeno atraso. Com o endpoint, faz POST real (Formspree /
// Web3Forms / Netlify Forms — todos aceitam POST JSON).

const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT

export async function enviarContato(dados) {
  if (!ENDPOINT) {
    // Modo simulação — remover quando o provedor estiver configurado.
    console.warn('[enviarContato] VITE_FORM_ENDPOINT não configurado — simulando envio.')
    await new Promise((r) => setTimeout(r, 900))
    return { ok: true, simulado: true }
  }

  const resp = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(dados),
  })

  if (!resp.ok) {
    throw new Error(`Falha no envio (${resp.status})`)
  }
  return { ok: true }
}
