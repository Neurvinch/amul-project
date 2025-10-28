import React from 'react'


const HeroSection = () => {
  return (
        <div className="relative min-h-[600px] bg-gradient-to-br from-pink-600 via-pink-500 to-purple-600 overflow-hidden">
      {/* Black Friday Banner */}
      <div className="absolute top-0 left-0 right-0 bg-black/30 backdrop-blur-sm py-2 px-4 z-10">
        <p className="text-white text-center text-sm font-medium">
          Black Friday Extended - 70% off our best soundform™ products
        </p>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-20 pb-12 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Product Image */}
          <div className="relative w-full max-w-2xl aspect-[16/9] mb-8">
            <image
              src="https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80"
              alt="Nura Headphones"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Heading */}
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">
            Black Friday Starts Now!
          </h1>

          {/* CTA Button */}
          <button 
            size="lg" 
            className="bg-white text-pink-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-full font-semibold"
          >
            Shop Black Friday
          </button>
        </div>
      </div>

      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
    </div>
  )
}

export default HeroSection