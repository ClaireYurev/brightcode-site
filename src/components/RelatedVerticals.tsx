import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { verticalsMap } from '@/data/verticals'

interface RelatedVerticalsProps {
  verticalSlugs: string[]
  title?: string
}

export function RelatedVerticals({ verticalSlugs, title = "Who this helps" }: RelatedVerticalsProps) {
  const validVerticals = verticalSlugs
    .map(slug => verticalsMap[slug])
    .filter(Boolean)

  if (validVerticals.length === 0) return null

  return (
    <div className="mt-4">
      <p className="text-sm font-medium text-muted-foreground mb-2">{title}:</p>
      <div className="flex flex-wrap gap-2">
        {validVerticals.map((vertical) => (
          <Link key={vertical.slug} href={`/verticals/${vertical.slug}`}>
            <Badge 
              variant="secondary" 
              className="text-xs hover:bg-brand-100 transition-colors cursor-pointer"
            >
              {vertical.title}
            </Badge>
          </Link>
        ))}
      </div>
    </div>
  )
} 