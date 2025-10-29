import React from 'react'
import { ArrowRight } from "lucide-react"

const MobileAppSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Phone Mockup */}
          <div className="relative flex justify-center md:justify-start">
            <div className="relative w-[300px] h-[600px]">
              {/* Phone Frame */}
              <div className="absolute inset-0 bg-black rounded-[50px] shadow-2xl p-3">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-20"></div>
                
                {/* Screen */}
                <div className="relative w-full h-full bg-white rounded-[42px] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1611262588024-d12430b98920?w=400&q=80"
                    alt="Nura App Interface"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              For your<br />ears only.
            </h2>
            
            <p className="text-white/90 mb-4 text-lg leading-relaxed">
              Normal hearing varies significantly from person to person, and these variations make a <span className="text-yellow-300 font-semibold">big difference</span> to how you experience music.
            </p>
            
            <p className="text-white/90 mb-8 text-lg leading-relaxed">
              The first time you use Nura earbuds, they <span className="text-yellow-300 font-semibold">measure your hearing</span> to create your personalised hearing profile.
            </p>
            
            <button className="flex items-center gap-2 text-white border-2 border-white hover:bg-white hover:text-blue-600 transition-all px-6 py-3 rounded-full font-semibold">
              LEARN MORE
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MobileAppSection