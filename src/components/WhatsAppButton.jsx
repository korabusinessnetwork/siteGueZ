import { FaWhatsapp } from 'react-icons/fa6'
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
      <FaWhatsapp className="text-papel" size={28} aria-hidden="true" />
    </a>
  )
}
