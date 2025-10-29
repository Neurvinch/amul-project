import React from 'react'
import { ArrowRight } from 'lucide-react'
import Background from '../assets/44b68064664628a2db7b4fd033a5752ceffeaeeb.jpg'

const HeroSection = () => {
  return (
    <div className="relative min-h-[600px] md:min-h-[700px] overflow-hidden font-space-grotesk">
      {/* Background Image */}


      <div 
        className="absolute inset-0 bg-cover bg-center  "
        style={{
          backgroundImage: `url(${Background})`,
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-28 md:pt-40 pb-20">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Small Heading */}
          <p className="text-white text-xl md:text-4xl font-extralight tracking-wider mb-6 uppercase">
            OUR BIGGEST SALE NOW LIVE
          </p>

          {/* Main Heading */}
          <h1 className="text-white text-4xl md:text-7xl lg:text-8xl font-semibold mb-4 leading-tight max-w-[90vw] md:max-w-4xl break-words">
            Black Friday Starts Now!
          </h1>

          {/* CTA Button */}
          <button 
            className="flex items-center gap-3 bg-white text-black hover:bg-gray-100 text-base md:text-mg px-8 py-4 rounded-full font-semibold transition-all hover:scale-105"
          >
            SHOP SALE NOW
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection