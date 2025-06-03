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
import { Zap, Battery, Wifi, Shield, Star, CheckCircle, Phone, ShoppingCart } from "lucide-react"

export default function ElectricalTrainersPage() {
    const [selectedCategory, setSelectedCategory] = useState("All")

    const products = [
        {
            id: 1,
            name: "Basic Electrical Trainer Kit",
            category: "Fundamentals",
      image: "/placeholder.svg?height=300&width=400",
            rating: 4.8,
            description: "Comprehensive trainer for learning basic electrical circuits and wiring.",
            specifications: {
                modules: "Resistors, Capacitors, Switches, Lamps",
                voltage: "0-30V DC",
                current: "0-2A",
                power: "60W",
                dimensions: "400 x 300 x 120 mm",
                warranty: "2 years",
            },
            features: [
                "Hands-on circuit assembly",
                "Safe low-voltage operation",
                "Modular components",
                "Clear labeling for easy learning",
                "Short-circuit protection",
                "Portable design",
                "Includes experiment manual",
                "Durable construction",
            ],
            benefits: [
                "Ideal for beginners and students",
                "Enhances practical understanding",
                "Supports a wide range of experiments",
            ],
            applications: [
                "Technical colleges",
                "Vocational training",
                "STEM education",
                "Lab demonstrations",
            ],
        },
        {
            id: 2,
            name: "Electrical Machines Trainer",
            category: "Machines",
      image: "/placeholder.svg?height=300&width=400",
            rating: 4.7,
            description: "Trainer for studying DC and AC machines, transformers, and related experiments.",
            specifications: {
                modules: "DC Motor, AC Motor, Transformer",
                voltage: "220V AC, 12V DC",
                current: "0-5A",
                experiments: "15+",
                dimensions: "600 x 400 x 200 mm",
                warranty: "2 years",
            },
            features: [
                "Multiple machine modules",
                "Digital meters included",
                "Safety interlocks",
                "Heavy-duty terminals",
                "Experiment guides",
                "Overload protection",
                "Easy wiring system",
                "Industrial-grade components",
            ],
            benefits: [
                "Realistic machine operation",
                "Safe for classroom use",
                "Supports advanced experiments",
            ],
            applications: [
                "Engineering labs",
                "Polytechnic institutes",
                "Industrial training",
                "Research projects",
            ],
        },
        {
            id: 3,
            name: "Power Electronics Trainer",
            category: "Power Electronics",
      image: "/placeholder.svg?height=300&width=400",
            rating: 4.6,
            description: "Trainer for SCR, TRIAC, MOSFET, and power electronics circuit experiments.",
            specifications: {
                modules: "SCR, TRIAC, MOSFET, Diodes",
                voltage: "0-50V DC, 230V AC",
                current: "0-3A",
                experiments: "20+",
                dimensions: "500 x 350 x 150 mm",
                warranty: "2 years",
            },
            features: [
                "Replaceable modules",
                "Built-in function generator",
                "Oscilloscope interface",
                "Short-circuit protection",
                "Comprehensive manual",
                "LED indicators",
                "Test points provided",
                "Rugged enclosure",
            ],
            benefits: [
                "Facilitates advanced learning",
                "Safe and reliable operation",
                "Supports a variety of experiments",
            ],
            applications: [
                "Power electronics labs",
                "University courses",
                "Skill development centers",
                "Project work",
            ],
        },
        {
            id: 4,
            name: "Electrical Wiring Practice Board",
            category: "Wiring",
      image: "/placeholder.svg?height=300&width=400",
            rating: 4.9,
            description: "Practice board for learning residential and industrial wiring techniques.",
            specifications: {
                modules: "Switches, Sockets, MCBs, Lamps",
                voltage: "230V AC",
                current: "0-10A",
                boardSize: "800 x 600 mm",
                warranty: "2 years",
            },
            features: [
                "Real-world wiring scenarios",
                "Replaceable components",
                "Clear circuit diagrams",
                "Shock-proof design",
                "Easy to reconfigure",
                "Includes safety gloves",
                "Wall-mountable",
                "Instructional guide included",
            ],
            benefits: [
                "Hands-on wiring experience",
                "Improves troubleshooting skills",
                "Prepares for real installations",
            ],
            applications: [
                "ITI training",
                "Electrician courses",
                "Skill labs",
                "Workshops",
            ],
        },
    ]

    const categories = ["All", "Fundamentals", "Machines", "Power Electronics", "Wiring"]

    const filteredProducts = products.filter(
        (product) => selectedCategory === "All" || product.category === selectedCategory,
    )

    const productBenefits = [
        {
            icon: <Zap className="h-8 w-8 text-red-600" />,
            title: "Hands-On Learning",
            description: "Interactive trainers for practical skill development",
        },
        {
            icon: <Shield className="h-8 w-8 text-red-600" />,
            title: "Safe & Reliable",
            description: "Designed with safety features for worry-free training",
        },
        {
            icon: <Battery className="h-8 w-8 text-red-600" />,
            title: "Durable Build",
            description: "Robust construction for long-term institutional use",
        },
        {
            icon: <Wifi className="h-8 w-8 text-red-600" />,
            title: "Comprehensive Coverage",
            description: "Covers fundamentals to advanced electrical concepts",
        },
    ]

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-black to-red-900 text-white py-16 lg:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <Badge className="bg-red-600 text-white mb-4">Electrical Trainers</Badge>
                        <h1 className="text-4xl lg:text-6xl font-bold mb-6">Electrical Training Kits</h1>
                        <h2 className="text-2xl lg:text-3xl text-red-400 font-semibold mb-4">
                            Practical Solutions for Electrical Education
                        </h2>
                        <p className="text-xl lg:text-2xl text-gray-300 mb-8">
                            Explore our range of electrical trainers for hands-on learning in labs, colleges, and training centers.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Badge className="bg-red-600 text-white px-4 py-2">Basic & Advanced Trainers</Badge>
                            <Badge className="bg-red-600 text-white px-4 py-2">Machines & Power Electronics</Badge>
                            <Badge className="bg-red-600 text-white px-4 py-2">Safe & Durable</Badge>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 lg:py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Features & Benefits</h2>
                        <p className="text-xl text-gray-600">Empowering students with practical electrical skills</p>
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
                                                    {product.specifications.modules || product.specifications.boardSize}
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
                    <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">Get Reliable Electrical Trainers Today!</h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Contact our team to find the right training kits for your institution with expert support and fast delivery.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                            <Phone className="mr-2 h-5 w-5" />
                            Explore Trainers
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
