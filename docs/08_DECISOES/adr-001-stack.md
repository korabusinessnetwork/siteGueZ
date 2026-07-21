# ADR-001: Stack — React + Vite + Tailwind, deploy Vercel

## Status
Aceito · 2026-07-20

## Contexto
O site da GueZ é institucional + portfólio, com muito vídeo/foto, mobile-first,
em fase bootstrap (custo zero por padrão) e single-tenant. Precisa subir rápido,
ser fácil de manter e ter bom desempenho de mídia.

## Decisão
Usar **React + Vite** (SPA), **Tailwind CSS** (com design tokens), **React
Router** para as rotas e **deploy na Vercel** (tier gratuito, CDN, HTTPS,
preview deploys).

## Alternativas consideradas
- **Next.js:** melhor SEO/SSR e blog, mas mais peso e complexidade do que a v1
  precisa. Reavaliar se conteúdo/SEO virar prioridade.
- **HTML/CSS/JS puro:** mais simples, porém escala pior conforme o site cresce
  (componentização, portfólio dinâmico).
- **Construtor no-code (Wix/Framer):** rápido, mas com custo recorrente e menos
  controle; contraria o padrão document-first/código do projeto.

## Consequências
- Build e DX rápidos; componentização clara por seção/página.
- SEO depende de configuração manual (meta/OG, sitemap) — aceitável na v1.
- Se SEO/blog virar central, migrar para Next.js é possível (novo ADR).

## Referências
- `docs/01_ARQUITETURA/README.md`
