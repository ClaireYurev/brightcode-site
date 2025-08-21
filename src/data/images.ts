export interface StockImage {
  key: string;
  src: string;
  alt: string;
}

export const stockImages: StockImage[] = [
  // Hero images
  {
    key: 'hero',
    src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&crop=center',
    alt: 'Modern office workspace with laptop and coffee, representing collaborative software development'
  },
  
  // Service images
  {
    key: 'services.integrations',
    src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=720&fit=crop&crop=center',
    alt: 'API integration diagram and code snippets on screen'
  },
  {
    key: 'services.dashboards',
    src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=720&fit=crop&crop=center',
    alt: 'Business dashboard with charts and analytics data'
  },
  {
    key: 'services.websites',
    src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=720&fit=crop&crop=center',
    alt: 'Modern website design on multiple devices'
  },
  {
    key: 'services.pipelines',
    src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=720&fit=crop&crop=center',
    alt: 'Data pipeline flow diagram with connected nodes'
  },
  {
    key: 'services.support',
    src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=720&fit=crop&crop=center',
    alt: 'Technical support team collaborating on software maintenance'
  },
  
  // Vertical images
  {
    key: 'verticals.cross-border-accounting-tax',
    src: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=720&fit=crop&crop=center',
    alt: 'Cross-border accounting and tax compliance documents'
  },
  {
    key: 'verticals.cross-border-ecommerce',
    src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=720&fit=crop&crop=center',
    alt: 'E-commerce platform with multi-currency checkout interface'
  },
  {
    key: 'verticals.privacy-compliance',
    src: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=720&fit=crop&crop=center',
    alt: 'Privacy compliance and data protection security measures'
  },
  {
    key: 'verticals.logistics-customs',
    src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=720&fit=crop&crop=center',
    alt: 'Logistics and customs operations with shipping containers'
  },
  {
    key: 'verticals.professional-services',
    src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=720&fit=crop&crop=center',
    alt: 'Professional services client portal and document management'
  },
  
  // Contact images
  {
    key: 'contact.banner',
    src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&h=600&fit=crop&crop=center',
    alt: 'Business team handshake and collaboration meeting'
  }
]; 