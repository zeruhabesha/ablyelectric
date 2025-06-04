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
import { Wind, Settings, Activity, BarChart2, CheckCircle, Phone, ShoppingCart, Star, Zap, Power, Clock, Plug } from "lucide-react"

export default function PneumaticsSystemsPage() {
    const [selectedCategory, setSelectedCategory] = useState("All")

    const products = [
        {
            id: 1,
            name: "Double Acting Pneumatic Cylinder",
            category: "Cylinders",
            image: "/placeholder.svg?height=300&width=400",
            rating: 4.8,
            description: "Durable double acting cylinders for precise linear motion in automation.",
            specifications: {
                bore: "32mm - 100mm",
                stroke: "25mm - 1000mm",
                pressure: "1.0MPa max",
                material: "Aluminum",
                mounting: "Multiple options",
                warranty: "1 year",
            },
            features: [
                "Smooth operation",
                "Adjustable cushioning",
                "Corrosion resistant",
                "High cycle life",
                "Easy installation",
                "Compact design",
                "Magnetic piston option",
                "Low maintenance",
            ],
            benefits: [
                "Reliable actuation",
                "Long service life",
                "Versatile mounting",
            ],
            applications: [
                "Packaging machines",
                "Material handling",
                "Automation lines",
                "Presses",
            ],
        },
        {
            id: 2,
            name: "Solenoid Valve 5/2 Way",
            category: "Valves",
            image: "/placeholder.svg?height=300&width=400",
            rating: 4.7,
            description: "High-performance solenoid valves for controlling pneumatic actuators.",
            specifications: {
                portSize: "1/8'' - 1/2'' BSP",
                voltage: "24V DC / 220V AC",
                pressure: "0.15 - 0.8MPa",
                body: "Aluminum",
                responseTime: "<50ms",
                warranty: "1 year",
            },
            features: [
                "Fast switching",
                "Low power consumption",
                "Manual override",
                "LED indicator",
                "Compact body",
                "Reliable sealing",
                "Wide voltage range",
                "Easy wiring",
            ],
            benefits: [
                "Precise control",
                "Energy efficient",
                "Quick installation",
            ],
            applications: [
                "Pneumatic cylinders",
                "Automation systems",
                "Sorting machines",
                "Conveyors",
            ],
        },
        {
            id: 3,
            name: "Air Preparation Unit (FRL)",
            category: "Air Preparation",
            image: "/placeholder.svg?height=300&width=400",
            rating: 4.9,
            description: "Filter, regulator, and lubricator units for clean and controlled air supply.",
            specifications: {
                portSize: "1/4'' - 1'' BSP",
                filtration: "5μm/40μm",
                pressureRange: "0.05 - 0.85MPa",
                bowlMaterial: "Polycarbonate/Metal",
                drain: "Manual/Auto",
                warranty: "1 year",
            },
            features: [
                "Modular design",
                "Easy maintenance",
                "Clear bowl for inspection",
                "Accurate pressure control",
                "High flow rate",
                "Corrosion resistant",
                "Integrated mounting",
                "Long filter life",
            ],
            benefits: [
                "Protects equipment",
                "Improves efficiency",
                "Reduces downtime",
            ],
            applications: [
                "Pneumatic tools",
                "Assembly lines",
                "Spray booths",
                "Robotics",
            ],
        },
        {
            id: 4,
            name: "Pneumatic Tubing & Fittings",
            category: "Accessories",
            image: "/placeholder.svg?height=300&width=400",
            rating: 4.6,
            description: "Flexible tubing and leak-proof fittings for all pneumatic connections.",
            specifications: {
                tubingMaterial: "PU/PA/PE",
                sizeRange: "4mm - 16mm OD",
                pressure: "Up to 1.0MPa",
                fittings: "Push-in/Threaded",
                temperature: "-20°C to 60°C",
                warranty: "6 months",
            },
            features: [
                "Flexible and durable",
                "Easy to cut and install",
                "Wide chemical compatibility",
                "Secure connections",
                "Reusable fittings",
                "Color coded options",
                "High pressure rating",
                "Lightweight",
            ],
            benefits: [
                "Quick setup",
                "Leak-free operation",
                "Adaptable to layouts",
            ],
            applications: [
                "Machine connections",
                "Robotics",
                "Packaging",
                "General automation",
            ],
        },
    ]

    const categories = ["All", "Cylinders", "Valves", "Air Preparation", "Accessories"]

    const filteredProducts = products.filter(
        (product) => selectedCategory === "All" || product.category === selectedCategory,
    )

    const productBenefits = [
        {
            icon: <Wind className="h-8 w-8 text-red-600" />,
            title: "Efficient Air Flow",
            description: "Optimize your automation with high-performance pneumatic components",
        },
        {
            icon: <Settings className="h-8 w-8 text-red-600" />,
            title: "Reliable Operation",
            description: "Engineered for continuous use in demanding environments",
        },
        {
            icon: <Plug className="h-8 w-8 text-red-600" />,
            title: "Easy Integration",
            description: "Compatible with standard pneumatic systems and controls",
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
                        <Badge className="bg-red-600 text-white mb-4">Pneumatic Systems</Badge>
                        <h1 className="text-4xl lg:text-6xl font-bold mb-6">Industrial Pneumatic Systems</h1>
                        <h2 className="text-2xl lg:text-3xl text-red-400 font-semibold mb-4">
                            Precision, Power, and Performance for Automation
                        </h2>
                        <p className="text-xl lg:text-2xl text-gray-300 mb-8">
                            Discover our range of pneumatic cylinders, valves, and accessories for efficient automation.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Badge className="bg-red-600 text-white px-4 py-2">Double Acting Cylinders</Badge>
                            <Badge className="bg-red-600 text-white px-4 py-2">Solenoid Valves</Badge>
                            <Badge className="bg-red-600 text-white px-4 py-2">FRL Units</Badge>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 lg:py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Features & Benefits</h2>
                        <p className="text-xl text-gray-600">Empowering your automation with robust pneumatic solutions</p>
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
                                                    {product.specifications.bore || product.specifications.portSize || product.specifications.tubingMaterial}
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
                    <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">Upgrade Your Pneumatic Systems Today!</h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Contact our team to find the right pneumatic solution for your needs, with expert support and fast delivery.
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
