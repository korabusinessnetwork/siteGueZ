// Resolve a origem de um vídeo em COMO ele deve tocar dentro do site.
// Retorna { kind, src } ou null se vazio/não suportado. Ver ADR-004.
//
//   kind 'file'    → arquivo próprio (.mp4/.webm/...): <video> nativo, toca
//                    inline, sem marca de terceiros. Melhor experiência.
//   kind 'youtube' → player do YouTube (embed nocookie), toca inline.
//   kind 'vimeo'   → player do Vimeo (embed), toca inline.
//
// Instagram foi deixado de fora DE PROPÓSITO: o embed do IG não toca inline —
// ele mostra o card do Instagram e manda o visitante pra fora do site. Para o
// vídeo "rodar direto na página", suba como arquivo (public/videos/…) ou no
// YouTube/Vimeo e cole o link aqui.

export function parseVideo(url) {
  if (typeof url !== 'string') return null
  const u = url.trim()
  if (!u) return null

  // Arquivo de vídeo próprio (self-hosted) — <video> nativo.
  if (/\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(u)) {
    return { kind: 'file', src: u }
  }

  // YouTube — id de 11 caracteres. nocookie + rel=0 (privacidade).
  let m = u.match(
    /(?:youtube(?:-nocookie)?\.com\/(?:watch\?(?:[^#]*&)?v=|embed\/|shorts\/|live\/)|youtu\.be\/)([\w-]{11})/i,
  )
  if (m) return { kind: 'youtube', src: `https://www.youtube-nocookie.com/embed/${m[1]}?rel=0` }

  // Vimeo — id numérico.
  m = u.match(/vimeo\.com\/(?:video\/|manage\/videos\/)?(\d+)/i)
  if (m) return { kind: 'vimeo', src: `https://player.vimeo.com/video/${m[1]}` }

  return null
}

// A origem é um vídeo que toca dentro do site?
export const isVideoUrl = (url) => parseVideo(url) !== null
