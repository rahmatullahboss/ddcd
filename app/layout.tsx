import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: {
    default: 'Digital Care - Modern Healthcare Platform',
    template: '%s | Digital Care'
  },
  description: 'Access quality healthcare services online',
  keywords: ['healthcare', 'telemedicine', 'doctors', 'appointments'],
  authors: [{ name: 'Rahmatullah' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://digitalcare.com',
    siteName: 'Digital Care',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630
    }]
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@digitalcare'
  },
  manifest: '/manifest.json',
  robots: {
    index: true,
    follow: true
  }
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' }
  ],
  width: 'device-width',
  initialScale: 1
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        {children}
      </body>
    </html>
  )
}