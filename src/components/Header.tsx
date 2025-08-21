'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Globe, Menu, X, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { getCountryFromPath, getPricingPath } from '@/lib/utils'

export function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const currentCountry = getCountryFromPath(pathname)

  const navigation = [
    { name: 'Who We Help', href: '/verticals' },
    { name: 'Work', href: '/work' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  const servicesDropdown = [
    { name: 'All Services', href: '/services' },
    { name: 'Software & Engineering', href: '/services#software' },
    { name: 'Creative Services', href: '/services#creative' },
  ]

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleServices = () => setIsServicesOpen(!isServicesOpen)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" aria-label="BrightCode home">
          <Image
            src="/logo.svg"
            alt="BrightCode logo"
            width={28}
            height={28}
            priority
          />
          <span className="font-semibold text-lg tracking-tight">BrightCode</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={toggleServices}
              className="flex items-center space-x-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <span>Services</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isServicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg border py-2 z-50">
                {servicesDropdown.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.name}
            </Link>
          ))}
          
          {/* Country Toggle */}
          <div className="flex items-center space-x-2">
            <Globe className="h-4 w-4 text-muted-foreground" />
            <div className="flex rounded-md border">
              <Link
                href="/us"
                className={`px-3 py-1 text-xs font-medium transition-colors ${
                  currentCountry === 'us'
                    ? 'bg-brand-600 text-white'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                US
              </Link>
              <Link
                href="/ca"
                className={`px-3 py-1 text-xs font-medium transition-colors ${
                  currentCountry === 'ca'
                    ? 'bg-brand-600 text-white'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                CA
              </Link>
            </div>
          </div>

          {/* Pricing Button */}
          <Button asChild>
            <Link href={currentCountry ? getPricingPath(currentCountry) : '/pricing/us'}>
              Pricing
            </Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container py-4 space-y-4">
            {/* Mobile Services */}
            <div>
              <div className="text-sm font-medium text-muted-foreground mb-2">Services</div>
              <div className="pl-4 space-y-2">
                {servicesDropdown.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Country Toggle */}
            <div className="flex items-center space-x-2 pt-2">
              <Globe className="h-4 w-4 text-muted-foreground" />
              <div className="flex rounded-md border">
                <Link
                  href="/us"
                  className={`px-3 py-1 text-xs font-medium transition-colors ${
                    currentCountry === 'us'
                      ? 'bg-brand-600 text-white'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  US
                </Link>
                <Link
                  href="/ca"
                  className={`px-3 py-1 text-xs font-medium transition-colors ${
                    currentCountry === 'ca'
                      ? 'bg-brand-600 text-white'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  CA
                </Link>
              </div>
            </div>

            {/* Mobile Pricing Button */}
            <Button asChild className="w-full">
              <Link 
                href={currentCountry ? getPricingPath(currentCountry) : '/pricing/us'}
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
} 