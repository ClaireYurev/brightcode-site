import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy - BrightCode',
  description: 'Privacy policy for BrightCode website and services.',
  openGraph: {
    title: 'Privacy Policy - BrightCode',
    description: 'Privacy policy for BrightCode website and services.',
  },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-brand-50 to-blue-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              How we collect, use, and protect your information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Get a Free Consultation</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/terms">Terms of Service</Link>
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
            
            <h2>Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you fill out our contact form, 
              subscribe to our newsletter, or communicate with us. This may include:
            </p>
            <ul>
              <li>Name and contact information (email, phone number)</li>
              <li>Company information</li>
              <li>Project details and requirements</li>
              <li>Communication preferences</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide and improve our services</li>
              <li>Communicate with you about projects and services</li>
              <li>Send you marketing materials (with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this policy or as required by law.
            </p>

            <h2>Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2>Cookies and Tracking</h2>
            <p>
              We use cookies and similar technologies to improve your experience on our website, 
              analyze usage patterns, and provide personalized content.
            </p>

            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt out of marketing communications</li>
            </ul>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our data practices, 
              please contact us at{' '}
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