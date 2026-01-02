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
  title: "Angeles Adopción - Rescate y Adopción de Perros en Jalisco",
  description:
    "Rescate y rehabilitación de perritos en Saltillo, Jalisco. Más de 65 perros esperan encontrar un hogar lleno de amor. Adopta, dona o ayuda a cambiar vidas.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
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
