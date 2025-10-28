import React from 'react'

const MobileAppSection = () => {

    const features = [
  "Personalized sound profiles tailored to your unique hearing",
  "Active noise cancellation that adapts to your environment",
  "Immersion mode for the ultimate listening experience",
  "Social mode to hear the world around you"
]
  return (
    <div>
        <section className="bg-[#1a1a1a] py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          {/* Phone Mockup */}
          <div className="relative flex justify-center">
            <div className="relative w-[280px] h-[560px] bg-blue-600 rounded-[40px] p-3 shadow-2xl">
              <div className="relative w-full h-full bg-white rounded-[32px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1611262588024-d12430b98920?w=400&q=80"
                  alt="Nura App Interface"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Feature Card */}
          <div className="bg-blue-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">
              For your<br />ears only.
            </h2>
            <p className="text-blue-100 mb-6 text-sm">
              Nura creates a unique sound profile tuned to you. Learn how your hearing is as unique as your fingerprint.
            </p>
            
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default MobileAppSection