import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { MainNav } from "@/components/main-nav"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "GDG E-Learning Platform",
  description: "Learn and grow with Google Developer Groups",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen">
            <header className="border-b">
              <div className="container flex h-16 items-center">
                <MainNav />
              </div>
            </header>
            <main className="flex-1 container py-6">{children}</main>
            <footer className="border-t py-4 text-center text-sm">© 2023 GDG E-Learning Platform</footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

