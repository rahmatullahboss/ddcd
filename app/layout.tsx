import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: {
    default: 'Digital Care - IT Solutions Agency',
    template: '%s | Digital Care'
  },
  description: 'Professional IT services and digital solutions for your business',
  keywords: ['IT services', 'web development', 'software solutions', 'digital agency'],
  authors: [{ name: 'Digital Care Team' }],
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
  },
  icons: {
    icon: '/Digital care favicon.webp',
  },
  other: {
    "google-fonts": "https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&display=swap",
    "font-awesome": "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css",
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

import Script from "next/script"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.variable}>
        {children}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/gsap.min.js" strategy="afterInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/ScrollTrigger.min.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}