import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FloatingContactButton from "@/components/FloatingContact"
import { TooltipProvider } from "@/components/ui/tooltip"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "MRP Exim Products – High-Quality Shuttering Plywood & Pallets",
  description:
    "MRP Exim Products is a leading manufacturer of premium shuttering plywood and fly ash brick pallets. With a focus on durability, sustainability, and cost-effectiveness, our ZIPCO range is designed to meet the demands of modern construction projects. Discover our high-abrasion metallic film face plywood engineered for superior performance and long-term value.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} font-montserrat`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <TooltipProvider>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
              <FloatingContactButton />

            </div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

