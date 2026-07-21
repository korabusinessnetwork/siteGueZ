# Diretrizes de Desenvolvimento — GueZ

> Constituição do projeto. Site institucional + portfólio da GueZ, estúdio
> boutique de marketing audiovisual (dupla feminina). Fonte de verdade viva —
> corrija quando a realidade mudar.

## Princípio nº 1 — INTUITIVIDADE (inegociável)

O foco principal do site é: **o visitante entende em segundos o que a GueZ faz,
vê a prova (portfólio) e sabe como contratar.** O diferencial-âncora — **foto e
vídeo em tempo real em eventos** — precisa aparecer logo no topo. Em qualquer
decisão, priorize clareza acima de conveniência técnica.

- Mensagem principal compreensível sem rolar: quem é a GueZ + o diferencial.
- Caminho para contato sempre visível (CTA fixo / WhatsApp).
- Estados sempre visíveis: carregando, erro, vazio e sucesso (form de contato).
- Prevenção de erro > mensagem de erro.
- Consistência total com o design system (`docs/02_DESIGN_SYSTEM/`).
- **Mobile-first** — a maioria chega pelo Instagram/link na bio.

## Fonte de verdade (leia antes de qualquer mudança relevante)

- **`memory/`** — identidade, decisões, padrões, aprendizados e restrições.
  Consultar antes de decisões de produto/arquitetura.
- **`docs/`** — estrutura de páginas e conteúdo (`03_REGRAS_DE_NEGOCIO/`), design
  system (`02_DESIGN_SYSTEM/`), fluxos (`05_FLUXOS/`), ADRs (`08_DECISOES/`) e o
  plano de segurança (`11_SEGURANCA/`).
- **ADR-001** define a stack; ADRs em `docs/08_DECISOES/` registram as decisões.
- Se doc e código conflitarem, a documentação prevalece — e deve ser corrigida
  quando estiver errada.
- **Produto = single-tenant, marca única (GueZ).** Não há multi-tenant nem
  white-label (ver ADR-002). Ainda assim, **mantenha CSS/tema desacoplado da
  marcação**: cores, fontes e logo saem de tokens do design system, nunca
  hardcodados no meio do JSX — facilita aplicar a identidade visual quando chegar.

## Processo de trabalho

1. **Document-first** — a estrutura/conteúdo vive em `docs/` antes de virar código.
2. **Planejar antes de executar** — escopo fechado, sem retrabalho.
3. Decisão de arquitetura relevante → **ADR** em `docs/08_DECISOES/`.
4. Validar no fim — revisar, rodar build e checar em mobile.

## Custo — priorizar o gratuito (bootstrap / pré-receita)

Enquanto o projeto está em construção, **use sempre meios gratuitos**. Toda
implementação que exija investimento é **adiada por padrão**, salvo decisão
explícita da GueZ. Ao esbarrar em algo pago (domínio, form premium, host de
vídeo), apresente custo, alternativa gratuita, impacto e recomendação.
Detalhes em `memory/restrictions.md`.

## Segurança (obrigatório)

- **Nunca** hardcodar chaves/tokens de serviços — usar `import.meta.env.VITE_*`.
- **Sempre** validar inputs do formulário antes de enviar.
- **Nunca** logar/expor dados do formulário (nome, e-mail, telefone) publicamente
  nem passar por parâmetro de URL.
- Formulário só envia com **consentimento LGPD** marcado; Política de Privacidade
  acessível. Plano completo em `docs/11_SEGURANCA/`.

## Padrões de código

- Componentes React em arquivos separados; um componente por arquivo.
- Estilo com Tailwind + tokens do design system; **CSS/tema desacoplado do JSX**.
- Nomes de domínio em português (`enviarContato`), padrões técnicos em inglês
  (`handleSubmit`).
- Tratar erros de chamadas externas (form) com `try/catch` ou checagem de `.error`.
- Mídia otimizada: lazy-load, formatos modernos, `poster` em vídeo.
- Rodar `npm test` antes de commitar; funções puras nascem com teste.

## Stack

- React + Vite
- Tailwind CSS (design tokens desacoplados)
- React Router (rotas do site)
- Formulário de contato via serviço externo (sem backend próprio — ver ADR-003)
- Deploy: Vercel
- (Sem banco de dados por ora)
