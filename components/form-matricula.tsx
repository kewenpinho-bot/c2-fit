"use client"

import { useState } from "react"
import { CheckCircle, Loader2, AlertCircle, User, Phone, Mail, Target, MessageSquare, ChevronDown, Zap, QrCode, CreditCard, Banknote, Dumbbell } from "lucide-react"

const PLANOS = [
  { value: "mensal",      label: "Mensal" },
  { value: "trimestral",  label: "Trimestral" },
  { value: "semestral",   label: "Semestral" },
  { value: "anual",       label: "Anual" },
  { value: "estudante",   label: "Plano Estudante" },
  { value: "wellhub",     label: "Wellhub / Gympass" },
]

const OBJETIVOS = [
  { value: "emagrecimento",     label: "Emagrecimento" },
  { value: "hipertrofia",       label: "Hipertrofia / Ganho de massa" },
  { value: "condicionamento",   label: "Condicionamento fisico" },
  { value: "saude",             label: "Saude e qualidade de vida" },
  { value: "alto_rendimento",   label: "Alto rendimento / Performance" },
  { value: "outro",             label: "Outro" },
]

const PAGAMENTOS = [
  { value: "pix",      label: "Pix",            Icon: QrCode,     desc: "Aprovacao imediata" },
  { value: "cartao",   label: "Cartao",          Icon: CreditCard, desc: "Credito ou debito" },
  { value: "dinheiro", label: "Dinheiro",        Icon: Banknote,   desc: "Pagamento presencial" },
  { value: "wellhub",  label: "Wellhub",         Icon: Dumbbell,   desc: "Gympass / Wellhub" },
]

type Status = "idle" | "loading" | "success" | "error"

interface FormData {
  nome: string
  telefone: string
  email: string
  plano: string
  objetivo: string
  pagamento: string
  mensagem: string
}

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11)
  if (digits.length <= 2) return digits
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

const inputBase =
  "w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-200"

const inputWithIcon = `${inputBase} pl-10`

function FieldLabel({ htmlFor, children, required }: { htmlFor: string; children: React.ReactNode; required?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-1.5">
      {children}
      {required && <span className="text-primary ml-0.5">*</span>}
    </label>
  )
}

function IconWrap({ children }: { children: React.ReactNode }) {
  return (
    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/60 pointer-events-none">
      {children}
    </span>
  )
}

export default function FormMatricula() {
  const [form, setForm] = useState<FormData>({
    nome: "", telefone: "", email: "", plano: "", objetivo: "", pagamento: "", mensagem: "",
  })
  const [status, setStatus] = useState<Status>("idle")
  const [errorMsg, setErrorMsg] = useState("")
  const [waUrl, setWaUrl] = useState("")

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    if (name === "telefone") {
      setForm((prev) => ({ ...prev, telefone: formatPhone(value) }))
    } else {
      setForm((prev) => ({ ...prev, [name]: value }))
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("loading")
    setErrorMsg("")
    try {
      const res = await fetch("/api/matricula", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok || !data.success) {
        setErrorMsg(data.error || "Erro ao enviar. Tente novamente.")
        setStatus("error")
        return
      }
      setWaUrl(data.waRedirect)
      setStatus("success")
    } catch {
      setErrorMsg("Falha de conexao. Verifique sua internet e tente novamente.")
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-6 py-10 text-center">
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-primary/15 flex items-center justify-center">
            <CheckCircle size={40} className="text-primary" />
          </div>
          <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
            <Zap size={12} className="text-primary-foreground" />
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <h3
            className="text-2xl font-extrabold text-foreground uppercase"
            style={{ fontFamily: "var(--font-heading, 'Barlow Condensed', sans-serif)" }}
          >
            Formulario enviado!
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
            Recebemos seu interesse. Clique abaixo para finalizar via WhatsApp.
          </p>
        </div>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-extrabold text-sm uppercase tracking-widest hover:opacity-90 transition-opacity shadow-lg shadow-primary/30"
        >
          Confirmar no WhatsApp
        </a>
        <button
          onClick={() => {
            setStatus("idle")
            setForm({ nome: "", telefone: "", email: "", plano: "", objetivo: "", pagamento: "", mensagem: "" })
          }}
          className="text-xs text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
        >
          Enviar outro formulario
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">

      {/* Nome + Telefone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <FieldLabel htmlFor="nome" required>Nome completo</FieldLabel>
          <div className="relative">
            <IconWrap><User size={14} /></IconWrap>
            <input
              id="nome" name="nome" type="text" required
              value={form.nome} onChange={handleChange}
              placeholder="Seu nome completo"
              className={inputWithIcon}
            />
          </div>
        </div>

        <div>
          <FieldLabel htmlFor="telefone" required>WhatsApp</FieldLabel>
          <div className="relative">
            <IconWrap><Phone size={14} /></IconWrap>
            <input
              id="telefone" name="telefone" type="tel" required
              value={form.telefone} onChange={handleChange}
              placeholder="(73) 99999-9999"
              className={inputWithIcon}
            />
          </div>
        </div>
      </div>

      {/* Email */}
      <div>
        <FieldLabel htmlFor="email">
          E-mail
          <span className="text-muted-foreground/50 font-normal normal-case tracking-normal text-[10px] ml-1">(opcional)</span>
        </FieldLabel>
        <div className="relative">
          <IconWrap><Mail size={14} /></IconWrap>
          <input
            id="email" name="email" type="email"
            value={form.email} onChange={handleChange}
            placeholder="seu@email.com"
            className={inputWithIcon}
          />
        </div>
      </div>

      {/* Plano + Objetivo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <FieldLabel htmlFor="plano" required>Plano de interesse</FieldLabel>
          <div className="relative">
            <select
              id="plano" name="plano" required
              value={form.plano} onChange={handleChange}
              className={`${inputBase} appearance-none pr-9 ${form.plano === "" ? "text-muted-foreground/50" : "text-foreground"}`}
            >
              <option value="" disabled>Selecione...</option>
              {PLANOS.map((p) => (
                <option key={p.value} value={p.value} className="text-foreground bg-card">{p.label}</option>
              ))}
            </select>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground/60 pointer-events-none">
              <ChevronDown size={14} />
            </span>
          </div>
        </div>

        <div>
          <FieldLabel htmlFor="objetivo">Objetivo principal</FieldLabel>
          <div className="relative">
            <IconWrap><Target size={14} /></IconWrap>
            <select
              id="objetivo" name="objetivo"
              value={form.objetivo} onChange={handleChange}
              className={`${inputBase} pl-10 appearance-none pr-9 ${form.objetivo === "" ? "text-muted-foreground/50" : "text-foreground"}`}
            >
              <option value="">Selecione...</option>
              {OBJETIVOS.map((o) => (
                <option key={o.value} value={o.value} className="text-foreground bg-card">{o.label}</option>
              ))}
            </select>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground/60 pointer-events-none">
              <ChevronDown size={14} />
            </span>
          </div>
        </div>
      </div>

      {/* Forma de pagamento */}
      <div>
        <FieldLabel htmlFor="pagamento" required>Forma de pagamento</FieldLabel>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {PAGAMENTOS.map(({ value, label, Icon, desc }) => {
            const selected = form.pagamento === value
            return (
              <button
                key={value}
                type="button"
                onClick={() => setForm((prev) => ({ ...prev, pagamento: value }))}
                className={`
                  relative flex flex-col items-center gap-2 rounded-lg border px-3 py-4 text-center transition-all duration-200 cursor-pointer
                  ${selected
                    ? "border-primary bg-primary/10 shadow-md shadow-primary/20"
                    : "border-border bg-background hover:border-primary/50 hover:bg-primary/5"
                  }
                `}
              >
                {/* Indicador de selecionado */}
                {selected && (
                  <span className="absolute top-2 right-2 w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                    <CheckCircle size={10} className="text-primary-foreground" />
                  </span>
                )}
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${selected ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`}>
                  <Icon size={18} />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className={`text-sm font-bold leading-none ${selected ? "text-foreground" : "text-muted-foreground"}`}>
                    {label}
                  </span>
                  <span className="text-[10px] text-muted-foreground/70 leading-tight">{desc}</span>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Mensagem */}
      <div>
        <FieldLabel htmlFor="mensagem">
          Mensagem
          <span className="text-muted-foreground/50 font-normal normal-case tracking-normal text-[10px] ml-1">(opcional)</span>
        </FieldLabel>
        <div className="relative">
          <span className="absolute left-3 top-3.5 text-muted-foreground/60 pointer-events-none">
            <MessageSquare size={14} />
          </span>
          <textarea
            id="mensagem" name="mensagem" rows={3}
            value={form.mensagem} onChange={handleChange}
            placeholder="Alguma duvida ou informacao adicional?"
            className={`${inputWithIcon} resize-none`}
          />
        </div>
      </div>

      {/* Erro */}
      {status === "error" && (
        <div className="flex items-start gap-3 bg-red-500/8 border border-red-500/25 rounded-lg px-4 py-3">
          <AlertCircle size={15} className="text-red-400 shrink-0 mt-0.5" />
          <p className="text-red-400 text-xs leading-relaxed">{errorMsg}</p>
        </div>
      )}

      {/* Separador */}
      <div className="h-px bg-border" />

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-extrabold text-sm uppercase tracking-widest hover:opacity-90 active:scale-[0.98] transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-primary/25"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Zap size={15} />
            Quero me Matricular
          </>
        )}
      </button>

      <p className="text-center text-[11px] text-muted-foreground leading-relaxed">
        Ao enviar, voce concorda em ser contatado pela C2Fit via WhatsApp.
      </p>
    </form>
  )
}
