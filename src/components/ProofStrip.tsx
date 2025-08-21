'use client';
import Image from 'next/image';
import Link from 'next/link';
import { techBrands } from '@/data/tech-logos';

const USE_CDN = true; 
// Later: set to false and load from /public/logos/<slug>.svg locally.

function srcFor(slug: string) {
  // cool grey tone (Tailwind gray-400 = #9CA3AF)
  return `https://cdn.simpleicons.org/${slug}/9CA3AF`;
}

export function ProofStrip() {
  return (
    <section className="py-12 border-b">
      <div className="container">
        <div className="text-center mb-8">
          <h3 className="text-sm text-muted-foreground mb-6">
            Trusted technologies we work with
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 items-center justify-items-center">
            {techBrands.map(b => {
              const src = USE_CDN ? srcFor(b.slug) : `/logos/${b.slug}.svg`;
              const img = (
                <Image
                  src={src}
                  alt={b.name}
                  width={96}
                  height={32}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                />
              );
              return (
                <div key={b.slug} className="h-8 flex items-center">
                  {b.href ? (
                    <Link href={b.href} target="_blank" className="grayscale hover:grayscale-0 transition">
                      {img}
                    </Link>
                  ) : (
                    <div className="grayscale hover:grayscale-0 transition">{img}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="text-center">
          <blockquote className="text-lg text-gray-700 italic">
            "BrightCode delivered our cross-border dashboard in under 6 weeks."
          </blockquote>
          <p className="text-sm text-muted-foreground mt-2">
            — J.S., Logistics Client
          </p>
        </div>
      </div>
    </section>
  )
} 