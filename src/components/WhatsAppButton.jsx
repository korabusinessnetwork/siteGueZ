import { whatsappUrl } from '../constants/site.js'

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl('Oi! Vim pelo site da GueZ 🐝')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-5 z-40 grid place-items-center w-14 h-14 rounded-full bg-laranja-cta hover:bg-laranja-cta-hover shadow-[0_8px_20px_rgba(59,42,29,.35)]"
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 3.5A8.5 8.5 0 0 0 4.4 16.1L3.5 20.5l4.5-.9A8.5 8.5 0 1 0 12 3.5Z"
          fill="#FBF6EC"
        />
        <path
          d="M9.2 8.2c.2-.5.4-.5.6-.5h.5c.2 0 .4 0 .6.5l.7 1.6c.1.2.1.4 0 .5l-.4.5c-.1.2-.2.3-.1.5.2.4.6 1 1.2 1.5.7.6 1.3.8 1.6.9.2.1.4 0 .5-.1l.5-.6c.2-.2.3-.2.5-.1l1.5.7c.2.1.4.2.4.4 0 .5-.2 1.2-.5 1.4-.3.2-1 .5-1.6.4-1.1-.1-2.6-.7-4-2-1.6-1.5-2.3-3.1-2.4-3.6-.1-.6.2-1.3.4-1.6Z"
          fill="#A83E1D"
        />
      </svg>
    </a>
  )
}
