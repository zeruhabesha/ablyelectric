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
import { Zap, Settings, Activity, BarChart2, CheckCircle, Phone, ShoppingCart, Star, Power, Clock, Plug } from "lucide-react"

export default function GeneratorsPage() {
    const [selectedCategory, setSelectedCategory] = useState("All")

    const products = [
        {
            id: 1,
            name: "Diesel Generator 10kVA",
            category: "Diesel",
      image: "/products/Power & Backup/generators/diesel.jpg?height=300&width=400",
            rating: 4.8,
            description: "Reliable 10kVA diesel generator for backup and prime power applications.",
            specifications: {
                power: "10kVA",
                voltage: "230V/400V",
                fuel: "Diesel",
                tankCapacity: "50L",
                noiseLevel: "68dB(A) @ 7m",
                warranty: "1 year",
            },
            features: [
                "Automatic voltage regulation",
                "Low fuel consumption",
                "Weatherproof canopy",
                "Digital control panel",
                "Overload protection",
                "Easy maintenance",
                "Long runtime",
                "Compact design",
            ],
            benefits: [
                "Reliable backup power",
                "Cost-effective operation",
                "Easy installation",
            ],
            applications: [
                "Offices",
                "Construction sites",
                "Shops",
                "Farms",
            ],
        },
        {
            id: 2,
            name: "Gasoline Generator 5kVA",
            category: "Gasoline",
      image: "/products/Power & Backup/generators/gasoline.png?height=300&width=400",
            rating: 4.6,
            description: "Portable 5kVA gasoline generator for home and outdoor use.",
            specifications: {
                power: "5kVA",
                voltage: "230V",
                fuel: "Gasoline",
                tankCapacity: "25L",
                noiseLevel: "72dB(A) @ 7m",
                warranty: "1 year",
            },
            features: [
                "Portable design",
                "Easy start system",
                "Low emissions",
                "Fuel gauge",
                "Circuit breaker",
                "AVR technology",
                "Lightweight",
                "Rubber feet for stability",
            ],
            benefits: [
                "Portable power",
                "User-friendly",
                "Low maintenance",
            ],
            applications: [
                "Homes",
                "Camping",
                "Events",
                "Workshops",
            ],
        },
        {
            id: 3,
            name: "Silent Inverter Generator 3kVA",
            category: "Inverter",
      image: "/products/Power & Backup/generators/silent.jpg?height=300&width=400",
            rating: 4.9,
            description: "Ultra-quiet inverter generator for sensitive electronics and mobile use.",
            specifications: {
                power: "3kVA",
                voltage: "230V",
                fuel: "Gasoline",
                tankCapacity: "15L",
                noiseLevel: "54dB(A) @ 7m",
                warranty: "2 years",
            },
            features: [
                "Pure sine wave output",
                "Eco-mode operation",
                "Parallel ready",
                "Low oil shutdown",
                "Lightweight",
                "USB charging ports",
                "Digital display",
                "Quiet operation",
            ],
            benefits: [
                "Safe for electronics",
                "Energy efficient",
                "Ultra-quiet",
            ],
            applications: [
                "Mobile offices",
                "Caravans",
                "Outdoor events",
                "Medical equipment",
            ],
        },
        {
            id: 4,
            name: "Industrial Standby Generator 100kVA",
            category: "Industrial",
      image: "/products/Power & Backup/generators/industrial.jpg?height=300&width=400",
            rating: 4.7,
            description: "Heavy-duty 100kVA standby generator for industrial and commercial facilities.",
            specifications: {
                power: "100kVA",
                voltage: "400V",
                fuel: "Diesel",
                tankCapacity: "250L",
                noiseLevel: "75dB(A) @ 7m",
                warranty: "2 years",
            },
            features: [
                "Automatic transfer switch",
                "Remote monitoring",
                "Heavy-duty alternator",
                "Large fuel tank",
                "Robust frame",
                "Advanced safety features",
                "Easy access panels",
                "Long service intervals",
            ],
            benefits: [
                "Continuous power supply",
                "Remote management",
                "Low downtime",
            ],
            applications: [
                "Factories",
                "Hospitals",
                "Data centers",
                "Large offices",
            ],
        },
    ]

    const categories = ["All", "Diesel", "Gasoline", "Inverter", "Industrial"]

    const filteredProducts = products.filter(
        (product) => selectedCategory === "All" || product.category === selectedCategory,
    )

    const productBenefits = [
        {
            icon: <Zap className="h-8 w-8 text-red-600" />,
            title: "Reliable Power",
            description: "Keep your operations running with dependable generator solutions",
        },
        {
            icon: <Settings className="h-8 w-8 text-red-600" />,
            title: "Advanced Technology",
            description: "Modern features for efficiency, safety, and ease of use",
        },
        {
            icon: <Plug className="h-8 w-8 text-red-600" />,
            title: "Easy Integration",
            description: "Compatible with various applications and automatic transfer switches",
        },
        {
            icon: <Clock className="h-8 w-8 text-red-600" />,
            title: "Long Service Life",
            description: "Durable construction for years of reliable operation",
        },
    ]

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-black to-red-900 text-white py-16 lg:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <Badge className="bg-red-600 text-white mb-4">Generators</Badge>
                        <h1 className="text-4xl lg:text-6xl font-bold mb-6">Industrial & Commercial Generators</h1>
                        <h2 className="text-2xl lg:text-3xl text-red-400 font-semibold mb-4">
                            Reliable Power Solutions for Every Need
                        </h2>
                        <p className="text-xl lg:text-2xl text-gray-300 mb-8">
                            Explore our range of diesel, gasoline, and inverter generators for backup and prime power.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Badge className="bg-red-600 text-white px-4 py-2">Diesel Generators</Badge>
                            <Badge className="bg-red-600 text-white px-4 py-2">Gasoline Generators</Badge>
                            <Badge className="bg-red-600 text-white px-4 py-2">Inverter Generators</Badge>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 lg:py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Features & Benefits</h2>
                        <p className="text-xl text-gray-600">Empowering your business with robust generator solutions</p>
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
                                                    {product.specifications.power || product.specifications.fuel}
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
                    <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">Get Reliable Power Today!</h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Contact our team to find the right generator for your needs, with expert support and fast delivery.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                            <Phone className="mr-2 h-5 w-5" />
                            Explore Generators
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
