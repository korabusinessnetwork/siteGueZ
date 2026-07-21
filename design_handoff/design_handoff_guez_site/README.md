# Handoff: GueZ — Site institucional + portfólio (design system + mockups)

## Overview
Direção visual e design system para o site institucional/portfólio da GueZ | Marketing e Mídias Sociais (Novo Hamburgo/RS), fiel à estética já existente no Instagram da marca: diário criativo, tons terrosos, selo/carimbo circular. Inclui fundação de design system e mockups de Home (mobile + desktop), Serviços, Portfólio e Contato.

## About the Design Files
The `.dc.html` files in this bundle are **design references built in a proprietary internal prototyping format** (single self-contained HTML files with inline styles) — they are prototypes showing intended look, content and behavior, **not production code to copy directly**. The task is to **recreate these designs in the target codebase's environment** (per the project brief: React + Tailwind, deploy on Vercel) using that stack's own component patterns, not by embedding or lightly adapting the HTML. If no such stack exists yet in the target repo, set one up (React + Tailwind is what these designs were speced for).

Each file opens directly in a browser — open them to see the live rendering, inspect computed styles/colors via devtools, and read the inline `style="…"` attributes as the source of truth for exact values.

## Fidelity
**High-fidelity for design system/tokens (colors, type, spacing, radii, shadows, component states) — placeholder-fidelity for photography/video.** All copy (headlines, plan features, footer text, etc.) is final draft copy from the brief, ready to ship. All imagery is drag-and-drop placeholder slots (dashed-border boxes with a caption of what should go there) — the client has real photos/videos to drop in later; treat every placeholder as "swap for real asset here," not as final art direction for a photo.

**Assumption flagged:** exact hex codes and the font pairing were estimated from a screenshot of the brand's Instagram profile (no vector logo/brand file was provided). This is called out on-page in `DesignSystem.dc.html` — re-sample from the real logo file if/when available and adjust tokens minimally (the palette structure — 2 neutrals + gold + burnt orange — should hold).

## Screens / Views

### 1. Design System (`DesignSystem.dc.html`)
Reference sheet, single scrolling page, max-width 1120px centered on cream background.
- Moodboard: 4 placeholder image slots (caderno/washi tape, bastidores, still de real time, selo)
- Palette swatches with hex + usage + contrast notes (see Design Tokens below)
- Typography specimens (display/H1, H2, subheadline, body)
- Spacing/radius/shadow token visualizations
- Craft elements: stamp/seal badge, washi tape strip, paper card, logo placeholder
- Component specs: buttons (default/hover/secondary/disabled), plan card, portfolio card (video poster + play glyph + "REAL TIME" stamp), form field states (normal/focus/sending/success/error)

### 2. Home (`Home.dc.html`)
Two artboards side by side: **Mobile (390px)** and **Desktop (1440px)**, same content, different layout. A "Layout" tweak prop (`ambos`/`mobile`/`desktop`) toggles which artboard renders — implement as normal responsive CSS, not a runtime toggle.

Section order (both breakpoints):
1. **Header** (sticky): logo mark + "GueZ." wordmark (Georgia serif) + nav (Serviços, Portfólio, Sobre, Contato — desktop only) + "Fale com a gente" CTA pill.
2. **Hero**: full-bleed photo/reel placeholder, dark gradient scrim bottom-up, H1 "Toda marca tem uma história que merece ser contada de verdade", subheadline, two CTAs ("Fale com a gente" solid, "Ver serviços" outline).
3. **Quem é a GueZ**: intro line + two circular photo placeholders (Lucy Freitas – Storymaker, Érica Schmidt – Marketing & fotografia).
4. **Serviços (resumo)**: 3 cards — Planos mensais, **Real time de eventos** (dark card, visually distinct), Avulsos — each with 1-line description, link to Serviços page.
5. **Diferencial real time**: dark/cream card, 3 numbered steps (1 Captamos → 2 Editamos no local → 3 Entregamos durante o evento).
6. **Portfólio em destaque**: image-placeholder grid (2-up mobile, 4-up desktop), "REAL TIME" pill stamp on eligible cards, link to Portfólio page.
7. **Depoimentos**: 2 italic serif quote cards with client name.
8. **CTA final**: dark card, short 2-field contact capture (nome, WhatsApp/e-mail) + "Enviar" button, links through to full Contato page.
9. **Footer**: mini-pitch, nav links, @guez.com.br, guezagenciamkt@gmail.com, "Novo Hamburgo / RS", Política de Privacidade link.
10. **Floating WhatsApp button**: fixed bottom-right circular button (54px), simple chat-bubble glyph, links to `wa.me/<number>` (number is a placeholder — `5551999999999`).

### 3. Serviços (`Servicos.dc.html`, mobile mockup)
- Header/nav/footer as above (Serviços active state in nav).
- 3 plan cards: **GueZ Light**, **GueZ Basic** (marked "MAIS PROCURADO", terracotta border + ribbon), **GueZ Plus** — each with feature bullet list and "Investimento sob consulta" (no exact pricing was provided — placeholder copy, replace with real pricing).
- Real time highlight block: dark card, same 3-step diagram as Home, dedicated CTA "Pedir orçamento de real time".
- Avulsos: two chip-list groups — **Criação** (Posts avulsos, Edição de vídeo, Stories animado, Capa de destaques, Pack de artes/carrossel) and **Estratégia & presença** (Legendas, Bio otimizada, Reels + roteiro).

### 4. Portfólio (`Portfolio.dc.html`, mobile mockup)
- Filter chip row: Todos / Real time · Eventos / Social / Foto / Vídeo — **functional filter, implemented with real interactive state** (click a chip, grid re-filters). Recreate this logic natively (not by porting the prototype's internal state mechanism).
- 2-column card grid: image/poster placeholder, play-glyph overlay on video items, "REAL TIME" pill on real-time items, title + tag caption.
- 8 sample items seeded, tagged across the 4 categories; anchor cases **Casa Coffee Colab** and **H.Maria Joias** appear multiple times across categories (see Assets below).

### 5. Contato (`Contato.dc.html`, mobile mockup)
- Header/nav/footer as above.
- Quick contact links: Instagram @guez.com.br, e-mail, "Novo Hamburgo / RS".
- Form: Nome, E-mail, WhatsApp, Tipo de projeto (select: Plano mensal / Cobertura em real time / Trabalho avulso / Ainda não sei), Mensagem (textarea), LGPD consent checkbox, Submit button.
- **Form has a working state-machine demo**: submit → "Enviando mensagem…" (1.1s) → alternates success/error on each attempt, with a "Tentar de novo" reset on error. Recreate the 4 visual states (idle/sending/success/error) — the real app should wire this to an actual submit handler/API instead of the demo's alternating logic.

## Interactions & Behavior
- All nav links between the 4 pages are real relative links (`./Home.dc.html`, `./Servicos.dc.html`, etc.) — map these to real routes (`/`, `/servicos`, `/portfolio`, `/contato`) in the target app. "Sobre" and "Privacidade" are stubbed (`href="#"`) — no mockup was built for them yet.
- Portfolio filter chips: click swaps active chip style (solid terracotta vs. outline) and filters the visible grid — no transition/animation was specced; a simple fade or none is fine.
- Contato submit: see form state machine above.
- Buttons: solid CTA darkens ~10% on hover (`#A83E1D` → `#8f3316`); outline buttons can get a subtle background tint on hover.
- No page-load or scroll animations were specced — keep motion minimal, consistent with the calm/warm tone.

## State Management
- **Portfolio**: `activeFilter: 'todos' | 'realtime' | 'social' | 'foto' | 'video'`, derives visible item list.
- **Contato**: `status: 'idle' | 'sending' | 'success' | 'error'`, plus real field state (name/email/whatsapp/project type/message/consent) which the prototype does not persist — wire to real form state + validation (required fields, LGPD checkbox required, e-mail format) in the real implementation.
- **Home**: no runtime state; the mobile/desktop split is a design-time toggle only, implement as CSS breakpoints.

## Design Tokens

### Colors
| Token | Hex | Usage |
|---|---|---|
| Creme base | `#F4ECDB` | Fundo principal |
| Papel claro | `#FBF6EC` | Cards, inputs, superfícies elevadas |
| Creme escuro | `#EAD9B8` | Fundo alternativo/backdrop, blocos de destaque suave |
| Dourado mostarda | `#D6A24A` | Secundária — selos, ícones, CTA em fundo escuro |
| Dourado escuro | `#B5822F` | Hover do dourado, bordas de estado de sucesso |
| Laranja queimado (marca) | `#C24E2C` | Cor de destaque da marca (decorativa, bordas, selos) |
| Laranja CTA (botão) | `#A83E1D` | Botões sólidos/CTA — versão ligeiramente mais escura para garantir contraste AA com texto creme |
| Laranja CTA hover | `#8f3316` | Hover de botão sólido |
| Marrom terroso | `#3B2A1D` | Texto principal, fundo escuro (header/footer/blocos dark) |
| Marrom secundário | `#6B5642` | Texto secundário/parágrafos |
| Marrom claro (label) | `#8a6f4e` | Eyebrows, legendas, metadados |
| Creme texto sobre escuro | `#E7D9BE` | Corpo de texto sobre fundo marrom |
| Linha/borda | `#DCC9A3` | Bordas de card, divisores |

Contrast notes: marrom `#3B2A1D` on creme `#F4ECDB` ≈ 11:1 (AAA). Creme `#FBF6EC` on CTA `#A83E1D` ≈ 5.2:1 (AA for text). Never use the mustard gold as text color on cream (≈1.8:1) — decorative/icon use only.

### Typography
- **Display/headings**: Georgia (serif) — H1 44px mobile / 52-64px desktop, H2 22-26px mobile / 26-30px desktop.
- **Body**: Work Sans (Google Fonts, weights 400/500/600/700) — body 14-16px, line-height 1.55-1.6.
- Assumption: user picked a "Georgia + Arial" pairing at the questions stage; Arial was swapped for **Work Sans** (same clean-grotesque feel, avoids an over-generic system font) — fine to substitute back to Arial/Helvetica if the client prefers zero web-font loading.

### Spacing
4 / 8 / 16 / 24 / 32 / 48px scale.

### Radius
sm 8px · md 14px · lg 22px · pill 999px (buttons/chips/stamps) · circle 50% (avatars, logo mark, seal).

### Shadows
Soft/warm only: `0 8px 24px rgba(59,42,29,.14)` general elevation; `0 20px 60px rgba(59,42,29,.22)` for full-page mockup frames (not needed in production, that's just this bundle's presentation chrome).

## Assets
- All photography/video is **placeholder** (drag-and-drop slot components in the prototype, captioned with what real asset belongs there — e.g. "foto: still de real time (evento)"). None of it is final art — request real photos/video from the client (hero reel, Lucy & Érica portraits, event/real-time stills, Casa Coffee Colab and H.Maria Joias case assets, testimonial context if any).
- No real logo file was provided — the circular "GueZ." seal/wordmark and the bee mascot are referenced only as a placeholder slot captioned "logo GueZ (selo)" / "logo". Get the vector logo from the client before shipping the header/footer mark.
- WhatsApp number is a placeholder (`5551999999999`) — replace with the real business number.
- No pricing was provided for the 3 monthly plans — cards currently say "Investimento sob consulta"; replace with real prices or a CTA-only pattern if pricing stays private.

## Files
- `DesignSystem.dc.html` — palette, type, tokens, craft elements, component states
- `Home.dc.html` — Home page, mobile (390px) + desktop (1440px) artboards
- `Servicos.dc.html` — Serviços page (mobile mockup)
- `Portfolio.dc.html` — Portfólio page (mobile mockup, working filter)
- `Contato.dc.html` — Contato page (mobile mockup, working form-state demo)
- `image-slot.js` — the placeholder-image web component used across all files (reference only for behavior — the real app needs real `<img>`/`<video>` elements, not this component)
