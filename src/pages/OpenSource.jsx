import { useEffect, useRef } from 'react'

export default function OpenSource() {
  const gridRef = useRef(null)

  useEffect(() => {
    // Generate contribution grid
    if (gridRef.current) {
      gridRef.current.innerHTML = ''
      for (let i = 0; i < 364; i++) {
        const cell = document.createElement('div')
        cell.className = 'contribution-cell'
        const intensity = Math.random()
        if (intensity > 0.9) cell.classList.add('bg-primary', 'shadow-[0_0_8px_rgba(0,210,255,0.4)]')
        else if (intensity > 0.7) cell.classList.add('bg-primary/60')
        else if (intensity > 0.4) cell.classList.add('bg-primary/30')
        else if (intensity > 0.1) cell.classList.add('bg-primary/10')
        else cell.classList.add('bg-surface-container-highest')
        gridRef.current.appendChild(cell)
      }
    }

    const handleMouse = (e) => {
      if (!gridRef.current) return
      const x = (e.clientX / window.innerWidth - 0.5) * 10
      const y = (e.clientY / window.innerHeight - 0.5) * 10
      gridRef.current.style.transform = `translate(${x}px, ${y}px)`
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  const contributions = [
    {
      title: 'React Three Fiber',
      badge: 'Core Contributor',
      badgeColor: 'group-hover:border-primary/50 group-hover:text-primary',
      hoverColor: 'group-hover:text-primary',
      gradientFrom: 'from-primary/30',
      gradientTo: 'to-secondary/30',
      desc: 'Implemented advanced raycasting optimizations for instanced meshes, reducing computation time by 40% for complex 3D scenes.',
      commit: '#4921',
      watchers: '24k watchers',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDiaNPMwH_bJlKCtDIY6q2gAfX8sbGipV4I4AARzHktm9B9XobKZcudpE2tluvM6jaUssi7g2TnmdG2Sio_q1Ai4ip1W9_bx0cxFBujVcVf_Nm7ZOSYUGV1UjQ15LY0ekKItaDjnlR89UQgsINWZITLIY3laeixXRMj8qXySUFlQ5xieMlkeTzDWY99KazTKz-37bV572vdixEr-n8ws8Q90sC0tL4jhwrVvpc782vGXMZEAXY2gCNlzDq5xcicRNS4Op72_gfPcDLk',
    },
    {
      title: 'Vite Plugin Obsidian',
      badge: 'Maintainer',
      badgeColor: 'group-hover:border-tertiary/50 group-hover:text-tertiary',
      hoverColor: 'group-hover:text-tertiary',
      gradientFrom: 'from-tertiary/30',
      gradientTo: 'to-primary/30',
      desc: 'Architected the hot-reload mechanism for 3D assets, allowing developers to see real-time changes in WebGL shaders without full page refreshes.',
      commit: 'Merged',
      watchers: '842 stars',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaVbLGThyHyKy0ZND3IJVWy3d3nsskaCQXH1bIH5uGhyUtwjjHxrsdRq2OHS0neWHc2ZCR2I9hxecamdznf2NRlzAWj5P9M-wI6tSdxn0iUtbMDn4pb8byqKR3LctUSoNk77bOk71Fho5I1W2ETSM0Lz-g447RKIP5pgGP_lS66YEx21drBZPjE7ZHpVnA23iLFh7NkqNbfxAae0hYLn80Gzkqh-8KsBxCDhlsBCcsMEq9mAaeN0rkQ3kR-X7M_YoCNCTfHEHp81Km',
    },
  ]

  const activityStream = [
    { icon: 'merge', color: 'text-primary', text: 'Fix: WebGL Shader leak in R3F', num: '#4921' },
    { icon: 'add_circle', color: 'text-secondary', text: 'Feature: Add persistent cache to Vite Obsidian', num: '#122' },
    { icon: 'bug_report', color: 'text-tertiary', text: 'Patch: Optimization for instanced meshes', num: '#88' },
    { icon: 'merge', color: 'text-primary', text: 'Docs: Update contribution guidelines for Vite', num: '#301' },
    { icon: 'merge', color: 'text-primary', text: 'Fix: WebGL Shader leak in R3F', num: '#4921' },
    { icon: 'add_circle', color: 'text-secondary', text: 'Feature: Add persistent cache to Vite Obsidian', num: '#122' },
  ]

  return (
    <main className="pt-24 pb-32 px-6 max-w-7xl mx-auto">
      {/* Hero */}
      <section className="mb-20 relative" style={{ animation: 'slideUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards' }}>
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-40 -right-20 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute right-0 top-0 hidden lg:block animate-float pointer-events-none opacity-50">
          <span className="material-symbols-outlined text-[120px] text-primary/20 blur-[1px]">hub</span>
        </div>
        <div className="relative z-10">
          <p className="font-headline text-primary uppercase tracking-[0.4em] mb-4 text-xs font-bold">Collaborations &amp; Community</p>
          <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] max-w-4xl">
            Building the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary" style={{ textShadow: '0 0 20px rgba(0, 210, 255, 0.4)' }}>
              Digital Commons
            </span>{' '}
            through code.
          </h2>
          <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed">
            Open source is the laboratory of the future. From kernel-level optimizations to accessible UI frameworks, I contribute to projects that push the boundaries of what's possible in the open ecosystem.
          </p>
        </div>
      </section>

      {/* GitHub Activity Graph */}
      <section className="mb-16">
        <div className="glass-card p-8 rounded-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 relative z-10">
            <div>
              <h3 className="font-headline text-2xl font-bold mb-1">Activity Stream</h3>
              <p className="text-on-surface-variant text-sm font-label">2,482 Contributions in the last year</p>
            </div>
            <div className="flex items-center gap-2 text-[10px] text-on-surface-variant uppercase tracking-widest font-label">
              <span>Less</span>
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-surface-container-highest rounded-sm" />
                <div className="w-3 h-3 bg-primary/20 rounded-sm border border-primary/10" />
                <div className="w-3 h-3 bg-primary/40 rounded-sm border border-primary/20" />
                <div className="w-3 h-3 bg-primary/70 rounded-sm border border-primary/40" />
                <div className="w-3 h-3 bg-primary rounded-sm border border-primary/60 shadow-[0_0_8px_rgba(0,210,255,0.4)]" />
              </div>
              <span>More</span>
            </div>
          </div>
          <div className="overflow-x-auto pb-4 scroll-mask">
            <div ref={gridRef} className="contribution-grid min-w-[800px] transition-transform duration-1000 ease-out" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
        <div className="md:col-span-2 glass-card p-8 rounded-2xl flex flex-col justify-between group">
          <div className="flex justify-between items-start">
            <span className="material-symbols-outlined text-secondary text-4xl mb-4 transition-transform group-hover:scale-110 group-hover:rotate-12">hub</span>
            <span className="text-[10px] text-primary/40 font-bold uppercase tracking-widest">Global impact</span>
          </div>
          <div>
            <h4 className="text-5xl font-headline font-bold mb-2 group-hover:text-primary transition-colors">142</h4>
            <p className="text-on-surface-variant font-label uppercase tracking-widest text-xs">Pull Requests Merged</p>
          </div>
        </div>
        <div className="glass-card p-8 rounded-2xl flex flex-col justify-between group">
          <span className="material-symbols-outlined text-primary text-4xl mb-4 transition-transform group-hover:-translate-y-2">rebase_edit</span>
          <div>
            <h4 className="text-4xl font-headline font-bold mb-2">12</h4>
            <p className="text-on-surface-variant font-label uppercase tracking-widest text-xs">Orgs Joined</p>
          </div>
        </div>
        <div className="glass-card p-8 rounded-2xl flex flex-col justify-between group">
          <span className="material-symbols-outlined text-tertiary text-4xl mb-4 group-hover:animate-pulse">grade</span>
          <div>
            <h4 className="text-4xl font-headline font-bold mb-2">1.4k</h4>
            <p className="text-on-surface-variant font-label uppercase tracking-widest text-xs">Total Stars</p>
          </div>
        </div>
      </section>

      {/* Marquee Activity */}
      <section className="mb-20 overflow-hidden">
        <h3 className="font-headline text-sm font-bold mb-6 text-on-surface-variant uppercase tracking-[0.3em]">Recent Activity Stream</h3>
        <div className="relative flex overflow-x-hidden glass-card rounded-xl py-6">
          <div className="animate-marquee whitespace-nowrap flex gap-12 items-center">
            {activityStream.map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-sm">
                <span className={`material-symbols-outlined ${item.color} text-sm`}>{item.icon}</span>
                <span className="text-on-surface font-medium">{item.text}</span>
                <span className="text-on-surface-variant/40">{item.num}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Contributions */}
      <section className="mb-20">
        <h3 className="font-headline text-3xl font-bold mb-10 flex items-center gap-4">
          Featured Impact
          <div className="h-[1px] flex-grow bg-outline-variant/30" />
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contributions.map((contrib, i) => (
            <div key={i} className="group relative bg-surface-container-low rounded-2xl overflow-hidden p-[1px] transition-all duration-500 hover:scale-[1.02]">
              <div className={`absolute inset-0 bg-gradient-to-br ${contrib.gradientFrom} ${contrib.gradientTo} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              <div className="relative bg-surface p-8 rounded-[0.95rem] h-full flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <img alt={contrib.title} className="w-12 h-12 rounded-lg grayscale group-hover:grayscale-0 transition-all duration-500 ring-1 ring-white/10" src={contrib.img} />
                  <span className={`font-label text-[10px] py-1 px-3 border border-outline-variant rounded-full text-on-surface-variant uppercase tracking-widest ${contrib.badgeColor} transition-colors`}>{contrib.badge}</span>
                </div>
                <h4 className={`font-headline text-2xl font-bold mb-3 ${contrib.hoverColor} transition-colors`}>{contrib.title}</h4>
                <p className="text-on-surface-variant leading-relaxed mb-8 flex-grow">{contrib.desc}</p>
                <div className="flex items-center gap-6 mt-auto">
                  <div className="flex items-center gap-1 text-xs text-primary font-medium">
                    <span className="material-symbols-outlined text-sm">commit</span>
                    <span>{contrib.commit}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-on-surface-variant">
                    <span className="material-symbols-outlined text-sm">visibility</span>
                    <span>{contrib.watchers}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 border-t border-[#1c1b1b]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[#a5e7ff] font-bold font-['Inter'] text-xs uppercase tracking-widest">
            © 2024 KINETIC OBSIDIAN / AABHINAVVVVVVV
          </div>
          <div className="flex gap-8">
            <a className="text-[#e5e2e1]/30 hover:text-[#edb1ff] transition-colors font-['Inter'] text-xs uppercase tracking-widest opacity-80 hover:opacity-100" href="#">Github</a>
            <a className="text-[#e5e2e1]/30 hover:text-[#edb1ff] transition-colors font-['Inter'] text-xs uppercase tracking-widest opacity-80 hover:opacity-100" href="#">LinkedIn</a>
            <a className="text-[#e5e2e1]/30 hover:text-[#edb1ff] transition-colors font-['Inter'] text-xs uppercase tracking-widest opacity-80 hover:opacity-100" href="#">Source Code</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
