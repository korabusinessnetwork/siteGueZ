---
name: decisions
description: Índice de ADRs (decisões de arquitetura) do projeto GueZ.
metadata:
  type: decisions
  updated: 2026-07-20
---

# Índice de Decisões (ADRs)

Toda decisão de arquitetura relevante vira um ADR em `docs/08_DECISOES/`.

| ADR | Título | Status | Data |
|-----|--------|--------|------|
| [ADR-001](../docs/08_DECISOES/adr-001-stack.md) | Stack: React + Vite + Tailwind, deploy Vercel | Aceito | 2026-07-20 |
| [ADR-002](../docs/08_DECISOES/adr-002-single-tenant.md) | Single-tenant, marca única (sem multi-tenant) | Aceito | 2026-07-20 |
| [ADR-003](../docs/08_DECISOES/adr-003-sem-backend.md) | Sem backend próprio: formulário via serviço externo | Aceito | 2026-07-20 |
| [ADR-004](../docs/08_DECISOES/adr-004-midia-hospedagem.md) | Mídia e hospedagem: vídeo por embed, fotos estáticas, sem banco; domínio via Vercel | Aceito | 2026-07-21 |
| [ADR-005](../docs/08_DECISOES/adr-005-design-system.md) | Adoção do design system do handoff + tipografia (Georgia + Work Sans) | Aceito | 2026-07-21 |

## Decisões pendentes
- Serviço de formulário de contato (Formspree × Web3Forms × Netlify Forms).
- Plataforma de embed de vídeo: YouTube (padrão) × Vimeo (player mais limpo) — confirmar preferência.
- Registrar domínio próprio `guez.com.br` agora (~R$40/ano) ou começar no `guez.vercel.app` (grátis).
