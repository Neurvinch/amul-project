import { ShoppingCart, Menu } from "lucide-react"


export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent font-space-grotesk ">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <svg className="w-8 h-8 text-white" viewBox="0 0 40 40" fill="currentColor">
              <path d="M20 8C16 8 12 10 10 14C8 18 8 22 10 26C12 30 16 32 20 32C22 32 24 32 26 30L20 20L26 10C24 8 22 8 20 8Z" />
            </svg>
            <h1 className="text-white text-3xl font-bold">nura</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex justify-items-start gap-8 ">
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              Products
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              Subscription
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              Why Nura?
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              Support
            </a>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors">
              <ShoppingCart className="w-5 h-5" />
              <span>Cart (0)</span>
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
