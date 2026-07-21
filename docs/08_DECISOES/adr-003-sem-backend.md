# ADR-003: Sem backend próprio — formulário via serviço externo

## Status
Aceito · 2026-07-20

## Contexto
A única interação que sai do site é o **formulário de contato**. Não há login,
área do cliente nem persistência de dados na v1. Manter um backend/banco só para
receber e-mails de contato é custo e complexidade desnecessários na fase bootstrap.

## Decisão
Não ter backend próprio na v1. O formulário envia através de um **serviço
externo** (Formspree, Web3Forms ou Netlify Forms — escolha pendente), encapsulado
numa camada de serviço em `src/lib/` para trocar de provedor sem tocar na UI.

## Alternativas consideradas
- **Supabase/Backend próprio:** só se justifica quando surgir área do cliente ou
  necessidade de armazenar dados — fora do escopo v1.
- **`mailto:` puro:** frágil (depende do cliente de e-mail do usuário), sem
  validação nem confirmação — pior experiência.

## Consequências
- Zero infra para manter; envio confiável via provedor.
- Dados do formulário trafegam por terceiro → tratar LGPD (consentimento,
  finalidade) e escolher provedor com política adequada (ver `11_SEGURANCA/`).
- Quando entrar "área do cliente" (fora da v1), revisitar com novo ADR (backend).

## Referências
- `docs/11_SEGURANCA/README.md` · `docs/01_ARQUITETURA/README.md`
