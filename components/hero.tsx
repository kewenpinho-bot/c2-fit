"use client"

import { Instagram, Facebook, MessageCircle } from "lucide-react"
import Logo3D from "@/components/logo-3d"
import { links } from "@/lib/use-external-link"

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/qAziEOTj0eGyR9LjXAW0O-oVtSOql7plDhIDObxfi7PsGuVHYbyV.jpg"
          alt="Atleta realizando exercicio de cabo em academia moderna com equipamentos de alto rendimento"
          className="w-full h-full object-cover object-center"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>

      {/* Nav */}
      <header className="absolute top-0 left-0 right-0 z-20 px-6 md:px-16 py-6 flex items-center justify-between">
        <a href="#inicio" aria-label="C2Fit Academia - Início">
          <Logo3D className="h-14" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "Inicio",       href: "#inicio" },
            { label: "Diferenciais", href: "#diferenciais" },
            { label: "Horarios",     href: "#horarios" },
            { label: "Matricula",    href: "#matricula" },
            { label: "Contato",      href: "#contato" },
          ].map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium tracking-wide text-muted-foreground hover:text-primary transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#matricula"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity shadow-lg shadow-primary/30"
          >
            Matricule-se
          </a>
          <a
            href={links.whatsapp1}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-border text-muted-foreground px-4 py-2.5 rounded font-semibold text-sm uppercase tracking-wider hover:border-primary hover:text-primary transition-colors"
          >
            <MessageCircle size={15} />
            WhatsApp
          </a>
        </div>
      </header>

      {/* Hero content */}
      <div className="relative z-10 px-6 md:px-16 pt-32 pb-24 max-w-5xl">
        <p className="text-primary text-sm font-semibold uppercase tracking-[0.3em] mb-4">
          Novo conceito de fitness em Iguaí - BA
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold uppercase leading-none text-foreground text-balance mb-6" style={{ fontFamily: "var(--font-heading, 'Barlow Condensed', sans-serif)" }}>
          Disciplina,{" "}
          <span className="text-primary">Foco</span>{" "}
          e Constância.
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-xl leading-relaxed mb-10">
          A academia de alto rendimento de Iguaí. Estrutura completa e acompanhamento
          especializado para transformar sua qualidade de vida.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#matricula"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded font-bold text-base uppercase tracking-widest hover:opacity-90 transition-opacity shadow-xl shadow-primary/40"
          >
            Matricule-se
          </a>
          <a
            href={links.whatsapp1}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-foreground px-8 py-4 rounded font-bold text-sm uppercase tracking-widest hover:bg-white/20 transition-colors"
          >
            <MessageCircle size={18} />
            Falar no WhatsApp
          </a>
          <a
            href="#diferenciais"
            className="inline-flex items-center gap-2 border border-border text-foreground px-8 py-4 rounded font-bold text-sm uppercase tracking-widest hover:border-primary hover:text-primary transition-colors"
          >
            Conhecer mais
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-4 mt-12">
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Siga-nos</span>
          <div className="h-px w-8 bg-border" />
          <a
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram C2Fit"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Instagram size={20} />
          </a>
          <a
            href={links.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook C2Fit Academia"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Facebook size={20} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-10 bg-primary/50" />
      </div>
    </section>
  )
}
