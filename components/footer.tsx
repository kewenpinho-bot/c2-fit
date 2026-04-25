import { Instagram, Facebook, MessageCircle } from "lucide-react"
import Logo3D from "@/components/logo-3d"
import { links } from "@/lib/use-external-link"

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Logo3D className="h-12" />
            <p className="text-xs text-muted-foreground text-center md:text-left">
              Disciplina, Foco e Constância.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {[
              { label: "Início", href: "#inicio" },
              { label: "Diferenciais", href: "#diferenciais" },
              { label: "Horários", href: "#horarios" },
              { label: "Contato", href: "#contato" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-xs text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href={links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
            >
              <Instagram size={16} />
            </a>
            <a
              href={links.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
            >
              <Facebook size={16} />
            </a>
            <a
              href={links.whatsapp1}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-9 h-9 rounded bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
            >
              <MessageCircle size={16} />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} C2Fit Academia. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            Parceiro{" "}
            <span className="text-primary font-semibold">Wellhub</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
