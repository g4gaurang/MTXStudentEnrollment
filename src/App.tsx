import { FormEvent, useEffect, useId, useRef, useState } from 'react'
import {
  Activity,
  AlertCircle,
  ArrowRight,
  Bell,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  Clock3,
  Database,
  FileCheck2,
  FileText,
  Filter,
  Info,
  Layers3,
  LockKeyhole,
  Menu,
  MessageSquare,
  MonitorCog,
  Network,
  PanelLeft,
  RefreshCw,
  Search,
  Send,
  Settings2,
  ShieldCheck,
  Sparkles,
  Upload,
  UserRound,
  UsersRound,
  Workflow,
  X,
} from 'lucide-react'
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import {
  architecture,
  automationSteps,
  capabilityGroups,
  challenges,
  journey,
  phases,
  portalScenarios,
  productOutcomes,
  roles,
  settings,
  staffApplications,
} from './data'

const navItems = [
  ['Product', 'product'],
  ['Challenges', 'challenges'],
  ['Enrollment Journey', 'journey'],
  ['Experiences', 'experiences'],
  ['Capabilities', 'capabilities'],
  ['Analytics', 'analytics'],
  ['Architecture', 'architecture'],
  ['Adoption', 'adoption'],
]

const analyticsData = {
  journey: {
    label: 'Applicant journey',
    summary: 'The illustrative funnel moves from 1,240 application starts to 846 submissions and 612 onboarding responses.',
    cards: [
      ['Application starts', '1,240', 'A saved or submitted application record created in the selected period.'],
      ['Submitted applications', '846', 'Applications submitted for staff processing in the selected period.'],
      ['Completion rate', '68%', 'Submitted applications divided by application starts in this fictional view.'],
      ['Awaiting applicant action', '174', 'Applications paused at a milestone assigned to the applicant.'],
    ],
    chart: [
      { name: 'Started', value: 1240 },
      { name: 'Submitted', value: 846 },
      { name: 'Documents ready', value: 702 },
      { name: 'Reviewed', value: 659 },
      { name: 'Response', value: 612 },
    ],
  },
  operations: {
    label: 'Operations',
    summary: 'The fictional queue contains 238 active applications, including 41 pending verifications and 18 open exceptions.',
    cards: [
      ['Active applications', '238', 'Applications in staff-controlled workflow stages.'],
      ['Average stage age', '3.4 days', 'Mean elapsed time in the current stage for this fictional period.'],
      ['Pending verifications', '41', 'Configured verification tasks without a recorded outcome.'],
      ['Open exceptions', '18', 'Exceptions requiring a permitted resolution or escalation.'],
    ],
    chart: [
      { name: 'Intake', value: 54 },
      { name: 'Documents', value: 63 },
      { name: 'Verification', value: 41 },
      { name: 'Review', value: 58 },
      { name: 'Response', value: 22 },
    ],
  },
  planning: {
    label: 'Planning',
    summary: 'Fictional demand varies by program, with 420 applications for Technology Foundations and 260 for Community Studies.',
    cards: [
      ['Technology Foundations', '420', 'Applications associated with this fictional program.'],
      ['Community Studies', '260', 'Applications associated with this fictional program.'],
      ['Available cohort places', '540', 'Configured capacity across the displayed fictional programs.'],
      ['Waitlist activity', '37', 'Applicants currently recorded in a fictional waitlist stage.'],
    ],
    chart: [
      { name: 'Technology', value: 420 },
      { name: 'Community', value: 260 },
      { name: 'Applied learning', value: 310 },
      { name: 'Career pathways', value: 185 },
    ],
  },
}

const integrationCategories = [
  'Student information systems',
  'Admissions and enrollment platforms',
  'Learning management systems',
  'Identity and access services',
  'Payment services',
  'Financial-aid systems',
  'Document repositories',
  'Communication platforms',
  'Scheduling services',
  'Data warehouses and analytics platforms',
  'State or agency data services',
  'Address and residency data services where approved',
]

const controls = [
  'Human review for consequential decisions',
  'Source traceability',
  'Role-based access',
  'Configurable thresholds',
  'Approved templates',
  'Correction and override capture',
  'Model and rule version records',
  'Performance monitoring',
]

const privacyItems = [
  ['Access and identity', 'Role-based access, identity options, environment separation, and authentication patterns aligned to institutional standards.', LockKeyhole],
  ['Responsible data handling', 'Data minimization, consent preferences, encryption, configurable retention, and recorded audit history.', ShieldCheck],
  ['Operational protection', 'Monitoring, secure integration patterns, controlled releases, backup, and recovery based on the deployed architecture.', MonitorCog],
  ['Inclusive experiences', 'Accessible forms, keyboard navigation, screen-reader support, responsive layouts, and configured language support.', UsersRound],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} openModal={() => setModalOpen(true)} />
      <main id="main-content">
        <Hero openModal={() => setModalOpen(true)} />
        <OutcomeStrip />
        <Challenges />
        <Journey />
        <SettingSelector />
        <RoleExperiences />
        <Capabilities />
        <ApplicantPortal />
        <StaffWorkspace />
        <Automation />
        <Analytics />
        <Privacy />
        <Architecture />
        <Integrations />
        <ConfigurationStudio />
        <Adoption />
        <DeliveryModel />
        <WhyMtx />
        <FinalCta openModal={() => setModalOpen(true)} />
      </main>
      <Footer />
      {modalOpen && <DemoModal close={() => setModalOpen(false)} />}
    </>
  )
}

function Header({
  menuOpen,
  setMenuOpen,
  openModal,
}: {
  menuOpen: boolean
  setMenuOpen: (open: boolean) => void
  openModal: () => void
}) {
  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="MTX Student Enrollment home">
          <span>MTX</span>
          <small>Student Enrollment</small>
        </a>
        <button
          className="icon-button menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        <div id="primary-menu" className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <button className="button small" type="button" onClick={openModal}>
            Request a Demo
          </button>
        </div>
      </nav>
    </header>
  )
}

function Hero({ openModal }: { openModal: () => void }) {
  const [view, setView] = useState<'applicant' | 'staff'>('applicant')
  return (
    <section className="hero" id="top">
      <div className="hero-orb one" aria-hidden="true" />
      <div className="hero-orb two" aria-hidden="true" />
      <div className="section-shell hero-grid">
        <div className="hero-copy">
          <p className="eyebrow light">MTX Education</p>
          <h1>Make enrollment easier to complete and easier to manage.</h1>
          <p className="hero-lead">
            MTX Student Enrollment connects application, document collection, review, decisions, registration, and onboarding through configurable digital experiences that work with your education technology environment.
          </p>
          <div className="button-row">
            <button className="button warm" type="button" onClick={openModal}>
              Request a Product Demonstration <ArrowRight aria-hidden="true" />
            </button>
            <a className="button ghost-light" href="#journey">
              Explore the Enrollment Journey
            </a>
          </div>
          <div className="hero-proof" aria-label="Product characteristics">
            <span><Check /> Modular adoption</span>
            <span><Check /> Platform-neutral architecture</span>
            <span><Check /> Institution-configured policies</span>
          </div>
        </div>
        <div className="product-frame hero-product" aria-label="Interactive illustrative product view">
          <div className="frame-top">
            <span><i /> <i /> <i /></span>
            <strong>Illustrative product view</strong>
            <span className="secure-label"><LockKeyhole /> Protected workspace</span>
          </div>
          <div className="view-switch" role="tablist" aria-label="Choose product view">
            <button role="tab" aria-selected={view === 'applicant'} onClick={() => setView('applicant')}>Applicant</button>
            <button role="tab" aria-selected={view === 'staff'} onClick={() => setView('staff')}>Staff review</button>
          </div>
          {view === 'applicant' ? <HeroApplicant /> : <HeroStaff />}
        </div>
      </div>
    </section>
  )
}

function HeroApplicant() {
  return (
    <div className="mini-dashboard">
      <div className="mini-welcome">
        <div><p>Welcome back, Jordan</p><strong>Your application is moving forward</strong></div>
        <span className="status blue">Under review</span>
      </div>
      <div className="progress-label"><span>Enrollment checklist</span><strong>4 of 6 complete</strong></div>
      <div className="progress-track"><span style={{ width: '67%' }} /></div>
      <div className="mini-grid">
        <div className="mini-card wide">
          <div className="card-title"><FileCheck2 /> Required documents</div>
          <ul className="clean-list checklist">
            <li><CheckCircle2 /> Application <span>Complete</span></li>
            <li><CheckCircle2 /> Identity document <span>Verified</span></li>
            <li><Clock3 /> Education record <span>In review</span></li>
          </ul>
        </div>
        <div className="mini-card">
          <div className="card-title"><CalendarDays /> Appointment</div>
          <strong>Oct 22 · 4:00 PM</strong>
          <p>Virtual welcome session</p>
        </div>
        <div className="mini-card">
          <div className="card-title"><MessageSquare /> Messages</div>
          <strong>2 recent updates</strong>
          <p>Documents received</p>
        </div>
      </div>
      <button className="next-action" type="button">View next action <ArrowRight /></button>
    </div>
  )
}

function HeroStaff() {
  return (
    <div className="mini-dashboard">
      <div className="mini-welcome">
        <div><p>Review workspace</p><strong>Assigned application queue</strong></div>
        <span className="status amber">6 need attention</span>
      </div>
      <div className="stat-row">
        <div><strong>24</strong><span>Assigned</span></div>
        <div><strong>18</strong><span>Complete files</span></div>
        <div><strong>5</strong><span>Verifications</span></div>
        <div><strong>2</strong><span>Exceptions</span></div>
      </div>
      <div className="mini-card queue-card">
        <div className="queue-line heading"><span>Application</span><span>Completeness</span><span>Reviewer</span><span>Status</span></div>
        <div className="queue-line"><strong>Avery R.</strong><span>92%</span><span>M. Chen</span><span className="status blue">Review</span></div>
        <div className="queue-line"><strong>Morgan E.</strong><span>68%</span><span>D. Patel</span><span className="status amber">Missing item</span></div>
        <div className="queue-line"><strong>Riley S.</strong><span>100%</span><span>M. Chen</span><span className="status red">Exception</span></div>
      </div>
      <p className="microcopy"><ShieldCheck /> Consequential actions remain with authorized staff.</p>
    </div>
  )
}

function OutcomeStrip() {
  return (
    <section className="outcome-strip" id="product" aria-labelledby="outcome-heading">
      <div className="section-shell">
        <p className="eyebrow" id="outcome-heading">Designed product objectives</p>
        <div className="outcome-grid">
          {productOutcomes.map(({ title, icon: Icon }) => (
            <div key={title}><span><Icon /></span><strong>{title}</strong></div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Challenges() {
  const [active, setActive] = useState(0)
  const challenge = challenges[active]
  return (
    <Section
      id="challenges"
      eyebrow="Problems to solve"
      title="Enrollment becomes difficult when applicants and staff work across disconnected processes."
      intro="Select a challenge to see who it affects, how the work changes, and which measures can help teams understand the process."
    >
      <div className="challenge-layout">
        <div className="challenge-tabs" role="tablist" aria-label="Enrollment challenges">
          {challenges.map((item, index) => (
            <button
              key={item.title}
              role="tab"
              aria-selected={active === index}
              aria-controls="challenge-detail"
              onClick={() => setActive(index)}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              {item.title}
              <ArrowRight />
            </button>
          ))}
        </div>
        <div className="detail-panel" id="challenge-detail" role="tabpanel" aria-live="polite">
          <p className="detail-kicker">Challenge {active + 1}</p>
          <h3>{challenge.title}</h3>
          <Detail label="The challenge" text={challenge.problem} />
          <div className="two-column-detail">
            <Detail label="Who experiences it" text={challenge.people} />
            <Detail label="Operational consequence" text={challenge.consequence} />
          </div>
          <div className="response-box">
            <Sparkles />
            <div><strong>MTX response</strong><p>{challenge.response}</p></div>
          </div>
          <div className="measure-list">
            <strong>Suggested measures</strong>
            <div>{challenge.measures.map((measure) => <span key={measure}>{measure}</span>)}</div>
          </div>
        </div>
      </div>
    </Section>
  )
}

function Journey() {
  const [active, setActive] = useState(0)
  const stage = journey[active]
  return (
    <Section
      id="journey"
      dark
      eyebrow="Connected enrollment lifecycle"
      title="One journey. Configured around your institution."
      intro="Each stage can be introduced, named, governed, and connected according to the institution’s programs and policies."
    >
      <div className="stepper" role="tablist" aria-label="Enrollment journey stages">
        {journey.map((item, index) => (
          <button key={item.name} role="tab" aria-selected={active === index} onClick={() => setActive(index)}>
            <span>{index + 1}</span><small>{item.name}</small>
          </button>
        ))}
      </div>
      <div className="journey-detail" role="tabpanel" aria-live="polite">
        <div className="journey-stage">
          <span>Stage {active + 1} of {journey.length}</span>
          <h3>{stage.name}</h3>
          <p>{stage.applicant}</p>
        </div>
        <div className="journey-info-grid">
          <Detail label="Applicant or family" text={stage.applicant} />
          <Detail label="Staff responsibilities" text={stage.staff} />
          <div><strong className="detail-label">Product capabilities</strong><TagList items={stage.capabilities} /></div>
          <Detail label="Data and policy considerations" text={stage.data} />
          <div className="journey-measures"><strong className="detail-label">Suggested measures</strong><TagList items={stage.measures} /></div>
        </div>
      </div>
      <p className="section-note">Decision types vary. Institutions configure applicable paths, terms, authority, and review requirements.</p>
    </Section>
  )
}

function SettingSelector() {
  const [active, setActive] = useState(0)
  const setting = settings[active]
  return (
    <Section
      id="experiences"
      eyebrow="Education settings"
      title="A shared product foundation with institution-specific terminology."
      intro="The product can support different education settings without treating their policies or workflows as identical."
    >
      <div className="large-tabs" role="tablist" aria-label="Education settings">
        {settings.map((item, index) => {
          const Icon = item.icon
          return <button key={item.id} role="tab" aria-selected={active === index} onClick={() => setActive(index)}><Icon />{item.label}</button>
        })}
      </div>
      <div className="setting-panel" role="tabpanel">
        <div>
          <p className="detail-kicker">Configured language</p>
          <h3>{setting.label}</h3>
          <dl className="term-list">
            <div><dt>Primary participant</dt><dd>{setting.terms.applicant}</dd></div>
            <div><dt>Enrollment choice</dt><dd>{setting.terms.program}</dd></div>
            <div><dt>Potential outcome</dt><dd>{setting.terms.decision}</dd></div>
          </dl>
        </div>
        <div>
          <strong className="detail-label">Example workflows</strong>
          <TagList items={setting.examples} />
        </div>
      </div>
    </Section>
  )
}

function RoleExperiences() {
  const [active, setActive] = useState(0)
  const role = roles[active]
  const Icon = role.icon
  return (
    <Section
      eyebrow="Role-based experiences"
      title="Focused work for each participant."
      intro="Permissions, tasks, and information can reflect the participant’s role and the institution’s operating model."
    >
      <div className="persona-grid">
        <div className="persona-buttons" role="tablist" aria-label="Enrollment roles">
          {roles.map((item, index) => {
            const ItemIcon = item.icon
            return <button key={item.title} role="tab" aria-selected={active === index} onClick={() => setActive(index)}><ItemIcon /><span>{item.title}</span></button>
          })}
        </div>
        <div className="persona-detail" role="tabpanel" aria-live="polite">
          <span className="persona-icon"><Icon /></span>
          <p className="detail-kicker">Role experience</p>
          <h3>{role.title}</h3>
          <p>{role.text}</p>
          <div className="persona-principle"><ShieldCheck /><span><strong>Controlled visibility</strong>Access can be configured around role, relationship, program, location, and assigned work.</span></div>
        </div>
      </div>
    </Section>
  )
}

function Capabilities() {
  const [active, setActive] = useState(0)
  const group = capabilityGroups[active]
  const Icon = group.icon
  return (
    <Section
      id="capabilities"
      soft
      eyebrow="Product capability families"
      title="Reusable capabilities for connected enrollment."
      intro="Institutions can adopt the capability families needed for a pathway and extend them as programs or service expectations change."
    >
      <div className="capability-layout">
        <div className="capability-nav" role="tablist" aria-label="Capability families">
          {capabilityGroups.map((item, index) => {
            const ItemIcon = item.icon
            return <button key={item.title} role="tab" aria-selected={active === index} onClick={() => setActive(index)}><ItemIcon /><span>{item.title}</span><ChevronDown /></button>
          })}
        </div>
        <div className="capability-detail" role="tabpanel">
          <span className="capability-icon"><Icon /></span>
          <p className="detail-kicker">Capability family {String.fromCharCode(65 + active)}</p>
          <h3>{group.title}</h3>
          <ul className="check-grid">
            {group.items.map((item) => <li key={item}><CheckCircle2 />{item}</li>)}
          </ul>
        </div>
      </div>
    </Section>
  )
}

function ApplicantPortal() {
  const [active, setActive] = useState(0)
  const scenario = portalScenarios[active]
  return (
    <Section
      eyebrow="Applicant experience"
      title="A clear view of what is complete and what comes next."
      intro="Switch scenarios to explore status, documents, messages, deadlines, and applicant actions."
    >
      <DemoLabel text="Fictional data shown for demonstration purposes." />
      <div className="scenario-tabs" role="tablist" aria-label="Applicant scenarios">
        {portalScenarios.map((item, index) => <button key={item.id} role="tab" aria-selected={active === index} onClick={() => setActive(index)}>{item.label}</button>)}
      </div>
      <div className="portal-shell" role="tabpanel">
        <aside className="portal-sidebar">
          <strong>ENROLL</strong>
          <nav aria-label="Applicant portal demo">
            <span className="active"><PanelLeft />Overview</span>
            <span><FileText />Application</span>
            <span><Upload />Documents</span>
            <span><MessageSquare />Messages <b>2</b></span>
            <span><CalendarDays />Appointments</span>
          </nav>
          <div className="help-card"><CircleHelp /><strong>Need help?</strong><span>Contact support or request an accessible format.</span><button type="button">View support options</button></div>
        </aside>
        <div className="portal-content">
          <div className="portal-head">
            <div><p>Application overview</p><h3>Welcome, {scenario.name}</h3><span>{scenario.program}</span></div>
            <button className="icon-button" aria-label="View notifications"><Bell /></button>
          </div>
          <div className="portal-status-card">
            <div>
              <span className={`status ${scenario.id === 'documents' ? 'amber' : 'blue'}`}>{scenario.status}</span>
              <h4>{scenario.next}</h4>
              <p>{scenario.deadline}</p>
            </div>
            <div className="circle-progress" style={{ '--progress': `${scenario.progress * 3.6}deg` } as React.CSSProperties}><span><strong>{scenario.progress}%</strong>complete</span></div>
          </div>
          <div className="portal-grid">
            <div className="panel portal-checklist">
              <div className="panel-heading"><div><p className="detail-kicker">Your checklist</p><h4>Enrollment requirements</h4></div><span>{scenario.items.filter((item) => ['Complete', 'Verified'].includes(item[1])).length}/{scenario.items.length}</span></div>
              {scenario.items.map(([item, status]) => (
                <div className="portal-item" key={item}>
                  {['Complete', 'Verified'].includes(status) ? <CheckCircle2 /> : status.includes('Correction') ? <AlertCircle /> : <Clock3 />}
                  <div><strong>{item}</strong><span>{status}</span></div>
                  {status.includes('Correction') && <button type="button">Replace file</button>}
                </div>
              ))}
            </div>
            <div className="portal-stack">
              <div className="panel compact-panel"><CalendarDays /><div><p className="detail-kicker">Upcoming</p><strong>{scenario.appointment}</strong><button type="button">View details</button></div></div>
              <div className="panel">
                <div className="panel-heading"><div><p className="detail-kicker">Messages</p><h4>Recent updates</h4></div><MessageSquare /></div>
                {scenario.messages.map((message) => <p className="message-line" key={message}>{message}</p>)}
              </div>
            </div>
          </div>
          <p className="accessibility-cue"><AccessibilityIcon /> Keyboard controls, text status labels, clear instructions, and support pathways are part of the visible applicant experience.</p>
        </div>
      </div>
    </Section>
  )
}

function AccessibilityIcon() {
  return <span aria-hidden="true">Aa</span>
}

function StaffWorkspace() {
  const [filter, setFilter] = useState('Any status')
  const [selectedId, setSelectedId] = useState(staffApplications[0].id)
  const [documentReviewed, setDocumentReviewed] = useState(false)
  const [requestSent, setRequestSent] = useState(false)
  const [note, setNote] = useState('')
  const [notes, setNotes] = useState<string[]>([])
  const [exceptionAction, setExceptionAction] = useState('')
  const [historyOpen, setHistoryOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const filtered = filter === 'Any status' ? staffApplications : staffApplications.filter((item) => item.status === filter)
  const selected = staffApplications.find((item) => item.id === selectedId) ?? filtered[0]

  const refresh = () => {
    setLoading(true)
    window.setTimeout(() => setLoading(false), 650)
  }

  return (
    <Section
      dark
      eyebrow="Staff review experience"
      title="Coordinate reviews without hiding the evidence."
      intro="The fictional workspace demonstrates assigned work, document review, missing-item requests, notes, exceptions, and workflow history."
    >
      <DemoLabel text="Illustrative staff workspace · fictional applicant records" dark />
      <div className="staff-shell">
        <div className="staff-toolbar">
          <div><strong>Application review</strong><span>Enrollment operations</span></div>
          <div className="toolbar-actions">
            <button type="button" onClick={refresh} disabled={loading}><RefreshCw className={loading ? 'spin' : ''} />{loading ? 'Refreshing…' : 'Refresh queue'}</button>
            <button type="button"><CircleHelp />Help</button>
            <span className="avatar" aria-label="Signed in as demo reviewer">MC</span>
          </div>
        </div>
        <div className="staff-body">
          <aside className="staff-queue">
            <div className="queue-controls">
              <label><Search /><span className="sr-only">Search queue</span><input placeholder="Search applications" /></label>
              <label><Filter /><span className="sr-only">Filter by status</span>
                <select value={filter} onChange={(event) => setFilter(event.target.value)}>
                  <option>Any status</option><option>Needs review</option><option>Missing item</option><option>Exception</option>
                </select>
              </label>
            </div>
            <p className="queue-count">{filtered.length} assigned {filtered.length === 1 ? 'application' : 'applications'}</p>
            {loading ? <div className="loading-state"><RefreshCw className="spin" /><span>Updating assigned work…</span></div> : filtered.length ? filtered.map((item) => (
              <button key={item.id} type="button" className={`application-row ${selected?.id === item.id ? 'selected' : ''}`} onClick={() => setSelectedId(item.id)}>
                <span className="row-top"><strong>{item.name}</strong><small>{item.age}d</small></span>
                <span>{item.program}</span>
                <span className="row-bottom"><small>{item.id}</small><span className={`status ${item.status === 'Exception' ? 'red' : item.status === 'Missing item' ? 'amber' : 'blue'}`}>{item.status}</span></span>
              </button>
            )) : <div className="empty-state"><CheckCircle2 /><strong>No matching applications</strong><span>Choose another queue filter.</span></div>}
          </aside>
          {selected && (
            <div className="review-area">
              <div className="review-head">
                <div><p className="detail-kicker">{selected.id}</p><h3>{selected.name}</h3><span>{selected.program}</span></div>
                <div><span className="status blue">{selected.status}</span><button type="button" onClick={() => setHistoryOpen(!historyOpen)}><Clock3 />Workflow history</button></div>
              </div>
              {historyOpen && <div className="history-banner" role="status"><strong>Recorded workflow history</strong><span>Submitted Oct 2 → Completeness check Oct 2 → Assigned to {selected.reviewer} Oct 3</span></div>}
              <div className="review-summary">
                <Metric label="Completeness" value={`${selected.completeness}%`} />
                <Metric label="Verification" value={selected.verification} />
                <Metric label="Exception" value={exceptionAction || selected.exception} />
                <Metric label="Assigned reviewer" value={selected.reviewer} />
              </div>
              <div className="review-columns">
                <div>
                  <ReviewCard title="Applicant and household" icon={<UserRound />}>
                    <dl className="record-grid"><div><dt>Applicant type</dt><dd>New applicant</dd></div><div><dt>Relationship</dt><dd>Self-managed</dd></div><div><dt>Preferred channel</dt><dd>Email</dd></div><div><dt>Program selection</dt><dd>{selected.program}</dd></div></dl>
                  </ReviewCard>
                  <ReviewCard title="Submitted documents" icon={<FileText />}>
                    <button className={`document-row ${documentReviewed ? 'reviewed' : ''}`} type="button" onClick={() => setDocumentReviewed(true)}>
                      <span><FileCheck2 /><span><strong>Program requirement.pdf</strong><small>Fictional file · 1 page</small></span></span>
                      <span>{documentReviewed ? 'Reviewed' : 'Review document'}<ArrowRight /></span>
                    </button>
                    <button className="document-row" type="button" onClick={() => setRequestSent(true)}>
                      <span><AlertCircle /><span><strong>Prior education record</strong><small>{requestSent ? 'Request recorded' : 'Item is not available'}</small></span></span>
                      <span>{requestSent ? 'Requested' : 'Request information'}<Send /></span>
                    </button>
                  </ReviewCard>
                </div>
                <div>
                  <ReviewCard title="Verification and exceptions" icon={<ShieldCheck />}>
                    <div className="verification-item"><CheckCircle2 /><span><strong>Identity match</strong><small>Configured check completed · source recorded</small></span></div>
                    <div className="verification-item warning"><AlertCircle /><span><strong>{selected.exception}</strong><small>Requires permitted staff action</small></span></div>
                    <div className="action-row">
                      <button type="button" onClick={() => setExceptionAction('Resolved with note')}>Resolve</button>
                      <button type="button" onClick={() => setExceptionAction('Escalated to supervisor')}>Escalate</button>
                    </div>
                  </ReviewCard>
                  <ReviewCard title="Reviewer note" icon={<MessageSquare />}>
                    <label htmlFor="review-note">Add a fictional internal note</label>
                    <textarea id="review-note" value={note} onChange={(event) => setNote(event.target.value)} placeholder="Record relevant review context…" />
                    <button className="button small" type="button" disabled={!note.trim()} onClick={() => { setNotes([...notes, note.trim()]); setNote('') }}>Add note</button>
                    {notes.map((item, index) => <p className="saved-note" key={`${item}-${index}`}><Check />Note recorded: {item}</p>)}
                  </ReviewCard>
                </div>
              </div>
              <div className="permitted-action"><LockKeyhole /><div><strong>Next permitted action</strong><span>Complete configured evidence review or route the application to an authorized decision maker.</span></div><button type="button">Route for review <ArrowRight /></button></div>
            </div>
          )}
        </div>
      </div>
      <p className="section-note">The product does not make autonomous admission, eligibility, residency, or placement decisions.</p>
    </Section>
  )
}

function Automation() {
  return (
    <Section
      eyebrow="Responsible automation"
      title="Automation that supports enrollment teams."
      intro="Configured automation can prepare information, identify workflow conditions, and reduce repetitive handling while staff retain authority for consequential decisions."
    >
      <div className="automation-flow" aria-label={automationSteps.join(', then ')}>
        {automationSteps.map((step, index) => <div key={step}><span>{index + 1}</span><strong>{step}</strong>{index < automationSteps.length - 1 && <ArrowRight />}</div>)}
      </div>
      <div className="automation-grid">
        <div>
          <p className="detail-kicker">Potential capabilities</p>
          <h3>Preparation, not autonomous decisions.</h3>
          <ul className="feature-list">
            {['Classify submitted documents', 'Extract proposed information for review', 'Check application completeness', 'Identify inconsistent information', 'Prepare application summaries', 'Route work to an appropriate queue', 'Draft messages from approved templates', 'Forecast application and review volumes', 'Identify workflow bottlenecks'].map((item) => <li key={item}><Sparkles />{item}</li>)}
          </ul>
        </div>
        <div className="control-card">
          <div className="control-card-head"><ShieldCheck /><div><p className="detail-kicker">Governance controls</p><h3>Human authority stays visible.</h3></div></div>
          <ul>{controls.map((item) => <li key={item}><Check />{item}</li>)}</ul>
        </div>
      </div>
    </Section>
  )
}

function Analytics() {
  const [view, setView] = useState<keyof typeof analyticsData>('journey')
  const data = analyticsData[view]
  const colors = ['#1675e5', '#22a59a', '#f2a93b', '#7a68d4', '#ef6a6a']
  return (
    <Section
      id="analytics"
      soft
      eyebrow="Enrollment analytics"
      title="Turn workflow activity into operational context."
      intro="Explore fictional measures for applicant progress, staff operations, and enrollment planning."
    >
      <DemoLabel text="Illustrative analytics — not MTX or customer results." />
      <div className="analytics-shell">
        <div className="analytics-head">
          <div><p className="detail-kicker">Enrollment overview</p><h3>Fall enrollment period</h3></div>
          <label>View period<select aria-label="View period"><option>Current period</option><option>Prior period</option></select></label>
        </div>
        <div className="analytics-tabs" role="tablist" aria-label="Analytics views">
          {(Object.keys(analyticsData) as (keyof typeof analyticsData)[]).map((key) => <button key={key} role="tab" aria-selected={view === key} onClick={() => setView(key)}>{analyticsData[key].label}</button>)}
        </div>
        <div className="metric-cards">
          {data.cards.map(([label, value, definition]) => (
            <div key={label}><span>{label}<span className="tooltip-wrap"><button aria-label={`Define ${label}`}><Info /></button><span role="tooltip">{definition}</span></span></span><strong>{value}</strong><small>Fictional demonstration value</small></div>
          ))}
        </div>
        <div className="chart-panel">
          <div className="chart-heading"><div><p className="detail-kicker">{data.label}</p><h4>{view === 'journey' ? 'Enrollment funnel' : view === 'operations' ? 'Applications by stage' : 'Demand by program'}</h4></div><span><Activity />Illustrative period</span></div>
          <div className="chart-wrap" aria-hidden="true">
            <ResponsiveContainer width="100%" height={280}>
              {view === 'journey' ? (
                <AreaChart data={data.chart} margin={{ left: 8, right: 8 }}>
                  <defs><linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1675e5" stopOpacity={0.38} /><stop offset="100%" stopColor="#1675e5" stopOpacity={0.03} /></linearGradient></defs>
                  <CartesianGrid vertical={false} stroke="#e7edf4" /><XAxis dataKey="name" tickLine={false} axisLine={false} /><YAxis tickLine={false} axisLine={false} /><Tooltip /><Area type="monotone" dataKey="value" stroke="#1675e5" strokeWidth={3} fill="url(#areaFill)" />
                </AreaChart>
              ) : view === 'operations' ? (
                <BarChart data={data.chart}><CartesianGrid vertical={false} stroke="#e7edf4" /><XAxis dataKey="name" tickLine={false} axisLine={false} /><YAxis tickLine={false} axisLine={false} /><Tooltip /><Bar dataKey="value" fill="#1675e5" radius={[6, 6, 0, 0]} /></BarChart>
              ) : (
                <PieChart><Pie data={data.chart} dataKey="value" nameKey="name" innerRadius={62} outerRadius={104} paddingAngle={3}>{data.chart.map((entry, index) => <Cell key={entry.name} fill={colors[index]} />)}</Pie><Tooltip /></PieChart>
              )}
            </ResponsiveContainer>
          </div>
          <p className="chart-summary"><strong>Text summary:</strong> {data.summary}</p>
        </div>
      </div>
    </Section>
  )
}

function Privacy() {
  return (
    <Section
      eyebrow="Privacy, security, and accessibility"
      title="Built to support institutional requirements."
      intro="The product provides configurable capabilities that can support an institution’s privacy, security, records, and accessibility requirements."
    >
      <div className="privacy-grid">
        {privacyItems.map(([title, text, Icon]) => <article key={title as string}><span><Icon /></span><h3>{title as string}</h3><p>{text as string}</p></article>)}
      </div>
      <div className="compliance-note"><Info /><p>Product capabilities do not by themselves create compliance with FERPA, COPPA, ADA, WCAG, state privacy laws, or institutional policy. Institutions determine applicable obligations, configuration, governance, and validation.</p></div>
    </Section>
  )
}

function Architecture() {
  const [active, setActive] = useState(0)
  const layer = architecture[active]
  const Icon = layer.icon
  return (
    <Section
      id="architecture"
      dark
      eyebrow="Platform-neutral architecture"
      title="Fit enrollment into the technology environment you govern."
      intro="Deploy through commercial software, low-code platforms, cloud-native services, open-source components, or hybrid architectures."
    >
      <div className="architecture-layout">
        <div className="architecture-stack" role="tablist" aria-label="Architecture layers">
          {architecture.map((item, index) => {
            const ItemIcon = item.icon
            return <button key={item.title} role="tab" aria-selected={active === index} onClick={() => setActive(index)}><span><ItemIcon />{item.title}</span><small>{item.text}</small></button>
          })}
        </div>
        <div className="architecture-detail" role="tabpanel">
          <span className="architecture-icon"><Icon /></span>
          <p className="detail-kicker">Selected layer</p>
          <h3>{layer.title}</h3>
          <p>{layer.text}</p>
          <div className="architecture-principles">
            <span><Database />Designated systems of record</span>
            <span><Network />Portable data and integrations</span>
            <span><Layers3 />Modular product adoption</span>
            <span><ShieldCheck />Customer-approved hosting</span>
          </div>
        </div>
      </div>
      <p className="section-note">The deployed architecture reflects institutional standards, approved environments, security controls, and designated systems of record.</p>
    </Section>
  )
}

function Integrations() {
  return (
    <Section
      eyebrow="Integration ecosystem"
      title="Connect through approved patterns."
      intro="MTX Student Enrollment can exchange approved data while an institution’s student information system or designated platform remains authoritative."
    >
      <div className="integration-visual">
        <div className="integration-core"><span><Network /></span><strong>MTX Student<br />Enrollment</strong><small>Product services</small></div>
        <div className="integration-list">{integrationCategories.map((item, index) => <span key={item} style={{ '--i': index } as React.CSSProperties}>{item}</span>)}</div>
      </div>
      <div className="pattern-strip">
        <strong>Supported integration patterns may include</strong>
        <TagList items={['REST APIs', 'Events', 'Webhooks', 'Secure files', 'Message queues', 'Approved middleware', 'Batch synchronization']} />
      </div>
      <p className="section-note neutral">Integration availability depends on the participating systems, approved interfaces, data agreements, and implementation scope. The page does not imply that each connection is prebuilt.</p>
    </Section>
  )
}

function ConfigurationStudio() {
  const [active, setActive] = useState(0)
  const setting = settings[active]
  return (
    <Section
      soft
      eyebrow="Configuration studio"
      title="Configure the pathway without hard-coding one institutional model."
      intro="Select a setting to see an illustrative checklist and review flow update."
    >
      <DemoLabel text="Illustrative configuration demonstration" />
      <div className="config-shell">
        <aside className="config-sidebar">
          <strong><Settings2 /> Configuration Studio</strong>
          {settings.map((item, index) => <button key={item.id} className={active === index ? 'active' : ''} onClick={() => setActive(index)}>{item.label}</button>)}
          <span>Enrollment periods</span><span>Programs and schools</span><span>Application questions</span><span>Conditional logic</span><span>Applicant types</span><span>Decision authority</span><span>Waitlist rules</span><span>Communication templates</span><span>Reports and integrations</span>
        </aside>
        <div className="config-content">
          <div className="config-heading"><div><p className="detail-kicker">Active configuration</p><h3>{setting.label}</h3></div><span className="status green">Draft configuration</span></div>
          <div className="config-grid">
            <div className="config-card">
              <strong>Applicant checklist</strong>
              <p>Required items can vary by applicant, pathway, period, or program.</p>
              {setting.checklist.map((item, index) => <div className="config-item" key={item}><span>{index + 1}</span><strong>{item}</strong><label className="switch"><input type="checkbox" defaultChecked /><span /><i className="sr-only">Required</i></label></div>)}
              <button type="button" className="add-config">+ Add checklist item</button>
            </div>
            <div className="config-card">
              <strong>Review workflow</strong>
              <p>Each step can use configured routing, authority, evidence, and exception paths.</p>
              <div className="workflow-list">{setting.workflow.map((item, index) => <div key={item}><span>{index + 1}</span><strong>{item}</strong>{index < setting.workflow.length - 1 && <i />}</div>)}</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

function Adoption() {
  const [active, setActive] = useState(0)
  const phase = phases[active]
  return (
    <Section
      id="adoption"
      eyebrow="Modular adoption roadmap"
      title="Begin with one pathway. Expand with purpose."
      intro="Sequencing depends on institutional priorities, enrollment cycles, policy constraints, and the existing technology environment."
    >
      <div className="roadmap-tabs" role="tablist" aria-label="Adoption phases">
        {phases.map((item, index) => <button key={item.number} role="tab" aria-selected={active === index} onClick={() => setActive(index)}><span>{item.number}</span><strong>Phase {index + 1}</strong><small>{item.title}</small></button>)}
      </div>
      <div className="roadmap-detail" role="tabpanel">
        <div><p className="detail-kicker">Phase {active + 1}</p><h3>{phase.title}</h3><p>Introduce capabilities in a controlled scope, validate the operating model, and prepare the foundation for later phases.</p></div>
        <ul>{phase.items.map((item) => <li key={item}><CheckCircle2 />{item}</li>)}</ul>
      </div>
    </Section>
  )
}

function DeliveryModel() {
  const models = [
    ['Product', 'Reusable enrollment data structures, workflows, applicant experiences, staff workspaces, configurable rules, reports, dashboards, integration patterns, and documentation.', Layers3],
    ['Implementation Services', 'Discovery, experience design, configuration, data conversion, integration, testing, training, deployment, and readiness support.', Workflow],
    ['Managed Services', 'Production support, monitoring, releases, data-quality support, reporting assistance, enhancement delivery, and operational optimization.', Activity],
  ]
  return (
    <Section
      soft
      eyebrow="Product and delivery model"
      title="A product foundation, supported through adoption and operation."
      intro="The product leads. Services help institutions configure, introduce, and operate it in their environment."
    >
      <div className="delivery-grid">
        {models.map(([title, text, Icon], index) => <article key={title as string} className={index === 0 ? 'featured' : ''}><span><Icon /></span><p className="detail-kicker">{index === 0 ? 'Product foundation' : 'Optional support'}</p><h3>{title as string}</h3><p>{text as string}</p></article>)}
      </div>
    </Section>
  )
}

function WhyMtx() {
  const differentiators = [
    ['Connected applicant and staff journeys', 'Link visible applicant steps with staff-controlled workflow milestones.'],
    ['Configurable education workflows', 'Adapt terms, forms, review rules, evidence, and authority to the institution.'],
    ['Platform and cloud flexibility', 'Deploy through customer-approved software, hosting, and architecture patterns.'],
    ['Modular adoption', 'Start with a defined pathway and introduce additional capabilities as priorities evolve.'],
    ['Operational visibility', 'Use workflow measures to understand demand, progress, workload, and exceptions.'],
    ['Governed automation', 'Support staff with traceable preparation while authorized people retain consequential decisions.'],
  ]
  return (
    <Section
      eyebrow="Why MTX Student Enrollment"
      title="Designed around the work between interest and enrollment."
      intro="A reusable product for institutions that want clearer digital journeys and coordinated enrollment operations."
    >
      <div className="why-grid">{differentiators.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </Section>
  )
}

function FinalCta({ openModal }: { openModal: () => void }) {
  return (
    <section className="final-cta">
      <div className="section-shell final-cta-inner">
        <p className="eyebrow light">Explore your enrollment pathway</p>
        <h2>Create a clearer path from application to enrollment.</h2>
        <p>Explore how MTX Student Enrollment can improve the applicant experience, coordinate staff work, and connect enrollment activity with your existing education systems.</p>
        <div className="button-row">
          <button className="button warm" type="button" onClick={openModal}>Request a Product Demonstration <ArrowRight /></button>
          <button className="button ghost-light" type="button" onClick={openModal}>Discuss Your Enrollment Roadmap</button>
        </div>
      </div>
    </section>
  )
}

function DemoModal({ close }: { close: () => void }) {
  const titleId = useId()
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<string[]>([])

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null
    document.body.classList.add('modal-open')
    closeRef.current?.focus()
    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') close()
      if (event.key === 'Tab' && dialogRef.current) {
        const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>('button, input, select, textarea, [href]')).filter((item) => !item.hasAttribute('disabled'))
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus() }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus() }
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.classList.remove('modal-open')
      document.removeEventListener('keydown', onKeyDown)
      previous?.focus()
    }
  }, [close])

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const required = ['name', 'institution', 'email', 'role', 'setting', 'volume', 'environment', 'challenge']
    const missing = required.filter((field) => !String(form.get(field) ?? '').trim())
    if (missing.length) {
      setErrors(missing)
      return
    }
    setErrors([])
    setSubmitted(true)
  }

  return (
    <div className="modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && close()}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby={titleId} ref={dialogRef}>
        <button className="modal-close" ref={closeRef} type="button" onClick={close} aria-label="Close demonstration request"><X /></button>
        {submitted ? (
          <div className="confirmation" role="status">
            <span><Check /></span><p className="eyebrow">Demonstration complete</p>
            <h2 id={titleId}>Thank you for exploring the request experience.</h2>
            <p>This prototype did not send or retain the information you entered.</p>
            <button className="button" type="button" onClick={close}>Return to the product</button>
          </div>
        ) : (
          <>
            <div className="modal-heading"><p className="eyebrow">Request a product demonstration</p><h2 id={titleId}>Tell us about your enrollment environment.</h2><p>Fields marked required help shape a relevant discussion.</p></div>
            {errors.length > 0 && <div className="form-error" role="alert"><AlertCircle /><span><strong>Please complete the required fields.</strong>Missing fields are identified below.</span></div>}
            <form onSubmit={submit} noValidate>
              <Field label="Name" name="name" error={errors.includes('name')} />
              <Field label="Institution or agency" name="institution" error={errors.includes('institution')} />
              <Field label="Work email" name="email" type="email" error={errors.includes('email')} />
              <Field label="Role" name="role" error={errors.includes('role')} />
              <SelectField label="Education setting" name="setting" error={errors.includes('setting')} options={['K–12 and public education', 'Higher education', 'Continuing and workforce education', 'Education agency or program']} />
              <SelectField label="Approximate annual application volume" name="volume" error={errors.includes('volume')} options={['Fewer than 1,000', '1,000–4,999', '5,000–19,999', '20,000 or more', 'Not yet known']} />
              <Field label="Current enrollment environment" name="environment" error={errors.includes('environment')} />
              <SelectField label="Primary enrollment challenge" name="challenge" error={errors.includes('challenge')} options={challenges.map((item) => item.title)} />
              <label className="form-field full"><span>Optional message</span><textarea name="message" rows={4} /></label>
              <p className="form-privacy full"><LockKeyhole />Prototype only. Information is processed in your browser for the confirmation state and is not sent or retained.</p>
              <div className="modal-actions full"><button className="button secondary" type="button" onClick={close}>Cancel</button><button className="button" type="submit">Complete Demo Request <ArrowRight /></button></div>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

function Field({ label, name, type = 'text', error }: { label: string; name: string; type?: string; error: boolean }) {
  return <label className={`form-field ${error ? 'has-error' : ''}`}><span>{label} <b aria-hidden="true">*</b></span><input name={name} type={type} aria-invalid={error} aria-describedby={error ? `${name}-error` : undefined} />{error && <small id={`${name}-error`}>This field is required.</small>}</label>
}

function SelectField({ label, name, options, error }: { label: string; name: string; options: string[]; error: boolean }) {
  return <label className={`form-field ${error ? 'has-error' : ''}`}><span>{label} <b aria-hidden="true">*</b></span><select name={name} defaultValue="" aria-invalid={error} aria-describedby={error ? `${name}-error` : undefined}><option value="" disabled>Select an option</option>{options.map((option) => <option key={option}>{option}</option>)}</select>{error && <small id={`${name}-error`}>Choose an option.</small>}</label>
}

function Footer() {
  return (
    <footer>
      <div className="section-shell footer-grid">
        <div><a className="wordmark footer-mark" href="#top"><span>MTX</span><small>Student Enrollment</small></a><p>A connected digital platform for student application, enrollment, placement, registration, and onboarding.</p></div>
        <div><strong>Explore</strong>{navItems.slice(0, 4).map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</div>
        <div><strong>Product</strong>{navItems.slice(4).map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</div>
      </div>
      <div className="section-shell footer-bottom"><span>© 2026 MTX Group Inc.</span><span>Illustrative product prototype · No applicant data is collected</span></div>
    </footer>
  )
}

function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  dark = false,
  soft = false,
}: {
  id?: string
  eyebrow: string
  title: string
  intro: string
  children: React.ReactNode
  dark?: boolean
  soft?: boolean
}) {
  return <section id={id} className={`content-section ${dark ? 'dark-section' : ''} ${soft ? 'soft-section' : ''}`}><div className="section-shell"><div className="section-heading"><p className={`eyebrow ${dark ? 'light' : ''}`}>{eyebrow}</p><h2>{title}</h2><p>{intro}</p></div>{children}</div></section>
}

function Detail({ label, text }: { label: string; text: string }) {
  return <div className="detail"><strong className="detail-label">{label}</strong><p>{text}</p></div>
}

function TagList({ items }: { items: string[] }) {
  return <div className="tag-list">{items.map((item) => <span key={item}>{item}</span>)}</div>
}

function DemoLabel({ text, dark = false }: { text: string; dark?: boolean }) {
  return <div className={`demo-label ${dark ? 'dark' : ''}`}><Info />{text}</div>
}

function Metric({ label, value }: { label: string; value: string }) {
  return <div><span>{label}</span><strong>{value}</strong></div>
}

function ReviewCard({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return <div className="review-card"><div className="review-card-head">{icon}<strong>{title}</strong></div>{children}</div>
}

export default App
