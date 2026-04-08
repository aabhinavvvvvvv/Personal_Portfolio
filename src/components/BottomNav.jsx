import { Link } from 'react-router-dom'

export default function BottomNav({ activePage }) {
  const links = [
    { to: '/', icon: 'home', label: 'Home', key: 'home' },
    { to: '/projects', icon: 'folder_open', label: 'Projects', key: 'projects' },
    { to: '/skills', icon: 'rocket_launch', label: 'Skills', key: 'skills' },
    { to: '/open-source', icon: 'hub', label: 'Open Source', key: 'open-source' },
    { to: '/about', icon: 'person', label: 'About', key: 'about' },
  ]

  return (
    <nav className="fixed bottom-0 w-full z-50 flex justify-around items-center pb-8 px-4 pointer-events-none">
      <div className="bg-[#131313]/60 backdrop-blur-md fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md rounded-full border border-[#3c494e]/20 flex justify-around items-center py-3 shadow-[0_20px_40px_-10px_rgba(0,210,255,0.25)] pointer-events-auto">
        {links.map(link => (
          <Link
            key={link.key}
            to={link.to}
            className={`flex flex-col items-center justify-center rounded-full px-4 py-1 font-['Inter'] text-[10px] font-medium tracking-wide transition-all duration-300 ${
              activePage === link.key
                ? 'text-[#a5e7ff] bg-[#00d2ff]/10'
                : 'text-[#e5e2e1]/40 hover:text-[#a5e7ff] hover:bg-[#a5e7ff]/5'
            }`}
          >
            <span className="material-symbols-outlined text-xl">{link.icon}</span>
            <span className="hidden sm:inline">{link.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}
