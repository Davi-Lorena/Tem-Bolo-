import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Tem Bolo! | Bolos e doces artesanais",
  description: "Bolos, trufas, docinhos e bombons feitos com muita qualidade e carinho.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>
}
