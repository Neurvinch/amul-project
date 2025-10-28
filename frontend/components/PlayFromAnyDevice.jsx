import React from 'react'

export default function PlayFromAnyDevice() {
  return (
    <section className="relative bg-black py-20 px-4 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
      </div>

      {/* Phone Mockup - Left Side */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-64 md:w-80 opacity-60">
        <div className="relative">
          {/* Phone Frame */}
          <div className="bg-black rounded-[50px] shadow-2xl p-3">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-3xl z-20"></div>
            
            {/* Screen */}
            <div className="relative w-full aspect-[9/19] bg-white rounded-[42px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1611262588024-d12430b98920?w=400&q=80"
                alt="Nura App"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-6xl">
        <div className="ml-auto max-w-xl text-right md:text-left md:pl-64">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Play from<br />any device.
          </h2>
          
          <p className="text-white/90 mb-4 text-lg leading-relaxed">
            Your hearing profile is <span className="text-green-400 font-semibold">stored on the earbuds</span>, and is applied to whatever you listen to, <span className="text-green-400 font-semibold">on any device</span>.
          </p>
          
          <p className="text-white/90 text-lg leading-relaxed">
            Use the Nura app to create a hearing profile, configure touch buttons, adjust immersion mode and more.
          </p>
        </div>
      </div>
    </section>
  )
}
