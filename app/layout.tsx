import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FloatingContactButton from "@/components/FloatingContact"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next"
import Head from "next/head"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "MRP Exim Products – High-Quality Shuttering Plywood & Pallets",
  description:
    "MRP Exim Products- leading manufacturer of premium shuttering plywood and fly ash brick pallets. Durable & Cost-effective and industrial needs.",
  keywords:
    "MRP Exim Products, shuttering plywood, fly ash brick pallets, high-quality plywood, durable pallets, cost-effective solutions, industrial needs, plywood manufacturer, India",
  authors: [
    {
      name: "MRP Exim Products",
      url: "https://www.mrpeximproducts.com",
    },
  ],
  creator: "MRP Exim Products",
  publisher: "MRP Exim Products",
  openGraph: {
    title: "MRP Exim Products – High-Quality Shuttering Plywood & Pallets",
    description:
      "MRP Exim Products- leading manufacturer of premium shuttering plywood and fly ash brick pallets. Durable & Cost-effective and industrial needs.",
    url: "https://www.flyashbrickpallet.com",
    siteName: "MRP Exim Products",
    images: [
      {
        url: "https://www.flyashbrickpallet/logo.png",
        width: 800,
        height: 600,
        alt: "MRP Exim Products Logo",
      },
    ],
    locale: "en-IN",
    type: "website",
  }
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
       <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="next-size-adjust" content="none" />
      </Head>
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

