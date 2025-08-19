import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { services, creativeServices } from '@/data/services'
import { Code, Wrench, Plug, Palette, Brush, Type, Megaphone, CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services - BrightCode',
  description: 'Custom development, bug fixes, integrations, design, and creative services. We help businesses build, fix, and launch software that works, plus create stunning visual content.',
  openGraph: {
    title: 'Services - BrightCode',
    description: 'Custom development, bug fixes, integrations, design, and creative services. We help businesses build, fix, and launch software that works, plus create stunning visual content.',
  },
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-brand-50 to-blue-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              Our services
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              From concept to deployment, we handle every aspect of your software project with expertise and care. Plus, we now offer creative services to bring your brand to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Get a Free Consultation</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/pricing/us">See Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {services.map((service) => {
                  let IconComponent = Code
                  if (service.icon === 'Wrench') IconComponent = Wrench
                  if (service.icon === 'Plug') IconComponent = Plug
                  if (service.icon === 'Palette') IconComponent = Palette

                  return (
                    <Card key={service.id} className="group hover:shadow-lg transition-all duration-300">
                      <CardHeader>
                        <div className="w-16 h-16 rounded-lg bg-brand-100 flex items-center justify-center mb-6 group-hover:bg-brand-200 transition-colors">
                          <IconComponent className="w-8 h-8 text-brand-600" />
                        </div>
                        <CardTitle className="text-3xl mb-4">{service.title}</CardTitle>
                        <CardDescription className="text-lg">{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <h4 className="font-semibold text-gray-900">What we deliver:</h4>
                          <ul className="space-y-3">
                            {service.features.map((feature, index) => (
                              <li key={index} className="flex items-start text-gray-600">
                                <CheckCircle className="w-5 h-5 text-brand-600 mr-3 mt-0.5 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                          
                          <div className="pt-6">
                            <Button asChild className="group">
                              <Link href={`/contact?service=${service.id}`}>
                                Get a Free Consultation
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </TabsContent>

            <TabsContent value="creative" className="mt-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {creativeServices.map((service) => {
                  let IconComponent = Brush
                  if (service.icon === 'Type') IconComponent = Type
                  if (service.icon === 'Palette') IconComponent = Palette
                  if (service.icon === 'Megaphone') IconComponent = Megaphone

                  return (
                    <Card key={service.id} className="group hover:shadow-lg transition-all duration-300">
                      <CardHeader>
                        <div className="w-16 h-16 rounded-lg bg-purple-100 flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
                          <IconComponent className="w-8 h-8 text-purple-600" />
                        </div>
                        <CardTitle className="text-3xl mb-4">{service.title}</CardTitle>
                        <CardDescription className="text-lg">{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <h4 className="font-semibold text-gray-900">What we deliver:</h4>
                          <ul className="space-y-3">
                            {service.features.map((feature, index) => (
                              <li key={index} className="flex items-start text-gray-600">
                                <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                          
                          <div className="pt-6">
                            <Button asChild className="group bg-purple-600 hover:bg-purple-700">
                              <Link href={`/contact?service=creative&type=${service.id}`}>
                                Get a Free Consultation
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Our process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow a proven methodology to ensure your project succeeds.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-brand-600 text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Discovery</h3>
              <p className="text-gray-600">We understand your goals, requirements, and constraints.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-brand-600 text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Planning</h3>
              <p className="text-gray-600">We create a detailed roadmap and timeline for your project.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-brand-600 text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Development</h3>
              <p className="text-gray-600">We build your solution with regular updates and feedback.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-brand-600 text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Launch</h3>
              <p className="text-gray-600">We deploy your solution and provide ongoing support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Technologies & Tools we work with
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We use modern, proven technologies and creative tools to build robust solutions and stunning visuals.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'Java',
              'C#', 'C++', 'Swift', 'Kotlin', 'PostgreSQL', 'MongoDB',
              'AWS', 'Docker', 'Kubernetes', 'Stripe', 'Shopify', 'Salesforce',
              'Canva', 'Illustrator', 'Photoshop', 'Figma', 'InDesign', 'After Effects'
            ].map((tech) => (
              <div key={tech} className="text-center p-4 rounded-lg border hover:shadow-md transition-shadow">
                <Badge variant="outline" className="text-sm">{tech}</Badge>
              </div>
            ))}
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
            Let's discuss your project and see how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get a Free Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-brand-600 hover:bg-gray-100" asChild>
              <Link href="/work">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 