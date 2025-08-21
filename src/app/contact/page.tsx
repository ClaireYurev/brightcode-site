'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { services, creativeServices } from '@/data/services'
import { CheckCircle, Send, AlertCircle, Calendar } from 'lucide-react'
import { submitContact } from '@/lib/actions'
import { getCalendlyUrl } from '@/lib/region'

export default function ContactPage() {
  const searchParams = useSearchParams()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [serviceType, setServiceType] = useState(searchParams.get('service') || '')
  
  const defaultCountry = searchParams.get('country') || searchParams.get('region') || ''
  const defaultService = searchParams.get('service') || ''
  const defaultCreativeType = searchParams.get('type') || ''
  const defaultVertical = searchParams.get('vertical') || ''
  
  const budgetRanges = [
    { value: 'under-5k', label: 'Under $5,000' },
    { value: '5k-15k', label: '$5,000 - $15,000' },
    { value: '15k-50k', label: '$15,000 - $50,000' },
    { value: '50k-100k', label: '$50,000 - $100,000' },
    { value: 'over-100k', label: 'Over $100,000' },
  ]

  const serviceTypes = [
    { value: 'software', label: 'Software & Engineering' },
    { value: 'creative', label: 'Creative Services' },
    { value: 'both', label: 'Both Software & Creative' },
  ]
  
  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')
    
    try {
      const result = await submitContact(formData)
      if (result.success) {
        setSubmitStatus('success')
      } else {
        setSubmitStatus('error')
        setErrorMessage(result.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }
  
  if (submitStatus === 'success') {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container py-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Thank you for your message!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We've received your inquiry and will get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <a href="/">Back to Home</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/contact">Send Another Message</a>
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
  
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-brand-50 to-blue-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              Let's build something
              <br />
              <span className="text-brand-600">amazing together.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Tell us about your project and we'll get back to you within 24 hours with a personalized proposal.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">Get in touch</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form action={handleSubmit} className="space-y-6">
                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2">
                      <AlertCircle className="w-5 h-5 text-red-600" />
                      <p className="text-red-800">{errorMessage}</p>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                        Country
                      </label>
                      <Select name="country" defaultValue={defaultCountry}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="us">United States</SelectItem>
                          <SelectItem value="ca">Canada</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                        Service Type *
                      </label>
                      <Select 
                        name="serviceType" 
                        defaultValue={defaultService === 'creative' ? 'creative' : 'software'}
                        onValueChange={setServiceType}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select service type" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                        Budget Range
                      </label>
                      <Select name="budget">
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          {budgetRanges.map((range) => (
                            <SelectItem key={range.value} value={range.value}>
                              {range.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Specific Service Interest
                    </label>
                    <Select name="service" defaultValue={defaultCreativeType || defaultService || defaultVertical}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select specific service" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceType === 'creative' || serviceType === 'both' ? (
                          <>
                            <optgroup label="Creative Services">
                              {creativeServices.map((service) => (
                                <SelectItem key={`creative-${service.id}`} value={`creative-${service.id}`}>
                                  {service.title}
                                </SelectItem>
                              ))}
                            </optgroup>
                          </>
                        ) : null}
                        {serviceType === 'software' || serviceType === 'both' ? (
                          <>
                            <optgroup label="Software Services">
                              {services.map((service) => (
                                <SelectItem key={service.id} value={service.id}>
                                  {service.title}
                                </SelectItem>
                              ))}
                            </optgroup>
                          </>
                        ) : null}
                        {!serviceType && (
                          <>
                            <optgroup label="Software Services">
                              {services.map((service) => (
                                <SelectItem key={service.id} value={service.id}>
                                  {service.title}
                                </SelectItem>
                              ))}
                            </optgroup>
                            <optgroup label="Creative Services">
                              {creativeServices.map((service) => (
                                <SelectItem key={`creative-${service.id}`} value={`creative-${service.id}`}>
                                  {service.title}
                                </SelectItem>
                              ))}
                            </optgroup>
                          </>
                        )}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                      rows={6}
                    />
                  </div>
                  
                  {/* Honeypot field for spam protection */}
                  <div className="sr-only">
                    <label htmlFor="website" className="sr-only">Website</label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full" 
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                  
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-4">Or book a consultation directly:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Button variant="outline" size="lg" asChild>
                        <a href={getCalendlyUrl("us")} target="_blank" rel="noopener noreferrer" aria-label="Book US consultation">
                          <Calendar className="w-4 h-4 mr-2" />
                          Book US consult
                        </a>
                      </Button>
                      <Button variant="outline" size="lg" asChild>
                        <a href={getCalendlyUrl("ca")} target="_blank" rel="noopener noreferrer" aria-label="Book Canada consultation">
                          <Calendar className="w-4 h-4 mr-2" />
                          Book Canada consult
                        </a>
                      </Button>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 