import { describe, it, expect } from 'vitest'
import { parseVideo, isVideoUrl } from './videoEmbed.js'

describe('parseVideo — arquivo próprio (<video> nativo)', () => {
  it('reconhece caminho local .mp4', () => {
    expect(parseVideo('/videos/casa-coffee.mp4')).toEqual({ kind: 'file', src: '/videos/casa-coffee.mp4' })
  })
  it('reconhece .webm e mantém a URL', () => {
    expect(parseVideo('https://cdn.exemplo.com/reel.webm')).toEqual({
      kind: 'file',
      src: 'https://cdn.exemplo.com/reel.webm',
    })
  })
  it('ignora querystring na extensão', () => {
    expect(parseVideo('/videos/x.mp4?v=2')?.kind).toBe('file')
  })
})

describe('parseVideo — YouTube', () => {
  it('watch?v= vira embed nocookie', () => {
    expect(parseVideo('https://www.youtube.com/watch?v=dQw4w9WgXcQ')).toEqual({
      kind: 'youtube',
      src: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?rel=0',
    })
  })
  it('youtu.be curto', () => {
    expect(parseVideo('https://youtu.be/dQw4w9WgXcQ')?.src).toContain('/embed/dQw4w9WgXcQ')
  })
  it('/shorts/', () => {
    expect(parseVideo('https://www.youtube.com/shorts/dQw4w9WgXcQ')?.kind).toBe('youtube')
  })
  it('watch com parâmetros extras', () => {
    expect(parseVideo('https://www.youtube.com/watch?t=30&v=dQw4w9WgXcQ&list=abc')?.src).toContain('dQw4w9WgXcQ')
  })
})

describe('parseVideo — Vimeo', () => {
  it('vimeo.com/ID', () => {
    expect(parseVideo('https://vimeo.com/123456789')).toEqual({
      kind: 'vimeo',
      src: 'https://player.vimeo.com/video/123456789',
    })
  })
  it('player.vimeo.com/video/ID', () => {
    expect(parseVideo('https://player.vimeo.com/video/123456789')?.kind).toBe('vimeo')
  })
})

describe('parseVideo — não suportado / inválido', () => {
  it('Instagram retorna null (não toca inline — de propósito)', () => {
    expect(parseVideo('https://www.instagram.com/reel/CxYzAbC123/')).toBeNull()
  })
  it.each([['', 'vazia'], ['   ', 'só espaços'], [null, 'null'], [undefined, 'undefined'], [42, 'número']])(
    'retorna null para %s (%s)',
    (entrada) => {
      expect(parseVideo(entrada)).toBeNull()
    },
  )
})

describe('isVideoUrl', () => {
  it('true para fonte válida, false para vazia', () => {
    expect(isVideoUrl('/videos/x.mp4')).toBe(true)
    expect(isVideoUrl('https://youtu.be/dQw4w9WgXcQ')).toBe(true)
    expect(isVideoUrl('')).toBe(false)
  })
})
