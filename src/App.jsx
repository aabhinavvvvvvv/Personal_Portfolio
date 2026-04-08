import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState, lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import BottomNav from './components/BottomNav'
import Loader from './components/Loader'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const OpenSource = lazy(() => import('./pages/OpenSource'))
const Skills = lazy(() => import('./pages/Skills'))

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 800)
    return () => clearTimeout(timer)
  }, [])

  const getActivePage = () => {
    switch (location.pathname) {
      case '/': return 'home'
      case '/about': return 'about'
      case '/open-source': return 'open-source'
      case '/skills': return 'skills'
      default: return 'home'
    }
  }

  return (
    <div className="min-h-screen bg-[#050505] text-on-surface font-body selection:bg-primary-container selection:text-white">
      <Loader visible={!loaded} />
      <Navbar activePage={getActivePage()} />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/open-source" element={<OpenSource />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </Suspense>
      <BottomNav activePage={getActivePage()} />
    </div>
  )
}
