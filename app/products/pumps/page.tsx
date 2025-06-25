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
import { Zap, Battery, Wifi, Shield, Star, CheckCircle, Phone, ShoppingCart, Droplet, Truck, Wrench } from "lucide-react"

export default function IndustrialPumpsPage() {
    const [selectedCategory, setSelectedCategory] = useState("All")

    const products = [
        {
            id: 1,
            name: "Centrifugal Process Pump",
            category: "Centrifugal",
            image: "/products/Fluid Systems/industrial pumps/centrifugal.jpg?height=300&width=400",
            rating: 4.8,
            description: "High-efficiency centrifugal pump for industrial fluid transfer and process applications.",
            specifications: {
                flowRate: "10-500 m³/h",
                head: "10-150 m",
                material: "Stainless Steel/CI",
                power: "1-50 HP",
                inletOutlet: "DN25-DN200",
                warranty: "1 year",
            },
            features: [
                "Robust construction",
                "Corrosion-resistant materials",
                "Low maintenance",
                "High efficiency impeller",
                "Back pull-out design",
                "Mechanical seal",
                "Wide range of models",
                "Easy installation",
            ],
            benefits: [
                "Reliable for continuous operation",
                "Reduces downtime",
                "Energy efficient",
            ],
            applications: [
                "Chemical processing",
                "Water treatment",
                "Pharmaceuticals",
                "Food & beverage",
            ],
        },
        {
            id: 2,
            name: "Submersible Sewage Pump",
            category: "Submersible",
            image: "/products/Fluid Systems/industrial pumps/industrial.jpg?height=300&width=400",
            rating: 4.7,
            description: "Heavy-duty submersible pump for sewage, wastewater, and drainage applications.",
            specifications: {
                flowRate: "5-300 m³/h",
                head: "5-70 m",
                material: "Cast Iron/SS",
                power: "0.5-30 HP",
                solidHandling: "Up to 50 mm",
                warranty: "1 year",
            },
            features: [
                "Non-clog impeller",
                "Thermal overload protection",
                "Double mechanical seal",
                "Automatic float switch",
                "Corrosion-resistant body",
                "Easy to install",
                "Low noise operation",
                "Suitable for continuous duty",
            ],
            benefits: [
                "Handles solids efficiently",
                "Minimizes maintenance",
                "Long service life",
            ],
            applications: [
                "Municipal sewage",
                "Industrial effluent",
                "Construction dewatering",
                "Storm water drainage",
            ],
        },
        {
            id: 3,
            name: "Gear Oil Transfer Pump",
            category: "Gear",
            image: "/products/Fluid Systems/industrial pumps/oil.jpg?height=300&width=400",
            rating: 4.6,
            description: "Precision gear pump for oil, viscous liquids, and chemical transfer.",
            specifications: {
                flowRate: "0.5-50 m³/h",
                pressure: "Up to 10 bar",
                material: "Cast Iron/SS",
                power: "0.5-10 HP",
                viscosity: "Up to 100,000 cSt",
                warranty: "1 year",
            },
            features: [
                "Self-priming design",
                "Compact and rugged",
                "Handles high viscosity",
                "Low pulsation flow",
                "Easy maintenance",
                "Bi-directional operation",
                "Mechanical seal",
                "Customizable ports",
            ],
            benefits: [
                "Ideal for oil and chemical transfer",
                "Reduces leakage risk",
                "Consistent performance",
            ],
            applications: [
                "Oil refineries",
                "Chemical plants",
                "Lubrication systems",
                "Paint & ink transfer",
            ],
        },
        {
            id: 4,
            name: "Vertical Multistage Pump",
            category: "Multistage",
            image: "/products/Fluid Systems/industrial pumps/multistage.jpg?height=300&width=400",
            rating: 4.9,
            description: "High-pressure vertical multistage pump for water supply and boosting.",
            specifications: {
                flowRate: "1-120 m³/h",
                head: "20-250 m",
                material: "Stainless Steel",
                power: "1-30 HP",
                stages: "Up to 12",
                warranty: "1 year",
            },
            features: [
                "Space-saving vertical design",
                "High pressure output",
                "Corrosion-resistant",
                "Low vibration",
                "Easy to service",
                "Energy efficient",
                "Quiet operation",
                "Multiple stage options",
            ],
            benefits: [
                "Ideal for high-rise buildings",
                "Reliable water supply",
                "Long operational life",
            ],
            applications: [
                "Booster systems",
                "RO plants",
                "Industrial washing",
                "Fire fighting",
            ],
        },
    ]

    const categories = ["All", "Centrifugal", "Submersible", "Gear", "Multistage"]

    const filteredProducts = products.filter(
        (product) => selectedCategory === "All" || product.category === selectedCategory,
    )

    const productBenefits = [
        {
            icon: <Droplet className="h-8 w-8 text-red-600" />,
            title: "Efficient Fluid Handling",
            description: "Optimized for high flow and pressure with minimal energy use",
        },
        {
            icon: <Shield className="h-8 w-8 text-red-600" />,
            title: "Durable & Reliable",
            description: "Built with robust materials for long service life",
        },
        {
            icon: <Wrench className="h-8 w-8 text-red-600" />,
            title: "Low Maintenance",
            description: "Designed for easy servicing and reduced downtime",
        },
        {
            icon: <Truck className="h-8 w-8 text-red-600" />,
            title: "Versatile Applications",
            description: "Suitable for a wide range of industrial uses",
        },
    ]

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-black to-red-900 text-white py-16 lg:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <Badge className="bg-red-600 text-white mb-4">Industrial Pumps</Badge>
                        <h1 className="text-4xl lg:text-6xl font-bold mb-6">Industrial Pump Solutions</h1>
                        <h2 className="text-2xl lg:text-3xl text-red-400 font-semibold mb-4">
                            Reliable Pumps for Every Industry
                        </h2>
                        <p className="text-xl lg:text-2xl text-gray-300 mb-8">
                            Discover our range of industrial pumps for fluid transfer, process, and utility applications.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Badge className="bg-red-600 text-white px-4 py-2">Centrifugal & Submersible</Badge>
                            <Badge className="bg-red-600 text-white px-4 py-2">Gear & Multistage</Badge>
                            <Badge className="bg-red-600 text-white px-4 py-2">Durable & Efficient</Badge>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 lg:py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Features & Benefits</h2>
                        <p className="text-xl text-gray-600">Empowering industries with reliable pumping solutions</p>
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
                                                    {product.specifications.flowRate || product.specifications.stages}
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
                    <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">Get Reliable Industrial Pumps Today!</h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Contact our team to find the right pump for your application with expert support and fast delivery.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                            <Phone className="mr-2 h-5 w-5" />
                            Explore Pumps
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
