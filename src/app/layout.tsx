import type { ReactNode } from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import clsx from "clsx"

import Footer from "@components/layout/footer"
import Header from "@components/layout/header"

import "@styles/tailwind.css"

const interSans = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "Michael (In Jey) Hwang",
  description: "Michael's personal website",
}

type RootLayoutProps = Readonly<{ children: ReactNode }>

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className="bg-zinc-50 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50"
    >
      <body
        className={clsx(
          "relative mx-auto min-h-screen max-w-5xl antialiased",
          interSans.variable,
          jetbrainsMono.variable
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
