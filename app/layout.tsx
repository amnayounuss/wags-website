
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'WAGS Tech — Odoo ERP Solutions in Saudi Arabia',
  description: 'Tailored Odoo ERP implementations, ZATCA-compliant systems, and custom modules for Saudi Arabian businesses.',
  viewport: 'width=device-width, initial-scale=1.0',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
