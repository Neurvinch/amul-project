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

        {/* Logo Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-8 items-center justify-items-center">
            {mediaLogos.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`logo-${index}`}
                className="h-6 sm:h-8 object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedInSection
