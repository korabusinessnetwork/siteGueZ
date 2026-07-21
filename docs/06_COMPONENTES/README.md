# 06 — COMPONENTES · GueZ

> Catálogo dos componentes de UI, baseado no handoff de design
> (`design_handoff/`). Tokens em `02_DESIGN_SYSTEM/`. Implementação em `src/`
> (React + Tailwind) — recriar a partir dos mockups, **não** copiar o HTML dos `.dc.html`.

## Globais
- **Header (sticky):** logo mark (selo) + wordmark "GueZ." (Georgia) + nav
  (Serviços, Portfólio, Sobre, Contato — nav visível no desktop) + CTA pill
  "Fale com a gente". Estado ativo no item da página atual.
- **Footer:** mini-pitch · nav · @guez.com.br · guezagenciamkt@gmail.com ·
  "Novo Hamburgo / RS" · link Política de Privacidade.
- **Botão WhatsApp flutuante:** fixo bottom-right, círculo 54px, glifo de balão,
  link `wa.me/<numero>` (número real a definir — placeholder `5551999999999`).

## Botões
- **Sólido (CTA):** fundo `laranja-cta` `#A83E1D`, texto creme; hover `#8F3316`.
- **Secundário (outline):** borda + texto marrom; hover com leve tint de fundo.
- **Desabilitado:** estado reduzido (sem hover).
- Raio `pill`.

## Card de plano (Serviços)
- Cara de "cartão de recorte" (papel claro, borda `linha`, raio `lg`).
- Título do plano (GueZ Light / Basic / Plus), lista de bullets, preço.
- **GueZ Basic** = destaque "MAIS PROCURADO" (borda terracota + ribbon).
- Preço: hoje "Investimento sob consulta" (sem preço fornecido — trocar quando definir).

## Card de portfólio
- Poster (imagem de capa do vídeo) + **glifo de play** em itens de vídeo.
- **Selo "REAL TIME"** (pill) nos itens de tempo real.
- Título + tag (categoria). Vídeo abre embed (YouTube/Vimeo — ver ADR-004).

## Filtro do portfólio
- Linha de chips: Todos / Real time · Eventos / Social / Foto / Vídeo.
- **Interativo:** clicar troca o chip ativo (sólido terracota × outline) e filtra
  o grid. Estado: `activeFilter: 'todos'|'realtime'|'social'|'foto'|'video'`.
- Transição simples (fade) ou nenhuma.

## Formulário (Contato) — máquina de estados
Campos: Nome · E-mail · WhatsApp · Tipo de projeto (select: Plano mensal /
Cobertura em real time / Trabalho avulso / Ainda não sei) · Mensagem · **checkbox
consentimento LGPD** (obrigatório) · Enviar.

Estados visuais (`status`): `idle → sending ("Enviando mensagem…") → success | error`
(com "Tentar de novo" no erro). **Validação real:** campos obrigatórios, formato
de e-mail, LGPD marcado. Wire ao envio real (serviço externo — ADR-003), não à
lógica alternada do protótipo.

## Seções da Home (organisms)
`Hero` (foto/reel full-bleed + scrim + H1 + 2 CTAs) · `QuemSomos` (2 avatares
circulares: Lucy/Storymaker, Érica/Marketing & fotografia) · `ServicosResumo`
(3 cards; "Real time" em card escuro distinto) · `DiferencialRealTime` (3 passos:
Captamos → Editamos no local → Entregamos durante o evento) · `PortfolioDestaque`
(grid 2-up mobile / 4-up desktop) · `Depoimentos` (2 quotes serifadas) ·
`CTAFinal` (card escuro, captura curta nome + contato) · `Footer`.

## Acessibilidade (mínimo)
Contraste AA (regras em `02_DESIGN_SYSTEM/`), foco visível, `alt` em imagem,
alvos de toque confortáveis, movimento mínimo.

## Ligações
- `02_DESIGN_SYSTEM/` — tokens.
- `03_REGRAS_DE_NEGOCIO/` — onde cada componente aparece.
- `design_handoff/design_handoff_guez_site/` — mockups de referência.
