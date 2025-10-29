import React from 'react'

const FeaturedInSection = () => {
  const mediaLogos = [
    { name: 'Forbes', width: 'w-20' },
    { name: 'WIRED', width: 'w-16' },
    { name: 'techradar', width: 'w-24' },
    { name: 'TC', width: 'w-12' },
    { name: 'Pitchfork', width: 'w-24' },
    { name: 'Rolling Stone', width: 'w-28' },
    { name: 'engadget', width: 'w-24' },
    { name: 'WSJ', width: 'w-16' },
    { name: 'GQ', width: 'w-16' },
    { name: 'POP SCI', width: 'w-20' },
    { name: 'UNILAD TECH', width: 'w-24' },
    { name: 'TNW', width: 'w-16' },
    { name: 'FT', width: 'w-12' },
    { name: 'GIZMODO', width: 'w-24' },
    { name: 'Stuff', width: 'w-16' },
    { name: 'Digital Spy', width: 'w-24' },
    { name: 'IBT', width: 'w-16' },
    { name: 'digitaltrends', width: 'w-28' },
    { name: 'TECHJUNKIE', width: 'w-24' },
    { name: 'BROADSHEET', width: 'w-28' },
    { name: 'toms guide', width: 'w-24' },
    { name: 'trusted reviews', width: 'w-24' }
  ]

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
            {mediaLogos.map((logo, index) => (
              <div 
                key={index} 
                className={`${logo.width} h-8 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity cursor-pointer`}
              >
                <span className="text-white text-xs font-bold text-center">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedInSection
