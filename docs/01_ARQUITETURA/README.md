# 01 — ARQUITETURA · GueZ

> Visão técnica do site. Decisões formais em `08_DECISOES/` (ADRs).

## Tech stack
- **React + Vite** — SPA leve, build rápido.
- **Tailwind CSS** — estilização com design tokens desacoplados do JSX.
- **React Router** — rotas do site (`/`, `/servicos`, `/portfolio`, `/sobre`,
  `/contato`, `/privacidade`).
- **Formulário de contato:** serviço externo (Formspree / Web3Forms / Netlify
  Forms) — **sem backend próprio** (ver ADR-003).
- **Deploy:** Vercel (site estático, HTTPS e CDN no tier gratuito).
- **Sem banco de dados** por ora. Justificativas: ADR-001 (stack), ADR-003 (form).

## Modelo de arquitetura
SPA **estática** hospedada em CDN. Não há servidor de aplicação nem estado
persistido do lado do servidor. O único ponto de saída de dados é o envio do
formulário para o serviço externo, isolado numa **camada de serviço** em
`src/lib/` (nunca chamado direto do componente) — trocar de provedor mexe só ali.

```
Visitante ──> Vercel (CDN, HTML/JS/CSS estático)
                   │
                   └─ formulário ──> serviço externo de e-mail  ──> caixa da GueZ
```

## Estrutura de pastas (`src/`)
```
src/
├── components/     UI por seção (Hero, ServicosGrid, PortfolioGrid, ...) + shared/
├── pages/          Uma por rota (Home, Servicos, Portfolio, Sobre, Contato, Privacidade)
├── context/        Estado global leve (ex.: tema)
├── hooks/          Hooks reutilizáveis
├── lib/            Camada de serviços (ex.: enviarContato) — isola o form externo
├── constants/      Dados de conteúdo (serviços, depoimentos) enquanto não há CMS
├── styles/         Tailwind + tokens; CSS desacoplado do JSX
└── utils/          Funções puras (com teste)
```

## Mídia e hospedagem (ver ADR-004)
- **Vídeo → embed por link** (YouTube padrão; Vimeo se quiserem player mais
  limpo). **Não** hospedar arquivos de vídeo próprios nem usar banco/storage para
  isso. Item de portfólio guarda só a URL de embed + capa (poster).
- **Fotos → assets estáticos** no repositório, servidas pela Vercel (CDN grátis);
  WebP/AVIF, `srcset`, dimensões explícitas. Se crescer muito → Cloudinary free.
- **Sem banco de dados na v1** — conteúdo em `src/constants/` (ver `04_MODELAGEM/`).

## Mídia e performance (definição de pronto)
- Vídeo: lazy-load, `poster`, autoplay silencioso só no hero; embed carregado sob demanda.
- Imagem: WebP/AVIF, `srcset`, dimensões explícitas (evita layout shift).

## SEO & analytics
- Meta tags + Open Graph por página (título, descrição, imagem de share).
- `sitemap.xml` + `robots.txt`.
- Analytics gratuito e privacy-friendly (ex.: Plausible/Umami) — adiado até deploy.

## Ambientes e domínio
- **dev:** `npm run dev` (Vite local).
- **prod:** Vercel (deploy por push), CDN + HTTPS no tier gratuito.
- **Domínio:** começar em `guez.vercel.app` (grátis); conectar `guez.com.br`
  quando registrado (registro.br ~R$40/ano — único item pago; ver ADR-004).
- Sem staging dedicado na v1 (preview deploys da Vercel cobrem).

## Ligações
- `08_DECISOES/` — ADRs (stack, single-tenant, sem backend).
- `03_REGRAS_DE_NEGOCIO/` — o que cada página renderiza.
- `11_SEGURANCA/` — LGPD do formulário, secrets em env.
