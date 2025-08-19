import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms of Service - BrightCode',
  description: 'Terms of service for BrightCode website and services.',
  openGraph: {
    title: 'Terms of Service - BrightCode',
    description: 'Terms of service for BrightCode website and services.',
  },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-brand-50 to-blue-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Terms and conditions for using our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Get a Free Consultation</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/privacy">Privacy Policy</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto prose">
            <p className="text-sm text-muted-foreground mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            
            <h2>Acceptance of Terms</h2>
            <p>
              By accessing and using BrightCode's website and services, you accept and agree to be bound by 
              the terms and provision of this agreement.
            </p>

            <h2>Services</h2>
            <p>
              BrightCode provides software development, design, and consulting services. We reserve the right 
              to modify, suspend, or discontinue any aspect of our services at any time.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and software, is the property 
              of BrightCode and is protected by copyright and other intellectual property laws.
            </p>

            <h2>Client Responsibilities</h2>
            <p>As a client, you agree to:</p>
            <ul>
              <li>Provide accurate and complete information</li>
              <li>Cooperate with our team during project development</li>
              <li>Pay for services as agreed upon</li>
              <li>Respect our intellectual property rights</li>
            </ul>

            <h2>Limitation of Liability</h2>
            <p>
              BrightCode shall not be liable for any indirect, incidental, special, consequential, or 
              punitive damages arising out of or relating to our services.
            </p>

            <h2>Confidentiality</h2>
            <p>
              We maintain strict confidentiality regarding client information and project details. 
              We will not disclose confidential information without your written consent.
            </p>

            <h2>Payment Terms</h2>
            <p>
              Payment terms are specified in individual project agreements. Late payments may result 
              in suspension of services.
            </p>

            <h2>Termination</h2>
            <p>
              Either party may terminate services with written notice. Upon termination, you will be 
              responsible for payment of services rendered up to the termination date.
            </p>

            <h2>Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of the 
              jurisdiction where BrightCode is incorporated.
            </p>

            <h2>Contact Information</h2>
            <p>
              For questions about these terms, please contact us at{' '}
              <a href="mailto:hello@brightcode.com" className="text-brand-600 hover:text-brand-700">
                hello@brightcode.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 