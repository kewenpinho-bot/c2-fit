import { MapPin, Phone, Instagram, Facebook, ExternalLink } from "lucide-react"
import { links } from "@/lib/use-external-link"

const whatsapps = [
  { href: links.whatsapp1, display: "(73) 99981-5160" },
  { href: links.whatsapp2, display: "(73) 98882-1627" },
  { href: links.whatsapp3, display: "(73) 98894-6457" },
]

export default function Contato() {
  return (
    <section id="contato" className="bg-background py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-[0.3em] mb-3">
            Fale conosco
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase text-foreground text-balance" style={{ fontFamily: "var(--font-heading, 'Barlow Condensed', sans-serif)" }}>
            Entre em <span className="text-primary">Contato</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Info cards */}
          <div className="flex flex-col gap-6">
            {/* Address */}
            <div className="bg-card border border-border rounded-lg p-7">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground uppercase tracking-wide text-sm mb-1">
                    Endereço
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Rua Rodrigo Teixeira, 6<br />
                    Centro, Iguaí - BA<br />
                    CEP: 45280-000
                  </p>
                  <a
                    href={links.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary text-xs font-semibold mt-3 hover:underline"
                  >
                    Ver no mapa <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-card border border-border rounded-lg p-7">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-primary" />
                </div>
                <div className="w-full">
                  <p className="font-bold text-foreground uppercase tracking-wide text-sm mb-3">
                    WhatsApp
                  </p>
                  <div className="flex flex-col gap-2">
                    {whatsapps.map(({ href, display }) => (
                      <a
                        key={href}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between bg-secondary rounded px-4 py-3 hover:bg-primary/10 hover:border-primary/30 border border-transparent transition-all group w-full"
                      >
                        <span className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">
                          {display}
                        </span>
                        <span className="text-primary text-xs font-semibold uppercase tracking-wider">
                          Chamar
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="bg-card border border-border rounded-lg p-7">
              <p className="font-bold text-foreground uppercase tracking-wide text-sm mb-4">
                Redes Sociais
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href={links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <Instagram size={18} className="text-primary" />
                  <span className="text-muted-foreground text-sm group-hover:text-primary transition-colors">
                    @c2fit.iguai
                  </span>
                </a>
                <a
                  href={links.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <Facebook size={18} className="text-primary" />
                  <span className="text-muted-foreground text-sm group-hover:text-primary transition-colors">
                    C2Fit Academia
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Map card */}
          <div className="rounded-lg overflow-hidden border border-border h-full min-h-[420px] bg-card flex flex-col">
            {/* Static map visual */}
            <div className="flex-1 relative bg-secondary min-h-[300px] flex items-center justify-center overflow-hidden">
              {/* Grid lines simulating map */}
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "linear-gradient(var(--color-border,#333) 1px, transparent 1px), linear-gradient(90deg, var(--color-border,#333) 1px, transparent 1px)",
                  backgroundSize: "40px 40px"
                }}
              />
              {/* Map pin */}
              <div className="relative z-10 flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-2xl shadow-primary/50">
                  <MapPin size={32} className="text-primary-foreground" />
                </div>
                <div className="bg-card border border-border rounded-lg px-5 py-3 text-center shadow-xl">
                  <p className="font-bold text-foreground text-sm uppercase tracking-wide">
                    C2Fit Academia
                  </p>
                  <p className="text-muted-foreground text-xs mt-1">
                    Rua Rodrigo Teixeira, 6 - Centro
                  </p>
                  <p className="text-muted-foreground text-xs">Iguaí - BA</p>
                </div>
              </div>
            </div>
            {/* Footer do map card */}
            <div className="bg-card border-t border-border px-5 py-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-foreground text-sm font-semibold">Rua Rodrigo Teixeira, 6</p>
                <p className="text-muted-foreground text-xs">Centro, Iguaí - BA, 45280-000</p>
              </div>
              <a
                href={links.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded hover:opacity-90 transition-opacity shrink-0"
              >
                <ExternalLink size={12} />
                Abrir no Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
