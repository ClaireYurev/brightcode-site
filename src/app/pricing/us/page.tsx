import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { pricingUS, creativePricingUS } from '@/data/pricing'
import { formatPrice } from '@/lib/utils'
import { CheckCircle, DollarSign, Clock, Package, Users, Brush, Type, Palette, Megaphone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'US Pricing - BrightCode',
  description: 'Transparent pricing for US businesses. Custom development, bug fixes, integrations, design, and creative services in USD.',
  openGraph: {
    title: 'US Pricing - BrightCode',
    description: 'Transparent pricing for US businesses. Custom development, bug fixes, integrations, design, and creative services in USD.',
  },
}

export default function USPricingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-brand-50 to-blue-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">US Pricing</Badge>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              Transparent pricing
              <br />
              <span className="text-brand-600">in USD.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Clear, upfront pricing for all our services. No hidden fees, no surprises.
            </p>
            <p className="text-sm text-muted-foreground mb-8 max-w-2xl mx-auto">
              Serving both the U.S. and Canada. Looking for solutions by industry? <Link href="/verticals" className="text-brand-600 hover:text-brand-700 underline">See Who We Help</Link>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact?country=us">Get a Custom Quote</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/us">Back to US Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tabs */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Software & Creative Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our comprehensive range of development and creative services.
            </p>
          </div>

          <Tabs defaultValue="software" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="software">Software & Engineering</TabsTrigger>
              <TabsTrigger value="creative">Creative Services</TabsTrigger>
            </TabsList>
            
            <TabsContent value="software" className="mt-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pricingUS.map((item) => (
                  <Card key={item.id} className="relative group hover:shadow-lg transition-all duration-300">
                    <CardHeader className="text-center">
                      <div className="w-12 h-12 rounded-lg bg-brand-100 flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-200 transition-colors">
                        {item.id === 'bugfix' && <Clock className="w-6 h-6 text-brand-600" />}
                        {item.id === 'custom' && <Package className="w-6 h-6 text-brand-600" />}
                        {item.id === 'integrations' && <Users className="w-6 h-6 text-brand-600" />}
                        {item.id === 'design' && <Users className="w-6 h-6 text-brand-600" />}
                        {item.id === 'retainer' && <DollarSign className="w-6 h-6 text-brand-600" />}
                      </div>
                      <CardTitle className="text-2xl">{item.title}</CardTitle>
                      <CardDescription className="text-base">{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="mb-6">
                        {item.hourly && (
                          <div className="mb-2">
                            <span className="text-3xl font-bold text-gray-900">
                              {formatPrice(item.hourly, 'USD')}
                            </span>
                            <span className="text-gray-600">/hour</span>
                          </div>
                        )}
                        {item.range && (
                          <div className="mb-2">
                            <span className="text-3xl font-bold text-gray-900">
                              {formatPrice(item.range, 'USD')}
                            </span>
                            <span className="text-gray-600"> starting</span>
                          </div>
                        )}
                        {item.packageFrom && (
                          <div className="mb-2">
                            <span className="text-lg text-gray-600">Packages from </span>
                            <span className="text-2xl font-bold text-gray-900">
                              {formatPrice(item.packageFrom, 'USD')}
                            </span>
                          </div>
                        )}
                        {item.monthlyFrom && (
                          <div className="mb-2">
                            <span className="text-3xl font-bold text-gray-900">
                              {formatPrice(item.monthlyFrom, 'USD')}
                            </span>
                            <span className="text-gray-600">/month</span>
                          </div>
                        )}
                      </div>
                      
                      <ul className="space-y-3 mb-6 text-left">
                        {item.features.map((feature, index) => (
                          <li key={index} className="flex items-start text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-brand-600 mr-2 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <Button className="w-full" asChild>
                        <Link href={`/contact?country=us&service=${item.id}`}>
                          Get Started
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="creative" className="mt-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {creativePricingUS.map((item) => (
                  <Card key={item.id} className="relative group hover:shadow-lg transition-all duration-300">
                    <CardHeader className="text-center">
                      <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                        {item.id === 'branding' && <Brush className="w-6 h-6 text-purple-600" />}
                        {item.id === 'social' && <Type className="w-6 h-6 text-purple-600" />}
                        {item.id === 'marketing' && <Palette className="w-6 h-6 text-purple-600" />}
                        {item.id === 'campaign' && <Megaphone className="w-6 h-6 text-purple-600" />}
                      </div>
                      <CardTitle className="text-2xl">{item.title}</CardTitle>
                      <CardDescription className="text-base">{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="mb-6">
                        {item.packageFrom && (
                          <div className="mb-2">
                            <span className="text-lg text-gray-600">Starting at </span>
                            <span className="text-3xl font-bold text-gray-900">
                              {formatPrice(item.packageFrom, 'USD')}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      <ul className="space-y-3 mb-6 text-left">
                        {item.features.map((feature, index) => (
                          <li key={index} className="flex items-start text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <Button className="w-full bg-purple-600 hover:bg-purple-700" asChild>
                        <Link href={`/contact?country=us&service=creative&type=${item.id}`}>
                          Get Started
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Cross-links to Verticals */}
      <section className="py-16 bg-gray-50 border-t">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
              Serving both the U.S. and Canada
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              See our specialized vertical solutions for cross-border businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" asChild>
                <Link href="/verticals">View All Verticals</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/verticals/cross-border-accounting-tax">Accounting & Tax</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/verticals/cross-border-ecommerce">E-Commerce</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
              What's included?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="w-16 h-16 rounded-full bg-brand-100 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-brand-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Transparent Tracking</h3>
                <p className="text-gray-600">Real-time project updates and progress tracking.</p>
              </div>
              <div>
                <div className="w-16 h-16 rounded-full bg-brand-100 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-brand-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Weekly Updates</h3>
                <p className="text-gray-600">Regular status reports and milestone reviews.</p>
              </div>
              <div>
                <div className="w-16 h-16 rounded-full bg-brand-100 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-brand-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Founder-Led</h3>
                <p className="text-gray-600">Direct communication with decision makers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-600">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-xl text-brand-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and find the perfect pricing option for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact?country=us">Get a Free Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-brand-600 hover:bg-gray-100" asChild>
              <Link href="/us">Back to US Home</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 