'use client'

import Image, { StaticImageData } from 'next/image'

interface AnimatedImageProps {
  src: string | StaticImageData
  alt: string
  className?: string
}

export function AnimatedImage({ src, alt, className = '' }: AnimatedImageProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg animate-fade-in-scale hover:scale-102 transition-transform duration-200 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-700 hover:scale-110"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div
        className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300"
      />
    </div>
  )
} 