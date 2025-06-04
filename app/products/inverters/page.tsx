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
import { Cpu, Settings, Activity, BarChart2, CheckCircle, Phone, ShoppingCart, Star, Server, Clock, Plug } from "lucide-react"

export default function InvertersPage() {
    const [selectedCategory, setSelectedCategory] = useState("All")

    const products = [
        {
            id: 1,
            name: "Single Phase Solar Inverter",
            category: "Solar Inverters",
      image: "/products/Power & Backup/inverters/single.png?height=300&width=400",
            rating: 4.8,
            description: "Efficient single-phase inverter for residential solar power systems.",
            specifications: {
                capacity: "3 kW",
                inputVoltage: "120-450V DC",
                outputVoltage: "230V AC",
                efficiency: "97.5%",
                display: "LCD",
                warranty: "5 years",
            },
            features: [
                "MPPT technology",
                "Wi-Fi monitoring",
                "Fanless design",
                "IP65 protection",
                "Lightweight and compact",
                "Easy installation",
                "Remote diagnostics",
                "Low standby consumption",
            ],
            benefits: [
                "Maximizes solar yield",
                "Reliable and safe operation",
                "Low maintenance",
            ],
            applications: [
                "Homes",
                "Small offices",
                "Shops",
                "Remote cabins",
            ],
        },
        {
            id: 2,
            name: "Three Phase Grid-Tied Inverter",
            category: "Grid-Tied Inverters",
      image: "/products/Power & Backup/inverters/3phase.png?height=300&width=400",
            rating: 4.9,
            description: "High-performance three-phase inverter for commercial solar installations.",
            specifications: {
                capacity: "20 kW",
                inputVoltage: "200-850V DC",
                outputVoltage: "400V AC",
                efficiency: "98.2%",
                communication: "RS485, Wi-Fi",
                warranty: "5 years",
            },
            features: [
                "Multiple MPPTs",
                "String monitoring",
                "Anti-islanding protection",
                "Wide voltage range",
                "Natural cooling",
                "Remote firmware updates",
                "Robust enclosure",
                "Smart grid ready",
            ],
            benefits: [
                "Supports large installations",
                "Easy system expansion",
                "Meets utility requirements",
            ],
            applications: [
                "Factories",
                "Commercial buildings",
                "Solar farms",
                "Schools",
            ],
        },
        {
            id: 3,
            name: "Hybrid Inverter",
            category: "Hybrid Inverters",
      image: "/products/Power & Backup/inverters/hybrid.jpg?height=300&width=400",
            rating: 4.7,
            description: "Hybrid inverter for solar, battery, and grid integration.",
            specifications: {
                capacity: "5 kW",
                batteryVoltage: "48V",
                solarInput: "500V DC max",
                outputVoltage: "230V AC",
                efficiency: "97%",
                warranty: "3 years",
            },
            features: [
                "Seamless switching",
                "Battery management",
                "Time-of-use programming",
                "Mobile app control",
                "Generator input",
                "Pure sine wave output",
                "Integrated protections",
                "Quiet operation",
            ],
            benefits: [
                "Uninterrupted power supply",
                "Optimizes energy usage",
                "Reduces electricity bills",
            ],
            applications: [
                "Homes with backup",
                "Shops",
                "Small businesses",
                "Remote sites",
            ],
        },
        {
            id: 4,
            name: "Industrial Inverter",
            category: "Industrial Inverters",
      image: "/products/Power & Backup/inverters/industrial.jpg?height=300&width=400",
            rating: 4.6,
            description: "Heavy-duty inverter for industrial and large-scale applications.",
            specifications: {
                capacity: "100 kW",
                inputVoltage: "400-1000V DC",
                outputVoltage: "415V AC",
                cooling: "Active cooling",
                communication: "Ethernet, Modbus",
                warranty: "2 years",
            },
            features: [
                "High overload capacity",
                "Advanced grid support",
                "Remote monitoring",
                "Modular design",
                "Redundant systems",
                "Integrated surge protection",
                "Event logging",
                "Easy maintenance",
            ],
            benefits: [
                "Handles demanding loads",
                "Ensures system uptime",
                "Scalable for future needs",
            ],
            applications: [
                "Factories",
                "Data centers",
                "Hospitals",
                "Large solar plants",
            ],
        },
    ]

    const categories = ["All", "Solar Inverters", "Grid-Tied Inverters", "Hybrid Inverters", "Industrial Inverters"]

    const filteredProducts = products.filter(
        (product) => selectedCategory === "All" || product.category === selectedCategory,
    )

    const productBenefits = [
        {
            icon: <Plug className="h-8 w-8 text-red-600" />,
            title: "High Efficiency",
            description: "Advanced technology for maximum energy conversion",
        },
        {
            icon: <Settings className="h-8 w-8 text-red-600" />,
            title: "Robust & Reliable",
            description: "Industrial-grade components for long-term performance",
        },
        {
            icon: <Cpu className="h-8 w-8 text-red-600" />,
            title: "Smart Monitoring",
            description: "Remote diagnostics and real-time data access",
        },
        {
            icon: <BarChart2 className="h-8 w-8 text-red-600" />,
            title: "Flexible Solutions",
            description: "Options for homes, businesses, and industries",
        },
    ]

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-black to-red-900 text-white py-16 lg:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <Badge className="bg-red-600 text-white mb-4">Inverters</Badge>
                        <h1 className="text-4xl lg:text-6xl font-bold mb-6">Power Inverters</h1>
                        <h2 className="text-2xl lg:text-3xl text-red-400 font-semibold mb-4">
                            Reliable Energy Conversion for Every Need
                        </h2>
                        <p className="text-xl lg:text-2xl text-gray-300 mb-8">
                            Discover our range of inverters for solar, hybrid, and industrial applications—engineered for efficiency and durability.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Badge className="bg-red-600 text-white px-4 py-2">Solar Inverters</Badge>
                            <Badge className="bg-red-600 text-white px-4 py-2">Hybrid Inverters</Badge>
                            <Badge className="bg-red-600 text-white px-4 py-2">Industrial Inverters</Badge>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 lg:py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Features & Benefits</h2>
                        <p className="text-xl text-gray-600">Empowering your energy needs with advanced inverter solutions</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {productBenefits.map((benefit, index) => (
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
                        {filteredProducts.map((product) => (
                            <Dialog key={product.id}>
                                <DialogTrigger asChild>
                                    <Card className="cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                                        <div className="relative overflow-hidden rounded-t-lg">
                                            <img
                                                src={product.image || "/placeholder.svg"}
                                                alt={product.name}
                                                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                                            />
                                            <Badge className="absolute top-4 left-4 bg-red-600 text-white">{product.category}</Badge>
                                            <div className="absolute top-4 right-4 bg-white rounded-full px-2 py-1 flex items-center space-x-1">
                                                <Star className="h-3 w-3 text-yellow-500 fill-current" />
                                                <span className="text-xs font-medium">{product.rating}</span>
                                            </div>
                                        </div>
                                        <CardHeader>
                                            <CardTitle className="text-lg">{product.name}</CardTitle>
                                            <CardDescription>{product.description}</CardDescription>
                                            <div className="flex items-center justify-between">
                                                <Badge variant="secondary">
                                                    {product.specifications.capacity || product.specifications.batteryVoltage || product.specifications.cooling}
                                                </Badge>
                                            </div>
                                        </CardHeader>
                                    </Card>
                                </DialogTrigger>
                                <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
                                    <DialogHeader>
                                        <DialogTitle className="text-2xl">{product.name}</DialogTitle>
                                        <DialogDescription className="text-lg">{product.description}</DialogDescription>
                                    </DialogHeader>
                                    <div className="grid lg:grid-cols-2 gap-6">
                                        <div>
                                            <img
                                                src={product.image || "/placeholder.svg"}
                                                alt={product.name}
                                                className="w-full h-64 object-cover rounded-lg mb-4"
                                            />
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="flex items-center space-x-1">
                                                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                                                    <span className="font-medium">{product.rating}</span>
                                                    <span className="text-gray-500">(124 reviews)</span>
                                                </div>
                                            </div>
                                            <div className="space-y-3">
                                                <Button variant="outline" className="w-full border-red-600 text-red-600 hover:bg-red-50">
                                                    <Phone className="mr-2 h-4 w-4" />
                                                    Call for Pricing
                                                </Button>
                                            </div>
                                        </div>
                                        <div className="space-y-6">
                                            {/* Features */}
                                            <div>
                                                <h4 className="font-bold text-lg mb-3">Features</h4>
                                                <div className="grid grid-cols-1 gap-2">
                                                    {product.features.map((feature, idx) => (
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
                                                    {product.benefits.map((benefit, idx) => (
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
                                                    {Object.entries(product.specifications).map(([key, value]) => (
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
                                                    {product.applications.map((app, idx) => (
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
                    <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">Upgrade Your Power System Today!</h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Contact our team to find the right inverter for your application with expert support and fast delivery.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                            <Phone className="mr-2 h-5 w-5" />
                            Explore Inverters
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
