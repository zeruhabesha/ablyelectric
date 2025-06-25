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

export default function CapacitorsPage() {
    const [selectedCategory, setSelectedCategory] = useState("All")

    const products = [
        {
            id: 1,
            name: "Electrolytic Capacitor 100μF 50V",
            category: "Capacitors",
            image: "/products/Electrical Components/capacitors & diodes/electrolytic.webp?height=300&width=400",
            rating: 4.7,
            description: "High-quality electrolytic capacitor for power supply filtering and decoupling applications.",
            specifications: {
                capacitance: "100μF",
                voltage: "50V",
                tolerance: "±20%",
                type: "Electrolytic",
                temperature: "-40°C to +105°C",
                dimensions: "10 x 16 mm",
                leadSpacing: "5 mm",
                warranty: "1 year",
            },
            features: [
                "Long life and high reliability",
                "Low ESR",
                "Compact size",
                "RoHS compliant",
                "Suitable for power supplies",
                "Stable performance",
                "Easy PCB mounting",
                "Cost effective",
            ],
            benefits: [
                "Improved power supply stability",
                "Reduces voltage ripple",
                "Reliable for industrial and consumer electronics",
            ],
            applications: [
                "Power supplies",
                "Audio equipment",
                "Consumer electronics",
                "Industrial controls",
            ],
        },
        {
            id: 2,
            name: "Ceramic Capacitor 0.1μF 50V",
            category: "Capacitors",
            image: "/products/Electrical Components/capacitors & diodes/ceramic.webp?height=300&width=400",
            rating: 4.6,
            description: "General purpose ceramic capacitor for signal coupling and bypass applications.",
            specifications: {
                capacitance: "0.1μF",
                voltage: "50V",
                tolerance: "±10%",
                type: "Ceramic",
                temperature: "-55°C to +125°C",
                dimensions: "5 x 3 mm",
                leadSpacing: "2.5 mm",
                warranty: "1 year",
            },
            features: [
                "High frequency response",
                "Low loss",
                "Non-polarized",
                "Stable temperature characteristics",
                "Small size",
                "Lead-free",
                "Reliable operation",
                "Wide temperature range",
            ],
            benefits: [
                "Excellent for noise filtering",
                "Ideal for high-frequency circuits",
                "Long operational life",
            ],
            applications: [
                "Signal coupling",
                "Decoupling",
                "Oscillators",
                "Microcontroller circuits",
            ],
        },
        {
            id: 3,
            name: "Schottky Diode 1N5819",
            category: "Diodes",
            image: "/products/Electrical Components/capacitors & diodes/diode.jpeg?height=300&width=400",
            rating: 4.8,
            description: "Fast recovery Schottky diode for low voltage, high frequency applications.",
            specifications: {
                type: "Schottky",
                maxVoltage: "40V",
                maxCurrent: "1A",
                forwardVoltage: "0.6V",
                reverseCurrent: "1mA",
                package: "DO-41",
                temperature: "-65°C to +125°C",
                warranty: "1 year",
            },
            features: [
                "Low forward voltage drop",
                "Fast switching speed",
                "Low power loss",
                "High efficiency",
                "Compact DO-41 package",
                "RoHS compliant",
                "Reliable performance",
                "Easy to use",
            ],
            benefits: [
                "Improved efficiency in power circuits",
                "Reduces heat generation",
                "Ideal for switching power supplies",
            ],
            applications: [
                "Power rectification",
                "Reverse polarity protection",
                "Switching regulators",
                "Freewheeling diodes",
            ],
        },
        {
            id: 4,
            name: "Rectifier Diode 1N4007",
            category: "Diodes",
            image: "/products/Electrical Components/capacitors & diodes/rectifier.jpg?height=300&width=400",
            rating: 4.5,
            description: "Standard rectifier diode for general purpose AC to DC conversion.",
            specifications: {
                type: "Rectifier",
                maxVoltage: "1000V",
                maxCurrent: "1A",
                forwardVoltage: "1.1V",
                reverseCurrent: "5μA",
                package: "DO-41",
                temperature: "-65°C to +150°C",
                warranty: "1 year",
            },
            features: [
                "High surge current capability",
                "Reliable operation",
                "Widely used standard",
                "Low leakage current",
                "Easy PCB mounting",
                "RoHS compliant",
                "Long life",
                "Cost effective",
            ],
            benefits: [
                "Reliable AC to DC conversion",
                "Suitable for a wide range of applications",
                "Proven industry standard",
            ],
            applications: [
                "Power supplies",
                "Battery chargers",
                "Adapters",
                "General rectification",
            ],
        },
    ]

    const categories = ["All", "Capacitors", "Diodes"]

    const filteredProducts = products.filter(
        (product) => selectedCategory === "All" || product.category === selectedCategory,
    )

    const productBenefits = [
        {
            icon: <Zap className="h-8 w-8 text-red-600" />,
            title: "High Performance",
            description: "Reliable and efficient components for demanding electronic circuits",
        },
        {
            icon: <Shield className="h-8 w-8 text-red-600" />,
            title: "Quality Assured",
            description: "All products meet international quality and safety standards",
        },
        {
            icon: <Battery className="h-8 w-8 text-red-600" />,
            title: "Long Life",
            description: "Designed for durability and extended operational life",
        },
        {
            icon: <Wifi className="h-8 w-8 text-red-600" />,
            title: "Wide Applications",
            description: "Suitable for consumer, industrial, and automotive electronics",
        },
    ]

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-black to-red-900 text-white py-16 lg:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <Badge className="bg-red-600 text-white mb-4">Electronic Components</Badge>
                        <h1 className="text-4xl lg:text-6xl font-bold mb-6">Capacitors & Diodes</h1>
                        <h2 className="text-2xl lg:text-3xl text-red-400 font-semibold mb-4">
                            Reliable Components for Every Circuit
                        </h2>
                        <p className="text-xl lg:text-2xl text-gray-300 mb-8">
                            Explore our range of high-quality capacitors and diodes for all your electronic design needs.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Badge className="bg-red-600 text-white px-4 py-2">Electrolytic & Ceramic Capacitors</Badge>
                            <Badge className="bg-red-600 text-white px-4 py-2">Schottky & Rectifier Diodes</Badge>
                            <Badge className="bg-red-600 text-white px-4 py-2">Quality & Reliability</Badge>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 lg:py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Features & Benefits</h2>
                        <p className="text-xl text-gray-600">Trusted components for robust electronic designs</p>
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
                                                    {product.specifications.capacitance || product.specifications.type}
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
                    <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">Get Reliable Capacitors & Diodes Today!</h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Contact our team to find the right components for your project with expert support and fast delivery.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                            <Phone className="mr-2 h-5 w-5" />
                            Explore Components
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
