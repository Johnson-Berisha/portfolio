import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Header from "@/design/components/header/header"

import "@/design/style/global.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Johnson",
  description: "Description",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
