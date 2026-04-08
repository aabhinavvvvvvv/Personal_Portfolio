import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar({ activePage }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { to: '/', label: 'Home', key: 'home' },
    { to: '/projects', label: 'Projects', key: 'projects' },
    { to: '/skills', label: 'Skills', key: 'skills' },
    { to: '/open-source', label: 'Open Source', key: 'open-source' },
    { to: '/about', label: 'About', key: 'about' },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#050505]/60 backdrop-blur-xl border-b border-[#3c494e]/15 shadow-[0_0_20px_rgba(0,210,255,0.1)] flex items-center justify-between px-6 h-16">
      <div className="flex items-center gap-3">
        <span className="material-symbols-outlined text-[#a5e7ff]">terminal</span>
        <Link to="/">
          <span className="text-xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] to-[#9d50bb] font-['Space_Grotesk'] uppercase">
            ABHINAV GUPTA
          </span>
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-8 font-['Space_Grotesk'] uppercase tracking-[0.1em] font-bold">
        {links.map(link => (
          <Link
            key={link.key}
            to={link.to}
            className={`transition-all duration-300 ${
              activePage === link.key
                ? 'text-[#a5e7ff]'
                : 'text-[#e5e2e1]/50 hover:text-[#a5e7ff]'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <button
        className="material-symbols-outlined text-[#a5e7ff] cursor-pointer scale-95 active:scale-90 transition-transform"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        menu
      </button>

      {menuOpen && (
        <div className="absolute top-16 right-0 w-56 glass-panel py-4 flex flex-col md:hidden">
          {links.map(link => (
            <Link
              key={link.key}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`px-6 py-3 font-['Space_Grotesk'] uppercase tracking-[0.1em] font-bold text-sm transition-colors ${
                activePage === link.key
                  ? 'text-[#a5e7ff]'
                  : 'text-[#e5e2e1]/50 hover:text-[#a5e7ff]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
