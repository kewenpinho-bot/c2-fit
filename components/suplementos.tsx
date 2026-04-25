"use client"

import { useState } from "react"
import { ShoppingCart, Store, Globe, Star, Zap, ChevronDown, ChevronUp } from "lucide-react"
import { links } from "@/lib/use-external-link"

interface Suplemento {
  id: string
  nome: string
  marca: string
  categoria: string
  peso: string
  preco: string
  descricao: string
  imagem?: string
  destaque?: boolean
  badge?: string
}

const SUPLEMENTOS: Suplemento[] = [
  {
    id: "creatina-darklabs-200g",
    nome: "Creatine Pure",
    marca: "Dark Labs",
    categoria: "Creatina",
    peso: "300g",
    preco: "Consultar",
    descricao: "Creatina monoidratada pura com alta pureza e absorção. Embalagem 300g, indicada para ganho de força e volume muscular.",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/aAV59VPfdEsgqb0FLBZa8-nHMMqQKcEEReFNM1igZ5df5WyFTiK5.jpg",
    destaque: true,
    badge: "Mais Vendido",
  },
  {
    id: "creatina-blackskull",
    nome: "Creatine Turbo",
    marca: "Black Skull",
    categoria: "Creatina",
    peso: "300g",
    preco: "Consultar",
    descricao: "Creatina turbo Black Skull sem sabor, formula concentrada para maxima performance e ganho de forca. Embalagem 300g com certificacao de qualidade.",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/YLLPcXC4tgJje9H8kgIvN-ciMHhpFu14nBumrxzxgU414wEO7bvZ.jpg",
  },
  {
    id: "creatina-max-titanium",
    nome: "Creatine",
    marca: "Max Titanium",
    categoria: "Creatina",
    peso: "300g",
    preco: "Consultar",
    descricao: "Creatina pura Max Titanium para aumento de força, potência e recuperação muscular acelerada. Embalagem 300g com alto grau de pureza.",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/0Hogz6ht2eD011OUieVlw-JNkMWje9R1Ei3uYdYehQyWUI2lH5Zh.jpg",
    badge: "Top Qualidade",
  },
  {
    id: "whey-concentrado",
    nome: "100% Whey",
    marca: "Max Titanium",
    categoria: "Proteina",
    peso: "900g",
    preco: "Consultar",
    descricao: "100% Whey Max Titanium com 21g de proteina por dose, 4.668mg de BCAA e sem gluten. Sabor Baunilha, ideal para ganho de massa muscular e recuperacao pos-treino.",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/pzFkuIUu5Il1xuVKjRGdZ-SzoVhpem2VRtndSFar1TszciZR2ROW.jpg",
  },
  {
    id: "pre-treino",
    nome: "Pre-Workout Diabo Verde",
    marca: "FTW",
    categoria: "Pre-Treino",
    peso: "300g",
    preco: "Consultar",
    descricao: "Pre-Workout FTW Diabo Verde 300g, nova formula com beta-alanina, cafeina e taurina para energia e foco extremos. Invoque seus treinos ao maximo nivel.",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/g8rHesGyW4vqQIcYnT3Tx-CsZpmdJA4BnO5CqCc2yTworZjxYihl.jpg",
    badge: "Alta Demanda",
  },
  {
    id: "bcaa",
    nome: "BCAA 2044mg",
    marca: "Integralmedica",
    categoria: "Aminoacidos",
    peso: "Variado",
    preco: "Consultar",
    descricao: "BCAA 2044mg com 1022mg de L-Leucina e vitamina B6. Aminoacidos de cadeia ramificada para recuperacao muscular acelerada e reducao de catabolismo.",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/Vtuv5KMCn5z5rz06tqYPh-C4dcGSyNhHlBq1f9z7JiD6jBUlDPgn.jpg",
  },
]

const CATEGORIAS = ["Todos", "Creatina", "Proteina", "Pre-Treino", "Aminoacidos"]

const CATEGORIA_CORES: Record<string, string> = {
  Creatina:    "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  Proteina:    "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Pre-Treino":"bg-red-500/10 text-red-400 border-red-500/20",
  Aminoacidos: "bg-green-500/10 text-green-400 border-green-500/20",
}

export default function Suplementos() {
  const [filtro, setFiltro] = useState("Todos")
  const [expandido, setExpandido] = useState<string | null>(null)

  const filtrados = filtro === "Todos"
    ? SUPLEMENTOS
    : SUPLEMENTOS.filter((s) => s.categoria === filtro)

  return (
    <section id="suplementos" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block border border-primary/40 text-primary text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            Loja de Suplementos
          </span>
          <h2
            className="text-4xl md:text-5xl font-extrabold uppercase text-foreground text-balance mb-4"
            style={{ fontFamily: "var(--font-heading, 'Barlow Condensed', sans-serif)" }}
          >
            Suplementos <span className="text-primary">Disponíveis</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto leading-relaxed">
            Compre presencialmente na academia ou solicite pelo WhatsApp. Produtos selecionados para potencializar seus resultados.
          </p>

          {/* Disponibilidade */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <div className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2">
              <Store size={15} className="text-primary" />
              <span className="text-xs font-semibold text-foreground">Loja fisica na academia</span>
            </div>
            <div className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2">
              <Globe size={15} className="text-primary" />
              <span className="text-xs font-semibold text-foreground">Pedidos pelo WhatsApp</span>
            </div>
          </div>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIAS.map((cat) => (
            <button
              key={cat}
              onClick={() => setFiltro(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wider border transition-all duration-200 cursor-pointer ${
                filtro === cat
                  ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/30"
                  : "bg-card border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid de produtos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtrados.map((item) => {
            const aberto = expandido === item.id
            return (
              <div
                key={item.id}
                className={`relative bg-card rounded-xl border transition-all duration-300 flex flex-col overflow-hidden ${
                  item.destaque
                    ? "border-primary/50 shadow-lg shadow-primary/10"
                    : "border-border hover:border-primary/30"
                }`}
              >
                {/* Badge */}
                {item.badge && (
                  <div className="absolute top-3 right-3 z-10">
                    <span className="inline-flex items-center gap-1 bg-primary text-primary-foreground text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full">
                      <Star size={9} />
                      {item.badge}
                    </span>
                  </div>
                )}

                {/* Imagem placeholder */}
                <div className={`relative h-44 flex items-center justify-center ${item.destaque ? "bg-primary/8" : "bg-secondary"}`}>
                  <img
                    src={item.imagem ?? "https://placehold.co/240x176?text=Suplemento+C2Fit"}
                    alt={`Embalagem do suplemento ${item.nome} da marca ${item.marca} com ${item.peso}`}
                    className="h-36 w-auto object-contain drop-shadow-lg"
                    loading="lazy"
                    decoding="async"
                  />
                  {/* Categoria pill */}
                  <span className={`absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-wider border px-2.5 py-1 rounded-full ${CATEGORIA_CORES[item.categoria] || "bg-muted text-muted-foreground border-border"}`}>
                    {item.categoria}
                  </span>
                </div>

                {/* Conteudo */}
                <div className="flex flex-col flex-1 p-5 gap-3">
                  <div>
                    <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-1">{item.marca}</p>
                    <h3
                      className="text-lg font-extrabold text-foreground uppercase leading-tight"
                      style={{ fontFamily: "var(--font-heading, 'Barlow Condensed', sans-serif)" }}
                    >
                      {item.nome}
                    </h3>
                    <p className="text-muted-foreground text-xs mt-0.5">{item.peso}</p>
                  </div>

                  {/* Descricao expansivel */}
                  <div>
                    <p className={`text-muted-foreground text-sm leading-relaxed transition-all ${aberto ? "" : "line-clamp-2"}`}>
                      {item.descricao}
                    </p>
                    <button
                      onClick={() => setExpandido(aberto ? null : item.id)}
                      className="flex items-center gap-1 text-primary text-xs font-semibold mt-1 hover:underline cursor-pointer"
                    >
                      {aberto ? <><ChevronUp size={12} /> Ver menos</> : <><ChevronDown size={12} /> Ver mais</>}
                    </button>
                  </div>

                  {/* Preco e CTA */}
                  <div className="mt-auto pt-3 border-t border-border flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Preco</p>
                      <p className="text-primary font-extrabold text-base">{item.preco}</p>
                    </div>
                    <a
                      href={links.whatsappSuplemento(`${item.nome} ${item.marca} ${item.peso}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-lg hover:opacity-90 transition-opacity shadow-md shadow-primary/20"
                    >
                      <ShoppingCart size={13} />
                      Pedir agora
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Banner CTA */}
        <div className="mt-12 bg-primary rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary-foreground/15 flex items-center justify-center shrink-0">
              <Zap size={24} className="text-primary-foreground" />
            </div>
            <div>
              <p
                className="text-primary-foreground font-extrabold text-xl uppercase"
                style={{ fontFamily: "var(--font-heading, 'Barlow Condensed', sans-serif)" }}
              >
                Nao encontrou o que procura?
              </p>
              <p className="text-primary-foreground/75 text-sm">
                Fale com a gente pelo WhatsApp e consulte o estoque completo.
              </p>
            </div>
          </div>
          <a
            href={links.whatsapp1}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-primary-foreground text-primary px-7 py-3 rounded-lg font-extrabold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            <ShoppingCart size={16} />
            Ver estoque completo
          </a>
        </div>

      </div>
    </section>
  )
}
