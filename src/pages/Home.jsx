import { useEffect, useRef } from 'react'

export default function Home() {
  const heroRef = useRef(null)

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const handleScroll = () => {
      reveals.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
          el.classList.add('active')
        }
      })
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()

    const handleMouse = (e) => {
      const mouseX = e.clientX / window.innerWidth
      const mouseY = e.clientY / window.innerHeight
      const layers = document.querySelectorAll('.parallax-layer')
      layers.forEach((layer, index) => {
        const ratio = (index + 1) * 10
        const x = (mouseX - 0.5) * ratio
        const y = (mouseY - 0.5) * ratio
        layer.style.transform = `translate(${x}px, ${y}px)`
      })
    }
    document.addEventListener('mousemove', handleMouse)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousemove', handleMouse)
    }
  }, [])

  return (
    <>
      <main className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden px-6 pt-20">
        {/* Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="parallax-layer absolute inset-0">
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/10 rounded-full blur-[120px]" />
          </div>
          <div className="parallax-layer absolute inset-0">
            <div className="absolute top-[20%] right-[15%] w-32 h-32 bg-primary/20 rounded-full blur-xl border border-primary/30 animate-pulse" />
            <div className="absolute bottom-[25%] left-[10%] w-48 h-48 bg-secondary/20 rounded-full blur-2xl border border-secondary/20" />
            {[
              { top: '15%', left: '20%', delay: '0s' },
              { top: '40%', left: '80%', delay: '1s' },
              { top: '70%', left: '15%', delay: '2s' },
              { top: '25%', left: '60%', delay: '3s' },
              { top: '85%', left: '75%', delay: '4.5s' },
              { top: '50%', left: '30%', delay: '2.5s' },
              { top: '10%', left: '45%', delay: '1.2s' },
              { top: '90%', left: '40%', delay: '5s' },
            ].map((p, i) => (
              <div key={i} className="particle" style={{ top: p.top, left: p.left, animationDelay: p.delay }} />
            ))}
          </div>
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#00d2ff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl space-y-8 reveal active">
          <div className="space-y-4">
            <span className="inline-block px-4 py-1.5 rounded-full border border-outline-variant/30 text-primary text-xs font-headline tracking-[0.2em] uppercase bg-surface-container-low/40 backdrop-blur-md">
              Securing the Decentralized Future
            </span>
            <h1 className="font-headline text-5xl md:text-8xl font-bold tracking-tight text-white text-glow">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] to-[#9d50bb]">
                Abhinav Gupta
              </span>
            </h1>
            <div className="flex flex-wrap justify-center items-center gap-x-3 text-on-surface-variant font-label text-sm md:text-xl font-light">
              <span>Full Stack Developer</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
              <span>Cloud Systems &amp; Blockchain Architect</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
              <span className="inline-flex items-center gap-2">
                Competitive Programmer
                <span className="w-2 h-5 bg-primary animate-pulse inline-block" />
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <a href="mailto:abhinavguptaxia9213@gmail.com" className="kinetic-gradient text-white font-headline px-12 py-5 rounded-full font-bold shadow-[0_0_25px_rgba(0,210,255,0.4)] hover:scale-105 transition-all duration-300 flex items-center gap-3 group animate-pulse-glow">
              Get in Touch
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">rocket_launch</span>
            </a>
            <a href="/resume.pdf" download className="px-8 py-4 rounded-full border border-white/10 text-white font-headline font-bold hover:bg-white/5 hover:border-white/20 transition-all duration-300 flex items-center gap-2 text-sm">
              <span className="material-symbols-outlined text-sm text-primary">download</span>
              Resume
            </a>
          </div>
        </div>

        {/* Floating Code Snippet */}
        <div className="absolute bottom-32 right-12 hidden lg:block max-w-xs glass-panel p-6 rounded-xl border border-white/5 shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500 reveal">
          <div className="flex gap-1.5 mb-4">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
          </div>
          <code className="text-xs font-mono text-primary/80 block leading-relaxed">
            <span className="text-secondary">const</span> profile = {'{'}<br />
            {'  '}name: <span className="text-tertiary">'Abhinav'</span>,<br />
            {'  '}core: <span className="text-tertiary">'Blockchain'</span>,<br />
            {'  '}vision: <span className="text-tertiary">'Scalable'</span><br />
            {'}'};<br />
            <span className="text-secondary">deploy</span>(profile);
          </code>
        </div>

        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 animate-bounce">
          <span className="text-[10px] font-headline uppercase tracking-widest">Explore</span>
          <span className="material-symbols-outlined">keyboard_double_arrow_down</span>
        </div>
      </main>

      {/* Tech Arsenal Section */}
      <section className="relative bg-surface py-32 px-6 pb-40">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex justify-between items-end reveal">
            <div className="space-y-2">
              <h2 className="font-headline text-sm text-primary uppercase tracking-[0.2em]">Selected Expertise</h2>
              <h3 className="font-headline text-4xl font-bold text-white">Technological Arsenal</h3>
            </div>
            <button className="text-primary font-label text-sm flex items-center gap-2 group">
              Technical Specifications
              <span className="material-symbols-outlined text-xs group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
            {/* Cloud Systems */}
            <div className="md:col-span-2 md:row-span-2 glass-panel p-8 rounded-xl flex flex-col justify-between group overflow-hidden relative reveal">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-primary/10 transition-colors" />
              <div>
                <span className="material-symbols-outlined text-4xl text-primary mb-6 block" style={{ fontVariationSettings: "'FILL' 1" }}>hub</span>
                <h4 className="font-headline text-2xl font-bold text-white mb-4">Cloud Systems</h4>
                <p className="text-on-surface-variant leading-relaxed font-light">Designing distributed cloud architectures with high availability, auto-scaling, and serverless orchestration for modern enterprise demands.</p>
              </div>
              <div className="mt-8">
                <img
                  className="w-full h-48 object-cover rounded-lg border border-outline-variant/20 grayscale group-hover:grayscale-0 transition-all duration-700"
                  alt="High-tech visualization of distributed cloud server nodes"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSbrc1v-JAAM4IInTPwHuTrCVgrgo-a7-rZ59x2a4MNcPs5Yl829YyUr5Ff0Skmp9HUrB1xexKlg1_-klV8p6KdlUJaT9GhF7IjZV3ohpWEc1WPnDtHIFjbCk3FjrrPSTeAlqwofm7ERGZFyfw9PBqnr4g2ISxYLAyblV7wspCaKm-__YnU6VBdLffRuE-kOsogdgB_T2Zv5hfaABRhqKy0PY2nbcgPurL-3bzmYFJzjTcOLlaTKwlEw7PesbAxxSG1bN50gr3cdFK"
                />
              </div>
            </div>

            {/* Full Stack */}
            <div className="md:col-span-2 glass-panel p-8 rounded-xl flex items-center justify-between group reveal">
              <div className="space-y-4">
                <span className="material-symbols-outlined text-4xl text-secondary block" style={{ fontVariationSettings: "'FILL' 1" }}>web</span>
                <h4 className="font-headline text-xl font-bold text-white">Full Stack Systems</h4>
                <p className="text-on-surface-variant text-sm font-light">Highly scalable, reactive web infrastructures built with precision.</p>
              </div>
              <div className="w-24 h-24 kinetic-gradient rounded-full flex items-center justify-center rotate-45 group-hover:rotate-0 transition-transform duration-500">
                <span className="material-symbols-outlined text-white text-3xl">deployed_code</span>
              </div>
            </div>

            {/* CP Mastery */}
            <div className="md:col-span-1 glass-panel p-6 rounded-xl flex flex-col justify-center items-center text-center gap-4 group reveal">
              <span className="material-symbols-outlined text-4xl text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>code_blocks</span>
              <h4 className="font-headline font-bold text-white">CP Mastery</h4>
              <p className="text-xs text-on-surface-variant">Top-tier algorithmic optimization and logic.</p>
            </div>

            {/* Blockchain & Web3 */}
            <div className="md:col-span-1 glass-panel p-6 rounded-xl flex flex-col justify-center items-center text-center gap-4 group reveal">
              <div className="w-12 h-12 rounded-full border border-primary/40 flex items-center justify-center animate-spin-slow">
                <span className="material-symbols-outlined text-primary text-2xl">encrypted</span>
              </div>
              <h4 className="font-headline font-bold text-white">Blockchain &amp; Web3</h4>
              <p className="text-xs text-on-surface-variant">Building trustless protocols and smart contracts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Watermark */}
      <div className="fixed top-1/2 left-0 -translate-y-1/2 -rotate-90 pointer-events-none opacity-[0.03] select-none hidden xl:block">
        <span className="font-headline text-[12vw] font-black text-white whitespace-nowrap leading-none">ABHINAV GUPTA</span>
      </div>
    </>
  )
}
