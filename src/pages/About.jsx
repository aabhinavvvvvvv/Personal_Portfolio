import { useEffect } from 'react'

export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active')
      })
    }, { threshold: 0.1 })
    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Floating Orbs */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute w-96 h-96 bg-primary/15 rounded-full blur-[80px] top-20 -left-20 animate-float opacity-15" />
        <div className="absolute w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[80px] bottom-40 -right-20 opacity-15 animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <main className="pt-40 pb-40 px-6 max-w-7xl mx-auto relative">
        {/* Hero */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-48 reveal-on-scroll active">
          <div className="lg:col-span-7">
            <div className="mb-6 inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.3em] font-black text-primary">Chief Technology Officer</span>
            </div>
            <h1 className="font-headline text-6xl md:text-8xl font-extrabold tracking-tighter mb-10 text-glow leading-[1.1]">
              Pioneering{' '}
              <span className="text-transparent bg-clip-text kinetic-gradient">Autonomous</span>
              <br />Architectures.
            </h1>
            <div className="space-y-8 text-xl text-on-surface-variant max-w-2xl leading-relaxed font-light">
              <p>
                I am <span className="text-white font-semibold">Abhinav Gupta</span>, engineering the next generation of scalable intelligence. Based at <span className="text-primary italic">MNIT Jaipur</span>, my focus lies at the core of high-frequency backend systems and neural orchestration.
              </p>
              <p>
                Currently leading technical strategy as <span className="text-secondary font-medium">CTO at Qlikwise</span>, crafting resilient infrastructures that empower data-driven decisions at scale.
              </p>
            </div>
            <div className="mt-14 flex flex-wrap gap-6">
              <button className="group px-10 py-4 rounded-full kinetic-gradient text-on-primary font-bold shadow-[0_0_30px_rgba(0,210,255,0.3)] hover:shadow-[0_0_50px_rgba(0,210,255,0.5)] transition-all duration-500 flex items-center gap-3">
                Acquire Portfolio
                <span className="material-symbols-outlined text-lg group-hover:translate-y-1 transition-transform">arrow_downward</span>
              </button>
              <button className="px-10 py-4 rounded-full border border-white/10 text-white font-bold hover:bg-white/5 hover:border-white/20 transition-all duration-300">
                Read Whitepapers
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden glass-card p-2 rotate-2 hover:rotate-0 transition-transform duration-700 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none rounded-[1.8rem]" />
              <img
                alt="Abhinav Gupta Portrait"
                className="w-full h-full object-cover rounded-[1.8rem] grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGQM5XMA2ProV4w2HFMHe3mTewPJCfNSBOydfERBgJt-s4NR6eh68rM2lYAvG6IgB5gYngyEPI4d_kPHoGqolRxP9A1-o42mfzUhq9bGCzWbIz7QiNy-NsxSJKQRDHr3VJno5L7M3nKN5YNuKqn-f3-u5jEsfGnLnU3w_m-vc1GeIEns8G6KTMaCbVaqznEvRK93Joa1PO30QWFEFJTPdrtiY9Fae0dZbY_i4poYpMVh5f6wcxEQylIXlGfCXVfXhVJYxlnnYjuqQM"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-24 h-24 glass-card rounded-3xl flex items-center justify-center text-primary animate-float">
              <span className="material-symbols-outlined text-4xl">terminal</span>
            </div>
            <div className="absolute -bottom-6 -left-12 w-28 h-28 glass-card rounded-full flex items-center justify-center text-secondary animate-float" style={{ animationDelay: '2s' }}>
              <span className="material-symbols-outlined text-5xl">insights</span>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-48 reveal-on-scroll">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-6 border-b border-white/5 pb-10">
            <div>
              <h2 className="font-headline text-xs uppercase tracking-[0.5em] text-primary font-black mb-4">Strategic Trajectory</h2>
              <h3 className="font-headline text-5xl md:text-6xl font-bold tracking-tight">Professional Journey</h3>
            </div>
            <div className="text-on-surface-variant text-lg font-label italic opacity-60">2024 — Present</div>
          </div>

          <div className="space-y-12">
            {[
              {
                period: 'Present',
                category: 'Leadership',
                color: 'text-primary',
                hoverColor: 'group-hover:text-primary',
                lineColor: 'bg-primary',
                title: 'CTO at Qlikwise',
                desc: 'Spearheading technical innovation and engineering vision. Overseeing the architectural design of high-performance analytics platforms and cloud-native solutions.',
                tags: ['Executive', 'Strategy'],
              },
              {
                period: 'Aug 2024 - Aug 2025',
                category: 'Security',
                color: 'text-secondary',
                hoverColor: 'group-hover:text-secondary',
                lineColor: 'bg-secondary',
                title: 'Infosec Executive',
                desc: 'Directed cybersecurity initiatives and vulnerability assessments. Implemented advanced threat modeling and orchestrated secure software development lifecycles.',
                tags: ['Red Teaming', 'Zero Trust'],
              },
              {
                period: 'Oct 2024 - Feb 2025',
                category: 'Events & Tech',
                color: 'text-primary',
                hoverColor: 'group-hover:text-primary',
                lineColor: 'bg-primary',
                title: 'Blitz25 Tech Exec',
                desc: "Managed mission-critical infrastructure for MNIT Jaipur's premier technical festival. Engineered real-time traffic handling systems for 10k+ concurrent users.",
                tags: ['DevOps', 'Orchestration'],
              },
            ].map((item, i) => (
              <div key={i} className="group relative grid grid-cols-1 md:grid-cols-12 gap-8 items-start p-10 rounded-3xl transition-all duration-500 hover:bg-white/[0.02]">
                <div className="md:col-span-3">
                  <span className={`${item.color} font-headline font-bold text-xl`}>{item.period}</span>
                  <p className="text-white/40 text-sm mt-1 uppercase tracking-widest">{item.category}</p>
                </div>
                <div className="md:col-span-6">
                  <h4 className={`text-3xl font-bold font-headline text-white ${item.hoverColor} transition-colors`}>{item.title}</h4>
                  <p className="text-on-surface-variant mt-4 text-lg leading-relaxed">{item.desc}</p>
                </div>
                <div className="md:col-span-3 flex flex-wrap gap-2 justify-start md:justify-end">
                  {item.tags.map(tag => (
                    <span key={tag} className="px-4 py-1 rounded-full border border-white/10 text-[10px] uppercase font-bold tracking-widest text-white/60">{tag}</span>
                  ))}
                </div>
                <div className={`absolute left-0 top-0 w-1 h-0 group-hover:h-full ${item.lineColor} transition-all duration-500`} />
              </div>
            ))}
          </div>
        </section>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-48" />

        {/* Philosophy Quote */}
        <section className="mb-48 reveal-on-scroll">
          <div className="max-w-4xl">
            <h2 className="font-headline text-4xl md:text-6xl font-light italic text-white/90 leading-tight">
              "Modern engineering is no longer just about building. It's about{' '}
              <span className="text-primary font-bold not-italic">orchestrating intelligence</span>
              {' '}that adapts, scales, and protects itself."
            </h2>
            <div className="mt-12 flex items-center gap-6">
              <div className="w-20 h-px bg-primary" />
              <span className="font-headline uppercase tracking-[0.4em] text-xs font-bold text-primary">Philosophy of Code</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-[#030303] border-t border-white/5 py-24 px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          <div>
            <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-glow">Let's build the <br />extraordinary.</h2>
            <p className="text-on-surface-variant text-xl max-w-md font-light">Open for strategic partnerships, high-stakes engineering roles, and innovative ventures.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <a className="group p-8 glass-card rounded-3xl hover:bg-primary/5 transition-colors" href="mailto:abhinav@example.com">
              <span className="material-symbols-outlined text-primary text-3xl mb-4 block">alternate_email</span>
              <h5 className="font-headline font-bold text-lg text-white mb-1">Direct Channel</h5>
              <p className="text-white/40 text-xs uppercase tracking-widest">abhinav@example.com</p>
            </a>
            <a className="group p-8 glass-card rounded-3xl hover:bg-secondary/5 transition-colors" href="#">
              <span className="material-symbols-outlined text-secondary text-3xl mb-4 block">share</span>
              <h5 className="font-headline font-bold text-lg text-white mb-1">Digital Footprint</h5>
              <p className="text-white/40 text-xs uppercase tracking-widest">Connect on LinkedIn</p>
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-20 mt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold tracking-tighter text-white/20 font-headline">AG.</span>
            <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">© 2025 ABHINAV GUPTA. ALL RIGHTS RESERVED.</p>
          </div>
          <div className="flex gap-10 text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold">
            <a className="hover:text-primary transition-colors" href="#">MNIT JAIPUR</a>
            <a className="hover:text-primary transition-colors" href="#">GITHUB</a>
            <a className="hover:text-primary transition-colors" href="#">SYSTEM STATUS</a>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </footer>
    </>
  )
}
