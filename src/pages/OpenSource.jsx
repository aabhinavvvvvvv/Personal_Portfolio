import { useEffect, useRef, useState } from 'react'

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const DAYS = ['', 'Mon', '', 'Wed', '', 'Fri', '']

// Icon/color config per org — used when API data comes in
const ORG_CONFIG = {
  'jlab-sensing/ENTS-backend':                     { icon: 'sensors',       color: 'text-primary',   borderColor: 'border-primary/30',   bgColor: 'bg-primary/5' },
  'StatTag/StatWrap':                              { icon: 'analytics',     color: 'text-secondary', borderColor: 'border-secondary/30', bgColor: 'bg-secondary/5' },
  'PalisadoesFoundation/talawa-api':               { icon: 'api',           color: 'text-tertiary',  borderColor: 'border-tertiary/30',  bgColor: 'bg-tertiary/5' },
  'AcademySoftwareFoundation/dna':                 { icon: 'biotech',       color: 'text-primary',   borderColor: 'border-primary/30',   bgColor: 'bg-primary/5' },
  'AcademySoftwareFoundation/rawtoaces':           { icon: 'photo_camera',  color: 'text-tertiary',  borderColor: 'border-tertiary/30',  bgColor: 'bg-tertiary/5' },
  'edulinq/autograder-server':                     { icon: 'school',        color: 'text-primary',   borderColor: 'border-primary/30',   bgColor: 'bg-primary/5' },
  'volcano-sh/volcano':                            { icon: 'bolt',          color: 'text-secondary', borderColor: 'border-secondary/30', bgColor: 'bg-secondary/5' },
  'volcano-sh/kthena':                             { icon: 'rocket_launch', color: 'text-tertiary',  borderColor: 'border-tertiary/30',  bgColor: 'bg-tertiary/5' },
  'open-telemetry/opentelemetry-collector-contrib':{ icon: 'monitoring',    color: 'text-primary',   borderColor: 'border-primary/30',   bgColor: 'bg-primary/5' },
  'kyverno/kyverno':                               { icon: 'policy',        color: 'text-secondary', borderColor: 'border-secondary/30', bgColor: 'bg-secondary/5' },
  'kubeedge/ianvs':                                { icon: 'hub',           color: 'text-tertiary',  borderColor: 'border-tertiary/30',  bgColor: 'bg-tertiary/5' },
  'kptdev/kpt':                                    { icon: 'build',         color: 'text-primary',   borderColor: 'border-primary/30',   bgColor: 'bg-primary/5' },
  'AcademySoftwareFoundation/MaterialX':           { icon: 'texture',       color: 'text-secondary', borderColor: 'border-secondary/30', bgColor: 'bg-secondary/5' },
  'edulinq/lms-toolkit':                           { icon: 'menu_book',     color: 'text-tertiary',  borderColor: 'border-tertiary/30',  bgColor: 'bg-tertiary/5' },
  'PalisadoesFoundation/developer-docs':           { icon: 'description',   color: 'text-primary',   borderColor: 'border-primary/30',   bgColor: 'bg-primary/5' },
  'c2siorg/Codelabz':                              { icon: 'code',          color: 'text-secondary', borderColor: 'border-secondary/30', bgColor: 'bg-secondary/5' },
  'Kavyansh-Bagdi/UIDAI-Bot-Detection':            { icon: 'security',      color: 'text-tertiary',  borderColor: 'border-tertiary/30',  bgColor: 'bg-tertiary/5' },
}
const DEFAULT_COLORS = [
  { icon: 'commit',    color: 'text-primary',   borderColor: 'border-primary/30',   bgColor: 'bg-primary/5' },
  { icon: 'fork_right',color: 'text-secondary', borderColor: 'border-secondary/30', bgColor: 'bg-secondary/5' },
  { icon: 'merge',     color: 'text-tertiary',  borderColor: 'border-tertiary/30',  bgColor: 'bg-tertiary/5' },
]

function getOrgConfig(repo, idx) {
  return ORG_CONFIG[repo] ?? DEFAULT_COLORS[idx % DEFAULT_COLORS.length]
}

function groupPRsByRepo(prs) {
  const map = {}
  for (const pr of prs) {
    if (!map[pr.repo]) map[pr.repo] = []
    map[pr.repo].push(pr)
  }
  return Object.entries(map)
    .sort((a, b) => b[1].length - a[1].length)
    .map(([repo, repoPRs], idx) => ({ repo, prs: repoPRs, ...getOrgConfig(repo, idx) }))
}

function StateChip({ state }) {
  if (state === 'merged') return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-secondary/10 text-secondary border border-secondary/20">
      <span className="material-symbols-outlined text-[10px]">merge</span> Merged
    </span>
  )
  if (state === 'open') return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-primary/10 text-primary border border-primary/20">
      <span className="material-symbols-outlined text-[10px]">call_merge</span> Open
    </span>
  )
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-white/5 text-white/40 border border-white/10">
      Closed
    </span>
  )
}

function ContributionGraph({ weeks, totalContributions }) {
  const gridRef = useRef(null)

  useEffect(() => {
    if (!gridRef.current || !weeks?.length) return
    gridRef.current.innerHTML = ''

    const wrapper = document.createElement('div')
    wrapper.className = 'flex gap-1'

    // Day labels
    const dayCol = document.createElement('div')
    dayCol.className = 'flex flex-col gap-[3px] pr-2 pt-5'
    DAYS.forEach(day => {
      const label = document.createElement('div')
      label.className = 'text-[9px] text-on-surface-variant/40 h-[10px] flex items-center font-label'
      label.textContent = day
      dayCol.appendChild(label)
    })
    wrapper.appendChild(dayCol)

    const weeksWrapper = document.createElement('div')
    weeksWrapper.className = 'flex flex-col gap-1'

    // Month labels
    const monthRow = document.createElement('div')
    monthRow.className = 'flex gap-[3px] mb-1 h-4'
    let lastMonth = -1
    weeks.forEach(week => {
      const firstDay = week.contributionDays[0]
      const month = firstDay ? new Date(firstDay.date).getMonth() : -1
      const label = document.createElement('div')
      label.style.width = '10px'
      label.className = 'text-[9px] text-on-surface-variant/50 font-label overflow-visible whitespace-nowrap'
      if (month !== -1 && month !== lastMonth) {
        label.textContent = MONTHS[month]
        lastMonth = month
      }
      monthRow.appendChild(label)
    })
    weeksWrapper.appendChild(monthRow)

    // Find max for relative intensity
    const maxCount = Math.max(...weeks.flatMap(w => w.contributionDays.map(d => d.contributionCount)), 1)

    // Grid
    const gridRows = document.createElement('div')
    gridRows.className = 'flex gap-[3px]'
    weeks.forEach(week => {
      const col = document.createElement('div')
      col.className = 'flex flex-col gap-[3px]'
      week.contributionDays.forEach(day => {
        const intensity = day.contributionCount / maxCount
        const cell = document.createElement('div')
        const dateStr = new Date(day.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        cell.title = `${day.contributionCount} contributions on ${dateStr}`
        cell.className = 'w-[10px] h-[10px] rounded-[2px] transition-transform hover:scale-125 hover:z-10 cursor-pointer'
        if (intensity > 0.75)      cell.classList.add('bg-primary', 'shadow-[0_0_6px_rgba(0,210,255,0.6)]')
        else if (intensity > 0.5)  cell.classList.add('bg-primary/70')
        else if (intensity > 0.25) cell.classList.add('bg-primary/40')
        else if (intensity > 0)    cell.classList.add('bg-primary/15')
        else                       cell.classList.add('bg-white/5')
        col.appendChild(cell)
      })
      gridRows.appendChild(col)
    })
    weeksWrapper.appendChild(gridRows)
    wrapper.appendChild(weeksWrapper)
    gridRef.current.appendChild(wrapper)
  }, [weeks])

  return (
    <section className="mb-16">
      <div className="glass-card p-8 rounded-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 relative z-10">
          <div>
            <h3 className="font-headline text-2xl font-bold mb-1">Contribution Graph</h3>
            <p className="text-on-surface-variant text-sm font-label">
              <a href="https://github.com/aabhinavvvvvvv" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                github.com/aabhinavvvvvvv
              </a>
              {totalContributions ? ` · ${totalContributions} contributions this year` : ''}
            </p>
          </div>
          <div className="flex items-center gap-2 text-[10px] text-on-surface-variant uppercase tracking-widest font-label">
            <span>Less</span>
            <div className="flex gap-1">
              <div className="w-3 h-3 bg-white/5 rounded-[2px]" />
              <div className="w-3 h-3 bg-primary/15 rounded-[2px]" />
              <div className="w-3 h-3 bg-primary/40 rounded-[2px]" />
              <div className="w-3 h-3 bg-primary/70 rounded-[2px]" />
              <div className="w-3 h-3 bg-primary rounded-[2px] shadow-[0_0_6px_rgba(0,210,255,0.6)]" />
            </div>
            <span>More</span>
          </div>
        </div>
        <div className="overflow-x-auto pb-2">
          {weeks?.length
            ? <div ref={gridRef} className="min-w-[600px]" />
            : <div className="min-w-[600px] h-[120px] flex items-center justify-center">
                <span className="text-on-surface-variant/30 text-sm font-label animate-pulse">Loading contribution data…</span>
              </div>
          }
        </div>
      </div>
    </section>
  )
}

export default function OpenSource() {
  const [expandedOrg, setExpandedOrg] = useState(null)
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/api/github')
      .then(r => r.json())
      .then(setData)
      .catch(() => {})
  }, [])

  const prGroups = data?.prs ? groupPRsByRepo(data.prs) : []
  const allPRs = data?.prs ?? []
  const mergedCount = allPRs.filter(p => p.state === 'merged').length
  const openCount = allPRs.filter(p => p.state === 'open').length
  const orgCount = prGroups.length

  // Activity stream: last 10 updated PRs
  const activityStream = [...allPRs]
    .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
    .slice(0, 10)

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
            Seeking full-stack project collaborations while exploring blockchain technologies. Contributing across CNCF, Academy Software Foundation, and open research ecosystems.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://github.com/aabhinavvvvvvv"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full kinetic-gradient text-white font-headline font-bold text-sm shadow-[0_0_20px_rgba(0,210,255,0.3)] hover:scale-105 transition-all duration-300"
            >
              <span className="material-symbols-outlined text-sm">open_in_new</span>
              @aabhinavvvvvvv
            </a>
            <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full glass-card text-sm">
              {data ? (
                <>
                  <span className="text-secondary font-bold">{mergedCount} merged</span>
                  <span className="w-px h-4 bg-outline-variant" />
                  <span className="text-primary font-bold">{openCount} open</span>
                  <span className="w-px h-4 bg-outline-variant" />
                  <span className="text-on-surface-variant">{orgCount} orgs</span>
                  {data.stats && (
                    <>
                      <span className="w-px h-4 bg-outline-variant" />
                      <span className="text-on-surface-variant">{data.stats.publicRepos} repos</span>
                    </>
                  )}
                </>
              ) : (
                <span className="text-on-surface-variant/40 animate-pulse text-xs">Loading stats…</span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contribution Graph */}
      <ContributionGraph
        weeks={data?.contributions?.weeks}
        totalContributions={data?.contributions?.totalContributions}
      />

      {/* Activity Stream */}
      {activityStream.length > 0 && (
        <section className="mb-16 overflow-hidden">
          <h3 className="font-headline text-sm font-bold mb-6 text-on-surface-variant uppercase tracking-[0.3em]">Recent Activity Stream</h3>
          <div className="relative flex overflow-x-hidden glass-card rounded-xl py-5">
            <div className="animate-marquee whitespace-nowrap flex gap-12 items-center px-6">
              {activityStream.map((pr, i) => (
                <a key={i} href={pr.url} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm hover:opacity-80 transition-opacity">
                  <span className={`material-symbols-outlined text-sm ${pr.state === 'merged' ? 'text-secondary' : 'text-primary'}`}>
                    {pr.state === 'merged' ? 'merge' : 'call_merge'}
                  </span>
                  <span className="text-on-surface font-medium">{pr.title}</span>
                  <span className="text-on-surface-variant/40 text-[10px] uppercase tracking-widest border border-outline-variant/30 rounded-full px-2 py-0.5">
                    {pr.repo.split('/')[1]}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PR List */}
      <section className="mb-20">
        <h3 className="font-headline text-3xl font-bold mb-3 flex items-center gap-4">
          Pull Requests
          <div className="h-[1px] flex-grow bg-outline-variant/30" />
          {data ? (
            <span className="text-on-surface-variant text-base font-label font-normal">
              {allPRs.length} across {orgCount} orgs
            </span>
          ) : (
            <span className="text-on-surface-variant/30 text-sm font-label animate-pulse">Loading…</span>
          )}
        </h3>
        <p className="text-on-surface-variant text-sm mb-10 font-label">Click an organization to expand its pull requests</p>

        {!data && (
          <div className="space-y-3">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="glass-card rounded-2xl h-16 animate-pulse" />
            ))}
          </div>
        )}

        <div className="space-y-3">
          {prGroups.map((group, i) => {
            const isOpen = expandedOrg === i
            const mergedInOrg = group.prs.filter(p => p.state === 'merged').length
            const openInOrg = group.prs.filter(p => p.state === 'open').length
            return (
              <div key={i} className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? `border ${group.borderColor}` : 'border border-transparent hover:border-outline-variant/30'}`}>
                <button
                  className="w-full flex items-center justify-between p-5 hover:bg-white/[0.02] transition-colors"
                  onClick={() => setExpandedOrg(isOpen ? null : i)}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-9 h-9 rounded-xl ${group.bgColor} flex items-center justify-center shrink-0`}>
                      <span className={`material-symbols-outlined text-lg ${group.color}`}>{group.icon}</span>
                    </div>
                    <div className="text-left">
                      <h4 className="font-headline font-bold text-white text-sm">{group.repo}</h4>
                      <p className="text-on-surface-variant text-xs mt-0.5">{group.prs.length} pull request{group.prs.length > 1 ? 's' : ''}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    {mergedInOrg > 0 && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-secondary/10 text-secondary border border-secondary/20 hidden sm:inline-flex items-center gap-1">
                        <span className="material-symbols-outlined text-[10px]">merge</span>{mergedInOrg} merged
                      </span>
                    )}
                    {openInOrg > 0 && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 hidden sm:inline-flex items-center gap-1">
                        <span className="material-symbols-outlined text-[10px]">call_merge</span>{openInOrg} open
                      </span>
                    )}
                    <span className={`material-symbols-outlined text-on-surface-variant/50 text-sm transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                      expand_more
                    </span>
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t border-outline-variant/20">
                    {group.prs.map((pr, j) => (
                      <a
                        key={j}
                        href={pr.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-4 px-5 py-3.5 hover:bg-white/[0.03] transition-colors border-b border-outline-variant/10 last:border-0 group"
                      >
                        <span className={`material-symbols-outlined text-base shrink-0 ${pr.state === 'merged' ? 'text-secondary' : 'text-primary'}`}>
                          {pr.state === 'merged' ? 'merge' : 'call_merge'}
                        </span>
                        <p className="text-on-surface text-sm font-medium group-hover:text-primary transition-colors leading-snug flex-1 min-w-0 truncate">
                          {pr.title}
                        </p>
                        <div className="flex items-center gap-3 shrink-0 ml-2">
                          <StateChip state={pr.state} />
                          <span className="text-on-surface-variant/40 text-xs font-mono">#{pr.number}</span>
                          <span className="material-symbols-outlined text-xs text-on-surface-variant/30 group-hover:text-primary transition-colors">open_in_new</span>
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
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
