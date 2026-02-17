import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import "dialkit/styles.css"
import { Agentation } from "agentation"
import { DialRoot } from "dialkit"

const inter = Inter({ 
  subsets: ["latin"],
  weight: "400",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "AI Artifacts Gallery",
  description: "A curated library of beautifully directed brand components brought to life using AI",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-black`}>
        {children}
        {process.env.NODE_ENV === "development" && (
          <>
            <DialRoot />
            <Agentation />
          </>
        )}
      </body>
    </html>
  )
}
