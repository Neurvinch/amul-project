import React from "react"
import { ArrowRight } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Nuraphone",
    image: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=400&q=80",
    discount: "25%",
    originalPrice: "$299.25",
    salePrice: "$299.25"
  },
  {
    id: 2,
    name: "NuraTrue",
    image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400&q=80",
    discount: "30%",
    originalPrice: "$199.99",
    salePrice: "$139.99"
  },
  {
    id: 3,
    name: "NuraBuds 2",
    image: "https://images.unsplash.com/photo-1590658165737-15a047b7a0da?w=400&q=80",
    discount: "25%",
    originalPrice: "$119",
    salePrice: "$89.25"
  },
  {
    id: 4,
    name: "Nura Bluetooth® 5.3 Audio Transmitter",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&q=80",
    discount: "25%",
    originalPrice: "$59",
    salePrice: "$44.25"
  }
]

export default function ProductGrid() {
  return (
    <section className="bg-[rgba(23,23,23,1)]
 py-16 px-4">
      <div className="container mx-auto  bg-[rgba(229, 229, 229, 1)]">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-white text-3xl md:text-4xl font-bold">
            Featured discounts
          </h2>
          <button className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors text-sm font-medium">
            VIEW ALL DISCOUNTS
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl overflow-hidden group cursor-pointer transition-transform hover:scale-105">
              {/* Discount Badge */}
              <div className="relative">
                <div className="absolute top-4 left-4 z-10 bg-gradient-to-br from-pink-600 to-purple-700 text-white rounded-full w-16 h-16 flex flex-col items-center justify-center text-center shadow-lg">
                  <span className="text-lg font-bold leading-none">{product.discount}</span>
                  <span className="text-xs font-semibold leading-none">OFF</span>
                </div>
                
                {/* Product Image */}
                <div className="relative w-full aspect-square bg-gray-100 flex items-center justify-center p-8">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold mb-3 text-gray-900 min-h-[3rem] flex items-center justify-center">
                  {product.name}
                </h3>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-sm text-gray-400 line-through">
                    {product.originalPrice}
                  </span>
                  <span className="text-xl font-bold text-gray-900">
                    {product.salePrice}
                  </span>
                </div>
                
                {/* Shop Now Button */}
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition-colors flex items-center justify-center gap-2">
                  SHOP NOW
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
