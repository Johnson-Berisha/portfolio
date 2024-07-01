import type { Metadata } from "next"
import { Inter } from "next/font/google"
import SmoothScrolling from "@/design/components/SmoothScrolling";
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
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link
          rel="icon"
          href="@/public/img/logo.svg"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={inter.className}>
    
        <SmoothScrolling>{children}</SmoothScrolling>

      </body>
    </html>
  )
}
