# GueZ — Site

Site institucional + portfólio da **GueZ**, estúdio boutique de marketing
audiovisual (dupla feminina). Diferencial-âncora: **foto e vídeo em tempo real
em eventos** — conteúdo entregue durante o próprio evento.

## Visão de 30 segundos
- **O que é:** vitrine que transforma visitante (vindo do Instagram) em lead.
- **Escopo v1:** institucional + portfólio, single-tenant, sem backend.
- **Stack:** React + Vite + Tailwind · deploy Vercel · formulário via serviço externo.

## Onde está o quê
- **`CLAUDE.md`** — constituição do projeto (leia antes de codar).
- **`memory/`** — identidade, decisões, restrições.
- **`docs/`** — documentação numerada (00 visão → 11 segurança).
  - **`docs/03_REGRAS_DE_NEGOCIO/`** — a estrutura de páginas do site (o mapa).
  - **`docs/08_DECISOES/`** — ADRs (stack, single-tenant, sem backend).
- **`src/`** — código (a implementar).
- **`respostas-intake.md`** — respostas da entrevista de fundação.

## Status
🚧 Fundação criada. Próximo: identidade visual → design system → build.
Ver `docs/09_BACKLOG/` para o roadmap.

## Rodar (após o setup do front-end)
```bash
npm install
npm run dev
```
> O projeto Vite/React ainda será inicializado na fase de build (fase 4).
