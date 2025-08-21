import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, ArrowRight, Calendar } from 'lucide-react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { verticals, verticalsMap, type Vertical } from '@/data/verticals'
import { getCalendlyUrl } from '@/lib/region'

interface VerticalPageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return verticals.map((vertical) => ({
    slug: vertical.slug,
  }))
}

export async function generateMetadata({ params }: VerticalPageProps): Promise<Metadata> {
  const vertical = verticalsMap[params.slug]
  
  if (!vertical) {
    return {
      title: 'Vertical Not Found - BrightCode',
    }
  }

  return {
    title: vertical.og?.title || `${vertical.title} - BrightCode`,
    description: vertical.og?.description || vertical.summary,
    openGraph: {
      title: vertical.og?.title || `${vertical.title} - BrightCode`,
      description: vertical.og?.description || vertical.summary,
    },
  }
}

export default function VerticalPage({ params }: VerticalPageProps) {
  const vertical = verticalsMap[params.slug]

  if (!vertical) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container py-20">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Vertical not found
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              The vertical you're looking for doesn't exist.
            </p>
            <Button asChild>
              <Link href="/verticals">View all verticals</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": vertical.title,
    "description": vertical.summary,
    "provider": {
      "@type": "Organization",
      "name": "BrightCode",
      "url": process.env.NEXT_PUBLIC_SITE_URL || 'https://brightcode.com'
    },
    "areaServed": ["US", "CA"],
    "serviceType": vertical.title,
    "url": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://brightcode.com'}/verticals/${vertical.slug}`
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
            <div className="flex justify-center space-x-1 mb-4">
              <Badge variant="secondary">US</Badge>
              <Badge variant="secondary">CA</Badge>
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              {vertical.title}
            </h1>
            <p className="text-xl text-brand-600 font-medium mb-4">
              {vertical.tagline}
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              {vertical.summary}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            
            {/* What's included */}
            <div className="mb-16">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">
                What's included
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {vertical.bullets.map((bullet, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-brand-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">{bullet}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Typical outcomes */}
            <div className="mb-16">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">
                Typical outcomes
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-lg bg-brand-100 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-6 h-6 text-brand-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Streamlined Operations</h3>
                      <p className="text-sm text-gray-600">
                        Automated workflows that reduce manual work and eliminate errors
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-lg bg-brand-100 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-6 h-6 text-brand-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Compliance Ready</h3>
                      <p className="text-sm text-gray-600">
                        Systems designed to meet both U.S. and Canadian regulatory requirements
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-lg bg-brand-100 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-6 h-6 text-brand-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Scalable Growth</h3>
                      <p className="text-sm text-gray-600">
                        Infrastructure that grows with your business across both markets
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mb-16">
              <Card className="bg-brand-50 border-brand-200">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Ready to get started?</CardTitle>
                  <CardDescription>
                    Book a consultation with our team to discuss your specific needs.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button size="lg" asChild className="w-full">
                      <a href={getCalendlyUrl("us")} target="_blank" rel="noopener noreferrer">
                        <Calendar className="w-4 h-4 mr-2" />
                        Book US consult
                      </a>
                    </Button>
                    <Button size="lg" variant="outline" asChild className="w-full">
                      <a href={getCalendlyUrl("ca")} target="_blank" rel="noopener noreferrer">
                        <Calendar className="w-4 h-4 mr-2" />
                        Book Canada consult
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* FAQ Section */}
            {vertical.faq && vertical.faq.length > 0 && (
              <div className="mb-16">
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">
                  Frequently asked questions
                </h2>
                <div className="space-y-4">
                  {vertical.faq.map((faq, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-lg">{faq.q}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700">{faq.a}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Compliance Note */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <p className="text-sm text-yellow-800">
                <strong>Important:</strong> We provide software and process guidance—not legal or tax advice. 
                Always consult with qualified professionals for legal, tax, or compliance matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 