import { Target, TrendingUp, Users, Award, Zap, Heart } from "lucide-react"

const items = [
  {
    icon: Target,
    title: "Disciplina, Foco e Constância",
    description:
      "Nossa filosofia é baseada nos três pilares que transformam corpos e vidas. Cada treino é uma oportunidade de evoluir.",
  },
  {
    icon: TrendingUp,
    title: "Alto Rendimento",
    description:
      "Estrutura completa voltada para atletas e praticantes que buscam o máximo do seu desempenho físico.",
  },
  {
    icon: Users,
    title: "Plano Estudante",
    description:
      "Condições especiais para estudantes, porque investir em saúde e bem-estar é essencial em todas as fases da vida.",
  },
  {
    icon: Heart,
    title: "Qualidade de Vida",
    description:
      "Mais do que musculação: acompanhamento dedicado para melhorar sua saúde, disposição e bem-estar geral.",
  },
  {
    icon: Award,
    title: "Parceiro Wellhub",
    description:
      "Academia credenciada ao Wellhub (anteriormente Gympass), facilitando o acesso via benefício corporativo.",
  },
  {
    icon: Zap,
    title: "Novo Conceito de Fitness",
    description:
      "Reconhecidos como referência em Iguaí, trazemos uma nova visão de academia para a cidade.",
  },
]

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="bg-background py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-[0.3em] mb-3">
            Por que escolher a C2Fit
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase text-foreground text-balance" style={{ fontFamily: "var(--font-heading, 'Barlow Condensed', sans-serif)" }}>
            Nossos <span className="text-primary">Diferenciais</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group bg-card border border-border rounded-lg p-8 hover:border-primary/50 hover:bg-card/80 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <Icon size={22} className="text-primary" />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-wide text-foreground mb-3" style={{ fontFamily: "var(--font-heading, 'Barlow Condensed', sans-serif)" }}>
                {title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
