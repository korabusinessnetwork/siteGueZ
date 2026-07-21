/** @type {import('tailwindcss').Config} */
// Tokens do design system — ver docs/02_DESIGN_SYSTEM/README.md (ADR-005).
// Nada de cor/fonte hardcodada no JSX: use sempre estes tokens.
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        creme: '#F4ECDB',        // fundo principal
        papel: '#FBF6EC',        // cards, inputs, superfícies elevadas
        'creme-escuro': '#EAD9B8', // fundo alternativo / blocos suaves
        dourado: '#D6A24A',      // secundária (selos, ícones, CTA sobre escuro)
        'dourado-escuro': '#B5822F',
        'laranja-marca': '#C24E2C',
        'laranja-cta': '#A83E1D',       // botões sólidos (contraste AA)
        'laranja-cta-hover': '#8F3316',
        marrom: '#3B2A1D',       // texto principal / fundo escuro
        'marrom-2': '#6B5642',   // texto secundário
        'marrom-label': '#8A6F4E', // eyebrows, legendas
        'creme-sobre-escuro': '#E7D9BE', // texto sobre fundo marrom
        'creme-rodape': '#C9B695',
        linha: '#DCC9A3',        // bordas / divisores
      },
      fontFamily: {
        display: ['Georgia', 'serif'],
        sans: ['"Work Sans"', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        sm: '8px',
        md: '14px',
        lg: '22px',
        pill: '999px',
      },
      boxShadow: {
        soft: '0 8px 24px rgba(59,42,29,.14)',
      },
    },
  },
  plugins: [],
}
