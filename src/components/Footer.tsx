import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { MapPin, Phone, Mail, Globe } from 'lucide-react'
import { offices } from '@/data/offices'

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-brand-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="font-display font-bold text-xl">BrightCode</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Software that ships. Teams that care. We help startups and growing businesses 
              build, fix, and launch software that works — fast.
            </p>
            <Button asChild>
              <Link href="/contact">Get a Free Consultation</Link>
            </Button>
          </div>

          {/* US Office */}
          <div>
            <h3 className="font-semibold mb-4">US Office</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">{offices.us.name}</p>
                  <p>{offices.us.address}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href={`tel:${offices.us.phone}`} className="hover:text-foreground transition-colors">
                  {offices.us.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href={`mailto:${offices.us.email}`} className="hover:text-foreground transition-colors">
                  {offices.us.email}
                </a>
              </div>
            </div>
          </div>

          {/* Canada Office */}
          <div>
            <h3 className="font-semibold mb-4">Canada Office</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">{offices.ca.name}</p>
                  <p>{offices.ca.address}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href={`tel:${offices.ca.phone}`} className="hover:text-foreground transition-colors">
                  {offices.ca.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href={`mailto:${offices.ca.email}`} className="hover:text-foreground transition-colors">
                  {offices.ca.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <Link href="/services" className="hover:text-foreground transition-colors">
              Services
            </Link>
            <Link href="/work" className="hover:text-foreground transition-colors">
              Work
            </Link>
            <Link href="/about" className="hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Globe className="h-4 w-4" />
              <span>Based in Long Beach, CA & Toronto, ON</span>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} BrightCode. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 