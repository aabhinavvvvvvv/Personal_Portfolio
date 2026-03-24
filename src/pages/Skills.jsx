import { useEffect } from 'react'

export default function Skills() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running'
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
      el.style.animationPlayState = 'paused'
      observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      icon: 'web_window',
      color: 'text-primary',
      dotColor: 'bg-primary',
      title: 'Frontend',
      delay: '0.1s',
      skills: ['React', 'Next.js', 'Tailwind CSS'],
    },
    {
      icon: 'dns',
      color: 'text-secondary',
      dotColor: 'bg-secondary',
      title: 'Backend',
      delay: '0.2s',
      skills: ['Node.js', 'Express'],
    },
    {
      icon: 'database',
      color: 'text-tertiary',
      dotColor: 'bg-tertiary',
      title: 'Databases',
      delay: '0.3s',
      skills: ['MongoDB', 'SQL'],
    },
    {
      icon: 'terminal',
      color: 'text-primary',
      dotColor: 'bg-primary',
      title: 'Languages',
      delay: '0.4s',
      skills: ['C++ & Python', 'JS & TS', 'Go', 'Solidity'],
    },
  ]

  return (
    <>
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] animate-glow-pulse" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      <main className="relative z-10 pt-44 pb-44 px-8 max-w-[1920px] mx-auto">
        {/* Skills Section */}
        <section className="mb-56">
          <div className="reveal-on-scroll mb-24 max-w-4xl" style={{ animation: 'reveal 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards' }}>
            <span className="text-primary font-headline font-bold text-sm tracking-[0.4em] uppercase mb-6 block">Capabilities</span>
            <h2 className="text-7xl md:text-9xl font-headline font-bold uppercase tracking-tighter leading-none mb-8 text-neon">
              TECH<br /><span className="text-white/10">SPECTRUM</span>
            </h2>
            <p className="text-on-surface-variant text-xl md:text-2xl font-light leading-relaxed max-w-2xl">
              Engineering sophisticated digital architectures across the full stack, from low-level systems to decentralized protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Skill Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skillCategories.map((cat, i) => (
                <div
                  key={i}
                  className="glass-card p-10 rounded-2xl reveal-on-scroll"
                  style={{ animation: `reveal 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards`, animationDelay: cat.delay }}
                >
                  <span className={`material-symbols-outlined ${cat.color} mb-6 text-4xl block`}>{cat.icon}</span>
                  <h3 className="text-2xl font-headline font-bold mb-4 uppercase tracking-wider">{cat.title}</h3>
                  <ul className="space-y-3 text-on-surface-variant font-medium">
                    {cat.skills.map(skill => (
                      <li key={skill} className="flex items-center gap-2">
                        <div className={`w-1 h-1 ${cat.dotColor}`} />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Blockchain & Cloud */}
              <div
                className="md:col-span-2 glass-card p-10 rounded-2xl reveal-on-scroll border-l-4 border-primary"
                style={{ animation: 'reveal 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards', animationDelay: '0.5s' }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div>
                    <span className="material-symbols-outlined text-primary mb-6 text-4xl block">cloud_done</span>
                    <h3 className="text-2xl font-headline font-bold mb-2 uppercase tracking-wider">Blockchain &amp; Cloud</h3>
                    <p className="text-on-surface-variant">Architecture for the next generation of decentralized web.</p>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    {['Ethereum', 'Bitcoin', 'Cloud Skills'].map(tag => (
                      <span key={tag} className="px-6 py-2 bg-white/5 rounded-full border border-white/10 text-sm font-bold tracking-widest uppercase">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 3D Visualization */}
            <div
              className="relative flex items-center justify-center min-h-[600px] reveal-on-scroll"
              style={{ animation: 'reveal 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards', animationDelay: '0.6s' }}
            >
              <div className="absolute inset-0 bg-primary/5 rounded-full blur-[120px] animate-glow-pulse" />
              <div className="relative w-80 h-80 rounded-full glass-card border-white/10 animate-float flex items-center justify-center">
                <div className="w-64 h-64 rounded-full border border-white/5 border-dashed" style={{ animation: 'spin 20s linear infinite' }} />
                <div className="absolute w-48 h-48 rounded-full border border-primary/20" style={{ animation: 'spin 10s linear infinite reverse' }} />
                <span className="material-symbols-outlined text-7xl text-primary animate-pulse">blur_on</span>
              </div>
              <div className="absolute top-20 right-20 glass-card px-6 py-4 rounded-xl flex items-center gap-3 animate-float" style={{ animationDelay: '-2s' }}>
                <span className="material-symbols-outlined text-secondary">token</span>
                <span className="font-headline font-bold uppercase tracking-widest text-xs">Web3 Elite</span>
              </div>
              <div className="absolute bottom-20 left-10 glass-card px-6 py-4 rounded-xl flex items-center gap-3 animate-float" style={{ animationDelay: '-4s' }}>
                <span className="material-symbols-outlined text-primary">speed</span>
                <span className="font-headline font-bold uppercase tracking-widest text-xs">Low Latency</span>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section>
          <div className="reveal-on-scroll mb-24 text-right ml-auto max-w-4xl" style={{ animation: 'reveal 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards' }}>
            <span className="text-secondary font-headline font-bold text-sm tracking-[0.4em] uppercase mb-6 block">Legacy</span>
            <h2 className="text-7xl md:text-9xl font-headline font-bold uppercase tracking-tighter leading-none mb-8">
              MILE<br /><span className="text-secondary">STONES</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
            {/* Codeforces */}
            <div className="md:col-span-8 glass-card rounded-3xl p-12 flex flex-col justify-between overflow-hidden relative group reveal-on-scroll">
              <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px] group-hover:bg-primary/20 transition-all" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-4xl text-primary">rocket_launch</span>
                  </div>
                  <h3 className="text-4xl font-headline font-bold tracking-tight">Codeforces Specialist</h3>
                </div>
                <p className="text-on-surface-variant text-xl max-w-xl leading-relaxed">
                  Demonstrated advanced problem-solving capabilities through consistent participation in global algorithmic challenges.
                </p>
              </div>
              <div className="relative z-10 flex items-end justify-between">
                <div>
                  <div className="text-7xl font-headline font-extrabold text-white tracking-tighter mb-2">1500+</div>
                  <div className="text-sm font-headline font-bold text-primary uppercase tracking-[0.3em]">Official Rating</div>
                </div>
                <span className="material-symbols-outlined text-6xl text-white/5 group-hover:text-primary/20 transition-colors">trending_up</span>
              </div>
            </div>

            {/* LeetCode */}
            <div className="md:col-span-4 glass-card rounded-3xl p-12 flex flex-col justify-between relative overflow-hidden group reveal-on-scroll">
              <div className="absolute inset-0 bg-gradient-to-br from-tertiary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div>
                <div className="flex justify-between items-start mb-12">
                  <span className="material-symbols-outlined text-5xl text-tertiary">military_tech</span>
                  <div className="px-4 py-1.5 bg-tertiary/10 border border-tertiary/20 rounded-full text-xs font-bold font-headline text-tertiary tracking-widest uppercase">Knight</div>
                </div>
                <div className="text-6xl font-headline font-extrabold text-white tracking-tighter mb-2">1900+</div>
                <h3 className="text-2xl font-headline font-bold mb-4">LeetCode Mastery</h3>
              </div>
              <p className="text-on-surface-variant font-medium">Top global percentile in competitive data structure optimization.</p>
            </div>

            {/* Web-a-thon */}
            <div className="md:col-span-6 glass-card rounded-3xl p-12 flex items-center gap-10 reveal-on-scroll">
              <div className="text-8xl font-headline font-extrabold text-secondary opacity-20">06</div>
              <div>
                <h3 className="text-3xl font-headline font-bold mb-2">Web-a-thon Global</h3>
                <p className="text-on-surface-variant">Placed 6th among 2,500+ developers in a high-intensity 48-hour build sprint.</p>
              </div>
            </div>

            {/* E-Cell */}
            <div className="md:col-span-6 glass-card rounded-3xl p-12 flex items-center gap-10 border-r-4 border-primary reveal-on-scroll">
              <div className="text-8xl font-headline font-extrabold text-primary opacity-20 italic">2nd</div>
              <div>
                <h3 className="text-3xl font-headline font-bold mb-2 uppercase tracking-tight">E-Cell Projectathon</h3>
                <p className="text-on-surface-variant">Silver Medalist for innovative architectural design and execution in an entrepreneur-focused hackathon.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
