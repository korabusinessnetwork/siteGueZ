# 03 — ESTRUTURA DO SITE & CONTEÚDO · GueZ

> Mapa do site: cada página, cada seção, o que comunica e o CTA. Peça central da
> fundação — o front-end (`src/`) implementa o que está aqui. Copy final na fase
> de conteúdo. Base: marca real mapeada em `memory/identity.md`.

## Princípios de estrutura
- **Mobile-first** — a maioria chega pelo link na bio do Instagram.
- **Storytelling primeiro:** o hero abre com a mensagem-âncora da marca ("toda
  marca tem uma história que merece ser contada de verdade").
- **Real time em eventos** é o serviço-assinatura — aparece com destaque.
- **CTA de contato sempre à mão** (header fixo + WhatsApp/direct).
- Estética craft/diário criativo, tons terrosos, abelha como detalhe recorrente.

## Elementos globais (todas as páginas)
- **Header fixo:** logo GueZ · nav (Serviços · Portfólio · Sobre · Contato) ·
  CTA "Fale com a gente".
- **Botão WhatsApp/direct flutuante.**
- **Footer:** mini-pitch · navegação · Instagram (@guez.com.br) em destaque ·
  e-mail (guezagenciamkt@gmail.com) · localização (Novo Hamburgo/RS) · link Privacidade.

---

## Página: Home (`/`) — long-scroll
1. **Hero** — storytelling + convite.
   - Headline âncora: *"Toda marca tem uma história que merece ser contada de verdade."*
   - Subheadline: agência de marketing e social media boutique, de Novo Hamburgo;
     conteúdo com alma e cobertura de eventos em tempo real.
   - CTA primário: "Fale com a gente" (direct/WhatsApp) · secundário: "Ver serviços".
   - Fundo: foto/reel real forte (com `poster`), com toque craft.

2. **Quem é a GueZ (resumo)** — a dupla Lucy + Érica, tom pessoal e caloroso.
   - Link "Conheça a gente" → `/sobre`.

3. **O que fazemos (serviços resumo)** — cards: Planos mensais · Real time de
   eventos (destaque) · Avulsos. Link "Ver todos os serviços" → `/servicos`.

4. **Diferencial: real time em eventos** — como funciona em 3 passos
   (captamos → editamos no local → entregamos durante o evento). Puxar o case
   Casa Coffee Colab.

5. **Portfólio / cases em destaque** — grid com Casa Coffee Colab e H.Maria
   Joias; selo nos trabalhos de real time. Link → `/portfolio`.

6. **Conteúdo que educa (autoridade)** — opcional: destacar que a GueZ ensina
   (ex.: "4 tipos de conteúdo que funcionam"), reforçando expertise.

7. **Depoimentos** — falas de clientes / comentários da comunidade.

8. **CTA final + contato** — chamada emocional + formulário curto + direct/WhatsApp.

---

## Página: Serviços (`/servicos`)
- **Intro** curta com o tom da marca.
- **Planos mensais (social media)** — 3 cards comparáveis:
  - **GueZ Light** · **GueZ Basic** · **GueZ Plus** — o que inclui cada um
    (`[confirmar entregáveis de cada plano com a GueZ]`).
- **Destaque: Cobertura de eventos em real time** — foto e vídeo entregues
  durante o evento (também "Real time 4hrs" avulso). Seção com peso próprio.
- **Serviços avulsos:**
  - *Criação:* posts fixos avulsos · edição de vídeo do cliente · vídeo stories
    animado · capa de destaques (6 ícones) · pack 4 artes ou carrossel.
  - *Estratégia e Presença:* legendas/motes · bio + link na bio otimizados ·
    reels avulso + roteiro.
- **CTA:** "Pedir orçamento".

## Página: Portfólio (`/portfolio`)
- Grade filtrável (Eventos/Real time · Social · Foto · Vídeo).
- Cases-âncora: **Casa Coffee Colab** e **H.Maria Joias** com fotos reais.
- Cada item: capa (poster) → abre vídeo (embed) ou galeria; selo "real time".
- **CTA:** "Quero um conteúdo assim".

## Página: Sobre (`/sobre`)
- **A dupla:** Lucy (Storymaker) e Érica (marketing + fotografia/design).
- **História da GueZ:** nasceu em 2026 de um sonho; propósito de contar histórias
  com alma (reaproveitar textos dos posts de lançamento).
- **Como trabalhamos:** do briefing à entrega (incl. real time).
- **CTA:** "Vamos conversar".

## Página: Contato (`/contato`)
- **Formulário:** nome, e-mail, telefone/WhatsApp, tipo de projeto (plano mensal /
  evento real time / avulso), mensagem + **checkbox de consentimento LGPD**.
- **Canais diretos:** Instagram (@guez.com.br), e-mail (guezagenciamkt@gmail.com),
  WhatsApp/direct.
- Estados do formulário: enviando · sucesso · erro (ver `05_FLUXOS/`).

## Página: Política de Privacidade (`/privacidade`)
- Base LGPD para o formulário — ver `docs/11_SEGURANCA/`.

---

## Regras de conteúdo
- Fidelidade à marca: estética craft/terrosa, abelha, tom caloroso (`02_DESIGN_SYSTEM/`).
- Cor/fonte/logo sempre via tokens — nada hardcodado.
- Vídeo com `poster` + lazy-load; foto em formato moderno (WebP/AVIF).
- Toda seção tem CTA ou leva à próxima. Local: reforçar Novo Hamburgo/Vale do Sinos (SEO local).

## Ligações
- `docs/00_VISAO/` · `docs/05_FLUXOS/` (contato) · `docs/02_DESIGN_SYSTEM/` · `docs/09_BACKLOG/`.
