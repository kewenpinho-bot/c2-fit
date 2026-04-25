const stats = [
  { value: "17h", label: "Horas por dia de funcionamento" },
  { value: "6×", label: "Dias na semana" },
  { value: "3", label: "WhatsApp para contato" },
  { value: "100%", label: "Foco no seu resultado" },
]

export default function Stats() {
  return (
    <section className="bg-primary py-14 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map(({ value, label }) => (
          <div key={label} className="text-center">
            <p className="text-4xl md:text-5xl font-extrabold text-primary-foreground" style={{ fontFamily: "var(--font-heading, 'Barlow Condensed', sans-serif)" }}>
              {value}
            </p>
            <p className="text-primary-foreground/70 text-xs uppercase tracking-widest mt-1">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
