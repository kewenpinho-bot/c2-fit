import FormMatricula from "@/components/form-matricula"
import { ClipboardList, CheckCircle2, Clock } from "lucide-react"

const beneficios = [
  "Atendimento personalizado desde o primeiro dia",
  "Plano estudante com desconto especial",
  "Compativel com Wellhub / Gympass",
  "Sem taxa de adesao na matricula online",
]

const horarios = [
  { dia: "Segunda a Sexta", hora: "05h – 22h" },
  { dia: "Sabado",          hora: "08h – 12h" },
]

export default function Matricula() {
  return (
    <section id="matricula" className="relative py-24 px-4 overflow-hidden">
      {/* Fundo com divisao visual */}
      <div className="absolute inset-0 bg-card" />
      <div className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle at 80% 50%, oklch(0.88 0.21 95 / 0.04) 0%, transparent 60%)",
        }}
      />
      {/* Linha amarela topo */}
      <div className="absolute top-0 left-0 right-0 h-px bg-primary/30" />

      <div className="relative max-w-6xl mx-auto">

        {/* Header centralizado */}
        <div className="flex flex-col items-center text-center mb-14 gap-4">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5">
            <ClipboardList size={13} className="text-primary" />
            <span className="text-primary text-[11px] font-bold uppercase tracking-widest">Pre-matricula gratuita</span>
          </div>
          <h2
            className="text-4xl md:text-6xl font-extrabold uppercase text-foreground text-balance leading-none"
            style={{ fontFamily: "var(--font-heading, 'Barlow Condensed', sans-serif)" }}
          >
            Pronto para <span className="text-primary">comecar?</span>
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-lg">
            Preencha o formulario e nossa equipe entrara em contato pelo WhatsApp para apresentar os planos e confirmar sua matricula.
          </p>
        </div>

        {/* Grid 2 colunas */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* Coluna esquerda — info (2/5) */}
          <aside className="lg:col-span-2 flex flex-col gap-6">

            {/* Beneficios */}
            <div className="bg-background rounded-xl border border-border p-6 flex flex-col gap-4">
              <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                O que voce ganha
              </p>
              <ul className="flex flex-col gap-3">
                {beneficios.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Horarios */}
            <div className="bg-background rounded-xl border border-border p-6 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-primary" />
                <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                  Horario de funcionamento
                </p>
              </div>
              <div className="flex flex-col gap-2">
                {horarios.map(({ dia, hora }) => (
                  <div key={dia} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                    <span className="text-sm text-muted-foreground">{dia}</span>
                    <span className="text-sm font-bold text-primary">{hora}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Destaque lateral */}
            <div className="bg-primary rounded-xl p-6 flex flex-col gap-2">
              <p className="text-primary-foreground text-[11px] font-bold uppercase tracking-widest opacity-70">
                Nosso lema
              </p>
              <p
                className="text-primary-foreground text-2xl font-extrabold uppercase leading-tight"
                style={{ fontFamily: "var(--font-heading, 'Barlow Condensed', sans-serif)" }}
              >
                Disciplina.<br />Foco.<br />Constancia.
              </p>
            </div>

          </aside>

          {/* Coluna direita — formulario (3/5) */}
          <div className="lg:col-span-3">
            <div className="bg-background rounded-xl border border-primary/20 shadow-2xl shadow-primary/5 overflow-hidden">
              {/* Header do card */}
              <div className="bg-primary/8 border-b border-primary/15 px-7 py-4 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <p className="text-sm font-bold text-foreground uppercase tracking-wider">
                  Formulario de pre-matricula
                </p>
              </div>
              {/* Formulario */}
              <div className="p-7 md:p-8">
                <FormMatricula />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
