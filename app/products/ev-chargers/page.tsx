"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Zap, Battery, Wifi, Shield, Star, CheckCircle, Phone, ShoppingCart, Download } from "lucide-react"

export default function EVChargersPage() {
  const [selectedCharger, setSelectedCharger] = useState<any>(null)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const evChargers = [
    {
      id: 1,
      name: "ABLY Fast DC Charger 60kW",
      category: "DC Fast Charging",
      price: "₹4,50,000",
      image: "/placeholder.svg?height=300&width=400",
      rating: 4.8,
      description: "Fast, efficient charging solutions for electric vehicles with Level 2 & DC fast charging options",
      specifications: {
        power: "60kW",
        voltage: "200-1000V DC",
        current: "0-150A",
        connector: "CCS2, CHAdeMO",
        efficiency: "95%",
        protection: "IP54",
        temperature: "-30°C to +50°C",
        dimensions: "800 x 600 x 1800 mm",
        weight: "180 kg",
        warranty: "3 years",
      },
      features: [
        "Level 2 & DC fast charging options",
        "Smart connectivity for remote monitoring",
        "Weather-resistant design for outdoor use",
        "Reduces charging time for EV owners",
        "Supports sustainable energy solutions",
        "Emergency stop button",
        "LED status indicators",
        "Mobile app integration",
      ],
      benefits: [
        "Reduces charging time for EV owners",
        "Supports sustainable energy solutions",
        "Ideal for residential, commercial, and industrial applications",
      ],
      applications: ["Highway charging stations", "Commercial complexes", "Fleet charging", "Public parking"],
    },
    {
      id: 2,
      name: "ABLY Smart AC Charger 22kW",
      category: "AC Charging",
      price: "₹85,000",
      image: "/placeholder.svg?height=300&width=400",
      rating: 4.6,
      description: "Smart AC charger perfect for residential and workplace charging with efficient power conversion",
      specifications: {
        power: "22kW",
        voltage: "400V AC",
        current: "32A",
        connector: "Type 2",
        efficiency: "94%",
        protection: "IP65",
        temperature: "-25°C to +40°C",
        dimensions: "400 x 300 x 600 mm",
        weight: "25 kg",
        warranty: "2 years",
      },
      features: [
        "WiFi connectivity",
        "Smart scheduling",
        "Load balancing",
        "RFID access control",
        "Mobile app control",
        "Energy monitoring",
        "Compact design",
        "Easy installation",
      ],
      benefits: [
        "Reduces electricity costs",
        "Provides uninterrupted power supply",
        "Suitable for homes, offices, and industries",
      ],
      applications: ["Residential charging", "Office parking", "Hotels", "Retail locations"],
    },
    {
      id: 3,
      name: "ABLY Ultra Fast 150kW",
      category: "DC Fast Charging",
      price: "₹8,50,000",
      image: "/placeholder.svg?height=300&width=400",
      rating: 4.9,
      description: "Ultra-fast charging solution for high-traffic commercial locations",
      specifications: {
        power: "150kW",
        voltage: "200-1000V DC",
        current: "0-375A",
        connector: "CCS2, CHAdeMO, GB/T",
        efficiency: "96%",
        protection: "IP54",
        temperature: "-30°C to +50°C",
        dimensions: "1000 x 800 x 2000 mm",
        weight: "350 kg",
        warranty: "5 years",
      },
      features: [
        "Triple connector support",
        "Liquid cooling system",
        "Advanced safety features",
        "Cloud connectivity",
        "Payment integration",
        "Predictive maintenance",
        "High-resolution display",
        "Modular design",
      ],
      benefits: [
        "High-speed charging for fleet operations",
        "Optimized for commercial use",
        "Ideal for high-traffic locations",
      ],
      applications: ["Highway rest stops", "Shopping malls", "Fleet depots", "Public charging hubs"],
    },
    {
      id: 4,
      name: "ABLY Home Charger 7kW",
      category: "AC Charging",
      price: "₹35,000",
      image: "/placeholder.svg?height=300&width=400",
      rating: 4.5,
      description: "Compact home charging solution with smart features",
      specifications: {
        power: "7kW",
        voltage: "230V AC",
        current: "32A",
        connector: "Type 2",
        efficiency: "93%",
        protection: "IP65",
        temperature: "-20°C to +40°C",
        dimensions: "300 x 200 x 400 mm",
        weight: "8 kg",
        warranty: "2 years",
      },
      features: [
        "Plug and play setup",
        "WiFi enabled",
        "Smartphone app",
        "Timer function",
        "LED indicators",
        "Compact wall mount",
        "Safety certified",
        "Energy efficient",
      ],
      benefits: ["Easy installation at home", "Supports multiple EVs", "Ideal for small offices and guest houses"],
      applications: ["Home garages", "Apartment complexes", "Small offices", "Guest houses"],
    },
    {
      id: 5,
      name: "ABLY Portable Charger 3.5kW",
      category: "Portable",
      price: "₹18,000",
      image: "/placeholder.svg?height=300&width=400",
      rating: 4.3,
      description: "Portable charging solution for emergency and travel use",
      specifications: {
        power: "3.5kW",
        voltage: "230V AC",
        current: "16A",
        connector: "Type 2",
        efficiency: "92%",
        protection: "IP44",
        temperature: "-10°C to +40°C",
        dimensions: "350 x 150 x 100 mm",
        weight: "2.5 kg",
        warranty: "1 year",
      },
      features: [
        "Lightweight design",
        "Carry case included",
        "Multiple plug adapters",
        "LED status display",
        "Automatic safety cutoff",
        "Temperature monitoring",
        "Compact storage",
        "Universal compatibility",
      ],
      benefits: ["Emergency charging solution", "Suitable for travel use", "Ideal for temporary installations"],
      applications: ["Emergency charging", "Travel use", "Temporary installations", "Backup charging"],
    },
    {
      id: 6,
      name: "ABLY Fleet Charger 50kW",
      category: "DC Fast Charging",
      price: "₹3,75,000",
      image: "/placeholder.svg?height=300&width=400",
      rating: 4.7,
      description: "Optimized for fleet operations with multiple vehicle support",
      specifications: {
        power: "50kW",
        voltage: "200-750V DC",
        current: "0-125A",
        connector: "CCS2, CHAdeMO",
        efficiency: "95%",
        protection: "IP54",
        temperature: "-25°C to +45°C",
        dimensions: "700 x 500 x 1600 mm",
        weight: "150 kg",
        warranty: "3 years",
      },
      features: [
        "Fleet management system",
        "Queue management",
        "Usage analytics",
        "Maintenance alerts",
        "Multi-user access",
        "Cost optimization",
        "Robust construction",
        "24/7 monitoring",
      ],
      benefits: [
        "Efficient charging for multiple vehicles",
        "Streamlined fleet management",
        "Ideal for corporate fleets",
      ],
      applications: ["Bus depots", "Taxi fleets", "Delivery services", "Corporate fleets"],
    },
  ]

  const categories = ["All", "DC Fast Charging", "AC Charging", "Portable"]

  const filteredChargers = evChargers.filter(
    (charger) => selectedCategory === "All" || charger.category === selectedCategory,
  )

  const chargingBenefits = [
    {
      icon: <Zap className="h-8 w-8 text-red-600" />,
      title: "Fast Charging",
      description: "Rapid charging solutions from 3.5kW to 150kW power output",
    },
    {
      icon: <Wifi className="h-8 w-8 text-red-600" />,
      title: "Smart Connectivity",
      description: "WiFi enabled with mobile app control and remote monitoring",
    },
    {
      icon: <Shield className="h-8 w-8 text-red-600" />,
      title: "Safety Certified",
      description: "All chargers meet international safety standards and certifications",
    },
    {
      icon: <Battery className="h-8 w-8 text-red-600" />,
      title: "Energy Efficient",
      description: "High efficiency ratings up to 96% for optimal energy utilization",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-red-900 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-red-600 text-white mb-4">EV Charging Solutions</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">EV Chargers</h1>
            <h2 className="text-2xl lg:text-3xl text-red-400 font-semibold mb-4">
              Fast & Efficient Charging Solutions for Electric Vehicles
            </h2>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8">
              Our EV chargers provide reliable, high-speed charging for homes, businesses, and fleet operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-red-600 text-white px-4 py-2">Level 2 & DC Fast Charging</Badge>
              <Badge className="bg-red-600 text-white px-4 py-2">Smart Connectivity</Badge>
              <Badge className="bg-red-600 text-white px-4 py-2">Weather-Resistant Design</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Features & Benefits</h2>
            <p className="text-xl text-gray-600">Advanced technology meets reliable performance</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {chargingBenefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 p-4 bg-red-50 rounded-full w-fit">{benefit.icon}</div>
                  <h3 className="font-bold text-lg text-black mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-red-600 hover:bg-red-700"
                    : "border-red-600 text-red-600 hover:bg-red-50"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredChargers.map((charger, index) => (
              <Dialog key={charger.id}>
                <DialogTrigger asChild>
                  <Card className="cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={charger.image || "/placeholder.svg"}
                        alt={charger.name}
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-4 left-4 bg-red-600 text-white">{charger.category}</Badge>
                      <div className="absolute top-4 right-4 bg-white rounded-full px-2 py-1 flex items-center space-x-1">
                        <Star className="h-3 w-3 text-yellow-500 fill-current" />
                        <span className="text-xs font-medium">{charger.rating}</span>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{charger.name}</CardTitle>
                      <CardDescription>{charger.description}</CardDescription>
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-red-600">{charger.price}</div>
                        <Badge variant="secondary">{charger.specifications.power}</Badge>
                      </div>
                    </CardHeader>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">{charger.name}</DialogTitle>
                    <DialogDescription className="text-lg">{charger.description}</DialogDescription>
                  </DialogHeader>
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div>
                      <img
                        src={charger.image || "/placeholder.svg"}
                        alt={charger.name}
                        className="w-full h-64 object-cover rounded-lg mb-4"
                      />
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-3xl font-bold text-red-600">{charger.price}</div>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="font-medium">{charger.rating}</span>
                          <span className="text-gray-500">(124 reviews)</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <Button className="w-full bg-red-600 hover:bg-red-700">
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Request Quote
                        </Button>
                        <Button variant="outline" className="w-full border-red-600 text-red-600 hover:bg-red-50">
                          <Phone className="mr-2 h-4 w-4" />
                          Call for Pricing
                        </Button>
                        <Button variant="outline" className="w-full">
                          <Download className="mr-2 h-4 w-4" />
                          Download Datasheet
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-6">
                      {/* Features */}
                      <div>
                        <h4 className="font-bold text-lg mb-3">Features</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {charger.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-red-600" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Benefits */}
                      <div>
                        <h4 className="font-bold text-lg mb-3">Benefits</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {charger.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-red-600" />
                              <span className="text-sm">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Specifications */}
                      <div>
                        <h4 className="font-bold text-lg mb-3">Technical Specifications</h4>
                        <div className="grid grid-cols-2 gap-3 text-sm">
                          {Object.entries(charger.specifications).map(([key, value]) => (
                            <div key={key} className="flex justify-between border-b pb-1">
                              <span className="font-medium capitalize">{key.replace(/([A-Z])/g, " $1")}:</span>
                              <span>{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Applications */}
                      <div>
                        <h4 className="font-bold text-lg mb-3">Ideal Applications</h4>
                        <div className="flex flex-wrap gap-2">
                          {charger.applications.map((app, idx) => (
                            <Badge key={idx} variant="secondary" className="bg-red-100 text-red-800">
                              {app}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">Upgrade Your EV Charging Setup Today!</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact our experts to find the perfect EV charging solution for your needs with professional installation
            and support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              <Phone className="mr-2 h-5 w-5" />
              Explore EV Chargers
            </Button>
            <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Request Quote
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
