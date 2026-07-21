---
name: restrictions
description: Restrições permanentes da GueZ — custo, legal (LGPD), marca, técnica. Prioridade máxima.
metadata:
  type: restrictions
  updated: 2026-07-20
---

# Restrições Permanentes — GueZ

## Custo (bootstrap / pré-receita)
- **Tudo em tier gratuito por padrão.** Qualquer item pago é adiado até decisão
  explícita da GueZ (apresentar custo, alternativa gratuita e recomendação).
- **Único item pago previsto:** domínio próprio `guez.com.br` (~R$40/ano no
  registro.br) — adiável, começa no `guez.vercel.app` grátis. Vídeo é embed
  grátis (YouTube/Vimeo) e hospedagem é Vercel free — sem storage/banco pago
  (ver ADR-004). Formulário só custaria acima do tier free do provedor.

## Legal / LGPD
- O formulário de contato coleta dado pessoal (nome, e-mail, telefone, mensagem).
- **Obrigatório:** consentimento explícito no envio + **Política de Privacidade**
  acessível + finalidade declarada (responder o contato) + canal para exclusão.
- **Nunca** logar/expor esses dados publicamente nem passar por parâmetro de URL.

## Marca
- **Single-tenant, marca única.** Não há white-label — mas manter CSS/tema
  desacoplado da marcação para facilitar o ajuste de identidade quando os assets chegarem.
- Tom: humano, próximo, feminino, ágil. Nunca cinematográfico/corporativo pesado.

## Técnica
- Sem backend próprio por ora (ver [[decisions]] / ADR-003).
- Mobile-first e performance de mídia: vídeo/foto pesam — otimizar (lazy-load,
  formatos modernos, `poster` em vídeo) é definição de pronto.

## Plano de revisão
- Revisar custo e itens pagos a cada nova fase do projeto.
- Revisar LGPD ao publicar o site e sempre que mudar o formulário.
