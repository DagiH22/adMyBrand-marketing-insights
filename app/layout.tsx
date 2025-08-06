// app/layout.tsx
import * as React from "react";
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'], // You can also add 'latin-ext' or 'cyrillic', etc.
  display: 'swap',
  variable: '--font-inter',
})
console.log('Inter font loaded:', inter);


export const metadata: Metadata = {
  title: 'ADmyBRAND Insights Dashboard',
  description: 'AI-powered analytics dashboard',
  icons: { 
    icon: 'https://us.admybrand.com/favicon.ico',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark ">
      <body className="bg-gray-100 text-gray-900">
        {children}
      </body>
    </html>
  )
}
