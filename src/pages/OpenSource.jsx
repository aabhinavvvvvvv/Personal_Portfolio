import { useEffect, useRef } from 'react'

const PINNED_REPOS = [
  {
    name: 'k8s-flask-postgre',
    desc: 'Containerized Flask + PostgreSQL application orchestrated on Kubernetes with full deployment manifests and auto-scaling.',
    lang: 'Python',
    langColor: 'bg-blue-400',
    url: 'https://github.com/aabhinavvvvvvv/k8s-flask-postgre',
    badge: 'Personal',
    badgeColor: 'group-hover:border-primary/50 group-hover:text-primary',
    hoverColor: 'group-hover:text-primary',
    gradientFrom: 'from-primary/30',
    gradientTo: 'to-secondary/30',
    icon: 'cloud_done',
    iconColor: 'text-primary',
  },
  {
    name: 'solana_wallet_adapter',
    desc: 'Solana wallet integration layer with React hooks for seamless dApp connectivity across multiple wallet providers.',
    lang: 'JavaScript',
    langColor: 'bg-yellow-400',
    url: 'https://github.com/aabhinavvvvvvv/solana_wallet_adapter',
    badge: 'Web3',
    badgeColor: 'group-hover:border-secondary/50 group-hover:text-secondary',
    hoverColor: 'group-hover:text-secondary',
    gradientFrom: 'from-secondary/30',
    gradientTo: 'to-primary/30',
    icon: 'token',
    iconColor: 'text-secondary',
  },
  {
    name: 'UIDAI-Bot-Detection',
    desc: 'ML-powered bot detection system for UIDAI services using behavioral analysis and anomaly detection.',
    lang: 'JavaScript',
    langColor: 'bg-yellow-400',
    url: 'https://github.com/aabhinavvvvvvv/UIDAI-Bot-Detection',
    badge: 'Security',
    badgeColor: 'group-hover:border-tertiary/50 group-hover:text-tertiary',
    hoverColor: 'group-hover:text-tertiary',
    gradientFrom: 'from-tertiary/30',
    gradientTo: 'to-primary/30',
    icon: 'security',
    iconColor: 'text-tertiary',
  },
  {
    name: 'blitzschlag25',
    desc: "Mission-critical infrastructure platform for MNIT Jaipur's premier technical festival handling 10k+ concurrent users.",
    lang: 'JavaScript',
    langColor: 'bg-yellow-400',
    url: 'https://github.com/aabhinavvvvvvv/blitzschlag25',
    badge: 'DevOps',
    badgeColor: 'group-hover:border-primary/50 group-hover:text-primary',
    hoverColor: 'group-hover:text-primary',
    gradientFrom: 'from-primary/30',
    gradientTo: 'to-secondary/30',
    icon: 'rocket_launch',
    iconColor: 'text-primary',
  },
]

const OS_CONTRIBUTIONS = [
  {
    title: 'Istio',
    org: 'istio',
    badge: 'Contributor',
    badgeColor: 'group-hover:border-primary/50 group-hover:text-primary',
    hoverColor: 'group-hover:text-primary',
    gradientFrom: 'from-primary/30',
    gradientTo: 'to-secondary/30',
    desc: 'Contributed to the cloud-native service mesh for Kubernetes — enhancing observability and traffic management policies.',
    meta: 'Go · CNCF Project',
    url: 'https://github.com/istio/istio',
    icon: 'hub',
    iconColor: 'text-primary',
  },
  {
    title: 'Kyverno',
    org: 'kyverno',
    badge: 'Contributor',
    badgeColor: 'group-hover:border-secondary/50 group-hover:text-secondary',
    hoverColor: 'group-hover:text-secondary',
    gradientFrom: 'from-secondary/30',
    gradientTo: 'to-primary/30',
    desc: 'Contributed to the Cloud Native Policy Management engine for Kubernetes, part of the CNCF sandbox ecosystem.',
    meta: 'Go · CNCF Sandbox',
    url: 'https://github.com/kyverno/kyverno',
    icon: 'policy',
    iconColor: 'text-secondary',
  },
  {
    title: 'Volcano',
    org: 'volcano-sh',
    badge: 'Contributor',
    badgeColor: 'group-hover:border-tertiary/50 group-hover:text-tertiary',
    hoverColor: 'group-hover:text-tertiary',
    gradientFrom: 'from-tertiary/30',
    gradientTo: 'to-primary/30',
    desc: 'Contributed to the cloud-native batch scheduling system for high-performance workloads under CNCF.',
    meta: 'Go · CNCF Incubating',
    url: 'https://github.com/volcano-sh/volcano',
    icon: 'batch_prediction',
    iconColor: 'text-tertiary',
  },
  {
    title: 'Talawa API',
    org: 'PalisadoesFoundation',
    badge: 'Contributor',
    badgeColor: 'group-hover:border-primary/50 group-hover:text-primary',
    hoverColor: 'group-hover:text-primary',
    gradientFrom: 'from-primary/30',
    gradientTo: 'to-tertiary/30',
    desc: 'Contributed to the GraphQL API backend powering the Talawa community management mobile application.',
    meta: 'TypeScript · Open Source',
    url: 'https://github.com/PalisadoesFoundation/talawa-api',
    icon: 'api',
    iconColor: 'text-primary',
  },
]

const ACTIVITY_STREAM = [
  { icon: 'merge', color: 'text-primary', text: 'Merged PR: istio/istio — traffic policy fix', num: 'istio' },
  { icon: 'add_circle', color: 'text-secondary', text: 'Feature: kyverno policy validation enhancement', num: 'kyverno' },
  { icon: 'bug_report', color: 'text-tertiary', text: 'Fix: volcano batch scheduler race condition', num: 'volcano' },
  { icon: 'merge', color: 'text-primary', text: 'Merged PR: talawa-api GraphQL resolver', num: 'talawa' },
  { icon: 'commit', color: 'text-secondary', text: 'k8s-flask-postgre: Add Helm chart support', num: 'personal' },
  { icon: 'add_circle', color: 'text-primary', text: 'solana_wallet_adapter: Multi-wallet support', num: 'web3' },
  { icon: 'merge', color: 'text-primary', text: 'Merged PR: istio/istio — traffic policy fix', num: 'istio' },
  { icon: 'add_circle', color: 'text-secondary', text: 'Feature: kyverno policy validation enhancement', num: 'kyverno' },
]

export default function OpenSource() {
  const gridRef = useRef(null)

  useEffect(() => {
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

  return (
    <main className="pt-24 pb-32 px-6 max-w-7xl mx-auto">

      {/* Hero */}
      <section className="mb-20 relative">
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
            Seeking full-stack project collaborations while exploring blockchain technologies. From cloud-native infrastructure to decentralized protocols — contributing to projects that define the open ecosystem.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://github.com/aabhinavvvvvvv"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full kinetic-gradient text-white font-headline font-bold text-sm shadow-[0_0_20px_rgba(0,210,255,0.3)] hover:scale-105 transition-all duration-300"
            >
              <span className="material-symbols-outlined text-sm">open_in_new</span>
              View on GitHub
            </a>
            <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full glass-card text-sm">
              <span className="text-on-surface-variant">61 repos</span>
              <span className="w-px h-4 bg-outline-variant" />
              <span className="text-on-surface-variant">8 followers</span>
              <span className="w-px h-4 bg-outline-variant" />
              <span className="text-primary font-bold">Pull Shark ×2</span>
            </div>
          </div>
        </div>
      </section>

      {/* GitHub Activity Graph */}
      <section className="mb-16">
        <div className="glass-card p-8 rounded-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 relative z-10">
            <div>
              <h3 className="font-headline text-2xl font-bold mb-1">Contribution Activity</h3>
              <p className="text-on-surface-variant text-sm font-label">
                <a href="https://github.com/aabhinavvvvvvv" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">@aabhinavvvvvvv</a>
                {' '}· 61 public repositories
              </p>
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
            <span className="text-[10px] text-primary/40 font-bold uppercase tracking-widest">CNCF + OSS</span>
          </div>
          <div>
            <h4 className="text-5xl font-headline font-bold mb-2 group-hover:text-primary transition-colors">61</h4>
            <p className="text-on-surface-variant font-label uppercase tracking-widest text-xs">Public Repositories</p>
          </div>
        </div>
        <div className="glass-card p-8 rounded-2xl flex flex-col justify-between group">
          <span className="material-symbols-outlined text-primary text-4xl mb-4 transition-transform group-hover:-translate-y-2">rebase_edit</span>
          <div>
            <h4 className="text-4xl font-headline font-bold mb-2">4+</h4>
            <p className="text-on-surface-variant font-label uppercase tracking-widest text-xs">OSS Projects</p>
          </div>
        </div>
        <div className="glass-card p-8 rounded-2xl flex flex-col justify-between group">
          <span className="material-symbols-outlined text-tertiary text-4xl mb-4 group-hover:animate-pulse">grade</span>
          <div>
            <h4 className="text-4xl font-headline font-bold mb-2">×2</h4>
            <p className="text-on-surface-variant font-label uppercase tracking-widest text-xs">Pull Shark Badge</p>
          </div>
        </div>
      </section>

      {/* Marquee Activity */}
      <section className="mb-20 overflow-hidden">
        <h3 className="font-headline text-sm font-bold mb-6 text-on-surface-variant uppercase tracking-[0.3em]">Recent Activity Stream</h3>
        <div className="relative flex overflow-x-hidden glass-card rounded-xl py-6">
          <div className="animate-marquee whitespace-nowrap flex gap-12 items-center">
            {ACTIVITY_STREAM.map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-sm">
                <span className={`material-symbols-outlined ${item.color} text-sm`}>{item.icon}</span>
                <span className="text-on-surface font-medium">{item.text}</span>
                <span className="text-on-surface-variant/40 uppercase text-[10px] tracking-widest">{item.num}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pinned Repos */}
      <section className="mb-20">
        <h3 className="font-headline text-3xl font-bold mb-10 flex items-center gap-4">
          Pinned Repositories
          <div className="h-[1px] flex-grow bg-outline-variant/30" />
          <a href="https://github.com/aabhinavvvvvvv?tab=repositories" target="_blank" rel="noreferrer" className="text-primary text-sm font-label flex items-center gap-1 hover:gap-2 transition-all">
            View all <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PINNED_REPOS.map((repo, i) => (
            <a
              key={i}
              href={repo.url}
              target="_blank"
              rel="noreferrer"
              className="group relative bg-surface-container-low rounded-2xl overflow-hidden p-[1px] transition-all duration-500 hover:scale-[1.02]"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${repo.gradientFrom} ${repo.gradientTo} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              <div className="relative bg-surface p-6 rounded-[0.95rem] h-full flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <span className={`material-symbols-outlined text-2xl ${repo.iconColor}`}>{repo.icon}</span>
                  <span className={`font-label text-[10px] py-1 px-3 border border-outline-variant rounded-full text-on-surface-variant uppercase tracking-widest ${repo.badgeColor} transition-colors`}>{repo.badge}</span>
                </div>
                <div>
                  <h4 className={`font-headline text-lg font-bold mb-2 ${repo.hoverColor} transition-colors`}>{repo.name}</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{repo.desc}</p>
                </div>
                <div className="flex items-center gap-2 mt-auto">
                  <div className={`w-2.5 h-2.5 rounded-full ${repo.langColor}`} />
                  <span className="text-on-surface-variant text-xs">{repo.lang}</span>
                  <span className="material-symbols-outlined text-xs text-on-surface-variant/40 ml-auto group-hover:text-primary transition-colors">open_in_new</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Featured OSS Contributions */}
      <section className="mb-20">
        <h3 className="font-headline text-3xl font-bold mb-4 flex items-center gap-4">
          Open Source Contributions
          <div className="h-[1px] flex-grow bg-outline-variant/30" />
        </h3>
        <p className="text-on-surface-variant text-sm mb-10 font-label">Contributing to CNCF and major open source ecosystems</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {OS_CONTRIBUTIONS.map((contrib, i) => (
            <a
              key={i}
              href={contrib.url}
              target="_blank"
              rel="noreferrer"
              className="group relative bg-surface-container-low rounded-2xl overflow-hidden p-[1px] transition-all duration-500 hover:scale-[1.02]"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${contrib.gradientFrom} ${contrib.gradientTo} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              <div className="relative bg-surface p-8 rounded-[0.95rem] h-full flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <span className={`material-symbols-outlined text-3xl ${contrib.iconColor}`}>{contrib.icon}</span>
                  <span className={`font-label text-[10px] py-1 px-3 border border-outline-variant rounded-full text-on-surface-variant uppercase tracking-widest ${contrib.badgeColor} transition-colors`}>{contrib.badge}</span>
                </div>
                <h4 className={`font-headline text-2xl font-bold mb-3 ${contrib.hoverColor} transition-colors`}>{contrib.title}</h4>
                <p className="text-on-surface-variant leading-relaxed mb-8 flex-grow">{contrib.desc}</p>
                <div className="flex items-center gap-6 mt-auto">
                  <div className="flex items-center gap-1 text-xs text-primary font-medium">
                    <span className="material-symbols-outlined text-sm">code</span>
                    <span>{contrib.meta}</span>
                  </div>
                  <span className="material-symbols-outlined text-xs text-on-surface-variant/40 ml-auto group-hover:text-primary transition-colors">open_in_new</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 border-t border-[#1c1b1b]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[#a5e7ff] font-bold font-['Inter'] text-xs uppercase tracking-widest">
            © 2025 KINETIC OBSIDIAN / AABHINAVVVVVVV
          </div>
          <div className="flex gap-8">
            <a className="text-[#e5e2e1]/30 hover:text-[#edb1ff] transition-colors font-['Inter'] text-xs uppercase tracking-widest opacity-80 hover:opacity-100" href="https://github.com/aabhinavvvvvvv" target="_blank" rel="noreferrer">Github</a>
            <a className="text-[#e5e2e1]/30 hover:text-[#edb1ff] transition-colors font-['Inter'] text-xs uppercase tracking-widest opacity-80 hover:opacity-100" href="#">LinkedIn</a>
            <a className="text-[#e5e2e1]/30 hover:text-[#edb1ff] transition-colors font-['Inter'] text-xs uppercase tracking-widest opacity-80 hover:opacity-100" href="https://github.com/aabhinavvvvvvv/Personal_Portfolio" target="_blank" rel="noreferrer">Source Code</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
