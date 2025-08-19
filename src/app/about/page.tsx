import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { offices } from '@/data/offices'
import { Users, Target, Award, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About - BrightCode',
  description: 'Learn about BrightCode, our mission, values, and the team behind our software development services.',
  openGraph: {
    title: 'About - BrightCode',
    description: 'Learn about BrightCode, our mission, values, and the team behind our software development services.',
  },
}

const values = [
  {
    icon: Target,
    title: 'Quality First',
    description: 'We never compromise on code quality, security, or user experience.'
  },
  {
    icon: Users,
    title: 'Client Partnership',
    description: 'We work as an extension of your team, not just a vendor.'
  },
  {
    icon: Award,
    title: 'Continuous Learning',
    description: 'We stay current with the latest technologies and best practices.'
  },
  {
    icon: Globe,
    title: 'Global Perspective',
    description: 'Cross-border experience gives us unique insights into different markets.'
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-brand-50 to-blue-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              About BrightCode
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We're a team of passionate developers, designers, and problem-solvers dedicated to building software that makes a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/work">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-lg text-gray-600">
                  <p>
                    BrightCode was founded by a team of developers who were tired of seeing great ideas fail due to poor execution. 
                    We started as students, became builders, and now we're founders helping other founders succeed.
                  </p>
                  <p>
                    Our journey began in university where we learned that the best software isn't just about writing code—it's about 
                    understanding problems, designing solutions, and delivering value to users.
                  </p>
                  <p>
                    Today, we work with startups and growing businesses across North America, helping them build, fix, and launch 
                    software that drives real business results.
                  </p>
                </div>
              </div>
              <div className="bg-gray-100 rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-brand-600 text-white flex items-center justify-center font-bold">
                      2019
                    </div>
                    <div>
                      <h3 className="font-semibold">Founded</h3>
                      <p className="text-gray-600">Started as a student project</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-brand-600 text-white flex items-center justify-center font-bold">
                      2021
                    </div>
                    <div>
                      <h3 className="font-semibold">First Clients</h3>
                      <p className="text-gray-600">Launched our first commercial projects</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-brand-600 text-white flex items-center justify-center font-bold">
                      2023
                    </div>
                    <div>
                      <h3 className="font-semibold">Expansion</h3>
                      <p className="text-gray-600">Opened offices in US and Canada</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-brand-600 text-white flex items-center justify-center font-bold">
                      2024
                    </div>
                    <div>
                      <h3 className="font-semibold">Growth</h3>
                      <p className="text-gray-600">Serving 50+ clients across North America</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and every decision we make.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-brand-100 flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-brand-600" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{value.description}</CardDescription>
                  </CardContent>
                </Card>
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
              Our Offices
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Local presence in both US and Canadian markets.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(offices).map(([country, office]) => (
              <Card key={country} className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 rounded-lg bg-brand-100 flex items-center justify-center">
                    <span className="text-brand-600 font-bold text-xl">
                      {country.toUpperCase()}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{office.name}</h3>
                    <p className="text-gray-600 mb-4">{office.address}</p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>Phone: <a href={`tel:${office.phone}`} className="hover:text-foreground transition-colors">{office.phone}</a></p>
                      <p>Email: <a href={`mailto:${office.email}`} className="hover:text-foreground transition-colors">{office.email}</a></p>
                      <p>Timezone: {office.timezone}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-600">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Ready to work with us?
          </h2>
          <p className="text-xl text-brand-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get a Free Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-brand-600 hover:bg-gray-100" asChild>
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 