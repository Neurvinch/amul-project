import React from 'react'
import { ArrowRight } from 'lucide-react'

const SubscriptionSection = () => {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1920&q=80')`,
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/60 via-blue-900/50 to-teal-900/60" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            A sound subscription
          </h2>

          {/* Description */}
          <p className="text-white/90 text-lg md:text-xl mb-10 leading-relaxed max-w-3xl">
            Experience personalised sound across our devices on a low monthly fee with NuraNow. Cancel anytime.
          </p>

          {/* CTA Button */}
          <button 
            className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white text-base md:text-lg px-10 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-lg"
          >
            DISCOVER NURANOW
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default SubscriptionSection
