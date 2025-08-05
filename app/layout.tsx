// app/layout.tsx
import * as React from "react";
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ADmyBRAND Insights Dashboard',
  description: 'AI-powered analytics dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-gray-100 text-gray-900">
        {children}
      </body>
    </html>
  )
}
