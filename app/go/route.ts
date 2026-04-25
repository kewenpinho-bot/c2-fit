import { redirect } from "next/navigation"
import { type NextRequest } from "next/server"

const ALLOWED_HOSTS = [
  "wa.me",
  "api.whatsapp.com",
  "instagram.com",
  "www.instagram.com",
  "facebook.com",
  "www.facebook.com",
  "maps.google.com",
  "google.com",
]

export function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const url = searchParams.get("url")

  if (!url) {
    return redirect("/")
  }

  try {
    const parsed = new URL(url)
    const isAllowed = ALLOWED_HOSTS.some(
      (host) => parsed.hostname === host || parsed.hostname.endsWith("." + host)
    )
    if (!isAllowed) {
      return redirect("/")
    }
    return redirect(url)
  } catch {
    return redirect("/")
  }
}
