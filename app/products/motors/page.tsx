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
import { Cpu, Settings, Activity, BarChart2, CheckCircle, Phone, ShoppingCart, Star, Zap, Power, Clock, Plug } from "lucide-react"

export default function MotorsRelaysPage() {
    const [selectedCategory, setSelectedCategory] = useState("All")

    const products = [
        {
            id: 1,
            name: "Three-Phase Induction Motor",
            category: "Motors",
            image: "/products/Electrical Components/motors & relays/three.jpg?height=300&width=400",
            rating: 4.8,
            description: "High-efficiency three-phase induction motors for industrial applications.",
            specifications: {
                power: "0.75kW - 75kW",
                voltage: "380V/415V AC",
                efficiency: "IE3 Premium",
                frame: "Aluminum/Cast Iron",
                protection: "IP55",
                warranty: "2 years",
            },
            features: [
                "Robust construction",
                "Low noise operation",
                "High starting torque",
                "Thermal protection",
                "Energy efficient",
                "Easy installation",
                "Wide voltage range",
                "Maintenance friendly",
            ],
            benefits: [
                "Reduced energy costs",
                "Reliable performance",
                "Long service life",
            ],
            applications: [
                "Pumps",
                "Fans & blowers",
                "Conveyors",
                "Compressors",
            ],
        },
        {
            id: 2,
            name: "Single-Phase Capacitor Start Motor",
            category: "Motors",
            image: "/products/Electrical Components/motors & relays/single.jpg?height=300&width=400",
            rating: 4.6,
            description: "Reliable single-phase motors for light industrial and commercial use.",
            specifications: {
                power: "0.18kW - 3kW",
                voltage: "220V/240V AC",
                efficiency: "IE2 High",
                frame: "Aluminum",
                protection: "IP44",
                warranty: "1 year",
            },
            features: [
                "Compact design",
                "High starting torque",
                "Thermal overload protection",
                "Smooth operation",
                "Easy wiring",
                "Low maintenance",
                "Quiet running",
                "Durable bearings",
            ],
            benefits: [
                "Ideal for small machinery",
                "Safe and reliable",
                "Cost effective",
            ],
            applications: [
                "Air compressors",
                "Small pumps",
                "Mixers",
                "Workshop tools",
            ],
        },
        {
            id: 3,
            name: "Electromechanical Power Relay",
            category: "Relays",
            image: "/products/Electrical Components/motors & relays/relay.jpg?height=300&width=400",
            rating: 4.7,
            description: "Versatile power relays for switching high current loads.",
            specifications: {
                contacts: "SPDT/DPDT",
                coilVoltage: "12V/24V/230V AC/DC",
                switchingCurrent: "10A/16A/30A",
                mounting: "DIN rail/PCB",
                protection: "IP20",
                warranty: "1 year",
            },
            features: [
                "High switching capacity",
                "Long electrical life",
                "LED indicator",
                "Finger-safe terminals",
                "Compact size",
                "Low coil consumption",
                "Wide voltage range",
                "Easy replacement",
            ],
            benefits: [
                "Safe operation",
                "Flexible installation",
                "Reliable switching",
            ],
            applications: [
                "Control panels",
                "HVAC systems",
                "Industrial automation",
                "Lighting circuits",
            ],
        },
        {
            id: 4,
            name: "Solid State Relay (SSR)",
            category: "Relays",
            image: "/products/Electrical Components/motors & relays/state.png?height=300&width=400",
            rating: 4.9,
            description: "Silent, fast-switching solid state relays for sensitive applications.",
            specifications: {
                loadVoltage: "24-480V AC",
                controlVoltage: "3-32V DC",
                switchingCurrent: "10A/25A/40A",
                isolation: "2500Vrms",
                mounting: "Panel/DIN rail",
                warranty: "2 years",
            },
            features: [
                "No moving parts",
                "Silent operation",
                "Fast response",
                "High isolation",
                "LED status indicator",
                "Shock resistant",
                "Long lifespan",
                "Zero-cross switching",
            ],
            benefits: [
                "Maintenance free",
                "Ideal for noise-sensitive areas",
                "High reliability",
            ],
            applications: [
                "Heater control",
                "Industrial ovens",
                "Lighting systems",
                "Motor switching",
            ],
        },
    ]

    const categories = ["All", "Motors", "Relays"]

    const filteredProducts = products.filter(
        (product) => selectedCategory === "All" || product.category === selectedCategory,
    )

    const productBenefits = [
        {
            icon: <Zap className="h-8 w-8 text-red-600" />,
            title: "High Efficiency",
            description: "Save energy and reduce costs with premium motors and relays",
        },
        {
            icon: <Power className="h-8 w-8 text-red-600" />,
            title: "Reliable Performance",
            description: "Built for continuous operation in demanding environments",
        },
        {
            icon: <Plug className="h-8 w-8 text-red-600" />,
            title: "Easy Integration",
            description: "Compatible with standard industrial systems and controls",
        },
        {
            icon: <Clock className="h-8 w-8 text-red-600" />,
            title: "Long Service Life",
            description: "Durable designs ensure years of trouble-free operation",
        },
    ]

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-black to-red-900 text-white py-16 lg:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <Badge className="bg-red-600 text-white mb-4">Motors & Relays</Badge>
                        <h1 className="text-4xl lg:text-6xl font-bold mb-6">Industrial Motors & Relays</h1>
                        <h2 className="text-2xl lg:text-3xl text-red-400 font-semibold mb-4">
                            Power, Control, and Reliability for Every Application
                        </h2>
                        <p className="text-xl lg:text-2xl text-gray-300 mb-8">
                            Explore our selection of motors and relays for efficient and dependable automation.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Badge className="bg-red-600 text-white px-4 py-2">Three-Phase Motors</Badge>
                            <Badge className="bg-red-600 text-white px-4 py-2">Solid State Relays</Badge>
                            <Badge className="bg-red-600 text-white px-4 py-2">High Performance</Badge>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 lg:py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Features & Benefits</h2>
                        <p className="text-xl text-gray-600">Empowering your operations with robust motors and relays</p>
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
                                                    {product.specifications.power || product.specifications.contacts || product.specifications.loadVoltage}
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
                    <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">Upgrade Your Motors & Relays Today!</h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Contact our team to find the right motor or relay for your needs, with expert support and fast delivery.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                            <Phone className="mr-2 h-5 w-5" />
                            Explore Solutions
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
