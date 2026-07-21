# 02 — DESIGN SYSTEM · GueZ

> ✅ **Tokens definidos** a partir do handoff de design (`design_handoff/`).
> Estética fiel à marca: "diário criativo", tons terrosos, selo/carimbo, abelha.
> Referência visual: os mockups `.dc.html` em `design_handoff/design_handoff_guez_site/`
> (protótipos — **não** código de produção; recriar em React + Tailwind).
>
> ⚠️ **Assunções a confirmar:** os HEX e o par tipográfico foram estimados de um
> print do Instagram (não houve arquivo vetor do logo). Ao receber o **logo
> vetorial**, re-amostrar as cores e ajustar minimamente — a estrutura da paleta
> (2 neutros + dourado + laranja queimado) deve se manter.

## Paleta (tokens)
| Token | Hex | Uso |
|-------|-----|-----|
| `creme-base` | `#F4ECDB` | Fundo principal |
| `papel-claro` | `#FBF6EC` | Cards, inputs, superfícies elevadas |
| `creme-escuro` | `#EAD9B8` | Fundo alternativo, blocos de destaque suave |
| `dourado` | `#D6A24A` | Secundária — selos, ícones, CTA sobre fundo escuro |
| `dourado-escuro` | `#B5822F` | Hover do dourado, borda de sucesso |
| `laranja-marca` | `#C24E2C` | Destaque da marca (decorativo, bordas, selos) |
| `laranja-cta` | `#A83E1D` | Botões sólidos/CTA (mais escuro p/ contraste AA) |
| `laranja-cta-hover` | `#8F3316` | Hover de botão sólido |
| `marrom` | `#3B2A1D` | Texto principal; fundo escuro (header/footer/blocos dark) |
| `marrom-secundario` | `#6B5642` | Texto secundário/parágrafos |
| `marrom-label` | `#8A6F4E` | Eyebrows, legendas, metadados |
| `creme-sobre-escuro` | `#E7D9BE` | Texto sobre fundo marrom |
| `linha` | `#DCC9A3` | Bordas de card, divisores |

**Contraste (regras):**
- Marrom `#3B2A1D` sobre creme `#F4ECDB` ≈ 11:1 (AAA) — texto padrão.
- Creme `#FBF6EC` sobre CTA `#A83E1D` ≈ 5.2:1 (AA) — texto de botão.
- ❌ **Nunca** usar o dourado mostarda como cor de texto sobre creme (≈1.8:1) —
  só decorativo/ícone.

## Tipografia
- **Display / títulos:** **Georgia** (serifada). H1 44px (mobile) / 52–64px
  (desktop); H2 22–26px (mobile) / 26–30px (desktop).
- **Corpo:** **Work Sans** (Google Fonts, pesos 400/500/600/700). Body 14–16px,
  line-height 1.55–1.6.
- Nota: pode-se trocar Work Sans por Arial/Helvetica se quiserem zero web-font.

## Espaçamento
Escala: **4 · 8 · 16 · 24 · 32 · 48** px.

## Raios
`sm 8px` · `md 14px` · `lg 22px` · `pill 999px` (botões/chips/selos) · `circle 50%` (avatares, selo, logo mark).

## Sombras (suaves/quentes)
- Elevação geral: `0 8px 24px rgba(59,42,29,.14)`.
- (A sombra `0 20px 60px …` do handoff é só a moldura de apresentação — não usar em produção.)

## Elementos craft (assets reutilizáveis)
Selo/carimbo circular, faixa de washi tape, textura de papel, mascote **abelha**.
Usar com parcimônia como detalhe — a mídia e a história é que brilham.

## Sugestão de mapeamento no Tailwind
Registrar os tokens em `tailwind.config` (`theme.extend.colors`, `fontFamily`,
`borderRadius`, `boxShadow`, `spacing`) com os nomes acima — **nada hardcodado no JSX**.

## Ligações
- `memory/identity.md` — marca e tom.
- `06_COMPONENTES/` — specs de componentes (botões, cards, formulário).
- `design_handoff/design_handoff_guez_site/DesignSystem.dc.html` — folha de referência visual.
