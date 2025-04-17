'use client'

import { ReactNode } from 'react'

interface VillaSectionProps {
  title: string
  description?: string
  children: ReactNode
  reversed?: boolean
}

export function VillaSection({ title, description, children, reversed = false }: VillaSectionProps) {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reversed ? 'lg:flex-row-reverse' : ''}`}>
          <div
            className={`space-y-6 animate-slide-in ${reversed ? 'animate-slide-in-right' : 'animate-slide-in-left'}`}
          >
            <h2 className="text-4xl font-bold gradient-text">{title}</h2>
            {description && (
              <p className="text-xl text-gray-600">{description}</p>
            )}
          </div>
          <div
            className={`animate-slide-in ${reversed ? 'animate-slide-in-left' : 'animate-slide-in-right'}`}
          >
            {children}
          </div>
        </div>
      </div>
    </section>
  )
} 