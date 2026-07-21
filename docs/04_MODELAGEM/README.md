# 04 — MODELAGEM · GueZ

> **N/A para a v1 — não há banco de dados** (site estático, single-tenant, sem
> backend; ver ADR-002 e ADR-003). Este documento fica como "modelo de conteúdo".

## Modelo de conteúdo (dados que o site exibe)
Na v1 estes dados vivem como constantes em `src/constants/` (sem CMS/DB). Formato
lógico para orientar a implementação:

- **Serviço** — `{ id, nome, resumo, descricao, incluso[], destaque? }`
- **Item de portfólio** — `{ id, titulo, tipo (evento|video|foto|social), capa,
  midiaUrl (embed), tempoReal? (bool), cliente/evento }`
- **Depoimento** — `{ id, texto, autor, contexto (evento/marca) }`
- **Contato/lead** — não é armazenado no site; segue direto ao provedor de
  formulário (ver `05_FLUXOS/`). Sem persistência local.

## Quando isto deixa de ser N/A
Se um dia entrar CMS para o portfólio ou área do cliente, criar schema real +
migrations aqui, com novo ADR. Até lá, **este é o único "modelo" necessário**.
