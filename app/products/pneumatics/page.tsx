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

export default function PneumaticsTrainerPage() {
    const [selectedCategory, setSelectedCategory] = useState("All")

    const products = [
        {
            id: 1,
            name: "Basic Pneumatics Trainer Kit",
            category: "Educational Kits",
            image: "/pneumatics-basic.jpg",
            rating: 4.8,
            description: "Comprehensive trainer for learning fundamental pneumatic principles.",
            specifications: {
                modules: "10+ experiment modules",
                power: "Manual & electrical operation",
                pressureRange: "0-8 bar",
                panel: "Aluminum profile panel",
                warranty: "2 years",
            },
            features: [
                "Quick-connect fittings",
                "Transparent pneumatic components",
                "Integrated safety valves",
                "Pressure gauges",
                "Step-by-step manuals",
                "Portable design",
                "Hands-on experiments",
                "Durable construction",
            ],
            benefits: [
                "Ideal for classroom demonstrations",
                "Enhances practical skills",
                "Safe and easy to use",
            ],
            applications: [
                "Technical schools",
                "Engineering colleges",
                "Industrial training centers",
                "STEM labs",
            ],
        },
        {
            id: 2,
            name: "Advanced Electro-Pneumatics Trainer",
            category: "Electro-Pneumatics",
            image: "/pneumatics-advanced.jpg",
            rating: 4.9,
            description: "Trainer for advanced pneumatic and electro-pneumatic circuit design.",
            specifications: {
                modules: "20+ experiment modules",
                control: "PLC & relay logic",
                voltage: "24V DC",
                pressureRange: "0-10 bar",
                warranty: "2 years",
            },
            features: [
                "PLC integration",
                "Solenoid valves",
                "Sensor modules",
                "Simulation software",
                "Modular circuit boards",
                "Digital display",
                "Safety interlocks",
                "Comprehensive manuals",
            ],
            benefits: [
                "Supports complex automation training",
                "Real-world industrial simulation",
                "Flexible for custom experiments",
            ],
            applications: [
                "Automation labs",
                "Vocational institutes",
                "Industrial training",
                "Research centers",
            ],
        },
        {
            id: 3,
            name: "Portable Pneumatics Demonstrator",
            category: "Portable Trainers",
            image: "/pneumatics-portable.jpg",
            rating: 4.7,
            description: "Compact trainer for on-site pneumatic demonstrations and workshops.",
            specifications: {
                modules: "5+ experiment modules",
                weight: "8 kg",
                pressureRange: "0-6 bar",
                case: "Carrying case included",
                warranty: "1 year",
            },
            features: [
                "Lightweight and portable",
                "Essential pneumatic components",
                "Quick setup",
                "No external power required",
                "Clear tubing for visibility",
                "User-friendly layout",
                "Easy maintenance",
                "Workshop ready",
            ],
            benefits: [
                "Perfect for mobile training",
                "Quick demonstrations",
                "Cost-effective solution",
            ],
            applications: [
                "Field training",
                "Workshops",
                "Mobile labs",
                "Skill development programs",
            ],
        },
        {
            id: 4,
            name: "Industrial Pneumatics Training System",
            category: "Industrial Trainers",
            image: "/pneumatics-industrial.jpg",
            rating: 4.6,
            description: "Full-scale industrial pneumatic trainer for advanced skill development.",
            specifications: {
                modules: "30+ experiment modules",
                control: "PLC, HMI, sensors",
                pressureRange: "0-12 bar",
                frame: "Heavy-duty steel frame",
                warranty: "3 years",
            },
            features: [
                "Industrial-grade components",
                "Integrated PLC & HMI",
                "Multiple workstations",
                "Realistic fault simulation",
                "Advanced safety features",
                "Customizable layouts",
                "Remote monitoring",
                "Comprehensive documentation",
            ],
            benefits: [
                "Prepares for real industrial environments",
                "Supports group training",
                "Highly durable and scalable",
            ],
            applications: [
                "Factories",
                "Corporate training centers",
                "Technical universities",
                "Industrial R&D",
            ],
        },
    ]

    const categories = ["All", "Educational Kits", "Electro-Pneumatics", "Portable Trainers", "Industrial Trainers"]

    const filteredProducts = products.filter(
        (product) => selectedCategory === "All" || product.category === selectedCategory,
    )

    const productBenefits = [
        {
            icon: <Plug className="h-8 w-8 text-red-600" />,
            title: "Hands-On Learning",
            description: "Interactive modules for practical skill development",
        },
        {
            icon: <Settings className="h-8 w-8 text-red-600" />,
            title: "Industrial Relevance",
            description: "Components and circuits used in real-world automation",
        },
        {
            icon: <Cpu className="h-8 w-8 text-red-600" />,
            title: "Flexible Experimentation",
            description: "Supports basic to advanced pneumatic and electro-pneumatic circuits",
        },
        {
            icon: <BarChart2 className="h-8 w-8 text-red-600" />,
            title: "Comprehensive Support",
            description: "Detailed manuals and expert guidance for trainers and students",
        },
    ]

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-black to-red-900 text-white py-16 lg:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <Badge className="bg-red-600 text-white mb-4">Pneumatics Trainer</Badge>
                        <h1 className="text-4xl lg:text-6xl font-bold mb-6">Pneumatics Training Systems</h1>
                        <h2 className="text-2xl lg:text-3xl text-red-400 font-semibold mb-4">
                            Empowering Practical Skills in Automation & Control
                        </h2>
                        <p className="text-xl lg:text-2xl text-gray-300 mb-8">
                            Explore our range of pneumatics trainers for education, industry, and skill development—engineered for hands-on learning and real-world application.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Badge className="bg-red-600 text-white px-4 py-2">Educational Kits</Badge>
                            <Badge className="bg-red-600 text-white px-4 py-2">Electro-Pneumatics</Badge>
                            <Badge className="bg-red-600 text-white px-4 py-2">Industrial Trainers</Badge>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 lg:py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Features & Benefits</h2>
                        <p className="text-xl text-gray-600">Building automation expertise with advanced pneumatics training solutions</p>
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
                                                    {product.specifications.modules || product.specifications.control || product.specifications.case}
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
                        Contact our team to find the right pneumatics trainer for your institution with expert support and fast delivery.
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
