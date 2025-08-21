export type TechBrand = {
  name: string;
  slug: string;    // simpleicons slug
  href?: string;   // optional link to tech site
};

export const techBrands: TechBrand[] = [
  { name: 'Shopify', slug: 'shopify', href: 'https://www.shopify.com' },
  { name: 'Stripe', slug: 'stripe', href: 'https://stripe.com' },
  { name: 'React', slug: 'react', href: 'https://react.dev' },
  { name: 'TypeScript', slug: 'typescript', href: 'https://www.typescriptlang.org' },
  { name: 'Node.js', slug: 'nodedotjs', href: 'https://nodejs.org' },
  { name: 'PostgreSQL', slug: 'postgresql', href: 'https://postgresql.org' }
]; 