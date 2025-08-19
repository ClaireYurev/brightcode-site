import type { Metadata } from 'next'
import { Inter, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { ToastProvider } from '@/components/ui/toast'

import '../styles/globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'BrightCode - Software that ships. Teams that care.',
    template: '%s | BrightCode'
  },
  description: 'We help startups and growing businesses in the US and Canada build, fix, and launch software that works — fast.',
  keywords: ['software development', 'web development', 'mobile development', 'bug fixes', 'integrations', 'UI/UX design'],
  authors: [{ name: 'BrightCode' }],
  creator: 'BrightCode',
  publisher: 'BrightCode',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://brightcode.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'BrightCode - Software that ships. Teams that care.',
    description: 'We help startups and growing businesses in the US and Canada build, fix, and launch software that works — fast.',
    siteName: 'BrightCode',
    images: [
      {
        url: '/og/home.jpg',
        width: 1200,
        height: 630,
        alt: 'BrightCode - Software Development Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BrightCode - Software that ships. Teams that care.',
    description: 'We help startups and growing businesses in the US and Canada build, fix, and launch software that works — fast.',
    images: ['/og/home.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ToastProvider>
          {children}
          <Analytics />
        </ToastProvider>
      </body>
    </html>
  )
} 