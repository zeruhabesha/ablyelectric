"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, ChevronDown, Menu, X, Zap, Battery, Cpu, Settings } from "lucide-react"

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleDropdownClick = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const closeDropdowns = () => {
    setActiveDropdown(null)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (!target.closest(".dropdown-container")) {
        closeDropdowns()
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [])

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-red-600 to-black text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center space-x-4 lg:space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="hidden md:inline">info@ablyelectric.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="hidden lg:inline">Mumbai, Maharashtra</span>
              </div>
            </div>
            <div className="text-sm hidden lg:block">
              <span className="animate-pulse">⚡ The Trusted Power People</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/images/ably-logo.png" alt="ABLY ELECTRIC" width={180} height={60} className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Home
            </Link>

            <Link href="/about" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              About Us
            </Link>

            {/* Services Dropdown */}
            <div className="relative dropdown-container">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-red-600 font-medium transition-colors"
                onClick={() => handleDropdownClick("services")}
              >
                <span>Services</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === "services" && (
                <div
                  className="absolute top-full left-0 mt-2 w-full bg-white rounded-lg shadow-xl border border-gray-200 py-6 z-50"
                  style={{ width: "calc(100vw - 2rem)", left: "calc(-50vw + 50% + 1rem)" }}
                >
                  <div className="px-6">
                    <h3 className="font-semibold text-black mb-4 text-center">Electrical & Mechanical Services</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <Link
                        href="/services/installation"
                        className="flex flex-col items-center p-4 text-center hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors"
                      >
                        <Settings className="h-8 w-8 mb-2 text-red-600" />
                        <span className="text-sm font-medium">Installation & Maintenance</span>
                      </Link>
                      <Link
                        href="/services/electrical-board"
                        className="flex flex-col items-center p-4 text-center hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors"
                      >
                        <Cpu className="h-8 w-8 mb-2 text-red-600" />
                        <span className="text-sm font-medium">Electrical Board Maintenance</span>
                      </Link>
                      <Link
                        href="/services/instrumentation"
                        className="flex flex-col items-center p-4 text-center hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors"
                      >
                        <Battery className="h-8 w-8 mb-2 text-red-600" />
                        <span className="text-sm font-medium">Instrumentation & Process Control</span>
                      </Link>
                      <Link
                        href="/services/ev-installation"
                        className="flex flex-col items-center p-4 text-center hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors"
                      >
                        <Zap className="h-8 w-8 mb-2 text-red-600" />
                        <span className="text-sm font-medium">EV Charger Installation</span>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Products Dropdown */}
            <div className="relative dropdown-container">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-red-600 font-medium transition-colors"
                onClick={() => handleDropdownClick("products")}
              >
                <span>Products</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === "products" && (
                <div
                  className="absolute top-full left-0 mt-2 w-full bg-white rounded-lg shadow-xl border border-gray-200 py-6 z-50"
                  style={{ width: "calc(100vw - 2rem)", left: "calc(-50vw + 50% + 1rem)" }}
                >
                  <div className="px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div>
                        <h3 className="font-semibold text-black mb-4">Power & Backup</h3>
                        <div className="space-y-2">
                          <Link
                            href="/products/ev-chargers"
                            className="block px-3 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded"
                          >
                            EV Chargers
                          </Link>
                          <Link
                            href="/products/ups"
                            className="block px-3 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded"
                          >
                            UPS Systems
                          </Link>
                          <Link
                            href="/products/inverters"
                            className="block px-3 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded"
                          >
                            Inverters
                          </Link>
                          <Link
                            href="/products/generators"
                            className="block px-3 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded"
                          >
                            Generators
                          </Link>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-black mb-4">Industrial Training</h3>
                        <div className="space-y-2">
                          <Link
                            href="/products/electrical-trainer"
                            className="block px-3 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded"
                          >
                            Electrical Trainers
                          </Link>
                          <Link
                            href="/products/process-control"
                            className="block px-3 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded"
                          >
                            Process Control
                          </Link>
                          <Link
                            href="/products/pneumatics"
                            className="block px-3 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded"
                          >
                            Pneumatics Trainer
                          </Link>
                          <Link
                            href="/products/components"
                            className="block px-3 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded"
                          >
                            Electronic Components
                          </Link>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-black mb-4">Electrical Components</h3>
                        <div className="space-y-2">
                          <Link
                            href="/products/capacitors"
                            className="block px-3 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded"
                          >
                            Capacitors & Diodes
                          </Link>
                          <Link
                            href="/products/transistors"
                            className="block px-3 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded"
                          >
                            Transistors & ICs
                          </Link>
                          <Link
                            href="/products/motors"
                            className="block px-3 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded"
                          >
                            Motors & Relays
                          </Link>
                          <Link
                            href="/products/sensors"
                            className="block px-3 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded"
                          >
                            Sensors & Displays
                          </Link>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-black mb-4">Fluid Systems</h3>
                        <div className="space-y-2">
                          <Link
                            href="/products/pumps"
                            className="block px-3 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded"
                          >
                            Industrial Pumps
                          </Link>
                          <Link
                            href="/products/hydraulics"
                            className="block px-3 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded"
                          >
                            Hydraulics Trainer
                          </Link>
                          <Link
                            href="/products/pneumatics-systems"
                            className="block px-3 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded"
                          >
                            Pneumatic Systems
                          </Link>
                          <Link
                            href="/products/valves"
                            className="block px-3 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded"
                          >
                            Control Valves
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/blog" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Blog
            </Link>

            <Link href="/contact" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
              Get Quote
            </Button>
            <Button className="bg-gradient-to-r from-red-600 to-black hover:from-red-700 hover:to-gray-900">
              Call Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:text-red-600 transition-colors"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="pt-4 space-y-4">
              <Link href="/" className="block text-gray-700 hover:text-red-600 font-medium transition-colors">
                Home
              </Link>
              <Link href="/about" className="block text-gray-700 hover:text-red-600 font-medium transition-colors">
                About Us
              </Link>

              {/* Mobile Services */}
              <div>
                <div className="text-gray-900 font-medium mb-2">Services</div>
                <div className="pl-4 space-y-2">
                  <Link href="/services/installation" className="block text-sm text-gray-600 hover:text-red-600">
                    Installation & Maintenance
                  </Link>
                  <Link href="/services/electrical-board" className="block text-sm text-gray-600 hover:text-red-600">
                    Electrical Board Maintenance
                  </Link>
                  <Link href="/services/instrumentation" className="block text-sm text-gray-600 hover:text-red-600">
                    Instrumentation & Process Control
                  </Link>
                  <Link href="/services/ev-installation" className="block text-sm text-gray-600 hover:text-red-600">
                    EV Charger Installation
                  </Link>
                </div>
              </div>

              {/* Mobile Products */}
              <div>
                <div className="text-gray-900 font-medium mb-2">Products</div>
                <div className="pl-4 space-y-2">
                  <Link href="/products/ev-chargers" className="block text-sm text-gray-600 hover:text-red-600">
                    EV Chargers
                  </Link>
                  <Link href="/products/ups" className="block text-sm text-gray-600 hover:text-red-600">
                    UPS Systems
                  </Link>
                  <Link href="/products/electrical-trainer" className="block text-sm text-gray-600 hover:text-red-600">
                    Electrical Trainers
                  </Link>
                  <Link href="/products/components" className="block text-sm text-gray-600 hover:text-red-600">
                    Electronic Components
                  </Link>
                </div>
              </div>

              <Link href="/blog" className="block text-gray-700 hover:text-red-600 font-medium transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="block text-gray-700 hover:text-red-600 font-medium transition-colors">
                Contact
              </Link>

              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-3">
                <Button variant="outline" className="w-full border-red-600 text-red-600 hover:bg-red-50">
                  Get Quote
                </Button>
                <Button className="w-full bg-gradient-to-r from-red-600 to-black hover:from-red-700 hover:to-gray-900">
                  Call Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
