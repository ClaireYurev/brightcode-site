import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ArrowRight, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Work - BrightCode',
  description: 'Explore our case studies and see how we help businesses build, fix, and launch software that works, plus create stunning visual content.',
  openGraph: {
    title: 'Our Work - BrightCode',
    description: 'Explore our case studies and see how we help businesses build, fix, and launch software that works, plus create stunning visual content.',
  },
}

// Sample case studies - in production, these would come from MDX files
const caseStudies = [
  {
    id: 'ecommerce-rescue',
    title: 'E-Commerce App Rescue',
    sector: 'Retail',
    type: 'software',
    stack: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Stripe', 'PostgreSQL'],
    duration: '6 weeks',
    outcomes: [
      'Recovered $15k/month in failed checkouts',
      'Improved site performance by 40%',
      'Reduced cart abandonment by 25%'
    ],
    description: 'A struggling e-commerce platform was losing customers due to checkout failures and slow performance. We identified and fixed critical bugs, optimized the payment flow, and implemented performance improvements.',
    image: '/placeholder-600x400.jpg'
  },
  {
    id: 'crm-integration',
    title: 'CRM Integration Platform',
    sector: 'SaaS',
    type: 'software',
    stack: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Salesforce API'],
    duration: '8 weeks',
    outcomes: [
      'Automated 80% of manual data entry',
      'Reduced sync errors by 95%',
      'Saved 20 hours/week in admin time'
    ],
    description: 'A growing SaaS company needed to integrate their platform with Salesforce. We built a robust integration that automatically syncs data and eliminates manual work.',
    image: '/placeholder-600x400.jpg'
  },
  {
    id: 'mobile-app',
    title: 'Food Delivery Mobile App',
    sector: 'Food & Beverage',
    type: 'software',
    stack: ['JavaScript', 'TypeScript', 'React Native', 'Firebase', 'Google Maps'],
    duration: '12 weeks',
    outcomes: [
      'Launched MVP in 12 weeks',
      'Achieved 4.8/5 app store rating',
      'Processed 1000+ orders in first month'
    ],
    description: 'A restaurant chain wanted to launch their own delivery service. We built a complete mobile app with real-time tracking, payment processing, and driver management.',
    image: '/placeholder-600x400.jpg'
  },
  {
    id: 'brand-refresh',
    title: 'Brand Refresh for SaaS Startup',
    sector: 'Creative',
    type: 'creative',
    stack: ['Canva', 'Illustrator'],
    duration: '3 weeks',
    outcomes: [
      'Delivered 20+ Canva templates for sales + marketing',
      'New logo and brand style guide',
      'Consistent visual identity across all channels'
    ],
    description: 'A SaaS startup needed a complete brand refresh to better reflect their growth and target market. We created a new logo, brand guidelines, and marketing templates.',
    image: '/placeholder-600x400.jpg'
  },
  {
    id: 'marketing-campaign',
    title: 'Digital Marketing Campaign',
    sector: 'Creative',
    type: 'creative',
    stack: ['Photoshop', 'Canva', 'After Effects'],
    duration: '4 weeks',
    outcomes: [
      'Created 50+ marketing assets',
      'Increased social media engagement by 60%',
      'Generated 200+ qualified leads'
    ],
    description: 'A B2B company needed a comprehensive digital marketing campaign. We designed social media graphics, email templates, and video content that drove real results.',
    image: '/placeholder-600x400.jpg'
  },
  {
    id: 'ui-redesign',
    title: 'UI/UX Redesign',
    sector: 'Creative',
    type: 'creative',
    stack: ['Figma', 'Adobe XD', 'InVision'],
    duration: '6 weeks',
    outcomes: [
      'Improved user engagement by 45%',
      'Reduced bounce rate by 30%',
      'Increased conversion rate by 25%'
    ],
    description: 'A fintech company needed a complete UI/UX overhaul. We redesigned their platform with a focus on user experience and conversion optimization.',
    image: '/placeholder-600x400.jpg'
  }
]

export default function WorkPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-brand-50 to-blue-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              Our Work
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Explore our case studies and see how we help businesses build, fix, and launch software that works, plus create stunning visual content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {caseStudies.map((study) => (
              <Card key={study.id} className="group hover:shadow-lg transition-all duration-300">
                <div className="aspect-video bg-gray-200 rounded-t-lg mb-6 flex items-center justify-center">
                  <span className="text-gray-500">Case Study Image</span>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <CardTitle className="text-2xl">{study.title}</CardTitle>
                        <Badge 
                          variant={study.type === 'creative' ? 'secondary' : 'default'}
                          className={study.type === 'creative' ? 'bg-purple-100 text-purple-800' : ''}
                        >
                          {study.type === 'creative' ? 'Creative' : 'Software'}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>{study.sector}</span>
                        <span>•</span>
                        <span>{study.duration}</span>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base">{study.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {study.type === 'creative' ? 'Tools Used' : 'Tech Stack'}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {study.stack.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Outcomes</h4>
                      <ul className="space-y-1">
                        {study.outcomes.map((outcome, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-center">
                            <span className={`w-1.5 h-1.5 rounded-full mr-2 ${
                              study.type === 'creative' ? 'bg-purple-600' : 'bg-brand-600'
                            }`}></span>
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-4">
                      <Button 
                        variant="outline" 
                        asChild 
                        className={`group ${
                          study.type === 'creative' ? 'border-purple-200 text-purple-700 hover:bg-purple-50' : ''
                        }`}
                      >
                        <Link href={`/work/${study.id}`}>
                          Read Full Case Study
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              By the numbers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The impact we've had on our clients' businesses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-600 mb-2">50+</div>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-600 mb-2">95%</div>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-600 mb-2">12</div>
              <p className="text-gray-600">Weeks Average Delivery</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-600 mb-2">$2M+</div>
              <p className="text-gray-600">Revenue Generated</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-600">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Ready to join our success stories?
          </h2>
          <p className="text-xl text-brand-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how we can help you achieve similar results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-brand-600 hover:bg-gray-100" asChild>
              <Link href="/pricing/us">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 