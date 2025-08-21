export type Vertical = {
  slug: string
  title: string
  tagline: string
  summary: string
  bullets: string[]
  usCtaHref: string
  caCtaHref: string
  relatedServices: string[]
  faq?: { q: string; a: string }[]
  og?: { title?: string; description?: string }
}

export const verticals: Vertical[] = [
  {
    slug: "cross-border-accounting-tax",
    title: "Cross‑Border Accounting & Tax Systems",
    tagline: "Stop losing money to tax errors and duplicate bookkeeping.",
    summary: "We unify QuickBooks/Xero/Stripe data across IRS and CRA reporting, automate FX conversion, and generate binational, tax‑ready reports.",
    bullets: [
      "Sync QuickBooks, Xero, Stripe across entities",
      "Automated USD↔CAD FX conversion",
      "IRS & CRA‑aligned reporting dashboards",
      "CSV/Excel exports for your accountant"
    ],
    usCtaHref: "/contact?vertical=accounting&region=us",
    caCtaHref: "/contact?vertical=accounting&region=ca",
    relatedServices: ['integrations', 'custom'],
    faq: [
      {
        q: "Do you provide tax advice?",
        a: "We provide software and process guidance—not legal or tax advice. We build systems that help you organize data for your accountant."
      },
      {
        q: "What accounting software do you integrate with?",
        a: "We integrate with QuickBooks, Xero, Stripe, and other major platforms. We can also work with custom systems and CSV exports."
      },
      {
        q: "How do you handle currency conversion?",
        a: "We use real-time exchange rates and can set up automated conversion workflows that align with both IRS and CRA requirements."
      }
    ]
  },
  {
    slug: "cross-border-ecommerce",
    title: "Cross‑Border E‑Commerce",
    tagline: "Simplify currency conversion, tax, and shipping workflows.",
    summary: "Custom Shopify/Stripe/PayPal integrations that handle multi‑currency checkout, tax, and shipping across U.S. & Canada.",
    bullets: [
      "Multi‑currency checkout (USD/CAD)",
      "Automated GST/HST + U.S. sales tax workflows",
      "Shipping integrations for U.S./Canada fulfillment",
      "Analytics & reconciliation exports"
    ],
    usCtaHref: "/contact?vertical=ecommerce&region=us",
    caCtaHref: "/contact?vertical=ecommerce&region=ca",
    relatedServices: ['custom', 'integrations', 'design'],
    faq: [
      {
        q: "Which e-commerce platforms do you work with?",
        a: "We primarily work with Shopify, WooCommerce, and custom solutions. We can integrate with Stripe, PayPal, and other payment processors."
      },
      {
        q: "How do you handle tax compliance?",
        a: "We build automated tax calculation systems that handle GST/HST for Canada and state-specific sales tax for the U.S. We provide software guidance—not tax advice."
      },
      {
        q: "Can you help with customs and shipping?",
        a: "We integrate with major shipping carriers and can build systems to handle customs documentation, but we don't provide customs brokerage services."
      }
    ]
  },
  {
    slug: "privacy-compliance",
    title: "Data Residency & Privacy Compliance",
    tagline: "Reduce risk with U.S./Canadian data-privacy readiness.",
    summary: "Small‑business‑friendly privacy audits and secure data implementations aligned to CCPA/CPRA (U.S.) and PIPEDA (Canada).",
    bullets: [
      "Lightweight privacy audit of your app/workflows",
      "U.S. (CCPA/CPRA) and Canadian (PIPEDA) alignment",
      "Data storage & retention patterns (U.S./Canada)",
      "Security hardening and access controls"
    ],
    usCtaHref: "/contact?vertical=privacy&region=us",
    caCtaHref: "/contact?vertical=privacy&region=ca",
    relatedServices: ['integrations', 'custom'],
    faq: [
      {
        q: "Do you provide legal compliance advice?",
        a: "We provide software and process guidance—not legal advice. We help implement technical solutions that align with privacy frameworks."
      },
      {
        q: "What's included in a privacy audit?",
        a: "We review your data flows, storage locations, consent mechanisms, and security practices to identify gaps and recommend technical solutions."
      },
      {
        q: "How do you handle data residency requirements?",
        a: "We help design systems that keep data in the appropriate jurisdictions and implement controls to ensure compliance with local regulations."
      }
    ]
  },
  {
    slug: "logistics-customs",
    title: "Logistics, Supply Chain & Customs",
    tagline: "Track shipments and handle customs data without bloated software.",
    summary: "Affordable dashboards/apps for customs brokers and cross‑border trucking—track shipments, streamline entries, integrate CBSA/CBP data.",
    bullets: [
      "Shipment tracking dashboards",
      "CBP/CBSA data capture integrations",
      "Driver/dispatcher mobile views",
      "Exports for compliance & billing"
    ],
    usCtaHref: "/contact?vertical=logistics&region=us",
    caCtaHref: "/contact?vertical=logistics&region=ca",
    relatedServices: ['custom', 'integrations'],
    faq: [
      {
        q: "Do you work with customs brokers?",
        a: "Yes, we build custom software for customs brokers to streamline their operations and integrate with government systems."
      },
      {
        q: "What government integrations do you support?",
        a: "We can integrate with CBP and CBSA data systems, but we don't provide official government services or affiliations."
      },
      {
        q: "Can you help with trucking companies?",
        a: "Yes, we build mobile apps for drivers, dispatcher dashboards, and systems to track shipments across the border."
      }
    ]
  },
  {
    slug: "professional-services",
    title: "Professional Services",
    tagline: "Spend less time in spreadsheets, more time with clients.",
    summary: "Client portals, document workflows, and intake automation for law firms, accountants, and immigration consultants.",
    bullets: [
      "Secure client portals w/ file exchange",
      "Automated intake + scheduling",
      "Dual‑compliant storage patterns",
      "Audit‑friendly activity logs"
    ],
    usCtaHref: "/contact?vertical=professional&region=us",
    caCtaHref: "/contact?vertical=professional&region=ca",
    relatedServices: ['custom', 'design'],
    faq: [
      {
        q: "What types of professional services do you work with?",
        a: "We work with law firms, accounting firms, immigration consultants, and other professional service providers who serve cross-border clients."
      },
      {
        q: "How do you ensure data security?",
        a: "We implement enterprise-grade security including encryption, access controls, and audit logs that meet both U.S. and Canadian requirements."
      },
      {
        q: "Can you integrate with existing systems?",
        a: "Yes, we can integrate with practice management software, accounting systems, and other tools you already use."
      }
    ]
  }
]

export const verticalsMap: Record<string, Vertical> = verticals.reduce((acc, vertical) => {
  acc[vertical.slug] = vertical
  return acc
}, {} as Record<string, Vertical>) 