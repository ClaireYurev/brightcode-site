export const pricingUS = [
  { 
    id: 'bugfix', 
    title: 'Bug Fixes & Rescue', 
    hourly: 125, 
    packageFrom: 1000, 
    currency: 'USD',
    description: 'Emergency fixes and critical issue resolution',
    features: [
      'Same-day response for critical issues',
      'Code review and optimization',
      'Security vulnerability assessment',
      'Performance monitoring setup'
    ]
  },
  { 
    id: 'custom', 
    title: 'Custom Web & Mobile', 
    range: '5000–15000', 
    currency: 'USD',
    description: 'Full-stack applications from MVP to production',
    features: [
      'Complete project management',
      'Regular progress updates',
      'Testing and quality assurance',
      'Deployment and maintenance'
    ]
  },
  { 
    id: 'integrations', 
    title: 'Integrations & Automation', 
    hourly: 150, 
    packageFrom: 3000, 
    currency: 'USD',
    description: 'Connect your systems and automate workflows',
    features: [
      'API development and integration',
      'Data synchronization',
      'Workflow automation',
      'Ongoing support and monitoring'
    ]
  },
  { 
    id: 'design', 
    title: 'Design & UI/UX', 
    hourly: 90, 
    packageFrom: 750, 
    currency: 'USD',
    description: 'Beautiful, user-friendly interfaces',
    features: [
      'User research and testing',
      'Responsive design',
      'Design system creation',
      'Brand consistency'
    ]
  },
  { 
    id: 'retainer', 
    title: 'Monthly Retainer', 
    monthlyFrom: 6000, 
    currency: 'USD',
    description: 'Ongoing development and support',
    features: [
      'Dedicated development time',
      'Priority support',
      'Regular maintenance',
      'Feature development'
    ]
  },
];

export const pricingCA = [
  { 
    id: 'bugfix', 
    title: 'Bug Fixes & Rescue', 
    hourly: 100, 
    packageFrom: 1200, 
    currency: 'CAD',
    description: 'Emergency fixes and critical issue resolution',
    features: [
      'Same-day response for critical issues',
      'Code review and optimization',
      'Security vulnerability assessment',
      'Performance monitoring setup'
    ]
  },
  { 
    id: 'custom', 
    title: 'Custom Web & Mobile', 
    range: '6000–18000', 
    currency: 'CAD',
    description: 'Full-stack applications from MVP to production',
    features: [
      'Complete project management',
      'Regular progress updates',
      'Testing and quality assurance',
      'Deployment and maintenance'
    ]
  },
  { 
    id: 'integrations', 
    title: 'Integrations & Automation', 
    hourly: 120, 
    packageFrom: 3500, 
    currency: 'CAD',
    description: 'Connect your systems and automate workflows',
    features: [
      'API development and integration',
      'Data synchronization',
      'Workflow automation',
      'Ongoing support and monitoring'
    ]
  },
  { 
    id: 'design', 
    title: 'Design & UI/UX', 
    hourly: 75, 
    packageFrom: 900, 
    currency: 'CAD',
    description: 'Beautiful, user-friendly interfaces',
    features: [
      'User research and testing',
      'Responsive design',
      'Design system creation',
      'Brand consistency'
    ]
  },
  { 
    id: 'retainer', 
    title: 'Monthly Retainer', 
    monthlyFrom: 5000, 
    currency: 'CAD',
    description: 'Ongoing development and support',
    features: [
      'Dedicated development time',
      'Priority support',
      'Regular maintenance',
      'Feature development'
    ]
  },
];

export const creativePricingUS = [
  {
    id: 'branding',
    title: 'Logo + Brand Kit',
    packageFrom: 1500,
    currency: 'USD',
    description: 'Complete brand identity package',
    features: [
      'Primary and secondary logos',
      'Brand style guide',
      'Color palette & typography',
      'Business card templates',
      'Social media guidelines'
    ]
  },
  {
    id: 'social',
    title: 'Canva Social Media Pack',
    packageFrom: 500,
    currency: 'USD',
    description: 'Ready-to-use social media templates',
    features: [
      '20+ Canva templates',
      'Multiple platform formats',
      'Brand-consistent designs',
      'Usage guidelines',
      '3 rounds of revisions'
    ]
  },
  {
    id: 'marketing',
    title: 'Custom Marketing Collateral',
    packageFrom: 800,
    currency: 'USD',
    description: 'Professional marketing materials',
    features: [
      'One-pagers & brochures',
      'Presentation templates',
      'Email campaign visuals',
      'Print-ready files',
      'Brand consistency'
    ]
  },
  {
    id: 'campaign',
    title: 'Campaign Visuals',
    packageFrom: 1200,
    currency: 'USD',
    description: 'Complete campaign asset package',
    features: [
      'Digital ad creatives',
      'Banner designs',
      'Email templates',
      'Social media assets',
      'Campaign coordination'
    ]
  }
];

export const creativePricingCA = [
  {
    id: 'branding',
    title: 'Logo + Brand Kit',
    packageFrom: 1900,
    currency: 'CAD',
    description: 'Complete brand identity package',
    features: [
      'Primary and secondary logos',
      'Brand style guide',
      'Color palette & typography',
      'Business card templates',
      'Social media guidelines'
    ]
  },
  {
    id: 'social',
    title: 'Canva Social Media Pack',
    packageFrom: 650,
    currency: 'CAD',
    description: 'Ready-to-use social media templates',
    features: [
      '20+ Canva templates',
      'Multiple platform formats',
      'Brand-consistent designs',
      'Usage guidelines',
      '3 rounds of revisions'
    ]
  },
  {
    id: 'marketing',
    title: 'Custom Marketing Collateral',
    packageFrom: 1050,
    currency: 'CAD',
    description: 'Professional marketing materials',
    features: [
      'One-pagers & brochures',
      'Presentation templates',
      'Email campaign visuals',
      'Print-ready files',
      'Brand consistency'
    ]
  },
  {
    id: 'campaign',
    title: 'Campaign Visuals',
    packageFrom: 1550,
    currency: 'CAD',
    description: 'Complete campaign asset package',
    features: [
      'Digital ad creatives',
      'Banner designs',
      'Email templates',
      'Social media assets',
      'Campaign coordination'
    ]
  }
];

export type PricingItem = typeof pricingUS[0];
export type CreativePricingItem = typeof creativePricingUS[0]; 