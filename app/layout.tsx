import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

/* Using Inter font for professional, modern legal services aesthetic */
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Recht 24/7 – Deutschlands große Online-Kanzlei | Anwalt geht auch einfach",
  description:
    "21+ Jahre Erfahrung, über 100.000 zufriedene Mandanten. Faire Festpreise für Gründungen, Vertragscheck, Beratung & mehr. Direkt zum Anwalt, deutschlandweit.",
  generator: "v0.app",
  keywords: "Online-Anwalt, Rechtsberatung, Gründung, Vertragscheck, UG, GmbH, Markenanmeldung, Anwalt Deutschland",
  authors: [{ name: "Recht 24/7" }],
  openGraph: {
    title: "Recht 24/7 – Deutschlands große Online-Kanzlei",
    description: "Einfacher Zugang zu Recht mit fairen Festpreisen. 21+ Jahre Erfahrung.",
    type: "website",
  },
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
    <html lang="de">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
