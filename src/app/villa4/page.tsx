'use client'

import { motion } from 'framer-motion'
import { AnimatedImage } from '@/components/ui/AnimatedImage'
import { VillaSection } from '@/components/ui/VillaSection'
import villa1 from '@/assets/images/VILLA 4-1.jpeg'
import villa2 from '@/assets/images/VILLA 4-2.jpeg'
import villa3 from '@/assets/images/VILLA 4-3.jpeg'
import villa15 from '@/assets/images/VILLA 4-15.jpeg'
import villa16 from '@/assets/images/VILLA 4-16.jpeg'
import villa8 from '@/assets/images/VILLA 4-8.jpeg'
import villa9 from '@/assets/images/VILLA 4-9.jpeg'
import villa20 from '@/assets/images/VILLA 4-20.jpeg'
import villa21 from '@/assets/images/VILLA 4-21.jpeg'

export default function Villa4Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div className="relative w-full h-full">
            <AnimatedImage
              src={villa1}
              alt="Villa4 Exterior"
              className="h-full"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        </motion.div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Villa4
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Experience modern luxury in our signature villa
          </motion.p>
        </div>
      </section>

      {/* Living Area */}
      <VillaSection
        title="Luxurious Living Space"
        description="Immerse yourself in our meticulously designed living areas, where modern aesthetics meet unparalleled comfort."
      >
        <div className="grid grid-cols-2 gap-4">
          <AnimatedImage
            src={villa2}
            alt="Villa4 Living Room"
            className="h-64"
          />
          <AnimatedImage
            src={villa3}
            alt="Villa4 Living Area"
            className="h-64"
          />
        </div>
      </VillaSection>

      {/* Bedrooms */}
      <VillaSection
        title="Elegant Bedrooms"
        description="Rest in absolute comfort in our beautifully appointed bedrooms."
        reversed
      >
        <div className="grid grid-cols-2 gap-4">
          <AnimatedImage
            src={villa15}
            alt="Villa4 Master Bedroom"
            className="h-64"
          />
          <AnimatedImage
            src={villa16}
            alt="Villa4 Guest Bedroom"
            className="h-64"
          />
        </div>
      </VillaSection>

      {/* Kitchen & Dining */}
      <VillaSection
        title="Gourmet Kitchen & Dining"
        description="A chef's paradise equipped with top-of-the-line appliances and elegant dining spaces."
      >
        <div className="grid grid-cols-2 gap-4">
          <AnimatedImage
            src={villa8}
            alt="Villa4 Kitchen"
            className="h-64"
          />
          <AnimatedImage
            src={villa9}
            alt="Villa4 Dining Area"
            className="h-64"
          />
        </div>
      </VillaSection>

      {/* Outdoor Space */}
      <VillaSection
        title="Stunning Outdoor Areas"
        description="Enjoy the perfect blend of indoor and outdoor living with our beautifully landscaped spaces."
        reversed
      >
        <div className="grid grid-cols-2 gap-4">
          <AnimatedImage
            src={villa20}
            alt="Villa4 Outdoor Space"
            className="h-64"
          />
          <AnimatedImage
            src={villa21}
            alt="Villa4 Pool Area"
            className="h-64"
          />
        </div>
      </VillaSection>

      {/* Call to Action */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold gradient-text mb-6">Experience Villa4</h2>
            <p className="text-xl text-gray-600 mb-8">
              Ready to experience luxury living at its finest? Book your stay at Villa4 today.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gold hover:bg-gold-light transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Now
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  )
} 