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

export default function ControlValvesPage() {
    const [selectedCategory, setSelectedCategory] = useState("All")

    const products = [
        {
            id: 1,
            name: "Electric Control Valve",
            category: "Electric",
            image: "/products/Fluid Systems/control valves/electric.jpg?height=300&width=400",
            rating: 4.8,
            description: "Precision electric control valve for automated flow regulation.",
            specifications: {
                type: "Electric",
                size: "DN15-DN100",
                pressure: "PN16",
                material: "Stainless Steel",
                voltage: "220V AC",
                warranty: "2 years",
            },
            features: [
                "Accurate flow control",
                "Fast response",
                "Low leakage",
                "Robust actuator",
                "Manual override",
                "Position feedback",
                "Easy installation",
                "Corrosion resistant",
            ],
            benefits: [
                "Automated process control",
                "Reduced maintenance",
                "Energy efficient",
            ],
            applications: [
                "HVAC systems",
                "Water treatment",
                "Industrial automation",
                "Process industries",
            ],
        },
        {
            id: 2,
            name: "Pneumatic Control Valve",
            category: "Pneumatic",
                image: "/products/Fluid Systems/control valves/pneumatic.jpg?height=300&width=400",
            rating: 4.7,
            description: "Reliable pneumatic control valve for precise air and fluid regulation.",
            specifications: {
                type: "Pneumatic",
                size: "DN20-DN150",
                pressure: "PN25",
                material: "Carbon Steel",
                actuator: "Spring return",
                warranty: "2 years",
            },
            features: [
                "High reliability",
                "Quick action",
                "Low friction",
                "Wide pressure range",
                "Compact actuator",
                "Fail-safe design",
                "Easy maintenance",
                "Long service life",
            ],
            benefits: [
                "Safe operation",
                "Consistent performance",
                "Low downtime",
            ],
            applications: [
                "Compressed air systems",
                "Chemical plants",
                "Oil & gas",
                "Manufacturing lines",
            ],
        },
        {
            id: 3,
            name: "Motorized Ball Valve",
            category: "Electric",
            image: "/products/Fluid Systems/control valves/motor.png?height=300&width=400",
            rating: 4.9,
            description: "Durable motorized ball valve for on/off and modulating control.",
            specifications: {
                type: "Ball Valve",
                size: "DN10-DN80",
                pressure: "PN16",
                material: "Brass",
                voltage: "24V/220V",
                warranty: "1 year",
            },
            features: [
                "Full bore design",
                "Low torque",
                "Quick installation",
                "IP67 actuator",
                "Manual override",
                "Visual position indicator",
                "Low power consumption",
                "Long lifespan",
            ],
            benefits: [
                "Minimal pressure drop",
                "Easy automation",
                "Reliable shutoff",
            ],
            applications: [
                "Building automation",
                "Water supply",
                "Irrigation",
                "Industrial processes",
            ],
        },
        {
            id: 4,
            name: "Pressure Reducing Valve",
            category: "Mechanical",
            image: "/products/Fluid Systems/control valves/pressure.jpg?height=300&width=400",
            rating: 4.6,
            description: "Mechanical valve for stable downstream pressure control.",
            specifications: {
                type: "Pressure Reducing",
                size: "DN15-DN100",
                pressure: "PN16",
                material: "Bronze",
                adjustment: "Spring loaded",
                warranty: "1 year",
            },
            features: [
                "Stable pressure output",
                "No external power",
                "Easy adjustment",
                "Robust body",
                "Low noise",
                "Maintenance free",
                "Wide range",
                "Reliable operation",
            ],
            benefits: [
                "Energy saving",
                "Simple installation",
                "Long-term stability",
            ],
            applications: [
                "Water distribution",
                "Fire protection",
                "Boiler systems",
                "Irrigation",
            ],
        },
    ]

    const categories = ["All", "Electric", "Pneumatic", "Mechanical"]

    const filteredProducts = products.filter(
        (product) => selectedCategory === "All" || product.category === selectedCategory,
    )

    const productBenefits = [
        {
            icon: <Activity className="h-8 w-8 text-red-600" />,
            title: "Precise Control",
            description: "Valves engineered for accurate flow and pressure regulation",
        },
        {
            icon: <BarChart2 className="h-8 w-8 text-red-600" />,
            title: "Reliable Performance",
            description: "Consistent operation in demanding industrial environments",
        },
        {
            icon: <Plug className="h-8 w-8 text-red-600" />,
            title: "Easy Integration",
            description: "Compatible with automation and control systems",
        },
        {
            icon: <Clock className="h-8 w-8 text-red-600" />,
            title: "Long Service Life",
            description: "Durable construction for extended use",
        },
    ]

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-black to-red-900 text-white py-16 lg:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <Badge className="bg-red-600 text-white mb-4">Control Valves</Badge>
                        <h1 className="text-4xl lg:text-6xl font-bold mb-6">Advanced Control Valves</h1>
                        <h2 className="text-2xl lg:text-3xl text-red-400 font-semibold mb-4">
                            Precision Flow & Pressure Management
                        </h2>
                        <p className="text-xl lg:text-2xl text-gray-300 mb-8">
                            Discover our range of electric, pneumatic, and mechanical control valves for efficient process automation.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Badge className="bg-red-600 text-white px-4 py-2">Electric Valves</Badge>
                            <Badge className="bg-red-600 text-white px-4 py-2">Pneumatic Valves</Badge>
                            <Badge className="bg-red-600 text-white px-4 py-2">Mechanical Valves</Badge>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 lg:py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Features & Benefits</h2>
                        <p className="text-xl text-gray-600">Enhance your systems with reliable and efficient control valves</p>
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
                                                    {product.specifications.type || product.specifications.size}
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
                    <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">Upgrade Your Flow Control Today!</h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Contact our team to find the right control valves for your application, with expert support and fast delivery.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                            <Phone className="mr-2 h-5 w-5" />
                            Explore Control Valves
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
