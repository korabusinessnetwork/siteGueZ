# 11 — SEGURANÇA · GueZ

> Plano de segurança do site. Escopo enxuto: site estático + um formulário de
> contato. Sem banco, sem login, sem dado financeiro.

## Modelo de ameaças (proporcional ao risco)
Site estático em CDN tem superfície pequena. Riscos relevantes:
- **Vazamento de dados do formulário** (nome, e-mail, telefone) → mitigar com
  serviço de envio confiável + HTTPS + sem log público.
- **Spam / abuso do formulário** → honeypot + rate limit do provedor + (se
  preciso) captcha do próprio serviço. **Não** implementar captcha que exija
  resolver desafios de bot manualmente.
- **Chave do serviço de formulário exposta** → manter em env var, nunca no repo.

## Gestão de secrets
- Chaves/endpoints de serviço só em `import.meta.env.VITE_*` e no painel da Vercel.
- **Nunca** commitar `.env`. Versionar apenas `.env.example` (sem valores reais).
- Atenção: variáveis `VITE_*` vão para o bundle público — usar só chaves que
  podem ser públicas (form endpoints costumam ser). Nada sensível no front.

## LGPD — formulário de contato (obrigatório)
- **Consentimento explícito:** checkbox não pré-marcada no envio, com link para a
  Política de Privacidade.
- **Finalidade declarada:** "usamos seus dados apenas para responder este contato".
- **Minimização:** pedir só o necessário (nome, contato, mensagem).
- **Direito de exclusão:** canal para o titular pedir remoção (e-mail de contato).
- **Sem dado sensível** e **sem dado de menores**.
- Política de Privacidade publicada em `/privacidade`.

## Multi-tenant / RLS
- **N/A** — single-tenant, sem banco de dados (ver ADR-002 e ADR-003).

## Checklist por release
- [ ] Nenhum secret hardcodado no código.
- [ ] `.env` fora do versionamento; `.env.example` atualizado.
- [ ] HTTPS ativo (Vercel) e headers básicos de segurança.
- [ ] Formulário: consentimento LGPD presente e funcional.
- [ ] Política de Privacidade acessível e linkada no form e no footer.
- [ ] Validação de inputs do formulário antes do envio.

## Ligações
- `memory/restrictions.md` — restrição legal (LGPD) prioritária.
- `docs/05_FLUXOS/` — fluxo do formulário.
- `CLAUDE.md` — regras de segurança do código.
