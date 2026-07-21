import { Link } from 'react-router-dom'
import { SITE, NAV } from '../constants/site.js'

export default function Footer() {
  return (
    <footer className="bg-marrom text-creme-sobre-escuro">
      <div className="mx-auto max-w-6xl px-4 md:px-8 py-10 md:py-12 flex flex-col md:flex-row md:justify-between gap-8">
        <div className="max-w-sm">
          <div className="font-display text-lg text-creme mb-2">GueZ.</div>
          <p className="text-[13.5px] leading-relaxed text-creme-rodape">{SITE.tagline}</p>
        </div>

        <nav className="flex flex-col gap-2 text-sm">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} className="text-creme-sobre-escuro no-underline hover:text-dourado">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-1 text-[13px] text-creme-rodape">
          <a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-creme-rodape no-underline hover:text-dourado">
            @{SITE.instagram}
          </a>
          <a href={`mailto:${SITE.email}`} className="text-creme-rodape no-underline hover:text-dourado">
            {SITE.email}
          </a>
          <span>{SITE.local}</span>
          <Link to="/privacidade" className="text-dourado no-underline mt-1.5">
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  )
}
