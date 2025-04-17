'use client'

import Link from 'next/link'

export function Navigation() {
  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <div className="hover:scale-105 transition-transform duration-200">
              <Link href="/" className="text-2xl font-bold gradient-text">
                Terraces
              </Link>
            </div>
          </div>
          
          <div className="hidden sm:flex sm:items-center sm:gap-8">
            <div className="hover:-translate-y-0.5 transition-transform duration-200">
              <Link 
                href="/villa4"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-900 hover:text-gold transition-colors"
              >
                Villa4
              </Link>
            </div>
            <div className="hover:-translate-y-0.5 transition-transform duration-200">
              <Link
                href="/penthouse"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-900 hover:text-gold transition-colors"
              >
                Penthouse
              </Link>
            </div>
            <div className="hover:scale-105 transition-transform duration-200 ml-2">
              <Link
                href="/contact"
                className="inline-flex items-center px-5 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gold hover:bg-gold-light transition-colors"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
} 