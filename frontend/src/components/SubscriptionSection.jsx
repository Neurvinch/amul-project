import React from 'react'
import { ArrowRight } from 'lucide-react'
import BG from "../assets/75695277e062a0356906fa0f4d491d5abe243845.jpg"

const SubscriptionSection = () => {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${BG})`,
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 " />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-medium mb-1 leading-tight font-space-grotesk">
            A sound subscription
          </h2>

          {/* Description */}
          <p className="text-white/90 text-lg md:text-3xl mb-10 leading-relaxed max-w-3xl font-space-grotesk">
            Experience personalised sound across our devices on a low monthly fee with NuraNow. Cancel anytime.
          </p>

          {/* CTA Button */}
          <button 
            className="flex items-center gap-3 bg-[#3333F5] hover:bg-[#3333F5] text-[#FFFFFF] text-base md:text-3xl px-10 py-4 rounded-full font-extralight transition-all hover:scale-105 shadow-lg font-space-grotesk"
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
