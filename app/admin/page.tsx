"use client"

import { useState, useEffect, useCallback } from "react"
import { RefreshCw, MessageCircle, Phone, Mail, Calendar, User, ChevronDown, Lock } from "lucide-react"
import type { MatriculaSubmission } from "@/app/api/matricula/route"

const SECRET = "c2fit2024admin"

const STATUS_LABELS: Record<string, { label: string; color: string }> = {
  novo: { label: "Novo", color: "bg-primary/20 text-primary border-primary/30" },
  contatado: { label: "Contatado", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
  matriculado: { label: "Matriculado", color: "bg-green-500/20 text-green-400 border-green-500/30" },
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleString("pt-BR", {
    day: "2-digit", month: "2-digit", year: "numeric",
    hour: "2-digit", minute: "2-digit",
  })
}

function formatPhone(digits: string) {
  if (digits.length === 11)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
}

export default function AdminPage() {
  const [authed, setAuthed] = useState(false)
  const [password, setPassword] = useState("")
  const [authError, setAuthError] = useState(false)

  const [submissions, setSubmissions] = useState<MatriculaSubmission[]>([])
  const [loading, setLoading] = useState(false)
  const [filterStatus, setFilterStatus] = useState<string>("todos")

  const fetchData = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch(`/api/matricula?secret=${SECRET}`)
      const data = await res.json()
      if (res.ok) setSubmissions(data.submissions)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (authed) fetchData()
  }, [authed, fetchData])

  async function updateStatus(id: string, status: string) {
    await fetch(`/api/matricula?secret=${SECRET}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    })
    setSubmissions((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status: status as MatriculaSubmission["status"] } : s))
    )
  }

  function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    if (password === SECRET) {
      setAuthed(true)
      setAuthError(false)
    } else {
      setAuthError(true)
    }
  }

  // Login screen
  if (!authed) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="w-full max-w-sm bg-card border border-border rounded-lg p-8 flex flex-col gap-6">
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <Lock size={22} className="text-primary" />
            </div>
            <div className="text-center">
              <h1
                className="text-xl font-extrabold text-foreground uppercase"
                style={{ fontFamily: "var(--font-heading, 'Barlow Condensed', sans-serif)" }}
              >
                C2Fit Admin
              </h1>
              <p className="text-muted-foreground text-xs mt-1">Painel de matriculas</p>
            </div>
          </div>
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Senha de acesso"
              className="w-full bg-secondary border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            {authError && (
              <p className="text-red-400 text-xs text-center">Senha incorreta.</p>
            )}
            <button
              type="submit"
              className="bg-primary text-primary-foreground font-bold text-sm uppercase tracking-widest px-6 py-3 rounded hover:opacity-90 transition-opacity"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    )
  }

  const filtered = filterStatus === "todos"
    ? submissions
    : submissions.filter((s) => s.status === filterStatus)

  const counts = {
    todos: submissions.length,
    novo: submissions.filter((s) => s.status === "novo").length,
    contatado: submissions.filter((s) => s.status === "contatado").length,
    matriculado: submissions.filter((s) => s.status === "matriculado").length,
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border px-6 py-4 flex items-center justify-between">
        <div>
          <h1
            className="text-2xl font-extrabold text-foreground uppercase"
            style={{ fontFamily: "var(--font-heading, 'Barlow Condensed', sans-serif)" }}
          >
            C2<span className="text-primary">FIT</span> — Painel Admin
          </h1>
          <p className="text-muted-foreground text-xs">Formularios de matricula recebidos</p>
        </div>
        <button
          onClick={fetchData}
          disabled={loading}
          className="inline-flex items-center gap-2 bg-secondary border border-border text-muted-foreground px-4 py-2 rounded text-xs font-semibold hover:text-foreground hover:border-primary transition-all disabled:opacity-50"
        >
          <RefreshCw size={13} className={loading ? "animate-spin" : ""} />
          Atualizar
        </button>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8 flex flex-col gap-6">

        {/* Stats cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { key: "todos", label: "Total" },
            { key: "novo", label: "Novos" },
            { key: "contatado", label: "Contatados" },
            { key: "matriculado", label: "Matriculados" },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setFilterStatus(key)}
              className={`bg-card border rounded-lg px-5 py-4 text-left transition-all ${
                filterStatus === key ? "border-primary" : "border-border hover:border-muted-foreground"
              }`}
            >
              <p className="text-2xl font-extrabold text-foreground">{counts[key as keyof typeof counts]}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wide mt-1">{label}</p>
            </button>
          ))}
        </div>

        {/* Table */}
        {loading ? (
          <div className="flex items-center justify-center py-16">
            <RefreshCw size={22} className="animate-spin text-primary" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="bg-card border border-border rounded-lg flex flex-col items-center justify-center py-16 gap-3">
            <User size={32} className="text-muted-foreground" />
            <p className="text-muted-foreground text-sm">Nenhum formulario encontrado.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {filtered.map((s) => (
              <div key={s.id} className="bg-card border border-border rounded-lg p-5 flex flex-col md:flex-row md:items-center gap-4">
                {/* Info */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="flex items-center gap-2">
                    <User size={14} className="text-muted-foreground shrink-0" />
                    <div>
                      <p className="text-foreground text-sm font-semibold">{s.nome}</p>
                      <p className="text-muted-foreground text-xs capitalize">{s.plano} · {s.objetivo || "—"} · {s.pagamento || "—"}</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <a
                      href={`https://wa.me/${s.telefone}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Phone size={12} />
                      {formatPhone(s.telefone)}
                    </a>
                    {s.email && (
                      <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Mail size={12} />
                        {s.email}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar size={12} />
                    {formatDate(s.createdAt)}
                  </div>
                </div>

                {/* Mensagem */}
                {s.mensagem && (
                  <p className="text-xs text-muted-foreground border-l border-border pl-4 italic max-w-xs truncate hidden md:block">
                    {s.mensagem}
                  </p>
                )}

                {/* Actions */}
                <div className="flex items-center gap-2 shrink-0">
                  <span className={`inline-flex items-center text-xs font-semibold px-3 py-1 rounded border ${STATUS_LABELS[s.status].color}`}>
                    {STATUS_LABELS[s.status].label}
                  </span>

                  <div className="relative">
                    <select
                      value={s.status}
                      onChange={(e) => updateStatus(s.id, e.target.value)}
                      className="appearance-none bg-secondary border border-border rounded px-3 py-1.5 pr-7 text-xs text-foreground focus:outline-none focus:border-primary transition-colors"
                    >
                      <option value="novo">Novo</option>
                      <option value="contatado">Contatado</option>
                      <option value="matriculado">Matriculado</option>
                    </select>
                    <ChevronDown size={11} className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                  </div>

                  <a
                    href={`https://wa.me/${s.telefone}?text=Ol%C3%A1%20${encodeURIComponent(s.nome)}%2C%20somos%20da%20C2Fit%20Academia!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 bg-green-600 hover:bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded transition-colors"
                  >
                    <MessageCircle size={12} />
                    WA
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
