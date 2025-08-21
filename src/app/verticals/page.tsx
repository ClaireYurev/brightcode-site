import type { Metadata } from 'next'
import { WhoWeHelp } from '@/components/WhoWeHelp'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Who We Help - BrightCode',
  description: 'Specialized software solutions for businesses operating across the U.S.–Canada border. Cross-border accounting, e-commerce, privacy compliance, logistics, and professional services.',
  openGraph: {
    title: 'Who We Help - BrightCode',
    description: 'Specialized software solutions for businesses operating across the U.S.–Canada border.',
  },
}

export default function VerticalsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Who We Help - BrightCode",
    "description": "Specialized software solutions for businesses operating across the U.S.–Canada border",
    "url": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://brightcode.com'}/verticals`,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "Service",
          "name": "Cross-Border Accounting & Tax Systems",
          "description": "Unify QuickBooks/Xero/Stripe data across IRS and CRA reporting",
          "areaServed": ["US", "CA"]
        },
        {
          "@type": "Service", 
          "name": "Cross-Border E-Commerce",
          "description": "Multi-currency checkout and tax compliance for U.S. & Canada",
          "areaServed": ["US", "CA"]
        },
        {
          "@type": "Service",
          "name": "Data Residency & Privacy Compliance", 
          "description": "CCPA/CPRA and PIPEDA compliance solutions",
          "areaServed": ["US", "CA"]
        },
        {
          "@type": "Service",
          "name": "Logistics, Supply Chain & Customs",
          "description": "Customs and logistics software for cross-border operations",
          "areaServed": ["US", "CA"]
        },
        {
          "@type": "Service",
          "name": "Professional Services",
          "description": "Client portals and workflows for cross-border professional services",
          "areaServed": ["US", "CA"]
        }
      ]
    }
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-brand-50 to-blue-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              Who we help
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Specialized software solutions for businesses operating across the U.S.–Canada border.
            </p>
          </div>
        </div>
      </section>

      <WhoWeHelp />

      <Footer />
    </div>
  )
} 