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
        <div className="max-w-8xl mx-auto">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-8 items-center justify-items-center">
            {mediaLogos.map((src, index) => (
              <div
                key={index}
                className="relative w-[210px] h-[116.421875px] opacity-100"
                style={{ left: '4.55px' }}
              >
                <img
                  src={src}
                  alt={`logo-${index}`}
                  className="w-[210px] h-[116.421875px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedInSection
