// Serviços da GueZ. Preços "sob consulta" (não fornecidos) — ver docs/09_BACKLOG.
export const PLANOS = [
  {
    nome: 'GueZ Light',
    resumo: 'Para quem está começando a organizar a presença digital',
    itens: ['8 artes/mês', 'Stories quinzenais', 'Bio e destaques'],
    preco: 'Investimento sob consulta',
    destaque: false,
  },
  {
    nome: 'GueZ Basic',
    resumo: 'Presença consistente com estratégia mensal',
    itens: [
      '12 artes/mês + carrossel',
      'Stories semanais',
      '1 reels/mês com roteiro',
      'Relatório mensal',
    ],
    preco: 'Investimento sob consulta',
    destaque: true, // MAIS PROCURADO
  },
  {
    nome: 'GueZ Plus',
    resumo: 'Para marcas que querem presença completa e ativa',
    itens: [
      '20 artes/mês + carrossel',
      'Stories diários',
      '4 reels/mês com roteiro',
      'Acompanhamento semanal',
      'Prioridade em real time de eventos',
    ],
    preco: 'Investimento sob consulta',
    destaque: false,
  },
]

export const REAL_TIME_PASSOS = [
  'Captamos os melhores momentos ao vivo',
  'Editamos no local, em tempo real',
  'Entregamos durante o próprio evento',
]

export const AVULSOS = [
  {
    grupo: 'Criação',
    itens: ['Posts avulsos', 'Edição de vídeo', 'Stories animado', 'Capa de destaques', 'Pack de artes / carrossel'],
  },
  {
    grupo: 'Estratégia & presença',
    itens: ['Legendas', 'Bio otimizada', 'Reels + roteiro'],
  },
]

// Resumo usado na Home
export const SERVICOS_RESUMO = [
  { titulo: 'Planos mensais', texto: 'Presença constante no social media, do Light ao Plus.', destaque: false },
  { titulo: 'Real time de eventos ✦', texto: 'Foto e vídeo entregues durante o próprio evento.', destaque: true },
  { titulo: 'Avulsos', texto: 'Posts, vídeos, artes e estratégia sob demanda.', destaque: false },
]
