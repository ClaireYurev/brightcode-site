'use client';
import Image from 'next/image';
import { imgByKey } from '@/lib/stock';

export function StockImage({
  k,
  width,
  height,
  className,
  priority = false
}: {
  k: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}) {
  const img = imgByKey(k);
  if (!img) {
    return (
      <div
        className={`bc-image bg-gradient-to-br from-slate-200 to-slate-400 flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <span className="text-slate-600 text-sm">Image unavailable</span>
      </div>
    );
  }
  return (
    <Image
      src={img.src}
      alt={img.alt}
      width={width}
      height={height}
      className={`bc-image ${className ?? ''}`}
      priority={priority}
    />
  );
} 