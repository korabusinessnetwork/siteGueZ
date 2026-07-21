import { describe, it, expect } from 'vitest'
import { parseVideo, isVideoUrl } from './videoEmbed.js'

describe('parseVideo — YouTube', () => {
  it('reconhece watch?v=', () => {
    expect(parseVideo('https://www.youtube.com/watch?v=dQw4w9WgXcQ')).toEqual({
      provider: 'youtube',
      id: 'dQw4w9WgXcQ',
      embedUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?rel=0',
    })
  })
  it('reconhece youtu.be curto', () => {
    expect(parseVideo('https://youtu.be/dQw4w9WgXcQ')?.id).toBe('dQw4w9WgXcQ')
  })
  it('reconhece /shorts/', () => {
    expect(parseVideo('https://www.youtube.com/shorts/dQw4w9WgXcQ')?.id).toBe('dQw4w9WgXcQ')
  })
  it('reconhece watch com parâmetros extras (?t=, &list=)', () => {
    expect(parseVideo('https://www.youtube.com/watch?t=30&v=dQw4w9WgXcQ&list=abc')?.id).toBe('dQw4w9WgXcQ')
  })
  it('reconhece uma URL de embed já pronta', () => {
    expect(parseVideo('https://www.youtube.com/embed/dQw4w9WgXcQ')?.id).toBe('dQw4w9WgXcQ')
  })
})

describe('parseVideo — Vimeo', () => {
  it('reconhece vimeo.com/ID', () => {
    expect(parseVideo('https://vimeo.com/123456789')).toEqual({
      provider: 'vimeo',
      id: '123456789',
      embedUrl: 'https://player.vimeo.com/video/123456789',
    })
  })
  it('reconhece player.vimeo.com/video/ID', () => {
    expect(parseVideo('https://player.vimeo.com/video/123456789')?.id).toBe('123456789')
  })
})

describe('parseVideo — Instagram', () => {
  it('reconhece /reel/', () => {
    expect(parseVideo('https://www.instagram.com/reel/CxYzAbC123/')).toEqual({
      provider: 'instagram',
      id: 'CxYzAbC123',
      embedUrl: 'https://www.instagram.com/reel/CxYzAbC123/embed',
    })
  })
  it('reconhece /p/ como post', () => {
    expect(parseVideo('https://instagram.com/p/CxYzAbC123/')?.embedUrl).toBe(
      'https://www.instagram.com/p/CxYzAbC123/embed',
    )
  })
})

describe('parseVideo — entradas inválidas', () => {
  it.each([['', 'vazia'], ['   ', 'só espaços'], [null, 'null'], [undefined, 'undefined'], [42, 'número']])(
    'retorna null para %s (%s)',
    (entrada) => {
      expect(parseVideo(entrada)).toBeNull()
    },
  )
  it('retorna null para URL não-suportada', () => {
    expect(parseVideo('https://exemplo.com/video.mp4')).toBeNull()
  })
})

describe('isVideoUrl', () => {
  it('true para URL válida, false para vazia', () => {
    expect(isVideoUrl('https://youtu.be/dQw4w9WgXcQ')).toBe(true)
    expect(isVideoUrl('')).toBe(false)
  })
})
