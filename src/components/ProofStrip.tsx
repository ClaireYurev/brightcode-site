'use client';
import Image from 'next/image';
import Link from 'next/link';
import { techBrands } from '@/data/tech-logos';

const USE_CDN = true;
const color = '9CA3AF'; // Tailwind gray-400

function srcFor(slug: string) {
  return `https://cdn.simpleicons.org/${slug}/${color}`;
}

export default function ProofStrip() {
  return (
    <section className="container mx-auto px-4 pt-8 pb-12">
      <h3 className="text-center text-sm text-muted-foreground mb-5">
        Trusted technologies we work with
      </h3>

      {/* Responsive, evenly spaced, safe sizing */}
      <div className="mx-auto grid grid-cols-3 sm:grid-cols-6 gap-x-6 gap-y-6 max-w-5xl">
        {techBrands.map((b) => {
          const src = USE_CDN ? srcFor(b.slug) : `/logos/${b.slug}.svg`;
          const img = (
            <Image
              src={src}
              alt={b.name}
              width={120}           // intrinsic width for quality
              height={40}           // intrinsic height for quality
              sizes="(max-width: 640px) 80px, (max-width: 1024px) 96px, 120px"
              className="h-6 sm:h-7 lg:h-8 w-auto opacity-80 hover:opacity-100 transition-opacity object-contain"
            />
          );
          return (
            <div key={b.slug} className="flex items-center justify-center">
              {b.href ? (
                <Link
                  href={b.href}
                  target="_blank"
                  aria-label={b.name}
                  className="grayscale hover:grayscale-0 transition"
                >
                  {img}
                </Link>
              ) : (
                <div className="grayscale hover:grayscale-0 transition">{img}</div>
              )}
            </div>
          );
        })}
      </div>
      
      <div className="text-center mt-8">
        <blockquote className="text-lg text-gray-700 italic">
          "BrightCode delivered our cross-border dashboard in under 6 weeks."
        </blockquote>
        <p className="text-sm text-muted-foreground mt-2">
          — J.S., Logistics Client
        </p>
      </div>
    </section>
  );
} 