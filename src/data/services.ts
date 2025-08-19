export const services = [
  { 
    id: 'custom', 
    title: 'Custom Development', 
    blurb: 'Web & mobile apps from MVP to scale.',
    description: 'We build custom software solutions that grow with your business. From initial concept to production deployment, we handle the full development lifecycle.',
    icon: 'Code',
    features: [
      'Full-stack web applications',
      'Mobile apps (iOS & Android)',
      'API development & integration',
      'Database design & optimization',
      'Cloud deployment & scaling'
    ]
  },
  { 
    id: 'bugfix', 
    title: 'Bug Fixes & Rescue', 
    blurb: 'Stabilize legacy code, unblock launches.',
    description: 'Emergency fixes and code stabilization for critical issues. We get your software back on track quickly and reliably.',
    icon: 'Wrench',
    features: [
      'Critical bug fixes',
      'Performance optimization',
      'Security vulnerability patches',
      'Legacy code modernization',
      'Emergency response'
    ]
  },
  { 
    id: 'integrations', 
    title: 'Integrations & Automation', 
    blurb: 'Connect your tools, APIs, and cloud.',
    description: 'Seamlessly connect your existing systems and automate workflows to boost productivity and reduce manual work.',
    icon: 'Plug',
    features: [
      'Third-party API integrations',
      'CRM & ERP connections',
      'Payment gateway integration',
      'Workflow automation',
      'Data synchronization'
    ]
  },
  { 
    id: 'design', 
    title: 'Design & UI Polish', 
    blurb: 'User-friendly interfaces & visuals.',
    description: 'Create beautiful, intuitive user experiences that delight your customers and drive engagement.',
    icon: 'Palette',
    features: [
      'UI/UX design',
      'Responsive layouts',
      'Design system creation',
      'User research & testing',
      'Brand consistency'
    ]
  },
];

export const creativeServices = [
  {
    id: 'branding',
    title: 'Branding & Identity',
    blurb: 'Logos, style guides, and brand packages.',
    description: 'Create a cohesive brand identity that resonates with your audience. From logo design to comprehensive style guides, we build brands that stand out.',
    icon: 'Brush',
    features: [
      'Logo design & variations',
      'Brand style guides',
      'Color palette & typography',
      'Business card & stationery',
      'Brand voice guidelines'
    ]
  },
  {
    id: 'marketing',
    title: 'Marketing Collateral',
    blurb: 'Social posts, presentations, one-pagers.',
    description: 'Professional marketing materials that convert. We create compelling visuals and content that drive engagement and sales.',
    icon: 'Type',
    features: [
      'Social media graphics',
      'Presentation templates',
      'One-pagers & brochures',
      'Email templates',
      'Marketing campaigns'
    ]
  },
  {
    id: 'visual',
    title: 'Visual Design Support',
    blurb: 'Canva, Illustrator, Photoshop expertise.',
    description: 'Professional design support using industry-standard tools. We help you create stunning visuals for any platform or medium.',
    icon: 'Palette',
    features: [
      'Canva template creation',
      'Adobe Creative Suite',
      'Custom illustrations',
      'Photo editing & retouching',
      'Design consultation'
    ]
  },
  {
    id: 'campaigns',
    title: 'Campaign Visuals',
    blurb: 'Ads, banners, and campaign assets.',
    description: 'Eye-catching campaign visuals that drive results. From digital ads to print materials, we create assets that convert.',
    icon: 'Megaphone',
    features: [
      'Digital ad creatives',
      'Banner designs',
      'Email campaign visuals',
      'Print materials',
      'Campaign coordination'
    ]
  }
];

export type Service = typeof services[0];
export type CreativeService = typeof creativeServices[0]; 