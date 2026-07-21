# 07 — APIS · GueZ

> **N/A para a v1 — o site não expõe API própria** (sem backend; ver ADR-003).
> O único contrato externo é o **envio do formulário de contato** a um provedor.

## Contrato externo: envio de contato
- **Consumido por:** `src/lib/enviarContato` (camada de serviço; nunca chamado
  direto do componente).
- **Provedor:** a definir (Formspree / Web3Forms / Netlify Forms).
- **Requisição (lógica):** `POST` com `{ nome, email, telefone, tipo, data,
  mensagem, consentimento: true }`.
- **Resposta esperada:** sucesso (2xx) → mostra confirmação; erro → banner +
  retry + WhatsApp como alternativa.
- **Segredos:** endpoint/chave em `import.meta.env.VITE_*` (ver `11_SEGURANCA/`).

## Regra
Trocar de provedor deve mexer **só** em `src/lib/enviarContato`, não na UI.

## Quando isto deixa de ser N/A
Se surgir backend próprio (ex.: área do cliente), documentar endpoints reais
aqui, com autenticação e error handling, precedido de novo ADR.
