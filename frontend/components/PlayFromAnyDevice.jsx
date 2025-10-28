import { Smartphone, Tv, Laptop, Music } from "lucide-react"



const devices = [
  { icon: Smartphone, label: "Mobile" },
  { icon: Laptop, label: "Desktop" },
  { icon: Tv, label: "TV" },
  { icon: Music, label: "Audio" }
]

export default function PlayFromAnyDevice() {
  return (
    <section className="bg-[#0a0a0a] py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-white text-4xl font-bold mb-4">
            Play from<br />any device.
          </h2>
          <p className="text-gray-400 text-sm">
            Seamlessly connect to all your devices and enjoy your personalized sound anywhere.
          </p>
        </div>

        {/* Device Icons */}
        <div className="flex justify-center gap-8 mb-12">
          {devices.map((device, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center">
                <device.icon className="w-8 h-8 text-gray-300" />
              </div>
              <span className="text-gray-400 text-xs">{device.label}</span>
            </div>
          ))}
        </div>

        {/* Subscription Card */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 p-8 text-center">
          <h3 className="text-white text-2xl font-bold mb-2">
            A sound subscription.
          </h3>
          <p className="text-gray-400 text-sm mb-6">
            Access to all Nura products and features with one monthly subscription.
          </p>
          
          <div className="mb-6">
            <div className="text-white text-5xl font-bold mb-2">
              $9.99
              <span className="text-2xl text-gray-400 font-normal">/mo</span>
            </div>
            <p className="text-gray-500 text-xs">
              Cancel anytime. First month free.
            </p>
          </div>

          <button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 rounded-full"
          >
            EXPLORE NURANOW
          </button>
        </div>
      </div>
    </section>
  )
}
