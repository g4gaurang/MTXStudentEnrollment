import {
  Accessibility,
  BarChart3,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  ClipboardCheck,
  CloudCog,
  FileCheck2,
  Files,
  GraduationCap,
  House,
  Layers3,
  MessagesSquare,
  Network,
  Route,
  Settings2,
  ShieldCheck,
  Sparkles,
  UserRoundCheck,
  UsersRound,
  Workflow,
} from 'lucide-react'

export const challenges = [
  {
    title: 'Confusing applicant journeys',
    problem: 'Applicants may navigate different forms, websites, instructions, deadlines, and communication channels.',
    people: 'Prospective students, families, counselors, and support staff',
    consequence: 'Applicants may miss a step, repeat work, or contact staff for clarification.',
    response: 'Provide a guided experience that presents relevant programs, required steps, documents, deadlines, and status information.',
    measures: ['Application starts', 'Completion rate', 'Abandoned applications', 'Support requests'],
  },
  {
    title: 'Incomplete applications',
    problem: 'Staff may discover missing information after an application has entered review.',
    people: 'Applicants, document reviewers, and enrollment staff',
    consequence: 'Reviews pause while staff request and reconcile missing items.',
    response: 'Use configurable checklists, field validation, document requirements, reminders, and completeness indicators.',
    measures: ['Application completeness', 'Missing-document rate', 'Resubmissions', 'Time awaiting applicant action'],
  },
  {
    title: 'Manual review and routing',
    problem: 'Applications may be distributed by email, spreadsheets, or informal staff practices.',
    people: 'Reviewers, supervisors, and program teams',
    consequence: 'Work can be difficult to balance, prioritize, and trace.',
    response: 'Route work based on program, location, applicant type, review requirements, staff role, and workload.',
    measures: ['Queue age', 'Reviewer workload', 'Reassignment volume', 'Review time'],
  },
  {
    title: 'Limited application visibility',
    problem: 'Applicants may contact staff for status updates while supervisors lack a current view of enrollment activity.',
    people: 'Applicants, service teams, and enrollment leaders',
    consequence: 'Questions increase while decisions and exceptions are harder to monitor.',
    response: 'Provide applicant status tracking and operational dashboards based on controlled workflow milestones.',
    measures: ['Status inquiries', 'Applications by stage', 'Aging', 'Unresolved exceptions'],
  },
  {
    title: 'Inconsistent policy application',
    problem: 'Eligibility, residency, admission, placement, and document rules may be interpreted differently across teams.',
    people: 'Reviewers, records teams, applicants, and policy owners',
    consequence: 'Similar applications may follow different review paths without a recorded reason.',
    response: 'Configure rules, review steps, decision authority, exception paths, and supporting evidence requirements.',
    measures: ['Exceptions', 'Overrides', 'Reopened reviews', 'Decision consistency'],
  },
  {
    title: 'Disconnected education systems',
    problem: 'Applicant information may be re-entered across enrollment, student, payment, identity, communication, and reporting systems.',
    people: 'Applicants, data teams, staff, and system administrators',
    consequence: 'Duplicate entry and synchronization issues add operational work.',
    response: 'Connect approved data through reusable integration services while preserving designated systems of record.',
    measures: ['Connected systems', 'Exchange failures', 'Duplicate entry', 'Synchronization exceptions'],
  },
]

export const journey = [
  {
    name: 'Discover',
    applicant: 'Search programs, review eligibility guidance, compare school or campus information, note deadlines, and save interests.',
    staff: 'Maintain program information, enrollment periods, content, and inquiry follow-up.',
    capabilities: ['Program search', 'Eligibility guidance', 'Saved interests', 'Deadline content'],
    data: 'Program availability, location, term, audience, and customer-approved guidance.',
    measures: ['Search activity', 'Program views', 'Saved interests'],
  },
  {
    name: 'Create an Account',
    applicant: 'Set up identity, create a profile, choose communication preferences, capture consent, and identify permitted relationships.',
    staff: 'Support account questions, review possible duplicates, and manage authorized relationship requests.',
    capabilities: ['Identity setup', 'Profiles', 'Preferences', 'Consent capture'],
    data: 'Identity standards, minimum profile data, consent language, and relationship policy.',
    measures: ['Accounts created', 'Verification status', 'Duplicate review'],
  },
  {
    name: 'Apply',
    applicant: 'Answer guided questions, select programs, save progress, review entries, and submit.',
    staff: 'Configure questions and conditional paths, monitor starts, and support applicants.',
    capabilities: ['Conditional forms', 'Saved progress', 'Program selection', 'Confirmation'],
    data: 'Required fields, applicant types, policy prompts, and enrollment periods.',
    measures: ['Starts', 'Submissions', 'Completion rate', 'Time in progress'],
  },
  {
    name: 'Submit Documents',
    applicant: 'View a document checklist, upload files securely, replace requested items, and track document status.',
    staff: 'Review document quality, request corrections, and record source and verification history.',
    capabilities: ['Secure upload', 'Checklists', 'Status tracking', 'Reminders'],
    data: 'Document type, source, expiration, retention, and reviewer access.',
    measures: ['Document completeness', 'Correction requests', 'Awaiting documents'],
  },
  {
    name: 'Review and Verify',
    applicant: 'Respond to requests and monitor controlled status updates.',
    staff: 'Review completeness, verify configured evidence, manage assignments, and resolve exceptions.',
    capabilities: ['Review queues', 'Verification', 'Evidence history', 'Exceptions'],
    data: 'Review authority, evidence rules, exception paths, and audit history.',
    measures: ['Queue age', 'Review time', 'Pending verification', 'Exceptions'],
  },
  {
    name: 'Decide or Place',
    applicant: 'Receive an authorized decision or placement notice and respond where the process permits.',
    staff: 'Support applicable admission, eligibility, assignment, waitlist, deferral, or appeal workflows.',
    capabilities: ['Decision records', 'Placement', 'Waitlists', 'Appeal workflow'],
    data: 'Institution-specific authority, policy version, capacity, notices, and response windows.',
    measures: ['Applications by outcome', 'Responses pending', 'Waitlist activity'],
  },
  {
    name: 'Register and Onboard',
    applicant: 'Accept, complete registration items, handle applicable payments, schedule orientation, and prepare for entry.',
    staff: 'Coordinate requirements and transfer approved data to the designated student system.',
    capabilities: ['Registration checklist', 'Scheduling', 'Payments where applicable', 'System handoff'],
    data: 'Acceptance, registration holds, payment status, orientation, and system-of-record mapping.',
    measures: ['Checklist progress', 'Response status', 'Projected onboarding volume'],
  },
]

export const settings = [
  {
    id: 'k12',
    label: 'K–12 and Public Education',
    icon: House,
    terms: { applicant: 'Student and guardian', program: 'School or program', decision: 'Placement or eligibility' },
    examples: ['New student enrollment', 'School choice', 'Residency verification', 'Grade placement', 'Program eligibility', 'Transfer requests', 'Waitlists', 'Guardian relationships'],
    checklist: ['Guardian relationship', 'Address documentation', 'Prior school information', 'Program-specific items'],
    workflow: ['Intake', 'Residency review', 'Program review', 'Placement', 'Registration'],
  },
  {
    id: 'higher',
    label: 'Higher Education',
    icon: GraduationCap,
    terms: { applicant: 'Prospective or returning student', program: 'Academic program', decision: 'Admission decision' },
    examples: ['Inquiry and application', 'Program selection', 'Admission review', 'Offer acceptance', 'Deposit or fee', 'Registration preparation', 'Orientation', 'Student-system handoff'],
    checklist: ['Application', 'Prior education record', 'Program requirement', 'Acceptance response'],
    workflow: ['Inquiry', 'Application', 'Admission review', 'Offer response', 'Onboarding'],
  },
  {
    id: 'workforce',
    label: 'Continuing and Workforce Education',
    icon: BriefcaseBusiness,
    terms: { applicant: 'Learner', program: 'Course, cohort, or pathway', decision: 'Eligibility or cohort placement' },
    examples: ['Program discovery', 'Short-form application', 'Eligibility or prerequisite review', 'Cohort placement', 'Funding documentation', 'Registration', 'Credential pathway onboarding'],
    checklist: ['Learner profile', 'Prerequisite evidence', 'Funding item where applicable', 'Cohort confirmation'],
    workflow: ['Discover', 'Short application', 'Prerequisite review', 'Cohort placement', 'Registration'],
  },
]

export const roles = [
  { title: 'Students and Applicants', icon: GraduationCap, text: 'Explore programs, submit information, upload documents, monitor progress, receive communications, and complete assigned steps.' },
  { title: 'Parents and Guardians', icon: UsersRound, text: 'Manage authorized household relationships, support applications, provide documentation, and respond to permitted enrollment requests.' },
  { title: 'Enrollment Staff', icon: ClipboardCheck, text: 'Review applications, request information, resolve exceptions, record actions, and coordinate next steps.' },
  { title: 'Reviewers', icon: FileCheck2, text: 'Examine assigned evidence, record findings, flag exceptions, and route work within configured authority.' },
  { title: 'Registrars and Records Teams', icon: Files, text: 'Validate registration requirements, manage records handoff, review data quality, and maintain decision history.' },
  { title: 'Counselors and Advisors', icon: MessagesSquare, text: 'View permitted progress, guide applicants, track outreach, and coordinate onboarding support.' },
  { title: 'Supervisors', icon: BarChart3, text: 'Monitor application volume, queue age, workload, processing milestones, and issues requiring attention.' },
  { title: 'Technology and Data Teams', icon: Network, text: 'Manage access, configuration, exchanges, data quality, monitoring, and reporting structures.' },
]

export const capabilityGroups = [
  { title: 'Digital Discovery and Application', icon: BookOpen, items: ['Program and school discovery', 'Eligibility guidance', 'Configurable application forms', 'Conditional questions', 'Saved progress', 'Multilingual content', 'Accessible digital experiences', 'Mobile-responsive applications'] },
  { title: 'Applicant and Household Management', icon: UsersRound, items: ['Applicant profiles', 'Parent and guardian relationships', 'Household information', 'Contact preferences', 'Identity and account management', 'Consent capture', 'Duplicate-record review'] },
  { title: 'Document and Verification Management', icon: Files, items: ['Configurable document checklists', 'Secure uploads', 'Document classification', 'Expiration tracking', 'Verification status', 'Missing-item requests', 'Source and review history'] },
  { title: 'Review, Decision, and Placement', icon: Workflow, items: ['Staff review queues', 'Configurable eligibility rules', 'Admission-review support', 'Residency workflows', 'Placement and assignment', 'Waitlist management', 'Exception handling', 'Decision and appeal records'] },
  { title: 'Communications and Onboarding', icon: MessagesSquare, items: ['Status notifications', 'Task reminders', 'Appointment scheduling', 'Message templates', 'Preferred-channel support', 'Acceptance workflows', 'Registration checklists', 'Orientation and onboarding'] },
  { title: 'Analytics and Administration', icon: Settings2, items: ['Enrollment dashboards', 'Application-funnel reporting', 'Queue and workload monitoring', 'Data-quality views', 'Role and access management', 'Configuration management', 'Audit history', 'Integration monitoring'] },
]

export const portalScenarios = [
  {
    id: 'review',
    label: 'Under review',
    name: 'Jordan Lee',
    program: 'Applied Learning Program',
    status: 'Application under review',
    progress: 78,
    next: 'No action is needed right now.',
    deadline: 'Status update expected by October 18',
    appointment: 'Virtual welcome session · October 22, 4:00 PM',
    messages: ['Your documents were received.', 'A reviewer has been assigned.'],
    items: [
      ['Application', 'Complete'],
      ['Identity document', 'Verified'],
      ['Prior education record', 'In review'],
      ['Program questionnaire', 'Complete'],
    ],
  },
  {
    id: 'documents',
    label: 'Awaiting documentation',
    name: 'Casey Morgan',
    program: 'Community Pathways Program',
    status: 'Action required',
    progress: 54,
    next: 'Upload a replacement address document.',
    deadline: 'Requested item due October 12',
    appointment: 'Support appointment · October 10, 2:30 PM',
    messages: ['One document needs a clearer image.', 'Your application remains saved while you respond.'],
    items: [
      ['Application', 'Complete'],
      ['Applicant profile', 'Complete'],
      ['Address document', 'Correction requested'],
      ['Program requirement', 'Not started'],
    ],
  },
  {
    id: 'onboarding',
    label: 'Completing onboarding',
    name: 'Taylor Brooks',
    program: 'Digital Careers Cohort',
    status: 'Placement accepted',
    progress: 86,
    next: 'Choose an orientation session.',
    deadline: 'Orientation selection due October 25',
    appointment: 'Advisor introduction · October 20, 11:00 AM',
    messages: ['Your place has been confirmed.', 'Registration items are now available.'],
    items: [
      ['Acceptance response', 'Complete'],
      ['Registration details', 'Complete'],
      ['Orientation', 'Choose a session'],
      ['Student-system handoff', 'Scheduled'],
    ],
  },
]

export const staffApplications = [
  { id: 'APP-DEMO-104', name: 'Avery Reed', program: 'Central Learning Pathway', status: 'Needs review', completeness: 92, verification: '1 pending', exception: 'None', reviewer: 'M. Chen', age: 2 },
  { id: 'APP-DEMO-108', name: 'Morgan Ellis', program: 'Technology Foundations', status: 'Missing item', completeness: 68, verification: '2 pending', exception: 'Document quality', reviewer: 'D. Patel', age: 4 },
  { id: 'APP-DEMO-111', name: 'Riley Shaw', program: 'Community Studies', status: 'Exception', completeness: 100, verification: 'Complete', exception: 'Policy clarification', reviewer: 'M. Chen', age: 5 },
]

export const architecture = [
  { title: 'Experience Layer', icon: Accessibility, text: 'Applicant portal, family experience, staff workspace, mobile access, and administrative dashboards.' },
  { title: 'Enrollment Product Services', icon: Layers3, text: 'Discovery, application, household management, documents, verification, review, placement, registration, and communications.' },
  { title: 'Workflow and Intelligence', icon: Sparkles, text: 'Business rules, routing, reminders, exception management, approved automation, and AI assistance.' },
  { title: 'Integration Layer', icon: Network, text: 'APIs, events, webhooks, middleware, message queues, and secure file exchange.' },
  { title: 'Education Ecosystem', icon: Building2, text: 'Student, learning, identity, payment, document, communication, and analytics systems.' },
  { title: 'Data and Governance', icon: ShieldCheck, text: 'Applicant records, document metadata, consent, decision history, audit records, reporting data, and retention rules.' },
  { title: 'Infrastructure', icon: CloudCog, text: 'Customer-approved cloud, private hosting, hybrid services, monitoring, backup, and recovery.' },
]

export const phases = [
  { title: 'Establish Digital Enrollment', number: '01', items: ['Program discovery', 'Account creation', 'Application', 'Document submission', 'Status visibility'] },
  { title: 'Coordinate Review', number: '02', items: ['Staff workspaces', 'Verification', 'Rules', 'Exception handling', 'Decisions and placement'] },
  { title: 'Connect the Ecosystem', number: '03', items: ['Student-system integration', 'Identity', 'Payments', 'Communications', 'Document services', 'Reporting data'] },
  { title: 'Improve and Expand', number: '04', items: ['Additional programs', 'Advanced analytics', 'Governed automation', 'Journey improvements', 'Workflow refinement'] },
]

export const automationSteps = ['Applicant information', 'Automated preparation', 'Configured validation', 'Staff review', 'Authorized action', 'Recorded history']

export const productOutcomes = [
  { title: 'Clear applicant journeys', icon: Route },
  { title: 'Coordinated staff reviews', icon: UserRoundCheck },
  { title: 'Configurable enrollment policies', icon: Settings2 },
  { title: 'Connected education systems', icon: Network },
]
