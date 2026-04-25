import { type NextRequest, NextResponse } from "next/server"

export interface MatriculaSubmission {
  id: string
  nome: string
  telefone: string
  email: string
  plano: string
  objetivo: string
  pagamento: string
  mensagem: string
  createdAt: string
  status: "novo" | "contatado" | "matriculado"
}

// In-memory store (persists per server instance; for production use a database)
const submissions: MatriculaSubmission[] = []

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const { nome, telefone, email, plano, objetivo, pagamento, mensagem } = body

    // Validation
    if (!nome || !telefone || !plano) {
      return NextResponse.json(
        { success: false, error: "Nome, telefone e plano sao obrigatorios." },
        { status: 400 }
      )
    }

    if (nome.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Nome deve ter pelo menos 2 caracteres." },
        { status: 400 }
      )
    }

    const phoneClean = telefone.replace(/\D/g, "")
    if (phoneClean.length < 10 || phoneClean.length > 11) {
      return NextResponse.json(
        { success: false, error: "Telefone invalido. Use DDD + numero." },
        { status: 400 }
      )
    }

    const entry: MatriculaSubmission = {
      id: crypto.randomUUID(),
      nome: nome.trim(),
      telefone: phoneClean,
      email: email?.trim() || "",
      plano,
      objetivo: objetivo || "",
      pagamento: pagamento || "",
      mensagem: mensagem?.trim() || "",
      createdAt: new Date().toISOString(),
      status: "novo",
    }

    submissions.push(entry)

    // Build WhatsApp redirect message for the academy
    const waText = encodeURIComponent(
      `Novo interesse de matricula!\n\nNome: ${entry.nome}\nTelefone: ${entry.telefone}\nPlano: ${entry.plano}\nObjetivo: ${entry.objetivo || "—"}\nForma de pagamento: ${entry.pagamento || "—"}\nMensagem: ${entry.mensagem || "—"}`
    )

    return NextResponse.json({
      success: true,
      id: entry.id,
      waRedirect: `https://wa.me/5573999815160?text=${waText}`,
      message: "Formulario enviado com sucesso! Entraremos em contato em breve.",
    })
  } catch {
    return NextResponse.json(
      { success: false, error: "Erro interno. Tente novamente." },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get("secret")

  // Simple secret guard for the admin panel
  if (secret !== "c2fit2024admin") {
    return NextResponse.json({ error: "Nao autorizado." }, { status: 401 })
  }

  return NextResponse.json({
    total: submissions.length,
    submissions: submissions.sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    ),
  })
}

export async function PATCH(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get("secret")

  if (secret !== "c2fit2024admin") {
    return NextResponse.json({ error: "Nao autorizado." }, { status: 401 })
  }

  const { id, status } = await request.json()
  const entry = submissions.find((s) => s.id === id)
  if (!entry) {
    return NextResponse.json({ error: "Registro nao encontrado." }, { status: 404 })
  }

  entry.status = status
  return NextResponse.json({ success: true, entry })
}
