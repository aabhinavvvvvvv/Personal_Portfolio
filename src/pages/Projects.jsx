const PROJECTS = [
  {
    title: 'AI Finance Platform',
    subtitle: 'Full Stack Web App',
    description: 'Full-stack AI-powered finance platform delivering intelligent financial insights and personalized assistance. Features AI-driven chat interface, automated monthly email reports, and spending alerts.',
    highlights: [
      'AI-driven chat interface for financial queries using Gemini AI',
      'Automated monthly email reports and spending alerts via Inngest',
      'Clerk authentication + Arcjet rate limiting for security',
      'Personalized dashboards with real-time financial data',
    ],
    stack: ['Next.js', 'Gemini AI', 'Prisma', 'Clerk', 'Inngest', 'Arcjet', 'Tailwind CSS', 'Shadcn UI'],
    icon: 'account_balance',
    color: 'text-primary',
    borderColor: 'border-primary/30',
    bgColor: 'bg-primary/5',
    glowColor: 'bg-primary/10',
    github: 'https://github.com/aabhinavvvvvvv/finance_building',
  },
  {
    title: 'Blitzschlag\'25',
    subtitle: 'College Fest Website — MNIT Jaipur',
    description: 'High-performance website for MNIT Jaipur\'s annual technical festival featuring live schedules, registrations, real-time updates, and 3D interactive models for an immersive experience.',
    highlights: [
      'Scalable REST APIs reducing page load time by 40%',
      '3D interactive models with Three.js for immersive UI',
      'Real-time schedule & registration system via Firebase',
      'Handled 10k+ concurrent users during the event',
    ],
    stack: ['React', 'Three.js', 'Express', 'Firebase', 'Node.js'],
    icon: 'celebration',
    color: 'text-secondary',
    borderColor: 'border-secondary/30',
    bgColor: 'bg-secondary/5',
    glowColor: 'bg-secondary/10',
    github: 'https://github.com/aabhinavvvvvvv',
    live: 'https://blitzschlag.co.in/',
  },
  {
    title: 'CineBook',
    subtitle: 'Movie Ticket Booking — MERN Stack',
    description: 'Full-stack movie ticket booking platform with user and admin interfaces. Features seat selection, Stripe payment integration, booking management, and email notification system.',
    highlights: [
      'Seat selection UI with real-time availability tracking',
      'Stripe payment processing with webhook confirmation',
      'Admin dashboard for movies, showtimes, and analytics',
      'Email notifications for booking confirmations via Clerk',
    ],
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Stripe', 'Clerk', 'Tailwind CSS'],
    icon: 'movie',
    color: 'text-tertiary',
    borderColor: 'border-tertiary/30',
    bgColor: 'bg-tertiary/5',
    glowColor: 'bg-tertiary/10',
    github: 'https://github.com/aabhinavvvvvvv/Movie_Main',
  },
]

export default function Projects() {
  return (
    <main className="pt-24 pb-32 px-6 max-w-7xl mx-auto">

      {/* Hero */}
      <section className="mb-20 relative">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-40 -right-20 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative z-10">
          <p className="font-headline text-primary uppercase tracking-[0.4em] mb-4 text-xs font-bold">Personal Work</p>
          <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] max-w-4xl">
            Things I've{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Built
            </span>
            .
          </h2>
          <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed">
            Full-stack applications ranging from AI-powered platforms to high-traffic event websites. Each project shipped end-to-end, production-deployed.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://github.com/aabhinavvvvvvv"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full kinetic-gradient text-white font-headline font-bold text-sm shadow-[0_0_20px_rgba(0,210,255,0.3)] hover:scale-105 transition-all duration-300"
            >
              <span className="material-symbols-outlined text-sm">open_in_new</span>
              View All on GitHub
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card text-sm font-headline font-bold hover:bg-white/5 transition-all"
            >
              <span className="material-symbols-outlined text-sm text-primary">download</span>
              Resume
            </a>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="space-y-8">
        {PROJECTS.map((project, i) => (
          <div
            key={i}
            className={`glass-card rounded-3xl p-8 md:p-12 border border-transparent hover:${project.borderColor} transition-all duration-300 relative overflow-hidden group`}
          >
            <div className={`absolute -right-20 -bottom-20 w-80 h-80 ${project.glowColor} rounded-full blur-[100px] group-hover:opacity-150 transition-all`} />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Left */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-2xl ${project.bgColor} flex items-center justify-center shrink-0`}>
                    <span className={`material-symbols-outlined text-2xl ${project.color}`}>{project.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-headline text-2xl md:text-3xl font-bold text-white">{project.title}</h3>
                    <p className={`text-sm font-label mt-0.5 ${project.color}`}>{project.subtitle}</p>
                  </div>
                </div>

                <p className="text-on-surface-variant leading-relaxed">{project.description}</p>

                <ul className="space-y-2">
                  {project.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-on-surface-variant">
                      <span className={`material-symbols-outlined text-sm shrink-0 mt-0.5 ${project.color}`}>arrow_right</span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-3 pt-2 flex-wrap">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card text-sm font-headline font-bold hover:bg-white/5 transition-all"
                  >
                    <span className="material-symbols-outlined text-sm">code</span>
                    Source Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-headline font-bold border ${project.borderColor} ${project.bgColor} ${project.color} hover:opacity-80 transition-all`}
                    >
                      <span className="material-symbols-outlined text-sm">open_in_new</span>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>

              {/* Right — Stack */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-on-surface-variant/50 font-label">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map(tech => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-xs font-bold font-label border ${project.borderColor} ${project.bgColor} ${project.color}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className={`mt-auto pt-6 text-8xl font-headline font-black opacity-5 ${project.color} select-none`}>
                  0{i + 1}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="w-full py-12 border-t border-[#1c1b1b] mt-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[#a5e7ff] font-bold font-['Inter'] text-xs uppercase tracking-widest">
            © 2025 KINETIC OBSIDIAN / AABHINAVVVVVVV
          </div>
          <div className="flex gap-8">
            <a className="text-[#e5e2e1]/30 hover:text-[#edb1ff] transition-colors font-['Inter'] text-xs uppercase tracking-widest opacity-80 hover:opacity-100" href="https://github.com/aabhinavvvvvvv" target="_blank" rel="noreferrer">Github</a>
            <a className="text-[#e5e2e1]/30 hover:text-[#edb1ff] transition-colors font-['Inter'] text-xs uppercase tracking-widest opacity-80 hover:opacity-100" href="https://www.linkedin.com/in/abhinav-gupta-a08b13304/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="text-[#e5e2e1]/30 hover:text-[#edb1ff] transition-colors font-['Inter'] text-xs uppercase tracking-widest opacity-80 hover:opacity-100" href="https://github.com/aabhinavvvvvvv/Personal_Portfolio" target="_blank" rel="noreferrer">Source Code</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
