import type { ReactNode } from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import clsx from "clsx"

import Footer from "@components/layout/Footer"
import Header from "@components/layout/Header"
import PageContainer from "@components/layout/PageContainer"
import WindowContainer from "@components/layout/WindowContainer"

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
    <html className="bg-sky-600 text-zinc-700" lang="en">
      <body
        className={clsx(
          "m-4 mx-auto min-h-screen max-w-5xl antialiased",
          interSans.variable,
          jetbrainsMono.variable
        )}
      >
        <WindowContainer>
          <Header />
          <PageContainer>{children}</PageContainer>
        </WindowContainer>
        <Footer />
      </body>
    </html>
  )
}
