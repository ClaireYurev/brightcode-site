import { offices } from '@/data/offices'

export interface OrganizationSchema {
  '@context': string
  '@type': string
  name: string
  url: string
  logo: string
  description: string
  foundingDate: string
  address: {
    '@type': string
    streetAddress?: string
    addressLocality: string
    addressRegion: string
    postalCode?: string
    addressCountry: string
  }
  contactPoint: {
    '@type': string
    telephone: string
    contactType: string
    email: string
  }[]
}

export interface LocalBusinessSchema {
  '@context': string
  '@type': string
  name: string
  url: string
  telephone: string
  email: string
  address: {
    '@type': string
    streetAddress?: string
    addressLocality: string
    addressRegion: string
    postalCode?: string
    addressCountry: string
  }
  geo: {
    '@type': string
    latitude: number
    longitude: number
  }
  openingHours: string
  priceRange: string
  areaServed: string[]
}

export interface BreadcrumbSchema {
  '@context': string
  '@type': string
  itemListElement: {
    '@type': string
    position: number
    name: string
    item: string
  }[]
}

export interface ServiceSchema {
  '@context': string
  '@type': string
  name: string
  description: string
  provider: {
    '@type': string
    name: string
  }
  areaServed: string[]
  serviceType: string
}

export interface FAQSchema {
  '@context': string
  '@type': string
  mainEntity: {
    '@type': string
    name: string
    acceptedAnswer: {
      '@type': string
      text: string
    }
  }[]
}

export function getOrganizationSchema(): OrganizationSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'BrightCode',
    url: 'https://brightcode.com',
    logo: 'https://brightcode.com/logo.png',
    description: 'Software development agency helping startups and growing businesses build, fix, and launch software that works.',
    foundingDate: '2019',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Orange County',
      addressRegion: 'CA',
      addressCountry: 'US'
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: offices.us.phone,
        contactType: 'customer service',
        email: offices.us.email
      },
      {
        '@type': 'ContactPoint',
        telephone: offices.ca.phone,
        contactType: 'customer service',
        email: offices.ca.email
      }
    ]
  }
}

export function getLocalBusinessSchema(country: 'us' | 'ca'): LocalBusinessSchema {
  const office = offices[country]
  const isUS = country === 'us'
  
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `BrightCode — ${isUS ? 'U.S.' : 'Canada'}`,
    url: isUS ? 'https://brightcode.com/us' : 'https://brightcode.com/ca',
    telephone: office.phone,
    email: office.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: isUS ? 'Orange County' : 'Toronto',
      addressRegion: isUS ? 'CA' : 'ON',
      addressCountry: isUS ? 'US' : 'CA'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: isUS ? 33.7701 : 43.6532,
      longitude: isUS ? -118.1937 : -79.3832
    },
    openingHours: 'Mo-Fr 09:00-17:00',
    priceRange: '$$',
    areaServed: isUS ? ['United States'] : ['Canada']
  }
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]): BreadcrumbSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }
}

export function getServiceSchema(serviceName: string, description: string): ServiceSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: description,
    provider: {
      '@type': 'Organization',
      name: 'BrightCode'
    },
    areaServed: ['United States', 'Canada'],
    serviceType: 'Software Development'
  }
}

export function getFAQSchema(): FAQSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What technologies do you specialize in?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We specialize in JavaScript, TypeScript, React, Python, Java, C#, C++, Swift, and Kotlin. We also offer creative services including branding, marketing collateral, and visual design.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you work with startups and small businesses?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! We specialize in working with startups and growing businesses. We offer flexible pricing options including hourly rates, project-based pricing, and monthly retainers.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is your typical project timeline?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Project timelines vary based on complexity. Small projects typically take 2-4 weeks, while larger applications can take 8-12 weeks. We provide regular updates and can work on tight deadlines when needed.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you provide ongoing support after launch?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely! We offer ongoing maintenance, bug fixes, and feature development. Many clients choose our monthly retainer option for continuous support and development.'
        }
      },
      {
        '@type': 'Question',
        name: 'How do you handle communication and project updates?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We provide weekly progress updates, regular check-ins, and direct communication with decision makers. No account managers - you work directly with our technical team.'
        }
      }
    ]
  }
} 