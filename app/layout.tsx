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
  title: "Prompt Archive",
  description: "A library of beautifully directed brand components brought to life using AI",
  metadataBase: new URL("https://promptarchive.co"),
  openGraph: {
    title: "Prompt Archive",
    description: "A library of beautifully directed brand components brought to life using AI",
    url: "https://promptarchive.co",
    siteName: "Prompt Archive",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Prompt Archive - AI-generated brand components",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prompt Archive",
    description: "A library of beautifully directed brand components brought to life using AI",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
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
