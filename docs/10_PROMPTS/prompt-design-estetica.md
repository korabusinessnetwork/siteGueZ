# Prompt — Design/estética do site GueZ (PREENCHIDO)

> Prompt pronto para colar no Claude (design). Já preenchido com a identidade
> real da GueZ (mapeada do Instagram @guez.com.br). **Anexe:** o logo (SVG/PNG),
> prints da paleta/stories e 2–4 trabalhos reais (Casa Coffee Colab, H.Maria Joias)
> para o design amostrar as cores exatas e respeitar a mídia real.
> Data: 2026-07-21

---

```
============================ INÍCIO DO PROMPT ============================

Você é um diretor de arte + designer de produto. Desenhe a ESTÉTICA e o DESIGN
SYSTEM de um site institucional + portfólio e entregue mockups visuais das
páginas. A marca JÁ TEM identidade visual (existe no Instagram) — sua tarefa é
ser FIEL a ela e traduzi-la para web, não criar uma estética nova. Mobile-first.

## SOBRE A MARCA (fatos fixos)
- Marca: GueZ | Marketing e Social Media — agência boutique de marketing e mídias
  sociais, de Novo Hamburgo / Vale do Sinos (RS). Marca jovem, local, calorosa.
- Quem é: DUPLA FEMININA — Lucy Freitas (storymaker) e Érica Schmidt (marketing +
  fotografia/design). Trabalho autoral, próximo, de baixa escala.
- Símbolo/mascote: uma ABELHA 🐝 (está no logo e é elemento recorrente da marca).
- Coração da marca: STORYTELLING — "toda marca tem uma história que merece ser
  contada de verdade, com alma e propósito". Vendem narrativa, não só posts.
- Serviço-assinatura / diferencial: COBERTURA DE EVENTOS EM TEMPO REAL (foto e
  vídeo entregues durante o próprio evento).
- Tom: jovem, feminino, sonhador e caloroso no emocional; claro e objetivo na venda.

## ESTÉTICA A SEGUIR (fidelidade — muito importante)
- Estilo "DIÁRIO CRIATIVO / CRAFT ARTESANAL": cara de caderno de recortes, washi
  tape, clipes, fotos coladas, selos/carimbos. Pessoal, quente, feito à mão.
- Logo: SELO CIRCULAR tipo carimbo, abelha estilizada no topo, wordmark "GUEZ."
  em serifada elegante, subtítulo "Marketing e Mídias Sociais".
- PALETA (tons terrosos e quentes) — amostre os HEX EXATOS do logo/prints anexos:
  * base creme/bege
  * dourado/mostarda (secundária)
  * marrom terroso (texto/neutro escuro)
  * LARANJA QUEIMADO (cor de destaque / CTA)
- Tipografia: SERIFADA elegante (com toque manuscrito/assinatura nos acentos) para
  marca e títulos; SANS-SERIF limpa para o corpo. Sugira os pares finais.

## O QUE NÃO FAZER
- NÃO dark/cinematográfico, NÃO corporativo/frio, NÃO tech-neon/glitch.
- Não invente uma paleta nova: parta das cores terrosas reais da marca.
- A UI é discreta e calorosa — quem brilha é a mídia (foto/vídeo) e a história.

## ESTRUTURA DO SITE (desenhe estas páginas/seções)
Sitemap: Home · Serviços · Portfólio · Sobre · Contato · Política de Privacidade.

Globais (todas as páginas):
- Header fixo: logo + nav (Serviços, Portfólio, Sobre, Contato) + CTA "Fale com a gente".
- Botão flutuante de WhatsApp/direct.
- Footer: mini-pitch + navegação + Instagram (@guez.com.br) + e-mail
  (guezagenciamkt@gmail.com) + "Novo Hamburgo/RS" + link Privacidade.

HOME (long-scroll), nesta ordem:
1. Hero — headline âncora "Toda marca tem uma história que merece ser contada de
   verdade" + subheadline (agência de social media boutique + real time em
   eventos) + CTA "Fale com a gente" e "Ver serviços"; fundo com foto/reel forte.
2. Quem é a GueZ (resumo) — a dupla, tom pessoal.
3. Serviços (resumo) — cards: Planos mensais · Real time de eventos (destaque) · Avulsos.
4. Diferencial real time — 3 passos: captamos → editamos no local → entregamos durante o evento.
5. Portfólio/cases em destaque — grid com selo nos trabalhos de real time.
6. Depoimentos — falas calorosas de clientes.
7. CTA final + formulário de contato curto.

SERVIÇOS:
- 3 planos mensais comparáveis em cards estilo "cartão de recorte": GueZ Light,
  GueZ Basic, GueZ Plus.
- Bloco de destaque: Cobertura de eventos em REAL TIME (foto e vídeo).
- Avulsos: Criação (posts, edição de vídeo, stories animado, capa de destaques,
  pack de artes/carrossel) e Estratégia/Presença (legendas, bio otimizada, reels+roteiro).

PORTFÓLIO: grid filtrável (Real time/Eventos · Social · Foto · Vídeo), player com
poster; cases-âncora Casa Coffee Colab e H.Maria Joias.
SOBRE: a dupla (Lucy e Érica) + história da marca + como trabalham.
CONTATO: formulário (nome, e-mail, WhatsApp, tipo de projeto, mensagem +
consentimento LGPD) + Instagram + e-mail + WhatsApp.

## RESTRIÇÕES TÉCNICAS (será implementado em React + Tailwind)
- Mobile-first e totalmente responsivo.
- Acessibilidade: contraste mínimo AA (checar laranja queimado em botões), foco
  visível, alvos de toque confortáveis.
- Performance de mídia: prever poster em vídeo e imagens leves.
- Cores/tipografia como TOKENS reutilizáveis (nada hardcodado).

## ENTREGAS QUE QUERO
1. Direção visual (moodboard curto) fiel à estética craft/terrosa da GueZ.
2. Design system:
   - Paleta (hex + uso + contraste) baseada nas cores reais da marca, incl. estados.
   - Tipografia (fontes, escala mobile/desktop, pesos).
   - Tokens de espaçamento, raio de borda (cantos suaves, ar de carimbo), sombras leves.
   - Elementos craft reutilizáveis (papel, washi tape, carimbo, abelha) como assets.
   - Estilo de componentes: botões, cards de plano/serviço, card de portfólio,
     formulário e seus estados (normal/enviando/sucesso/erro).
3. Mockups visuais:
   - Home completa em MOBILE e DESKTOP.
   - Serviços (com os 3 planos), Portfólio e Contato em mobile.
4. Iconografia coerente para serviços e passos (estilo que combine com a abelha).

Se faltar algum dado exato (ex.: hex fino, fonte), PROPONHA a opção mais coerente
com a estética descrita e diga claramente o que assumiu. Mantenha tudo fiel:
boutique, feminina, calorosa, craft, terrosa — nunca dark/corporativa.

============================= FIM DO PROMPT =============================
```

---

## Checklist antes de enviar
- [ ] Anexei o logo (de preferência SVG/PNG em alta) e prints da paleta/stories.
- [ ] Anexei 2–4 trabalhos reais (Casa Coffee Colab, H.Maria Joias).
- [ ] (Opcional) Confirmei os entregáveis dos planos Light/Basic/Plus.
- [ ] Depois de receber, trago os tokens finais para `docs/02_DESIGN_SYSTEM/`.
