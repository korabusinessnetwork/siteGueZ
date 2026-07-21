// Itens do portfólio. Imagens/vídeos ainda são placeholders; trocar por reais.
//
// PARA PLUGAR UM VÍDEO que toca DENTRO do site: preencha `videoUrl` — o card
// vira um play que abre o vídeo num modal (ver src/lib/videoEmbed.js + ADR-004):
//   videoUrl: '/videos/casa-coffee.mp4'      (arquivo próprio → melhor, toca nativo)
//   videoUrl: 'https://youtu.be/XXXXXXXXXXX' (YouTube, toca inline)
//   videoUrl: 'https://vimeo.com/123456789'  (Vimeo, toca inline)
// Arquivo próprio: coloque o .mp4 em public/videos/ e use o caminho '/videos/...'.
// NÃO use link do Instagram: o embed do IG não toca aqui, redireciona pra fora.
// Deixe '' (vazio) enquanto não houver vídeo — o card fica só com o poster.
export const FILTROS = [
  { id: 'todos', label: 'Todos' },
  { id: 'realtime', label: 'Real time / Eventos' },
  { id: 'social', label: 'Social' },
  { id: 'foto', label: 'Foto' },
  { id: 'video', label: 'Vídeo' },
]

export const PORTFOLIO = [
  { id: 1, titulo: 'Casa Coffee Colab', tag: 'Real time · Evento', cat: 'realtime', isVideo: true, isRealtime: true, placeholder: 'poster: evento Casa Coffee Colab', videoUrl: '' },
  { id: 2, titulo: 'H.Maria Joias', tag: 'Social · Feed', cat: 'social', isVideo: false, isRealtime: false, placeholder: 'foto: feed H.Maria Joias', videoUrl: '' },
  { id: 3, titulo: 'H.Maria Joias', tag: 'Foto de produto', cat: 'foto', isVideo: false, isRealtime: false, placeholder: 'foto: still de joia', videoUrl: '' },
  { id: 4, titulo: 'Casa Coffee Colab', tag: 'Vídeo institucional', cat: 'video', isVideo: true, isRealtime: false, placeholder: 'poster: vídeo institucional', videoUrl: '' },
  { id: 5, titulo: 'Aniversário 15 anos', tag: 'Real time · Evento', cat: 'realtime', isVideo: true, isRealtime: true, placeholder: 'poster: festa de 15 anos', videoUrl: '' },
  { id: 6, titulo: 'Ensaio de marca', tag: 'Foto', cat: 'foto', isVideo: false, isRealtime: false, placeholder: 'foto: ensaio de marca', videoUrl: '' },
  { id: 7, titulo: 'Bastidores GueZ', tag: 'Social · Reels', cat: 'social', isVideo: true, isRealtime: false, placeholder: 'poster: bastidores', videoUrl: '' },
  { id: 8, titulo: 'Casamento ao vivo', tag: 'Real time · Evento', cat: 'realtime', isVideo: true, isRealtime: true, placeholder: 'poster: casamento real time', videoUrl: '' },
]

// Destaques da Home. `videoUrl` funciona igual ao do PORTFOLIO acima: com URL
// válida o card vira play → abre no modal; vazio ('') fica só com o poster.
export const PORTFOLIO_DESTAQUE = [
  { id: 1, titulo: 'Casa Coffee Colab', isRealtime: true, placeholder: 'Casa Coffee Colab', videoUrl: '' },
  { id: 2, titulo: 'H.Maria Joias', isRealtime: false, placeholder: 'H.Maria Joias', videoUrl: '' },
  { id: 3, titulo: 'Ensaio de marca', isRealtime: false, placeholder: 'Ensaio de marca', videoUrl: '' },
  { id: 4, titulo: 'Casamento ao vivo', isRealtime: true, placeholder: 'Casamento ao vivo', videoUrl: '' },
]
