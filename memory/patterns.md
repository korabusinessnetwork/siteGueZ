---
name: patterns
description: Padrões de código e implementação consolidados do site GueZ.
metadata:
  type: patterns
  updated: 2026-07-20
---

# Padrões Consolidados — GueZ

> Padrão entra aqui só depois de validado no código. Projeto novo: começamos com
> as convenções da constituição (`CLAUDE.md`); consolidar aprendizados conforme surgirem.

## Convenções iniciais (de `CLAUDE.md`)
- Um componente React por arquivo; organização por seção/página.
- **CSS/tema desacoplado do JSX** — cores/fontes via tokens do design system
  (Tailwind theme), nunca hardcodadas no meio do componente.
- Nomes de domínio em português (`enviarContato`), técnicos em inglês (`handleSubmit`).
- Acesso a serviço externo só pela camada `src/lib/` (nunca no componente).
- Todo estado com dado/ação renderiza: normal, carregando, erro, vazio, sucesso.
- Mídia: lazy-load, `poster` em vídeo, imagem em formato moderno.

## Anti-padrões
- ❌ Cor/fonte/logo hardcodados no JSX.
- ❌ Chamar o provedor de formulário direto do componente (usar `src/lib/`).
- ❌ Vídeo pesado sem lazy-load/poster no topo da página.

## [DEPRECADO]
- (nenhum ainda)
