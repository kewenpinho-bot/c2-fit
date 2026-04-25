import { MessageCircle } from "lucide-react"
import { links } from "@/lib/use-external-link"

export default function CTA() {
  return (
    <section className="relative bg-secondary py-24 px-6 md:px-16 overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
      <div className="absolute right-0 top-0 bottom-0 w-1 bg-primary" />

      <div className="max-w-4xl mx-auto text-center">
        <p className="text-primary text-sm font-semibold uppercase tracking-[0.3em] mb-4">
          Pronto para mudar sua vida?
        </p>
        <h2 className="text-4xl md:text-6xl font-extrabold uppercase text-foreground text-balance mb-6" style={{ fontFamily: "var(--font-heading, 'Barlow Condensed', sans-serif)" }}>
          Comece hoje mesmo na <span className="text-primary">C2Fit</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed mb-10">
          Entre em contato pelo WhatsApp, tire suas dúvidas sobre planos e venha
          conhecer nossa estrutura. A primeira visita é por nossa conta.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#matricula"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-5 rounded font-extrabold text-base uppercase tracking-widest hover:opacity-90 transition-opacity shadow-2xl shadow-primary/40"
          >
            Matricule-se agora
          </a>
          <a
            href={links.whatsapp1}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border text-foreground px-10 py-5 rounded font-bold text-sm uppercase tracking-widest hover:border-primary hover:text-primary transition-colors"
          >
            <MessageCircle size={18} />
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
