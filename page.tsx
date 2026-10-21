'use client'

import { useState } from 'react'
import { BookOpen, Bot, CheckCircle2, ChevronRight, Download, FileText, HelpCircle, Menu, MessageCircle, Search, ShieldCheck, Sparkles, X } from 'lucide-react'

const subjects = [
  { name: 'Engineering Mathematics I', code: 'MA101', semester: 'Semester 1', files: 12, color: 'bg-violet-500/15 text-violet-300' },
  { name: 'Engineering Physics', code: 'PH101', semester: 'Semester 1', files: 9, color: 'bg-sky-500/15 text-sky-300' },
  { name: 'Engineering Chemistry', code: 'CY101', semester: 'Semester 1', files: 8, color: 'bg-emerald-500/15 text-emerald-300' },
  { name: 'Programming in C', code: 'CS101', semester: 'Semester 1', files: 14, color: 'bg-amber-500/15 text-amber-300' },
  { name: 'Basic Electrical Engineering', code: 'EE101', semester: 'Semester 1', files: 10, color: 'bg-rose-500/15 text-rose-300' },
  { name: 'Engineering Drawing', code: 'ME101', semester: 'Semester 1', files: 7, color: 'bg-cyan-500/15 text-cyan-300' },
  { name: 'Engineering Mathematics II', code: 'MA102', semester: 'Semester 2', files: 11, color: 'bg-violet-500/15 text-violet-300' },
  { name: 'Engineering Mechanics', code: 'ME102', semester: 'Semester 2', files: 8, color: 'bg-sky-500/15 text-sky-300' },
  { name: 'Data Structures', code: 'CS201', semester: 'Semester 2', files: 16, color: 'bg-emerald-500/15 text-emerald-300' },
  { name: 'Object Oriented Programming', code: 'CS202', semester: 'Semester 2', files: 15, color: 'bg-amber-500/15 text-amber-300' },
  { name: 'Digital Logic Design', code: 'EC201', semester: 'Semester 2', files: 10, color: 'bg-rose-500/15 text-rose-300' },
  { name: 'Basic Electronics', code: 'EC202', semester: 'Semester 2', files: 9, color: 'bg-cyan-500/15 text-cyan-300' },
  { name: 'Engineering Mathematics III', code: 'MA201', semester: 'Semester 3', files: 13, color: 'bg-violet-500/15 text-violet-300' },
  { name: 'Database Management Systems', code: 'CS301', semester: 'Semester 3', files: 16, color: 'bg-emerald-500/15 text-emerald-300' },
  { name: 'Operating Systems', code: 'CS302', semester: 'Semester 3', files: 14, color: 'bg-amber-500/15 text-amber-300' },
  { name: 'Computer Organization', code: 'CS303', semester: 'Semester 3', files: 11, color: 'bg-sky-500/15 text-sky-300' },
  { name: 'Discrete Mathematics', code: 'CS304', semester: 'Semester 3', files: 9, color: 'bg-rose-500/15 text-rose-300' },
  { name: 'Object Oriented Analysis and Design', code: 'CS305', semester: 'Semester 3', files: 8, color: 'bg-cyan-500/15 text-cyan-300' },
  { name: 'Engineering Economics', code: 'HU301', semester: 'Semester 3', files: 6, color: 'bg-violet-500/15 text-violet-300' },
  { name: 'Design and Analysis of Algorithms', code: 'CS401', semester: 'Semester 4', files: 15, color: 'bg-sky-500/15 text-sky-300' },
  { name: 'Computer Networks', code: 'CS402', semester: 'Semester 4', files: 14, color: 'bg-emerald-500/15 text-emerald-300' },
  { name: 'Software Engineering', code: 'CS403', semester: 'Semester 4', files: 12, color: 'bg-amber-500/15 text-amber-300' },
  { name: 'Theory of Computation', code: 'CS404', semester: 'Semester 4', files: 10, color: 'bg-rose-500/15 text-rose-300' },
  { name: 'Web Technologies', code: 'CS405', semester: 'Semester 4', files: 13, color: 'bg-cyan-500/15 text-cyan-300' },
  { name: 'Probability and Statistics', code: 'MA401', semester: 'Semester 4', files: 9, color: 'bg-violet-500/15 text-violet-300' },
  { name: 'Microprocessors and Microcontrollers', code: 'EC401', semester: 'Semester 4', files: 11, color: 'bg-sky-500/15 text-sky-300' },
  { name: 'Compiler Design', code: 'CS501', semester: 'Semester 5', files: 12, color: 'bg-emerald-500/15 text-emerald-300' },
  { name: 'Artificial Intelligence', code: 'CS502', semester: 'Semester 5', files: 16, color: 'bg-amber-500/15 text-amber-300' },
  { name: 'Machine Learning', code: 'CS503', semester: 'Semester 5', files: 15, color: 'bg-rose-500/15 text-rose-300' },
  { name: 'Information Security', code: 'CS504', semester: 'Semester 5', files: 10, color: 'bg-cyan-500/15 text-cyan-300' },
  { name: 'Cloud Computing', code: 'CS505', semester: 'Semester 5', files: 12, color: 'bg-violet-500/15 text-violet-300' },
  { name: 'Mobile Application Development', code: 'CS506', semester: 'Semester 5', files: 9, color: 'bg-sky-500/15 text-sky-300' },
  { name: 'Distributed Systems', code: 'CS601', semester: 'Semester 6', files: 11, color: 'bg-emerald-500/15 text-emerald-300' },
  { name: 'Big Data Analytics', code: 'CS602', semester: 'Semester 6', files: 13, color: 'bg-amber-500/15 text-amber-300' },
  { name: 'Internet of Things', code: 'CS603', semester: 'Semester 6', files: 10, color: 'bg-rose-500/15 text-rose-300' },
  { name: 'Human Computer Interaction', code: 'CS604', semester: 'Semester 6', files: 8, color: 'bg-cyan-500/15 text-cyan-300' },
  { name: 'Project Management', code: 'HU601', semester: 'Semester 6', files: 7, color: 'bg-violet-500/15 text-violet-300' },
  { name: 'Software Testing', code: 'CS701', semester: 'Semester 7', files: 10, color: 'bg-sky-500/15 text-sky-300' },
  { name: 'Blockchain Technology', code: 'CS702', semester: 'Semester 7', files: 9, color: 'bg-emerald-500/15 text-emerald-300' },
  { name: 'Major Project', code: 'CS799', semester: 'Semester 8', files: 6, color: 'bg-amber-500/15 text-amber-300' },
]

const quickPrompts = ['Explain a topic simply', 'Make a 7-day study plan', 'Find resources for my backlog']

type Message = { from: 'bot' | 'user'; text: string }

export default function Page() {
  const [active, setActive] = useState('Overview')
  const [menuOpen, setMenuOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [backlogSubject, setBacklogSubject] = useState('')
  const [messages, setMessages] = useState<Message[]>([{ from: 'bot', text: 'Hi Student. I’m your academic copilot. Ask me about a concept, exam plan, or backlog subject.' }])

  function navigate(section: string) {
    setActive(section)
    setMenuOpen(false)
    document.getElementById(section === 'Subject Library' ? 'resources' : section === 'Backlog Help Centre' ? 'backlog' : section === 'AI Study Copilot' ? 'copilot' : 'overview')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  function ask(text: string) {
    const prompt = text.trim()
    if (!prompt) return
    setMessages((current) => [...current, { from: 'user', text: prompt }, { from: 'bot', text: 'Here is a practical way to approach it: start with the core definition, solve one guided example, then practise two exam-style questions. For a personalised backlog plan, open the Backlog Help Centre below.' }])
    setQuery('')
  }

  function openPdfSearch(subject: (typeof subjects)[number]) {
    const search = encodeURIComponent(`BTech ${subject.name} ${subject.code} notes previous year questions study material filetype:pdf`)
    window.open(`https://www.google.com/search?q=${search}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <main className="min-h-screen bg-[#070b18] text-slate-100">
      <div className="flex min-h-screen">
        <aside className={`${menuOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-20 flex w-72 flex-col border-r border-white/8 bg-[#0b1020] p-5 transition-transform lg:static lg:translate-x-0`}>
          <div className="flex items-center justify-between"><div className="flex items-center gap-3"><div className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-500"><Sparkles className="size-5 text-white" /></div><div><p className="font-semibold tracking-tight">Campus<span className="text-cyan-300">Pilot</span></p><p className="text-xs text-slate-500">BTech student hub</p></div></div><button className="lg:hidden" onClick={() => setMenuOpen(false)} aria-label="Close menu"><X className="size-5" /></button></div>
          <div className="mt-10"><p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Workspace</p><nav className="flex flex-col gap-1">{['Overview', 'AI Study Copilot', 'Subject Library', 'Backlog Help Centre'].map((item) => <button key={item} onClick={() => navigate(item)} className={`flex items-center gap-3 rounded-xl px-3 py-3 text-left text-sm transition ${active === item ? 'bg-cyan-400/10 text-cyan-200 ring-1 ring-cyan-400/20' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}>{item === 'AI Study Copilot' ? <Bot className="size-4" /> : item === 'Subject Library' ? <BookOpen className="size-4" /> : item === 'Backlog Help Centre' ? <HelpCircle className="size-4" /> : <Sparkles className="size-4" />}{item}{item === 'Backlog Help Centre' && <span className="ml-auto rounded-full bg-emerald-400/15 px-2 py-0.5 text-[10px] text-emerald-300">Active</span>}</button>)}</nav></div>
          <div className="mt-auto rounded-2xl border border-cyan-400/15 bg-gradient-to-br from-cyan-400/10 to-indigo-500/10 p-4"><div className="mb-3 flex size-9 items-center justify-center rounded-xl bg-cyan-400/15"><ShieldCheck className="size-4 text-cyan-300" /></div><p className="text-sm font-medium">Student mode enabled</p><p className="mt-1 text-xs leading-5 text-slate-400">Browse subject PDFs and get backlog guidance without signing in.</p></div>
        </aside>

        <section className="min-w-0 flex-1">
          <header className="flex h-20 items-center justify-between border-b border-white/8 px-5 sm:px-8"><button className="lg:hidden" onClick={() => setMenuOpen(true)} aria-label="Open menu"><Menu className="size-5" /></button><div className="hidden items-center gap-2 text-sm text-slate-400 sm:flex"><span className="text-slate-600">Workspace /</span><span className="text-slate-200">{active}</span></div><div className="ml-auto flex items-center gap-3"><button className="rounded-xl border border-white/10 p-2.5 text-slate-400 hover:text-white" aria-label="Search"><Search className="size-4" /></button><button type="button" onClick={() => alert('Google sign-in will be available after OAuth credentials are connected.')} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-slate-200 transition hover:border-cyan-400/30 hover:bg-cyan-400/10"><ShieldCheck className="size-4 text-cyan-300" /><span>Sign in with Google</span></button></div></header>
          <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
            <div id="overview" className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="mb-2 text-sm text-cyan-300">Tuesday, 14 October 2026</p><h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Good morning, Student.</h1><p className="mt-2 text-slate-400">Your student workspace is ready. Learn, search PDFs, and clear your backlog.</p></div><button onClick={() => navigate('Backlog Help Centre')} className="flex w-fit items-center gap-2 rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/15 hover:bg-cyan-300"><HelpCircle className="size-4" />Open backlog help</button></div>
            <div className="grid gap-4 md:grid-cols-3"><div className="rounded-2xl border border-white/8 bg-white/[0.035] p-5"><div className="mb-4 flex items-center justify-between"><span className="text-sm text-slate-400">Study streak</span><span className="rounded-full bg-emerald-400/10 px-2 py-1 text-xs text-emerald-300">On track</span></div><p className="text-3xl font-semibold">6 <span className="text-sm font-normal text-slate-500">days</span></p><div className="mt-4 h-1.5 rounded-full bg-white/8"><div className="h-full w-4/5 rounded-full bg-emerald-400" /></div></div><div className="rounded-2xl border border-white/8 bg-white/[0.035] p-5"><div className="mb-4 flex items-center justify-between"><span className="text-sm text-slate-400">Subjects available</span><BookOpen className="size-4 text-violet-300" /></div><p className="text-3xl font-semibold">{subjects.length} <span className="text-sm font-normal text-slate-500">subjects</span></p><p className="mt-4 text-xs text-slate-500">PDF notes and PYQs via Google</p></div><div className="rounded-2xl border border-amber-300/15 bg-amber-300/[0.06] p-5"><div className="mb-4 flex items-center justify-between"><span className="text-sm text-amber-100/70">Backlog support</span><HelpCircle className="size-4 text-amber-300" /></div><p className="text-lg font-semibold">Help centre active</p><p className="mt-1 text-xs leading-5 text-amber-100/60">Build a subject-wise recovery plan.</p></div></div>

            <div className="mt-8 grid gap-6 xl:grid-cols-[1.3fr_0.7fr]"><section id="copilot" className="rounded-2xl border border-white/8 bg-[#0b1020] p-5 sm:p-6"><div className="mb-5 flex items-start justify-between"><div><div className="mb-2 flex items-center gap-2"><span className="grid size-8 place-items-center rounded-lg bg-cyan-400/12"><Bot className="size-4 text-cyan-300" /></span><span className="text-sm font-semibold">AI Study Copilot</span><span className="rounded-full bg-emerald-400/10 px-2 py-1 text-[10px] text-emerald-300">Ready</span></div><p className="text-sm text-slate-400">Ask questions about concepts, planning, exams, or backlog subjects.</p></div><MessageCircle className="size-5 text-slate-600" /></div><div className="flex min-h-52 flex-col gap-3 rounded-xl bg-[#070b18] p-4">{messages.map((message, index) => <div key={index} className={`flex ${message.from === 'user' ? 'justify-end' : 'justify-start'}`}><div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 ${message.from === 'user' ? 'rounded-br-md bg-indigo-500/20 text-indigo-100' : 'rounded-bl-md border border-white/8 bg-white/[0.04] text-slate-300'}`}>{message.text}</div></div>)}</div><div className="mt-4 flex flex-wrap gap-2">{quickPrompts.map((prompt) => <button key={prompt} onClick={() => ask(prompt)} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-400 hover:border-cyan-400/30 hover:text-cyan-200">{prompt}</button>)}</div><form onSubmit={(event) => { event.preventDefault(); ask(query) }} className="mt-4 flex gap-2"><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Ask your academic copilot anything..." className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-cyan-400/50" /><button aria-label="Send question" className="grid size-11 shrink-0 place-items-center rounded-xl bg-cyan-400 text-slate-950 hover:bg-cyan-300"><ChevronRight className="size-5" /></button></form></section>

              <section id="resources" className="rounded-2xl border border-white/8 bg-[#0b1020] p-5 sm:p-6"><div className="mb-5 flex items-center justify-between"><div><h2 className="font-semibold">Browse all resources</h2><p className="mt-1 text-xs text-slate-500">Google PDF search for every subject</p></div><BookOpen className="size-4 text-cyan-300" /></div><div className="flex flex-col gap-3">{subjects.map((subject) => <div key={subject.code} className="group flex items-center gap-3 rounded-xl border border-white/7 bg-white/[0.02] p-3"><div className={`grid size-10 shrink-0 place-items-center rounded-lg ${subject.color}`}><FileText className="size-4" /></div><div className="min-w-0 flex-1"><p className="truncate text-sm font-medium">{subject.name}</p><p className="mt-1 text-xs text-slate-500">{subject.code} · {subject.semester} · PDF resources</p></div><button type="button" onClick={() => openPdfSearch(subject)} aria-label={`Open PDF resources for ${subject.name}`} title="Search Google PDF resources" className="flex items-center gap-1 rounded-lg px-2 py-1 text-xs text-cyan-300 hover:bg-cyan-300/10"><Download className="size-4" />PDFs</button></div>)}</div></section></div>

            <section id="backlog" className="mt-8 rounded-2xl border border-cyan-300/20 bg-gradient-to-r from-indigo-500/10 via-cyan-400/5 to-transparent p-5 sm:p-6"><div className="flex flex-col justify-between gap-5 md:flex-row md:items-center"><div><div className="mb-2 flex items-center gap-2"><CheckCircle2 className="size-4 text-cyan-300" /><span className="text-sm font-semibold">Backlog Help Centre</span><span className="rounded-full bg-emerald-400/10 px-2 py-1 text-[10px] text-emerald-300">Active</span></div><h2 className="text-xl font-semibold">Turn a backlog into a roadmap.</h2><p className="mt-1 max-w-2xl text-sm text-slate-400">Select a subject to get a focused recovery plan and instantly find its PDF notes and previous-year questions.</p></div><div className="flex w-full max-w-sm gap-2"><select value={backlogSubject} onChange={(event) => setBacklogSubject(event.target.value)} className="min-w-0 flex-1 rounded-xl border border-white/10 bg-[#0b1020] px-3 py-2.5 text-sm text-slate-300 outline-none"><option value="">Choose backlog subject</option>{subjects.map((subject) => <option key={subject.code} value={subject.code}>{subject.name}</option>)}</select><button type="button" disabled={!backlogSubject} onClick={() => { const subject = subjects.find((item) => item.code === backlogSubject); if (subject) { openPdfSearch(subject); ask(`Create a recovery plan for my ${subject.name} backlog`) } }} className="rounded-xl bg-cyan-400 px-3 py-2.5 text-sm font-semibold text-slate-950 disabled:cursor-not-allowed disabled:opacity-40">Get help</button></div></div></section>
            <div className="mt-8 flex items-center justify-between border-t border-white/8 pt-5 text-xs text-slate-600"><span>CampusPilot · Built for focused progress</span><span className="flex items-center gap-1"><ShieldCheck className="size-3" /> Open student workspace</span></div>
          </div>
        </section>
      </div>
    </main>
  )
}
