import React from 'react'

const FeaturedInSection = () => {
  // Load all PNGs from assets/jioi as URLs (Vite glob import)
  const logoModules = import.meta.glob('../assets/jioi/*.png', { eager: true, as: 'url' })
  const mediaLogos = Object.values(logoModules)

  return (
    <section className="bg-[#2a2a2a] py-16 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-space-grotesk text-[#7DFB5D] text-[24px] leading-[24px] font-normal tracking-[0] uppercase text-center align-middle">
            AS FEATURED IN
          </h2>
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden">
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-px-4 no-scrollbar">
            {mediaLogos.map((src, index) => (
              <div key={index} className="snap-center shrink-0 flex items-center justify-center min-w-[160px] h-24">
                <img src={src} alt={`logo-${index}`} className="h-16 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop/Grid Layout */}
        <div className="hidden md:block max-w-8xl mx-auto">
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-8 items-center justify-items-center">
            {mediaLogos.map((src, index) => (
              <div key={index} className="flex items-center justify-center h-24">
                <img src={src} alt={`logo-${index}`} className="max-h-16 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedInSection
