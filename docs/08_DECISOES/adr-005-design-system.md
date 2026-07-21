# ADR-005: Adoção do design system do handoff + par tipográfico

## Status
Aceito · 2026-07-21

## Contexto
Recebemos um handoff de design (`design_handoff/`) fiel à estética da marca no
Instagram: paleta terrosa, selo/carimbo, abelha, estética "diário criativo".
Inclui tokens (cores, tipografia, espaçamento, raios, sombras), specs de
componentes e mockups de Home (mobile+desktop), Serviços, Portfólio e Contato.

Ressalva do próprio handoff: **os HEX e o par de fontes foram estimados de um
print do Instagram** (não houve arquivo vetor do logo).

## Decisão
1. Adotar os **tokens do handoff** como base do design system (registrados em
   `docs/02_DESIGN_SYSTEM/`), mapeados no `tailwind.config` (nada hardcodado no JSX).
2. **Tipografia:** Georgia (display/títulos) + Work Sans (corpo, Google Fonts).
   Substituível por Arial/Helvetica se preferirem zero web-font.
3. Os `.dc.html` são **referência**, não código de produção — recriar em
   React + Tailwind com os padrões da própria stack.
4. **Re-amostrar as cores** a partir do logo vetorial quando disponível, ajustando
   os tokens minimamente (a estrutura da paleta se mantém).

## Alternativas consideradas
- **Portar o HTML dos mockups direto:** rejeitado — protótipo com estilos inline,
  não escala nem segue os padrões de componente da stack.
- **Arial/Helvetica no corpo:** válido (zero web-font), mas Work Sans dá um ar
  menos genérico mantendo a legibilidade — default por ora.

## Consequências
- Build já começa com paleta, tipografia e componentes definidos.
- Dependência aberta: **logo vetorial** (para re-amostrar hex e usar o selo/abelha
  reais no header/footer) e **assets reais** (fotos/vídeos, hoje placeholders).
- Preço dos planos não foi fornecido — cards usam "Investimento sob consulta".

## Referências
- `docs/02_DESIGN_SYSTEM/README.md` · `docs/06_COMPONENTES/README.md`
- `design_handoff/design_handoff_guez_site/README.md`
