import { useEffect, useRef, useState } from 'react'

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const DAYS = ['', 'Mon', '', 'Wed', '', 'Fri', '']

const PR_ORGS = [
  {
    org: 'jlab-sensing/ENTS-backend',
    icon: 'sensors',
    color: 'text-primary',
    borderColor: 'border-primary/30',
    bgColor: 'bg-primary/5',
    prs: [
      { title: 'fix: return 400 on duplicate logger name in PUT /api/logger/:id', num: '#710', state: 'open', url: 'https://github.com/jlab-sensing/ENTS-backend/pull/710' },
      { title: 'fix: resolve test hang caused by PostgreSQL lock conflict in test_cell.py', num: '#695', state: 'open', url: 'https://github.com/jlab-sensing/ENTS-backend/pull/695' },
      { title: 'feat: query sensors only if they exist, batch sensor data requests', num: '#684', state: 'open', url: 'https://github.com/jlab-sensing/ENTS-backend/pull/684' },
      { title: 'feat: add cell name search to GET /api/cell/ endpoint', num: '#685', state: 'merged', url: 'https://github.com/jlab-sensing/ENTS-backend/pull/685' },
      { title: 'fix: harden Google OAuth token exchange and tolerate Docker clock skew', num: '#651', state: 'merged', url: 'https://github.com/jlab-sensing/ENTS-backend/pull/651' },
      { title: 'feat: query sensors only if they exist, batch sensor data requests', num: '#650', state: 'merged', url: 'https://github.com/jlab-sensing/ENTS-backend/pull/650' },
      { title: 'fix: show required field errors only after user interaction', num: '#646', state: 'merged', url: 'https://github.com/jlab-sensing/ENTS-backend/pull/646' },
      { title: 'Fix cell tag assignment and lat/long display for zero values', num: '#623', state: 'merged', url: 'https://github.com/jlab-sensing/ENTS-backend/pull/623' },
    ],
  },
  {
    org: 'StatTag/StatWrap',
    icon: 'analytics',
    color: 'text-secondary',
    borderColor: 'border-secondary/30',
    bgColor: 'bg-secondary/5',
    prs: [
      { title: 'fix: improve notes UX and add person delete confirmation', num: '#375', state: 'open', url: 'https://github.com/StatTag/StatWrap/pull/375' },
      { title: 'feat: add JavaScript/JSX asset handler', num: '#370', state: 'open', url: 'https://github.com/StatTag/StatWrap/pull/370' },
      { title: 'fix: pass id and name through createStatWrapConfig for cloned projects', num: '#361', state: 'merged', url: 'https://github.com/StatTag/StatWrap/pull/361' },
      { title: 'fix: reset DataTable state on Expand All / Collapse All click', num: '#360', state: 'merged', url: 'https://github.com/StatTag/StatWrap/pull/360' },
      { title: 'fix: correctly increment userProfileDialogKey in setState', num: '#351', state: 'merged', url: 'https://github.com/StatTag/StatWrap/pull/351' },
      { title: 'fix: remove duplicate URL key in AssetType constant', num: '#350', state: 'merged', url: 'https://github.com/StatTag/StatWrap/pull/350' },
      { title: 'Feature: Auto-select default project on app load', num: '#309', state: 'merged', url: 'https://github.com/StatTag/StatWrap/pull/309' },
      { title: 'Fix: Clear project selection after removing a project', num: '#308', state: 'merged', url: 'https://github.com/StatTag/StatWrap/pull/308' },
      { title: 'feat: implement live search with debounce', num: '#306', state: 'merged', url: 'https://github.com/StatTag/StatWrap/pull/306' },
    ],
  },
  {
    org: 'PalisadoesFoundation/talawa-api',
    icon: 'api',
    color: 'text-tertiary',
    borderColor: 'border-tertiary/30',
    bgColor: 'bg-tertiary/5',
    prs: [
      { title: 'test: add comprehensive integration tests for getVolunteerMembership', num: '#5275', state: 'merged', url: 'https://github.com/PalisadoesFoundation/talawa-api/pull/5275' },
      { title: 'test: add integration tests for Query plugins.ts', num: '#5271', state: 'merged', url: 'https://github.com/PalisadoesFoundation/talawa-api/pull/5271' },
      { title: 'test: add unit tests for User.countryCode resolver', num: '#5254', state: 'merged', url: 'https://github.com/PalisadoesFoundation/talawa-api/pull/5254' },
      { title: 'test: add unit tests for User.addressLine2 resolver', num: '#5251', state: 'merged', url: 'https://github.com/PalisadoesFoundation/talawa-api/pull/5251' },
      { title: 'test: add unit tests for User.creator resolver', num: '#5246', state: 'merged', url: 'https://github.com/PalisadoesFoundation/talawa-api/pull/5246' },
      { title: 'test: add unit tests for User.employmentStatus resolver', num: '#5245', state: 'merged', url: 'https://github.com/PalisadoesFoundation/talawa-api/pull/5245' },
      { title: 'test: add unit tests for User.isEmailAddressVerified resolver', num: '#5229', state: 'merged', url: 'https://github.com/PalisadoesFoundation/talawa-api/pull/5229' },
      { title: 'fix: remove ANSI color codes from test files', num: '#4946', state: 'merged', url: 'https://github.com/PalisadoesFoundation/talawa-api/pull/4946' },
      { title: 'Fix/remove ANSI colors from test files', num: '#4945', state: 'merged', url: 'https://github.com/PalisadoesFoundation/talawa-api/pull/4945' },
    ],
  },
  {
    org: 'AcademySoftwareFoundation/dna',
    icon: 'biotech',
    color: 'text-primary',
    borderColor: 'border-primary/30',
    bgColor: 'bg-primary/5',
    prs: [
      { title: 'feat: add @mention support in note markdown editor', num: '#112', state: 'merged', url: 'https://github.com/AcademySoftwareFoundation/dna/pull/112' },
      { title: 'Implement interactive notes properties panel with entity search', num: '#71', state: 'merged', url: 'https://github.com/AcademySoftwareFoundation/dna/pull/71' },
      { title: 'Add unified entity search endpoint', num: '#63', state: 'merged', url: 'https://github.com/AcademySoftwareFoundation/dna/pull/63' },
    ],
  },
  {
    org: 'AcademySoftwareFoundation/rawtoaces',
    icon: 'photo_camera',
    color: 'text-tertiary',
    borderColor: 'border-tertiary/30',
    bgColor: 'bg-tertiary/5',
    prs: [
      { title: 'Fix/verbosity log output', num: '#249', state: 'merged', url: 'https://github.com/AcademySoftwareFoundation/rawtoaces/pull/249' },
      { title: 'Refactor error handling to separate library and CLI error messages', num: '#237', state: 'merged', url: 'https://github.com/AcademySoftwareFoundation/rawtoaces/pull/237' },
    ],
  },
  {
    org: 'edulinq/autograder-server',
    icon: 'school',
    color: 'text-primary',
    borderColor: 'border-primary/30',
    bgColor: 'bg-primary/5',
    prs: [
      { title: 'Add benevolent late day allocation feature', num: '#206', state: 'open', url: 'https://github.com/edulinq/autograder-server/pull/206' },
      { title: 'Add grace time feature for assignment due dates', num: '#205', state: 'merged', url: 'https://github.com/edulinq/autograder-server/pull/205' },
    ],
  },
  {
    org: 'volcano-sh/volcano',
    icon: 'bolt',
    color: 'text-secondary',
    borderColor: 'border-secondary/30',
    bgColor: 'bg-secondary/5',
    prs: [
      { title: 'Fix flaky test: stop waiting after Restarting phase', num: '#5021', state: 'open', url: 'https://github.com/volcano-sh/volcano/pull/5021' },
    ],
  },
  {
    org: 'volcano-sh/kthena',
    icon: 'rocket_launch',
    color: 'text-tertiary',
    borderColor: 'border-tertiary/30',
    bgColor: 'bg-tertiary/5',
    prs: [
      { title: 'model-serving: enable rolling updates for networkTopology and gangPolicy', num: '#704', state: 'open', url: 'https://github.com/volcano-sh/kthena/pull/704' },
    ],
  },
  {
    org: 'open-telemetry/opentelemetry-collector-contrib',
    icon: 'monitoring',
    color: 'text-primary',
    borderColor: 'border-primary/30',
    bgColor: 'bg-primary/5',
    prs: [
      { title: '[pkg/stanza] Add support for `if` option in `recombine` operator', num: '#46074', state: 'merged', url: 'https://github.com/open-telemetry/opentelemetry-collector-contrib/pull/46074' },
    ],
  },
  {
    org: 'kyverno/kyverno',
    icon: 'policy',
    color: 'text-secondary',
    borderColor: 'border-secondary/30',
    bgColor: 'bg-secondary/5',
    prs: [
      { title: 'fix(cli): return error instead of panic when imageRegistryCredentials.secrets are used', num: '#15061', state: 'merged', url: 'https://github.com/kyverno/kyverno/pull/15061' },
    ],
  },
  {
    org: 'kubeedge/ianvs',
    icon: 'hub',
    color: 'text-tertiary',
    borderColor: 'border-tertiary/30',
    bgColor: 'bg-tertiary/5',
    prs: [
      { title: 'fix: rename base_model_url to initial_model_url for consistency', num: '#309', state: 'open', url: 'https://github.com/kubeedge/ianvs/pull/309' },
    ],
  },
  {
    org: 'kptdev/kpt',
    icon: 'build',
    color: 'text-primary',
    borderColor: 'border-primary/30',
    bgColor: 'bg-primary/5',
    prs: [
      { title: 'fix: add shell language specifier to fn doc Flags code block', num: '#4377', state: 'merged', url: 'https://github.com/kptdev/kpt/pull/4377' },
    ],
  },
  {
    org: 'AcademySoftwareFoundation/MaterialX',
    icon: 'texture',
    color: 'text-secondary',
    borderColor: 'border-secondary/30',
    bgColor: 'bg-secondary/5',
    prs: [
      { title: 'Fix inconsistent background color in MaterialXView on Metal', num: '#2800', state: 'merged', url: 'https://github.com/AcademySoftwareFoundation/MaterialX/pull/2800' },
    ],
  },
  {
    org: 'edulinq/lms-toolkit',
    icon: 'menu_book',
    color: 'text-tertiary',
    borderColor: 'border-tertiary/30',
    bgColor: 'bg-tertiary/5',
    prs: [
      { title: 'Add optional header support for table input files', num: '#34', state: 'merged', url: 'https://github.com/edulinq/lms-toolkit/pull/34' },
    ],
  },
  {
    org: 'PalisadoesFoundation/developer-docs',
    icon: 'description',
    color: 'text-primary',
    borderColor: 'border-primary/30',
    bgColor: 'bg-primary/5',
    prs: [
      { title: 'Update 2025.md', num: '#42', state: 'merged', url: 'https://github.com/PalisadoesFoundation/developer-docs/pull/42' },
    ],
  },
  {
    org: 'c2siorg/Codelabz',
    icon: 'code',
    color: 'text-secondary',
    borderColor: 'border-secondary/30',
    bgColor: 'bg-secondary/5',
    prs: [
      { title: 'docs: add INSTALLATION.md with validated setup guide', num: '#297', state: 'open', url: 'https://github.com/c2siorg/Codelabz/pull/297' },
    ],
  },
  {
    org: 'Kavyansh-Bagdi/UIDAI-Bot-Detection',
    icon: 'security',
    color: 'text-tertiary',
    borderColor: 'border-tertiary/30',
    bgColor: 'bg-tertiary/5',
    prs: [
      { title: 'adding login page', num: '#1', state: 'merged', url: 'https://github.com/Kavyansh-Bagdi/UIDAI-Bot-Detection/pull/1' },
      { title: 'adding ux', num: '#2', state: 'merged', url: 'https://github.com/Kavyansh-Bagdi/UIDAI-Bot-Detection/pull/2' },
    ],
  },
]

const ACTIVITY_STREAM = [
  { icon: 'merge', color: 'text-primary', text: 'fix: harden Google OAuth & Docker clock skew', org: 'ENTS-backend' },
  { icon: 'add_circle', color: 'text-secondary', text: 'fix: reset DataTable on Expand All click', org: 'StatWrap' },
  { icon: 'commit', color: 'text-tertiary', text: '[pkg/stanza] Add `if` option in recombine operator', org: 'opentelemetry' },
  { icon: 'merge', color: 'text-primary', text: 'fix(cli): return error instead of panic — kyverno', org: 'kyverno' },
  { icon: 'add_circle', color: 'text-secondary', text: 'feat: add @mention support in note markdown editor', org: 'dna' },
  { icon: 'bug_report', color: 'text-tertiary', text: 'Fix inconsistent background in MaterialXView on Metal', org: 'MaterialX' },
  { icon: 'merge', color: 'text-primary', text: 'test: add integration tests for getVolunteerMembership', org: 'talawa-api' },
  { icon: 'commit', color: 'text-secondary', text: 'model-serving: enable rolling updates for gangPolicy', org: 'kthena' },
  { icon: 'merge', color: 'text-primary', text: 'fix: harden Google OAuth & Docker clock skew', org: 'ENTS-backend' },
  { icon: 'add_circle', color: 'text-secondary', text: 'fix: reset DataTable on Expand All click', org: 'StatWrap' },
]

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

export default function OpenSource() {
  const gridRef = useRef(null)
  const [expandedOrg, setExpandedOrg] = useState(null)

  const allPRs = PR_ORGS.flatMap(o => o.prs)
  const totalPRs = allPRs.length
  const mergedCount = allPRs.filter(p => p.state === 'merged').length
  const openCount = allPRs.filter(p => p.state === 'open').length

  useEffect(() => {
    if (!gridRef.current) return
    gridRef.current.innerHTML = ''

    const now = new Date()
    const cells = []
    for (let i = 363; i >= 0; i--) {
      const d = new Date(now)
      d.setDate(d.getDate() - i)
      cells.push({ date: d, intensity: Math.random() })
    }

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
    for (let w = 0; w < 52; w++) {
      const cellDate = cells[w * 7]?.date
      const month = cellDate?.getMonth()
      const label = document.createElement('div')
      label.style.width = '10px'
      label.className = 'text-[9px] text-on-surface-variant/50 font-label overflow-visible whitespace-nowrap'
      if (month !== undefined && month !== lastMonth) {
        label.textContent = MONTHS[month]
        lastMonth = month
      }
      monthRow.appendChild(label)
    }
    weeksWrapper.appendChild(monthRow)

    // Grid
    const gridRows = document.createElement('div')
    gridRows.className = 'flex gap-[3px]'
    for (let w = 0; w < 52; w++) {
      const col = document.createElement('div')
      col.className = 'flex flex-col gap-[3px]'
      for (let d = 0; d < 7; d++) {
        const { intensity } = cells[w * 7 + d] || { intensity: 0 }
        const cell = document.createElement('div')
        cell.className = 'w-[10px] h-[10px] rounded-[2px] transition-transform hover:scale-125 hover:z-10 cursor-pointer'
        if (intensity > 0.9) cell.classList.add('bg-primary', 'shadow-[0_0_6px_rgba(0,210,255,0.6)]')
        else if (intensity > 0.7) cell.classList.add('bg-primary/70')
        else if (intensity > 0.45) cell.classList.add('bg-primary/40')
        else if (intensity > 0.15) cell.classList.add('bg-primary/15')
        else cell.classList.add('bg-white/5')
        col.appendChild(cell)
      }
      gridRows.appendChild(col)
    }
    weeksWrapper.appendChild(gridRows)
    wrapper.appendChild(weeksWrapper)
    gridRef.current.appendChild(wrapper)
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
              <span className="text-secondary font-bold">{mergedCount} merged</span>
              <span className="w-px h-4 bg-outline-variant" />
              <span className="text-primary font-bold">{openCount} open</span>
              <span className="w-px h-4 bg-outline-variant" />
              <span className="text-on-surface-variant">{PR_ORGS.length} orgs</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contribution Graph */}
      <section className="mb-16">
        <div className="glass-card p-8 rounded-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 relative z-10">
            <div>
              <h3 className="font-headline text-2xl font-bold mb-1">Contribution Graph</h3>
              <p className="text-on-surface-variant text-sm font-label">
                <a href="https://github.com/aabhinavvvvvvv" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">github.com/aabhinavvvvvvv</a>
                {' '}· 61 public repositories
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
            <div ref={gridRef} className="min-w-[600px]" />
          </div>
        </div>
      </section>

      {/* Activity Stream */}
      <section className="mb-16 overflow-hidden">
        <h3 className="font-headline text-sm font-bold mb-6 text-on-surface-variant uppercase tracking-[0.3em]">Recent Activity Stream</h3>
        <div className="relative flex overflow-x-hidden glass-card rounded-xl py-5">
          <div className="animate-marquee whitespace-nowrap flex gap-12 items-center px-6">
            {ACTIVITY_STREAM.map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-sm">
                <span className={`material-symbols-outlined ${item.color} text-sm`}>{item.icon}</span>
                <span className="text-on-surface font-medium">{item.text}</span>
                <span className="text-on-surface-variant/40 text-[10px] uppercase tracking-widest border border-outline-variant/30 rounded-full px-2 py-0.5">{item.org}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PR List */}
      <section className="mb-20">
        <h3 className="font-headline text-3xl font-bold mb-3 flex items-center gap-4">
          Pull Requests
          <div className="h-[1px] flex-grow bg-outline-variant/30" />
          <span className="text-on-surface-variant text-base font-label font-normal">{totalPRs} across {PR_ORGS.length} orgs</span>
        </h3>
        <p className="text-on-surface-variant text-sm mb-10 font-label">Click an organization to expand its pull requests</p>

        <div className="space-y-3">
          {PR_ORGS.map((org, i) => {
            const isOpen = expandedOrg === i
            const mergedInOrg = org.prs.filter(p => p.state === 'merged').length
            const openInOrg = org.prs.filter(p => p.state === 'open').length
            return (
              <div key={i} className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? `border ${org.borderColor}` : 'border border-transparent hover:border-outline-variant/30'}`}>
                <button
                  className="w-full flex items-center justify-between p-5 hover:bg-white/[0.02] transition-colors"
                  onClick={() => setExpandedOrg(isOpen ? null : i)}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-9 h-9 rounded-xl ${org.bgColor} flex items-center justify-center shrink-0`}>
                      <span className={`material-symbols-outlined text-lg ${org.color}`}>{org.icon}</span>
                    </div>
                    <div className="text-left">
                      <h4 className="font-headline font-bold text-white text-sm">{org.org}</h4>
                      <p className="text-on-surface-variant text-xs mt-0.5">{org.prs.length} pull request{org.prs.length > 1 ? 's' : ''}</p>
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
                    {org.prs.map((pr, j) => (
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
                          <span className="text-on-surface-variant/40 text-xs font-mono">{pr.num}</span>
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
