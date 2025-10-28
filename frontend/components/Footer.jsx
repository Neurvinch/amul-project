import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

const footerLinks = {
  Products: ["NuraTrue Pro", "NuraTrue", "NuraPhone", "NuraLoop", "Accessories"],
  Support: ["Help Center", "Contact Us", "Shipping", "Returns", "Warranty"],
  Company: ["About Us", "Careers", "Press", "Blog", "Affiliate Program"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"]
}

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Youtube, href: "#" }
]

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12 px-4">
      <div className="container mx-auto">
        {/* Logo */}
        <div className="mb-8">
          <h2 className="text-white text-2xl font-bold">nura</h2>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4 text-sm">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex gap-6 mb-8">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p>© 2024 Nura. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
