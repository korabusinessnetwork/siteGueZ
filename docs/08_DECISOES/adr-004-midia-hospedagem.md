# ADR-004: Mídia e hospedagem — vídeo por embed, fotos estáticas, sem banco na v1

## Status
Aceito · 2026-07-21

## Contexto
O site é institucional + portfólio, com bastante vídeo e foto, em fase bootstrap
(custo zero por padrão), hospedado na **Vercel**. Surgiu a dúvida: usar um banco
de dados grátis com storage para os vídeos, ou embedar vídeos por link?

Fato: **storage de vídeo é caro e estoura qualquer tier gratuito** (Supabase free
= ~1GB; alguns reels já consomem isso). Um site de portfólio **não precisa de
banco** — o conteúdo é conhecido em build.

## Decisão
1. **Vídeo → embed por link.** Vídeos ficam no **YouTube** (grátis, ilimitado,
   embed confiável) — recomendado como padrão — ou **Vimeo** (player mais limpo,
   sem recomendações, tier free limitado) se quiserem visual mais boutique.
   Reels do Instagram também podem ser embedados como prova social.
2. **Fotos → assets estáticos** no repositório, servidos pela Vercel (CDN grátis).
   Otimizar (WebP/AVIF, `srcset`). Se o volume crescer muito, migrar para
   **Cloudinary free** (25GB) — decisão futura.
3. **Sem banco de dados na v1.** Conteúdo (serviços, itens de portfólio,
   depoimentos) vive em `src/constants/` como dados tipados. Item de portfólio de
   vídeo guarda apenas a **URL de embed** + capa (poster), não o arquivo.
4. **Domínio via Vercel.** A Vercel hospeda de graça e conecta o domínio. Começar
   com `guez.vercel.app` (grátis). Domínio próprio `guez.com.br` é **o único item
   pago**: registro em registro.br (~R$40/ano) — a Vercel só aponta para ele.

## Alternativas consideradas
- **Banco grátis com storage para os vídeos:** inviável (limite de storage baixo,
  vídeo pesado, banda). Descartado.
- **Hospedar arquivos de vídeo próprios na Vercel:** limites de tamanho e banda +
  sem streaming adaptativo. Pior que YouTube/Vimeo. Descartado.
- **CMS/headless desde já:** overhead sem necessidade — não há edição frequente
  na v1. Reavaliar se a GueZ quiser editar o portfólio sozinha (Supabase free).

## Consequências
- Zero storage/banco para manter; vídeo com streaming e player prontos.
- Trocar embed = trocar uma URL no dado do portfólio (isolado em `src/constants/`).
- Único custo é o domínio `.com.br` (opcional; adiável — começa no `.vercel.app`).
- Se um dia quiserem CMS para editar sem redeploy → novo ADR (provável Supabase free
  só para metadados, jamais para os arquivos de vídeo).

## Referências
- `docs/01_ARQUITETURA/README.md` · `docs/04_MODELAGEM/README.md` · ADR-003 (sem backend)
