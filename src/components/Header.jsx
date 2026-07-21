import { Link, NavLink } from 'react-router-dom'
import { NAV } from '../constants/site.js'
import Button from './Button.jsx'
import logoMarrom from '../assets/logo-marrom.png'

export default function Header() {
  return (
    <header className="sticky top-0 z-30 bg-creme/95 backdrop-blur border-b border-linha">
      <div className="mx-auto max-w-6xl px-4 md:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center text-marrom no-underline">
          <img src={logoMarrom} alt="GueZ" className="h-7 md:h-8 w-auto" />
        </Link>

        <nav className="hidden md:flex gap-5 lg:gap-9 text-[13px] lg:text-[15px]">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `no-underline ${isActive ? 'text-laranja-cta font-semibold' : 'text-marrom hover:text-laranja-cta'}`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <Button to="/contato" size="sm">
          Fale com a gente
        </Button>
      </div>

      {/* Navegação mobile (faixa rolável) */}
      <nav className="md:hidden flex gap-4 px-4 pb-3 overflow-x-auto text-[13px]">
        {NAV.map((n) => (
          <NavLink
            key={n.to}
            to={n.to}
            className={({ isActive }) =>
              `whitespace-nowrap no-underline ${isActive ? 'text-laranja-cta font-semibold' : 'text-marrom-2'}`
            }
          >
            {n.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
