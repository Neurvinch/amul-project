import React from "react"

const products = [
  {
    id: 1,
    name: "NuraTrue Pro",
    image: "https://images.unsplash.com/photo-1590658165737-15a047b7a0da?w=400&q=80",
    discount: "70% off",
    originalPrice: "$399",
    salePrice: "$119"
  },
  {
    id: 2,
    name: "NuraTrue",
    image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400&q=80",
    discount: "70% off",
    originalPrice: "$249",
    salePrice: "$74"
  },
  {
    id: 3,
    name: "NuraPhone",
    image: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=400&q=80",
    discount: "70% off",
    originalPrice: "$399",
    salePrice: "$119"
  },
  {
    id: 4,
    name: "NuraLoop",
    image: "https://images.unsplash.com/photo-1577174881658-0f30157f5803?w=400&q=80",
    discount: "70% off",
    originalPrice: "$199",
    salePrice: "$59"
  }
]

export default function ProductGrid() {
  return (
    <section className="bg-[#1a1a1a] py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-white text-3xl font-bold mb-8 text-center">
          Flash sale discounts
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white overflow-hidden group cursor-pointer transition-transform hover:scale-105">
              {/* Discount Badge */}
              <div className="relative">
                <div className="absolute top-4 left-4 z-10 bg-red-500 text-white px-3 py-1 text-sm font-bold">
                  {product.discount}
                </div>
                
                {/* Product Image */}
                <div className="relative w-full aspect-square bg-gray-50">
                  <image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500 line-through">
                    {product.originalPrice}
                  </span>
                  <span className="text-xl font-bold text-gray-900">
                    {product.salePrice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
