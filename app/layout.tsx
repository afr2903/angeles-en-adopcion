import type React from "react"
import type { Metadata } from "next"
import { Nunito, Lato } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloatButton } from "@/components/whatsapp-float-button"

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-heading",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Ángeles en Adopción - Rescate y Adopción de Animales en Jalisco",
  description:
    "Rescate y rehabilitación de ángeles en El Salto, Jalisco. Más de 80 animales esperan encontrar un hogar lleno de amor. Adopta, dona o ayuda a cambiar vidas.",
  keywords: ["adopción", "rescate", "perros", "gatos", "Jalisco", "El Salto", "animales", "refugio"],
  openGraph: {
    title: "Ángeles en Adopción",
    description: "Adopta un ángel, cambia tu vida. Más de 80 animales rescatados esperan un hogar.",
    type: "website",
    locale: "es_MX",
    siteName: "Ángeles en Adopción",
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${lato.variable} ${nunito.variable} font-sans antialiased`}>
        <Navigation />
        {children}
        <Footer />
        <WhatsAppFloatButton />
        <Analytics />
      </body>
    </html>
  )
}
