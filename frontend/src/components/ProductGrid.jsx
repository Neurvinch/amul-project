import React from "react"
import { ArrowRight } from "lucide-react"
import product2Img from "../assets/c1230f1c17a2bb5165eb19d6f734b5dceb15ec73.jpg"
import product1Img from "../assets/fdb3d19ad1b386d9edce36e97ef59ec9cc52f766.jpg"
import product3Img from "../assets/3a971bc2cad2d5fcc3993f0710de3d5c2439e3bc.jpg"
import product4Img from "../assets/2b082534d6638f0b58d14f85c67e853f66a60293 (1).jpg"

const products = [
  {
    id: 1,
    name: "Nuraphone",
    image: product1Img,
    discount: "25%",
    originalPrice: "$299.25",
    salePrice: "$299.25"
  },
  {
    id: 2,
    name: "NuraTrue",
    image: product2Img,
    discount: "30%",
    originalPrice: "$199.99",
    salePrice: "$139.99"
  },
  {
    id: 3,
    name: "NuraBuds 2",
    image: product3Img,
    discount: "25%",
    originalPrice: "$119",
    salePrice: "$89.25"
  },
  {
    id: 4,
    name: "Nura Bluetooth® 5.3 Audio Transmitter",
    image: product4Img,
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
          <h2 className="text-white text-3xl md:text-7xl font-light">
            Featured discounts
          </h2>
          <button className="flex items-center gap-2 text-[#7DFB5D] hover:text-green-300 transition-colors text-sm font-light">
            VIEW ALL DISCOUNTS
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6  ">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-200 rounded-[20px] overflow-hidden group cursor-pointer transition-transform hover:scale-105 border border-gray-200 shadow-sm flex flex-col h-full max-w-[320px] w-full mx-auto">
              {/* Discount Badge */}
              <div className="relative">
                <div
                  className="absolute top-[29.67px] left-[25.03px] z-10 rounded-[100px] w-[93.890625px] h-[93.890625px] flex flex-col items-center justify-center text-center shadow-lg"
                  style={{
                    background: "#000000",
                    borderWidth: "3px",
                    borderStyle: "solid",
                    borderImageSource:
                      "linear-gradient(135deg, #EB48F7 0%, #F8D481 60%, #CCFF02 100%)",
                    borderImageSlice: 1,
                    boxShadow: "6px 5px 7px 0px #00000029"
                  }}
                >
                  <span className="text-2xl font-bold leading-none text-transparent bg-clip-text bg-gradient-to-br from-[#EB48F7] via-[#F8D481] to-[#CCFF02]">
                    {product.discount}
                  </span>
                  <span className="text-sm font-semibold leading-none text-transparent bg-clip-text bg-gradient-to-br from-[#EB48F7] via-[#F8D481] to-[#CCFF02]">
                    OFF
                  </span>
                </div>
                
                {/* Product Image */}
                <div className="relative bg-gray-200 flex items-start justify-center p-8 w-[370px] h-[305.46875px] rounded-[20px]  ">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-[370px] h-[305.46875px] opacity-100 rounded-[20px] rotate-0 object-fill"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 text-center flex flex-col flex-1">
                <h3 className="font-space-grotesk text-[28px] leading-[28px] font-medium tracking-[-0.84px] text-gray-900 mb-3 min-h-[3rem] flex items-center justify-center text-center align-middle">
                  {product.name}
                </h3>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-sm text-gray-400 line-through">
                    {product.originalPrice}
                  </span>
                  <span className="font-bai-jamjuree text-[16px] leading-[16px] font-semibold tracking-[0] text-gray-900 text-center align-middle">
                    {product.salePrice}
                  </span>
                  
                </div>
                
                {/* Shop Now Button */}
                <button className="mt-auto w-full bg-[#3333F5] hover:bg-[#3333F5] text-white font-semibold py-3 px-6 rounded-full transition-colors flex items-center justify-center gap-2">
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
