# 09 — BACKLOG · GueZ

> MVP, fases e pendências do site. Nada zumbi: item vivo ou marcado.

## MVP (v1) — escopo de lançamento
Objetivo: um site institucional + portfólio que gera contato. Status:

- [x] Home long-scroll completa (todas as seções de `03_REGRAS_DE_NEGOCIO/`).
- [x] Página Serviços (planos + real time + avulsos).
- [x] Página Portfólio (grid filtrável; embeds de vídeo a plugar nos itens).
- [x] Página Sobre (a dupla + processo).
- [x] Página Contato (formulário validado + máquina de estados + WhatsApp + LGPD).
- [x] Política de Privacidade.
- [x] Header fixo + footer + WhatsApp flutuante.
- [x] Responsivo mobile-first (build React + Vite + Tailwind com os tokens do design).
- [ ] Meta/OG tags por página (base no index.html; falta por-rota).
- [ ] Deploy na Vercel.

> Build feito com **placeholders** de imagem/vídeo e formulário em **modo simulação**
> (sem provedor). Trocar por assets/endpoint reais conforme pendências abaixo.

## Fora da v1 (nice to have / depois)
- Blog / SEO de conteúdo.
- Área do cliente / entrega de projetos (exigiria backend — ver ADR-003).
- Multi-idioma.
- CMS para o portfólio (v1 usa dados em `src/constants/`).
- Animações avançadas.

## Roadmap por fase
1. **Fundação** ✅ (scaffold — estrutura e docs).
2. **Design System** ✅ (handoff recebido — tokens em `02_DESIGN_SYSTEM/`, ADR-005).
3. **Conteúdo real + assets** — logo vetorial, fotos/vídeos, preços dos planos,
   WhatsApp real (ver pendências abaixo).
4. **Build front-end** — inicializar Vite/React + Tailwind (tokens do design
   system) e recriar as páginas conforme `03_REGRAS_DE_NEGOCIO/` e os mockups.
5. **Deploy** — Vercel + domínio + analytics.
6. **Pós-launch** — SEO local (Novo Hamburgo), ajustes por métrica (contatos/mês).

## Pendências de assets reais (do handoff de design)
- [ ] **Logo vetorial** (SVG) — para o selo/abelha no header/footer e re-amostrar hex.
- [ ] **Fotos/vídeos reais** — reel do hero, retratos de Lucy e Érica, stills de
      eventos/real time, cases Casa Coffee Colab e H.Maria Joias. (Hoje: placeholders.)
- [ ] **Preços dos planos** Light/Basic/Plus (ou manter "Investimento sob consulta").
- [ ] **Número de WhatsApp** real (placeholder: 5551999999999).
- [ ] Confirmar tipografia: **Georgia + Work Sans** (ou Arial p/ zero web-font).

## Decisões pendentes (não bloqueiam o build)
- Serviço de formulário (Formspree × Web3Forms × Netlify).
- Plataforma de embed de vídeo (YouTube × Vimeo — ADR-004).
- Registrar `guez.com.br` agora ou começar no `guez.vercel.app`.

## Dívida técnica
- Nenhuma ainda (projeto novo).
