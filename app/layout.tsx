import type { Metadata } from 'next'
import { Barlow, Barlow_Condensed } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const barlow = Barlow({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-sans' })
const barlowCondensed = Barlow_Condensed({ subsets: ['latin'], weight: ['600', '700', '800'], variable: '--font-heading' })

export const metadata: Metadata = {
  title: 'C2Fit Academia - Disciplina, Foco e Constância | Iguaí - BA',
  description: 'Academia de alto rendimento em Iguaí, BA. Acompanhamento personalizado para melhoria da qualidade de vida. Parceiro Wellhub (Gympass). Segunda a sexta, das 5h às 22h.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background scroll-smooth">
      <body className={`${barlow.variable} ${barlowCondensed.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
