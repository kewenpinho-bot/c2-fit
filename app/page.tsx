import Hero from "@/components/hero"
import Stats from "@/components/stats"
import Diferenciais from "@/components/diferenciais"
import Horarios from "@/components/horarios"
import Suplementos from "@/components/suplementos"
import Matricula from "@/components/matricula"
import CTA from "@/components/cta"
import Contato from "@/components/contato"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Diferenciais />
      <Horarios />
      <Suplementos />
      <Matricula />
      <CTA />
      <Contato />
      <Footer />
    </main>
  )
}
