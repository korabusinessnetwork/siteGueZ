# 05 — FLUXOS · GueZ

> O site é estático; o único fluxo real é o **contato / captação de lead**.

## Fluxo: Contato (captação de lead)
Ator: visitante. Objetivo: virar lead da GueZ.

```
1. Visitante chega (Instagram / busca) e navega até uma seção de CTA.
2. Escolhe um caminho:
   a) WhatsApp flutuante  → abre conversa direta (fluxo mais rápido).
   b) Formulário (/contato) → preenche dados.
3. Formulário: nome, e-mail, telefone/WhatsApp, tipo de evento/projeto,
   data, mensagem + [ ] consentimento LGPD (link p/ privacidade).
4. Ao enviar:
   - Valida campos no cliente (obrigatórios, formato de e-mail/telefone).
   - Envia via serviço externo (camada src/lib/enviarContato).
5. Estados de retorno:
   - enviando  → botão desabilitado + spinner.
   - sucesso   → mensagem "Recebemos! Retornamos em breve" + limpa form.
   - erro      → banner + botão "tentar de novo" + oferece WhatsApp como plano B.
6. Lead chega na caixa de e-mail / WhatsApp da GueZ → contato humano.
```

## Regras do fluxo
- **Sem consentimento marcado, não envia** (LGPD — ver `11_SEGURANCA/`).
- Nunca expor os dados enviados em URL ou log público.
- WhatsApp é sempre o atalho de menor atrito — manter visível.

## Fluxos futuros (fora da v1)
- Onboarding de cliente / entrega de projeto → só se entrar "área do cliente"
  (exigiria backend, novo ADR — ver ADR-003).

## Ligações
- `03_REGRAS_DE_NEGOCIO/` — a página de Contato e os CTAs.
- `11_SEGURANCA/` — LGPD e validação.
- `01_ARQUITETURA/` — camada de serviço que fala com o provedor de formulário.
