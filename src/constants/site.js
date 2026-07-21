// Dados institucionais da GueZ. Fonte: memory/identity.md.
export const SITE = {
  nome: 'GueZ',
  wordmark: 'GueZ.',
  tagline: 'Marketing e mídias sociais boutique, de Novo Hamburgo para o mundo — histórias contadas de verdade.',
  local: 'Novo Hamburgo / RS',
  email: 'guezagenciamkt@gmail.com',
  instagram: 'guez.com.br',
  instagramUrl: 'https://instagram.com/guez.com.br',
  // Número real a definir (placeholder). Pode vir de VITE_WHATSAPP.
  whatsapp: import.meta.env.VITE_WHATSAPP || '5551999999999',
}

export const whatsappUrl = (msg) =>
  `https://wa.me/${SITE.whatsapp}${msg ? `?text=${encodeURIComponent(msg)}` : ''}`

export const NAV = [
  { to: '/servicos', label: 'Serviços' },
  { to: '/portfolio', label: 'Portfólio' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/contato', label: 'Contato' },
]
