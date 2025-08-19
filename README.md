# BrightCode Website

Software that ships. Teams that care.

A modern, responsive website for BrightCode, a software development agency serving US and Canadian markets. Built with Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui.

## ✨ Features

- **Unified Brand**: Single codebase with localized experiences for US and Canadian markets
- **Localized Pricing**: USD and CAD pricing with market-appropriate rates
- **Responsive Design**: Mobile-first design that works on all devices
- **SEO Optimized**: Metadata, sitemap, robots.txt, and structured data
- **Contact Form**: Server action-powered form with email integration
- **Performance**: Optimized for Core Web Vitals and Lighthouse scores
- **Accessibility**: WCAG AA compliant with semantic HTML and ARIA labels

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Inter (body), DM Sans (headlines)
- **Email**: Resend (server actions)
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel

## 📁 Project Structure

```
/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── (site)/            # Global routes
│   │   ├── us/                # US localized landing
│   │   ├── ca/                # Canada localized landing
│   │   ├── pricing/
│   │   │   ├── us/            # US pricing (USD)
│   │   │   └── ca/            # Canada pricing (CAD)
│   │   ├── services/          # Services overview
│   │   ├── work/              # Case studies
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact form
│   │   ├── sitemap.ts         # SEO sitemap
│   │   └── robots.ts          # SEO robots
│   ├── components/            # Reusable UI components
│   │   ├── ui/                # shadcn/ui components
│   │   ├── Header.tsx         # Navigation header
│   │   └── Footer.tsx         # Site footer
│   ├── data/                  # Static data files
│   │   ├── services.ts        # Service definitions
│   │   ├── pricing.ts         # US/CA pricing data
│   │   └── offices.ts         # Office information
│   ├── lib/                   # Utility functions
│   │   └── utils.ts           # Helper functions
│   └── styles/                # Global styles
│       └── globals.css        # Tailwind + custom CSS
├── public/                    # Static assets
├── vercel.json               # Vercel configuration
└── package.json              # Dependencies
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.18 or higher
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd brightcode
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your values:
   ```env
   RESEND_API_KEY=your_resend_key_here
   CONTACT_TO=billing@brightcode.com
   NEXT_PUBLIC_SITE_URL=https://brightcode.com
   ```

4. **Start the development server**
   ```bash
   pnpm dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm typecheck` - Run TypeScript type checking

## 🌍 Localization

The site supports two markets with localized content:

### US Market (`/us`)
- USD pricing
- Long Beach, CA office focus
- US-specific messaging

### Canadian Market (`/ca`)
- CAD pricing  
- Toronto, ON office focus
- Canadian-specific messaging

### Domain Routing
- `brightcode.com` → Global homepage
- `brightcode.ca` → Redirects to `/ca` (configured in `vercel.json`)

## 📧 Contact Form

The contact form uses Next.js Server Actions to send emails via Resend:

1. **Form Fields**: Name, Email, Company, Country, Budget, Service, Message
2. **Validation**: Client and server-side validation with error handling
3. **Email**: Sends to `CONTACT_TO` environment variable
4. **Success State**: Shows confirmation message after successful submission

### Email Integration Setup

1. Create a [Resend account](https://resend.com)
2. Get your API key
3. Add to `.env.local`:
   ```env
   RESEND_API_KEY=re_xxxxxxxxxxxx
   CONTACT_TO=billing@brightcode.com
   ```

## 🎨 Customization

### Colors & Branding

Edit `src/styles/globals.css` to customize:
- Brand colors (CSS custom properties)
- Typography (font families)
- Component styles

### Content Updates

Most content is in data files for easy updates:

- **Services**: `src/data/services.ts`
- **Pricing**: `src/data/pricing.ts` 
- **Offices**: `src/data/offices.ts`

### Adding New Pages

1. Create new route in `src/app/`
2. Add metadata export for SEO
3. Update sitemap in `src/app/sitemap.ts`

## 📈 SEO & Performance

### SEO Features
- Dynamic metadata per page
- Open Graph and Twitter cards
- Structured data (JSON-LD)
- Sitemap and robots.txt
- Semantic HTML structure

### Performance Optimizations
- Next.js Image optimization
- Font optimization with `next/font`
- Code splitting and lazy loading
- Optimized bundle sizes

### Lighthouse Scores
Target scores:
- Performance: ≥95 (desktop), ≥90 (mobile)
- Accessibility: ≥95
- Best Practices: ≥95
- SEO: ≥95

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect Repository**
   - Push code to GitHub
   - Import project in Vercel dashboard

2. **Environment Variables**
   Add in Vercel dashboard:
   ```
   RESEND_API_KEY=your_key
   CONTACT_TO=billing@brightcode.com
   NEXT_PUBLIC_SITE_URL=https://brightcode.com
   ```

3. **Domain Configuration**
   - Set primary domain: `brightcode.com`
   - Add custom domain: `brightcode.ca`
   - Redirects are configured in `vercel.json`

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🧪 Testing

### Manual Testing Checklist

- [ ] All pages load correctly
- [ ] Navigation works on mobile and desktop
- [ ] Contact form submits successfully
- [ ] Country toggle works
- [ ] Pricing displays correct currency
- [ ] Links point to correct destinations
- [ ] Images load and are optimized

### Performance Testing

```bash
# Build and analyze bundle
pnpm build
pnpm start

# Run Lighthouse audit
# Use Chrome DevTools or lighthouse CLI
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

### Code Standards

- Use TypeScript for all new code
- Follow existing component patterns
- Add proper TypeScript types
- Include JSDoc comments for complex functions
- Run `pnpm lint` and `pnpm typecheck` before committing

## 📄 License

This project is proprietary software. All rights reserved.

## 🆘 Support

For questions or issues:
- Email: hello@brightcode.com
- Create an issue in the repository

---

Built with ❤️ by the BrightCode team