# ADR-002: Single-tenant, marca única (sem multi-tenant)

## Status
Aceito · 2026-07-20

## Contexto
O padrão de fundação recomenda modelar multi-tenant/white-label desde a linha 1.
Porém este projeto é o **site da própria GueZ** — uma única marca, sem intenção
de revender o site como template para clientes. Multi-tenant aqui seria
complexidade sem retorno.

## Decisão
Construir **single-tenant, marca única**. Não haverá `tenant_id`, isolamento por
tenant nem tema por cliente.

## Ressalva (o que mantemos do princípio)
Mesmo single-tenant, **cores/fontes/logo saem de tokens do design system**,
nunca hardcodados no JSX. Isso mantém o CSS desacoplado da marcação e facilita
aplicar/ajustar a identidade visual quando os assets chegarem.

## Alternativas consideradas
- **Multi-tenant desde já:** overhead de modelagem e RLS sem caso de uso real.
- **White-label:** só faria sentido se a GueZ fosse revender o site — não é o caso.

## Consequências
- Arquitetura e segurança mais simples (sem RLS, sem isolamento).
- Se um dia a GueZ quiser oferecer sites-template a clientes, será um novo ADR
  e provável refatoração — decisão consciente e documentada.

## Referências
- `docs/11_SEGURANCA/README.md` · `memory/restrictions.md`
