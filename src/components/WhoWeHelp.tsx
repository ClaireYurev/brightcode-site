import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { verticals, type Vertical } from '@/data/verticals'

interface WhoWeHelpProps {
  limit?: number
}

export function WhoWeHelp({ limit }: WhoWeHelpProps) {
  const displayVerticals = limit ? verticals.slice(0, limit) : verticals

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Who we help
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Specialized solutions for businesses operating across the U.S.–Canada border.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayVerticals.map((vertical) => (
            <Card key={vertical.slug} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex space-x-1">
                    <Badge variant="secondary" className="text-xs">US</Badge>
                    <Badge variant="secondary" className="text-xs">CA</Badge>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-brand-600 transition-colors">
                  {vertical.title}
                </CardTitle>
                <CardDescription className="text-base font-medium text-brand-600">
                  {vertical.tagline}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {vertical.bullets.slice(0, 3).map((bullet, index) => (
                    <li key={index} className="flex items-start text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-brand-600 mr-2 mt-0.5 flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" size="sm" asChild className="w-full group">
                  <Link href={`/verticals/${vertical.slug}`}>
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {limit && (
          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/verticals">
                View all verticals
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  )
} 