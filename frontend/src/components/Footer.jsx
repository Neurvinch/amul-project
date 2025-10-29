import React from 'react'

const footerLinks = {
  SHOP: [
    "NuraTrue Pro",
    "Audio Transmitter",
    "NuraTrue",
    "NuraBuds",
    "Nuraphone",
    "NuraLoop",
    "Accessories",
    "Subscription"
  ],
  INFO: [
    "Why Nura?",
    "Shipping",
    "Returns",
    "Warranty",
    "Patents"
  ],
  SUPPORT: [
    "Help Centre",
    "Contact Us"
  ],
  SOCIALS: [
    "Instagram",
    "Facebook",
    "YouTube",
    "Tidal",
    "Twitter",
    "Discord"
  ]
}

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <svg className="w-8 h-8 text-white" viewBox="0 0 40 40" fill="currentColor">
                <path d="M20 8C16 8 12 10 10 14C8 18 8 22 10 26C12 30 16 32 20 32C22 32 24 32 26 30L20 20L26 10C24 8 22 8 20 8Z" />
              </svg>
              <h2 className="text-white text-2xl font-bold">nura</h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Nura designs headphones tuned to you. Bringing you closer to music with personalised sound.
            </p>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-gray-500 font-semibold mb-4 text-xs uppercase tracking-wider">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white text-sm hover:text-gray-300 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
            <p>Copyright © 2022 Nura Operations Pty Ltd. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gray-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gray-400 transition-colors">
                Terms of Use
              </a>
              <a href="#" className="hover:text-gray-400 transition-colors">
                Legal
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
