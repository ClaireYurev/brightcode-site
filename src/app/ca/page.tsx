import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { WhoWeHelp } from '@/components/WhoWeHelp'
import { StockImage } from '@/components/StockImage'
import { services } from '@/data/services'
import { offices } from '@/data/offices'
import { Code, Wrench, Plug, Palette, CheckCircle, Star, Users, Zap, DollarSign } from 'lucide-react'

export const metadata: Metadata = {
  title: 'BrightCode Canada - Software Development in Toronto',
  description: 'Custom software development, bug fixes, and integrations for Canadian businesses. Based in Toronto, ON.',
  openGraph: {
    title: 'BrightCode Canada - Software Development in Toronto',
    description: 'Custom software development, bug fixes, and integrations for Canadian businesses. Based in Toronto, ON.',
  },
}

const trustSignals = [
  {
    icon: CheckCircle,
    title: 'Canadian Team',
    description: 'Local expertise and understanding of Canadian market requirements.'
  },
  {
    icon: DollarSign,
    title: 'CAD Pricing',
    description: 'Transparent pricing in Canadian dollars with no hidden fees.'
  },
  {
    icon: Users,
    title: 'Direct Communication',
    description: 'Work directly with founders, no account managers.'
  },
  {
    icon: Star,
    title: 'Toronto Quality',
    description: 'Silicon Valley North standards with Toronto accessibility.'
  }
]

export default function CAPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-brand-50 to-blue-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">Canada Office</Badge>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              Software that ships.
              <br />
              <span className="text-brand-600">Teams that care.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We help startups and growing businesses launch software faster, fix what's broken, and scale without headaches. We also offer creative services for branding and marketing.
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              Based in Los Angeles and Toronto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact?country=ca" aria-label="Book a Free 20-Min Strategy Call (Canada)">Book a Free 20-Min Strategy Call</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/pricing/ca">See Canadian Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-12">
        <div className="container">
          <StockImage k="hero" width={1200} height={800} priority className="rounded-xl mx-auto" />
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-8 border-b">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              Service area: Greater Toronto Area, ON (remote across Canada) • {offices.ca.phone} • {offices.ca.email}
            </p>
            <div className="flex items-center space-x-2">
              <Badge variant="outline">CAD Pricing</Badge>
              <Badge variant="outline">Ontario</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Services for Canadian businesses
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From startups to enterprises, we deliver software solutions that drive growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => {
              let IconComponent = Code
              if (service.icon === 'Wrench') IconComponent = Wrench
              if (service.icon === 'Plug') IconComponent = Plug
              if (service.icon === 'Palette') IconComponent = Palette

              return (
                <Card key={service.id} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-brand-100 flex items-center justify-center mb-4 group-hover:bg-brand-200 transition-colors">
                      <IconComponent className="w-6 h-6 text-brand-600" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.blurb}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-brand-600 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Who We Help Section */}
      <WhoWeHelp limit={3} />

      {/* Why BrightCode Canada Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Why choose BrightCode Canada?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Local expertise with global standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustSignals.map((signal, index) => {
              const IconComponent = signal.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-brand-100 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-brand-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{signal.title}</h3>
                  <p className="text-gray-600">{signal.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Canada Office Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Our Canada service area
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Serving the Greater Toronto Area and remote clients across Canada.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card className="p-8">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 rounded-lg bg-brand-100 flex items-center justify-center">
                  <span className="text-brand-600 font-bold text-xl">CA</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{offices.ca.name}</h3>
                  <p className="text-gray-600 mb-4">{offices.ca.address}</p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>Phone: {offices.ca.phone}</p>
                    <p>Email: {offices.ca.email}</p>
                    <p>Timezone: {offices.ca.timezone}</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-600">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Ready to build something great?
          </h2>
          <p className="text-xl text-brand-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how we can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact?country=ca" aria-label="Book a Free Consultation (Canada)">Book a Free Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-brand-600 hover:bg-gray-100" asChild>
              <Link href="/pricing/ca">View Canadian Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 