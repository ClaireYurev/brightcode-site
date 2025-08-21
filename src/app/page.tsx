import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { WhoWeHelp } from '@/components/WhoWeHelp'
import { TestimonialsStrip } from '@/components/TestimonialsStrip'
import { ProofStrip } from '@/components/ProofStrip'
import { StockImage } from '@/components/StockImage'
import { services } from '@/data/services'
import { offices } from '@/data/offices'
import { Code, Wrench, Plug, Palette, CheckCircle, Star, Users, Zap, Brush } from 'lucide-react'

export const metadata: Metadata = {
  title: 'BrightCode - Software that ships. Teams that care.',
  description: 'We help startups and growing businesses in the US and Canada build, fix, and launch software that works — fast. Now offering creative services for branding and marketing.',
  openGraph: {
    title: 'BrightCode - Software that ships. Teams that care.',
    description: 'We help startups and growing businesses in the US and Canada build, fix, and launch software that works — fast. Now offering creative services for branding and marketing.',
  },
}



const trustSignals = [
  {
    icon: CheckCircle,
    title: 'Agile & Founder-Led',
    description: 'Direct communication with decision makers, no account managers.'
  },
  {
    icon: Users,
    title: 'Cross-Border Presence',
    description: 'Local expertise in both US and Canadian markets.'
  },
  {
    icon: Zap,
    title: 'Wide Skill Coverage',
    description: 'Full-stack development, design, and DevOps expertise.'
  },
  {
    icon: Star,
    title: 'No Bloated Overhead',
    description: 'Lean team structure means faster delivery and lower costs.'
  }
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-brand-50 to-blue-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
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
                <Link href="/contact">Book a Free 20-Min Strategy Call</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/pricing/us">See Pricing</Link>
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

      {/* Proof Strip */}
      <ProofStrip />

      {/* Creative Services Callout */}
      <section className="py-12 bg-purple-50 border-b">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-4">
              <Brush className="w-6 h-6 text-purple-600 mr-2" />
              <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                New Service
              </Badge>
            </div>
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-2">
              Now offering Creative Services
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Branding, marketing collateral, and visual design to complement your software projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="sm" asChild>
                <Link href="/services#creative">Learn More</Link>
              </Button>
              <Button size="sm" className="bg-purple-600 hover:bg-purple-700" asChild>
                <Link href="/contact?service=creative">Get a Free Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>



      {/* Services Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              What we do
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From concept to deployment, we handle every aspect of your software project.
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
      <WhoWeHelp limit={5} />

      {/* Why BrightCode Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Why choose BrightCode?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're not just developers — we're partners in your success.
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

      {/* Offices Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Our service areas
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Local presence in both US and Canadian markets with remote service capabilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(offices).map(([country, office]) => (
              <Card key={country} className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-brand-100 flex items-center justify-center">
                    <span className="text-brand-600 font-bold text-lg">
                      {country.toUpperCase()}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{office.name}</h3>
                    <p className="text-gray-600 mb-4">{office.address}</p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>{office.phone}</p>
                      <p>{office.email}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Strip */}
      <TestimonialsStrip />

      {/* Lead Magnet Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Free Guide: 5 Costly Mistakes U.S.–Canada Businesses Make With Software Integrations
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Download our checklist to avoid expensive errors and stay compliant.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact?lead=guide">Download Free Guide</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-600">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Need something built or fixed?
          </h2>
          <p className="text-xl text-brand-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how we can help you succeed.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Book a Free 20-Min Strategy Call</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
} 