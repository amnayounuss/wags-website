
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'

// The site renders in Arabic by default, so the document metadata leads in Arabic.
export const metadata: Metadata = {
  title: 'واجز تك | WAGS Tech — حلول أودو ERP في السعودية',
  description:
    'تطبيق أنظمة أودو ERP مخصصة، متوافقة مع هيئة الزكاة والضريبة والجمارك، ووحدات مخصصة للشركات في المملكة العربية السعودية. Tailored Odoo ERP implementations, ZATCA-compliant systems, and custom modules for Saudi businesses.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        <link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
        {/* Arabic typeface — used for every RTL string on the site */}
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap" rel="stylesheet" />
        {/* Armory type system: Inter (variable, optical-size axis = "Inter Display"),
            Geist Mono for eyebrows and card titles, IBM Plex Mono for meta text */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,200..700&family=Geist+Mono:wght@200..700&family=IBM+Plex+Mono:wght@300;400;500&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="am" suppressHydrationWarning>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
