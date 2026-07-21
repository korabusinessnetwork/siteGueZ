# Respostas do Intake — GueZ

> Fonte de verdade das respostas da entrevista de fundação.
> Data do intake: 2026-07-20 · Conduzido por: Matheus (com Claude)

## Bloco 1 — Produto e identidade
- **PRODUTO (nome + essência):** GueZ — estúdio boutique de marketing audiovisual, tocado por uma dupla feminina.
- **ESSENCIA (1 frase):** Conteúdo audiovisual autoral e humano, com um diferencial forte: foto e vídeo em **tempo real** durante eventos.
- **PROBLEMA que resolve:** Marcas e produtores de eventos precisam de conteúdo de alta qualidade entregue com agilidade — muitas vezes ainda durante o próprio evento — mas encontram ou grandes produtoras caras e impessoais, ou freelancers sem consistência.
- **PROPOSTA de valor / diferencial:** Trabalho excepcional em baixa escala (boutique, próximo, personalizado) + captação e **entrega em tempo real em eventos** (reels/stories/fotos prontos para publicar ainda no rolê).
- **Existe código ou é do zero?** Do zero.

## Bloco 2 — Público e escopo
- **PUBLICO_ALVO primário:** Marcas, negócios e produtores de eventos que valorizam conteúdo ágil, autoral e humano. `[revisar com a GueZ]`
- **PERSONAS (1-3):** (1) Produtor(a) de evento que precisa de cobertura + conteúdo em tempo real; (2) Marca/negócio local que quer presença audiovisual profissional; (3) Organizador de ativação/lançamento que precisa de material para publicar na hora. `[revisar]`
- **B2B / B2C / B2B2C:** Majoritariamente B2B (marcas e produtores). `[revisar]`
- **"Aha moment":** Ver, no portfólio, um conteúdo de evento captado E entregue no mesmo dia — perceber que dá pra ter isso sem grande produção.

## Bloco 3 — Multi-tenant e white-label
- **MULTI_TENANT:** single-definitivo — é o site da própria GueZ. Ver ADR-002.
- **WHITE_LABEL:** não — marca única.
- **PLANOS:** não se aplica (site institucional).

## Bloco 4 — Stack e arquitetura
- **STACK:** React + Vite + Tailwind CSS.
- **MODELO_ARQUITETURA:** A — SPA estática (sem backend próprio por ora). Formulário via serviço externo. Ver ADR-003.
- **TEM_UI:** sim.
- **DEPLOY:** Vercel.
- **SCHEMA_PATH:** n/a (sem banco por ora).
- **ENV_PREFIX:** `import.meta.env.VITE_*`
- **TEST_CMD:** `npm test` (Vitest recomendado — a configurar).

## Bloco 5 — Segurança e compliance
- **Trata dado pessoal?** Só o básico do formulário de contato (nome, e-mail, telefone, mensagem).
- **COMPLIANCE:** LGPD (consentimento + política de privacidade).
- **Isolamento entre clientes:** n/a (single-tenant).

## Bloco 6 — Custo
- **FASE_CUSTO:** bootstrap / pré-receita — tudo em tier gratuito por padrão.
- **Serviços pagos aprovados:** nenhum. (Domínio e serviço de formulário podem virar itens pagos — decidir depois.)

## Bloco 7 — Design
- **Identidade visual definida?** Em elaboração — assets (logo, cores, tipografia) chegam em seguida. **Design System fica stub até lá.**
- **Referências / tom visual:** Próximo, humano, ágil, autoral, feminino. **NÃO** cinematográfico/corporativo pesado.
- **Contexto de uso crítico:** Mobile-first (tráfego vem muito de Instagram/link na bio); vídeo/foto em destaque.
- **PRINCIPIO_N1:** INTUITIVIDADE — o visitante entende em segundos o que a GueZ faz e como contratar.

## Roadmap inicial
- **FASE_ATUAL:** Fundação + estrutura do site (institucional + portfólio).
- **Próximas fases:** (1) Identidade visual → Design System; (2) Conteúdo real; (3) Build front-end; (4) Deploy; (5) SEO + analytics.
