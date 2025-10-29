import React from 'react'
import { ArrowRight } from 'lucide-react'
import PhoneBG from '../assets/6406e5685bba9c4e4bff3cb917c4f0236a49d02c (1).png'
import PhoneScreen from '../assets/8a0597d96454bc74bbe222c19f0c2ffe0705a3ea (1).png'

// This section combines the previous MobileAppSection and PlayFromAnyDevice
// Images can be swapped later; structure and styles mirror the reference layout
export default function CombinedExperienceSection() {
  return (
    <section>
      {/* Block 1: For your ears only. */}
      <div className="relative py-16 md:py-24 px-4 overflow-hidden">
        {/* Background Image for Block 1 */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${PhoneBG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/10 pointer-events-none" />
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-10 items-center">
          {/* Phone Mockup */}
          <div className="relative flex justify-center md:justify-start">
            <div className="relative w-[300px] h-[600px] md:w-[340px] md:h-[680px]">
              <div className="absolute inset-0 bg-black rounded-[50px] shadow-2xl p-3">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-20" />
                <div className="relative w-full h-full bg-white rounded-[42px] overflow-hidden">
                  <img
                    src={PhoneScreen}
                    alt="Nura App Interface"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-white">
            <h2 className="font-space-grotesk text-4xl md:text-6xl font-semibold mb-6 leading-tight">
              For your<br />ears only.
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-4 leading-relaxed">
              Normal hearing varies significantly from person to person, and these variations make a <span className="underline decoration-white/70">big difference</span> to how you experience music.
            </p>
            <p className="text-white/90 text-lg md:text-xl mb-8 leading-relaxed">
              The first time you use Nura earbuds, they <span className="underline decoration-white/70">measure your hearing</span> to create your personalised hearing profile.
            </p>
            <button className="inline-flex items-center gap-2 text-white border-2 border-white hover:bg-white hover:text-blue-600 transition-all px-6 py-3 rounded-full font-medium">
              LEARN MORE
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Block 2: Play from any device. */}
      <div className="relative bg-black py-20 md:py-24 px-4 overflow-hidden">
        {/* Background image placeholder; replace later */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1920&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        {/* Phone mockup over left edge */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 md:w-80 opacity-60">
          <div className="relative">
            <div className="bg-black rounded-[50px] shadow-2xl p-3">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-3xl z-20" />
              <div className="relative w-full aspect-[9/19] bg-white rounded-[42px] overflow-hidden">
                <img
                  src={PhoneScreen}
                  alt="Nura App"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto max-w-6xl">
          <div className="ml-auto max-w-xl md:pl-64">
            <h2 className="font-space-grotesk text-white text-4xl md:text-6xl font-semibold mb-6 leading-tight">
              Play from<br />any device.
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-4 leading-relaxed">
              Your hearing profile is <span className="text-green-400">stored on the earbuds</span>, and is applied to whatever you listen to, <span className="text-green-400">on any device</span>.
            </p>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed">
              Use the Nura app to create a hearing profile, configure touch buttons, adjust immersion mode and more.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
