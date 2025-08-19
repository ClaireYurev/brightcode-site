import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number, currency: 'USD' | 'CAD'): string {
  return new Intl.NumberFormat(currency === 'USD' ? 'en-US' : 'en-CA', {
    style: 'currency',
    currency,
  }).format(amount)
}

export function formatPrice(price: string | number, currency: 'USD' | 'CAD'): string {
  if (typeof price === 'string') {
    return price
  }
  return formatCurrency(price, currency)
}

export function getCountryFromPath(pathname: string): 'us' | 'ca' | null {
  if (pathname.startsWith('/us')) return 'us'
  if (pathname.startsWith('/ca')) return 'ca'
  return null
}

export function getPricingPath(country: 'us' | 'ca'): string {
  return `/pricing/${country}`
}

export function getContactPath(country?: 'us' | 'ca'): string {
  return country ? `/contact?country=${country}` : '/contact'
} 