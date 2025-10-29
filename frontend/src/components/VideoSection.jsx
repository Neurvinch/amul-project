"use client"

import { Play } from "lucide-react"

export default function VideoSection() {
  return (
    <section className="bg-[#1a1a1a] py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden group cursor-pointer">
          {/* Video Thumbnail */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
            {/* Play Button */}
            <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
              <Play className="w-10 h-10 text-white fill-white ml-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
