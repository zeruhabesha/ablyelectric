"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, ArrowRight, ArrowUp } from "lucide-react"

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const productCategories = [
    "EV Chargers",
    "UPS Systems",
    "Inverters",
    "Generators",
    "Industrial Trainers",
    "Process Control",
    "Electrical Components",
    "Pneumatics",
  ]

  const services = [
    "Installation & Maintenance",
    "Electrical Board Maintenance",
    "Instrumentation",
    "EV Charger Installation",
    "Technical Consulting",
    "Emergency Repairs",
    "System Upgrades",
    "Training Programs",
  ]

  const quickLinks = [
    "About Us",
    "Our Team",
    "Certifications",
    "Case Studies",
    "Blog",
    "Career",
    "Privacy Policy",
    "Terms of Service",
  ]

  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="mb-4">
                {/* <Image
                  src="/images/ably-logo.png"
                  alt="ABLY ELECTRIC"
                  width={180}
                  height={60}
                  className="h-12 w-auto"
                /> */}
                <p className="text-gray-400 text-sm mt-2">The Trusted Power People</p>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Your trusted partner for electrical and mechanical solutions. We specialize in high-quality products and
                services for homes, businesses, and industries across India.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-red-400" />
                <div>
                  <div className="font-medium">+251 911 464023</div>
                  <div className="text-gray-400 text-sm">Sales & Support</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-red-400" />
                <div>
                  <div className="font-medium">info@ablyelectric.com</div>
                  <div className="text-gray-400 text-sm">General Inquiries</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-red-400" />
                <div>
                  <div className="font-medium">Addis Ababa, Ethiopia</div>
                  <div className="text-gray-400 text-sm">Head Office Location</div>
                </div>
              </div>
            </div>

          
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-6">Products</h3>
            <ul className="space-y-3">
              {productCategories.map((product, index) => (
                <li key={index}>
                  <Link
                    href={`/products/${product.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-gray-300 hover:text-red-400 transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={`/services/${service.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-gray-300 hover:text-red-400 transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-gray-300 hover:text-red-400 transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 ABLY ELECTRIC. All rights reserved. | The Trusted Power People
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/" className="text-gray-400 hover:text-white text-sm transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Scroll to Top Button - Only shows when scrolled down */}
      {showScrollTop && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={scrollToTop}
            className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-6 w-6" />
          </button>
        </div>
      )}
    </footer>
  )
}
