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
      <head>
      <link
  rel="icon"
  href="@/public/img/logo.svg"
  type="image/<generated>"
  sizes="<generated>"
/>
      </head>
      <body className={inter.className}>
    
        {children}
      </body>
    </html>
  )
}
