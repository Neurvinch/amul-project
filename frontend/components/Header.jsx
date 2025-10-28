import { ShoppingCart, Menu } from "lucide-react"


export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-white text-xl font-bold">nurasound.com</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
              Products
            </a>
            <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
              NuraNow
            </a>
            <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
              Support
            </a>
            <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
              About
            </a>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button variant="ghost" size="icon" className="text-white">
              <ShoppingCart className="w-5 h-5" />
            </button>
            <button variant="ghost" size="icon" className="md:hidden text-white">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
