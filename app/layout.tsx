import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Providers } from "@/app/providers"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"
import {
  ClerkProvider
} from '@clerk/nextjs'
import { SessionProvider } from "next-auth/react"



export const metadata: Metadata = {
  title: "SaaSify - Launch faster with a beautiful SaaS starter",
  description: "Auth, theming, docs, and a polished dashboard—out of the box.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider 
     appearance={{
      layout: {
        logoImageUrl: '/icons/logo.svg',
        logoPlacement: 'inside',
        socialButtonsVariant: 'auto',
        socialButtonsPlacement: 'top',
      },
      variables: {
        colorPrimary: '#0E78F9',
        colorText : '#fff',
        colorBackground : '#1c1f2e',
        colorInputBackground : '#252a41',
        colorInputText : '#fff',

        
      }
     }}
    >
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
    </ClerkProvider>
  )
}
