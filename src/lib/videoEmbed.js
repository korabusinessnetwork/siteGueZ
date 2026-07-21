// Converte uma URL de compartilhamento (YouTube, Vimeo, Instagram) na URL de
// embed correspondente. Função pura — ver ADR-004 (vídeo por embed de link).
// Retorna { provider, id, embedUrl } ou null se a URL for vazia/não reconhecida.
//
// Cobre os formatos que a GueZ vai colar no dado do portfólio (`videoUrl`):
//   YouTube:   youtube.com/watch?v=ID · youtu.be/ID · /shorts/ID · /embed/ID
//   Vimeo:     vimeo.com/ID · player.vimeo.com/video/ID
//   Instagram: instagram.com/reel/COD · /p/COD · /tv/COD

export function parseVideo(url) {
  if (typeof url !== 'string') return null
  const u = url.trim()
  if (!u) return null

  // YouTube — id de 11 caracteres
  let m = u.match(
    /(?:youtube(?:-nocookie)?\.com\/(?:watch\?(?:[^#]*&)?v=|embed\/|shorts\/|live\/)|youtu\.be\/)([\w-]{11})/i,
  )
  if (m) {
    const id = m[1]
    // youtube-nocookie + rel=0: sem cookies de tracking antes do play e sem
    // recomendações de outros canais (privacidade — ver docs/11_SEGURANCA).
    return { provider: 'youtube', id, embedUrl: `https://www.youtube-nocookie.com/embed/${id}?rel=0` }
  }

  // Vimeo — id numérico
  m = u.match(/vimeo\.com\/(?:video\/|manage\/videos\/)?(\d+)/i)
  if (m) {
    const id = m[1]
    return { provider: 'vimeo', id, embedUrl: `https://player.vimeo.com/video/${id}` }
  }

  // Instagram — reel / post / tv
  m = u.match(/instagram\.com\/(reel|reels|p|tv)\/([\w-]+)/i)
  if (m) {
    const tipo = m[1] === 'reels' ? 'reel' : m[1]
    const id = m[2]
    return { provider: 'instagram', id, embedUrl: `https://www.instagram.com/${tipo}/${id}/embed` }
  }

  return null
}

// Conveniência: a URL aponta para um vídeo embedável?
export const isVideoUrl = (url) => parseVideo(url) !== null
