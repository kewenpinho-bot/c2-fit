import { Clock, CalendarDays, Info } from "lucide-react"

const schedule = [
  {
    day: "Segunda a Sexta",
    hours: "05h às 22h",
    available: true,
  },
  {
    day: "Sábado",
    hours: "08h às 12h",
    available: true,
    note: "Verificar disponibilidade por agendamento",
  },
  {
    day: "Domingo",
    hours: "Fechado",
    available: false,
  },
]

export default function Horarios() {
  return (
    <section id="horarios" className="bg-secondary py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-primary text-sm font-semibold uppercase tracking-[0.3em] mb-3">
              Estamos esperando por você
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase text-foreground text-balance mb-6" style={{ fontFamily: "var(--font-heading, 'Barlow Condensed', sans-serif)" }}>
              Horários de <span className="text-primary">Funcionamento</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Com horários flexíveis, você pode treinar cedo de manhã antes do trabalho
              ou à noite após o expediente. Encontre o horário ideal para a sua rotina.
            </p>

            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Info size={16} className="text-primary shrink-0" />
              <span>
                Para sábados, entre em contato para confirmar disponibilidade via agendamento.
              </span>
            </div>
          </div>

          {/* Right — schedule cards */}
          <div className="flex flex-col gap-4">
            {schedule.map(({ day, hours, available, note }) => (
              <div
                key={day}
                className={`flex items-center justify-between rounded-lg px-6 py-5 border transition-all ${
                  available
                    ? "bg-card border-border hover:border-primary/40"
                    : "bg-card/40 border-border/40 opacity-50"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 rounded flex items-center justify-center ${
                      available ? "bg-primary/10" : "bg-muted"
                    }`}
                  >
                    <CalendarDays
                      size={18}
                      className={available ? "text-primary" : "text-muted-foreground"}
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{day}</p>
                    {note && (
                      <p className="text-xs text-muted-foreground mt-0.5">{note}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-primary font-bold tracking-wide text-sm" style={{ fontFamily: "var(--font-heading, 'Barlow Condensed', sans-serif)" }}>
                  {available && <Clock size={15} />}
                  <span>{hours}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
