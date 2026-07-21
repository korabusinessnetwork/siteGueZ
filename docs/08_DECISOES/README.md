# 08 — DECISÕES (ADRs) · GueZ

> Cada decisão de arquitetura relevante vira um ADR (`adr-NNN-titulo.md`).
> Um ADR por arquivo; ADRs antigos não são apagados, só marcados como supersedidos.

## Índice
| ADR | Título | Status | Data |
|-----|--------|--------|------|
| [ADR-001](adr-001-stack.md) | Stack: React + Vite + Tailwind, deploy Vercel | Aceito | 2026-07-20 |
| [ADR-002](adr-002-single-tenant.md) | Single-tenant, marca única (sem multi-tenant) | Aceito | 2026-07-20 |
| [ADR-003](adr-003-sem-backend.md) | Sem backend próprio: formulário via serviço externo | Aceito | 2026-07-20 |
| [ADR-004](adr-004-midia-hospedagem.md) | Mídia e hospedagem: vídeo por embed, fotos estáticas, sem banco; domínio via Vercel | Aceito | 2026-07-21 |
| [ADR-005](adr-005-design-system.md) | Adoção do design system do handoff + tipografia (Georgia + Work Sans) | Aceito | 2026-07-21 |

## Como criar um novo ADR
1. Copie `adr-000-template.md` para `adr-NNN-titulo.md` (numeração sequencial).
2. Preencha Contexto · Decisão · Alternativas · Consequências.
3. Adicione a linha no índice acima e em `memory/decisions.md`.

## Decisões ainda em aberto
- Serviço de formulário (Formspree × Web3Forms × Netlify Forms).
- Hospedagem de vídeo do portfólio (embed × arquivo próprio).
