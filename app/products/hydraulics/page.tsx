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

export default function HydraulicsTrainerPage() {
    const [selectedCategory, setSelectedCategory] = useState("All")

    const products = [
        {
            id: 1,
            name: "Basic Hydraulics Trainer Kit",
            category: "Trainer Kits",
            image: "/hydraulics-trainer-basic.jpg",
            rating: 4.8,
            description: "Comprehensive kit for learning the fundamentals of hydraulic systems.",
            specifications: {
                modules: "Pump, Cylinder, Valves, Reservoir",
                powerSupply: "230V AC",
                maxPressure: "50 bar",
                flowRate: "10 LPM",
                frame: "Powder-coated steel",
                warranty: "1 year",
            },
            features: [
                "Hands-on experiments",
                "Industrial-grade components",
                "Leak-proof design",
                "Clear acrylic panels for visibility",
                "Quick-connect fittings",
                "Pressure gauges included",
                "Safety relief valve",
                "Easy to assemble",
            ],
            benefits: [
                "Ideal for technical education",
                "Safe and reliable operation",
                "Supports multiple experiments",
            ],
            applications: [
                "Engineering colleges",
                "Technical institutes",
                "Industrial training centers",
                "Skill development labs",
            ],
        },
        {
            id: 2,
            name: "Advanced Electro-Hydraulics Trainer",
            category: "Trainer Kits",
            image: "/hydraulics-trainer-advanced.jpg",
            rating: 4.9,
            description: "Trainer for advanced study of electro-hydraulic circuits and automation.",
            specifications: {
                modules: "Solenoid Valves, PLC Interface, Sensors",
                powerSupply: "230V AC",
                maxPressure: "70 bar",
                flowRate: "15 LPM",
                control: "PLC compatible",
                warranty: "2 years",
            },
            features: [
                "PLC integration",
                "Multiple sensor options",
                "Programmable experiments",
                "Digital and analog controls",
                "Industrial connectors",
                "Safety interlocks",
                "Mobile trolley design",
                "Comprehensive manuals",
            ],
            benefits: [
                "Simulates real-world automation",
                "Enhances troubleshooting skills",
                "Flexible for custom experiments",
            ],
            applications: [
                "Automation labs",
                "Vocational training",
                "Industrial R&D",
                "Skill upgradation programs",
            ],
        },
        {
            id: 3,
            name: "Hydraulic Cutaway Models",
            category: "Cutaway Models",
            image: "/hydraulics-cutaway.jpg",
            rating: 4.7,
            description: "Sectioned models of hydraulic components for visual learning.",
            specifications: {
                models: "Pump, Valve, Cylinder",
                material: "Aluminum/Steel",
                finish: "Powder-coated",
                mounting: "Tabletop",
                warranty: "1 year",
            },
            features: [
                "Detailed internal structure",
                "Color-coded parts",
                "Safe for handling",
                "Ideal for demonstrations",
                "Durable construction",
                "Compact size",
                "Easy to transport",
                "Maintenance-free",
            ],
            benefits: [
                "Enhances conceptual clarity",
                "Supports classroom teaching",
                "Visualizes component operation",
            ],
            applications: [
                "Classroom demonstrations",
                "Lab displays",
                "Technical seminars",
                "Student projects",
            ],
        },
        {
            id: 4,
            name: "Hydraulic Maintenance Trainer",
            category: "Maintenance",
            image: "/hydraulics-maintenance.jpg",
            rating: 4.6,
            description: "Trainer for hands-on practice in hydraulic system maintenance and troubleshooting.",
            specifications: {
                modules: "Pump, Filters, Hoses, Fittings",
                powerSupply: "230V AC",
                maxPressure: "60 bar",
                tools: "Standard toolkit included",
                warranty: "1 year",
            },
            features: [
                "Realistic fault simulation",
                "Replaceable components",
                "Comprehensive toolkit",
                "Step-by-step manuals",
                "Pressure and flow measurement",
                "Safety features",
                "Easy to reset faults",
                "Robust construction",
            ],
            benefits: [
                "Improves maintenance skills",
                "Safe learning environment",
                "Reduces downtime in industry",
            ],
            applications: [
                "Industrial training",
                "Technical workshops",
                "Maintenance staff training",
                "Skill certification programs",
            ],
        },
    ]

    const categories = ["All", "Trainer Kits", "Cutaway Models", "Maintenance"]

    const filteredProducts = products.filter(
        (product) => selectedCategory === "All" || product.category === selectedCategory,
    )

    const productBenefits = [
        {
            icon: <Cpu className="h-8 w-8 text-red-600" />,
            title: "Hands-On Learning",
            description: "Interactive trainers for practical understanding of hydraulics",
        },
        {
            icon: <Settings className="h-8 w-8 text-red-600" />,
            title: "Industry-Grade Components",
            description: "Durable and reliable parts for real-world simulation",
        },
        {
            icon: <Activity className="h-8 w-8 text-red-600" />,
            title: "Safe & Flexible",
            description: "Built-in safety and modular design for varied experiments",
        },
        {
            icon: <BarChart2 className="h-8 w-8 text-red-600" />,
            title: "Comprehensive Support",
            description: "Detailed manuals and expert assistance for educators",
        },
    ]

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-black to-red-900 text-white py-16 lg:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <Badge className="bg-red-600 text-white mb-4">Hydraulics Trainer</Badge>
                        <h1 className="text-4xl lg:text-6xl font-bold mb-6">Hydraulics Training Systems</h1>
                        <h2 className="text-2xl lg:text-3xl text-red-400 font-semibold mb-4">
                            Practical Education for Fluid Power Technology
                        </h2>
                        <p className="text-xl lg:text-2xl text-gray-300 mb-8">
                            Explore our range of hydraulics trainers for hands-on learning and skill development in fluid power systems.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Badge className="bg-red-600 text-white px-4 py-2">Basic & Advanced Kits</Badge>
                            <Badge className="bg-red-600 text-white px-4 py-2">Cutaway Models</Badge>
                            <Badge className="bg-red-600 text-white px-4 py-2">Maintenance Trainers</Badge>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 lg:py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Features & Benefits</h2>
                        <p className="text-xl text-gray-600">Empowering technical education with practical hydraulics solutions</p>
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
                                                    {product.specifications.modules || product.specifications.models || product.specifications.frame}
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
                    <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">Upgrade Your Training Lab Today!</h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Contact our team to find the right hydraulics trainer for your institution with expert support and fast delivery.
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
